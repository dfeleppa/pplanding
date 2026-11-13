"use client";

import { useEffect, useState } from "react";
import styles from "./membership.module.css";

// Midnight Eastern Standard Time on the first day of the offer.
const START = Date.parse("2026-11-27T00:00:00-05:00");
const END = Date.parse("2026-12-01T00:00:00-05:00");

export function BlackFridayCountdown() {
  const [now, setNow] = useState<number | null>(null);
  useEffect(() => {
    const update = () => setNow(Date.now());
    update();
    const interval = window.setInterval(update, 1000);
    return () => window.clearInterval(interval);
  }, []);

  if (now !== null && now >= START) {
    return <div className={styles.countdown}><p role="status">{now < END ? "Black Friday is here!" : "This Black Friday offer has ended."}</p></div>;
  }

  const seconds = now === null ? null : Math.max(0, Math.ceil((START - now) / 1000));
  const values = seconds === null ? null : [Math.floor(seconds / 86400), Math.floor(seconds / 3600) % 24, Math.floor(seconds / 60) % 60, seconds % 60];
  return <div className={styles.countdown}>
    <p className={styles.countdownLabel}>The offer starts in</p>
    <div className={styles.countdownDigits} role="timer" aria-live="off" aria-label={values ? `${values[0]} days, ${values[1]} hours, ${values[2]} minutes, ${values[3]} seconds until Black Friday` : "Counting down to Black Friday"}>
      {["Days", "Hours", "Minutes", "Seconds"].map((label, index) => <div key={label}><strong>{values ? String(values[index]).padStart(2, "0") : "--"}</strong><span>{label}</span></div>)}
    </div>
    <p className={styles.countdownDate}>November 27 · 12:00 a.m. ET</p>
  </div>;
}
