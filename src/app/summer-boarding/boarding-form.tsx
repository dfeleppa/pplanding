"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import { X } from "lucide-react";

const FORM_ID = "EOJK996mQLMFoTTvYhRS";
const FORM_URL = `https://api.leadconnectorhq.com/widget/form/${FORM_ID}`;

export function BoardingFormModal({
  className = "",
  label = "Check Availability",
}: {
  className?: string;
  label?: string;
}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className={className}>
        {label}
        <span className="pp-cta-arrow" aria-hidden />
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-black/60 px-4 py-8"
          onClick={(e) => {
            if (e.target === e.currentTarget) setOpen(false);
          }}
          role="dialog"
          aria-modal="true"
          aria-label="Check Availability"
        >
          <div className="relative w-full max-w-2xl rounded-2xl bg-white shadow-2xl">
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="absolute top-4 right-4 z-10 text-[var(--pp-ink)]/60 transition hover:text-[var(--pp-ink)]"
            >
              <X className="h-5 w-5" />
            </button>

            <iframe
              src={FORM_URL}
              id={`modal-${FORM_ID}`}
              title="Boarding — Check Availability"
              data-layout="{'id':'INLINE'}"
              data-trigger-type="alwaysShow"
              data-activation-type="alwaysActivated"
              data-deactivation-type="neverDeactivate"
              data-form-name="Boarding"
              data-height="1261"
              data-layout-iframe-id={`modal-${FORM_ID}`}
              data-form-id={FORM_ID}
              style={{
                width: "100%",
                height: "1261px",
                border: "none",
                display: "block",
                background: "white",
                borderRadius: "16px",
              }}
            />
            <Script
              src="https://link.msgsndr.com/js/form_embed.js"
              strategy="afterInteractive"
            />
          </div>
        </div>
      )}
    </>
  );
}
