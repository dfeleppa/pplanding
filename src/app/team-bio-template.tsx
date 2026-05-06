import { Cormorant_Garamond, Manrope } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Home, Mail, MapPin, Phone } from "lucide-react";
import type { TeamMember } from "../lib/content/team";
import { ADDRESS_LINES, SITE } from "../lib/site";
import { serviceNavItems } from "./service-page-data";

const displaySerif = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600"],
});

const bodySans = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
});

export function TeamBioTemplate({ member }: { member: TeamMember }) {
  const hasBio = member.paragraphs && member.paragraphs.length > 0;

  return (
    <main
      className={`${displaySerif.variable} ${bodySans.variable} min-h-screen bg-[var(--pp-cream)] text-[var(--pp-ink)]`}
    >
      <section className="bg-[var(--pp-night)] px-5 py-12 text-white sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
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
        </div>
      </section>

      <section className="bg-[var(--pp-cream)] px-5 py-14 sm:px-8 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-3xl">
          <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[var(--pp-main)]/75">
            Our Team
          </p>
          <h1 className="mt-3 text-4xl leading-tight text-[var(--pp-ink)] sm:text-5xl">
            Meet {member.name}
          </h1>
          <p className="mt-3 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--pp-main)]/80">
            {member.role}
            {member.yearStarted ? ` • Since ${member.yearStarted}` : null}
          </p>

          <div className="mt-10 grid gap-5 text-base leading-8 text-[rgba(47,42,39,0.82)]">
            {hasBio
              ? member.paragraphs!.map((p) => <p key={p}>{p}</p>)
              : [
                  <p key="placeholder-1">
                    {member.name} is a member of the Planet Pooch team. We&apos;re working on a full
                    bio — check back soon, or come visit and meet {member.name} in person at our
                    Franklin Square resort.
                  </p>,
                  <p key="placeholder-2">
                    In the meantime, the easiest way to meet our team is to book a meet-and-greet or
                    a first daycare day. We&apos;ll introduce you to everyone who&apos;ll be
                    spending time with your dog.
                  </p>,
                ]}
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/our-team"
              className="inline-flex items-center gap-2 border border-[rgba(50,73,83,0.22)] bg-white/65 px-5 py-3 text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--pp-night)] transition hover:bg-white/85"
            >
              All Team Members
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[var(--pp-mint)] px-5 py-3 text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--pp-night)] transition hover:bg-[var(--pp-mint-deep)]"
            >
              Book Now
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[var(--pp-night)] px-5 py-14 text-white sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[var(--pp-mint)]">
              Visit us
            </p>
            <h2 className="mt-3 text-3xl leading-tight">Come meet the team in person.</h2>
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
          <Link
            href="/"
            className="inline-flex items-center gap-2 border border-white/30 bg-transparent px-6 py-4 text-[11px] font-bold uppercase tracking-[0.16em] text-white/85 transition hover:bg-white/8"
          >
            <Home className="h-4 w-4" />
            Back Home
          </Link>
        </div>
      </section>
    </main>
  );
}
