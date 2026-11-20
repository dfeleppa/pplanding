"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Menu, X, ChevronRight, ChevronDown, Phone, PawPrint } from "lucide-react";
import { desktopNavItems } from "../lib/nav";
import { SITE } from "../lib/site";
import { BookNowModal } from "./book-now-modal";

const menuRow = "flex min-h-12 w-full items-center justify-between gap-3 rounded-xl border border-white/30 px-4 py-2 text-left text-base font-semibold text-white hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";

export function MobileMenu({ ctaHref }: { ctaHref: string }) {
  const [open, setOpen] = useState(false);
  const panel = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.documentElement.dataset.mobileMenuOpen = "true";
    const element = panel.current;
    const opener = trigger.current;
    element?.showModal();
    element?.querySelector<HTMLButtonElement>("button")?.focus();
    const desktop = window.matchMedia("(min-width: 1024px)");
    const closeOnDesktop = () => { if (desktop.matches) setOpen(false); };
    desktop.addEventListener("change", closeOnDesktop);
    return () => {
      document.body.style.overflow = previousOverflow;
      delete document.documentElement.dataset.mobileMenuOpen;
      element?.close();
      desktop.removeEventListener("change", closeOnDesktop);
      if (opener?.getClientRects().length) opener.focus();
    };
  }, [open]);

  return (
    <>
      <button ref={trigger} type="button" onClick={() => setOpen(true)} aria-expanded={open} aria-label="Open menu" className="-mr-2 flex h-11 w-11 items-center justify-center text-white lg:hidden">
        <Menu className="h-6 w-6" />
      </button>
      {open && (
        <dialog ref={panel} onCancel={() => setOpen(false)} onClose={() => setOpen(false)} className="fixed inset-0 m-0 h-dvh max-h-none w-screen max-w-none overflow-y-auto border-0 bg-[var(--pp-night)] p-0 text-white lg:hidden" aria-label="Navigation menu">
          <div className="mx-auto flex min-h-full max-w-xl flex-col px-6 pb-[max(1.5rem,env(safe-area-inset-bottom))]">
            <div className="flex items-center justify-between border-b border-white/15 py-5">
              <Link href="/" onClick={() => setOpen(false)} className="flex items-center gap-3 text-lg font-semibold"><PawPrint className="h-6 w-6 text-[var(--pp-mint)]" aria-hidden />Planet Pooch</Link>
              <button type="button" onClick={() => setOpen(false)} aria-label="Close menu" className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 hover:bg-white/10"><X className="h-5 w-5" /></button>
            </div>
            <nav aria-label="Mobile navigation" className="grid gap-2 py-5">
              {desktopNavItems.map(item => (
                "href" in item ? (
                  <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className={menuRow}>
                    {item.label}
                    <ChevronRight className="size-4" aria-hidden />
                  </Link>
                ) : (
                  <details key={item.label} className="group">
                    <summary className={`${menuRow} cursor-pointer list-none [&::-webkit-details-marker]:hidden`}>
                      {item.label}
                      <ChevronDown className="size-4 group-open:rotate-180" aria-hidden />
                    </summary>
                    <div className="mt-2 grid gap-2 border-l border-white/20 pl-3">
                      {item.items.map(link => (
                        <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className={menuRow}>
                          {link.label}
                          <ChevronRight className="size-4" aria-hidden />
                        </Link>
                      ))}
                    </div>
                  </details>
                )
              ))}
            </nav>
            <div className="mt-auto grid gap-2 border-t border-white/15 pt-4">
              <BookNowModal ctaHref={ctaHref} className={menuRow} icon="paw" />
              <a href={SITE.phone.href} data-track="phone-click" className={menuRow}>
                {SITE.phone.display}
                <Phone className="size-4" aria-hidden />
              </a>
            </div>
          </div>
        </dialog>
      )}
    </>
  );
}
