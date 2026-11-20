"use client";

import { useEffect } from "react";

// Fragments on old homepage links never reach the server redirect rules.
export function LegacyResortAnchor() {
  useEffect(() => {
    function forwardResortSection() {
      const { hash, search } = window.location;
      if (hash === "#facility-tour" || hash === "#gallery") {
        window.location.replace(`https://planetpoochresorts.com/resort/${search}${hash}`);
      }
    }
    forwardResortSection();
    window.addEventListener("hashchange", forwardResortSection);
    return () => window.removeEventListener("hashchange", forwardResortSection);
  }, []);
  return null;
}
