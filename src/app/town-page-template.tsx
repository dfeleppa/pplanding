import { Cormorant_Garamond, Manrope } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Home, Mail, MapPin, Phone } from "lucide-react";
import type { TownPage } from "../lib/content/towns";
import { ADDRESS_LINES, SITE } from "../lib/site";
import { serviceNavItems } from "./service-page-data";
import {
  breadcrumbSchema,
  jsonLdAttrs,
  nestedBreadcrumbs,
  serviceSchema,
} from "../lib/schema";

const displaySerif = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600"],
});

const bodySans = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
});

const SERVICE_COPY: Record<TownPage["service"], {
  eyebrow: string;
  hero: (town: string) => string;
  primary: string;
  ctaHref: string;
  intro: (town: string) => string;
  features: string[];
  whats: { title: string; items: string[] };
  related: Array<{ label: string; href: string }>;
}> = {
  "mobile-grooming": {
    eyebrow: "Mobile Grooming",
    primary: "Mobile Dog Grooming",
    hero: (t) => `Luxury mobile dog grooming brought to your driveway in ${t}.`,
    ctaHref: "/mobile-grooming",
    intro: (t) =>
      `Mobile grooming is the perfect solution for ${t} pet owners who'd rather skip the trip to a salon. Our professional groomers come to you in a fully equipped van for a calm, one-on-one session — and your pet is always hand-dried, never left in a cage.`,
    features: [
      "One-on-one sessions in our fully equipped van outside your home",
      "Always hand-dried — never left in a cage to dry",
      "Most appointments wrapped in under 90 minutes",
      "Built-in restraints and harnesses keep pets secure",
    ],
    whats: {
      title: "Full Grooming Includes",
      items: [
        "Pedicure — nail cut and grind",
        "Ears cleaned and plucked upon request",
        "Two-shampoo bath plus conditioner",
        "Anal glands expressed upon request",
        "Hand blow dry, fluffing, and brushing",
        "Wide range of haircut options",
        "Signature bow and bandana finish",
      ],
    },
    related: [
      { label: "Grooming Pricing", href: "/grooming-pricing" },
      { label: "Mobile Grooming Packages", href: "/mobile-grooming-packages" },
      { label: "Our Vans", href: "/our-vans" },
      { label: "Cat Experience", href: "/cat-experience" },
    ],
  },
  "spa-services": {
    eyebrow: "Mobile Spa Services",
    primary: "Mobile Pet Spa Services",
    hero: (t) => `Luxury mobile pet spa services across ${t}.`,
    ctaHref: "/mobile-grooming",
    intro: (t) =>
      `Our mobile pet spa brings the luxury salon experience directly to ${t} families. From basic full grooms to spa-quality Plus and Premium upgrades with boutique, handcrafted products.`,
    features: [
      "Boutique products including Warren London and HydraGroom",
      "Plus and Premium spa upgrades available",
      "Hand-dried, never crated",
      "Calm, one-on-one sessions",
    ],
    whats: {
      title: "Spa Services Available",
      items: [
        "Basic full groom with haircut",
        "Long-haired bath",
        "Short-haired bath",
        "3-Step Dental treatment",
        "Hydrating Butter Balm",
        "Cucumber Melon Facial",
        "Aloe Vera Paw Cleanser",
        "Premium Shampoo",
      ],
    },
    related: [
      { label: "Mobile Grooming Packages", href: "/mobile-grooming-packages" },
      { label: "Grooming Pricing", href: "/grooming-pricing" },
      { label: "Our Vans", href: "/our-vans" },
    ],
  },
  "in-house-grooming": {
    eyebrow: "Dog Grooming",
    primary: "Dog Grooming",
    hero: (t) =>
      `Mobile and in-house dog grooming for ${t} families.`,
    ctaHref: "/mobile-grooming",
    intro: (t) =>
      `${t} families have two ways to groom with Planet Pooch: mobile grooming at your home, and in-house grooming for dogs enrolled in our daycare or boarding programs at our Franklin Square resort.`,
    features: [
      "Mobile grooming at your home — no hookups required",
      "In-house grooming bundled with daycare or boarding",
      "20% off in-house grooming on stays of 2+ nights",
      "AKC Evaluator Trainer also on-site for training services",
    ],
    whats: {
      title: "What we offer",
      items: [
        "Mobile full grooms and baths",
        "In-house grooming during daycare or boarding",
        "Plus and Premium spa upgrades",
        "Pickup of grooming records and notes for return visits",
      ],
    },
    related: [
      { label: "Mobile Grooming", href: "/mobile-grooming" },
      { label: "In-House Grooming", href: "/in-house-grooming" },
      { label: "Grooming Pricing", href: "/grooming-pricing" },
      { label: "Dog Daycare", href: "/dog-daycare" },
    ],
  },
  "daycare-boarding": {
    eyebrow: "Daycare & Boarding",
    primary: "Dog Daycare & Boarding",
    hero: (t) =>
      `Dog daycare and overnight boarding for ${t} families at our Franklin Square resort.`,
    ctaHref: "/dog-daycare",
    intro: (t) =>
      `${t} families bring their dogs to Planet Pooch for supervised group play, enrichment activities, and overnight boarding at our Franklin Square resort. We strive to make daycare more than a drop-off point — our goal is to create a space where your dog feels as relaxed and at home as they do with you.`,
    features: [
      "Supervised group play organized by size and temperament",
      "One-on-one Enrichment Play for dogs who prefer individual time",
      "Free meet-and-greet evaluation before your dog's first day",
      "Cozy overnight boarding suites — Express to Luxury",
    ],
    whats: {
      title: "Operating Hours",
      items: [
        "Monday–Saturday, 7am–7pm",
        "Morning session: 7am–12:30pm",
        "Full day session: 7am–7pm",
        "Quiet rest period: 12:30pm–1:30pm",
      ],
    },
    related: [
      { label: "Dog Daycare", href: "/dog-daycare" },
      { label: "Daycare Pricing", href: "/daycare-pricing" },
      { label: "Group Play", href: "/group-play" },
      { label: "Dog Boarding", href: "/dog-boarding" },
      { label: "Boarding Pricing", href: "/boarding-pricing" },
    ],
  },
};

