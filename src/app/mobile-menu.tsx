"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { headerNavItems } from "../lib/nav";

type MobileMenuProps = {
  ctaHref: string;
};

export function MobileMenu({ ctaHref }: MobileMenuProps) {
  const [open, setOpen] = useState(false);
  const [expandedDropdown, setExpandedDropdown] = useState<string | null>(null);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-label={open ? "Close menu" : "Open menu"}
        className="relative z-50 flex items-center justify-center text-white lg:hidden"
      >
        {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {open && (
        <div
          className="fixed inset-0 z-40 bg-[var(--pp-night)] lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
        >
          <div className="flex h-full flex-col overflow-y-auto px-6 pt-24 pb-8">
            <nav aria-label="Mobile navigation" className="flex flex-col gap-1">
              {headerNavItems.map((item) =>
                "items" in item ? (
                  <div key={item.label}>
                    <button
                      type="button"
                      onClick={() =>
                        setExpandedDropdown((prev) =>
                          prev === item.label ? null : item.label
                        )
                      }
                      aria-expanded={expandedDropdown === item.label}
                      className="flex w-full items-center justify-between py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white/78 transition hover:text-white"
                    >
                      {item.label}
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${expandedDropdown === item.label ? "rotate-180" : ""}`}
                        aria-hidden
                      />
                    </button>
                    {expandedDropdown === item.label && (
                      <div className="flex flex-col gap-1 border-l border-white/15 pl-4">
                        {item.items.map((sub) => (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            onClick={() => setOpen(false)}
                            className="py-2 text-sm font-semibold uppercase tracking-[0.18em] text-white/60 transition hover:text-white"
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white/78 transition hover:text-white"
                  >
                    {item.label}
                  </Link>
                )
              )}
            </nav>

            <div className="mt-auto flex flex-col gap-3 pt-8">
              <Link
                href="/contact/"
                onClick={() => setOpen(false)}
                className="pp-cta-ghost pp-cta-sm text-center"
              >
                Contact
              </Link>
              <Link
                href={ctaHref}
                onClick={() => setOpen(false)}
                className="pp-cta pp-cta-sm text-center"
              >
                Book Now
                <span className="pp-cta-arrow" aria-hidden />
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
