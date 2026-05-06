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
      "Meet Stacey from the Planet Pooch team — Long Island's full-service mobile grooming, daycare, and boarding pet resort.",
  },
  kathleen: {
    slug: "kathleen",
    name: "Kathleen",
    role: "Team Member",
    metaTitle: "Meet Kathleen | Planet Pooch Pet Resort Team",
    metaDescription:
      "Meet Kathleen from the Planet Pooch team in Franklin Square, NY.",
  },
  kristina: {
    slug: "kristina",
    name: "Kristina",
    role: "Team Member",
    metaTitle: "Meet Kristina | Planet Pooch Pet Resort Team",
    metaDescription:
      "Meet Kristina from the Planet Pooch team in Franklin Square, NY.",
  },
  andrea: {
    slug: "andrea",
    name: "Andrea",
    role: "Team Member",
    metaTitle: "Meet Andrea | Planet Pooch Pet Resort Team",
    metaDescription:
      "Meet Andrea from the Planet Pooch team in Franklin Square, NY.",
  },
  dyana: {
    slug: "dyana",
    name: "Dyana",
    role: "Groomer",
    metaTitle: "Meet Dyana | Planet Pooch Mobile Groomer",
    metaDescription:
      "Meet Dyana, mobile groomer at Planet Pooch — Long Island's luxury mobile grooming and pet resort.",
  },
  meaghan: {
    slug: "meaghan",
    name: "Meaghan",
    role: "Team Member",
    metaTitle: "Meet Meaghan | Planet Pooch Pet Resort Team",
    metaDescription:
      "Meet Meaghan from the Planet Pooch team in Franklin Square, NY.",
  },
  jenn: {
    slug: "jenn",
    name: "Jenn",
    role: "Team Member",
    metaTitle: "Meet Jenn | Planet Pooch Pet Resort Team",
    metaDescription:
      "Meet Jenn from the Planet Pooch team in Franklin Square, NY.",
  },
  debbie: {
    slug: "debbie",
    name: "Debbie",
    role: "Team Member",
    metaTitle: "Meet Debbie | Planet Pooch Pet Resort Team",
    metaDescription:
      "Meet Debbie from the Planet Pooch team in Franklin Square, NY.",
  },
  stephanie: {
    slug: "stephanie",
    name: "Stephanie",
    role: "Team Member",
    metaTitle: "Meet Stephanie | Planet Pooch Pet Resort Team",
    metaDescription:
      "Meet Stephanie from the Planet Pooch team in Franklin Square, NY.",
  },
  "arielle-2": {
    slug: "arielle-2",
    name: "Arielle",
    role: "Team Member",
    metaTitle: "Meet Arielle | Planet Pooch Pet Resort Team",
    metaDescription:
      "Meet Arielle from the Planet Pooch team in Franklin Square, NY.",
  },
  derek: {
    slug: "derek",
    name: "Derek",
    role: "Team Member",
    metaTitle: "Meet Derek | Planet Pooch Pet Resort Team",
    metaDescription:
      "Meet Derek from the Planet Pooch team in Franklin Square, NY.",
  },
  brianna: {
    slug: "brianna",
    name: "Brianna",
    role: "Team Member",
    metaTitle: "Meet Brianna | Planet Pooch Pet Resort Team",
    metaDescription:
      "Meet Brianna from the Planet Pooch team in Franklin Square, NY.",
  },
  veronica: {
    slug: "veronica",
    name: "Veronica",
    role: "Team Member",
    metaTitle: "Meet Veronica | Planet Pooch Pet Resort Team",
    metaDescription:
      "Meet Veronica from the Planet Pooch team in Franklin Square, NY.",
  },
  ashley: {
    slug: "ashley",
    name: "Ashley",
    role: "Team Member",
    metaTitle: "Meet Ashley | Planet Pooch Pet Resort Team",
    metaDescription:
      "Meet Ashley from the Planet Pooch team in Franklin Square, NY.",
  },
  gabi: {
    slug: "gabi",
    name: "Gabi",
    role: "Groomer",
    metaTitle: "Meet Gabi | Planet Pooch Mobile Groomer",
    metaDescription:
      "Meet Gabi, mobile groomer at Planet Pooch — Long Island's luxury mobile grooming and pet resort.",
  },
  rebecca: {
    slug: "rebecca",
    name: "Rebecca",
    role: "Team Member",
    metaTitle: "Meet Rebecca | Planet Pooch Pet Resort Team",
    metaDescription:
      "Meet Rebecca from the Planet Pooch team in Franklin Square, NY.",
  },
} satisfies Record<string, TeamMember>;

export type TeamSlug = keyof typeof team;
