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
    image: "/hero-dog.jpg",
    heroCtas: {
      primary: { label: "Book Now", href: "/contact" },
      ghost: { label: "Learn More", href: "#overview" },
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
        type: "prose",
        eyebrow: "Why daycare?",
        title: "More than a drop-off point.",
        paragraphs: [
          "Regularly attending an interactive doggy daycare can benefit your dog's health and wellbeing — better social skills, healthy weight, less separation anxiety, and a confidence boost, all just from playing with friends.",
          "We strive to make daycare more than a drop-off point: our goal is to create a space where your dog feels as relaxed and at home as they do with you.",
        ],
      },
      {
        type: "definitions",
        title: "Two daycare styles",
        items: [
          {
            term: "Group Play",
            definition:
              "Supervised social play with size-and-temperament-matched groups. Separate play areas organized by dog size, with adjustments based on individual play style and energy level.",
          },
          {
            term: "Enrichment Play",
            definition:
              "One-on-one activities for dogs who don't thrive in group settings. Sensory play, gentle problem-solving, scent work, and treadmill or agility activities tailored to your dog.",
          },
        ],
      },
      {
        type: "timeline",
        eyebrow: "How we introduce a new dog",
        title: "From first visit to regular client",
        items: [
          {
            time: "Step 1",
            label: "Free temperament evaluation",
            body:
              "We start with a complimentary 1–2 hour evaluation. Staff observe your dog's behavior in our evaluation room as they acclimate to the space.",
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
      },
      {
        type: "callout",
        title: "Half-Day Daycare",
        body:
          "$41 per day. Morning session only (7am–12:30pm). If your pet is not picked up by 12:30pm, the full day rate applies.",
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
        type: "timeline",
        eyebrow: "A day in the life",
        title: "What a typical day looks like",
        items: [
          {
            time: "7:00 AM",
            label: "Drop-off opens",
            body: "Check-in begins. Our team welcomes your dog and gets them settled into the morning playgroup.",
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
            body: "Full-day pickups by 7pm. Morning-session dogs head home by 12:30pm.",
          },
        ],
      },
      {
        type: "checklist",
        eyebrow: "Requirements",
        title: "Before your dog's first day",
        items: [
          "Complete the New Client Enrollment Packet",
          "Schedule a free meet-and-greet evaluation (1–2 hours)",
          "Up-to-date Rabies, Distemper (DAPP/DHPP or DA2PP), and Bordetella vaccinations",
          "Influenza vaccination strongly recommended",
          "7-day waiting period after Distemper or Bordetella vaccinations before returning",
          "Dogs over 1 year old must be spayed or neutered (unless a vet advises otherwise)",
        ],
      },
      {
        type: "faq",
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
        eyebrow: "Why boarding here?",
        title: "Overnight care that feels like home.",
        paragraphs: [
          "Leaving your dog overnight can be stressful — for both of you. At Planet Pooch, our boarding program is designed to feel like a natural extension of your dog's day. They'll enjoy playtime with our daycare pack and settle in for a cozy, supervised night of rest.",
          "With trained staff on-site and personalized care, your dog is never just another guest — they're part of the Planet Pooch family.",
        ],
      },
      {
        type: "callout",
        title: "Holiday pricing",
        body:
          "An additional $5 per night will be applied during holiday periods. Holiday periods include 7 days before and after each major holiday.",
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
        type: "prose",
        eyebrow: "Why train?",
        title: "A bridge between dogs and humans.",
        paragraphs: [
          "Training is one of the best ways to strengthen the bond between you and your dog. Since dogs and humans communicate differently, training helps bridge that gap and create a mutual understanding built on trust and respect.",
          "With guidance from our AKC Evaluator Trainer, your dog learns through consistent, positive methods what's expected — and gains the confidence to navigate the world calmly and happily.",
        ],
      },
      {
        type: "checklist",
        title: "What training accomplishes",
        items: [
          "AKC Evaluator Trainer leading every program",
          "Free 20-minute consultation before any training begins",
          "Private and small-group formats for every age and skill level",
          "Coaching for owners on reinforcing skills at home",
          "Positive, relationship-minded handling",
        ],
      },
      {
        type: "definitions",
        eyebrow: "Programs",
        title: "Training session formats",
        items: [
          {
            term: "Private Sessions",
            definition:
              "Personalized, one-on-one guidance tailored to your dog or puppy's age, temperament, and learning style. Especially valuable for dogs who feel overwhelmed, distracted, or anxious around other dogs.",
          },
          {
            term: "6 Week Sessions",
            definition:
              "Structured progress-focused programs with weekly milestones — puppy foundations, basic obedience, leash manners, focus, and confidence building.",
          },
          {
            term: "45 Minute Sessions",
            definition:
              "Focused individual sessions designed around the behaviors that matter most to you.",
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
      {
        type: "faq",
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
      },
    ],
  },

  enrichment: {
    slug: "enrichment",
    title: "Enrichment & Events",
    eyebrow: "Enrichment & Events",
    hero:
      "One-on-one enrichment days for dogs who shine away from the pack — plus birthday parties, field trips, and signature events for the whole pack.",
    metaTitle: "Dog Enrichment & Events Long Island | Planet Pooch",
    metaDescription:
      "One-on-one enrichment activities and signature events at Planet Pooch in Franklin Square — sensory play, agility, treadmill, scent work, birthday parties, field trips, and Photos with Santa.",
    image: "/our-resort-exterior.jpeg",
    heroCtas: {
      primary: { label: "Get Started", href: "/contact" },
      ghost: { label: "Learn More", href: "#overview" },
    },
    sections: [
      {
        type: "prose",
        eyebrow: "Enrichment",
        title: "For dogs who shine away from the pack.",
        paragraphs: [
          "Some dogs do best individually. Our enrichment program offers thoughtful, supervised activities — sensory play, gentle challenges, themed moments — that keep your dog engaged, curious, and happily stimulated without the energy of a group setting.",
          "Canine enrichment addresses behavioral issues including destruction, barking, escaping, anxiety, hyperactivity, obsessive or compulsive behaviors, and depression.",
        ],
      },
      {
        type: "callout",
        eyebrow: "Pricing",
        title: "$82 per day for one-on-one Enrichment Play",
        body:
          "A personalized program where your dog engages in structured activities designed around their individual needs, personality, and comfort level. Sessions are customized to each dog's responses, allowing staff to adjust pace and focus based on engagement.",
      },
      {
        type: "definitions",
        title: "Five pillars of enrichment",
        items: [
          {
            term: "Social",
            definition:
              "One-on-one staff interaction building comfort and trust at your dog's pace. Exposure to varied people, dogs, and situations reduces fearfulness.",
          },
          {
            term: "Cognitive",
            definition:
              "Puzzle toys, problem-solving games, and basic training exercises that decrease boredom-related behavioral problems.",
          },
          {
            term: "Physical",
            definition:
              "Guided movement and low-impact activity matched to your dog's energy. Maintains healthy weight, builds muscle, and improves cardiovascular fitness.",
          },
          {
            term: "Sensory",
            definition:
              "Scent work, new textures, and exposure to different sights and sounds. Particularly beneficial for anxious or stressed dogs.",
          },
          {
            term: "Nutritional",
            definition:
              "Food-based enrichment like puzzles, lick mats, and treat activities. Slows eating pace and enhances digestion.",
          },
        ],
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

      // ===== EVENTS section =====
      {
        type: "prose",
        eyebrow: "Events",
        title: "Signature events year-round.",
        paragraphs: [
          "We host events year-round so your dog gets more than a great daycare day. Pick a category below or call us about availability.",
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
      },
      {
        type: "callout",
        eyebrow: "Field Trip",
        title: "Bark in the Park: a tail of adventure",
        body:
          "$69 add-on to daycare. A 2-mile guided loop at Hempstead Lake Park with refreshments and pup cups. Departs Planet Pooch at 10:00 AM, returns by noon. Advance booking required — limited availability. All participating dogs must maintain current flea and tick treatments.",
        cta: { label: "Call (516) 993-3603", href: "tel:+15169933603" },
      },
      {
        type: "callout",
        eyebrow: "Holiday",
        title: "Photos with Santa",
        body:
          "An annual December event at our Franklin Square facility for festive holiday photos with your dog. Call to reserve your spot.",
      },
      {
        type: "list",
        eyebrow: "Throughout the year",
        title: "Themed daycare days",
        intro:
          "Recurring themed days when your dog is already at daycare — at no extra charge:",
        items: [
          "Doodle Friday",
          "Frenchie Friday",
          "Golden Retriever Tuesday",
          "Wiener Wednesday",
          "Howloween Costume Party",
          "Pupsicle Party",
          "Bobbing for Apples",
          "Taco Tuesday",
          "Valentine's Day",
          "St. Pawtrick's Day",
          "Photos with the Easter Bunny",
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
