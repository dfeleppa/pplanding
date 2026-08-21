import { SITE } from "./site";

const placeholder = (label: string) => `[${label}]`;

function optionalEnv(name: string) {
  const value = process.env[name]?.trim();
  return value || null;
}

export const GIVEAWAY = {
  id: "training-package-giveaway",
  name: "Planet Pooch Dog Training Giveaway",
  prize: {
    name: "One 4-Class Planet Pooch Dog Training Package",
    shortName: "4-Class Dog Training Package",
    arv: 800,
    classes: 4,
  },
  sponsor: {
    // The Inc. name and address already appear in the site's legal content.
    legalName: "Planet Pooch Pet Resort Inc.",
    address: `${SITE.address.street}, ${SITE.address.locality}, ${SITE.address.region} ${SITE.address.postalCode}`,
    email: SITE.email,
    phone: SITE.phone.display,
  },
  schedule: {
    startAt: optionalEnv("GIVEAWAY_START_AT") ?? "2026-09-01T10:00:00-04:00",
    endAt: optionalEnv("GIVEAWAY_END_AT") ?? "2026-09-30T10:00:00-04:00",
  },
  eligibleArea: optionalEnv("GIVEAWAY_ELIGIBLE_AREA") ?? "Nassau County, New York",
  winnerResponseDeadline:
    optionalEnv("GIVEAWAY_WINNER_RESPONSE_DEADLINE") ??
    "one week (7 calendar days) after the first notification attempt",
  prizeExpiration:
    optionalEnv("GIVEAWAY_PRIZE_EXPIRATION") ??
    "all four classes must be used by December 31, 2026, subject to Planet Pooch's scheduling availability",
  transferability:
    optionalEnv("GIVEAWAY_TRANSFERABILITY") ?? "the prize is nontransferable",
  rulesVersion:
    optionalEnv("GIVEAWAY_RULES_VERSION") ?? "Version 1.0 — August 21, 2026",
  entryTag: "giveaway-training-package-entry",
  smsConsentTag: "giveaway-training-package-sms-opt-in",
  source: "Instagram — training giveaway",
} as const;

export const GIVEAWAY_DISPLAY = {
  start: formatGiveawayDate(GIVEAWAY.schedule.startAt, "START DATE AND TIME ET"),
  end: formatGiveawayDate(GIVEAWAY.schedule.endAt, "END DATE AND TIME ET"),
  eligibleArea: GIVEAWAY.eligibleArea ?? placeholder("ELIGIBLE SERVICE AREA"),
  winnerResponseDeadline:
    GIVEAWAY.winnerResponseDeadline ?? placeholder("WINNER RESPONSE DEADLINE"),
  prizeExpiration: GIVEAWAY.prizeExpiration ?? placeholder("PRIZE EXPIRATION / USE-BY"),
  transferability: GIVEAWAY.transferability ?? placeholder("PRIZE TRANSFERABILITY RULE"),
  rulesVersion: GIVEAWAY.rulesVersion ?? placeholder("OFFICIAL RULES VERSION"),
} as const;

function formatGiveawayDate(value: string | null, missingLabel: string) {
  if (!value) return placeholder(missingLabel);
  const date = new Date(value);
  if (Number.isNaN(date.valueOf())) return placeholder(missingLabel);
  return new Intl.DateTimeFormat("en-US", {
    timeZone: "America/New_York",
    month: "long",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    timeZoneName: "short",
  })
    .format(date)
    .replace(/\bE[DS]T\b/, "ET");
}

export const GIVEAWAY_MISSING_BUSINESS_VALUES = [
  !GIVEAWAY.schedule.startAt && "start date/time",
  !GIVEAWAY.schedule.endAt && "end date/time",
  !GIVEAWAY.eligibleArea && "eligible geographic/service area",
  !GIVEAWAY.winnerResponseDeadline && "winner response deadline",
  !GIVEAWAY.prizeExpiration && "prize expiration/use-by rule",
  !GIVEAWAY.transferability && "prize transferability rule",
  !GIVEAWAY.rulesVersion && "Official Rules version",
].filter(Boolean) as string[];

export const GIVEAWAY_BUSINESS_CONFIGURED = GIVEAWAY_MISSING_BUSINESS_VALUES.length === 0;

export type EntryPeriodState = "unconfigured" | "upcoming" | "open" | "closed";

export function getEntryPeriodState(now = new Date()): EntryPeriodState {
  if (!GIVEAWAY.schedule.startAt || !GIVEAWAY.schedule.endAt) return "unconfigured";

  const start = new Date(GIVEAWAY.schedule.startAt);
  const end = new Date(GIVEAWAY.schedule.endAt);
  if (Number.isNaN(start.valueOf()) || Number.isNaN(end.valueOf()) || end <= start) {
    return "unconfigured";
  }
  if (now < start) return "upcoming";
  if (now > end) return "closed";
  return "open";
}
