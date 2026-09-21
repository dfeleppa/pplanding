import { buildLeadRequest, getLeadRouting, parseIntake } from "../../../lib/new-client";
import { randomUUID } from "node:crypto";

export const runtime = "nodejs";
const attempts = new Map<string, { count: number; until: number }>();
const API = "https://openapi.moego.pet/v1";
const DEFAULT_LEDGER_URL = "https://app.planet-pooch.com/api/marketing/website-attribution/submissions";

async function saveLedger(body: Record<string, unknown>, required = false) {
  const secret = process.env.NEW_CLIENT_LEDGER_SECRET?.trim();
  const url = process.env.NEW_CLIENT_LEDGER_URL?.trim() || DEFAULT_LEDGER_URL;
  if (!secret) {
    if (required) throw new Error("Submission ledger is not configured");
    return false;
  }
  let lastError = "Submission ledger unavailable";
  for (let attempt = 0; attempt < 3; attempt++) {
    try {
      const response = await fetch(url, { method: "POST", cache: "no-store",
        headers: { Authorization: `Bearer ${secret}`, "Content-Type": "application/json" },
        signal: AbortSignal.timeout(10000), body: JSON.stringify(body) });
      if (response.ok) return true;
      lastError = `Submission ledger status ${response.status}`;
      if (response.status < 500) break;
    } catch (error) { lastError = error instanceof Error ? error.message : lastError; }
  }
  if (required) throw new Error(lastError);
  console.error("New client ledger update failed:", lastError);
  return false;
}

