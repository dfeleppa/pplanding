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
    <div className="bg-[var(--pp-night)] px-5 pt-5 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl"><SiteHeader /></div>
    </div>
    <main id="main" className={styles.page}>
    <div className={styles.card}>
      <div className={styles.intro}><p className={styles.eyebrow}>LET’S GET TO KNOW YOUR PUP</p>
        <h1>Get started with Planet Pooch.</h1>
        <p>From grooming to daycare, boarding, training, and enrichment, we’re here for you and your pup. Fill out this quick form and our team will help you find the right next step.</p>
      </div>
      <NewClientForm />
    </div>
    </main>
    <SiteFooter />
  </>;
}
