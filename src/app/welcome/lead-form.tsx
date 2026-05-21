"use client";

import { useEffect, useState } from "react";

const FORM_URL = "https://api.leadconnectorhq.com/widget/form/BuIn8g5wkvpXVAcvbRO7";

export function LeadForm() {
  const [src, setSrc] = useState(FORM_URL);

  useEffect(() => {
    const params = window.location.search;
    if (params && params.length > 1) {
      setSrc(`${FORM_URL}${params}`);
    }
  }, []);

  return (
    <iframe
      title="Request availability — Planet Pooch"
      src={src}
      data-track="form-iframe"
      className="block w-full"
      style={{ height: 760, border: "none", background: "white" }}
      loading="lazy"
    />
  );
}
