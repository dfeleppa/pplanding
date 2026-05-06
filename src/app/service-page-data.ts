import type { StaticImageData } from "next/image";

export type ServicePage = {
  slug: string;
  title: string;
  navLabel: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  hero: string;
  intro: string;
  image: string | StaticImageData;
  highlights: string[];
  includes: string[];
  process: string[];
  faqs: Array<{
    question: string;
    answer: string;
  }>;
};

export const servicePages = {
  "mobile-grooming": {
    slug: "mobile-grooming",
    title: "Mobile Grooming",
    navLabel: "Mobile Grooming",
    metaTitle: "Mobile Pet Grooming Long Island | Mobile Dog Groomer",
    metaDescription:
      "Mobile dog grooming across Long Island and the Hamptons. One-on-one sessions with professional groomers right outside your home — most appointments finished in under 90 minutes.",
    eyebrow: "Mobile Grooming",
    hero:
      "The ultimate luxury grooming experience — brought right to your driveway across Long Island.",
    intro:
      "Mobile grooming is the perfect solution for pets who get anxious around other dogs or for owners who'd rather skip the trip. One of our professional groomers comes to you for a calm, one-on-one session — and your pet is always hand-dried, never left in a cage.",
    image: "/hero-dog.jpg",
    highlights: [
      "One-on-one sessions in our fully equipped van outside your home",
      "Always hand-dried — never left in a cage to dry",
      "Most appointments wrapped in under 90 minutes",
    ],
    includes: [
      "Pedicure — nail cut and grind",
      "Ears cleaned and plucked upon request",
      "Two-shampoo bath plus conditioner (upgraded shampoos available)",
      "Anal glands expressed upon request",
      "Hand blow dry, fluffing, and brushing",
      "Wide range of haircut options",
      "Signature bow and bandana finish",
    ],
    process: [
      "Tell us about your pet's coat, sensitivities, and preferred haircut style.",
      "Our groomer arrives in our mobile spa and works one-on-one with your pet curbside.",
      "We finish with a quick walk-through of recommendations to keep them looking fresh.",
    ],
    faqs: [
      {
        question: "Where do you operate?",
        answer:
          "We service all of Long Island — Nassau and Suffolk Counties — plus the Hamptons. If you're nearby, give us a call and we'll confirm coverage for your address.",
      },
      {
        question: "Do you handle nervous or reactive dogs?",
        answer:
          "Mobile grooming is often the calmest option for anxious dogs because there are no other pets around. We take a patient, gentle approach and adapt to your pet's comfort level.",
      },
      {
        question: "How long does an appointment take?",
        answer:
          "Most appointments are finished in under 90 minutes, so your pet is back to their family quickly without sitting in a cage between steps.",
      },
    ],
  },
  "dog-daycare": {
    slug: "dog-daycare",
    title: "Dog Daycare",
    navLabel: "Daycare",
    metaTitle: "Dog Daycare Long Island | Planet Pooch Pet Resort",
    metaDescription:
      "Interactive dog daycare in Franklin Square, NY. Supervised group play, enrichment, and rest in a safe environment built for happy, social dogs across Long Island.",
    eyebrow: "Daycare",
    hero:
      "A space where your dog feels as relaxed and at home as they do with you.",
    intro:
      "Regularly attending an interactive doggy daycare can benefit your dog's health and wellbeing — better social skills, healthy weight, less separation anxiety, and a confidence boost, all just from playing with friends. We strive to make daycare more than a drop-off point.",
    image: "/hero-dog.jpg",
    highlights: [
      "Two daycare styles — Group Play and one-on-one Enrichment",
      "Consistent routine that helps every dog settle in quickly",
      "Free meet-and-greet evaluation before your dog's first full day",
    ],
    includes: [
      "Supervised group play matched by size and temperament",
      "Quiet rest period from 12:30pm–1:30pm",
      "Morning sessions (7am–12:30pm) and full day sessions (7am–7pm)",
      "Up-to-date Rabies, Distemper (DAPP/DHPP), and Bordetella required",
      "Optional Influenza vaccination strongly recommended",
      "Owner communication when it matters",
    ],
    process: [
      "Submit the New Client Enrollment Packet so we know your dog before they arrive.",
      "Come in for a free meet-and-greet — usually 1–2 hours — to confirm your dog is comfortable with other pets and people.",
      "If they pass evaluation, they can stay the rest of the day for free and start a regular routine.",
    ],
    faqs: [
      {
        question: "Is daycare right for every dog?",
        answer:
          "Daycare is best for dogs who enjoy social settings or benefit from structured activity. If group play isn't a fit, we offer one-on-one Enrichment Play sessions as an alternative.",
      },
      {
        question: "What vaccines are required?",
        answer:
          "Rabies, Distemper (DAPP/DHPP or DA2PP), and Bordetella must be up to date every visit. Influenza is highly recommended. There's a 7-day waiting period after Distemper or Bordetella vaccinations before returning to daycare.",
      },
      {
        question: "Are there breaks during the day?",
        answer:
          "Yes — every dog gets a quiet rest period between 12:30pm and 1:30pm so they can recharge and avoid overstimulation.",
      },
    ],
  },
  "dog-boarding": {
    slug: "dog-boarding",
    title: "Dog Boarding",
    navLabel: "Boarding",
    metaTitle: "Dog Boarding Long Island | Overnight Pet Resort",
    metaDescription:
      "Overnight dog boarding at our Franklin Square pet resort. Cozy accommodations, supervised play, and personalized care so your dog feels at home while you travel.",
    eyebrow: "Boarding",
    hero:
      "Overnight care that feels like a natural extension of your dog's day — not a kennel stay.",
    intro:
      "Leaving your dog overnight can be stressful for both of you. At Planet Pooch, our boarding program is designed to feel like home — daytime play with the daycare pack, then a cozy supervised night of rest. With trained staff on-site, your dog is never just another guest; they're part of the Planet Pooch family.",
    image: "/testimonial-dog.jpg",
    highlights: [
      "Home-like atmosphere with comfortable accommodations and spacious play areas",
      "Daytime activity blended with supervised overnight rest",
      "Personalized care matched to your dog's routine and preferences",
    ],
    includes: [
      "Overnight accommodations with clean bedding",
      "Feeding routines based on owner instructions",
      "Optional daycare-style activity during the day",
      "Trained staff on-site and continuous supervision",
      "Up-to-date vaccinations required for every guest",
      "Owner communication while you're away",
    ],
    process: [
      "Share your dog's routine, comfort needs, and feeding schedule before the stay.",
      "We help plan the right combination of rest and daytime activity for their personality.",
      "Your dog settles into a predictable rhythm of play, rest, and attention.",
    ],
    faqs: [
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
  "dog-training": {
    slug: "dog-training",
    title: "Dog Training",
    navLabel: "Training",
    metaTitle: "Dog Training Long Island | AKC Evaluator | Planet Pooch",
    metaDescription:
      "Compassionate, results-driven dog training with our AKC Evaluator Trainer. Private sessions, 6-week programs, and free consultations for dogs of every age.",
    eyebrow: "Training",
    hero:
      "Thoughtful training that builds confidence, manners, and clearer communication between you and your dog.",
    intro:
      "Training is one of the best ways to strengthen the bond between you and your dog. With guidance from our AKC Evaluator Trainer, your dog learns through consistent, positive methods what's expected — and gains the confidence to navigate the world calmly.",
    image: "/tour-space.jpg",
    highlights: [
      "AKC Evaluator Trainer leading every program",
      "Free 20-minute consultation before any training begins",
      "Private and small-group formats for every age and skill level",
    ],
    includes: [
      "Free 20-minute pre-training consultation",
      "Private one-on-one sessions tailored to your dog",
      "6-week structured programs",
      "45-minute focused sessions",
      "Coaching for owners on reinforcing skills at home",
      "Positive, relationship-minded handling",
    ],
    process: [
      "Start with a free consultation so we understand your dog's age, temperament, and your goals.",
      "Work through focused sessions designed for steady, measurable progress.",
      "Translate that progress into practical routines you can keep up at home.",
    ],
    faqs: [
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
  enrichment: {
    slug: "enrichment",
    title: "Enrichment",
    navLabel: "Enrichment",
    metaTitle: "Dog Enrichment Activities Long Island | Planet Pooch",
    metaDescription:
      "One-on-one enrichment activities for dogs who do better outside of group play. Sensory play, themed activities, and mental stimulation at our Franklin Square resort.",
    eyebrow: "Enrichment",
    hero:
      "One-on-one activities for dogs who shine away from the pack.",
    intro:
      "Some dogs do best individually. Our enrichment program offers thoughtful, supervised activities — sensory play, gentle challenges, themed moments — that keep your dog engaged, curious, and happily stimulated without the energy of a group setting.",
    image: "/our-resort-exterior.jpeg",
    highlights: [
      "An alternative to Group Play for dogs who prefer individual time",
      "Sensory and play-based challenges suited to each dog",
      "Photo-worthy themed enrichment moments throughout the year",
    ],
    includes: [
      "One-on-one enrichment sessions",
      "Sensory play and gentle problem-solving activities",
      "Themed seasonal moments and small group events",
      "Coordination with daycare or boarding when available",
      "A calmer change of pace for regular guests",
    ],
    process: [
      "Tell us how your dog responds to busy environments versus quieter ones.",
      "We plan enrichment activities suited to their comfort, fit, and energy level.",
      "Your dog joins the right experience while preserving the calm rhythm of the resort.",
    ],
    faqs: [
      {
        question: "Is enrichment a replacement for daycare?",
        answer:
          "It's an alternative for dogs who don't thrive in group settings. Some dogs do both — some enrichment days, some daycare days — depending on energy and mood.",
      },
      {
        question: "Are there special events?",
        answer:
          "Yes — we run seasonal themed enrichment moments and occasional events. Some require sign-up, and we'll share current options when you get started.",
      },
    ],
  },
} satisfies Record<string, ServicePage>;

export const serviceNavItems = Object.values(servicePages);
