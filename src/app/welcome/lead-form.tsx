"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

const FORM_ID = "BuIn8g5wkvpXVAcvbRO7";
const FORM_URL = `https://api.leadconnectorhq.com/widget/form/${FORM_ID}`;

export function LeadForm() {
  const [src, setSrc] = useState(FORM_URL);

  useEffect(() => {
    const params = window.location.search;
    if (params && params.length > 1) {
      setSrc(`${FORM_URL}${params}`);
    }
  }, []);

  return (
    <>
      <iframe
        src={src}
        id={`inline-${FORM_ID}`}
        title="Request availability — Planet Pooch"
        data-track="form-iframe"
        style={{
          width: "100%",
          height: "760px",
          border: "none",
          display: "block",
          background: "white",
        }}
        scrolling="no"
      />
      <Script
        src="https://link.msgsndr.com/js/form_embed.js"
        strategy="afterInteractive"
      />
    </>
  );
}
