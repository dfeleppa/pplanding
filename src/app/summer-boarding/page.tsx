import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import Image from "next/image";
import {
  ArrowRight,
  CalendarDays,
  Camera,
  Heart,
  Moon,
  PawPrint,
  Phone,
  ShieldCheck,
  Snowflake,
  Star,
  Sun,
  Users,
} from "lucide-react";
import { SITE } from "../../lib/site";
import { SiteFooter } from "../site-footer";
import { SiteHeader } from "../site-header";
import { StickyMobileCta } from "../sticky-mobile-cta";
import { LeadForm } from "../welcome/lead-form";

export const metadata: Metadata = {
  title:
    "Summer Dog Boarding Long Island | Planet Pooch Pet Resort",
  description:
    "Book summer dog boarding at Planet Pooch in Franklin Square, NY. Climate-controlled suites, daily enrichment, photo updates & 24/7 supervision. Reserve your spot today.",
  robots: { index: false, follow: false },
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

const whyPlanetPooch = [
  {
    icon: Snowflake,
    title: "Climate-Controlled Suites",
    copy: "Cool, comfortable rooms so your dog can relax even on the hottest days.",
  },
  {
    icon: Users,
    title: "24/7 On-Site Supervision",
    copy: "Staff on-site around the clock — your dog is never left alone overnight.",
  },
  {
    icon: Sun,
    title: "Daily Play & Enrichment",
    copy: "Structured outdoor play, sensory activities, and socialization every single day.",
  },
  {
    icon: Camera,
    title: "Daily Photo & Video Updates",
    copy: "See exactly how your dog is doing with pictures and reports sent straight to you.",
  },
  {
    icon: Heart,
    title: "Personalized Care Plans",
    copy: "Feeding schedules, medications, and routines maintained exactly the way you do it at home.",
  },
  {
    icon: ShieldCheck,
    title: "Licensed & Insured",
    copy: "Professional team trained in pet safety, first aid, and dog behavior.",
  },
] as const;

const boardingReviews = [
  {
    name: "Michelle F.",
    initials: "M",
    avatarBg: "bg-[var(--pp-night)]",
    body: "My mini Goldendoodle was taken such great care of from start to finish. They were able to accommodate a last-minute stay for a full week… He received one-on-one playtime and they sent the best action shots of him playing ball and having an absolute blast. I loved receiving the daily boarding reports about how his day went… I drove over an hour from home to get here and it was 100 percent worth the drive.",
  },
  {
    name: "Pat H.",
    initials: "P",
    avatarBg: "bg-[var(--pp-main)]",
    body: "I adopted a very shy, nervous dog & after a few days of daycare & several days of boarding my dog has shown a huge improvement… He runs & plays with the other dogs & has a lot more confidence now. All the staff there are amazing, kind, compassionate & very accommodating. At Planet Pooch it is truly all about the dogs!",
  },
  {
    name: "Jennifer L.",
    initials: "J",
    avatarBg: "bg-[var(--pp-gold-deep)]",
    body: "Boarded our two huskies for a long weekend. Got daily updates and pictures, they came home happy and healthy. So glad we found Planet Pooch — we trust them completely.",
  },
] as const;

const faqs = [
  {
    q: "How far in advance should I book summer boarding?",
    a: "Summer is our busiest season. We recommend reserving your dates at least 2–4 weeks in advance — holiday weekends fill up even faster.",
  },
  {
    q: "What does a typical day look like for my dog?",
    a: "Dogs enjoy structured outdoor play sessions, enrichment activities, socialization time, meals on their home schedule, and rest periods in climate-controlled suites.",
  },
  {
    q: "Is there a meet-and-greet before the first stay?",
    a: "Yes — every new guest gets a complimentary meet-and-greet so we can learn your dog's personality, preferences, and routine before their stay.",
  },
  {
    q: "Can you administer medications?",
    a: "Absolutely. Our trained staff can handle medications, supplements, and special dietary needs. Just let us know during check-in.",
  },
  {
    q: "Will I receive updates while my dog is boarding?",
    a: "Yes! You'll receive daily photo updates and boarding reports so you can enjoy your trip knowing your dog is happy.",
  },
] as const;

export default function SummerBoardingPage() {
  return (
    <main
      className={`${displaySerif.variable} ${bodySans.variable} min-h-screen bg-[var(--pp-night)] text-[var(--pp-ink)]`}
    >
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-[var(--pp-night)] text-white">
        <Image
          src="/boarding/boarding_hero.jpg"
          alt="Happy dog enjoying supervised play at Planet Pooch Pet Resort"
          fill
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: "center 35%" }}
          priority
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(20,30,36,0.6)_0%,rgba(20,30,36,0.45)_40%,rgba(20,30,36,0.72)_100%)]" />

        <div className="relative mx-auto flex max-w-7xl flex-col px-5 pt-5 sm:px-8 lg:px-10">
          <SiteHeader />

          <div className="pb-28 pt-14 lg:pb-36 lg:pt-20">
            <div className="max-w-2xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--pp-mint)]/90">
                Summer 2026
              </p>
              <h1 className="mt-4 text-white">
                Summer boarding your dog will{" "}
                <span className="text-[var(--pp-mint)]/80">
                  actually enjoy.
                </span>
              </h1>
              <p className="mt-5 max-w-lg text-lg leading-relaxed text-white/80 sm:text-xl">
                Climate-controlled suites, daily enrichment, and 24/7
                supervision at our Franklin Square resort. Spots fill
                fast&nbsp;&mdash; reserve yours today.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#request"
                  data-track="hero-reserve-spot"
                  className="pp-cta min-h-[52px] !px-7"
                >
                  Reserve Your Spot
                  <span className="pp-cta-arrow" aria-hidden />
                </a>
                <a
                  href={SITE.phone.href}
                  data-track="phone-click"
                  className="pp-cta-ghost min-h-[52px] !px-7"
                >
                  Call {SITE.phone.display}
                </a>
              </div>

              <div className="mt-6 flex items-center gap-2 text-sm text-white/80">
                <span className="flex items-center gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-[#fbbc04] text-[#fbbc04]"
                    />
                  ))}
                </span>
                <span>
                  <strong className="font-semibold text-white">4.9</strong> from
                  700+ reviews on Google
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Urgency bar ── */}
      <section className="relative -mt-12 rounded-t-[3rem] bg-[var(--pp-cream)] px-5 pt-10 pb-2 sm:px-8 lg:-mt-14 lg:rounded-t-[4rem] lg:px-10 lg:pt-12">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center sm:flex-row sm:justify-center sm:gap-8">
          <div className="flex items-center gap-2 text-sm font-semibold text-[var(--pp-night)]">
            <CalendarDays className="h-5 w-5 text-[var(--pp-main)]" aria-hidden />
            Summer spots are limited
          </div>
          <span className="hidden h-5 w-px bg-[var(--pp-sand)] sm:block" aria-hidden />
          <div className="flex items-center gap-2 text-sm font-semibold text-[var(--pp-night)]">
            <Moon className="h-5 w-5 text-[var(--pp-main)]" aria-hidden />
            Holiday weekends book 3–4 weeks out
          </div>
          <span className="hidden h-5 w-px bg-[var(--pp-sand)] sm:block" aria-hidden />
          <a
            href="#request"
            data-track="urgency-reserve"
            className="text-sm font-bold text-[var(--pp-main)] underline underline-offset-4 transition hover:text-[var(--pp-night)]"
          >
            Check dates&nbsp;&rarr;
          </a>
        </div>
      </section>

      {/* ── What Summer Boarding Looks Like ── */}
      <section className="bg-[var(--pp-cream)] px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--pp-main)]/70">
              A day in the life
            </p>
            <h2 className="mt-4 text-4xl leading-tight text-[var(--pp-ink)] sm:text-5xl">
              What summer boarding looks like at Planet Pooch.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-[rgba(47,42,39,0.72)]">
              Every day is structured around play, rest, and enrichment — so
              your dog has the time of their life while you enjoy yours.
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-4xl gap-0 overflow-hidden rounded-2xl border border-[var(--pp-sand)] bg-white shadow-sm">
            {[
              { time: "7:00 AM", activity: "Morning walk & potty break" },
              { time: "8:00 AM", activity: "Breakfast on your dog's schedule" },
              { time: "9:30 AM", activity: "Supervised group or solo play session" },
              { time: "12:00 PM", activity: "Rest & hydration in climate-controlled suites" },
              { time: "2:00 PM", activity: "Enrichment — scent work, agility, or sensory play" },
              { time: "4:30 PM", activity: "Afternoon play session & outdoor time" },
              { time: "6:00 PM", activity: "Dinner & evening wind-down" },
              { time: "8:30 PM", activity: "Final walk & settle in for the night" },
            ].map((item, i) => (
              <div
                key={item.time}
                className={`flex items-center gap-4 px-6 py-4 sm:gap-6 sm:px-8 ${i > 0 ? "border-t border-[var(--pp-sand)]/60" : ""}`}
              >
                <span className="w-20 shrink-0 text-sm font-bold text-[var(--pp-main)]">
                  {item.time}
                </span>
                <span className="text-sm text-[var(--pp-ink)]/80 sm:text-base">
                  {item.activity}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Planet Pooch ── */}
      <section className="bg-[linear-gradient(180deg,#6f8793_0%,#617783_100%)] px-5 py-16 text-white sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/72">
              Why Planet Pooch
            </p>
            <h2 className="mt-4 text-4xl leading-tight sm:text-5xl">
              Not all boarding is created equal.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-white/72">
              We go beyond the basics to make sure your dog is safe,
              comfortable, and genuinely happy while you&rsquo;re away.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyPlanetPooch.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="flex gap-4 rounded-xl bg-white/10 p-6 backdrop-blur-sm"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--pp-mint)]/20">
                    <Icon className="h-5 w-5 text-[var(--pp-mint)]" aria-hidden />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-white" style={{ fontFamily: "var(--font-body)" }}>
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-white/72">
                      {item.copy}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <a
              href="#request"
              data-track="why-reserve-spot"
              className="pp-cta min-h-[52px] !px-7"
            >
              Reserve Your Spot
              <span className="pp-cta-arrow" aria-hidden />
            </a>
          </div>
        </div>
      </section>

      {/* ── Gallery strip ── */}
      <section className="bg-[var(--pp-cream)] px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--pp-main)]/70">
              Inside the resort
            </p>
            <h2 className="mt-4 text-4xl leading-tight text-[var(--pp-ink)] sm:text-5xl">
              See where your dog will stay.
            </h2>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { src: "/boarding/IMG_0687.jpg", alt: "Dog enjoying playtime at Planet Pooch" },
              { src: "/boarding/img_6687.jpg", alt: "Comfortable boarding suite at Planet Pooch" },
              { src: "/boarding/day-in-the-life.png", alt: "A day in the life at Planet Pooch boarding" },
            ].map((img) => (
              <div
                key={img.src}
                className="relative aspect-[4/3] overflow-hidden rounded-xl"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Reviews ── */}
      <section className="bg-[var(--pp-night)] px-5 py-16 text-white sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/72">
              Boarding reviews
            </p>
            <h2 className="mt-4 text-4xl leading-tight sm:text-5xl">
              Pet parents trust us with their dogs.
            </h2>
            <div className="mt-5 flex items-center justify-center gap-2 text-sm text-white/78">
              <span className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-[#fbbc04] text-[#fbbc04]"
                  />
                ))}
              </span>
              <span>
                <strong className="font-semibold text-white">
                  {SITE.reviews.rating}
                </strong>{" "}
                from {SITE.reviews.count.toLocaleString()} reviews on Google
              </span>
            </div>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {boardingReviews.map((review) => (
              <article
                key={review.name}
                className="flex flex-col gap-4 rounded-xl bg-white/10 p-6 backdrop-blur-sm sm:p-7"
              >
                <div className="flex items-center gap-3">
                  <span
                    aria-hidden
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-semibold text-white ${review.avatarBg}`}
                  >
                    {review.initials}
                  </span>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-white">
                      {review.name}
                    </p>
                    <div className="mt-0.5 flex items-center gap-2">
                      <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--pp-mint)]/75">
                        Boarding
                      </p>
                      <span
                        aria-label="Posted on Google"
                        className="flex items-center gap-0.5 text-[10px] font-bold uppercase tracking-[0.18em] text-white/35"
                      >
                        <span className="text-[#4285F4]">G</span>
                        <span className="text-[#EA4335]">o</span>
                        <span className="text-[#FBBC05]">o</span>
                        <span className="text-[#4285F4]">g</span>
                        <span className="text-[#34A853]">l</span>
                        <span className="text-[#EA4335]">e</span>
                      </span>
                    </div>
                  </div>
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

                <p className="text-sm leading-7 text-white/78">
                  {review.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-[var(--pp-cream)] px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--pp-main)]/70">
              FAQs
            </p>
            <h2 className="mt-4 text-4xl leading-tight text-[var(--pp-ink)] sm:text-5xl">
              Common questions about summer boarding.
            </h2>
          </div>

          <div className="mt-12 space-y-6">
            {faqs.map((faq) => (
              <div
                key={faq.q}
                className="rounded-xl border border-[var(--pp-sand)] bg-white p-6 shadow-sm"
              >
                <h3
                  className="text-lg text-[var(--pp-ink)]"
                  style={{ fontFamily: "var(--font-body)", fontWeight: 600 }}
                >
                  {faq.q}
                </h3>
                <p className="mt-2 text-sm leading-7 text-[var(--pp-ink)]/72">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Lead Capture Form ── */}
      <section
        id="request"
        className="bg-[var(--pp-cream)] px-5 py-16 sm:px-8 lg:px-10 lg:py-24"
      >
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--pp-main)]/70">
              Reserve your spot
            </p>
            <h2 className="mt-4 text-4xl leading-tight text-[var(--pp-ink)] sm:text-5xl">
              Book summer boarding before spots fill up.
            </h2>
            <p className="mt-5 text-base leading-8 text-[rgba(47,42,39,0.75)]">
              Tell us your dates and we&rsquo;ll get back to you with
              availability — usually the same business day.
            </p>

            <ul className="mt-6 space-y-3 text-sm text-[var(--pp-ink)]/72">
              {[
                "Free meet-and-greet for first-time guests",
                "Flexible drop-off & pick-up times",
                "Multi-dog and extended-stay discounts available",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <PawPrint
                    className="mt-0.5 h-4 w-4 shrink-0 text-[var(--pp-main)]"
                    aria-hidden
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-7 rounded-xl border border-[rgba(50,73,83,0.12)] bg-white/65 p-5">
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

      {/* ── Final CTA ── */}
      <section className="bg-[var(--pp-night)] px-5 py-16 text-white sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl leading-tight sm:text-5xl">
            Give your dog a summer vacation{" "}
            <span className="text-[var(--pp-mint)]/80">they&rsquo;ll love.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-white/70">
            While you&rsquo;re at the beach, your dog will be having just as
            much fun at Planet Pooch. Reserve summer boarding today.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#request"
              data-track="final-reserve-spot"
              className="pp-cta min-h-[52px] !px-7"
            >
              Reserve Your Spot
              <span className="pp-cta-arrow" aria-hidden />
            </a>
            <a
              href={SITE.phone.href}
              data-track="phone-click"
              className="pp-cta-ghost min-h-[52px] !px-7"
            >
              <Phone className="h-4 w-4" aria-hidden />
              Call {SITE.phone.display}
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />

      <StickyMobileCta ctaHref="#request" ctaLabel="Reserve Your Spot" />
    </main>
  );
}
