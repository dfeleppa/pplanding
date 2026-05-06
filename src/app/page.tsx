import { Cormorant_Garamond, Manrope } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  GraduationCap,
  HeartHandshake,
  Home,
  MapPin,
  PawPrint,
  Phone,
  Scissors,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { ADDRESS_LINES, SITE } from "../lib/site";

const displaySerif = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600"],
});

const bodySans = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
});

const navigationItems = [
  { label: "About", href: "/about-us" },
  { label: "Mobile Grooming", href: "/mobile-grooming" },
  { label: "Daycare", href: "/dog-daycare" },
  { label: "Boarding", href: "/dog-boarding" },
  { label: "Training", href: "/dog-training" },
  { label: "Enrichment", href: "/enrichment" },
  { label: "FAQs", href: "/faqs" },
  { label: "Book Now", href: "/contact" },
] as const;

const heroHighlights = [
  {
    title: "Mobile Grooming",
    href: "/mobile-grooming",
    icon: Scissors,
    copy: "Luxury one-on-one grooming brought to your driveway across Long Island and the Hamptons.",
  },
  {
    title: "Daycare",
    href: "/dog-daycare",
    icon: PawPrint,
    copy: "Supervised group play and enrichment in a safe, nurturing space built for happy, social dogs.",
  },
  {
    title: "Boarding",
    href: "/dog-boarding",
    icon: Home,
    copy: "Cozy overnight care, refined routines, and attentive supervision while you're away.",
  },
  {
    title: "Training",
    href: "/dog-training",
    icon: GraduationCap,
    copy: "Compassionate, results-driven training led by our AKC Evaluator Trainer.",
  },
  {
    title: "Enrichment",
    href: "/enrichment",
    icon: Sparkles,
    copy: "One-on-one activities and sensory play for dogs who shine away from the pack.",
  },
] as const;

const experiencePoints = [
  {
    title: "Loving Staff",
    icon: HeartHandshake,
    copy: "Genuine people who know your dog and understand their rhythm.",
  },
  {
    title: "Daily Enrichment",
    icon: Sparkles,
    copy: "Mindful play, movement, and activities tailored to each guest.",
  },
  {
    title: "Resort Comforts",
    icon: Home,
    copy: "Boutique suites and calming details that make rest feel restorative.",
  },
  {
    title: "Safe & Secure",
    icon: ShieldCheck,
    copy: "Supervised playgroups, careful matching, and dependable facility care.",
  },
  {
    title: "Happy Dogs",
    icon: PawPrint,
    copy: "Joyful experiences and wag-worthy results that owners can feel good about.",
  },
] as const;

const footerLinks = {
  grooming: [
    { label: "Mobile Grooming", href: "/mobile-grooming" },
    { label: "Grooming Pricing", href: "/grooming-pricing" },
    { label: "Mobile Grooming Packages", href: "/mobile-grooming-packages" },
    { label: "Pet Grooming Hamptons", href: "/pet-grooming-hamptons" },
    { label: "Cat Experience", href: "/cat-experience" },
    { label: "Our Vans", href: "/our-vans" },
    { label: "In-House Grooming", href: "/in-house-grooming" },
  ],
  daycareBoarding: [
    { label: "Dog Daycare", href: "/dog-daycare" },
    { label: "Group Play", href: "/group-play" },
    { label: "Daycare Pricing", href: "/daycare-pricing" },
    { label: "Puppy Socialization", href: "/puppy-socialization-program" },
    { label: "Dog Boarding", href: "/dog-boarding" },
    { label: "Boarding Pricing", href: "/boarding-pricing" },
    { label: "Boarding Add-Ons", href: "/boarding-add-ons" },
  ],
  more: [
    { label: "Dog Training", href: "/dog-training" },
    { label: "Enrichment", href: "/enrichment" },
    { label: "Enrichment Activities", href: "/enrichment-activities" },
    { label: "What is Enrichment?", href: "/what-is-enrichment" },
    { label: "Our Events", href: "/our-events" },
    { label: "Birthday Party", href: "/birthday-party" },
    { label: "Field Trip", href: "/field-trip" },
  ],
  about: [
    { label: "About Us", href: "/about-us" },
    { label: "Our Team", href: "/our-team" },
    { label: "FAQs", href: "/faqs" },
    { label: "Requirements", href: "/requirements" },
    { label: "We're Hiring", href: "/were-hiring" },
    { label: "Partners", href: "/partners" },
    { label: "Blog", href: "/blog" },
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms", href: "/terms" },
    { label: "Pet Services Agreement", href: "/agreement" },
  ],
} as const;

