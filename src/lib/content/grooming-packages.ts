import type { ContentSection } from "./types";

export const groomingPackages = {
        type: "tieredPricing",
        id: "spa-upgrades",
        eyebrow: "Packages",
        title: "Our Packages",
        intro:
          "Every groom and bath includes the Basic package. Upgrade to Plus or Premium for an elevated, spa-day experience using boutique, handcrafted products including Warren London and HydraGroom.",
        tiers: [
          {
            name: "Basic",
            price: "Full Groom",
            features: [
              "Nail cut and grind",
              "Ears cleaned (and plucked upon request)",
              "Bath, shampoo, and conditioner",
              "Anal glands expressed upon request",
              "Hand blow dry",
              "Fluffing and brushing",
              "Haircut",
              "Signature bow and bandana",
            ],
          },
          {
            name: "Premium",
            price: "+$29",
            description: "Everything in Plus, plus:",
            features: [
              "Cucumber Melon Facial",
              "Aloe Vera Paw Cleanser",
              "Premium Shampoo",
              "Report Card with Photo",
            ],
            featured: true,
            badge: "Our most popular package",
          },
          {
            name: "Plus",
            price: "+$19",
            description: "Everything included with our Full Groom, plus:",
            features: ["3-Step Dental treatment", "Hydrating Butter Balm"],
          },
        ],
      } satisfies ContentSection;

export const groomingAddons = {
  type: "comparison",
  title: "Add-ons",
  columns: ["Service", "À la carte", "Basic", "Plus (+$19)", "Premium (+$29)"],
  rows: [
    { label: "Nail cut and grind", values: ["—", true, true, true] },
    { label: "Ears cleaned (and plucked upon request)", values: ["—", true, true, true] },
    { label: "Bath, shampoo, and conditioner", values: ["—", true, true, true] },
    { label: "Anal glands expressed upon request", values: ["—", true, true, true] },
    { label: "Hand blow dry", values: ["—", true, true, true] },
    { label: "Fluffing and brushing", values: ["—", true, true, true] },
    { label: "Haircut", values: ["—", true, true, true] },
    { label: "Signature bow and bandana", values: ["—", true, true, true] },
    { label: "3-Step Dental", values: ["$16", false, true, true] },
    { label: "Hydrating Butter Balm", values: ["$6", false, true, true] },
    { label: "Cucumber Melon Facial", values: ["$6", false, false, true] },
    { label: "Aloe Vera Paw Cleanser", values: ["$6", false, false, true] },
    { label: "Premium Shampoo", values: ["$10", false, false, true] },
    { label: "Report Card with Photo", values: ["$5", false, false, true] },
  ],
} satisfies ContentSection;
