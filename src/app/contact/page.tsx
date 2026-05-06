import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Home, Mail, MapPin, Phone } from "lucide-react";
import { ADDRESS_LINES, SITE } from "../../lib/site";
import { serviceNavItems } from "../service-page-data";

const displaySerif = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600"],
});

const bodySans = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Book Now | Planet Pooch Pet Resort",
  description: `Book mobile grooming, daycare, boarding, training, or enrichment with ${SITE.legalName} in ${SITE.address.locality}, ${SITE.address.region}. Call ${SITE.phone.display} or email ${SITE.email}.`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <main
      className={`${displaySerif.variable} ${bodySans.variable} min-h-screen bg-[var(--pp-cream)] text-[var(--pp-ink)]`}
    >
      <section className="relative min-h-[420px] overflow-hidden bg-[var(--pp-night)] text-white">
        <Image
          src="/our-resort-exterior.jpeg"
          alt="Planet Pooch Pet Resort exterior"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(38,50,56,0.92)_0%,rgba(38,50,56,0.74)_42%,rgba(38,50,56,0.32)_100%)]" />
        <div className="relative z-10 mx-auto flex min-h-[420px] max-w-7xl flex-col px-5 pb-14 pt-5 sm:px-8 lg:px-10">
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
            <a
              href={SITE.phone.href}
              className="inline-flex items-center gap-2 border border-[var(--pp-mint)] bg-[var(--pp-mint)] px-5 py-3 text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--pp-night)] transition hover:bg-[var(--pp-mint-deep)]"
            >
              <Phone className="h-4 w-4" />
              {SITE.phone.display}
            </a>
          </header>

          <div className="flex flex-1 items-end pt-12">
            <div className="max-w-2xl">
              <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[var(--pp-mint)]">
                Book Now
              </p>
              <h1 className="mt-5 text-white">Let&apos;s plan the right care.</h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-white/82">
                Reach us by phone, email, or stop by the resort. We&apos;ll get back to you to set up your dog&apos;s
                first visit.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-3">
          <article className="border border-[rgba(50,73,83,0.12)] bg-white/55 p-7 shadow-[0_14px_40px_rgba(50,73,83,0.08)]">
            <Phone className="h-5 w-5 text-[var(--pp-main)]" />
            <h2 className="mt-5 text-2xl leading-tight">Call us</h2>
            <p className="mt-3 text-sm leading-7 text-[rgba(47,42,39,0.78)]">
              The fastest way to reach us. We&apos;re happy to talk through services, scheduling, and what makes
              sense for your dog.
            </p>
            <a
              href={SITE.phone.href}
              className="mt-6 inline-flex items-center gap-2 text-base font-semibold text-[var(--pp-main-deep)] transition hover:text-[var(--pp-night)]"
            >
              {SITE.phone.display}
              <ArrowRight className="h-4 w-4" />
            </a>
          </article>

          <article className="border border-[rgba(50,73,83,0.12)] bg-white/55 p-7 shadow-[0_14px_40px_rgba(50,73,83,0.08)]">
            <Mail className="h-5 w-5 text-[var(--pp-main)]" />
            <h2 className="mt-5 text-2xl leading-tight">Email</h2>
            <p className="mt-3 text-sm leading-7 text-[rgba(47,42,39,0.78)]">
              Send a note about availability, services, or anything you&apos;d like us to know about your dog.
            </p>
            <a
              href={`mailto:${SITE.email}`}
              className="mt-6 inline-flex items-center gap-2 text-base font-semibold text-[var(--pp-main-deep)] transition hover:text-[var(--pp-night)]"
            >
              {SITE.email}
              <ArrowRight className="h-4 w-4" />
            </a>
          </article>

          <article className="border border-[rgba(50,73,83,0.12)] bg-white/55 p-7 shadow-[0_14px_40px_rgba(50,73,83,0.08)]">
            <MapPin className="h-5 w-5 text-[var(--pp-main)]" />
            <h2 className="mt-5 text-2xl leading-tight">Visit the resort</h2>
            <p className="mt-3 text-sm leading-7 text-[rgba(47,42,39,0.78)]">
              {ADDRESS_LINES[0]}
              <br />
              {ADDRESS_LINES[1]}
            </p>
            <p className="mt-4 text-sm leading-7 text-[rgba(47,42,39,0.78)]">
              Mobile grooming services available across {SITE.serviceArea.primary}, including {SITE.serviceArea.notable.join(", ")}.
            </p>
          </article>
        </div>
      </section>

      <section className="bg-[var(--pp-night)] px-5 py-14 text-white sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[var(--pp-mint)]">
              Prefer to browse first?
            </p>
            <h2 className="mt-3 text-4xl leading-tight">Explore our services.</h2>
          </div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 border border-white/30 bg-transparent px-6 py-4 text-[11px] font-bold uppercase tracking-[0.16em] text-white transition hover:bg-white/8"
          >
            <Home className="h-4 w-4" />
            Back Home
          </Link>
        </div>
      </section>
    </main>
  );
}
