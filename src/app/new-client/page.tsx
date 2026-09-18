import type { Metadata } from "next";
import Image from "next/image";
import { NewClientForm } from "./new-client-form";
import styles from "./new-client.module.css";

export const metadata: Metadata = {
  title: "New Client Form", description: "Tell us about you and your pup at Planet Pooch Pet Resort.",
  alternates: { canonical: "/new-client/" },
  robots: { index: false, follow: false, googleBot: { index: false, follow: false } },
};

export default function NewClientPage() {
  return <main id="main" className={styles.page}>
    <header className={styles.brand}>
      <Image src="/planet-pooch-logo.png" width={150} height={90} alt="Planet Pooch Pet Resort" className={styles.logo} priority />
      <p>1114 Hempstead Turnpike<br />Franklin Square, NY 11010</p>
    </header>
    <div className={styles.card}>
      <div className={styles.intro}><p className={styles.eyebrow}>LET’S GET TO KNOW YOUR PUP</p>
        <h1>Welcome to Planet Pooch.</h1>
        <p>We’re excited to learn more about you and your pup! Fill out this quick form and our team will get back to you as soon as possible.</p>
      </div>
      <NewClientForm />
    </div>
    <p className={styles.footer}>A little about you. A lot of love for your pup.</p>
  </main>;
}
