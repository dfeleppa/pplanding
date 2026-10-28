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