export async function POST(request: Request) {
  const reply = (error: string, status: number) => Response.json({ error }, { status });
  if (request.headers.get("origin") !== new URL(request.url).origin) return reply("Please submit the form from our website.", 403);
  if (!request.headers.get("content-type")?.includes("application/json")) return reply("Invalid request.", 415);
  const raw = await request.text();
  if (raw.length > 20000) return reply("The form is too large.", 413);
  let input;
  try { input = JSON.parse(raw); } catch { return reply("Invalid request.", 400); }
  const suppliedId = typeof input?.submissionId === "string" && /^[\da-f]{8}(-[\da-f]{4}){3}-[\da-f]{12}$/i.test(input.submissionId)
    ? input.submissionId : randomUUID();
  try {
    await saveLedger({ action: "received", submissionId: suppliedId, formKey: "new-client-v1", payload: input,
      requestMetadata: { origin: request.headers.get("origin") ?? "", userAgent: request.headers.get("user-agent") ?? "",
        country: request.headers.get("x-vercel-ip-country") ?? "", receivedBy: "www.planet-pooch.com" } }, true);
  } catch {
    return reply("We couldn’t safely save your submission. Your details are still here—please try again or call our team.", 503);
  }
  const status = (value: string, httpStatus: number, message?: string, extra: Record<string, unknown> = {}) =>
    saveLedger({ action: "status", submissionId: suppliedId, status: value, httpStatus,
      message: message ?? null, metadata: extra });
  if (input?.website) {
    await status("SPAM_REJECTED", 400, "Honeypot field was populated");
    return reply("Unable to submit. Please call our team.", 400);
  }
  let data;
  try { data = parseIntake(input); } catch (error) {
    const message = (error as Error).message;
    await status("VALIDATION_FAILED", 400, message);
    return reply(message, 400);
  }
  await saveLedger({ action: "status", submissionId: suppliedId, status: "VALIDATED", httpStatus: 200,
    message: null, metadata: {}, normalized: { firstName: data.firstName, lastName: data.lastName,
      phone: data.phone, email: data.email, pets: data.pets, services: data.services,
      marketingConsent: data.marketingConsent, attribution: data.attribution } });
  const apiKey = process.env.MOEGO_API_KEY?.trim();
  const companyId = process.env.MOEGO_COMPANY_ID?.trim();
  const businessId = getLeadRouting(data.services).preferredBusinessId;
  if (!apiKey || !companyId) {
    await status("CONFIGURATION_FAILED", 503, "MoeGo integration is not configured");
    return reply("Online inquiries are temporarily unavailable. Please call our team so we can help you get started.", 503);
  }
  // Best-effort per-instance abuse protection; no personal data is logged.
  const now = Date.now();
  for (const [key, value] of attempts) if (value.until < now) attempts.delete(key);
  const key = request.headers.get("x-vercel-forwarded-for") ?? request.headers.get("x-forwarded-for") ?? "local";
  const attempt = attempts.get(key) ?? { count: 0, until: now + 60000 };
  if (++attempt.count > 5) {
    await status("RATE_LIMITED", 429, "Per-instance submission limit exceeded");
    return reply("Please wait a minute before trying again.", 429);
  }
  attempts.set(key, attempt);
  const headers = { Authorization: `Basic ${apiKey}`, "Content-Type": "application/json" };
  try {
    await status("MOEGO_LOOKUP_STARTED", 200);
    const lookup = await fetch(`${API}/leads:list`, { method: "POST", headers, cache: "no-store",
      signal: AbortSignal.timeout(12000), body: JSON.stringify({ companyId, businessIds: [businessId], pagination: { pageSize: 100, pageToken: "1" },
        filter: { mainPhoneNumber: data.phone } }) });
    if (!lookup.ok) throw new Error(`MoeGo lookup status ${lookup.status}`);
    const existing = await lookup.json();
    const matched = (existing.leads ?? []).filter((lead: { phone?: string }) => lead.phone?.replace(/\D/g, "").slice(-10) === data.phone.slice(-10));
    if (matched.length) {
      // Lead responses omit pet notes; query the notes endpoint explicitly.
      for (const matchedLead of matched) {
        const pet = matchedLead.pets?.[0];
        if (!pet?.id || !pet.customerId) continue;
        const notesResponse = await fetch(`${API}/customers/${encodeURIComponent(pet.customerId)}/pets/${encodeURIComponent(pet.id)}/notes:list`, {
          method: "POST", headers, cache: "no-store", signal: AbortSignal.timeout(12000),
          body: JSON.stringify({ customerId: pet.customerId, id: pet.id, pagination: { pageSize: 100, pageToken: "1" } }),
        });
        if (!notesResponse.ok) throw new Error(`MoeGo notes lookup status ${notesResponse.status}`);
        const notes = await notesResponse.json();
        if (notes.notes?.some((note: { content?: string }) => note.content?.includes(`Submission: ${data.submissionId}`))) {
          const saved = await saveLedger({ action: "status", submissionId: suppliedId, status: "SYNCED", httpStatus: 200,
            message: null, metadata: { result: "idempotent_retry" }, moegoLeadId: matchedLead.id ?? null,
            moegoCustomerId: pet.customerId, moegoPetId: pet.id }, true).catch(() => false);
          if (!saved) return reply("Your information reached MoeGo, but we couldn’t confirm our backup copy. Please try again.", 503);
          return Response.json({ ok: true, eventId: data.submissionId });
        }
      }
      // Public callers cannot overwrite an existing person's profile by knowing their phone.
      await status("MOEGO_DUPLICATE_CONFLICT", 409, "An existing MoeGo lead uses this phone number", { matchedLeadCount: matched.length });
      return reply("Please call our team to complete this inquiry so we can keep your information together.", 409);
    }
    await status("MOEGO_CREATE_STARTED", 200);
    const payload = buildLeadRequest(data, companyId);
    const response = await fetch(`${API}/leads`, { method: "POST", headers, cache: "no-store",
      signal: AbortSignal.timeout(15000), body: JSON.stringify(payload) });
    if (!response.ok) throw new Error(`MoeGo create status ${response.status}`);
    const lead = await response.json();
    if (!lead.id) throw new Error("MoeGo did not confirm a saved lead");
    if (lead.pets?.length !== data.pets.length || data.pets.some((pet, i) => lead.pets[i].name !== pet.name || lead.pets[i].breed !== pet.breed)) {
      throw new Error("MoeGo did not confirm all dog details");
    }
    const firstPet = lead.pets[0];
    if (!firstPet.id || !firstPet.customerId) throw new Error("MoeGo did not return pet identifiers");
    await saveLedger({ action: "status", submissionId: suppliedId, status: "MOEGO_LEAD_CREATED", httpStatus: 200,
      message: null, metadata: {}, moegoLeadId: lead.id, moegoCustomerId: firstPet.customerId, moegoPetId: firstPet.id });
    const note = payload.lead.pets[0].notes[0];
    const noteResponse = await fetch(`${API}/customers/${encodeURIComponent(firstPet.customerId)}/pets/${encodeURIComponent(firstPet.id)}/notes`, {
      method: "POST", headers, cache: "no-store", signal: AbortSignal.timeout(12000),
      body: JSON.stringify({ customerId: firstPet.customerId, id: firstPet.id, notes: [note] }),
    });
    if (!noteResponse.ok) throw new Error(`MoeGo notes save status ${noteResponse.status}`);
    const savedNotes = await noteResponse.json();
    if (!savedNotes.notes?.some((saved: { content?: string }) => saved.content === note.content)) throw new Error("MoeGo did not confirm inquiry details");
    await status("MOEGO_NOTE_SAVED", 200);
    const ledgerConfirmed = await saveLedger({ action: "status", submissionId: suppliedId, status: "SYNCED", httpStatus: 200,
      message: null, metadata: { result: "created" }, moegoLeadId: lead.id,
      moegoCustomerId: firstPet.customerId, moegoPetId: firstPet.id }, true).catch(() => false);
    if (!ledgerConfirmed) return reply("Your information reached MoeGo, but we couldn’t confirm our backup copy. Please try again.", 503);
    return Response.json({ ok: true, eventId: data.submissionId });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Integration failed";
    await status("MOEGO_FAILED", 502, message);
    console.error("New client submission:", message);
    return reply("We couldn’t confirm your submission. Please try again or call our team. Your details are still here.", 502);
  }
}
