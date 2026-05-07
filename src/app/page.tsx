import { Cormorant_Garamond, Manrope } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  GraduationCap,
  HeartHandshake,
  Home,
  Mail,
  MapPin,
  PawPrint,
  Phone,
  Scissors,
  ShieldCheck,
  Sparkles,
  Star,
} from "lucide-react";
import { ADDRESS_LINES, SITE } from "../lib/site";
import { SiteHeader } from "./site-header";

const displaySerif = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600"],
});

const bodySans = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
});

const heroHighlights = [
  {
    title: "Mobile Grooming",
    href: "/mobile-grooming/",
    icon: Scissors,
    copy: "Luxury one-on-one grooming brought to your driveway across Long Island and the Hamptons.",
  },
  {
    title: "Daycare",
    href: "/dog-daycare/",
    icon: PawPrint,
    copy: "Supervised group play and enrichment in a safe, nurturing space built for happy, social dogs.",
  },
  {
    title: "Boarding",
    href: "/dog-boarding/",
    icon: Home,
    copy: "Cozy overnight care, refined routines, and attentive supervision while you're away.",
  },
  {
    title: "Training",
    href: "/dog-training/",
    icon: GraduationCap,
    copy: "Compassionate, results-driven training led by our AKC Evaluator Trainer.",
  },
  {
    title: "Enrichment & Events",
    href: "/enrichment/",
    icon: Sparkles,
    copy: "One-on-one enrichment activities, plus birthday parties, field trips, and signature events.",
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

// Mock Google reviews — replace with real reviews pulled from the
// Google Business Profile when ready.
const googleReviews = [
  {
    name: "Sarah M.",
    initials: "S",
    avatarBg: "bg-[var(--pp-main)]",
    date: "2 weeks ago",
    body:
      "Bear has never looked better and he was completely calm — no more stressful trips to a salon. Dyana came right to our driveway in Garden City. Worth every penny.",
  },
  {
    name: "Michael T.",
    initials: "M",
    avatarBg: "bg-[var(--pp-gold-deep)]",
    date: "1 month ago",
    body:
      "We've been bringing our shepherd to daycare for almost a year. The staff knows him by name, the meet-and-greet was thorough, and he comes home tired in the best way.",
  },
  {
    name: "Jennifer L.",
    initials: "J",
    avatarBg: "bg-[var(--pp-night)]",
    date: "3 weeks ago",
    body:
      "Boarded our two huskies for a long weekend. Got daily updates and pictures, they came home happy and healthy. So glad we found Planet Pooch — we trust them completely.",
  },
] as const;

const footerLinks = {
  services: [
    { label: "Mobile Grooming", href: "/mobile-grooming/" },
    { label: "Pet Grooming Hamptons", href: "/pet-grooming-hamptons/" },
    { label: "Daycare", href: "/dog-daycare/" },
    { label: "Boarding", href: "/dog-boarding/" },
    { label: "Training", href: "/dog-training/" },
    { label: "Enrichment & Events", href: "/enrichment/" },
  ],
  about: [
    { label: "About Us", href: "/about-us/" },
    { label: "Our Team", href: "/our-team/" },
    { label: "FAQs", href: "/faqs/" },
    { label: "We're Hiring", href: "/were-hiring/" },
    { label: "Partners", href: "/partners/" },
    { label: "Blog", href: "/blog/" },
  ],
  legal: [
    { label: "Pet Services Agreement", href: "/agreement/" },
    { label: "Requirements", href: "/requirements/" },
    { label: "Privacy Policy", href: "/privacy-policy/" },
    { label: "Terms", href: "/terms/" },
  ],
} as const;

export default function HomePage() {
  return (
    <main
      className={`${displaySerif.variable} ${bodySans.variable} min-h-screen bg-[var(--pp-night)] text-[var(--pp-ink)]`}
    >
      <section className="relative overflow-hidden bg-[var(--pp-night)] text-white">
        <Image
          src="/hero-dog.jpg"
          alt="A happy dog lounging in a polished resort setting"
          fill
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: "62% center" }}
          priority
        />
        {/* Subtle even darkening so the image still reads while text remains legible on either side. */}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(20,30,36,0.55)_0%,rgba(20,30,36,0.42)_45%,rgba(20,30,36,0.62)_100%)]" />
        <div className="relative z-10 mx-auto flex max-w-7xl flex-col px-5 pt-5 sm:px-8 lg:px-10">
          <SiteHeader />

          <div
            id="top"
            className="py-12 lg:py-16"
          >
            <div className="grid w-full gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[var(--pp-mint)]/85">
                  Planet Pooch · Est. 2014
                </p>
                <h1 className="mt-7 max-w-xl text-white">
                  Enriching the{" "}
                  <span className="italic text-[var(--pp-mint)]">Lives</span> of Pets.
                </h1>
              </div>

              <div className="lg:border-l lg:border-white/20 lg:pl-10">
                <p
                  className="max-w-md text-lg italic leading-relaxed text-white/90 sm:text-xl"
                  style={{ fontFamily: "var(--font-display), serif" }}
                >
                  From concierge mobile grooming to a luxury resort for daycare, boarding, and
                  training, we serve dogs across Nassau, Suffolk, and the Hamptons.
                </p>
                <div className="mt-9 flex flex-col gap-3 sm:max-w-xs">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-between gap-3 bg-[var(--pp-mint)] px-6 py-4 text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--pp-night)] transition hover:bg-[var(--pp-mint-deep)]"
                  >
                    Get Started
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <a
                    href="#services"
                    className="inline-flex items-center justify-center gap-3 border border-white/40 bg-transparent px-6 py-4 text-[11px] font-bold uppercase tracking-[0.2em] text-white transition hover:bg-white/8"
                  >
                    Explore Services
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 border-t border-white/15 pt-6 pb-16 lg:mt-14 lg:pb-20">
            <div className="flex flex-wrap items-center justify-between gap-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/72">
              <span className="flex items-center gap-3">
                <span aria-hidden className="h-px w-8 bg-white/40" />
                Scroll to Explore
              </span>
              <span>Long Island, New York</span>
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
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--pp-main)]/70">
              About Us
            </p>
            <h2 className="mt-4 text-4xl leading-tight text-[var(--pp-ink)] sm:text-5xl">
              Planet Pooch was founded in 2014 by Andy Gonzaga
            </h2>
            <p className="mt-5 text-base leading-8 text-[rgba(47,42,39,0.72)]">
              At 17, Andy started working as a licensed professional groomer alongside his mother, Kathy. After graduating from the New York School of Dog Grooming in 2010, Andy built Planet Pooch from a single mobile grooming van into one of Nassau County&rsquo;s most trusted names in pet care.
            </p>
            <p className="mt-5 text-base leading-8 text-[rgba(47,42,39,0.72)]">
              What began as mobile dog grooming across Franklin Square, Garden City, Rockville Centre, and surrounding Nassau County neighborhoods has grown into a full-service pet resort &mdash; offering professional grooming, dog daycare, overnight boarding, and training. Every service is built on the same family values Andy learned from day one: treat every dog like your own.
            </p>
            <p className="mt-5 text-base leading-8 text-[rgba(47,42,39,0.72)]">
              📍 Serving Franklin Square and all of Nassau County
              <br />
              🐾 Mobile Grooming • Daycare • Boarding • Training
            </p>
          </div>

          <div className="overflow-hidden border border-[rgba(50,73,83,0.12)] bg-white/50 shadow-[0_24px_70px_rgba(50,73,83,0.1)]">
            <Image
              src="/our-resort-exterior.jpeg"
              alt="Planet Pooch Pet Resort exterior with daycare and boarding entrances"
              width={1300}
              height={650}
              sizes="(min-width: 1024px) 56rem, 100vw"
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section id="facility-tour" className="bg-[linear-gradient(180deg,#6f8793_0%,#617783_100%)] px-5 py-16 text-white sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="overflow-hidden border border-white/15 bg-[var(--pp-night)] shadow-[0_24px_70px_rgba(20,30,36,0.32)] lg:order-1">
            <iframe
              className="aspect-video w-full"
              src="https://www.youtube.com/embed/9vUKmx3k5AQ?si=mvCHALROv_obKOo5"
              title="Planet Pooch Facility Tour"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>

          <div className="lg:order-2">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/72">
              Facility Tour
            </p>
            <h2 className="mt-4 text-4xl leading-tight sm:text-5xl">
              Take a closer look before you visit.
            </h2>
            <p className="mt-5 text-base leading-8 text-white/78">
              Watch the tour to get a feel for the resort layout, care spaces, and the environment
              your dog will experience with us.
            </p>
          </div>
        </div>
      </section>

      <section id="about" className="bg-[var(--pp-cream)] px-5 py-18 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--pp-main)]/70">
              Testimonials
            </p>
            <h2 className="mt-4 text-4xl leading-tight text-[var(--pp-ink)] sm:text-5xl">
              Our clients say it best.
            </h2>
            <div className="mt-5 flex items-center justify-center gap-2 text-sm text-[rgba(47,42,39,0.72)]">
              <span className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-[#fbbc04] text-[#fbbc04]" />
                ))}
              </span>
              <span>
                <strong className="font-semibold text-[var(--pp-ink)]">{SITE.reviews.rating}</strong>
                {" "}from {SITE.reviews.count.toLocaleString()} reviews on Google
              </span>
            </div>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {googleReviews.map((review) => (
              <article
                key={review.name}
                className="flex flex-col gap-4 bg-white p-6 shadow-[0_8px_24px_rgba(50,73,83,0.06)] sm:p-7"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span
                      aria-hidden
                      className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold text-white ${review.avatarBg}`}
                    >
                      {review.initials}
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-[var(--pp-ink)]">{review.name}</p>
                      <p className="text-xs text-[rgba(47,42,39,0.55)]">{review.date}</p>
                    </div>
                  </div>
                  <span
                    aria-label="Posted on Google"
                    title="Posted on Google"
                    className="flex shrink-0 items-center gap-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[rgba(47,42,39,0.45)]"
                  >
                    <span className="text-[#4285F4]">G</span>
                    <span className="text-[#EA4335]">o</span>
                    <span className="text-[#FBBC05]">o</span>
                    <span className="text-[#4285F4]">g</span>
                    <span className="text-[#34A853]">l</span>
                    <span className="text-[#EA4335]">e</span>
                  </span>
                </div>

                <div className="flex items-center gap-0.5" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-[#fbbc04] text-[#fbbc04]" />
                  ))}
                </div>

                <p className="text-sm leading-7 text-[rgba(47,42,39,0.78)]">{review.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="gallery"
        className="bg-[var(--pp-cream)] px-5 py-18 sm:px-8 lg:px-10 lg:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <div className="bg-[var(--pp-mint)] p-8 shadow-[0_24px_70px_rgba(50,73,83,0.1)] sm:p-10 lg:p-14">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--pp-main-deep)]/85">
                  Visit Us
                </p>
                <h2 className="mt-4 text-4xl leading-tight text-[var(--pp-ink)] sm:text-5xl">
                  Come see the Planet Pooch difference.
                </h2>
                <p className="mt-5 text-base leading-8 text-[var(--pp-ink)]/82">
                  Learn about our calm spaces, polished care, and welcoming routines in person.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center bg-[var(--pp-night)] px-5 py-3 text-[11px] font-bold uppercase tracking-[0.16em] text-white transition hover:bg-[var(--pp-main-deep)]"
                  >
                    Book Now
                  </Link>
                  <a
                    href={SITE.phone.href}
                    className="inline-flex items-center justify-center bg-white px-5 py-3 text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--pp-night)] transition hover:bg-white/85"
                  >
                    Call {SITE.phone.display}
                  </a>
                </div>
              </div>

              <div className="overflow-hidden border border-[var(--pp-night)]/15 bg-white/40">
                <iframe
                  className="aspect-video w-full"
                  src={`https://www.google.com/maps?q=${encodeURIComponent(`${SITE.legalName}, ${SITE.address.street}, ${SITE.address.locality}, ${SITE.address.region} ${SITE.address.postalCode}`)}&output=embed`}
                  title={`${SITE.legalName} location on Google Maps`}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer id="contact" className="bg-[var(--pp-night)] px-5 pb-8 pt-14 text-white sm:px-8 lg:px-10 lg:pb-10 lg:pt-16">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1.1fr]">
          <div>
            <Image
              src="/planet-pooch-logo.png"
              alt="Planet Pooch Pet Resort"
              width={220}
              height={74}
              className="h-auto w-[190px] brightness-0 invert"
            />
            <p
              className="mt-6 max-w-xs text-sm italic leading-relaxed text-white/72"
              style={{ fontFamily: "var(--font-display), serif" }}
            >
              Mobile grooming and a luxury resort for dogs across Long Island and the Hamptons —
              devoted to enriching the lives of pets since 2014.
            </p>
          </div>

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/60">
              Services
            </p>
            <div className="mt-5 space-y-3 text-sm text-white/85">
              {footerLinks.services.map((item) => (
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
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/60">
              About
            </p>
            <div className="mt-5 space-y-3 text-sm text-white/85">
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

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/60">
              Policies
            </p>
            <div className="mt-5 space-y-3 text-sm text-white/85">
              {footerLinks.legal.map((item) => (
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
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/60">
              Contact
            </p>
            <div className="mt-5 space-y-4 text-sm text-white/85">
              <a href={SITE.phone.href} className="flex items-start gap-3 transition hover:text-white">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-white/55" />
                <span>{SITE.phone.display}</span>
              </a>
              <a
                href={`mailto:${SITE.email}`}
                className="flex items-start gap-3 transition hover:text-white"
              >
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-white/55" />
                <span>{SITE.email}</span>
              </a>
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-white/55" />
                <span>
                  {ADDRESS_LINES[0]}
                  <br />
                  {ADDRESS_LINES[1]}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-14 max-w-7xl border-t border-white/10 pt-6">
          <div className="flex flex-wrap items-center justify-between gap-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/55">
            <p>
              &copy; {new Date().getFullYear()} {SITE.legalName}
            </p>
            <div className="flex items-center gap-6">
              <a href={SITE.social.instagram} aria-label="Instagram" className="transition hover:text-white">
                Instagram
              </a>
              <a href={SITE.social.facebook} aria-label="Facebook" className="transition hover:text-white">
                Facebook
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
