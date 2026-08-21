"use client";

import { trackGiveawayEvent } from "./giveaway-analytics";

export function GiveawayCta() {
  return (
    <a
      className="pp-cta min-h-[52px] justify-center"
      href="#entry-form"
      onClick={() =>
        trackGiveawayEvent("giveaway_cta_click", { campaign: "training-package-giveaway" })
      }
    >
      Enter to Win <span aria-hidden="true" className="pp-cta-arrow" />
    </a>
  );
}
