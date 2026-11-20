"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

type NavDropdownProps = {
  label: string;
  variant?: "header" | "hero";
  items: ReadonlyArray<{ label: string; href: string }>;
};

export function NavDropdown({ label, items, variant = "header" }: NavDropdownProps) {
  const inHero = variant === "hero";
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const panelId = useId();

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e: PointerEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && ref.current?.contains(document.activeElement)) {
        e.preventDefault();
        setOpen(false);
        trigger.current?.focus();
      }
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div ref={ref} className="relative" onBlur={(event) => {
      if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setOpen(false);
    }}>
      <button
        ref={trigger}
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls={panelId}
        className={inHero ? "flex min-h-[2.875rem] w-full items-center justify-center gap-2 rounded-full border border-white/70 bg-black/35 px-3 text-[15px] font-semibold text-white backdrop-blur-sm transition hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-white" : "nav-link inline-flex items-center gap-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/78 transition hover:text-white"}
      >
        {label}
        <ChevronDown
          className={`h-3 w-3 transition-transform ${open ? "rotate-180" : ""}`}
          aria-hidden
        />
      </button>
        <div
          id={panelId}
          hidden={!open}
          className={inHero ? "mt-2 rounded-2xl bg-[var(--pp-cream)] p-1 text-[var(--pp-night)] shadow-lg" : "absolute left-0 top-full z-50 mt-2 min-w-[220px] bg-transparent py-2"}
        >
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={inHero ? "flex min-h-11 items-center rounded-xl px-3 text-sm font-semibold hover:bg-[var(--pp-mint)] focus-visible:bg-[var(--pp-mint)]" : "block px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-white text-shadow-[0_1px_3px_rgba(0,0,0,0.9)] underline-offset-4 hover:underline focus-visible:underline"}
            >
              {item.label}
            </Link>
          ))}
        </div>
    </div>
  );
}
