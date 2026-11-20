import type { Metadata } from "next";
import { Libre_Baskerville, Manrope } from "next/font/google";
import Image from "next/image";
import { Truck } from "lucide-react";
import { SITE } from "../../lib/site";
import { MOBILE_GROOMING_NEW_CLIENT_FORM_URL } from "../../lib/booking";
import { SiteHeader } from "../site-header";
import { SiteFooter } from "../site-footer";
import { StickyMobileCta } from "../sticky-mobile-cta";

const displaySerif = Libre_Baskerville({
  subsets: ["latin"],
  variable: "--font-display",
  weight: "variable",
  style: ["normal", "italic"],
});

const bodySans = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Book Now",
  description: `Book mobile grooming with ${SITE.name}. New clients welcome — start online or call ${SITE.phone.display}.`,
  alternates: { canonical: "/book/" },
};

const bookingPaths = [
  {
    icon: Truck,
    title: "Mobile Grooming",
    body: "A fully equipped grooming van at your driveway — anywhere across Nassau County and the Hamptons.",
    actions: [
      {
        label: "New Client",
        href: MOBILE_GROOMING_NEW_CLIENT_FORM_URL,
        primary: true,
        external: true,
      },
      {
        label: `Call/Text ${SITE.phone.display}`,
        href: SITE.phone.href,
        primary: false,
        external: false,
      },
    ],
  },

] as const;

export default function BookPage() {
  return (
    <main
      id="main"
      className={`${displaySerif.variable} ${bodySans.variable} min-h-screen bg-[var(--pp-cream)] text-[var(--pp-ink)]`}
    >
      <section className="pp-page-hero relative  overflow-hidden bg-[var(--pp-night)] text-white">
        <Image
          src="/van1.jpg"
          alt="Planet Pooch grooming van"
          fill
          sizes="100vw"
          className="object-cover"
          preload
        />
        <div className="pp-hero-image-overlay absolute inset-0" />
        <div className="relative z-10 mx-auto flex  max-w-7xl flex-col px-5  pt-5 sm:px-8 lg:px-10">
          <SiteHeader />

          <div className="pp-hero-content pp-hero-stack">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[var(--pp-mint)]">
                Book Now
              </p>
              <h1 id="page-content" tabIndex={-1} className="pp-hero-title text-white">Let&apos;s get your dog on the calendar.</h1>
            </div>
            <div className="pp-hero-copy">
              <p className="pp-hero-tagline">
                Request your first grooming visit online or call our team for help with scheduling.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative -mt-12 rounded-t-[3rem] bg-[var(--pp-cream)] px-5 py-16 sm:px-8 lg:-mt-14 lg:rounded-t-[4rem] lg:px-10 lg:py-24">
        <div className="mx-auto grid max-w-2xl gap-8">
          {bookingPaths.map(({ icon: PathIcon, title, body, actions }) => (
            <article
              key={title}
              className="flex flex-col border border-[rgba(50,73,83,0.12)] bg-white/55 p-7 shadow-[0_14px_40px_rgba(50,73,83,0.08)] sm:p-9"
            >
              <PathIcon className="h-6 w-6 text-[var(--pp-main)]" aria-hidden />
              <h2 className="mt-5 text-3xl leading-tight">{title}</h2>
              <p className="mt-3 text-sm leading-7 text-[rgba(47,42,39,0.78)]">{body}</p>
              <div className="mt-7 flex flex-col gap-3">
                {actions.map((action) => (
                  <a
                    key={action.label}
                    href={action.href}
                    {...(action.external
                      ? { target: "_blank", rel: "noopener" }
                      : {})}
                    className={
                      action.primary
                        ? "pp-cta pp-cta-sm justify-center text-center"
                        : "inline-flex min-h-11 items-center justify-center border border-[var(--pp-night)]/25 bg-white px-5 py-3 text-center text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--pp-night)] transition hover:bg-[var(--pp-cream)]"
                    }
                  >
                    {action.label}
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <SiteFooter />

      <StickyMobileCta ctaHref="/new-client/" ctaLabel="Get Started" />
    </main>
  );
}
