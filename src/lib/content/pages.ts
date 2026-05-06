import type { ContentPage } from "./types";

const groomingPricingRows = (label: string, examples: string, prices: Array<[string, string]>) => ({
  intro: `${label}\n${examples}`,
  rows: prices.map(([weight, price]) => [weight, price]),
});

export const contentPages = {
  "grooming-pricing": {
    slug: "grooming-pricing",
    title: "Grooming Pricing",
    eyebrow: "Mobile Grooming",
    hero: "Transparent pricing for every breed, coat, and size.",
    metaTitle: "Mobile Dog Grooming Pricing | Long Island | Planet Pooch",
    metaDescription:
      "Mobile dog grooming prices on Long Island — basic full grooms, long-haired baths, short-haired baths, and Plus / Premium spa upgrades.",
    image: "/tour-space.jpg",
    sections: [
      {
        type: "pricing",
        title: "Basic Full Groom with Haircut",
        intro: "Shihtsu, Yorkie, Doodle, Poodle, and similar breeds.",
        columns: ["Weight", "Price"],
        rows: [
          ["Up to 15 lbs", "$150–$165"],
          ["16–25 lbs", "$165–$200"],
          ["26–40 lbs", "$200–$235"],
          ["41–60 lbs", "$235–$270"],
          ["61–80 lbs", "$270–$305"],
          ["81 lbs & up", "$305 & up"],
        ],
        note:
          "Prices are based on pets groomed on a regular basis. Extra charges may apply for matted or impacted coats, special handling, or aggressive behavior.",
      },
      {
        type: "pricing",
        title: "Basic Long-Haired Bath",
        intro: "Golden Retriever, Husky, German Shepherd, Pomsky, and similar breeds.",
        columns: ["Weight", "Price"],
        rows: [
          ["Up to 20 lbs", "$150–$165"],
          ["21–40 lbs", "$165–$200"],
          ["41–60 lbs", "$200–$235"],
          ["61–80 lbs", "$235–$270"],
          ["81 lbs & up", "$270 & up"],
        ],
      },
      {
        type: "pricing",
        title: "Basic Short-Haired Bath",
        intro: "Pug, Beagle, Boxer, Labrador, and similar breeds.",
        columns: ["Weight", "Price"],
        rows: [
          ["Up to 25 lbs", "$110"],
          ["26–45 lbs", "$110–$140"],
          ["46–65 lbs", "$140–$170"],
          ["66–85 lbs", "$170–$200"],
          ["86 lbs & up", "$200 & up"],
        ],
      },
      {
        type: "tieredPricing",
        title: "Plus & Premium Upgrades",
        intro: "Add a Plus or Premium upgrade to any basic groom or bath above.",
        tiers: [
          {
            name: "Plus",
            price: "+$19",
            description: "An elevated finish on top of the basic service.",
            features: ["3-Step Dental treatment", "Hydrating Butter Balm"],
          },
          {
            name: "Premium",
            price: "+$29",
            description: "A full spa-day experience for your pet.",
            features: [
              "Cucumber Melon Facial",
              "Aloe Vera Paw Cleanser",
              "Premium Shampoo",
              "Report Card with Photo",
            ],
            featured: true,
          },
        ],
        note: "We use boutique, handcrafted products including Warren London and HydraGroom.",
      },
      {
        type: "callout",
        title: "Looking for cat grooming?",
        body:
          "We offer dedicated 2-on-1 cat grooming services 1–2 days a month with a setup designed specifically for cats.",
        cta: { label: "Cat Experience", href: "/cat-experience" },
      },
    ],
  },
  "mobile-grooming-packages": {
    slug: "mobile-grooming-packages",
    title: "Mobile Grooming Packages",
    eyebrow: "Mobile Grooming",
    hero: "Compare Basic, Plus, and Premium — and pick à la carte upgrades.",
    metaTitle: "Mobile Grooming Packages | Plus & Premium | Planet Pooch",
    metaDescription:
      "Compare our Basic, Plus, and Premium mobile grooming packages. We use boutique, handcrafted products from Warren London, HydraGroom, and other top-tier professional lines.",
    image: "/tour-space.jpg",
    sections: [
      {
        type: "prose",
        eyebrow: "Boutique products",
        title: "Spa-quality care, made in the USA.",
        paragraphs: [
          "Once you've determined your basic pricing, consider upgrading to a Plus or Premium option for an elevated, spa-quality grooming experience.",
          "We take pride in using products that are boutique, handcrafted, and produced in the USA — including Warren London, HydraGroom, and other trusted professional grooming lines.",
        ],
      },
      {
        type: "comparison",
        title: "Package Comparison",
        columns: ["Service", "Basic", "Plus (+$19)", "Premium (+$29)"],
        rows: [
          { label: "Nail cut and grind", values: [true, true, true] },
          { label: "Ears cleaned (and plucked upon request)", values: [true, true, true] },
          { label: "Bath, shampoo, and conditioner", values: [true, true, true] },
          { label: "Anal glands expressed upon request", values: [true, true, true] },
          { label: "Hand blow dry", values: [true, true, true] },
          { label: "Fluffing and brushing", values: [true, true, true] },
          { label: "Haircut", values: [true, true, true] },
          { label: "Signature bow and bandana", values: [true, true, true] },
          { label: "3-Step Dental", values: [false, true, true] },
          { label: "Hydrating Butter Balm", values: [false, true, true] },
          { label: "Cucumber Melon Facial", values: [false, false, true] },
          { label: "Aloe Vera Paw Cleanser", values: [false, false, true] },
          { label: "Premium Shampoo", values: [false, false, true] },
          { label: "Report Card with Photo", values: [false, false, true] },
        ],
      },
      {
        type: "list",
        title: "À la carte add-ons",
        intro: "Customize any basic groom with individual upgrades.",
        items: [
          "3-Step Dental — $16",
          "Hydrating Butter Balm — $6",
          "Cucumber Melon Facial — $6",
          "Aloe Vera Paw Cleanser — $6",
          "Premium Shampoo — $10",
          "Report Card with Photo — $5",
        ],
      },
      {
        type: "callout",
        title: "Ready to book?",
        body:
          "Tell us your pet's coat type, sensitivities, and preferred haircut style. We'll set you up with the right package and a date that works.",
        cta: { label: "Book Now", href: "/contact" },
      },
    ],
  },
  "grooming-packages": {
    slug: "grooming-packages",
    canonicalSlug: "mobile-grooming-packages",
    title: "Grooming Packages",
    eyebrow: "Mobile Grooming",
    hero: "Compare Basic, Plus, and Premium — and pick à la carte upgrades.",
    metaTitle: "Mobile Grooming Packages | Plus & Premium | Planet Pooch",
    metaDescription:
      "Compare our Basic, Plus, and Premium mobile grooming packages. We use boutique, handcrafted products from Warren London, HydraGroom, and other top-tier professional lines.",
    image: "/tour-space.jpg",
    sections: [
      {
        type: "callout",
        title: "Same packages, more details on our Mobile Grooming page.",
        body:
          "Compare Basic, Plus, and Premium options and see all à la carte upgrades on the full Mobile Grooming Packages page.",
        cta: { label: "Mobile Grooming Packages", href: "/mobile-grooming-packages" },
      },
    ],
  },
  "spa-services": {
    slug: "spa-services",
    canonicalSlug: "grooming-pricing",
    title: "Spa Services",
    eyebrow: "Mobile Grooming",
    hero: "Mobile spa services delivered to your driveway.",
    metaTitle: "Mobile Pet Spa Services | Long Island | Planet Pooch",
    metaDescription:
      "Mobile pet spa services across Long Island and the Hamptons — full grooms, long- and short-haired baths, dental, and Plus / Premium spa upgrades.",
    image: "/tour-space.jpg",
    sections: [
      {
        type: "callout",
        title: "Browse the full spa menu and pricing.",
        body:
          "Our mobile spa pricing covers basic grooms and baths plus Plus and Premium upgrades with boutique, handcrafted products.",
        cta: { label: "See full grooming pricing", href: "/grooming-pricing" },
      },
    ],
  },
  "pet-grooming-hamptons": {
    slug: "pet-grooming-hamptons",
    title: "Mobile Pet Grooming in the Hamptons",
    eyebrow: "Hamptons Service",
    hero: "We bring the luxury pet spa to your Hamptons home.",
    metaTitle: "Mobile Pet Grooming Hamptons | Planet Pooch",
    metaDescription:
      "Mobile dog and cat grooming throughout the Hamptons. Planet Pooch brings a luxury pet spa to your door — call to set up your pet's next appointment.",
    image: "/tour-space.jpg",
    sections: [
      {
        type: "prose",
        title: "We'll make your pets look their best.",
        paragraphs: [
          "At Planet Pooch, we are devoted to providing you and your pets the absolute best service. We understand how important your pet is to your family — and when they come to Planet Pooch, we make them a part of ours.",
          "Planet Pooch is the total solution for all of your pet grooming needs: a mobile pet grooming company that brings a luxury pet spa to your door. Call us today to set up your pet's next grooming appointment.",
        ],
      },
      {
        type: "pricing",
        title: "Hamptons Full Groom with Haircut",
        columns: ["Weight", "Price"],
        rows: [
          ["Up to 15 lbs", "$275"],
          ["16–25 lbs", "$335–$375"],
          ["26–40 lbs", "$375–$425"],
          ["41–60 lbs", "$425–$475"],
          ["61–80 lbs", "$475–$525"],
          ["81 lbs & up", "$525 & up"],
        ],
        note:
          "Hamptons pricing reflects extended travel and service area. Extra charges may apply for matted or impacted coats, special handling, or aggressive behavior.",
      },
      {
        type: "pricing",
        title: "Hamptons Long-Haired Bath",
        intro: "Golden Retriever, Husky, German Shepherd, Pomsky, and similar breeds.",
        columns: ["Weight", "Price"],
        rows: [
          ["0–20 lbs", "$275"],
          ["21–40 lbs", "$325–$375"],
          ["41–60 lbs", "$375–$425"],
          ["61–80 lbs", "$425–$475"],
          ["81 lbs & up", "$475 & up"],
        ],
      },
      {
        type: "pricing",
        title: "Hamptons Short-Haired Bath",
        intro: "Pug, Beagle, Boxer, Labrador, and similar breeds.",
        columns: ["Weight", "Price"],
        rows: [
          ["Up to 25 lbs", "$220"],
          ["26–45 lbs", "$225–$275"],
          ["46–65 lbs", "$275–$325"],
          ["66–85 lbs", "$325–$375"],
          ["86 lbs & up", "$375 & up"],
        ],
      },
    ],
  },
  "cat-experience": {
    slug: "cat-experience",
    title: "The Planet Pooch Cat Experience",
    eyebrow: "Cat Grooming",
    hero: "Two cat-grooming professionals. One calm, focused session.",
    metaTitle: "Mobile Cat Grooming Long Island | Planet Pooch",
    metaDescription:
      "Specialty 2-on-1 mobile cat grooming on Long Island. Limited dates each month with a setup designed specifically for cats — short-hair, long-hair, dental, and more.",
    image: "/tour-space.jpg",
    sections: [
      {
        type: "prose",
        paragraphs: [
          "Cat grooming can be tricky — that's why Planet Pooch sends out two cat grooming professionals to work 2-on-1 with your cat. Services are limited to 1 or 2 days a month, and our grooming unit is set up specifically for cat grooming on those days.",
          "Call today for more information and to make your appointment.",
        ],
      },
      {
        type: "list",
        title: "Pricing & Services",
        items: [
          "Short-Haired Cat Bath — $225 (nails trimmed, ears cleaned, shampoo, fluff dry, brushing)",
          "Long-Haired Cat Bath — $250 (adds sanitary and pad trim)",
          "Short-Haired Cat Groom with haircut — $250 (includes complete bath service)",
          "Long-Haired Cat Groom with haircut — $275 (includes complete bath service)",
          "Furminator de-shed treatment — $50",
          "Dental Care for Cats — $50",
          "Soft Claws Application — $50 (humane alternative to declawing)",
        ],
      },
      {
        type: "checklist",
        title: "Why cat grooming matters",
        items: [
          "Reduces loose fur and decreases hairballs",
          "Prevents matting in long-haired breeds",
          "Replenishes skin and coat",
          "Trims nails to avoid them growing into pads",
          "Cleans ears to help prevent infections",
          "Helps cats with medical issues who can't groom themselves efficiently",
          "Bathes cats safely — most cats don't like water, but our groomers have the expertise",
        ],
      },
      {
        type: "callout",
        title: "Additional fees may apply",
        body:
          "Matted fur, aggressive cats, fleas/ticks, and special handling may incur additional charges. We'll discuss everything upfront when you book.",
      },
    ],
  },
  "our-vans": {
    slug: "our-vans",
    title: "Our Mobile Grooming Vans",
    eyebrow: "Mobile Grooming",
    hero: "Built for hygiene, climate, and safety — every appointment.",
    metaTitle: "Mobile Grooming Vans | Wag N Tails & Hanvey | Planet Pooch",
    metaDescription:
      "Our Wag N Tails and Hanvey-built mobile grooming vans are climate-controlled, fully self-contained, and cleaned between every appointment.",
    image: "/our-resort-exterior.jpeg",
    sections: [
      {
        type: "prose",
        paragraphs: [
          "We partner with Wag N Tails and Hanvey Engineering to outfit our grooming vehicles, ensuring reliable daily operation with minimal downtime.",
        ],
      },
      {
        type: "checklist",
        title: "Clean, Safe, and Sanitary",
        items: [
          "Cleaned between every appointment",
          "Built-in equipment — you don't need to provide anything",
          "Built-in restraints and harnesses keep pets secure",
        ],
      },
      {
        type: "checklist",
        title: "Climate Control",
        items: [
          "20,000 BTU LP furnace with thermostat for winter",
          "15,000 BTU low-profile roof-mounted air conditioner for summer",
        ],
      },
      {
        type: "callout",
        title: "Self-contained — no hookups required.",
        body:
          "Our vans are fully equipped with fresh water and electricity. We don't need to plug into your home or use your hose.",
      },
    ],
  },
  "in-house-grooming": {
    slug: "in-house-grooming",
    title: "In-House Grooming",
    eyebrow: "For Resort Clients",
    hero: "Grooming services for our daycare and boarding clients.",
    metaTitle: "In-House Dog Grooming | Daycare & Boarding Clients | Planet Pooch",
    metaDescription:
      "Our in-house grooming is exclusively for dogs enrolled in daycare or boarding at our Franklin Square resort. Stay 2+ nights and save 20% on grooming services.",
    image: "/our-resort-exterior.jpeg",
    sections: [
      {
        type: "callout",
        title: "Available to resort clients only.",
        body:
          "Our in-house grooming is not open to the public. It's available exclusively to dogs currently enrolled in our daycare or boarding programs.",
      },
      {
        type: "prose",
        paragraphs: [
          "If you're already booking your dog into daycare or boarding, in-house grooming is a convenient way to bundle services. Our team handles bathing, brush-outs, nail care, and full grooms during their stay — so they go home looking and feeling their best.",
        ],
      },
      {
        type: "callout",
        title: "Save 20% with a 2+ night stay",
        body:
          "Boarding guests staying with us for 2 or more nights receive 20% off any in-house grooming service.",
      },
      {
        type: "prose",
        title: "Looking for grooming without a stay?",
        paragraphs: [
          "If your dog isn't a daycare or boarding client, our mobile grooming team comes to you across Long Island and the Hamptons.",
        ],
      },
    ],
  },
  "group-play": {
    slug: "group-play",
    title: "Group Play",
    eyebrow: "Daycare",
    hero: "Supervised social play, organized by size and energy.",
    metaTitle: "Dog Group Play Daycare | Long Island | Planet Pooch",
    metaDescription:
      "Supervised group play daycare in Franklin Square, NY. We organize playgroups by size and temperament with a free meet-and-greet evaluation before your dog's first day.",
    image: "/hero-dog.jpg",
    sections: [
      {
        type: "prose",
        paragraphs: [
          "Dogs are naturally social creatures that benefit greatly from interaction with other dogs. Group play provides socialization, exercise, mental stimulation, and helps reduce anxiety.",
        ],
      },
      {
        type: "timeline",
        title: "How we introduce a new dog",
        items: [
          {
            time: "Step 1",
            label: "Free temperament evaluation",
            body:
              "We start with a complimentary evaluation. Staff observe your dog's behavior in our evaluation room as they acclimate to the space.",
          },
          {
            time: "Step 2",
            label: "Gradual introductions",
            body:
              "We bring in another dog from a distance and progressively close the gap as comfort increases.",
          },
          {
            time: "Step 3",
            label: "Welcome to the pack",
            body:
              "If the meet-and-greet goes well, your dog can stay the rest of the day for free and join future group play sessions.",
          },
        ],
      },
      {
        type: "checklist",
        title: "Supervised play, organized thoughtfully",
        items: [
          "Separate play areas organized by dog size",
          "Adjustments based on individual play style and energy level",
          "Trained staff supervising every group",
        ],
      },
      {
        type: "callout",
        title: "Important requirement",
        body:
          "Dogs over one year old must be spayed or neutered, unless a veterinarian advises otherwise.",
      },
      {
        type: "callout",
        title: "Group play not a fit?",
        body:
          "For dogs who do better individually, our Enrichment program offers one-on-one activities tailored to their comfort level.",
        cta: { label: "Explore Enrichment", href: "/enrichment" },
      },
    ],
  },
  "daycare-pricing": {
    slug: "daycare-pricing",
    title: "Daycare Pricing",
    eyebrow: "Daycare",
    hero: "Day rates and multi-day packs that lower the cost per visit.",
    metaTitle: "Dog Daycare Pricing | Day Packs | Planet Pooch",
    metaDescription:
      "Dog daycare pricing in Franklin Square — full-day, half-day, and 5/10/20-day packs that bring the per-day cost down to as little as $42.33.",
    image: "/hero-dog.jpg",
    sections: [
      {
        type: "tieredPricing",
        title: "Full Day Daycare",
        intro: "Drop off any time during operating hours and stay until 7pm.",
        tiers: [
          {
            name: "Single day",
            price: "$51",
            cadence: "per day",
            features: ["Full day (7am–7pm)", "Group play with daily rest periods"],
          },
          {
            name: "5-Day Pack",
            price: "$226.95",
            cadence: "$45.39 per day",
            features: ["5 full days of daycare", "Expires 30 days after purchase"],
          },
          {
            name: "10-Day Pack",
            price: "$433.50",
            cadence: "$43.35 per day",
            features: ["10 full days of daycare", "Expires 60 days after purchase"],
            featured: true,
          },
          {
            name: "20-Day Pack",
            price: "$846.60",
            cadence: "$42.33 per day",
            features: ["20 full days of daycare", "Expires 90 days after purchase"],
          },
        ],
      },
      {
        type: "tieredPricing",
        title: "Half Day Daycare",
        tiers: [
          {
            name: "Morning Session",
            price: "$41",
            cadence: "per day",
            description: "7am–12:30pm only.",
            features: [
              "If your pet is not picked up by 12:30pm, the full day rate applies",
            ],
          },
        ],
      },
      {
        type: "callout",
        title: "Looking for one-on-one time?",
        body:
          "Our Enrichment program offers individual activities for dogs who don't thrive in group settings.",
        cta: { label: "Enrichment Activities", href: "/enrichment-activities" },
      },
    ],
  },
  "group-play-pricing": {
    slug: "group-play-pricing",
    canonicalSlug: "daycare-pricing",
    title: "Group Play Pricing",
    eyebrow: "Daycare",
    hero: "Day rates and multi-day packs for group-play daycare.",
    metaTitle: "Group Play Daycare Pricing | Planet Pooch",
    metaDescription:
      "Group play daycare pricing in Franklin Square — full-day, half-day, and 5/10/20-day packs.",
    image: "/hero-dog.jpg",
    sections: [
      {
        type: "callout",
        title: "Same pricing on our Daycare Pricing page.",
        body:
          "Our group play and daycare pricing are the same. See full-day rates, half-day options, and multi-day packs in detail.",
        cta: { label: "See full daycare pricing", href: "/daycare-pricing" },
      },
    ],
  },
  "puppy-socialization-program": {
    slug: "puppy-socialization-program",
    title: "Puppy Socialization Program",
    eyebrow: "Daycare",
    hero: "A three-session foundation for puppies 4 months to 1 year.",
    metaTitle: "Puppy Socialization Program Long Island | Planet Pooch",
    metaDescription:
      "Three one-hour socialization sessions for puppies 4 months to 1 year. $79 per session — supervised play, enrichment, and resource-guarding guidance.",
    image: "/testimonial-dog.jpg",
    sections: [
      {
        type: "prose",
        paragraphs: [
          "Our Puppy Socialization Program is a three-session experience at $79 per session, with each session lasting one hour. It's a learning opportunity designed to help young puppies develop the skills to interact with their environment in a positive, safe way.",
        ],
      },
      {
        type: "checklist",
        title: "Each session includes",
        items: [
          "Supervised play with dogs of various sizes",
          "Enrichment activities — snuffle mats, frozen Kongs, treat hide-and-seek",
          "Outdoor potty breaks",
          "Guidance with resource guarding",
          "Fresh water available throughout",
        ],
      },
      {
        type: "prose",
        title: "Why early socialization matters",
        paragraphs: [
          "Well-socialized puppies learn how to interact appropriately with other dogs and humans, making them more well-rounded, adaptable, and easier to train.",
          "This foundation reduces fear-based behaviors and helps prevent issues like excessive barking or territorial aggression.",
        ],
      },
      {
        type: "list",
        title: "Program requirements",
        items: [
          "Age: 4 months to 1 year old",
          "Vaccination: Rabies vaccine required, plus current vaccination paperwork",
          "What to bring: Vaccination records, collar or harness, leash",
        ],
      },
      {
        type: "callout",
        title: "Graduation",
        body:
          "Puppies receive a Certificate of Completion and become eligible for Group Play daycare upon finishing the program.",
      },
    ],
  },
  "daycare-a-day-in-the-life": {
    slug: "daycare-a-day-in-the-life",
    title: "Daycare: A Day in the Life",
    eyebrow: "Daycare",
    hero: "What a typical day at Planet Pooch looks like for your dog.",
    metaTitle: "A Day in the Life of Daycare | Planet Pooch",
    metaDescription:
      "From drop-off to pickup, here's what a typical day at Planet Pooch daycare looks like — group play, rest periods, enrichment, and supervised social time.",
    image: "/hero-dog.jpg",
    sections: [
      {
        type: "timeline",
        title: "A typical day at daycare",
        items: [
          {
            time: "7:00 AM",
            label: "Drop-off opens",
            body:
              "Check-in begins. Our team welcomes your dog and gets them settled into the morning playgroup.",
          },
          {
            time: "7:00 AM – 12:30 PM",
            label: "Morning group play",
            body:
              "Supervised play with size-and-temperament-matched groups, plus enrichment options for dogs who prefer something quieter.",
          },
          {
            time: "12:30 PM – 1:30 PM",
            label: "Rest period",
            body:
              "Every dog gets a quiet break. This rest window is closed to drop-offs and pickups.",
          },
          {
            time: "1:30 PM – 7:00 PM",
            label: "Afternoon group play",
            body:
              "Back to play and socialization, with optional enrichment activities for dogs who'd rather slow down.",
          },
          {
            time: "By 7:00 PM",
            label: "Pickup",
            body:
              "Full-day pickups by 7pm. Morning-session dogs head home by 12:30pm.",
          },
        ],
      },
      {
        type: "callout",
        title: "Want to add enrichment?",
        body:
          "Treadmill, agility, scent, nutrition, and Buddy Play sessions can be added to any daycare day.",
        cta: { label: "Enrichment Activities", href: "/enrichment-activities" },
      },
    ],
  },
  "boarding-pricing": {
    slug: "boarding-pricing",
    title: "Boarding Pricing",
    eyebrow: "Boarding",
    hero: "Suite types, group play, and one-on-one packages.",
    metaTitle: "Dog Boarding Pricing | Suites & Packages | Planet Pooch",
    metaDescription:
      "Overnight dog boarding pricing in Franklin Square. Express, Classic, XL, and Luxury suites — choose Group Play or 1-on-1 care. Holiday surcharge applies.",
    image: "/testimonial-dog.jpg",
    sections: [
      {
        type: "callout",
        title: "Holiday pricing",
        body:
          "An additional $5 per night will be applied during holiday periods. Holiday periods include 7 days before and after each major holiday.",
      },
      {
        type: "comparison",
        title: "Boarding Packages",
        intro: "Suite type and care style determine the nightly rate.",
        columns: ["Suite Type", "Group Play", "1-on-1"],
        rows: [
          { label: "Express (under 25 lbs)", values: ["$77", "$105"] },
          { label: "Express (under 40 lbs)", values: ["$88", "$115"] },
          { label: "Classic (4×6)", values: ["$110", "$135"] },
          { label: "XL (4.5×8)", values: ["$120", "$145"] },
          { label: "Luxury (6×6)", values: ["$155", "$180"] },
        ],
      },
      {
        type: "checklist",
        title: "1-on-1 package includes",
        items: [
          "Full day daycare during their stay",
          "Nighttime snack",
          "Six 1-on-1 outdoor relief periods with staff",
          "One enrichment activity per day",
        ],
      },
      {
        type: "callout",
        title: "See all boarding add-ons",
        body:
          "Enrichment activities, snacks, bedding, and in-house grooming can all be added to any boarding stay.",
        cta: { label: "Boarding Add-Ons", href: "/boarding-add-ons" },
      },
    ],
  },
  "boarding-packages": {
    slug: "boarding-packages",
    canonicalSlug: "boarding-pricing",
    title: "Boarding Packages",
    eyebrow: "Boarding",
    hero: "Express, Classic, XL, and Luxury suites — Group Play or 1-on-1.",
    metaTitle: "Boarding Suite Packages | Planet Pooch Pet Resort",
    metaDescription:
      "Boarding suite packages from Express to Luxury — pick Group Play or 1-on-1 care. Full pricing on our Boarding Pricing page.",
    image: "/testimonial-dog.jpg",
    sections: [
      {
        type: "callout",
        title: "Full package details on the Boarding Pricing page.",
        body:
          "All suite tiers, Group Play vs 1-on-1 care, and the 1-on-1 package contents are on the boarding pricing page.",
        cta: { label: "Boarding Pricing", href: "/boarding-pricing" },
      },
    ],
  },
  "boarding-add-ons": {
    slug: "boarding-add-ons",
    title: "Boarding Add-Ons",
    eyebrow: "Boarding",
    hero: "Enrichment, snacks, bedding, and grooming for your dog's stay.",
    metaTitle: "Boarding Add-Ons | Enrichment, Snacks, Spa | Planet Pooch",
    metaDescription:
      "Add enrichment activities, snacks, bedding, and in-house grooming to any boarding stay at Planet Pooch. 20% off grooming on stays of 2+ nights.",
    image: "/testimonial-dog.jpg",
    sections: [
      {
        type: "list",
        title: "Enrichment Activities",
        intro: "20 minutes per session — $25 each.",
        items: [
          "Treadmill Enrichment",
          "Agility Enrichment",
          "Nutrition Enrichment",
          "Scent Enrichment",
          "Buddy Play",
        ],
      },
      {
        type: "list",
        title: "Snacks & Treats",
        items: [
          "Pup Cup — $6",
          "Pup-kin Spiced Latte (seasonal) — $10",
          "Nutritional Enrichment Puzzle — $13",
          "Frozen Kong — $8",
          "Lick Mat — $8",
          "Holiday Meals — pricing TBD",
        ],
      },
      {
        type: "list",
        title: "Bedding & Spa",
        items: [
          "Bedding — $8 per day",
          "20% off in-house grooming on stays of 2 or more nights",
        ],
      },
      {
        type: "callout",
        title: "Booking your stay?",
        body:
          "Tell us which add-ons you'd like when you book and we'll build them into your reservation.",
        cta: { label: "Book Now", href: "/contact" },
      },
    ],
  },
  "boarding-a-day-in-the-life": {
    slug: "boarding-a-day-in-the-life",
    title: "Boarding: A Day in the Life",
    eyebrow: "Boarding",
    hero: "From wake-up call to last call — a day in the life of a Planet Pooch guest.",
    metaTitle: "A Day in the Life of Boarding | Planet Pooch",
    metaDescription:
      "What overnight boarding looks like at Planet Pooch — meal times, group play, enrichment, rest, and bedtime.",
    image: "/testimonial-dog.jpg",
    sections: [
      {
        type: "timeline",
        title: "A tail-wagging day at Planet Pooch",
        items: [
          {
            time: "6:00 AM",
            label: "Wake-up call",
            body:
              "Outdoor potty breaks and breakfast served in individual suites to help dogs feel at home.",
          },
          {
            time: "7:00 AM – 12:30 PM",
            label: "Morning group play",
            body:
              "Group daycare and socialization. For dogs who prefer something quieter, we offer enrichment activities and one-on-one time in a cozy private area.",
          },
          {
            time: "12:30 PM – 1:30 PM",
            label: "Rest and recharge",
            body:
              "Quiet time in their suites with personal items. Add full daycare or extra enrichment if you'd like, plus optional room-service amenities.",
          },
          {
            time: "1:30 PM – 7:00 PM",
            label: "Afternoon group play",
            body:
              "More play and socialization, with options for quieter enrichment activities.",
          },
          {
            time: "7:00 PM",
            label: "Dinner",
            body: "Owner-provided meals served in their suites.",
          },
          {
            time: "9:00 PM",
            label: "Last call",
            body:
              "Final potty break and bedtime preparation for a comfortable night's rest.",
          },
        ],
      },
    ],
  },
  "what-is-enrichment": {
    slug: "what-is-enrichment",
    title: "What Is Enrichment?",
    eyebrow: "Enrichment",
    hero: "The five pillars that shape a happier, calmer, healthier dog.",
    metaTitle: "What Is Dog Enrichment? Five Pillars | Planet Pooch",
    metaDescription:
      "Canine enrichment addresses destruction, anxiety, hyperactivity, and more. Learn the five pillars: social, nutritional, occupational, sensory, and physical.",
    image: "/our-resort-exterior.jpeg",
    sections: [
      {
        type: "prose",
        paragraphs: [
          "Canine enrichment addresses behavioral issues including destruction, barking, escaping, anxiety, hyperactivity, obsessive or compulsive behaviors, and depression. The approach relies on five interconnected pillars.",
        ],
      },
      {
        type: "definitions",
        title: "The five pillars of enrichment",
        items: [
          {
            term: "Social",
            definition:
              "Contact with other species — humans, dogs, even objects. Exposure to varied people, places, and situations reduces fearfulness and aggression.",
          },
          {
            term: "Nutritional",
            definition:
              "Making meals stimulating by requiring dogs to work for food. This slows eating pace, enhances digestion, and builds a healthier mealtime relationship.",
          },
          {
            term: "Occupational",
            definition:
              "Challenges your dog's brain and body by giving them a job. It decreases boredom-related behavioral problems and promotes mental and physical stimulation.",
          },
          {
            term: "Sensory",
            definition:
              "Engaging sight, sound, taste, touch, and especially smell. Particularly beneficial for anxious or stressed dogs and helpful for training consistency.",
          },
          {
            term: "Physical",
            definition:
              "Exercise that maintains healthy weight, builds muscle strength, and improves cardiovascular fitness — encouraging natural instincts like running and jumping.",
          },
        ],
      },
      {
        type: "callout",
        title: "See enrichment in action",
        body:
          "Treadmill, agility, scent, nutrition, and buddy play — explore our enrichment activities and what each one offers.",
        cta: { label: "Enrichment Activities", href: "/enrichment-activities" },
      },
    ],
  },
  "enrichment-activities": {
    slug: "enrichment-activities",
    title: "Enrichment Activities",
    eyebrow: "Enrichment",
    hero: "Five purposeful activities, 20 minutes each.",
    metaTitle: "Dog Enrichment Activities Long Island | Planet Pooch",
    metaDescription:
      "Treadmill, agility, nutritional, scent, and buddy play enrichment activities. 20 minutes each, $25 per session — add to any daycare or boarding day.",
    image: "/our-resort-exterior.jpeg",
    sections: [
      {
        type: "definitions",
        title: "What we offer",
        intro: "Each enrichment activity is 20 minutes and costs $25 per session.",
        items: [
          {
            term: "Treadmill Enrichment",
            definition:
              "A unique outlet for burning off excess energy, allowing your dog to exercise without excessive strain on muscles and joints — while engaging something different than they're used to.",
          },
          {
            term: "Agility Enrichment",
            definition:
              "Physical and mental stimulation through fun challenges: fetch, tug-of-war, obstacle courses, and a rotating set of interesting toys.",
          },
          {
            term: "Nutritional Enrichment",
            definition:
              "Snuffle mats and food puzzles that stimulate natural foraging instincts. Dogs use their sense of smell to search for hidden treats while staying entertained.",
          },
          {
            term: "Scent Enrichment",
            definition:
              "Sensory activities using artificial flowers in snuffle mats or sensory bins to encourage natural curiosity and sniffing instincts.",
          },
          {
            term: "Buddy Play Enrichment",
            definition:
              "A thoughtfully curated experience for dogs who thrive in smaller social settings. Each group is hand-selected based on temperament, play style, and comfort level.",
          },
        ],
      },
      {
        type: "callout",
        title: "Add to any daycare or boarding day",
        body:
          "All enrichment activities can be added to a daycare day or boarding stay. Tell us when you book.",
        cta: { label: "Book Now", href: "/contact" },
      },
    ],
  },
  "enrichment-a-day-in-the-life": {
    slug: "enrichment-a-day-in-the-life",
    title: "Enrichment: A Day in the Life",
    eyebrow: "Enrichment",
    hero: "What a one-on-one enrichment day looks like.",
    metaTitle: "A Day in the Life of Enrichment | Planet Pooch",
    metaDescription:
      "From arrival to pickup, here's how a one-on-one enrichment day unfolds at Planet Pooch — sensory work, scent games, agility, and gentle structured play.",
    image: "/our-resort-exterior.jpeg",
    sections: [
      {
        type: "timeline",
        title: "A typical enrichment day",
        items: [
          {
            time: "7:00 AM – 9:00 AM",
            label: "Arrival and settle-in",
            body:
              "We welcome your dog and let them explore the space at their own pace before any structured activity begins.",
          },
          {
            time: "9:00 AM – 12:30 PM",
            label: "Morning enrichment block",
            body:
              "One or two 20-minute enrichment sessions matched to your dog — treadmill, scent, nutrition, or agility — separated by quiet rest.",
          },
          {
            time: "12:30 PM – 1:30 PM",
            label: "Rest period",
            body:
              "Every dog gets a quiet break in a cozy private area.",
          },
          {
            time: "1:30 PM – 6:00 PM",
            label: "Afternoon activity",
            body:
              "An afternoon enrichment session with optional Buddy Play if your dog enjoys small-group settings.",
          },
          {
            time: "By 7:00 PM",
            label: "Pickup",
            body:
              "Your dog goes home tired in the best way — mentally engaged, physically exercised, and calm.",
          },
        ],
      },
    ],
  },
  "our-events": {
    slug: "our-events",
    title: "Our Events",
    eyebrow: "Events",
    hero: "Birthday parties, field trips, holiday photos, and themed days.",
    metaTitle: "Dog Events Long Island | Birthday & Holiday | Planet Pooch",
    metaDescription:
      "Dog events at Planet Pooch — birthday parties, field-trip adventures, photos with Santa, and themed daycare days throughout the year.",
    image: "/our-resort-exterior.jpeg",
    sections: [
      {
        type: "prose",
        paragraphs: [
          "We host signature events year-round so your dog gets more than a great daycare day. Pick a category below to learn more, or call us about availability.",
        ],
      },
      {
        type: "definitions",
        title: "Event categories",
        items: [
          {
            term: "Birthday Party",
            definition:
              "Standard ($189) and Premium ($349) packages with photoshoots, decor, pup cups, custom cakes, and goodie bags.",
          },
          {
            term: "Field Trip Adventure",
            definition:
              "$69 add-on to daycare. Bark-in-the-Park guided walks at Hempstead Lake Park with refreshments and pup cups.",
          },
          {
            term: "Photos with Santa",
            definition:
              "Annual holiday photo opportunity at our Franklin Square facility — December.",
          },
          {
            term: "Themed Daycare Days",
            definition:
              "Doodle Friday, Frenchie Friday, Golden Retriever Tuesday, Wiener Wednesday, Howloween Costume Party, Pupsicle Party, and more throughout the year.",
          },
        ],
      },
      {
        type: "callout",
        title: "Want to host or join an event?",
        body:
          "Call us to ask about availability, dates, and how to book your dog into a themed day or party.",
        cta: { label: "Call (516) 993-3603", href: "tel:+15169933603" },
      },
    ],
  },
  events: {
    slug: "events",
    canonicalSlug: "our-events",
    title: "Events",
    eyebrow: "Events",
    hero: "All upcoming events at Planet Pooch.",
    metaTitle: "Events at Planet Pooch Pet Resort",
    metaDescription:
      "Upcoming events at Planet Pooch — birthday parties, field trips, photos with Santa, and themed daycare days.",
    image: "/our-resort-exterior.jpeg",
    sections: [
      {
        type: "callout",
        title: "Browse all of our events",
        body:
          "We've moved our events landing page. Check Our Events for the full list of categories and upcoming dates.",
        cta: { label: "Our Events", href: "/our-events" },
      },
    ],
  },
  "birthday-party": {
    slug: "birthday-party",
    title: "Birthday Party",
    eyebrow: "Events",
    hero: "Celebrate your dog's big day with us.",
    metaTitle: "Dog Birthday Party Long Island | Planet Pooch",
    metaDescription:
      "Standard ($189) and Premium ($349) birthday party packages — photoshoot, decor, pup cups, custom signage, and optional cakes and goodie bags.",
    image: "/testimonial-dog.jpg",
    sections: [
      {
        type: "tieredPricing",
        title: "Birthday Packages",
        tiers: [
          {
            name: "Standard Party",
            price: "$189",
            features: [
              "Photoshoot to capture the fun",
              "Personalized birthday card",
              "Birthday shout-out on our social media",
              "Decorative balloons and custom signage",
              "Pup cups for your dog and their friends",
            ],
          },
          {
            name: "Premium Party",
            price: "$349",
            features: [
              "Bone-shaped birthday cake",
              "Goodie bags for their friends",
              "Photoshoot to capture the fun",
              "Personalized birthday card",
              "Birthday shout-out on our social media",
              "Decorative balloons and custom signage",
              "Pup cups for your dog and their friends",
            ],
            featured: true,
          },
        ],
        note:
          "Add-ons available — goodie bags, dog-friendly birthday cake, specialty treats, and more.",
      },
      {
        type: "callout",
        title: "Book your dog's birthday party",
        body: "Call (516) 993-3603 to lock in a date and pick your package.",
        cta: { label: "Call (516) 993-3603", href: "tel:+15169933603" },
      },
    ],
  },
  "field-trip": {
    slug: "field-trip",
    title: "Field Trip Adventure",
    eyebrow: "Events",
    hero: "Bark-in-the-Park guided adventures at Hempstead Lake.",
    metaTitle: "Dog Field Trip Adventures | Planet Pooch",
    metaDescription:
      "Bark-in-the-Park guided dog field trips at Hempstead Lake Park — $69 add-on to daycare. Limited availability, advance booking required.",
    image: "/hero-dog.jpg",
    sections: [
      {
        type: "callout",
        title: "$69 add-on to daycare",
        body:
          "Field Trip Adventures are available exclusively as an add-on to a daycare day. Limited availability — book in advance.",
      },
      {
        type: "prose",
        title: "Bark in the Park: a tail of adventure",
        paragraphs: [
          "Outdoor excursions where dogs experience nature through guided walks. Trails, water wading, grass, and leaves — all the natural elements dogs love. Staff supervise the group and provide refreshment breaks with water and dog-friendly treats.",
        ],
      },
      {
        type: "timeline",
        title: "Itinerary at Hempstead Lake Park",
        items: [
          { time: "10:00 AM", label: "Departure", body: "Departure from Planet Pooch." },
          { time: "10:30 AM", label: "Guided loop", body: "2-mile guided loop through the park." },
          {
            time: "11:00 AM",
            label: "Halfway break",
            body: "Refreshments and granola bars at the halfway point.",
          },
          {
            time: "11:30 AM",
            label: "Loop completion",
            body: "Pup cups for everyone as we finish the loop.",
          },
          { time: "12:00 PM", label: "Return", body: "Back to Planet Pooch." },
        ],
      },
      {
        type: "list",
        title: "Important requirements",
        items: [
          "Advance booking is mandatory — limited availability",
          "All participating dogs must maintain current flea and tick treatments",
        ],
      },
      {
        type: "callout",
        title: "Make your dog's world bigger",
        body:
          "Your pet's world is only as big as you make it. Let's make it an adventure.",
        cta: { label: "Call (516) 993-3603", href: "tel:+15169933603" },
      },
    ],
  },
  "photos-with-santa": {
    slug: "photos-with-santa",
    title: "Photos with Santa",
    eyebrow: "Events",
    hero: "An annual holiday photo session with your favorite four-legged family member.",
    metaTitle: "Dog Photos with Santa Long Island | Planet Pooch",
    metaDescription:
      "Annual holiday Photos with Santa event at Planet Pooch in Franklin Square, NY. Reserve your spot — call (516) 993-3603.",
    image: "/testimonial-dog.jpg",
    sections: [
      {
        type: "prose",
        paragraphs: [
          "Each holiday season, Planet Pooch hosts a Photos with Santa event at our Franklin Square facility. It's a quick, festive way to capture your dog with Santa for cards, the mantle, or the family group chat.",
        ],
      },
      {
        type: "callout",
        title: "Book your spot",
        body:
          "Photos with Santa is held annually in December. Call (516) 993-3603 or visit us to book a session.",
        cta: { label: "Call (516) 993-3603", href: "tel:+15169933603" },
      },
    ],
  },
  "about-us": {
    slug: "about-us",
    title: "About Us",
    eyebrow: "About",
    hero: "Family-owned, Long Island grown, and built around great care.",
    metaTitle: "About Planet Pooch | Long Island Pet Resort",
    metaDescription:
      "Planet Pooch was founded in 2014 by Andy Gonzaga as a mobile grooming business and grew into a full-service pet resort serving Long Island and the Hamptons.",
    image: "/our-resort-exterior.jpeg",
    sections: [
      {
        type: "prose",
        title: "Our origin story",
        paragraphs: [
          "Planet Pooch was established in 2014 by its owner, Andy Gonzaga. Andy began his career at 17 working alongside his mother Kathy in the grooming industry. He graduated from the New York School of Dog Grooming in 2010 and earned his professional license.",
          "What started as a single mobile grooming van quickly built a strong client base across Nassau County. From there, Planet Pooch grew into a full-service pet resort.",
        ],
      },
      {
        type: "prose",
        title: "What we offer today",
        paragraphs: [
          "Today, Planet Pooch operates as a comprehensive pet care provider. We run mobile grooming vans across Long Island and the Hamptons and a dedicated resort facility in Franklin Square offering daycare, boarding, training, and enrichment.",
          "The mission hasn't changed: every dog is treated like family — because for the people who love them, they are.",
        ],
      },
      {
        type: "callout",
        title: "Meet the team behind the resort",
        body:
          "From groomers to daycare specialists to our AKC Evaluator Trainer, our team is what makes Planet Pooch feel like home.",
        cta: { label: "Our Team", href: "/our-team" },
      },
    ],
  },
  "our-team": {
    slug: "our-team",
    title: "Our Team",
    eyebrow: "About",
    hero: "Genuine people who know your dog and understand their rhythm.",
    metaTitle: "Our Team | Planet Pooch Pet Resort",
    metaDescription:
      "Meet the groomers, daycare specialists, and trainers behind Planet Pooch — the people who care for your dog every day in Franklin Square, NY.",
    image: "/testimonial-dog.jpg",
    sections: [
      {
        type: "prose",
        paragraphs: [
          "Our team is the reason families across Long Island trust Planet Pooch with their dogs. From mobile grooming pros to daycare specialists, boarding caretakers, and our AKC Evaluator Trainer — they're what make every day here feel personal.",
          "Individual team bios are coming soon. In the meantime, the easiest way to meet us is to come by for a meet-and-greet.",
        ],
      },
      {
        type: "callout",
        title: "Come visit",
        body:
          "Stop in at 1114 Hempstead Turnpike, Franklin Square, or give us a call to book a meet-and-greet.",
        cta: { label: "Book Now", href: "/contact" },
      },
    ],
  },
  faqs: {
    slug: "faqs",
    title: "Frequently Asked Questions",
    eyebrow: "Help",
    hero: "Answers to the questions we hear most often.",
    metaTitle: "FAQs | Planet Pooch Mobile Grooming, Daycare, & Boarding",
    metaDescription:
      "Answers to common questions about mobile grooming, scheduling, payments, vaccines, weight limits, our service area, and more.",
    image: "/our-resort-exterior.jpeg",
    sections: [
      {
        type: "faq",
        title: "Mobile grooming",
        items: [
          {
            question: "Why can't I have the same time slot for every groom?",
            answer:
              "Mobile grooming is a little trickier than a brick-and-mortar shop. Scheduling consistency is hard because groomers travel between locations, and route efficiency depends on daily variables like client locations and service conditions.",
          },
          {
            question: "Why does mobile grooming cost more?",
            answer:
              "We are not simply a mobile version of an average grooming storefront. Mobile grooming is a personalized, attentive session with the highest-quality products and professional groomers — delivered to your driveway.",
          },
          {
            question: "How long does an appointment take?",
            answer:
              "The grooming process varies from dog to dog, but most appointments take 1 to 1½ hours.",
          },
          {
            question: "Will you need to plug into our home?",
            answer:
              "No. Our vans are fully equipped with fresh water and electricity — no hookups required.",
          },
          {
            question: "Can we watch?",
            answer:
              "We don't allow anyone else inside the van during a groom. It can distract your pup and make them more nervous.",
          },
          {
            question: "Do we need to be home during the appointment?",
            answer:
              "No. Established clients may leave keys or access codes for convenient service.",
          },
          {
            question: "What is your service area?",
            answer:
              "We service all of Nassau County, Suffolk County, and parts of the Hamptons.",
          },
        ],
      },
      {
        type: "faq",
        title: "Pricing & payments",
        items: [
          {
            question: "What types of payment do you accept?",
            answer:
              "Cash and credit card. We request advance notice for credit card payments to expedite checkout.",
          },
          {
            question: "Why has my price gone up?",
            answer:
              "Pricing reflects pet weight, coat condition, undercoat density, and matting. General price increases also occur to keep up with the competitive nature of the business and to ensure we're providing the best for your pet.",
          },
          {
            question: "Is there a weight or size limit?",
            answer:
              "No. Planet Pooch loves and accommodates dogs of all weights and sizes.",
          },
        ],
      },
      {
        type: "faq",
        title: "Special situations",
        items: [
          {
            question: "What if my dog is matted?",
            answer:
              "If your dog is severely matted, the groomer may have no choice but to shave them down for the dog's health and safety. Additional fees may apply.",
          },
          {
            question: "What if my dog is aggressive?",
            answer:
              "Tell us in advance so the groomer can prepare appropriately. Dogs that are overly aggressive and hindering the grooming process may incur additional fees, or in rare cases be refused service.",
          },
          {
            question: "What if my dog requires special handling?",
            answer:
              "Inform the office at booking. The groomer will assess your dog at the appointment and let you know if any additional special-handling costs may apply.",
          },
        ],
      },
    ],
  },
  "were-hiring": {
    slug: "were-hiring",
    title: "We're Hiring",
    eyebrow: "Careers",
    hero: "Want to spend your day with dogs? Let's talk.",
    metaTitle: "Careers at Planet Pooch | Long Island Pet Resort",
    metaDescription:
      "Join the Planet Pooch team in Franklin Square, NY. Reach out about grooming, daycare, boarding, training, and front-of-house roles.",
    image: "/hero-dog.jpg",
    sections: [
      {
        type: "prose",
        paragraphs: [
          "We're always looking for people who love dogs as much as we do. If you're interested in joining our team — whether as a groomer, daycare specialist, boarding caretaker, trainer, or front-of-house staff — get in touch.",
        ],
      },
      {
        type: "list",
        title: "How to apply",
        items: [
          "Email info@planet-pooch.com with your resume and the role you're interested in",
          "Or call (516) 993-3603 — ask for the manager on duty",
          "Or stop by 1114 Hempstead Turnpike, Franklin Square, NY 11010",
        ],
      },
      {
        type: "callout",
        title: "Follow us first",
        body:
          "See what a day with us looks like before you apply — Instagram, Facebook, TikTok, and YouTube under @planetpoochpetservices.",
        cta: { label: "Email us", href: "mailto:info@planet-pooch.com" },
      },
    ],
  },
  partners: {
    slug: "partners",
    title: "Partners & Resources",
    eyebrow: "Resources",
    hero: "Trusted local pet businesses we recommend.",
    metaTitle: "Pet Care Partners & Resources | Planet Pooch",
    metaDescription:
      "Trusted local veterinary care, animal rescues, and pet shops Planet Pooch partners with on Long Island.",
    image: "/our-resort-exterior.jpeg",
    sections: [
      {
        type: "prose",
        paragraphs: [
          "Pet care is bigger than any one business. We partner with vetted local veterinarians, rescues, and pet shops to make sure our clients have a full network of support.",
        ],
      },
      {
        type: "list",
        title: "Veterinary care",
        items: [
          "A & A Veterinary Hospital — 414 Franklin Ave, Franklin Square, NY 11010 — (516) 437-7222",
        ],
      },
      {
        type: "callout",
        title: "Run a pet business and want to partner?",
        body:
          "Veterinary offices, pet stores, rescues, and pet service providers — reach out about being featured on our resource page.",
        cta: { label: "Email us", href: "mailto:info@planet-pooch.com" },
      },
    ],
  },
  "thank-you": {
    slug: "thank-you",
    title: "Thank you!",
    eyebrow: "Confirmation",
    hero: "We'll be in touch shortly.",
    metaTitle: "Thank You | Planet Pooch Pet Resort",
    metaDescription:
      "We've received your inquiry. Our team will reach out to confirm scheduling and next steps.",
    image: "/testimonial-dog.jpg",
    sections: [
      {
        type: "prose",
        paragraphs: [
          "Thanks for reaching out. We've received your message and our team will get back to you as soon as possible during business hours.",
        ],
      },
      {
        type: "callout",
        title: "Need us sooner?",
        body:
          "Call us directly at (516) 993-3603 or email info@planet-pooch.com.",
        cta: { label: "Back to home", href: "/" },
      },
    ],
  },
  blog: {
    slug: "blog",
    title: "Planet Pooch Blog",
    eyebrow: "Blog",
    hero: "Notes on grooming, daycare, training, and life with dogs.",
    metaTitle: "Planet Pooch Blog | Mobile Grooming, Daycare, Training",
    metaDescription:
      "Stories and how-tos from the Planet Pooch team — grooming tips, daycare advice, seasonal pet care, and behind-the-scenes from our Franklin Square resort.",
    image: "/our-resort-exterior.jpeg",
    sections: [
      {
        type: "prose",
        paragraphs: [
          "Our team writes about what we see day to day — grooming questions we get asked again and again, the science behind enrichment, seasonal pet care, and stories from the resort.",
          "Individual posts are coming back online soon. In the meantime, you can follow us for everyday updates.",
        ],
      },
      {
        type: "callout",
        title: "Follow along while we rebuild the archive",
        body:
          "Find us on Instagram, Facebook, TikTok, and YouTube as @planetpoochpetservices for daily updates from the resort and the road.",
      },
    ],
  },
} satisfies Record<string, ContentPage>;

export type ContentPageSlug = keyof typeof contentPages;
