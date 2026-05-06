export type TownService = "mobile-grooming" | "spa-services" | "in-house-grooming" | "daycare-boarding";

export type TownPage = {
  slug: string;
  service: TownService;
  town: string;
  region?: string;
  metaTitle: string;
  metaDescription: string;
};

export const towns = {
  // ---- Mobile dog grooming — town pages ----
  "mobile-dog-grooming-glen-cove-ny": {
    slug: "mobile-dog-grooming-glen-cove-ny",
    service: "mobile-grooming",
    town: "Glen Cove",
    region: "Nassau County",
    metaTitle: "Mobile Dog Grooming Glen Cove NY | Planet Pooch",
    metaDescription:
      "Mobile dog grooming in Glen Cove, NY. One-on-one sessions with professional groomers right outside your home — most appointments finished in under 90 minutes.",
  },
  "mobile-dog-grooming-massapequa-ny": {
    slug: "mobile-dog-grooming-massapequa-ny",
    service: "mobile-grooming",
    town: "Massapequa",
    region: "Nassau County",
    metaTitle: "Mobile Dog Grooming Massapequa NY | Planet Pooch",
    metaDescription:
      "Mobile dog grooming in Massapequa, NY. Luxury one-on-one grooming brought to your driveway — hand-dried, never crated, finished in under 90 minutes.",
  },
  "mobile-dog-grooming-jericho-ny": {
    slug: "mobile-dog-grooming-jericho-ny",
    service: "mobile-grooming",
    town: "Jericho",
    region: "Nassau County",
    metaTitle: "Mobile Dog Grooming Jericho NY | Planet Pooch",
    metaDescription:
      "Mobile dog grooming in Jericho, NY. We bring a fully equipped luxury grooming spa to your home — calm, one-on-one, hand-dried, no crates.",
  },
  "mobile-dog-grooming-syosset-ny": {
    slug: "mobile-dog-grooming-syosset-ny",
    service: "mobile-grooming",
    town: "Syosset",
    region: "Nassau County",
    metaTitle: "Mobile Dog Grooming Syosset NY | Planet Pooch",
    metaDescription:
      "Mobile dog grooming in Syosset, NY. Professional groomers come to you for a calm, one-on-one session — full grooms, baths, and Plus / Premium upgrades.",
  },
  "mobile-dog-grooming-westbury-ny": {
    slug: "mobile-dog-grooming-westbury-ny",
    service: "mobile-grooming",
    town: "Westbury",
    region: "Nassau County",
    metaTitle: "Mobile Dog Grooming Westbury NY | Planet Pooch",
    metaDescription:
      "Mobile dog grooming in Westbury, NY. One-on-one luxury grooming sessions delivered to your driveway by Planet Pooch's professional team.",
  },
  "mobile-dog-grooming-roslyn-ny": {
    slug: "mobile-dog-grooming-roslyn-ny",
    service: "mobile-grooming",
    town: "Roslyn",
    region: "Nassau County",
    metaTitle: "Mobile Dog Grooming Roslyn NY | Planet Pooch",
    metaDescription:
      "Mobile dog grooming in Roslyn, NY. Calm, one-on-one grooming at your door — hand-dried, no crates, professional groomers, finished in under 90 minutes.",
  },
  "mobile-dog-grooming-port-washington-ny": {
    slug: "mobile-dog-grooming-port-washington-ny",
    service: "mobile-grooming",
    town: "Port Washington",
    region: "Nassau County",
    metaTitle: "Mobile Dog Grooming Port Washington NY | Planet Pooch",
    metaDescription:
      "Mobile dog grooming in Port Washington, NY. Luxury, one-on-one grooming brought to you by Planet Pooch's professional groomers.",
  },
  "mobile-dog-grooming-new-hyde-park-ny": {
    slug: "mobile-dog-grooming-new-hyde-park-ny",
    service: "mobile-grooming",
    town: "New Hyde Park",
    region: "Nassau County",
    metaTitle: "Mobile Dog Grooming New Hyde Park NY | Planet Pooch",
    metaDescription:
      "Mobile dog grooming in New Hyde Park, NY. Calm, one-on-one sessions outside your home from a fully equipped Planet Pooch mobile spa.",
  },
  "mobile-dog-grooming-manhasset-ny": {
    slug: "mobile-dog-grooming-manhasset-ny",
    service: "mobile-grooming",
    town: "Manhasset",
    region: "Nassau County",
    metaTitle: "Mobile Dog Grooming Manhasset NY | Planet Pooch",
    metaDescription:
      "Mobile dog grooming in Manhasset, NY. Bring the luxury spa to your driveway with one-on-one professional groomers from Planet Pooch.",
  },
  "mobile-dog-grooming-locust-valley-ny": {
    slug: "mobile-dog-grooming-locust-valley-ny",
    service: "mobile-grooming",
    town: "Locust Valley",
    region: "Nassau County",
    metaTitle: "Mobile Dog Grooming Locust Valley NY | Planet Pooch",
    metaDescription:
      "Mobile dog grooming in Locust Valley, NY. Calm, one-on-one grooming sessions in a fully equipped van — hand-dried, no crates, professional results.",
  },
  "mobile-dog-grooming-great-neck-ny": {
    slug: "mobile-dog-grooming-great-neck-ny",
    service: "mobile-grooming",
    town: "Great Neck",
    region: "Nassau County",
    metaTitle: "Mobile Dog Grooming Great Neck NY | Planet Pooch",
    metaDescription:
      "Mobile dog grooming in Great Neck, NY. Luxury one-on-one grooming at your home — finished in under 90 minutes by professional groomers.",
  },
  "mobile-dog-grooming-glen-head-ny": {
    slug: "mobile-dog-grooming-glen-head-ny",
    service: "mobile-grooming",
    town: "Glen Head",
    region: "Nassau County",
    metaTitle: "Mobile Dog Grooming Glen Head NY | Planet Pooch",
    metaDescription:
      "Mobile dog grooming in Glen Head, NY. Calm, one-on-one professional grooming sessions delivered to your driveway by Planet Pooch.",
  },
  "mobile-dog-grooming-garden-city-ny": {
    slug: "mobile-dog-grooming-garden-city-ny",
    service: "mobile-grooming",
    town: "Garden City",
    region: "Nassau County",
    metaTitle: "Mobile Dog Grooming Garden City NY | Planet Pooch",
    metaDescription:
      "Mobile dog grooming in Garden City, NY. Bring the luxury spa to your driveway — hand-dried, no crates, finished in under 90 minutes.",
  },

  // ---- Mobile spa services — region pages ----
  "mobile-pet-spa-services-nassau-county-ny": {
    slug: "mobile-pet-spa-services-nassau-county-ny",
    service: "spa-services",
    town: "Nassau County",
    metaTitle: "Mobile Pet Spa Services Nassau County NY | Planet Pooch",
    metaDescription:
      "Mobile pet spa services across Nassau County, NY. Luxury one-on-one grooming with Plus and Premium spa upgrades using boutique, handcrafted products.",
  },
  "mobile-pet-spa-services-suffolk-county": {
    slug: "mobile-pet-spa-services-suffolk-county",
    service: "spa-services",
    town: "Suffolk County",
    metaTitle: "Mobile Pet Spa Services Suffolk County NY | Planet Pooch",
    metaDescription:
      "Mobile pet spa services across Suffolk County, NY. Luxury grooming, baths, and Plus / Premium spa upgrades brought to your driveway.",
  },
  "mobile-pet-spa-services-franklin-square-ny": {
    slug: "mobile-pet-spa-services-franklin-square-ny",
    service: "spa-services",
    town: "Franklin Square",
    metaTitle: "Mobile Pet Spa Services Franklin Square NY | Planet Pooch",
    metaDescription:
      "Mobile pet spa services in Franklin Square, NY. Luxury grooming and baths with Plus / Premium spa upgrades delivered to your home.",
  },

  // ---- Other grooming region/town variants ----
  "grooming-suffolk-county": {
    slug: "grooming-suffolk-county",
    service: "mobile-grooming",
    town: "Suffolk County",
    metaTitle: "Dog Grooming Suffolk County | Mobile Service | Planet Pooch",
    metaDescription:
      "Mobile dog grooming across Suffolk County, NY. Professional groomers come to you for one-on-one sessions in a fully equipped spa van.",
  },
  "mobile-grooming-suffolk-county": {
    slug: "mobile-grooming-suffolk-county",
    service: "mobile-grooming",
    town: "Suffolk County",
    metaTitle: "Mobile Dog Grooming Suffolk County NY | Planet Pooch",
    metaDescription:
      "Mobile dog grooming throughout Suffolk County, NY. One-on-one grooming sessions from a fully equipped van — hand-dried, no crates, professional results.",
  },
  "grooming-franklin-square-ny": {
    slug: "grooming-franklin-square-ny",
    service: "mobile-grooming",
    town: "Franklin Square",
    metaTitle: "Dog Grooming Franklin Square NY | Planet Pooch",
    metaDescription:
      "Dog grooming in Franklin Square, NY. Mobile grooming at your home and in-house grooming for daycare and boarding clients at our resort.",
  },

  // ---- Daycare / boarding — town pages ----
  "daycare-boarding-valley-stream-ny": {
    slug: "daycare-boarding-valley-stream-ny",
    service: "daycare-boarding",
    town: "Valley Stream",
    region: "Nassau County",
    metaTitle: "Dog Daycare & Boarding Valley Stream NY | Planet Pooch",
    metaDescription:
      "Dog daycare and overnight boarding for Valley Stream, NY families. Supervised group play, enrichment, and cozy boarding suites at our Franklin Square resort.",
  },
  "dog-daycare-boarding-franklin-square-ny": {
    slug: "dog-daycare-boarding-franklin-square-ny",
    service: "daycare-boarding",
    town: "Franklin Square",
    region: "Nassau County",
    metaTitle: "Doggy Daycare & Boarding Franklin Square NY | Planet Pooch",
    metaDescription:
      "Doggy daycare and overnight boarding in Franklin Square, NY. Supervised group play, enrichment, and cozy suites — minutes from home.",
  },
  "daycare-boarding-elmont-ny": {
    slug: "daycare-boarding-elmont-ny",
    service: "daycare-boarding",
    town: "Elmont",
    region: "Nassau County",
    metaTitle: "Dog Daycare & Boarding Elmont NY | Planet Pooch",
    metaDescription:
      "Dog daycare and overnight boarding for Elmont, NY families at our Franklin Square pet resort — group play, enrichment, and cozy suites.",
  },
  "daycare-boarding-floral-park-ny": {
    slug: "daycare-boarding-floral-park-ny",
    service: "daycare-boarding",
    town: "Floral Park",
    region: "Nassau County",
    metaTitle: "Dog Daycare & Boarding Floral Park NY | Planet Pooch",
    metaDescription:
      "Dog daycare and overnight boarding for Floral Park, NY families. Supervised group play, enrichment, and cozy suites at our resort.",
  },
  "daycare-boarding-garden-city-ny": {
    slug: "daycare-boarding-garden-city-ny",
    service: "daycare-boarding",
    town: "Garden City",
    region: "Nassau County",
    metaTitle: "Dog Daycare & Boarding Garden City NY | Planet Pooch",
    metaDescription:
      "Dog daycare and overnight boarding for Garden City, NY families. Supervised group play, enrichment, and cozy boarding suites just minutes away.",
  },
  "daycare-boarding-lynbrook-ny": {
    slug: "daycare-boarding-lynbrook-ny",
    service: "daycare-boarding",
    town: "Lynbrook",
    region: "Nassau County",
    metaTitle: "Dog Daycare & Boarding Lynbrook NY | Planet Pooch",
    metaDescription:
      "Dog daycare and overnight boarding for Lynbrook, NY families at our Franklin Square pet resort.",
  },
  "daycare-boarding-malvern-ny": {
    slug: "daycare-boarding-malvern-ny",
    service: "daycare-boarding",
    town: "Malverne",
    region: "Nassau County",
    metaTitle: "Dog Daycare & Boarding Malverne NY | Planet Pooch",
    metaDescription:
      "Dog daycare and overnight boarding for Malverne, NY families at our Franklin Square resort — group play, enrichment, and cozy suites.",
  },
  "daycare-boarding-mineola-ny": {
    slug: "daycare-boarding-mineola-ny",
    service: "daycare-boarding",
    town: "Mineola",
    region: "Nassau County",
    metaTitle: "Dog Daycare & Boarding Mineola NY | Planet Pooch",
    metaDescription:
      "Dog daycare and overnight boarding for Mineola, NY families. Supervised group play, enrichment, and cozy boarding suites.",
  },
  "daycare-boarding-new-hyde-park-ny": {
    slug: "daycare-boarding-new-hyde-park-ny",
    service: "daycare-boarding",
    town: "New Hyde Park",
    region: "Nassau County",
    metaTitle: "Dog Daycare & Boarding New Hyde Park NY | Planet Pooch",
    metaDescription:
      "Dog daycare and overnight boarding for New Hyde Park, NY families at our Franklin Square pet resort.",
  },
  "daycare-boarding-stewart-manor-ny": {
    slug: "daycare-boarding-stewart-manor-ny",
    service: "daycare-boarding",
    town: "Stewart Manor",
    region: "Nassau County",
    metaTitle: "Dog Daycare & Boarding Stewart Manor NY | Planet Pooch",
    metaDescription:
      "Dog daycare and overnight boarding for Stewart Manor, NY families at our Franklin Square pet resort.",
  },
  "daycare-boarding-west-hempstead-ny": {
    slug: "daycare-boarding-west-hempstead-ny",
    service: "daycare-boarding",
    town: "West Hempstead",
    region: "Nassau County",
    metaTitle: "Dog Daycare & Boarding West Hempstead NY | Planet Pooch",
    metaDescription:
      "Dog daycare and overnight boarding for West Hempstead, NY families at our Franklin Square pet resort.",
  },

  // ---- In-house grooming — town pages ----
  "dog-grooming-manhasset-ny": {
    slug: "dog-grooming-manhasset-ny",
    service: "in-house-grooming",
    town: "Manhasset",
    region: "Nassau County",
    metaTitle: "Dog Grooming Manhasset NY | Mobile & In-House | Planet Pooch",
    metaDescription:
      "Dog grooming for Manhasset, NY families — mobile grooming at your home and in-house grooming for daycare and boarding clients.",
  },
  "dog-grooming-brookville-ny": {
    slug: "dog-grooming-brookville-ny",
    service: "in-house-grooming",
    town: "Brookville",
    region: "Nassau County",
    metaTitle: "Dog Grooming Brookville NY | Mobile & In-House | Planet Pooch",
    metaDescription:
      "Dog grooming for Brookville, NY families — mobile grooming at your home and in-house grooming for daycare and boarding clients.",
  },
  "dog-grooming-roslyn-ny": {
    slug: "dog-grooming-roslyn-ny",
    service: "in-house-grooming",
    town: "Roslyn",
    region: "Nassau County",
    metaTitle: "Dog Grooming Roslyn NY | Mobile & In-House | Planet Pooch",
    metaDescription:
      "Dog grooming for Roslyn, NY families — mobile grooming at your home and in-house grooming for daycare and boarding clients.",
  },
  "dog-grooming-old-westbury-ny": {
    slug: "dog-grooming-old-westbury-ny",
    service: "in-house-grooming",
    town: "Old Westbury",
    region: "Nassau County",
    metaTitle: "Dog Grooming Old Westbury NY | Mobile & In-House | Planet Pooch",
    metaDescription:
      "Dog grooming for Old Westbury, NY families — mobile grooming at your home and in-house grooming for daycare and boarding clients.",
  },
  "dog-grooming-north-shore": {
    slug: "dog-grooming-north-shore",
    service: "in-house-grooming",
    town: "North Shore",
    region: "Long Island",
    metaTitle: "Dog Grooming North Shore Long Island | Planet Pooch",
    metaDescription:
      "Dog grooming across Long Island's North Shore — mobile grooming at your home and in-house grooming for daycare and boarding clients.",
  },
} satisfies Record<string, TownPage>;

export type TownSlug = keyof typeof towns;
