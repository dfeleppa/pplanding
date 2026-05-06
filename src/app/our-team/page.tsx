import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Home } from "lucide-react";
import { team, type TeamMember } from "../../lib/content/team";
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
  title: { absolute: "Our Team | Planet Pooch Pet Resort" },
  description:
    "Meet the groomers, daycare specialists, and trainers behind Planet Pooch — the people who care for your dog every day in Franklin Square, NY.",
  alternates: { canonical: "/our-team" },
};

export default function OurTeamPage() {
  const members: TeamMember[] = Object.values(team);
  const featured = members.filter((m) => m.paragraphs && m.paragraphs.length > 0);
  const rest = members.filter((m) => !(m.paragraphs && m.paragraphs.length > 0));

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

      <section className="px-5 py-14 sm:px-8 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[var(--pp-main)]/75">
            Our Team
          </p>
          <h1 className="mt-3 text-4xl leading-tight text-[var(--pp-ink)] sm:text-5xl">
            Genuine people who know your dog.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-[rgba(47,42,39,0.78)]">
            Our team is the reason families across Long Island trust Planet Pooch with their dogs.
            From mobile grooming pros to daycare specialists and our AKC Evaluator Trainer — they&apos;re
            what makes every day here feel personal.
          </p>
        </div>
      </section>

      <section className="bg-white/55 px-5 py-14 sm:px-8 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[var(--pp-main)]/75">
            Leadership
          </p>
          <h2 className="mt-3 text-3xl leading-tight text-[var(--pp-ink)] sm:text-4xl">
            The people who started it.
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {featured.map((m) => (
              <Link
                key={m.slug}
                href={`/${m.slug}`}
                className="group flex h-full flex-col justify-between border border-[rgba(50,73,83,0.12)] bg-[var(--pp-cream)] p-6 transition hover:bg-white/85"
              >
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--pp-main)]/80">
                    {m.role}{m.yearStarted ? ` • Since ${m.yearStarted}` : ""}
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold leading-tight text-[var(--pp-ink)]">
                    {m.name}
                  </h3>
                  {m.paragraphs ? (
                    <p className="mt-4 text-sm leading-7 text-[rgba(47,42,39,0.78)]">
                      {m.paragraphs[0]}
                    </p>
                  ) : null}
                </div>
                <span className="mt-6 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--pp-main)] transition group-hover:translate-x-1">
                  Read full bio
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-14 sm:px-8 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[var(--pp-main)]/75">
            The team
          </p>
          <h2 className="mt-3 text-3xl leading-tight text-[var(--pp-ink)] sm:text-4xl">
            Everyone who keeps the resort running.
          </h2>
          <p className="mt-3 max-w-2xl text-sm italic leading-7 text-[rgba(47,42,39,0.6)]">
            We&apos;re writing full bios for everyone — coming soon. Click any name to learn about a
            team member, or come visit and meet them in person.
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((m) => (
              <li key={m.slug}>
                <Link
                  href={`/${m.slug}`}
                  className="group flex items-center justify-between border border-[rgba(50,73,83,0.12)] bg-white/55 px-5 py-4 transition hover:bg-white/90"
                >
                  <div>
                    <p className="text-base font-semibold text-[var(--pp-ink)]">{m.name}</p>
                    <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--pp-main)]/70">
                      {m.role}
                    </p>
                  </div>
                  <ArrowRight className="h-4 w-4 text-[var(--pp-main)] transition group-hover:translate-x-1" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-[var(--pp-night)] px-5 py-12 text-white sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <p className="text-sm uppercase tracking-[0.16em] text-white/72">Planet Pooch Pet Resort</p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 border border-white/30 bg-transparent px-5 py-3 text-[11px] font-bold uppercase tracking-[0.16em] text-white/85 transition hover:bg-white/8"
          >
            <Home className="h-4 w-4" />
            Back Home
          </Link>
        </div>
      </section>
    </main>
  );
}
