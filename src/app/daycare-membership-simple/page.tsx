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

const packs = [
  { name: "5-day pack", price: "$226.95", rate: "$45.39", expiry: "30 days", difference: "$47.00" },
  { name: "10-day pack", price: "$433.50", rate: "$43.35", expiry: "60 days", difference: "$253.55" },
  { name: "20-day pack", price: "$846.60", rate: "$42.33", expiry: "90 days", difference: "$666.65" },
];

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
            <p className={styles.cardTop}>THEIR MONTHLY DOSE OF HAPPY</p><h3>Daycare Membership</h3>
            <div className={styles.price}><span>$179.95</span><small>/month</small></div>
            <p className={styles.renewal}>Per dog · automatically renews monthly</p>
            <div className={styles.visitAllowance}><Check size={20} /><strong>4 full daycare days every billing cycle</strong></div>
            <div className={styles.rate}><strong>$43<small> / additional day</small></strong><span>Buy as many extra days as you need while your membership is active. Reservations subject to availability.</span></div>
            <ul>{["Four days to build a familiar, happy routine", "Extra days one at a time, at your member rate", "Automatic renewal—no new pack to purchase", "Month-to-month, with no long-term commitment"].map(item => <li key={item}><Check size={17} /><span>{item}</span></li>)}</ul>
            <a className={styles.cardButton} href="mailto:planetpoochpetservices@gmail.com?subject=Daycare%20membership%20inquiry">Get Started <ArrowRight size={18} /></a>
            <p className={styles.cardFoot}>Save $24.05 vs. four $51 drop-in days when all four are used.</p>
          </article>
          <div className={alternate.reasons}>
            <p className={styles.eyebrow}>WHY WE LOVE MEMBERSHIP</p><h2>All the play.<br /><em>Less to plan.</em></h2>
            <article><span>01</span><div><h3>Start small. Make it a habit.</h3><p>Start with $179.95 for the month, instead of paying $226.95–$846.60 upfront for a pack. Four included days give your dog a routine to look forward to.</p></div></article>
            <article><span>02</span><div><h3>An extra day? Easy.</h3><p>A busy week, an extra errand, or just more play: add a day for $43. That’s $8 less than a $51 drop-in, with no additional pack to buy.</p></div></article>
            <article><span>03</span><div><h3>Keep the good days coming.</h3><p>Your four included days refresh each billing cycle. Reserve their visits and enjoy a familiar rhythm, without purchasing a new package each time.</p></div></article>
          </div>
        </div>
        <p className={styles.pricingNote}>Four days per monthly billing cycle, not one guaranteed day each week. Unused included days expire at the end of the cycle; no ordinary rollover. Reservations and evaluation approval required.</p>
      </section>
    </div>

    <section className={`${styles.section} ${alternate.comparison}`} id="compare">
      <div className={styles.centerHeading}><p className={styles.eyebrow}>MEMBERSHIP VS. DAYCARE PACKS</p><h2>A smarter way to <em>stay in the routine.</em></h2><p>Lower upfront cost. Discounted extra days. A fresh allowance every month.</p></div>
      <div className={alternate.tableWrap} tabIndex={0} role="region" aria-label="Daycare membership and package comparison; scroll horizontally on small screens">
        <table><caption>Current daycare packs compared with the proposed monthly membership</caption><thead><tr><th scope="col">The details</th><th scope="col" className={alternate.highlight}>Membership<span>Our pick for a regular routine</span></th>{packs.map(p => <th scope="col" key={p.name}>{p.name}</th>)}</tr></thead>
          <tbody>
            <tr><th scope="row">Payment</th><td className={alternate.highlight}><strong>$179.95/month</strong></td>{packs.map(p => <td key={p.name}>{p.price} upfront</td>)}</tr>
            <tr><th scope="row">Included days</th><td className={alternate.highlight}>4 each billing cycle</td><td>5</td><td>10</td><td>20</td></tr>
            <tr><th scope="row">Use-by window</th><td className={alternate.highlight}>Each monthly billing cycle</td>{packs.map(p => <td key={p.name}>{p.expiry}</td>)}</tr>
            <tr><th scope="row">Per included day*</th><td className={alternate.highlight}>$44.99</td>{packs.map(p => <td key={p.name}>{p.rate}</td>)}</tr>
            <tr><th scope="row">When you need more</th><td className={alternate.highlight}><strong>$43 per extra day</strong><span>No additional pack needed</span></td><td colSpan={3}>Buy another pack or pay $51 per drop-in day</td></tr>
            <tr><th scope="row">Less to pay at signup†</th><td className={alternate.highlight}>Start with $179.95</td>{packs.map(p => <td key={p.name}>{p.difference} less with membership</td>)}</tr>
          </tbody>
        </table>
      </div>
      <p className={alternate.finePrint}>*Per-day rates assume every included visit is used before expiration; rounded to the nearest cent. †Compares the initial payment only, not equal numbers of visits. Membership renews monthly; packs are prepaid purchases with the windows shown above.</p>
      <div className={alternate.valueCallout}><div><p className={styles.eyebrow}>FIVE DAYS THIS MONTH?</p><h3>$222.95 with membership.<br /><em>$226.95 with a 5-day pack.</em></h3></div><p>Use your four included days and add one for $43. You save <strong>$4</strong> over the 5-pack—and your next month’s routine is already set up.</p></div>
      <p className={alternate.finePrint}>The 20-day pack has the lowest fully used per-day rate at $42.33. Membership offers a smaller initial payment and the flexibility to add individual $43 days. A 10-day pack is $433.50 versus $437.95 for 10 membership visits in one billing cycle; a 20-day pack is $846.60 versus $867.95 for 20 membership visits in one billing cycle. Choose membership for a manageable monthly routine; packs remain available if bulk visits suit you better.</p>
    </section>

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
