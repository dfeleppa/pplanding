import type { ContentPage } from "./types";

/**
 * The five main service pages, with content from former sub-pages
 * consolidated into single rich pages. Sub-page URLs (e.g., /grooming-pricing/,
 * /boarding-add-ons/, /our-events/) are 301 redirected to these in
 * next.config.ts.
 *
 * Each main service uses ContentPageTemplate so it can render the rich
 * section types (pricing tables, comparison tables, definitions, timelines,
 * FAQs, callouts) that the consolidated content needs.
 */
export const mainServicePages = {
  "mobile-grooming": {
    slug: "mobile-grooming",
    title: "Mobile Grooming",
    eyebrow: "Mobile Grooming",
    hero:
      "Luxury one-on-one grooming brought to your driveway across Long Island and the Hamptons.",
    metaTitle: "Mobile Pet Grooming Long Island | Mobile Dog Groomer",
    metaDescription:
      "Mobile dog and cat grooming across Long Island and the Hamptons — full grooms, baths, Plus and Premium spa upgrades, and in-house grooming for daycare and boarding clients.",
    image: "/Grooming.png",
    heroCtas: {
      primary: { label: "Book Now", href: "/contact" },
      ghost: { label: "Learn More", href: "#overview" },
      tertiary: { label: "View Pricing", href: "#pricing" },
    },
    sections: [
      {
        type: "iconBullets",
        eyebrow: "Why mobile?",
        title: "The luxury grooming experience, brought to you.",
        icon: "PawPrint",
        items: [
          "One-on-one session in your driveway — no salon stress",
          "Perfect for anxious pets or busy owners",
          "Your pet is always hand-dried, never left in a cage",
          "Most appointments finished in under 90 minutes",
          "Fully equipped van — no hookups required",
        ],
        cta: { label: "Pricing", href: "#pricing" },
      },
      {
        type: "featureGrid",
        eyebrow: "Services",
        title: "What every groom includes.",
        items: [
          { icon: "Footprints", title: "Pedicure", description: "Nail cut and grind for a comfortable, healthy length." },
          { icon: "Ear", title: "Ears Cleaned", description: "Gentle cleaning and plucking upon request." },
          { icon: "Bath", title: "Bath", description: "Two shampoos and a conditioner for a deep clean." },
          { icon: "Droplets", title: "Anal Glands", description: "Expressed upon request for your pet's comfort." },
          { icon: "Wind", title: "Dry", description: "Hand blow dry — never cage-dried." },
          { icon: "Brush", title: "Brushing", description: "Thorough fluffing and brushing for a polished coat." },
          { icon: "Scissors", title: "Haircut", description: "Wide range of breed-appropriate haircut options." },
          { icon: "Ribbon", title: "Bow & Bandana", description: "A signature finishing touch before heading home." },
        ],
        cta: { label: "Pricing", href: "#pricing" },
      },
      {
        type: "callout",
        id: "pricing",
        eyebrow: "Pricing",
        title: "See pricing for your area.",
        body: "Pricing varies by region and pet. Choose the option that matches your location or pet type.",
        ctas: [
          { label: "Nassau Pricing", href: "/nassau-pricing" },
          { label: "Hamptons Pricing", href: "/pet-grooming-hamptons/" },
          { label: "Cat Pricing", href: "/cat-experience/" },
        ],
      },
      {
        type: "checklist",
        eyebrow: "Our vans",
        title: "Built for hygiene, climate, and safety.",
        intro:
          "We partner with Wag N Tails and Hanvey Engineering to outfit our grooming vehicles.",
        image: "/van1.jpg",
        imageAlt: "Planet Pooch mobile grooming van",
        items: [
          "Cleaned between every appointment",
          "Built-in equipment, fresh water, and power — you don't need to provide anything.",
          "Built-in restraints and harnesses keep pets secure",
          "Climate Controlled so your pet is completely comfortable on summer and winter",
        ],
      },
      {
        type: "faq",
        eyebrow: "Common questions",
        title: "Mobile grooming FAQs",
        items: [
          {
            question: "Why does mobile grooming cost more than a salon?",
            answer:
              "Mobile grooming is a personalized, attentive session with the highest-quality products and professional groomers — delivered to your driveway. We are not simply a mobile version of an average storefront.",
          },
          {
            question: "How long does an appointment take?",
            answer:
              "Most appointments are finished in 1 to 1½ hours, so your pet is back to their family quickly without sitting in a cage between steps.",
          },
          {
            question: "Will you need to plug into our home?",
            answer:
              "No. Our vans are fully equipped with fresh water and electricity — no hookups required.",
          },
          {
            question: "What is your service area?",
            answer:
              "We service all of Nassau County, Suffolk County, and parts of the Hamptons.",
          },
          {
            question: "Is there a weight or size limit?",
            answer: "No. Planet Pooch loves and accommodates dogs of all weights and sizes.",
          },
          {
            question: "What if my dog is matted or aggressive?",
            answer:
              "Tell us in advance. Severely matted dogs may need to be shaved for their safety (additional fees apply). Overly aggressive dogs hindering the grooming process may incur additional fees, or in rare cases be refused service.",
          },
          {
            question: "Do we need to be home for the appointment?",
            answer:
              "No. Established clients may leave keys or access codes for convenient service.",
          },
        ],
      },
      {
        type: "callout",
        title: "Ready to book?",
        body: "Tell us your pet's coat, sensitivities, and preferred haircut style.",
        cta: { label: "Book Now", href: "/contact/" },
      },
    ],
  },

  "in-house-grooming": {
    slug: "in-house-grooming",
    title: "In-House Grooming",
    eyebrow: "Grooming",
    hero:
      "Spa-quality grooming for our daycare and boarding guests — never open to the public.",
    metaTitle: "In-House Dog Grooming | Daycare & Boarding | Planet Pooch",
    metaDescription:
      "Professional in-house grooming at our Franklin Square resort, available exclusively to dogs enrolled in daycare or boarding. 20% off when added to a 2+ night stay.",
    image: "/Grooming.png",
    heroCtas: {
      primary: { label: "Book Now", href: "/contact" },
      ghost: { label: "Learn More", href: "#overview" },
    },
    sections: [
      {
        type: "callout",
        title: "Already booked daycare or boarding?",
        body:
          "Call us anytime to add a groom to an upcoming stay — we'll schedule the appointment around their daycare or boarding day.",
        cta: { label: "Contact us", href: "/contact/" },
      },
      {
        type: "featureGrid",
        eyebrow: "Services",
        title: "What every groom includes.",
        items: [
          { icon: "Footprints", title: "Pedicure", description: "Nail cut and grind for a comfortable, healthy length." },
          { icon: "Ear", title: "Ears Cleaned", description: "Gentle cleaning and plucking upon request." },
          { icon: "Bath", title: "Bath", description: "Two shampoos and a conditioner for a deep clean." },
          { icon: "Droplets", title: "Anal Glands", description: "Expressed upon request for your pet's comfort." },
          { icon: "Wind", title: "Dry", description: "Hand blow dry — never cage-dried." },
          { icon: "Brush", title: "Brushing", description: "Thorough fluffing and brushing for a polished coat." },
          { icon: "Scissors", title: "Haircut", description: "Wide range of breed-appropriate haircut options." },
          { icon: "Ribbon", title: "Bow & Bandana", description: "A signature finishing touch before pickup." },
        ],
      },
      {
        type: "callout",
        eyebrow: "Stay & save",
        title: "20% off in-house grooming on stays of 2 or more nights",
        body:
          "Add a fresh-from-the-bath finish to any boarding stay of 2+ nights and save 20% off the standard groom price. Just mention grooming when you book.",
        cta: { label: "View boarding", href: "/dog-boarding/" },
      },
    ],
  },

  "dog-daycare": {
    slug: "dog-daycare",
    title: "Dog Daycare",
    eyebrow: "Daycare",
    hero:
      "A space where your dog feels as relaxed and at home as they do with you.",
    metaTitle: "Dog Daycare Long Island | Group Play & Enrichment | Planet Pooch",
    metaDescription:
      "Interactive dog daycare in Franklin Square, NY. Group play, one-on-one enrichment, puppy socialization, and day-pack pricing for Long Island families.",
    image: "/hero-dog.jpg",
    heroCtas: {
      primary: { label: "Get Started", href: "/contact" },
      ghost: { label: "Learn More", href: "#overview" },
    },
    sections: [
      {
        type: "featureGrid",
        eyebrow: "Why daycare?",
        title: "More than a drop-off point.",
        intro:
          "Regularly attending an interactive doggy daycare can benefit your dog's health and wellbeing — better social skills, healthy weight, less separation anxiety, and a confidence boost, all just from playing with friends. Our goal is to create a space where your dog feels as relaxed and at home as they do with you.",
        items: [
          {
            icon: "Trees",
            title: "Outdoor Play Yard",
            description:
              "Fresh air, sunshine, and room to run — our outdoor yard gives dogs the open space they crave between rest periods.",
          },
          {
            icon: "Users",
            title: "Small, Hand-Selected Groups",
            description:
              "We match dogs by size, temperament, and play style — never an unstructured free-for-all, so every dog feels safe and comfortable.",
          },
          {
            icon: "Sparkles",
            title: "Enrichment Services",
            description:
              "Treadmill, scent work, agility, and nutrition puzzles for dogs who thrive on one-on-one mental stimulation.",
            cta: { label: "Learn more", href: "/enrichment/" },
          },
        ],
      },
      {
        type: "timeline",
        eyebrow: "How It Works",
        title: "From first visit to regular client",
        items: [
          {
            time: "Step 1",
            label: "Free temperament evaluation",
            body:
              "We start with a complimentary evaluation. Staff observe your dog's behavior in our evaluation room as they acclimate to the space, then bring in another dog from a distance and progressively close the gap as comfort increases.",
            cta: { label: "Book your free evaluation", href: "/contact/" },
          },
        ],
      },
      {
        type: "definitions",
        eyebrow: "Step 2 — Care begins",
        title: "Group Play or Enrichment",
        intro:
          "Based on our evaluation your dog will either be eligible to join Group Play or will have the option to do Enrichment Play.",
        items: [
          {
            term: "Group Play (if your dog thrives socially)",
            definition:
              "Supervised social play with size-and-temperament-matched groups. Separate play areas organized by dog size, with adjustments based on individual play style and energy level.",
          },
          {
            term: "Enrichment Play (if your dog prefers quieter time)",
            definition:
              "One-on-one activities for dogs who don't thrive in group settings. Sensory play, gentle problem-solving, scent work, and treadmill or agility activities tailored to your dog.",
            cta: { label: "Learn more about Enrichment", href: "/enrichment/" },
          },
        ],
      },
      {
        type: "tieredPricing",
        eyebrow: "Pricing",
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
        secondaryCard: {
          eyebrow: "Half-Day Daycare",
          title: "$41 per day — morning session",
          body:
            "Morning session only (7am–12:30pm). If your pet is not picked up by 12:30pm, the full day rate applies.",
        },
      },
      {
        type: "callout",
        eyebrow: "Puppies (4 months – 1 year)",
        title: "Puppy Socialization Program",
        body:
          "$79 per session, three one-hour sessions. Supervised play with dogs of various sizes, enrichment activities (snuffle mats, frozen Kongs, treat hide-and-seek), outdoor potty breaks, and resource-guarding guidance. Requires Rabies vaccine plus current vaccination paperwork. Graduates receive a Certificate of Completion and become eligible for Group Play daycare.",
        cta: { label: "Book a consultation", href: "/contact/" },
      },
      {
        type: "faq",
        eyebrow: "FAQ",
        title: "Common questions",
        items: [
          {
            question: "Is daycare right for every dog?",
            answer:
              "Daycare is best for dogs who enjoy social settings or benefit from structured activity. If group play isn't a fit, our Enrichment program offers one-on-one alternatives.",
          },
          {
            question: "What vaccines are required?",
            answer:
              "Rabies, Distemper (DAPP/DHPP or DA2PP), and Bordetella must be up to date every visit. Influenza is highly recommended.",
          },
          {
            question: "Are there breaks during the day?",
            answer:
              "Yes — every dog gets a quiet rest period between 12:30pm and 1:30pm so they can recharge and avoid overstimulation.",
          },
          {
            question: "Does my dog need to be spayed/neutered?",
            answer:
              "Dogs over 1 year old must be spayed or neutered (unless a vet advises otherwise).",
          },
        ],
      },
      {
        type: "callout",
        title: "Book your dog's first visit",
        body: "Reach us by phone or email to schedule your free meet-and-greet.",
        cta: { label: "Book Now", href: "/contact/" },
      },
    ],
  },

  "dog-boarding": {
    slug: "dog-boarding",
    title: "Dog Boarding",
    eyebrow: "Boarding",
    hero:
      "Overnight care that feels like a natural extension of your dog's day — not a kennel stay.",
    metaTitle: "Dog Boarding Long Island | Suite Pricing | Planet Pooch",
    metaDescription:
      "Overnight dog boarding at our Franklin Square pet resort. Express, Classic, XL, and Luxury suites with Group Play or 1-on-1 care, plus enrichment activities, snacks, and bedding add-ons.",
    image: "/testimonial-dog.jpg",
    heroCtas: {
      primary: { label: "Book Now", href: "/contact" },
      ghost: { label: "Learn More", href: "#overview" },
    },
    sections: [
      {
        type: "prose",
        eyebrow: "Why board with us?",
        title: "Overnight care that feels like home.",
        paragraphs: [
          "Leaving your dog overnight can be stressful — for both of you. At Planet Pooch, our boarding program is designed to feel like a natural extension of your dog's day. They'll enjoy playtime with our daycare pack and settle in for a cozy, supervised night of rest.",
          "With trained staff on-site and personalized care, your dog is never just another guest — they're part of the Planet Pooch family.",
        ],
        highlights: [
          { icon: "Sparkles", label: "Clean, comfortable suites" },
          { icon: "Users", label: "Staff on-site day and night" },
          { icon: "Eye", label: "Overnight camera monitoring" },
          { icon: "PawPrint", label: "Daycare included" },
          { icon: "Utensils", label: "Custom feeding and meds" },
          { icon: "Heart", label: "Bring their favorite toy" },
          { icon: "Camera", label: "Daily photo updates" },
        ],
      },
      {
        type: "comparison",
        eyebrow: "Pricing",
        title: "Boarding Suite Packages",
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
        type: "callout",
        title: "Holiday pricing",
        body:
          "An additional $5 per night will be applied during holiday periods. Holiday periods include 7 days before and after each major holiday.",
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
        type: "list",
        eyebrow: "Add-ons",
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
        title: "Snacks & treats",
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
        title: "Bedding & spa",
        items: [
          "Bedding — $8 per day",
          "20% off in-house grooming on stays of 2 or more nights",
        ],
      },
      {
        type: "timeline",
        eyebrow: "A day in the life",
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
              "Quiet time in their suites with personal items.",
          },
          {
            time: "1:30 PM – 7:00 PM",
            label: "Afternoon group play",
            body: "More play and socialization, with optional quieter enrichment activities.",
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
      {
        type: "faq",
        items: [
          {
            question: "Can boarding include daycare?",
            answer:
              "Yes — many boarding stays include daytime play with the daycare pack. We'll match the activity level to what fits your dog best.",
          },
          {
            question: "What should I bring?",
            answer:
              "Bring your dog's food and any important care or medication instructions. We'll guide you on what else is helpful before the stay.",
          },
          {
            question: "How early should I book?",
            answer:
              "Holiday weekends and summer fill up fast. Booking early — especially for Memorial Day, July 4th, Labor Day, and the December holidays — is the surest way to lock in your spot.",
          },
        ],
      },
      {
        type: "callout",
        title: "Reserve your dog's stay",
        body: "Tell us about their routine, comfort needs, and feeding schedule.",
        cta: { label: "Book Now", href: "/contact/" },
      },
    ],
  },

  "dog-training": {
    slug: "dog-training",
    title: "Dog Training",
    eyebrow: "Training",
    hero:
      "Thoughtful training that builds confidence, manners, and clearer communication between you and your dog.",
    metaTitle: "Dog Training Long Island | AKC Evaluator | Planet Pooch",
    metaDescription:
      "Compassionate, results-driven dog training with our AKC Evaluator Trainer. Private sessions, 6-week programs, and free consultations for dogs of every age.",
    image: "/tour-space.jpg",
    heroCtas: {
      primary: { label: "Book Consultation", href: "/contact" },
      ghost: { label: "Learn More", href: "#overview" },
    },
    sections: [
      {
        type: "iconBullets",
        eyebrow: "Why train?",
        title: "A bridge between dogs and humans.",
        icon: "PawPrint",
        items: [
          "AKC Evaluator Trainer leading every program",
          "FREE Consultation prior to training",
          "Coaching for owners on reinforcing skills at home",
          "Positive, relationship-minded handling",
        ],
        cta: { label: "Pricing", href: "#group-training" },
      },
      {
        type: "faq",
        eyebrow: "FAQ",
        title: "Common training questions",
        items: [
          {
            question: "What kinds of goals can we work on?",
            answer:
              "Common goals include puppy foundations, basic obedience, leash manners, focus, confidence-building, and addressing behaviors like jumping, barking, or pulling.",
          },
          {
            question: "Is private training better than a group class?",
            answer:
              "Private sessions are especially valuable for dogs who feel overwhelmed, distracted, or anxious around other dogs. They learn in a calm, focused environment where they can succeed.",
          },
          {
            question: "Will I get coaching too?",
            answer:
              "Yes — training works best when owners understand how to reinforce the skills outside the resort. We make sure you leave each session knowing what to practice.",
          },
        ],
        cta: { label: "Pricing", href: "#group-training" },
      },
      {
        type: "tieredPricing",
        id: "group-training",
        eyebrow: "Group Training",
        title: "Real-world skills, in a small group.",
        intro:
          "Group training helps dogs and puppies learn essential skills while practicing them around real-world distractions — building focus, impulse control, and confidence around other dogs and people. For puppies, it supports healthy socialization during critical learning stages. You'll also learn how to communicate clearly and consistently, resulting in better manners and a well-rounded, confident dog.",
        uniformStyle: "dark",
        tiers: [
          {
            name: "Beginner",
            price: "$179.99",
            cadence: "6-week program · 45-min classes",
            features: [
              "8 weeks – 6 months old",
              "Foundational manners and socialization",
              "Up to 8 dogs per class",
            ],
          },
          {
            name: "Intermediate",
            price: "$209.99",
            cadence: "6-week program · 45-min classes",
            features: [
              "Any age (prerequisite required)",
              "Builds focus and reliability with distractions",
              "Up to 8 dogs per class",
            ],
          },
          {
            name: "Advanced",
            price: "$239.99",
            cadence: "6-week program · 45-min classes",
            features: [
              "1 year and older",
              "Polished obedience and real-world reliability",
              "Up to 8 dogs per class",
            ],
          },
        ],
        secondaryCard: {
          eyebrow: "Advanced certification",
          title: "AKC's Canine Good Citizen Program — $239.99",
          body:
            "*Need to have completed either Intermediate or Advanced classes. The Canine Good Citizen (CGC) is an award your dog can earn by demonstrating good manners at home and in the community — recognizing the training and effort you've put into working with your dog.",
        },
      },
      {
        type: "tieredPricing",
        id: "private-sessions",
        eyebrow: "Private Sessions",
        title: "One-on-one training tailored to your dog.",
        intro:
          "Personalized guidance shaped around your dog's age, temperament, and learning style — especially valuable for dogs who feel overwhelmed, distracted, or anxious in group settings. Each program runs six 45-minute sessions.",
        uniformStyle: "dark",
        tiers: [
          {
            name: "Level 1",
            price: "$449.99",
            cadence: "6 sessions · 45 min each",
            description: "Foundational skills",
            features: [
              "Sit, stay, and come",
              "Loose leash walking",
              "Potty training",
            ],
          },
          {
            name: "Level 2",
            price: "$449.99",
            cadence: "6 sessions · 45 min each",
            description: "Advanced techniques",
            features: [
              "Builds on Level 1 skills",
              "Reliability with distractions",
              "Confidence in busier environments",
            ],
          },
          {
            name: "Level 3",
            price: "$449.99",
            cadence: "6 sessions · 45 min each",
            description: "Customizable curriculum",
            features: [
              "Curriculum tailored to your goals",
              "Behaviors specific to your dog",
              "Owner coaching to maintain results",
            ],
          },
        ],
      },
      {
        type: "callout",
        title: "Free 20-minute consultation",
        body:
          "Every dog starts with a free 20-minute consultation so we can understand their age, temperament, and your goals before training begins.",
        cta: { label: "Book a consultation", href: "/contact/" },
      },
    ],
  },

  enrichment: {
    slug: "enrichment",
    title: "Enrichment",
    eyebrow: "Enrichment",
    hero:
      "One-on-one enrichment days for dogs who shine away from the pack — sensory play, scent work, agility, and gentle challenges tailored to each dog.",
    metaTitle: "Dog Enrichment Long Island | One-on-One Activities | Planet Pooch",
    metaDescription:
      "One-on-one enrichment activities at Planet Pooch in Franklin Square — sensory play, agility, treadmill, scent work, and nutrition puzzles for dogs who thrive away from the pack.",
    image: "/our-resort-exterior.jpeg",
    heroCtas: {
      primary: { label: "Get Started", href: "/contact" },
      ghost: { label: "Learn More", href: "#overview" },
    },
    sections: [
      {
        type: "iconBullets",
        eyebrow: "Enrichment",
        title: "The five pillars of enrichment.",
        intro:
          "Some dogs do best individually. Our enrichment program offers thoughtful, supervised activities that keep your dog engaged, curious, and happily stimulated without the energy of a group setting — addressing behavioral issues including destruction, barking, escaping, anxiety, hyperactivity, and depression.",
        icon: "PawPrint",
        items: [
          "Social — one-on-one trust-building at your dog's pace",
          "Cognitive — puzzles and games that combat boredom",
          "Physical — low-impact movement matched to energy",
          "Sensory — scent work, textures, and new stimuli",
          "Nutritional — food puzzles and lick mats that slow eating",
        ],
        wide: true,
      },
      {
        type: "callout",
        eyebrow: "Pricing",
        title: "$82 per day for one-on-one Enrichment Play",
        body:
          "A personalized program where your dog engages in structured activities designed around their individual needs, personality, and comfort level. Sessions are customized to each dog's responses, allowing staff to adjust pace and focus based on engagement.",
        wide: true,
      },
      {
        type: "definitions",
        eyebrow: "Add-ons",
        title: "Enrichment activities",
        intro: "Each activity is 20 minutes and costs $25 per session — add to any daycare or boarding day.",
        items: [
          {
            term: "Treadmill Enrichment",
            definition:
              "A unique outlet for burning off excess energy without excessive strain on muscles and joints — while engaging something different than they're used to.",
          },
          {
            term: "Agility Enrichment",
            definition:
              "Physical and mental stimulation through fun challenges: fetch, tug-of-war, obstacle courses, and a rotating set of interesting toys.",
          },
          {
            term: "Nutritional Enrichment",
            definition:
              "Snuffle mats and food puzzles that stimulate natural foraging instincts. Dogs use their sense of smell to search for hidden treats.",
          },
          {
            term: "Scent Enrichment",
            definition:
              "Sensory activities using artificial flowers in snuffle mats or sensory bins to encourage natural curiosity and sniffing instincts.",
          },
          {
            term: "Buddy Play Enrichment",
            definition:
              "A thoughtfully curated experience for dogs who thrive in smaller social settings — each group hand-selected based on temperament, play style, and comfort level.",
          },
        ],
      },
      {
        type: "timeline",
        eyebrow: "A day in the life",
        title: "What a one-on-one enrichment day looks like",
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
            body: "Every dog gets a quiet break in a cozy private area.",
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
      {
        type: "callout",
        title: "Book a one-on-one enrichment day",
        body:
          "Tell us about your dog's energy level, sensitivities, and what kinds of activities engage them best.",
        cta: { label: "Book Now", href: "/contact/" },
      },
    ],
  },

  events: {
    slug: "events",
    title: "Events",
    eyebrow: "Events",
    hero:
      "Birthday parties, field trips, themed daycare days, and signature seasonal events — celebrating the whole pack year-round.",
    metaTitle: "Dog Events Long Island | Birthday Parties & Themed Days | Planet Pooch",
    metaDescription:
      "Signature events at Planet Pooch in Franklin Square — birthday parties, Bark in the Park field trips, Photos with Santa, and themed daycare days throughout the year.",
    image: "/our-resort-exterior.jpeg",
    heroCtas: {
      primary: { label: "Book an Event", href: "/contact" },
      ghost: { label: "Learn More", href: "#overview" },
    },
    sections: [
      {
        type: "prose",
        eyebrow: "Events",
        title: "Signature events year-round.",
        paragraphs: [
          "We host events year-round so your dog gets more than a great daycare day — birthday parties at the resort, guided field trips, festive holiday photoshoots, and themed daycare days at no extra charge.",
          "Pick a category below or call us about availability.",
        ],
      },
      {
        type: "tieredPricing",
        eyebrow: "Birthdays",
        title: "Birthday Parties",
        intro: "Celebrate your dog's big day at the resort.",
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
        secondaryCard: {
          title: "Ready to celebrate?",
          body: "Call us to book your dog's birthday party.",
          cta: { label: "Call to Book", href: "tel:+15169933603" },
        },
      },
      {
        type: "slideshow",
        eyebrow: "Throughout the year",
        title: "Themed daycare days",
        intro:
          "Check out our fun packed events throughout the year including Howloween Costume Party, Taco Tuesday, Valentine's Day, and Photos with Santa!",
        images: [
          { src: "/kissing-booth.png", alt: "Valentine's Day kissing booth event at Planet Pooch" },
        ],
      },
      {
        type: "callout",
        title: "Want to host or join an event?",
        body: "Call us about availability, dates, and how to book your dog into a themed day or party.",
        cta: { label: "Book Now", href: "/contact/" },
      },
    ],
  },
} satisfies Record<string, ContentPage>;

export type MainServiceSlug = keyof typeof mainServicePages;
