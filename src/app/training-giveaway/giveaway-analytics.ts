"use client";

import { track } from "@vercel/analytics";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}
export type GiveawayEventName =
  | "giveaway_page_view"
  | "giveaway_cta_click"
  | "giveaway_form_start"
  | "giveaway_validation_failure"
  | "giveaway_entry_success"
  | "giveaway_duplicate_entry"
  | "giveaway_sms_consent";

export function trackGiveawayEvent(
  name: GiveawayEventName,
  properties: Record<string, string | number | boolean> = {},
) {
  track(name, properties);
  window.gtag?.("event", name, properties);
}
