import Image from "next/image";
import Link from "next/link";
import { headerNavItems } from "../lib/nav";

type SiteHeaderProps = {
  /** Where the Book Now CTA links to. Defaults to /contact/. */
  ctaHref?: string;
};

/**
 * Site-wide header. Renders the logo, primary nav, and Book Now CTA.
 *
 * Assumes a dark background behind it (handled by the parent — either a
 * dark hero image with overlay, or a solid dark band). Text is white.
 *
 * Use this in every page so the navigation is identical across the site.
 */
export function SiteHeader({ ctaHref = "/contact/" }: SiteHeaderProps = {}) {
  return (
    <header className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
      <Link className="flex items-center" href="/" aria-label="Planet Pooch — Home">
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
        aria-label="Primary"
        className="flex flex-wrap items-center gap-x-6 gap-y-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/78"
      >
        {headerNavItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="nav-link transition hover:text-white"
          >
            {item.label}
          </Link>
        ))}
      </nav>
      <Link
        href={ctaHref}
        className="inline-flex items-center justify-center border border-[var(--pp-mint)] bg-[var(--pp-mint)] px-5 py-3 text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--pp-night)] transition hover:bg-[var(--pp-mint-deep)]"
      >
        Book Now
      </Link>
    </header>
  );
}
