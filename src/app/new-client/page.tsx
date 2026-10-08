import type { Metadata } from "next";
import { SiteHeader } from "../site-header";
import { SiteFooter } from "../site-footer";
import { SITE } from "../../lib/site";
import { NewClientForm } from "./new-client-form";
import styles from "./new-client.module.css";

const title = "Get Started with Planet Pooch | Grooming, Daycare, Boarding & Training";
const description = "Tell us about you and your dog. Get started with Planet Pooch’s grooming, daycare, boarding, training, and enrichment services on Long Island.";

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
    <div className="bg-[var(--pp-night)] px-5 pt-5 pb-14 text-white sm:px-8 lg:px-10 lg:pb-20">
      <div className="mx-auto max-w-7xl">
        <SiteHeader />
        <div className="grid w-full gap-12 pt-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:pt-16">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[var(--pp-mint)]">Let&apos;s get to know your pup</p>
            <h1 className="mt-4 text-[2.75rem] leading-[1.08] text-white sm:text-[3.5rem] lg:text-[4.25rem]">Get started with Planet Pooch.</h1>
          </div>
          <div className="lg:border-l lg:border-white/20 lg:pl-10">
            <p className="pp-hero-description max-w-md text-lg leading-relaxed text-white/90 sm:text-xl">
              From grooming to daycare, boarding, training, and enrichment, we&apos;re here for you and your pup. Fill out this quick form and our team will help you find the right next step.
            </p>
          </div>
        </div>
      </div>
    </div>
    <main id="main" className={styles.page}>
    <div className={styles.card}>
      <NewClientForm />
    </div>
    </main>
    <SiteFooter />
  </>;
}
