export type TeamMember = {
  slug: string;
  name: string;
  role: string;
  metaTitle: string;
  metaDescription: string;
  paragraphs?: string[];
  yearStarted?: number;
};

export const team = {
  andy: {
    slug: "andy",
    name: "Andy",
    role: "Owner & Founder",
    metaTitle: "Meet Andy | Owner of Planet Pooch Pet Resort",
    metaDescription:
      "Andy Gonzaga founded Planet Pooch in 2014 after starting his grooming career at 17 and graduating from the New York School of Dog Grooming.",
    yearStarted: 2014,
    paragraphs: [
      "Andy is the owner of Planet Pooch. He began his grooming career at 17, working alongside his mother Kathy.",
      "After completing his education at the New York School of Dog Grooming in 2010 and obtaining his grooming license, he continued developing his expertise under his mother's mentorship.",
      "He established Planet Pooch Mobile Grooming in summer 2014. What started as a single mobile grooming van quickly grew into the full-service pet resort and mobile grooming operation Planet Pooch is today.",
    ],
  },
  kathy: {
    slug: "kathy",
    name: "Kathy",
    role: "Founding Groomer",
    metaTitle: "Meet Kathy | Founding Groomer at Planet Pooch",
    metaDescription:
      "Kathy is the founding spirit of Planet Pooch's grooming division. Licensed in 1979 from the New York School of Dog Grooming and mobile grooming since 1980.",
    yearStarted: 1979,
    paragraphs: [
      "Kathy represents the founding spirit of Planet Pooch's grooming division. She obtained her grooming license in 1979 from the New York School of Dog Grooming and began her career, quickly transitioning over to mobile grooming in 1980.",
      "After working in the mobile grooming industry for over six years, she established her own venture in 1986. She started Kathy's Mobile Grooming and over 30 years later she still works in the industry.",
      "Her extensive experience and dedication to animal care have made her an invaluable asset to the Planet Pooch team.",
    ],
  },
  stacey: {
    slug: "stacey",
    name: "Stacey",
    role: "Team Member",
    metaTitle: "Meet Stacey | Planet Pooch Pet Resort Team",
    metaDescription:
      "Meet Stacey, part of the Planet Pooch team in Franklin Square, NY, helping with daycare, boarding, and the little moments that make each dog's day.",
    paragraphs: [
      "Stacey is part of the team that keeps the day-to-day at Planet Pooch running with the calm, attentive energy our families have come to expect. Whether she's helping out on the daycare floor, lending a hand at boarding handoffs, or greeting clients at the front, she's focused on giving every dog the one-on-one attention they deserve.",
      "She believes in the Planet Pooch way of doing things — no crating after baths, plenty of hand-drying, and treating every dog like one of our own. It's that simple, steady care that turns first-time visitors into long-time members of the Planet Pooch family.",
    ],
  },
  kathleen: {
    slug: "kathleen",
    name: "Kathleen",
    role: "Team Member",
    metaTitle: "Meet Kathleen | Planet Pooch Pet Resort Team",
    metaDescription:
      "Meet Kathleen, part of the Planet Pooch team in Franklin Square, NY, supporting daycare, boarding, and calm one-on-one care for every dog.",
    paragraphs: [
      "Kathleen is part of the team that helps Planet Pooch feel less like a kennel and more like a home away from home. You'll find her supporting daycare groups, helping with boarding check-ins, and making sure every dog that walks through the door gets the steady, patient attention they need to settle in.",
      "She's bought into the Planet Pooch philosophy — calm handling, hand-drying instead of crating, and treating each pup like family. That commitment to the little details is what keeps our Nassau and Suffolk County families coming back.",
    ],
  },
  kristina: {
    slug: "kristina",
    name: "Kristina",
    role: "Team Member",
    metaTitle: "Meet Kristina | Planet Pooch Pet Resort Team",
    metaDescription:
      "Meet Kristina from the Planet Pooch team in Franklin Square, NY, helping deliver attentive daycare, boarding, and customer care every day.",
    paragraphs: [
      "Kristina is part of the team that keeps Planet Pooch feeling warm, welcoming, and unhurried. She spends her days helping with the daycare floor, lending a hand at boarding handoffs, and being a familiar face for the families who trust us with their dogs.",
      "She takes the Planet Pooch values to heart — calm one-on-one attention, hand-drying instead of crating, and treating every dog like one of our own. It's the kind of care that has earned us a loyal following across Nassau County and beyond.",
    ],
  },
  andrea: {
    slug: "andrea",
    name: "Andrea",
    role: "Team Member",
    metaTitle: "Meet Andrea | Planet Pooch Pet Resort Team",
    metaDescription:
      "Meet Andrea from the Planet Pooch team in Franklin Square, NY, supporting daycare, boarding, and the calm, attentive care our families count on.",
    paragraphs: [
      "Andrea is part of the team that helps make Planet Pooch feel like a true second home for our guests. You'll find her on the daycare floor, helping with boarding routines, or making sure every customer touchpoint feels easy and personal.",
      "She's a believer in the Planet Pooch approach — no crating after baths, plenty of patient hand-drying, and treating every dog like one of our own. That steady, family-first care is what sets the Planet Pooch experience apart.",
    ],
  },
  dyana: {
    slug: "dyana",
    name: "Dyana",
    role: "Groomer",
    metaTitle: "Meet Dyana | Planet Pooch Mobile Groomer",
    metaDescription:
      "Meet Dyana, groomer at Planet Pooch, delivering calm, attentive cuts, baths, and hand-drying for dogs across Long Island and the Hamptons.",
    paragraphs: [
      "Dyana is one of the groomers behind the cuts, baths, and finishes that have helped Planet Pooch build its reputation across Long Island. She spends her days working one-on-one with each dog in her chair, taking the time to read their comfort level and tailor the groom to what suits them best.",
      "She's fully bought into the Planet Pooch way — no crate drying, plenty of hand-finishing, and treating every dog like family. Whether it's a routine bath or a full breed cut, her goal is the same: a dog that goes home looking great and feeling even better.",
    ],
  },
  meaghan: {
    slug: "meaghan",
    name: "Meaghan",
    role: "Team Member",
    metaTitle: "Meet Meaghan | Planet Pooch Pet Resort Team",
    metaDescription:
      "Meet Meaghan from the Planet Pooch team in Franklin Square, NY, helping daycare guests and boarding families feel right at home.",
    paragraphs: [
      "Meaghan is part of the team that helps Planet Pooch deliver the calm, attentive care our families love. She spends her days helping with daycare groups, supporting boarding handoffs, and being a steady, friendly presence for every dog and every owner she meets.",
      "She lives the Planet Pooch values — one-on-one attention, hand-drying instead of crating, and treating each pup like one of our own. It's the kind of small-resort care you don't find at a typical kennel.",
    ],
  },
  jenn: {
    slug: "jenn",
    name: "Jenn",
    role: "Team Member",
    metaTitle: "Meet Jenn | Planet Pooch Pet Resort Team",
    metaDescription:
      "Meet Jenn from the Planet Pooch team in Franklin Square, NY, supporting daycare, boarding, and the attentive care our families count on.",
    paragraphs: [
      "Jenn is part of the team that keeps Planet Pooch running smoothly from drop-off to pick-up. She spends her time on the daycare floor, helping with boarding routines, and making sure each dog gets the patient, one-on-one attention that defines our experience.",
      "She's a believer in the Planet Pooch way — no crating after baths, plenty of hand-drying, and treating every dog like family. It's that thoughtful care that has earned us such loyal clients across Nassau and Suffolk Counties.",
    ],
  },
  debbie: {
    slug: "debbie",
    name: "Debbie",
    role: "Team Member",
    metaTitle: "Meet Debbie | Planet Pooch Pet Resort Team",
    metaDescription:
      "Meet Debbie from the Planet Pooch team in Franklin Square, NY, helping deliver calm, attentive daycare and boarding care to every dog.",
    paragraphs: [
      "Debbie is part of the team that helps make Planet Pooch feel like a true home away from home. You'll find her helping with daycare groups, supporting boarding stays, or being a friendly face at the front for the families who trust us with their dogs.",
      "She takes the Planet Pooch values seriously — calm one-on-one care, hand-drying instead of crating, and treating every dog like one of our own. It's that steady attention to detail that makes the Planet Pooch experience what it is.",
    ],
  },
  stephanie: {
    slug: "stephanie",
    name: "Stephanie",
    role: "Team Member",
    metaTitle: "Meet Stephanie | Planet Pooch Pet Resort Team",
    metaDescription:
      "Meet Stephanie from the Planet Pooch team in Franklin Square, NY, supporting daycare, boarding, and the attentive care our families count on.",
    paragraphs: [
      "Stephanie is part of the team that keeps Planet Pooch feeling warm and welcoming for every guest. She spends her days helping with daycare, supporting boarding handoffs, and making sure the dogs in our care get the one-on-one attention they deserve.",
      "She lives the Planet Pooch philosophy — no crating after baths, plenty of hand-drying, and treating every pup like one of our own. It's that simple, consistent care that turns first visits into long-term relationships with our families.",
    ],
  },
  "arielle-2": {
    slug: "arielle-2",
    name: "Arielle",
    role: "Team Member",
    metaTitle: "Meet Arielle | Planet Pooch Pet Resort Team",
    metaDescription:
      "Meet Arielle from the Planet Pooch team in Franklin Square, NY, helping with daycare, boarding, and the calm one-on-one care our dogs love.",
    paragraphs: [
      "Arielle is part of the team that helps Planet Pooch deliver the attentive, family-style care our clients have come to expect. You'll find her on the daycare floor, helping with boarding routines, or making sure every customer touchpoint feels easy and personal.",
      "She's bought into the Planet Pooch way — calm handling, hand-drying instead of crating, and treating each dog like one of our own. It's the kind of care that makes a real difference for the families we serve across Long Island.",
    ],
  },
  derek: {
    slug: "derek",
    name: "Derek",
    role: "Team Member",
    metaTitle: "Meet Derek | Planet Pooch Pet Resort Team",
    metaDescription:
      "Meet Derek from the Planet Pooch team in Franklin Square, NY, supporting daycare, boarding, and the attentive care that defines our resort.",
    paragraphs: [
      "Derek is part of the team that keeps Planet Pooch running with the calm, attentive energy our guests deserve. He spends his time helping out on the daycare floor, lending a hand with boarding handoffs, and being a steady, friendly presence for the dogs in our care.",
      "He's a believer in the Planet Pooch values — one-on-one attention, hand-drying instead of crating, and treating every dog like family. It's the kind of consistent, thoughtful care that makes our resort feel different from a typical kennel.",
    ],
  },
  brianna: {
    slug: "brianna",
    name: "Brianna",
    role: "Team Member",
    metaTitle: "Meet Brianna | Planet Pooch Pet Resort Team",
    metaDescription:
      "Meet Brianna from the Planet Pooch team in Franklin Square, NY, helping with daycare, boarding, and the calm, attentive care our families love.",
    paragraphs: [
      "Brianna is part of the team that helps Planet Pooch feel like a true home away from home. You'll find her supporting daycare groups, helping with boarding stays, and making sure every dog that walks through the door gets the patient, one-on-one attention they need.",
      "She takes the Planet Pooch values to heart — no crating after baths, plenty of hand-drying, and treating each pup like one of our own. That steady, family-first care is at the core of everything we do.",
    ],
  },
  veronica: {
    slug: "veronica",
    name: "Veronica",
    role: "Team Member",
    metaTitle: "Meet Veronica | Planet Pooch Pet Resort Team",
    metaDescription:
      "Meet Veronica from the Planet Pooch team in Franklin Square, NY, supporting daycare, boarding, and the calm, attentive care our families count on.",
    paragraphs: [
      "Veronica is part of the team that helps Planet Pooch deliver the warm, family-style experience our clients have come to expect. She spends her days helping with daycare groups, supporting boarding handoffs, and being a familiar, friendly face for the dogs in our care.",
      "She lives the Planet Pooch values — calm one-on-one attention, hand-drying instead of crating, and treating every dog like one of our own. It's the kind of thoughtful care that has built our reputation across Long Island.",
    ],
  },
  ashley: {
    slug: "ashley",
    name: "Ashley",
    role: "Team Member",
    metaTitle: "Meet Ashley | Planet Pooch Pet Resort Team",
    metaDescription:
      "Meet Ashley from the Planet Pooch team in Franklin Square, NY, helping deliver attentive daycare, boarding, and customer care every day.",
    paragraphs: [
      "Ashley is part of the team that keeps Planet Pooch feeling calm, welcoming, and unhurried for every guest. You'll find her helping on the daycare floor, supporting boarding routines, or being a steady presence for the families who trust us with their dogs.",
      "She's a believer in the Planet Pooch approach — no crating after baths, plenty of patient hand-drying, and treating every pup like one of our own. It's the kind of care that makes us feel less like a kennel and more like family.",
    ],
  },
  gabi: {
    slug: "gabi",
    name: "Gabi",
    role: "Groomer",
    metaTitle: "Meet Gabi | Planet Pooch Mobile Groomer",
    metaDescription:
      "Meet Gabi, groomer at Planet Pooch, bringing calm, attentive cuts, baths, and hand-drying to dogs across Long Island and the Hamptons.",
    paragraphs: [
      "Gabi is one of the groomers behind the cuts, baths, and finishes that have made Planet Pooch a trusted name across Long Island. She works one-on-one with each dog in her chair, taking the time to read their comfort level and shape the groom around what suits them best.",
      "She's fully bought into the Planet Pooch way — no crate drying, plenty of hand-finishing, and treating every dog like family. The goal is always the same: a dog that walks out looking great, feeling relaxed, and ready for the ride home.",
    ],
  },
  rebecca: {
    slug: "rebecca",
    name: "Rebecca",
    role: "Team Member",
    metaTitle: "Meet Rebecca | Planet Pooch Pet Resort Team",
    metaDescription:
      "Meet Rebecca from the Planet Pooch team in Franklin Square, NY, supporting daycare, boarding, and the calm one-on-one care our families love.",
    paragraphs: [
      "Rebecca is part of the team that helps Planet Pooch run with the calm, attentive energy our guests deserve. She spends her days helping with daycare groups, supporting boarding handoffs, and being a friendly, familiar face for the families who trust us with their dogs.",
      "She takes the Planet Pooch values to heart — calm one-on-one attention, hand-drying instead of crating, and treating every dog like one of our own. It's that consistent, thoughtful care that defines the Planet Pooch experience.",
    ],
  },
} satisfies Record<string, TeamMember>;

export type TeamSlug = keyof typeof team;
