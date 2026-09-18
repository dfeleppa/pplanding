import { buildLeadRequest, getLeadRouting, parseIntake } from "../../../lib/new-client";

export const runtime = "nodejs";
const attempts = new Map<string, { count: number; until: number }>();
const API = "https://openapi.moego.pet/v1";

export async function POST(request: Request) {
  const reply = (error: string, status: number) => Response.json({ error }, { status });
  if (request.headers.get("origin") !== new URL(request.url).origin) return reply("Please submit the form from our website.", 403);
  if (!request.headers.get("content-type")?.includes("application/json")) return reply("Invalid request.", 415);
  const raw = await request.text();
  if (raw.length > 20000) return reply("The form is too large.", 413);
  let input;
  try { input = JSON.parse(raw); } catch { return reply("Invalid request.", 400); }
  if (input?.website) return reply("Unable to submit. Please call our team.", 400);
  let data;
  try { data = parseIntake(input); } catch (error) { return reply((error as Error).message, 400); }
  const apiKey = process.env.MOEGO_API_KEY?.trim();
  const companyId = process.env.MOEGO_COMPANY_ID?.trim();
  const businessId = getLeadRouting(data.services).preferredBusinessId;
  if (!apiKey || !companyId) return reply("Online inquiries are temporarily unavailable. Please call our team so we can help you get started.", 503);
  // Best-effort per-instance abuse protection; no personal data is logged.
  const now = Date.now();
  for (const [key, value] of attempts) if (value.until < now) attempts.delete(key);
  const key = request.headers.get("x-vercel-forwarded-for") ?? request.headers.get("x-forwarded-for") ?? "local";
  const attempt = attempts.get(key) ?? { count: 0, until: now + 60000 };
  if (++attempt.count > 5) return reply("Please wait a minute before trying again.", 429);
  attempts.set(key, attempt);
  const headers = { Authorization: `Basic ${apiKey}`, "Content-Type": "application/json" };
  try {
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
          return Response.json({ ok: true, eventId: data.submissionId });
        }
      }
      // Public callers cannot overwrite an existing person's profile by knowing their phone.
      return reply("Please call our team to complete this inquiry so we can keep your information together.", 409);
    }
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
    const note = payload.lead.pets[0].notes[0];
    const noteResponse = await fetch(`${API}/customers/${encodeURIComponent(firstPet.customerId)}/pets/${encodeURIComponent(firstPet.id)}/notes`, {
      method: "POST", headers, cache: "no-store", signal: AbortSignal.timeout(12000),
      body: JSON.stringify({ customerId: firstPet.customerId, id: firstPet.id, notes: [note] }),
    });
    if (!noteResponse.ok) throw new Error(`MoeGo notes save status ${noteResponse.status}`);
    const savedNotes = await noteResponse.json();
    if (!savedNotes.notes?.some((saved: { content?: string }) => saved.content === note.content)) throw new Error("MoeGo did not confirm inquiry details");
    return Response.json({ ok: true, eventId: data.submissionId });
  } catch (error) {
    console.error("New client submission:", error instanceof Error ? error.message : "Integration failed");
    return reply("We couldn’t confirm your submission. Please try again or call our team. Your details are still here.", 502);
  }
}
