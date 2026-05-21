import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Brain,
  Check,
  GraduationCap,
  Heart,
  Home,
  MapPin,
  PawPrint,
  Phone,
  Scissors,
  ShieldCheck,
  Smile,
  Sparkles,
  Star,
  Users,
} from "lucide-react";
import { SITE } from "../../lib/site";
import { LeadForm } from "./lead-form";

export const metadata: Metadata = {
  title: "Long Island Pet Care You Can Actually Trust | Planet Pooch",
  description:
    "Mobile grooming, daycare, boarding, training, and enrichment from a family-run team trusted by 700+ Long Island pet parents.",
  robots: { index: false, follow: true },
};

const displaySerif = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600"],
});

const bodySans = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
});

type ServiceKey =
  | "mobile-grooming"
  | "daycare"
  | "boarding"
  | "training"
  | "enrichment";

const services: Array<{
  key: ServiceKey;
  label: string;
  headline: string;
  body: string;
  image: string;
  icon: typeof Scissors;
}> = [
  {
    key: "mobile-grooming",
    label: "Mobile Grooming",
    headline: "Stress-free grooming at your door",
    body:
      "Perfect for busy owners, anxious dogs, senior dogs, and families who want convenience without sacrificing care.",
    image: "/mobile_home.jpg",
    icon: Scissors,
  },
  {
    key: "daycare",
    label: "Daycare",
    headline: "A safer, structured day for your dog",
    body:
      "Play, supervision, enrichment, and social time in a clean, professionally managed facility.",
    image: "/daycare_home.png",
    icon: PawPrint,
  },
  {
    key: "boarding",
    label: "Boarding",
    headline: "Overnight care you can feel good about",
    body:
      "Clean, comfortable, supervised boarding for pet parents who want peace of mind while they're away.",
    image: "/boarding_home.jpeg",
    icon: Home,
  },
  {
    key: "training",
    label: "Training",
    headline: "Real-life training for better behavior",
    body:
      "Private and structured dog training options to help your dog listen, focus, and thrive.",
    image: "/training_home.jpeg",
    icon: GraduationCap,
  },
  {
    key: "enrichment",
    label: "Enrichment",
    headline: "More than just playtime",
    body:
      "Mental stimulation, movement, and structured activities designed to keep dogs happy and engaged.",
    image: "/enrichment_home.jpg",
    icon: Sparkles,
  },
];

// Placeholder reviews — replace with verified Google reviews before launch.
const reviews = [
  {
    name: "Sarah M.",
    initials: "S",
    service: "Mobile Grooming",
    avatarBg: "bg-[var(--pp-main)]",
    body:
      "Bear has never looked better and he was completely calm — no more stressful trips to a salon. They came right to our driveway. Worth every penny.",
  },
  {
    name: "Michael T.",
    initials: "M",
    service: "Daycare",
    avatarBg: "bg-[var(--pp-gold-deep)]",
    body:
      "We've been bringing our shepherd to daycare for almost a year. The staff knows him by name, the meet-and-greet was thorough, and he comes home tired in the best way.",
  },
  {
    name: "Jennifer L.",
    initials: "J",
    service: "Boarding",
    avatarBg: "bg-[var(--pp-night)]",
    body:
      "Boarded our two huskies for a long weekend. Got daily updates and pictures, they came home happy and healthy. So glad we found Planet Pooch — we trust them completely.",
  },
  {
    name: "Priya R.",
    initials: "P",
    service: "Training",
    avatarBg: "bg-[var(--pp-main-deep)]",
    body:
      "The trainer worked with us on leash manners and door behavior. Our rescue is calmer, more focused, and the change has held up at home. Real results.",
  },
  {
    name: "Tom K.",
    initials: "T",
    service: "Enrichment",
    avatarBg: "bg-[var(--pp-gold-deep)]",
    body:
      "Our older dog isn't into rowdy group play anymore. The one-on-one enrichment sessions have been a game-changer — he comes home content, not overwhelmed.",
  },
  {
    name: "Allison D.",
    initials: "A",
    service: "Mobile Grooming",
    avatarBg: "bg-[var(--pp-main)]",
    body:
      "Used them for our doodle who hated the salon. Calm, gentle, and the cut was perfect. We've been mobile-only ever since.",
  },
];

