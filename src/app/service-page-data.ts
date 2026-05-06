import type { StaticImageData } from "next/image";

export type ServicePage = {
  slug: string;
  title: string;
  navLabel: string;
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
  daycare: {
    slug: "daycare",
    title: "Dog Daycare",
    navLabel: "Daycare",
    eyebrow: "Daycare",
    hero: "A better day for dogs who love activity, structure, and companionship.",
    intro:
      "Our daycare experience balances supervised play, enrichment, rest, and attentive care so your dog comes home happy and fulfilled.",
    image: "/hero-dog.jpg",
    highlights: [
      "Structured playgroups matched with care",
      "Rest breaks that keep the day balanced",
      "Attentive team members who learn your dog's rhythm",
    ],
    includes: [
      "Supervised social time",
      "Enrichment activities",
      "Comfortable rest periods",
      "Clean, monitored spaces",
      "Owner communication when it matters",
    ],
    process: [
      "Start with a quick intake so we understand your dog's needs.",
      "We introduce them thoughtfully to the right environment and play style.",
      "Each visit follows a balanced rhythm of play, enrichment, and rest.",
    ],
    faqs: [
      {
        question: "Is daycare right for every dog?",
        answer:
          "Daycare is best for dogs who enjoy social settings or benefit from structured activity. We use the intake process to understand fit and comfort.",
      },
      {
        question: "Do dogs get breaks during the day?",
        answer:
          "Yes. Rest is part of the routine so dogs can recharge and avoid getting overstimulated.",
      },
    ],
  },
  boarding: {
    slug: "boarding",
    title: "Dog Boarding",
    navLabel: "Boarding",
    eyebrow: "Boarding",
    hero: "Overnight care with calm routines, resort comforts, and dependable attention.",
    intro:
      "Boarding at Planet Pooch is designed to make travel easier, with cozy spaces, familiar rhythms, and a team focused on comfort and safety.",
    image: "/testimonial-dog.jpg",
    highlights: [
      "Cozy overnight spaces",
      "Daytime care options for activity and enrichment",
      "A steady routine that helps dogs settle in",
    ],
    includes: [
      "Overnight accommodations",
      "Feeding routines based on owner instructions",
      "Clean bedding and restful spaces",
      "Optional daycare-style activity",
      "Careful monitoring by our team",
    ],
    process: [
      "Tell us about your dog's routine, comfort needs, and feeding schedule.",
      "We help plan the right stay based on personality and activity level.",
      "Your dog settles into a predictable rhythm of care, rest, and attention.",
    ],
    faqs: [
      {
        question: "Can boarding include daycare?",
        answer:
          "Yes. Many boarding stays can include daytime activity or enrichment depending on your dog's fit and needs.",
      },
      {
        question: "What should I bring?",
        answer:
          "Bring food and any important care instructions. We can guide you on what else is helpful before the stay.",
      },
    ],
  },
  training: {
    slug: "training",
    title: "Dog Training",
    navLabel: "Training",
    eyebrow: "Training",
    hero: "Thoughtful training that builds confidence, manners, and better communication.",
    intro:
      "Our training programs are built around practical progress, compassionate handling, and skills that support life at home.",
    image: "/tour-space.jpg",
    highlights: [
      "Confidence-building approach",
      "Practical manners and everyday skills",
      "Clear guidance for owners",
    ],
    includes: [
      "Goal setting based on your priorities",
      "Skill-building sessions",
      "Progress-focused coaching",
      "Support for consistency at home",
      "Positive, relationship-minded handling",
    ],
    process: [
      "We start by understanding the behaviors and goals that matter most.",
      "Your dog works through focused sessions designed for steady progress.",
      "We help translate that progress into practical routines at home.",
    ],
    faqs: [
      {
        question: "What kinds of training goals can we work on?",
        answer:
          "Common goals include manners, confidence, leash skills, focus, and calmer everyday routines.",
      },
      {
        question: "Will owners receive guidance too?",
        answer:
          "Yes. Training works best when owners understand how to reinforce the skills outside the resort.",
      },
    ],
  },
  "enrichment-events": {
    slug: "enrichment-events",
    title: "Enrichment & Events",
    navLabel: "Enrichment/Events",
    eyebrow: "Enrichment & Events",
    hero: "Special activities that keep dogs engaged, curious, and happily stimulated.",
    intro:
      "Enrichment and events add variety to your dog's routine through playful activities, themed moments, sensory work, and social fun.",
    image: "/our-resort-exterior.jpeg",
    highlights: [
      "Activity-based experiences",
      "Seasonal and themed event opportunities",
      "Mental stimulation beyond everyday play",
    ],
    includes: [
      "Sensory enrichment",
      "Play-based challenges",
      "Photo-worthy themed moments",
      "Small group or individual activity options",
      "A fun change of pace for regular guests",
    ],
    process: [
      "We plan enrichment around safe, dog-friendly activities.",
      "Your dog participates based on comfort, fit, and energy level.",
      "Events add variety while preserving the calm rhythm of the resort.",
    ],
    faqs: [
      {
        question: "Are enrichment events only for daycare dogs?",
        answer:
          "Some activities pair naturally with daycare, but availability can vary by event and service schedule.",
      },
      {
        question: "Do events require separate registration?",
        answer:
          "Some special events may require sign-up. We can share current options when you get started.",
      },
    ],
  },
  grooming: {
    slug: "grooming",
    title: "Dog Grooming",
    navLabel: "Grooming",
    eyebrow: "Grooming",
    hero: "Gentle grooming that helps dogs feel fresh, comfortable, and cared for.",
    intro:
      "Our grooming services are designed with a calm touch, thoughtful handling, and attention to each dog's coat, comfort, and needs.",
    image: "/tour-space.jpg",
    highlights: [
      "Gentle handling from start to finish",
      "Freshen-ups and full grooming care",
      "A calmer experience for busy dog families",
    ],
    includes: [
      "Bathing and coat care",
      "Brush-outs and freshen-ups",
      "Nail care options",
      "Service recommendations by coat and need",
      "Coordination with daycare or boarding when available",
    ],
    process: [
      "We learn about your dog's coat, sensitivities, and grooming history.",
      "Your dog receives care matched to their comfort and service needs.",
      "We finish with practical recommendations for maintenance between visits.",
    ],
    faqs: [
      {
        question: "Can grooming be added to daycare or boarding?",
        answer:
          "Often, yes. Combining services can make grooming easier for busy schedules when availability allows.",
      },
      {
        question: "Do you handle nervous dogs?",
        answer:
          "We take a gentle, patient approach and use the intake process to understand what helps each dog feel more comfortable.",
      },
    ],
  },
} satisfies Record<string, ServicePage>;

export const serviceNavItems = Object.values(servicePages);