export default function HomePage() {
  return (
    <main
      className={`${displaySerif.variable} ${bodySans.variable} min-h-screen bg-[var(--pp-night)] text-[var(--pp-ink)]`}
    >
      <section className="relative min-h-screen overflow-hidden bg-[var(--pp-night)] text-white">
        <Image
          src="/hero-dog.jpg"
          alt="A happy dog lounging in a polished resort setting"
          fill
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: "62% center" }}
          priority
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(38,50,56,0.92)_0%,rgba(38,50,56,0.72)_34%,rgba(38,50,56,0.2)_68%,rgba(38,50,56,0.08)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(25,32,36,0.46)_0%,rgba(25,32,36,0.1)_42%,rgba(25,32,36,0.34)_100%)]" />
        <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col px-5 pb-24 pt-5 sm:px-8 lg:px-10">
          <header className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <a className="flex items-center" href="#top">
              <Image
                src="/planet-pooch-logo.png"
                alt="Planet Pooch Pet Resort"
                width={220}
                height={74}
                className="h-auto w-[180px] brightness-0 invert sm:w-[220px]"
                priority
              />
            </a>
            <nav
              aria-label="Primary"
              className="flex flex-wrap items-center gap-x-6 gap-y-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/78"
            >
              {navigationItems.map((item) => (
                <Link key={item.label} href={item.href} className="nav-link transition hover:text-white">
                  {item.label}
                </Link>
              ))}
            </nav>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center border border-[var(--pp-mint)] bg-[var(--pp-mint)] px-5 py-3 text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--pp-night)] transition hover:bg-[var(--pp-mint-deep)]"
            >
              Get Started
            </Link>
          </header>

          <div
            id="top"
            className="flex flex-1 items-center pt-16"
          >
            <div className="max-w-2xl">
              <h1 className="max-w-xl text-white">
                Mobile Pet Grooming on <span className="text-[var(--pp-mint)]">Long Island</span>.
              </h1>
              <p className="mt-6 max-w-md text-base leading-8 text-white/82 sm:text-lg">
                Luxury mobile grooming, daycare, boarding, training, and enrichment for dogs across Nassau, Suffolk, and the Hamptons.
              </p>
              <div className="mt-9 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center bg-[var(--pp-mint)] px-5 py-3 text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--pp-night)] transition hover:bg-[var(--pp-mint-deep)]"
                >
                  Book Now
                </Link>
                <a
                  href="#services"
                  className="inline-flex items-center justify-center border border-white/54 bg-black/10 px-5 py-3 text-[11px] font-bold uppercase tracking-[0.16em] text-white backdrop-blur-sm transition hover:bg-white/8"
                >
                  Explore Services
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="services"
        className="relative -mt-12 rounded-t-[3rem] bg-[var(--pp-cream)] px-5 pb-18 pt-14 text-[var(--pp-ink)] sm:px-8 lg:-mt-14 lg:rounded-t-[4rem] lg:px-10 lg:pt-16"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--pp-main)]/70">
              Tailored care. Heartfelt experience.
            </p>
            <h2 className="mt-4 text-4xl leading-tight sm:text-5xl">
              Five ways we make every day extraordinary.
            </h2>
          </div>

          <div className="mt-12 grid gap-10 md:grid-cols-5">
            {heroHighlights.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.title}
                  href={item.href}
                  className="group mx-auto max-w-sm text-center"
                >
                  <div className="mx-auto flex h-14 w-14 items-center justify-center text-[var(--pp-gold-deep)]">
                    <Icon className="h-8 w-8 stroke-[1.5] transition group-hover:text-[var(--pp-main)]" />
                  </div>
                  <h3 className="mt-6 text-sm font-bold uppercase tracking-[0.28em] text-[var(--pp-night)] transition group-hover:text-[var(--pp-main)]">
                    {item.title}
                  </h3>
                  <p className="mx-auto mt-4 max-w-[16rem] text-sm leading-7 text-[rgba(47,42,39,0.78)]">
                    {item.copy}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section id="experience" className="bg-[linear-gradient(180deg,#6f8793_0%,#617783_100%)] px-5 py-16 text-white sm:px-8 lg:px-10 lg:py-18">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/72">
              Why families choose Planet Pooch
            </p>
            <h2 className="mt-4 text-4xl leading-tight sm:text-[3.4rem]">
              Thoughtful care. Unwavering standards.
            </h2>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-5">
            {experiencePoints.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center text-[#f0d8b1]">
                    <Icon className="h-7 w-7 stroke-[1.6]" />
                  </div>
                  <h3 className="mt-4 text-base">{item.title}</h3>
                  <p className="mx-auto mt-3 max-w-[13rem] text-sm leading-6 text-white/78">
                    {item.copy}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="resort" className="bg-[var(--pp-cream)] px-5 py-18 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--pp-main)]/70">
              Our Resort
            </p>
            <h2 className="mt-4 text-4xl leading-tight text-[var(--pp-ink)] sm:text-5xl">
              A welcoming place built for comfort, care, and confident drop-offs.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[rgba(47,42,39,0.72)]">
              Step inside Planet Pooch and see the spaces where our team creates calm routines,
              safe play, and thoughtful care every day.
            </p>
          </div>

          <div className="mt-12 overflow-hidden border border-[rgba(50,73,83,0.12)] bg-white/50 shadow-[0_24px_70px_rgba(50,73,83,0.1)]">
            <Image
              src="/our-resort-exterior.jpeg"
              alt="Planet Pooch Pet Resort exterior with daycare and boarding entrances"
              width={1300}
              height={650}
              sizes="(min-width: 1024px) 80rem, 100vw"
              className="h-auto w-full object-cover"
            />
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-[0.42fr_0.58fr] lg:items-center">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[var(--pp-main)]/75">
                Facility Tour
              </p>
              <h3 className="mt-4 text-3xl leading-tight text-[var(--pp-ink)] sm:text-4xl">
                Take a closer look before you visit.
              </h3>
              <p className="mt-5 text-base leading-8 text-[rgba(47,42,39,0.72)]">
                Watch the tour to get a feel for the resort layout, care spaces, and the environment
                your dog will experience with us.
              </p>
            </div>

            <div className="overflow-hidden border border-[rgba(50,73,83,0.12)] bg-[var(--pp-night)] shadow-[0_24px_70px_rgba(50,73,83,0.12)]">
              <iframe
                className="aspect-video w-full"
                src="https://www.youtube.com/embed/9vUKmx3k5AQ?si=mvCHALROv_obKOo5"
                title="Planet Pooch Facility Tour"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="bg-[var(--pp-cream)] px-5 py-0 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl overflow-hidden border border-[rgba(50,73,83,0.08)] bg-white/40 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="flex items-center px-7 py-12 sm:px-10 lg:px-12">
            <div className="max-w-md">
              <h2 className="text-4xl leading-tight text-[var(--pp-ink)] sm:text-[3rem]">
                Our clients say it best.
              </h2>
              <p className="mt-6 text-base leading-8 text-[rgba(47,42,39,0.76)]">
                The Planet Pooch team treats our dog like family. The updates, the photos, the
                care &mdash; everything is top notch.
              </p>
              <p className="mt-8 text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--pp-main)]/80">
                Rated {SITE.reviews.rating} stars by {SITE.reviews.count.toLocaleString()} families
              </p>
            </div>
          </div>

          <div className="relative min-h-[320px]">
            <Image
              src="/testimonial-dog.jpg"
              alt="A dog resting comfortably on a soft bed"
              fill
              sizes="(min-width: 1024px) 54vw, 100vw"
              className="object-cover object-center"
            />
          </div>
        </div>
      </section>

      <section
        id="gallery"
        className="bg-[var(--pp-cream)] px-5 pb-18 pt-0 sm:px-8 lg:px-10 lg:pb-24"
      >
        <div className="mx-auto grid max-w-7xl overflow-hidden border border-[rgba(50,73,83,0.08)] bg-[linear-gradient(90deg,rgba(244,236,226,0.96),rgba(234,223,209,0.92))] lg:grid-cols-[0.92fr_1.08fr]">
          <div className="flex items-center px-7 py-12 sm:px-10 lg:px-12">
            <div className="max-w-lg">
              <h2 className="text-4xl leading-tight text-[var(--pp-ink)] sm:text-[3rem]">
                Come see the Planet Pooch difference.
              </h2>
              <p className="mt-4 text-base leading-8 text-[rgba(47,42,39,0.74)]">
                Learn about our calm spaces, polished care, and welcoming routines in person.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center bg-[var(--pp-mint)] px-5 py-3 text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--pp-night)] transition hover:bg-[var(--pp-mint-deep)]"
                >
                  Book Now
                </Link>
                <a
                  href={SITE.phone.href}
                  className="inline-flex items-center justify-center border border-[rgba(50,73,83,0.22)] bg-white/55 px-5 py-3 text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--pp-night)] transition hover:bg-white/75"
                >
                  Call {SITE.phone.display}
                </a>
              </div>
            </div>
          </div>

          <div className="relative min-h-[320px]">
            <Image
              src="/tour-space.jpg"
              alt="A bright, refined pet resort reception area"
              fill
              sizes="(min-width: 1024px) 54vw, 100vw"
              className="object-cover object-center"
            />
            <div className="absolute right-5 top-5 rounded-full bg-[rgba(247,240,232,0.88)] px-4 py-2 text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--pp-main-deep)] shadow-[0_10px_30px_rgba(47,42,39,0.12)]">
              Planet Pooch
            </div>
          </div>
        </div>
      </section>

      <footer id="contact" className="bg-[var(--pp-night)] px-5 py-12 text-white sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_repeat(4,0.85fr)]">
          <div>
            <Image
              src="/planet-pooch-logo.png"
              alt="Planet Pooch Pet Resort"
              width={220}
              height={74}
              className="h-auto w-[190px] brightness-0 invert"
            />
          </div>

          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/68">
              Mobile Grooming
            </p>
            <div className="mt-4 space-y-3 text-sm text-white/82">
              {footerLinks.grooming.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block transition hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/68">
              Daycare & Boarding
            </p>
            <div className="mt-4 space-y-3 text-sm text-white/82">
              {footerLinks.daycareBoarding.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block transition hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/68">
              Training, Enrichment & Events
            </p>
            <div className="mt-4 space-y-3 text-sm text-white/82">
              {footerLinks.more.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block transition hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/68">
              About
            </p>
            <div className="mt-4 space-y-3 text-sm text-white/82">
              {footerLinks.about.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block transition hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mx-auto mt-12 grid max-w-7xl gap-6 border-t border-white/10 pt-8 lg:grid-cols-[1.5fr_1fr] lg:items-end">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/68">
              Contact
            </p>
            <div className="mt-4 space-y-4 text-sm text-white/82">
              <a href={SITE.phone.href} className="flex items-start gap-3 transition hover:text-white">
                <Phone className="mt-0.5 h-4 w-4 shrink-0" />
                <span>{SITE.phone.display}</span>
              </a>
              <a
                href={`mailto:${SITE.email}`}
                className="flex items-start gap-3 transition hover:text-white"
              >
                <ArrowRight className="mt-0.5 h-4 w-4 shrink-0" />
                <span>{SITE.email}</span>
              </a>
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                <span>
                  {ADDRESS_LINES[0]}
                  <br />
                  {ADDRESS_LINES[1]}
                </span>
              </div>
            </div>
            <div className="mt-6 flex items-center gap-4 text-[11px] font-bold uppercase tracking-[0.16em] text-white/78">
              <a href={SITE.social.instagram} aria-label="Instagram" className="transition hover:text-white">
                Instagram
              </a>
              <a href={SITE.social.facebook} aria-label="Facebook" className="transition hover:text-white">
                Facebook
              </a>
              <a href={SITE.social.tiktok} aria-label="TikTok" className="transition hover:text-white">
                TikTok
              </a>
              <a href={SITE.social.youtube} aria-label="YouTube" className="transition hover:text-white">
                YouTube
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