const HERO_IMAGE: Record<TownPage["service"], string> = {
  "mobile-grooming": "/tour-space.jpg",
  "spa-services": "/tour-space.jpg",
  "in-house-grooming": "/our-resort-exterior.jpeg",
  "daycare-boarding": "/hero-dog.jpg",
};

const PARENT_SERVICE: Record<TownPage["service"], { name: string; slug: string }> = {
  "mobile-grooming": { name: "Mobile Grooming", slug: "mobile-grooming" },
  "spa-services": { name: "Mobile Grooming", slug: "mobile-grooming" },
  "in-house-grooming": { name: "In-House Grooming", slug: "in-house-grooming" },
  "daycare-boarding": { name: "Daycare & Boarding", slug: "dog-daycare-boarding" },
};

export function TownPageTemplate({ page }: { page: TownPage }) {
  const copy = SERVICE_COPY[page.service];
  const image = HERO_IMAGE[page.service];
  const parent = PARENT_SERVICE[page.service];
  const crumbs = breadcrumbSchema(
    nestedBreadcrumbs([parent], `${copy.primary} in ${page.town}`, page.slug)
  );
  const service = serviceSchema({
    name: `${copy.primary} in ${page.town}`,
    description: copy.hero(page.town),
    slug: page.slug,
    serviceType: copy.primary,
  });

  return (
    <main
      className={`${displaySerif.variable} ${bodySans.variable} min-h-screen bg-[var(--pp-cream)] text-[var(--pp-ink)]`}
    >
      <section className="relative min-h-[520px] overflow-hidden bg-[var(--pp-night)] text-white">
        <Image
          src={image}
          alt={`${copy.primary} in ${page.town}`}
          fill
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: "62% center" }}
          priority
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(38,50,56,0.92)_0%,rgba(38,50,56,0.74)_42%,rgba(38,50,56,0.32)_100%)]" />
        <div className="relative z-10 mx-auto flex min-h-[520px] max-w-7xl flex-col px-5 pb-14 pt-5 sm:px-8 lg:px-10">
          <header className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <Link className="flex items-center" href="/">
              <Image
                src="/planet-pooch-logo.png"
                alt="Planet Pooch Pet Resort"
                width={220}
                height={74}
                className="h-auto w-[180px] brightness-0 invert sm:w-[220px]"
                priority
              />
            </Link>
            <nav
              aria-label="Service pages"
              className="flex flex-wrap items-center gap-x-6 gap-y-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/78"
            >
              {serviceNavItems.map((item) => (
                <Link
                  key={item.slug}
                  href={`/${item.slug}`}
                  className="nav-link transition hover:text-white"
                >
                  {item.navLabel}
                </Link>
              ))}
            </nav>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center border border-[var(--pp-mint)] bg-[var(--pp-mint)] px-5 py-3 text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--pp-night)] transition hover:bg-[var(--pp-mint-deep)]"
            >
              Book Now
            </Link>
          </header>

          <div className="flex flex-1 items-end pt-12">
            <div className="max-w-3xl">
              <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[var(--pp-mint)]">
                {copy.eyebrow} • {page.town}{page.region ? `, ${page.region}` : ""}
              </p>
              <h1 className="mt-5 max-w-3xl text-white">{`${copy.primary} in ${page.town}${page.town.endsWith("County") || page.town === "North Shore" ? "" : ", NY"}`}</h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/82">{copy.hero(page.town)}</p>
              <div className="mt-9 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-[var(--pp-mint)] px-5 py-3 text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--pp-night)] transition hover:bg-[var(--pp-mint-deep)]"
                >
                  Book Now
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href={SITE.phone.href}
                  className="inline-flex items-center gap-2 border border-white/54 bg-black/10 px-5 py-3 text-[11px] font-bold uppercase tracking-[0.16em] text-white backdrop-blur-sm transition hover:bg-white/8"
                >
                  <Phone className="h-4 w-4" />
                  {SITE.phone.display}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[var(--pp-main)]/75">
              Why mobile?
            </p>
            <h2 className="mt-3 text-3xl leading-tight sm:text-4xl">
              {copy.intro(page.town)}
            </h2>
          </div>

          <div className="grid gap-3">
            {copy.features.map((f) => (
              <div
                key={f}
                className="flex items-start gap-3 border border-[rgba(50,73,83,0.12)] bg-white/65 px-5 py-4 text-sm leading-7 text-[rgba(47,42,39,0.82)]"
              >
                <Check className="mt-1 h-4 w-4 shrink-0 text-[var(--pp-main)]" />
                <span>{f}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white/55 px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[var(--pp-main)]/75">
            {copy.whats.title}
          </p>
          <h2 className="mt-3 max-w-3xl text-3xl leading-tight sm:text-4xl">
            What&apos;s included for {page.town} pets.
          </h2>
          <ul className="mt-8 grid max-w-4xl gap-3 sm:grid-cols-2">
            {copy.whats.items.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 border border-[rgba(50,73,83,0.1)] bg-[var(--pp-cream)] px-5 py-4 text-sm leading-7 text-[rgba(47,42,39,0.82)]"
              >
                <Check className="mt-1 h-4 w-4 shrink-0 text-[var(--pp-main)]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[var(--pp-main)]/75">
            More from Planet Pooch
          </p>
          <h2 className="mt-3 text-3xl leading-tight">Explore related services.</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {copy.related.map((r) => (
              <Link
                key={r.href}
                href={r.href}
                className="group flex items-center justify-between border border-[rgba(50,73,83,0.12)] bg-white/65 p-5 text-sm font-semibold text-[var(--pp-ink)] transition hover:bg-white/90"
              >
                <span>{r.label}</span>
                <ArrowRight className="h-4 w-4 text-[var(--pp-main)] transition group-hover:translate-x-1" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--pp-night)] px-5 py-14 text-white sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[var(--pp-mint)]">
              Ready when you are
            </p>
            <h2 className="mt-3 text-3xl leading-tight">Book {copy.primary.toLowerCase()} in {page.town}.</h2>
            <div className="mt-6 grid gap-3 text-sm text-white/82 sm:grid-cols-3">
              <a href={SITE.phone.href} className="flex items-start gap-3 transition hover:text-white">
                <Phone className="mt-0.5 h-4 w-4 shrink-0" />
                <span>{SITE.phone.display}</span>
              </a>
              <a href={`mailto:${SITE.email}`} className="flex items-start gap-3 transition hover:text-white">
                <Mail className="mt-0.5 h-4 w-4 shrink-0" />
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
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-[var(--pp-mint)] px-6 py-4 text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--pp-night)] transition hover:bg-[var(--pp-mint-deep)]"
            >
              Book Now
            </Link>
            <Link
              href="/"
              className="inline-flex items-center gap-2 border border-white/30 bg-transparent px-6 py-4 text-[11px] font-bold uppercase tracking-[0.16em] text-white/85 transition hover:bg-white/8"
            >
              <Home className="h-4 w-4" />
              Back Home
            </Link>
          </div>
        </div>
      </section>

      <script {...jsonLdAttrs(service)} />
      <script {...jsonLdAttrs(crumbs)} />
    </main>
  );
}
