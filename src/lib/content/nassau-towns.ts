export type NassauSubRegion = "north-shore" | "central-nassau" | "south-shore";

export type NassauTownPage = {
  slug: string;
  town: string;
  subRegion: NassauSubRegion;
  metaTitle: string;
  metaDescription: string;
  introVariant: number; // 0-5
  nearbyTowns: string[]; // slugs of 3-4 nearby towns
  distanceFromResort?: string;
};

export const REGION_LABELS: Record<NassauSubRegion, string> = {
  "north-shore": "North Shore",
  "central-nassau": "Central Nassau",
  "south-shore": "South Shore",
};

// ── Meta description templates (rotated via introVariant) ──────────
const metaTemplates: Array<(town: string, distance?: string) => string> = [
  (t, d) =>
    `Planet Pooch offers mobile grooming, daycare, boarding & training for dogs in ${t}, NY.${d ? ` Just ${d} from our Franklin Square resort.` : ""} Book today!`,
  (t, d) =>
    `Professional dog grooming, daycare, boarding and training serving ${t}, NY.${d ? ` Only ${d} from Planet Pooch Pet Resort.` : ""} Schedule now.`,
  (t, d) =>
    `Looking for dog services in ${t}? Planet Pooch provides mobile grooming, daycare, boarding & training across Nassau County.${d ? ` ${d} from our resort.` : ""}`,
  (t, d) =>
    `${t}, NY dog owners trust Planet Pooch for mobile grooming, daycare, overnight boarding and training.${d ? ` We're just ${d} away.` : ""} Call or book online.`,
  (t, d) =>
    `From mobile grooming to overnight boarding, Planet Pooch serves ${t} dogs with love.${d ? ` Our Franklin Square resort is ${d} from ${t}.` : ""} Get started today.`,
  (t, d) =>
    `Dog grooming, daycare, boarding & training in ${t}, NY — trusted by Nassau County families since 2014.${d ? ` ${d} from our resort.` : ""} Book now.`,
];

// ── Intro paragraph templates (rotated via introVariant) ────────────
export const introTemplates: Array<(town: string, distance?: string) => string> = [
  (t, d) =>
    `Planet Pooch is proud to serve dog owners in ${t}, NY with a full range of professional pet services. Whether your pup needs a spa-quality grooming session at your door, a fun-filled day of supervised play, overnight boarding, or compassionate training, we've got you covered.${d ? ` Our Franklin Square resort is just ${d} from ${t}.` : ""}`,
  (t, d) =>
    `Convenience meets quality for ${t} pet parents. Our mobile grooming van comes straight to your driveway, and our Franklin Square resort${d ? ` — just ${d} away —` : ""} offers daycare, boarding, and training in a safe, enriching environment. Every dog gets the attentive, personalized care they deserve.`,
  (t, d) =>
    `${t} families choose Planet Pooch because we treat every dog like family. From luxury mobile grooming to structured daycare, comfortable overnight boarding, and results-driven training, our services are designed for dogs who deserve the best.${d ? ` We're only ${d} from ${t}.` : ""}`,
  (t, d) =>
    `Your dog deserves exceptional care, and ${t} is well within our service area. Planet Pooch brings award-winning mobile grooming to your home and offers daycare, boarding, and training at our modern Franklin Square facility.${d ? ` Just a quick ${d} drive from ${t}.` : ""}`,
  (t, d) =>
    `Since 2014, Planet Pooch has been a trusted name for dog services across Nassau County — and ${t} is no exception. Our team of dedicated professionals provides mobile grooming, group daycare, cozy overnight boarding, and one-on-one training.${d ? ` Our resort is ${d} from ${t}.` : ""}`,
  (t, d) =>
    `Looking for reliable, high-quality dog care near ${t}? Planet Pooch offers everything from doorstep mobile grooming to full-day daycare, overnight boarding, and professional training.${d ? ` Our Franklin Square resort is just ${d} from your neighborhood.` : ""}`,
];

function slug(town: string): string {
  return `dog-services-${town.toLowerCase().replace(/\s+/g, "-")}-ny`;
}

function meta(town: string, variant: number, distance?: string): string {
  return metaTemplates[variant % metaTemplates.length](town, distance);
}

