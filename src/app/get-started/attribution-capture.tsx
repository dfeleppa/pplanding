"use client";

import { useEffect, useRef } from "react";

const VISITOR_KEY = "pp_attribution_visitor_v1";
const MAX_AGE_MS = 90 * 24 * 60 * 60 * 1000;
const CAMPAIGN_KEYS = [
  "utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content",
  "utm_id", "utm_source_platform", "utm_creative_format", "utm_marketing_tactic",
] as const;
const CLICK_KEYS = ["gclid", "gbraid", "wbraid", "dclid", "fbclid", "msclkid", "ttclid"] as const;

export function AttributionCapture() {
  const captured = useRef(false);

  useEffect(() => {
    if (captured.current) return;
    captured.current = true;
    // Development previews never silently write test visits to production.
    const endpoint = process.env.NEXT_PUBLIC_ATTRIBUTION_CAPTURE_URL ||
      (process.env.NODE_ENV === "production"
        ? "https://app.planet-pooch.com/api/marketing/website-attribution/capture"
        : "");
    if (!endpoint) return;

    const url = new URL(window.location.href);
    const pick = (keys: readonly string[]) => Object.fromEntries(
      keys.flatMap((key) => {
        const value = url.searchParams.get(key)?.trim().slice(0, 500);
        return value ? [[key, value]] : [];
      }),
    );
    let visitorId = crypto.randomUUID();
    try {
      const raw = window.localStorage.getItem(VISITOR_KEY);
      if (raw) {
        try {
          const previous = JSON.parse(raw);
          if (typeof previous.id === "string" &&
              /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(previous.id) &&
              previous.expires_at > Date.now()) visitorId = previous.id;
        } catch { /* Replace corrupt browser identifiers. */ }
      }
      // Only the anonymous identifier lives in browser storage, not campaign data.
      window.localStorage.setItem(VISITOR_KEY, JSON.stringify({
        id: visitorId, expires_at: Date.now() + MAX_AGE_MS,
      }));
    } catch { /* Storage-blocked browsers can still record this visit. */ }

    let referrerOrigin = "";
    try {
      referrerOrigin = document.referrer ? new URL(document.referrer).origin : "";
    } catch { /* Ignore invalid referrers. */ }
    const payload = {
      event_id: crypto.randomUUID(),
      visitor_id: visitorId,
      landing_page: url.origin + url.pathname,
      referrer_origin: referrerOrigin,
      campaign: pick(CAMPAIGN_KEYS),
      click_ids: pick(CLICK_KEYS),
    };
    async function persist() {
      // Same event ID on retries makes persistence idempotent.
      for (let attempt = 0; attempt < 3; attempt++) {
        try {
          const response = await fetch(endpoint, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
            credentials: "omit",
            keepalive: true,
            signal: AbortSignal.timeout(8000),
          });
          if (response.ok) {
            try {
              window.localStorage.removeItem("pp_get_started_attribution_v1");
            } catch { /* Old local attribution is removed after successful handoff. */ }
            return;
          }
          if (response.status < 500) return;
        } catch { /* Retry transient network failures without blocking the form. */ }
        if (attempt < 2) await new Promise((resolve) => setTimeout(resolve, 1000 * (attempt + 1)));
      }
    }
    void persist();
    // No Lead, generate_lead, booking, or submission event is fired here.
  }, []);

  return null;
}
