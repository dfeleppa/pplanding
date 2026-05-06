import type { ContentPage } from "./types";

/**
 * Standalone ContentPage entries — pages that aren't a main service and
 * aren't consolidated into one. Main service pages live in main-services.ts.
 *
 * Sub-page URLs (pricing, packages, day-in-the-life, events) used to live
 * here as their own entries; they're now 301-redirected to their parent
 * main service page. See next.config.ts for the redirect map.
 */
export const contentPages = {
  // Geo: Hamptons keeps its own URL because it has a distinct keyword
  // target ("Mobile Pet Grooming Hamptons") and a separate pricing tier.
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
      {
        type: "callout",
        title: "Book your Hamptons appointment",
        body: "Call us to confirm coverage for your specific Hamptons address and schedule.",
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
        cta: { label: "Our Team", href: "/our-team/" },
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
        cta: { label: "Book Now", href: "/contact/" },
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
        body: "Call us directly at (516) 993-3603 or email info@planet-pooch.com.",
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

  contactus: {
    slug: "contactus",
    canonicalSlug: "contact",
    title: "Contact Us",
    eyebrow: "Contact",
    hero: "Reach the Planet Pooch team by phone, email, or in person.",
    metaTitle: "Contact Planet Pooch Pet Resort",
    metaDescription:
      "Contact Planet Pooch Pet Resort in Franklin Square, NY. Call (516) 993-3603 or email info@planet-pooch.com to set up your dog's first visit.",
    sections: [
      {
        type: "callout",
        title: "Reach us directly",
        body:
          "The fastest way to set something up is by phone. We're also happy to take questions by email or in person at our Franklin Square resort.",
        cta: { label: "Open the booking page", href: "/contact/" },
      },
    ],
  },
} satisfies Record<string, ContentPage>;

export type ContentPageSlug = keyof typeof contentPages;