function metaTitle(town: string): string {
  return `Dog Services in ${town}, NY | Grooming, Daycare, Boarding & Training | Planet Pooch`;
}

// ── Town data ────────────────────────────────────────────────────────
// Each entry: [town, subRegion, introVariant, distanceFromResort, nearbyTownNames[]]
type TownDef = [string, NassauSubRegion, number, string | undefined, string[]];

const townDefs: TownDef[] = [
  // ─ Near Resort (sorted into their geographic regions) ─
  ["Franklin Square", "central-nassau", 0, "1 minute", ["North Valley Stream", "South Hempstead", "Hempstead", "Garden City"]],
  ["North Valley Stream", "south-shore", 1, "5 minutes", ["Franklin Square", "South Hempstead", "Elmont", "Valley Stream"]],
  ["South Hempstead", "central-nassau", 2, "4 minutes", ["Franklin Square", "North Valley Stream", "Hempstead", "West Hempstead"]],

  // ─ Central Nassau ─
  ["Albertson", "central-nassau", 3, "12 minutes", ["Mineola", "East Williston", "Roslyn Heights", "Herricks"]],
  ["Carle Place", "central-nassau", 4, "10 minutes", ["Westbury", "Mineola", "Garden City", "Old Westbury"]],
  ["East Meadow", "central-nassau", 5, "10 minutes", ["Levittown", "Hempstead", "Uniondale", "Garden City"]],
  ["East Williston", "central-nassau", 0, "14 minutes", ["Albertson", "Mineola", "Roslyn Heights", "Herricks"]],
  ["Floral Park", "central-nassau", 1, "8 minutes", ["New Hyde Park", "Stewart Manor", "Garden City", "Hempstead"]],
  ["Garden City", "central-nassau", 2, "6 minutes", ["Hempstead", "Mineola", "Franklin Square", "Stewart Manor"]],
  ["Hempstead", "central-nassau", 3, "5 minutes", ["Garden City", "Franklin Square", "Uniondale", "East Meadow"]],
  ["Herricks", "central-nassau", 4, "13 minutes", ["Albertson", "East Williston", "New Hyde Park", "Mineola"]],
  ["Hicksville", "central-nassau", 5, "15 minutes", ["Jericho", "Plainview", "Levittown", "Old Bethpage"]],
  ["Jericho", "central-nassau", 0, "16 minutes", ["Hicksville", "Syosset", "Old Westbury", "Plainview"]],
  ["Levittown", "central-nassau", 1, "12 minutes", ["East Meadow", "Hicksville", "Wantagh", "Bellmore"]],
  ["Mineola", "central-nassau", 2, "9 minutes", ["Garden City", "Albertson", "Carle Place", "East Williston"]],
  ["New Cassel", "central-nassau", 3, "13 minutes", ["Westbury", "Hicksville", "Carle Place", "Uniondale"]],
  ["New Hyde Park", "central-nassau", 4, "7 minutes", ["Floral Park", "Garden City", "Herricks", "Stewart Manor"]],
  ["Old Bethpage", "central-nassau", 5, "18 minutes", ["Hicksville", "Plainview", "Levittown", "Jericho"]],
  ["Plainview", "central-nassau", 0, "18 minutes", ["Old Bethpage", "Hicksville", "Syosset", "Jericho"]],
  ["Stewart Manor", "central-nassau", 1, "7 minutes", ["Floral Park", "Garden City", "New Hyde Park", "Hempstead"]],
  ["Syosset", "central-nassau", 2, "19 minutes", ["Jericho", "Plainview", "Muttontown", "Oyster Bay"]],
  ["Uniondale", "central-nassau", 3, "8 minutes", ["Hempstead", "East Meadow", "Garden City", "Roosevelt"]],
  ["Westbury", "central-nassau", 4, "11 minutes", ["Carle Place", "New Cassel", "Mineola", "Old Westbury"]],
  ["Williston Park", "central-nassau", 5, "9 minutes", ["Mineola", "Albertson", "East Williston", "New Hyde Park"]],

  // ─ North Shore ─
  ["Bayville", "north-shore", 0, "30 minutes", ["Oyster Bay", "Locust Valley", "Mill Neck", "Glen Cove"]],
  ["Brookville", "north-shore", 1, "22 minutes", ["Old Brookville", "Muttontown", "East Hills", "Jericho"]],
  ["Centre Island", "north-shore", 2, "28 minutes", ["Oyster Bay", "Bayville", "Mill Neck", "Cove Neck"]],
  ["Cove Neck", "north-shore", 3, "28 minutes", ["Oyster Bay", "Centre Island", "Mill Neck", "Bayville"]],
  ["East Hills", "north-shore", 4, "16 minutes", ["Roslyn Heights", "Roslyn", "Brookville", "Old Westbury"]],
  ["Flower Hill", "north-shore", 5, "15 minutes", ["Roslyn", "Roslyn Heights", "Port Washington", "Manhasset"]],
  ["Glen Cove", "north-shore", 0, "24 minutes", ["Sea Cliff", "Locust Valley", "Glen Head", "Bayville"]],
  ["Glen Head", "north-shore", 1, "20 minutes", ["Sea Cliff", "Glen Cove", "Locust Valley", "Roslyn"]],
  ["Great Neck", "north-shore", 2, "14 minutes", ["Kings Point", "Manhasset", "Port Washington", "North Hills"]],
  ["Kings Point", "north-shore", 3, "16 minutes", ["Great Neck", "Manhasset", "Port Washington", "Plandome"]],
  ["Lattingtown", "north-shore", 4, "26 minutes", ["Locust Valley", "Glen Cove", "Mill Neck", "Bayville"]],
  ["Laurel Hollow", "north-shore", 5, "24 minutes", ["Syosset", "Oyster Bay", "Muttontown", "Mill Neck"]],
  ["Locust Valley", "north-shore", 0, "24 minutes", ["Glen Cove", "Lattingtown", "Bayville", "Glen Head"]],
  ["Manhasset", "north-shore", 1, "12 minutes", ["Great Neck", "Plandome", "Port Washington", "North Hills"]],
  ["Mill Neck", "north-shore", 2, "27 minutes", ["Oyster Bay", "Bayville", "Lattingtown", "Locust Valley"]],
  ["Muttontown", "north-shore", 3, "21 minutes", ["Syosset", "Brookville", "Laurel Hollow", "Jericho"]],
  ["North Hills", "north-shore", 4, "12 minutes", ["Manhasset", "Great Neck", "Roslyn Heights", "Flower Hill"]],
  ["Old Brookville", "north-shore", 5, "22 minutes", ["Brookville", "Muttontown", "Upper Brookville", "Glen Head"]],
  ["Old Westbury", "north-shore", 0, "16 minutes", ["Jericho", "Westbury", "Brookville", "East Hills"]],
  ["Oyster Bay", "north-shore", 1, "28 minutes", ["Bayville", "Centre Island", "Cove Neck", "Mill Neck"]],
  ["Plandome", "north-shore", 2, "13 minutes", ["Manhasset", "Port Washington", "Great Neck", "Flower Hill"]],
  ["Port Washington", "north-shore", 3, "15 minutes", ["Manhasset", "Plandome", "Flower Hill", "Great Neck"]],
  ["Roslyn", "north-shore", 4, "14 minutes", ["Roslyn Heights", "Roslyn Harbor", "Flower Hill", "East Hills"]],
  ["Roslyn Harbor", "north-shore", 5, "15 minutes", ["Roslyn", "Roslyn Heights", "Flower Hill", "Glen Head"]],
  ["Roslyn Heights", "north-shore", 0, "14 minutes", ["Roslyn", "East Hills", "Albertson", "Flower Hill"]],
  ["Sea Cliff", "north-shore", 1, "22 minutes", ["Glen Cove", "Glen Head", "Locust Valley", "Bayville"]],
  ["Upper Brookville", "north-shore", 2, "24 minutes", ["Old Brookville", "Brookville", "Muttontown", "Mill Neck"]],

  // ─ South Shore ─
  ["Atlantic Beach", "south-shore", 3, "18 minutes", ["Long Beach", "Island Park", "East Rockaway", "Lawrence"]],
  ["Baldwin", "south-shore", 4, "10 minutes", ["Freeport", "Roosevelt", "Merrick", "Hempstead"]],
  ["Bellmore", "south-shore", 5, "14 minutes", ["Merrick", "Wantagh", "Seaford", "Levittown"]],
  ["Cedarhurst", "south-shore", 0, "12 minutes", ["Lawrence", "Woodmere", "Hewlett", "Valley Stream"]],
  ["East Rockaway", "south-shore", 1, "12 minutes", ["Lynbrook", "Rockville Centre", "Oceanside", "Hewlett"]],
  ["Elmont", "south-shore", 2, "6 minutes", ["Franklin Square", "North Valley Stream", "Floral Park", "Hempstead"]],
  ["Freeport", "south-shore", 3, "12 minutes", ["Baldwin", "Merrick", "Roosevelt", "Oceanside"]],
  ["Hewlett", "south-shore", 4, "14 minutes", ["Woodmere", "Cedarhurst", "Lawrence", "East Rockaway"]],
  ["Island Park", "south-shore", 5, "16 minutes", ["Long Beach", "Atlantic Beach", "Oceanside", "East Rockaway"]],
  ["Lawrence", "south-shore", 0, "14 minutes", ["Cedarhurst", "Woodmere", "Atlantic Beach", "Hewlett"]],
  ["Long Beach", "south-shore", 1, "18 minutes", ["Atlantic Beach", "Island Park", "East Rockaway", "Oceanside"]],
  ["Lynbrook", "south-shore", 2, "8 minutes", ["Rockville Centre", "Malverne", "East Rockaway", "Valley Stream"]],
  ["Malverne", "south-shore", 3, "7 minutes", ["Lynbrook", "Valley Stream", "Hempstead", "West Hempstead"]],
  ["Massapequa", "south-shore", 4, "18 minutes", ["Seaford", "Wantagh", "Bellmore", "Old Bethpage"]],
  ["Merrick", "south-shore", 5, "13 minutes", ["Bellmore", "Freeport", "Baldwin", "Wantagh"]],
  ["Oceanside", "south-shore", 0, "11 minutes", ["Rockville Centre", "East Rockaway", "Island Park", "Freeport"]],
  ["Point Lookout", "south-shore", 1, "20 minutes", ["Long Beach", "Atlantic Beach", "Island Park", "Oceanside"]],
  ["Rockville Centre", "south-shore", 2, "8 minutes", ["Lynbrook", "Oceanside", "East Rockaway", "Baldwin"]],
  ["Roosevelt", "south-shore", 3, "8 minutes", ["Freeport", "Baldwin", "Hempstead", "Uniondale"]],
  ["Seaford", "south-shore", 4, "16 minutes", ["Wantagh", "Bellmore", "Massapequa", "Levittown"]],
  ["Valley Stream", "south-shore", 5, "6 minutes", ["North Valley Stream", "Lynbrook", "Elmont", "Malverne"]],
  ["Wantagh", "south-shore", 0, "15 minutes", ["Seaford", "Bellmore", "Levittown", "Merrick"]],
  ["West Hempstead", "south-shore", 1, "5 minutes", ["Hempstead", "Malverne", "South Hempstead", "Franklin Square"]],
  ["Woodmere", "south-shore", 2, "13 minutes", ["Hewlett", "Cedarhurst", "Lawrence", "Valley Stream"]],
];

// Build the lookup record
function buildNassauTowns(): Record<string, NassauTownPage> {
  const map: Record<string, NassauTownPage> = {};
  for (const [town, subRegion, introVariant, distance, nearbyNames] of townDefs) {
    const s = slug(town);
    map[s] = {
      slug: s,
      town,
      subRegion,
      metaTitle: metaTitle(town),
      metaDescription: meta(town, introVariant, distance),
      introVariant,
      nearbyTowns: nearbyNames.map(slug),
      distanceFromResort: distance,
    };
  }
  return map;
}

export const nassauTowns: Record<string, NassauTownPage> = buildNassauTowns();

/** Group towns by sub-region for the homepage section */
export function getTownsByRegion(): Record<NassauSubRegion, NassauTownPage[]> {
  const groups: Record<NassauSubRegion, NassauTownPage[]> = {
    "north-shore": [],
    "central-nassau": [],
    "south-shore": [],
  };
  for (const page of Object.values(nassauTowns)) {
    groups[page.subRegion].push(page);
  }
  // Sort each group alphabetically
  for (const region of Object.keys(groups) as NassauSubRegion[]) {
    groups[region].sort((a, b) => a.town.localeCompare(b.town));
  }
  return groups;
}
