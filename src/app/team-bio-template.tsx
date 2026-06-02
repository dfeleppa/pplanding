import { Cormorant_Garamond, Manrope } from "next/font/google";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { TeamMember } from "../lib/content/team";
import {
  breadcrumbSchema,
  jsonLdAttrs,
  nestedBreadcrumbs,
  personSchema,
} from "../lib/schema";
import { Breadcrumbs } from "./breadcrumbs";
import { SiteHeader } from "./site-header";
import { SiteFooter } from "./site-footer";

const displaySerif = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600"],
});

const bodySans = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
});

const ROLE_LINKS: Array<{ test: RegExp; label: string; href: string }> = [
  { test: /mobile groomer/i, label: "Mobile Grooming", href: "/mobile-grooming/" },
  { test: /grooming|groomer/i, label: "In-House Grooming", href: "/in-house-grooming/" },
  { test: /trainer/i, label: "Dog Training", href: "/dog-training/" },
  { test: /enrichment/i, label: "Enrichment", href: "/enrichment/" },
  { test: /owner|founder/i, label: "About Planet Pooch", href: "/" },
  { test: /.*/, label: "Dog Daycare", href: "/dog-daycare/" },
];

function pickRoleLink(role: string) {
  for (const entry of ROLE_LINKS) {
    if (entry.test.test(role)) return entry;
  }
  return ROLE_LINKS[ROLE_LINKS.length - 1];
}

export function TeamBioTemplate({ member }: { member: TeamMember }) {
  const hasBio = member.paragraphs && member.paragraphs.length > 0;
  const crumbs = breadcrumbSchema(
    nestedBreadcrumbs(
      [{ name: "Our Team", slug: "our-team" }],
      member.name,
      member.slug
    )
  );
  const person = personSchema({
    name: member.name,
    role: member.role,
    slug: member.slug,
    description: hasBio ? member.paragraphs![0] : undefined,
    yearStarted: member.yearStarted,
  });
  const roleLink = pickRoleLink(member.role);

  return (
    <main
      className={`${displaySerif.variable} ${bodySans.variable} min-h-screen bg-[var(--pp-cream)] text-[var(--pp-ink)]`}
    >
      <section className="bg-[var(--pp-night)] px-5 py-12 text-white sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SiteHeader />
        </div>
      </section>

      <section className="bg-[var(--pp-cream)] px-5 py-14 sm:px-8 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-3xl">
          <Breadcrumbs
            items={[
              { name: "Home", href: "/" },
              { name: "Our Team", href: "/our-team/" },
              { name: member.name },
            ]}
            className="mb-6"
          />
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

          <section className="mt-12 border border-[rgba(50,73,83,0.18)] bg-white/60 p-6 sm:p-8">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[var(--pp-main)]/75">
              Work with {member.name.split(" ")[0]}
            </p>
            <h2 className="mt-2 text-2xl text-[var(--pp-ink)] sm:text-3xl">{roleLink.label}</h2>
            <Link
              href={roleLink.href}
              className="mt-3 inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.18em] text-[var(--pp-night)] transition hover:text-[var(--pp-main)]"
            >
              Explore {roleLink.label}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </section>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/our-team"
              className="inline-flex items-center gap-2 border border-[rgba(50,73,83,0.22)] bg-white/65 px-5 py-3 text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--pp-night)] transition hover:bg-white/85"
            >
              All Team Members
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="https://api.leadconnectorhq.com/widget/form/BuIn8g5wkvpXVAcvbRO7"
              className="inline-flex items-center gap-2 bg-[var(--pp-mint)] px-5 py-3 text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--pp-night)] transition hover:bg-[var(--pp-mint-deep)]"
            >
              Book Now
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />

      <script {...jsonLdAttrs(crumbs)} />
      <script {...jsonLdAttrs(person)} />
    </main>
  );
}