const trustChips = [
  { icon: Star, label: "4.9★ Google Rating" },
  { icon: Heart, label: "Family-Run Since 2014" },
  { icon: Users, label: "700+ Happy Clients" },
  { icon: MapPin, label: "Franklin Square + Mobile" },
];

const whyBullets = [
  "Family-run since 2014",
  "4.9-star Google rating",
  "Trusted by 700+ local pet parents",
  "Licensed and insured",
  "Professionally trained staff",
  "Clean, climate-controlled facility",
  "Mobile grooming across Long Island",
  "AKC Evaluator on staff",
];

export default function WelcomePage() {
  return (
    <main
      className={`${displaySerif.variable} ${bodySans.variable} min-h-screen bg-[var(--pp-cream)] text-[var(--pp-ink)]`}
    >
      {/* ── Minimal landing header ── */}
      <header className="border-b border-[rgba(50,73,83,0.12)] bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-10">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/planet-pooch-logo.png"
              alt="Planet Pooch"
              width={120}
              height={40}
              className="h-9 w-auto"
              priority
            />
          </Link>
          <a
            href={SITE.phone.href}
            data-track="phone-click"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--pp-night)] transition hover:text-[var(--pp-main)]"
          >
            <Phone className="h-4 w-4" aria-hidden />
            <span className="hidden sm:inline">{SITE.phone.display}</span>
            <span className="sm:hidden">Call</span>
          </a>
        </div>
      </header>

      {/* ── 1. Hero ── */}
      <section className="relative overflow-hidden bg-[var(--pp-night)] text-white">
        <Image
          src="/hero-dog.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-90"
          style={{ objectPosition: "62% center" }}
          priority
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(20,30,36,0.68)_0%,rgba(20,30,36,0.55)_50%,rgba(20,30,36,0.78)_100%)]" />
        <div className="relative z-10 mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl leading-[1.1] text-white sm:text-5xl lg:text-6xl">
              Long Island pet care you can{" "}
              <span className="text-[var(--pp-mint)]/85">actually trust.</span>
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-white/85 sm:text-lg">
              Mobile grooming, daycare, boarding, training, and enrichment from a
              family-run team trusted by 700+ local pet parents.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
              <a
                href="#request"
                data-track="hero-request-availability"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--pp-mint)] px-7 py-4 text-[12px] font-bold uppercase tracking-[0.18em] text-[var(--pp-night)] shadow-[0_10px_30px_rgba(20,30,36,0.4)] transition hover:bg-[var(--pp-mint-deep)]"
              >
                Request Availability
                <ArrowRight className="h-4 w-4" aria-hidden />
              </a>
              <a
                href={SITE.phone.href}
                data-track="phone-click"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/55 bg-white/10 px-7 py-4 text-[12px] font-bold uppercase tracking-[0.18em] text-white backdrop-blur-sm transition hover:bg-white/20"
              >
                <Phone className="h-4 w-4" aria-hidden />
                Call {SITE.phone.display}
              </a>
            </div>

            {/* Trust row */}
            <ul className="mt-10 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap sm:gap-4">
              {trustChips.map(({ icon: Icon, label }) => (
                <li
                  key={label}
                  className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-semibold text-white/90 backdrop-blur-sm sm:text-sm"
                >
                  <Icon className="h-4 w-4 text-[var(--pp-mint)]" aria-hidden />
                  {label}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── 2. Service selector ── */}
      <section className="bg-[var(--pp-cream)] px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--pp-main)]/70">
              Tell us about your dog
            </p>
            <h2 className="mt-4 text-4xl leading-tight text-[var(--pp-ink)] sm:text-5xl">
              What does your dog need?
            </h2>
            <p className="mt-4 text-base leading-7 text-[rgba(47,42,39,0.7)]">
              Pick the service that fits — our team will tailor the next step.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {services.map((svc) => {
              const Icon = svc.icon;
              return (
                <a
                  key={svc.key}
                  href="#request"
                  data-track={`service-${svc.key}`}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-[rgba(50,73,83,0.12)] bg-white shadow-[0_8px_24px_rgba(50,73,83,0.06)] transition hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(50,73,83,0.14)]"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image
                      src={svc.image}
                      alt={`${svc.label} at Planet Pooch`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1280px) 33vw, 20vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                    <div className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--pp-night)] shadow-sm">
                      <Icon className="h-3.5 w-3.5 text-[var(--pp-main)]" aria-hidden />
                      {svc.label}
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="text-lg leading-snug text-[var(--pp-ink)]">
                      {svc.headline}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-6 text-[rgba(47,42,39,0.72)]">
                      {svc.body}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--pp-main)] transition group-hover:text-[var(--pp-night)]">
                      Request availability
                      <ArrowRight className="h-3.5 w-3.5" aria-hidden />
                    </span>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 3. Problem / empathy ── */}
      <section className="bg-white/60 px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-4xl leading-tight text-[var(--pp-ink)] sm:text-5xl">
            Finding pet care shouldn't feel stressful.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[rgba(47,42,39,0.75)]">
            Whether you need grooming, daycare, boarding, or training, you want to
            know your dog is safe, comfortable, and cared for by people who
            actually know what they're doing. That's what Planet Pooch was built
            for.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-6xl gap-5 md:grid-cols-3">
          {[
            {
              icon: Smile,
              title: "Less stress for your dog",
              body:
                "Calm, one-on-one care from people who've done this since 2014 — no kennels, no chaos.",
            },
            {
              icon: Sparkles,
              title: "More convenience for you",
              body:
                "Mobile grooming at your driveway, easy daycare drop-offs, and overnight stays without the guilt.",
            },
            {
              icon: ShieldCheck,
              title: "A team you can trust",
              body:
                "Licensed, insured, professionally trained — with hundreds of Long Island families to back it up.",
            },
          ].map((card) => {
            const Icon = card.icon;
            return (
              <article
                key={card.title}
                className="rounded-2xl border border-[rgba(50,73,83,0.12)] bg-white p-6 shadow-[0_8px_24px_rgba(50,73,83,0.06)] sm:p-7"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[var(--pp-mint)]/70">
                  <Icon className="h-5 w-5 text-[var(--pp-night)]" aria-hidden />
                </span>
                <h3 className="mt-4 text-xl leading-snug text-[var(--pp-ink)]">
                  {card.title}
                </h3>
                <p className="mt-2 text-sm leading-7 text-[rgba(47,42,39,0.72)]">
                  {card.body}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      {/* ── 4. Why Planet Pooch ── */}
      <section className="bg-[linear-gradient(180deg,#6f8793_0%,#5f7682_100%)] px-5 py-16 text-white sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/72">
              Why Planet Pooch
            </p>
            <h2 className="mt-4 text-4xl leading-tight sm:text-5xl">
              Why Long Island pet parents choose Planet Pooch.
            </h2>
          </div>

          <ul className="mx-auto mt-12 grid max-w-4xl gap-3 sm:grid-cols-2">
            {whyBullets.map((bullet) => (
              <li
                key={bullet}
                className="flex items-start gap-3 rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-sm leading-6 backdrop-blur-sm"
              >
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-[var(--pp-mint)]" aria-hidden />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── 5. How it works ── */}
      <section className="bg-[var(--pp-cream)] px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--pp-main)]/70">
              How it works
            </p>
            <h2 className="mt-4 text-4xl leading-tight text-[var(--pp-ink)] sm:text-5xl">
              Three steps to the right care.
            </h2>
          </div>

          <ol className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              {
                step: "1",
                title: "Tell us what your dog needs",
                body:
                  "Choose grooming, daycare, boarding, training, or enrichment and send us a quick request.",
              },
              {
                step: "2",
                title: "Our team reaches out",
                body:
                  "We'll answer your questions, confirm details, and recommend the best next step.",
              },
              {
                step: "3",
                title: "Your dog gets care you can trust",
                body:
                  "At your home, in our facility, or with one of our trained team members.",
              },
            ].map((s) => (
              <li
                key={s.step}
                className="relative flex flex-col rounded-2xl border border-[rgba(50,73,83,0.12)] bg-white p-6 shadow-[0_8px_24px_rgba(50,73,83,0.06)] sm:p-7"
              >
                <span
                  className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[var(--pp-night)] text-lg font-bold text-[var(--pp-mint)]"
                  style={{ fontFamily: "var(--font-display), serif" }}
                  aria-hidden
                >
                  {s.step}
                </span>
                <h3 className="mt-5 text-xl leading-snug text-[var(--pp-ink)]">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-7 text-[rgba(47,42,39,0.72)]">
                  {s.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── 6. Reviews ── */}
      <section className="bg-white/60 px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--pp-main)]/70">
              Real reviews
            </p>
            <h2 className="mt-4 text-4xl leading-tight text-[var(--pp-ink)] sm:text-5xl">
              Loved by Long Island pet parents.
            </h2>
            <div className="mt-5 flex items-center justify-center gap-2 text-sm text-[var(--pp-ink)]/65">
              <span className="flex items-center gap-0.5" aria-hidden>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-[#fbbc04] text-[#fbbc04]"
                  />
                ))}
              </span>
              <span>
                <strong className="font-semibold text-[var(--pp-ink)]">
                  {SITE.reviews.rating}
                </strong>{" "}
                from {SITE.reviews.count.toLocaleString()}+ reviews on Google
              </span>
            </div>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {reviews.map((review) => (
              <article
                key={review.name}
                className="flex flex-col gap-4 rounded-2xl border border-[var(--pp-sand)] bg-white p-6 shadow-[0_8px_24px_rgba(50,73,83,0.06)] sm:p-7"
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span
                      aria-hidden
                      className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold text-white ${review.avatarBg}`}
                    >
                      {review.initials}
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-[var(--pp-ink)]">
                        {review.name}
                      </p>
                      <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--pp-main)]/65">
                        {review.service}
                      </p>
                    </div>
                  </div>
                  <span
                    aria-label="Posted on Google"
                    className="flex items-center gap-0.5 text-[10px] font-bold uppercase tracking-[0.18em]"
                  >
                    <span className="text-[#4285F4]">G</span>
                    <span className="text-[#EA4335]">o</span>
                    <span className="text-[#FBBC05]">o</span>
                    <span className="text-[#4285F4]">g</span>
                    <span className="text-[#34A853]">l</span>
                    <span className="text-[#EA4335]">e</span>
                  </span>
                </div>

                <div
                  className="flex items-center gap-0.5"
                  aria-label="5 out of 5 stars"
                >
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-[#fbbc04] text-[#fbbc04]"
                    />
                  ))}
                </div>

                <p className="text-sm leading-7 text-[var(--pp-ink)]/72">
                  {review.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. Form ── */}
      <section
        id="request"
        className="bg-[var(--pp-cream)] px-5 py-16 sm:px-8 lg:px-10 lg:py-24"
      >
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--pp-main)]/70">
              Request availability
            </p>
            <h2 className="mt-4 text-4xl leading-tight text-[var(--pp-ink)] sm:text-5xl">
              Request availability for your dog.
            </h2>
            <p className="mt-5 text-base leading-8 text-[rgba(47,42,39,0.75)]">
              Tell us what you need and our team will reach out with the best
              next step. Most requests get a response the same business day.
            </p>

            <ul className="mt-7 grid gap-3 text-sm text-[var(--pp-ink)]/82">
              {[
                "No charge to request",
                "Same-day reply during business hours",
                "Personalized next step for your dog",
              ].map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-[var(--pp-main)]" aria-hidden />
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-xl border border-[rgba(50,73,83,0.12)] bg-white/65 p-5">
              <p className="text-sm font-semibold text-[var(--pp-ink)]">
                Prefer to talk to a person?
              </p>
              <a
                href={SITE.phone.href}
                data-track="phone-click"
                className="mt-2 inline-flex items-center gap-2 text-base font-bold text-[var(--pp-night)] underline-offset-4 hover:underline"
              >
                <Phone className="h-4 w-4" aria-hidden />
                Call {SITE.phone.display}
              </a>
              <p className="mt-2 text-xs text-[var(--pp-ink)]/55">
                Mon–Sat, 7:30am–7pm (closed 12:30–1:30pm).
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-[rgba(50,73,83,0.15)] bg-white shadow-[0_16px_40px_rgba(50,73,83,0.12)]">
            <LeadForm />
          </div>
        </div>
      </section>

      {/* ── 8. Final CTA ── */}
      <section className="bg-[var(--pp-night)] px-5 py-16 text-white sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl leading-tight sm:text-5xl">
            Ready to find the right care for your dog?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-white/75">
            Send a quick request and our team will help you choose the best next
            step.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <a
              href="#request"
              data-track="final-request-availability"
              className="inline-flex w-full max-w-sm items-center justify-center gap-2 rounded-full bg-[var(--pp-mint)] px-7 py-4 text-[12px] font-bold uppercase tracking-[0.18em] text-[var(--pp-night)] transition hover:bg-[var(--pp-mint-deep)] sm:w-auto"
            >
              Request Availability
              <ArrowRight className="h-4 w-4" aria-hidden />
            </a>
            <a
              href={SITE.phone.href}
              data-track="phone-click"
              className="inline-flex w-full max-w-sm items-center justify-center gap-2 rounded-full border border-white/55 bg-white/10 px-7 py-4 text-[12px] font-bold uppercase tracking-[0.18em] text-white backdrop-blur-sm transition hover:bg-white/20 sm:w-auto"
            >
              <Phone className="h-4 w-4" aria-hidden />
              Call {SITE.phone.display}
            </a>
          </div>
        </div>
      </section>

      {/* ── Minimal footer ── */}
      <footer className="bg-[var(--pp-ink)] px-5 py-8 text-white/60 sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-3 text-center text-xs sm:flex-row sm:justify-between sm:text-left">
          <p>
            &copy; {new Date().getFullYear()} {SITE.legalName}. All rights
            reserved.
          </p>
          <div className="flex items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5" aria-hidden />
            <span>
              {SITE.address.street}, {SITE.address.locality}, {SITE.address.region}{" "}
              {SITE.address.postalCode}
            </span>
          </div>
        </div>
      </footer>

      {/* ── 9. Sticky mobile CTA ── */}
      <div
        aria-hidden="false"
        className="fixed inset-x-0 bottom-0 z-40 border-t border-[rgba(50,73,83,0.18)] bg-white/95 px-3 pb-[max(env(safe-area-inset-bottom),0.5rem)] pt-2 shadow-[0_-8px_24px_rgba(50,73,83,0.12)] backdrop-blur sm:hidden"
      >
        <div className="flex gap-2">
          <a
            href="#request"
            data-track="sticky-request-availability"
            className="flex-1 inline-flex items-center justify-center rounded-full bg-[var(--pp-mint)] px-4 py-3 text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--pp-night)] transition active:bg-[var(--pp-mint-deep)]"
          >
            Request Availability
          </a>
          <a
            href={SITE.phone.href}
            data-track="phone-click"
            aria-label={`Call ${SITE.phone.display}`}
            className="inline-flex items-center justify-center rounded-full border border-[rgba(50,73,83,0.25)] bg-white px-5 py-3 text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--pp-night)] transition active:bg-[var(--pp-cream)]"
          >
            <Phone className="h-4 w-4" aria-hidden />
            <span className="ml-2">Call</span>
          </a>
        </div>
      </div>
    </main>
  );
}
