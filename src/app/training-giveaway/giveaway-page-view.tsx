"use client";

import { useEffect } from "react";
import { trackGiveawayEvent } from "./giveaway-analytics";

export function GiveawayPageView() {
  useEffect(() => {
    trackGiveawayEvent("giveaway_page_view", { campaign: "training-package-giveaway" });
  }, []);
  return null;
}
