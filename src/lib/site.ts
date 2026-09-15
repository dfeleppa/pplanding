export const SITE = {
  name: "Planet Pooch",
  legalName: "Planet Pooch Pet Resort",
  domain: "www.planet-pooch.com",
  url: "https://www.planet-pooch.com",
  email: "planetpoochpetservices@gmail.com",
  phone: {
    display: "(516) 993-3603",
    e164: "+15169933603",
    href: "tel:+15169933603",
  },
  address: {
    street: "1114 Hempstead Turnpike",
    locality: "Franklin Square",
    region: "NY",
    postalCode: "11010",
    country: "US",
  },
  geo: {
    latitude: 40.7028,
    longitude: -73.6712,
  },
  serviceArea: {
    primary: "Long Island, NY",
    counties: ["Nassau County"],
    notable: ["Franklin Square", "The Hamptons", "North Shore"],
  },
  social: {
    instagram: "https://www.instagram.com/planetpoochpetservices/",
    facebook: "https://www.facebook.com/PlanetPoochPetServices/",
    youtube: "https://www.youtube.com/@planetpoochpetservices",
  },
  reviews: {
    rating: 4.9,
    count: 768,
    /** Marketing display form — keep every on-site mention in sync with this. */
    countDisplay: "760+",
    profileUrl:
      "https://www.google.com/maps/search/?api=1&query=Planet%20Pooch%20Pet%20Resort%2C%201114%20Hempstead%20Turnpike%2C%20Franklin%20Square%2C%20NY%2011010",
  },
  defaults: {
    homeTitle: "Mobile Pet Grooming Long Island | Mobile Dog Groomer",
    homeDescription:
      "Planet Pooch is your go-to for mobile pet grooming, daycare, and boarding across Long Island & the Hamptons. Professional, convenient, and pet-centric service.",
    titleTemplate: "%s | Planet Pooch Pet Resort",
  },
} as const;

export const ADDRESS_LINES = [
  SITE.address.street,
  `${SITE.address.locality}, ${SITE.address.region} ${SITE.address.postalCode}`,
] as const;
