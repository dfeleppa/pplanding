import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, Check, Heart, Sparkles, Trees } from "lucide-react";
import { SiteHeader } from "../site-header";
import { SiteFooter } from "../site-footer";
import { BookNowModal } from "../book-now-modal";
import styles from "../membership.module.css";
import alternate from "./page.module.css";

export const metadata: Metadata = {
  title: "One Simple Daycare Membership | Planet Pooch",
  description: "Four full daycare days for $179.95 per month. Add as many extra days as you need for $43 each. Find your dog's happy routine at Planet Pooch.",
  robots: { index: false, follow: true },
};

export default function Page() {
  return <main className={`${styles.page} ${alternate.page}`}>
    <section className={styles.hero}>
      <Image src="/Daycare.png" alt="A dog enjoying daycare at Planet Pooch" fill sizes="100vw" preload className={styles.heroImage} />
      <div className={styles.heroShade} />
      <div className={styles.header}><SiteHeader /></div>
      <div className={styles.heroContent}>
        <p className={styles.eyebrow}>DAYCARE MEMBERSHIP · FRANKLIN SQUARE, NY</p>
        <h1 id="page-content" tabIndex={-1}>Their favorite day.<br /><em>Now a happy routine.</em></h1>
        <p className={styles.heroCopy}>Four days of friends, play and care every month. More time together whenever they need it. One simple membership.</p>
        <p className={alternate.heroPrice}>$179.95 <span>/ month</span></p>
        <div className={styles.actions}><a href="#membership" className={styles.button}>Meet their membership <ArrowRight size={18} /></a></div>
        <p className={styles.heroNote}>4 full daycare days included · Extra days $43 each · Per dog · Renews monthly</p>
      </div>
    </section>

    <div className={styles.contentTransition}>
      <section id="membership" className={styles.section}>
        <div className={styles.centerHeading}><p className={styles.eyebrow}>ONE MEMBERSHIP. MORE HAPPY DAYS.</p><h2>A little routine.<br /><em>A whole lot of tail wags.</em></h2><p>Our best fit for families making daycare part of everyday life.</p></div>
        <div className={alternate.membershipGrid}>
          <article className={`${styles.card} ${styles.featured} ${alternate.memberCard}`}>
            <h3>Daycare Membership</h3>
            <div className={styles.price}><span>$179.95</span><small>/month</small></div>
            <p className={styles.renewal}>Per dog · automatically renews monthly</p>
            <div className={styles.visitAllowance}><Check size={20} /><strong>4 full daycare days per month</strong></div>
            <div className={styles.rate}><strong>$43<small> / extra day</small></strong><span>Add as many days as you need. No extra pack.</span></div>
            <a className={styles.cardButton} href="mailto:planetpoochpetservices@gmail.com?subject=Daycare%20membership%20inquiry">Get Started <ArrowRight size={18} /></a>
            <p className={styles.cardFoot}>Month-to-month · No long-term commitment</p>
          </article>
          <div id="compare" className={alternate.comparison}>
            <p className={styles.eyebrow}>MEMBERSHIP VS. DAYCARE PACKS</p>
            <h3>Less upfront. <em>More flexibility.</em></h3>
            <p className={alternate.compareIntro}>Start with four days, then add exactly what you need for $43 a day—without buying another pack.</p>
            <div className={alternate.tableWrap} role="region" aria-label="Compare membership and daycare packs" tabIndex={0}>
              <table><caption>Daycare options at a glance</caption><thead><tr><th scope="col">Option</th><th scope="col">Payment</th><th scope="col">Included days</th><th scope="col">Use within</th></tr></thead>
              <tbody>
                <tr className={alternate.memberRow}><th scope="row">Membership<span>Our pick for a regular routine</span></th><td><strong>$179.95</strong><span>per month</span></td><td>4</td><td>Monthly billing cycle</td></tr>
                <tr><th scope="row">5-day pack</th><td>$226.95<span>upfront</span></td><td>5</td><td>30 days</td></tr>
                <tr><th scope="row">10-day pack</th><td>$433.50<span>upfront</span></td><td>10</td><td>60 days</td></tr>
                <tr><th scope="row">20-day pack</th><td>$846.60<span>upfront</span></td><td>20</td><td>90 days</td></tr>
              </tbody></table>
            </div>
            <div className={alternate.advantages}><div><Check size={20} /><p><strong>$47 less to get started</strong><span>Compared with the smallest pack’s upfront payment.</span></p></div><div><Check size={20} /><p><strong>Extra days, without another pack</strong><span>Members add any number of days at $43 each. After a pack runs out, buy another pack or pay $51 per drop-in.</span></p></div></div>
            <p className={alternate.finePrint}>Initial payments include different numbers of days; this is not an equal-visit savings comparison. Packs may have a lower per-visit rate when fully used. Membership renews monthly; extra days are subject to availability.</p>
          </div>
        </div>
        <p className={styles.pricingNote}>Four days per monthly billing cycle, not one guaranteed day each week. Unused included days expire at the end of the cycle; no ordinary rollover. Reservations and evaluation approval required.</p>
      </section>
    </div>

    <div className={styles.darkBand}><section className={`${styles.section} ${styles.story}`}>
      <div className={styles.storyPhoto}><Image src="/gallery/daycare-playroom.webp" alt="Dogs playing together in the Planet Pooch daycare playroom" fill sizes="(min-width: 900px) 50vw, 100vw" className={styles.cover} /></div>
      <div><p className={styles.eyebrow}>CARE THROUGHOUT THEIR DAY</p><h2>A day at <em>Planet Pooch.</em></h2><ul className={styles.storyList}>
        <li><Trees /><div><h3>Indoor & outdoor play</h3><p>Room to run, explore and enjoy their day in our indoor playrooms and secure outdoor yard.</p></div></li>
        <li><Heart /><div><h3>Friends who feel familiar</h3><p>Supervised groups matched by size, temperament and play style.</p></div></li>
        <li><Sparkles /><div><h3>Time to recharge</h3><p>Daily rest periods between all those happy adventures.</p></div></li>
      </ul></div>
    </section></div>

    <div className={styles.stepsBand}><section className={`${styles.section} ${styles.stepsSection}`}><div className={styles.centerHeading}><p className={styles.eyebrow}>GETTING STARTED</p><h2>Their next favorite day <em>starts here.</em></h2></div><div className={styles.steps}>{[
      ["01", "Meet the pack", "New dogs begin with a complimentary evaluation. Dogs who pass enjoy their first daycare day at no charge."],
      ["02", "Start their membership", "Choose an activation date with our team. Your $179.95 membership renews monthly with four full daycare days."],
      ["03", "Make time for play", "Reserve your four days. Add as many extra days as you need for $43 each, subject to availability."],
    ].map(([n, title, copy]) => <article key={n}><span>{n}</span><h3>{title}</h3><p>{copy}</p></article>)}</div><BookNowModal ctaHref="/new-client/" className={styles.button} label="Book a free evaluation" /></section></div>

    <div className={styles.darkBand}><section className={`${styles.section} ${styles.faq}`}><div><p className={styles.eyebrow}>GOOD TO KNOW</p><h2>Simple membership.<br /><em>Clear details.</em></h2></div><div>{[
      ["What does $179.95 include?", "Four full daycare days for one named dog in each monthly billing cycle. These are daycare visits, not training classes. Additional daycare days are $43 each while your membership is active, with no limit on how many you may purchase. Reservations and available operating days still apply."],
      ["What if my usual weekday comes up five times?", "Membership includes four days per billing cycle, rather than one day every week. Add a fifth day for $43, bringing that cycle’s total to $222.95."],
      ["Do unused days roll over?", "Unused included days expire at the end of the monthly billing cycle; no ordinary rollover applies. Pick dates that fit your schedule and reserve ahead."],
      ["Can I keep using my current pack?", "Yes. Existing packs retain their original terms and expiration dates. Our team can help you choose a membership start date after you use your pack."],
      ["Can I cancel or pause?", "Membership is month-to-month. Contact our team before your next scheduled charge to stop future renewals. Pauses have a 14-day minimum, with no cap on the number or total duration; billing and membership benefits stop while paused. Contact us to confirm pause and restart arrangements, or discuss a medical exception."],
      ["How do reservations work?", "Reservations are required and subject to availability. Each dog must pass evaluation and meet our health, vaccination and behavior requirements. Membership does not guarantee a spot on a particular date."],
    ].map(([q, a]) => <details key={q}><summary>{q}<span aria-hidden="true">+</span></summary><p>{a}</p></details>)}</div></section></div>
    <div className={styles.termsBand}><section className={`${styles.section} ${alternate.closing}`}><p className={styles.eyebrow}>MORE THAN A DAY OF DAYCARE</p><h2>Give them a routine <em>they’ll love.</em></h2><p>$179.95/month · Four full days · Extra days $43 each</p><a className={styles.button} href="mailto:planetpoochpetservices@gmail.com?subject=Daycare%20membership%20inquiry">Get Started <ArrowRight size={18} /></a><p className={styles.pricingNote}>Per dog. Automatic monthly renewal. Applicable tax, if any, is additional. Enrollment requires agreement to the full membership and automatic renewal terms before payment. Contact our team for enrollment, cancellation or refund details.</p></section></div>
    <SiteFooter />
    <div className={styles.mobileBar}><span>$179.95/month<small>4 daycare days + $43 extra days</small></span><a href="#membership">View membership <ArrowRight size={16} /></a></div>
  </main>;
}
