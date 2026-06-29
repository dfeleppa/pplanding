"use client";

import Script from "next/script";
import { useEffect, useRef, useState } from "react";

const FORM_ID = "BuIn8g5wkvpXVAcvbRO7";
const FORM_URL = `https://api.leadconnectorhq.com/widget/form/${FORM_ID}`;
const FORM_HEIGHT = 760;

export function LeadForm() {
  const shellRef = useRef<HTMLDivElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [formSrc, setFormSrc] = useState(FORM_URL);

  useEffect(() => {
    const loadForm = () => {
      const params = window.location.search;
      setFormSrc(params && params.length > 1 ? `${FORM_URL}${params}` : FORM_URL);
      setShouldLoad(true);
    };

    const shell = shellRef.current;
    if (!shell || !("IntersectionObserver" in window)) {
      window.setTimeout(loadForm, 0);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          loadForm();
          observer.disconnect();
        }
      },
      { rootMargin: "240px 0px" },
    );

    observer.observe(shell);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={shellRef} aria-busy={!shouldLoad}>
      {shouldLoad ? (
        <>
          <iframe
            src={formSrc}
            id={`inline-${FORM_ID}`}
            title="Request availability - Planet Pooch"
            data-track="form-iframe"
            style={{
              width: "100%",
              height: `${FORM_HEIGHT}px`,
              border: "none",
              display: "block",
              background: "white",
            }}
            scrolling="no"
            loading="lazy"
          />
          <Script
            src="https://link.msgsndr.com/js/form_embed.js"
            strategy="afterInteractive"
          />
        </>
      ) : (
        <div
          className="flex items-center justify-center bg-white px-6 text-center text-sm font-semibold text-[var(--pp-ink)]/55"
          style={{ minHeight: `${FORM_HEIGHT}px` }}
        >
          Loading availability form...
        </div>
      )}
    </div>
  );
}
