import { HeroBookingButton } from "../hero-booking-button";
import { HeroBackdrop } from "../hero-backdrop";
import type { Metadata } from "next";
import { SiteHeader } from "../site-header";
import { SiteFooter } from "../site-footer";
import { SITE } from "../../lib/site";
import { MOBILE_GROOMING_NEW_CLIENT_FORM_URL } from "../../lib/booking";
import styles from "./new-client.module.css";

const title = "Get Started with Planet Pooch | Mobile Grooming";
const description = "Tell us about you and your dog. Get started with Planet Pooch’s mobile grooming services on Long Island.";

export const metadata: Metadata = {
  title: { absolute: title }, description,
  alternates: { canonical: "/new-client/" },
  openGraph: {
    title, description, url: `${SITE.url}/new-client/`, siteName: SITE.name, type: "website",
    images: [{ url: "/planet-pooch-logo.png", alt: "Planet Pooch" }],
  },
  twitter: { card: "summary", title, description, images: ["/planet-pooch-logo.png"] },
  robots: { index: false, follow: false, googleBot: { index: false, follow: false } },
};

export default function NewClientPage() {
  return <>
    <div className="pp-page-hero bg-[var(--pp-night)] px-5 pt-5  text-white sm:px-8 lg:px-10 ">
        <HeroBackdrop />
      <div className="mx-auto max-w-7xl">
        <SiteHeader />
        <div className="pp-hero-content pp-hero-stack">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[var(--pp-mint)]">Let&apos;s get to know your pup</p>
            <h1 id="page-content" tabIndex={-1} className="pp-hero-title text-white">Get started with Planet Pooch.</h1>
          </div>
          <div className="pp-hero-copy">
            <p className="pp-hero-tagline">
              Tell us about your pup, and we&apos;ll help you find the right services.
            </p>
              <div className="mt-8"><HeroBookingButton /></div>
          </div>
        </div>
      </div>
    </div>
    <main id="main" className={styles.page}>
    <div className={styles.card}>
      <iframe src={MOBILE_GROOMING_NEW_CLIENT_FORM_URL} title="Mobile grooming new client form" className="block h-[1000px] w-full border-0" />
      <p className="p-6"><a href={MOBILE_GROOMING_NEW_CLIENT_FORM_URL} className="underline">Open the mobile grooming form directly</a></p>
    </div>
    </main>
    <SiteFooter />
  </>;
}
