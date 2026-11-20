import type { ContentSection } from "./types";

export const mobileGroomingBenefits = {
  type: "benefitSplit",
  eyebrow: "Why mobile?",
  title: "Luxury grooming without leaving home.",
  body: "A private, one-on-one grooming experience right outside your door — no car rides, no cages, no stressful salon visit.",
  image: "/grooming-fresh.jpg",
  imageAlt: "Freshly groomed Yorkie with a bow tie at Planet Pooch",
  items: [
    { icon: "Heart", title: "No salon stress", description: "One-on-one grooming right outside your home." },
    { icon: "PawPrint", title: "Great for anxious dogs", description: "A calmer experience for pets who hate the groomer." },
    { icon: "Wind", title: "Hand-dried only", description: "Never cage-dried. Never rushed." },
    { icon: "Truck", title: "Fully equipped van", description: "No hookups needed. Most appointments take about 90 minutes." },
  ],
} satisfies ContentSection;
