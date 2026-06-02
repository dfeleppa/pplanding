import type { MetadataRoute } from "next";
import { SITE } from "../lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE.legalName,
    short_name: SITE.name,
    description: SITE.defaults.homeDescription,
    start_url: "/",
    display: "standalone",
    background_color: "#f7f1e7",
    theme_color: "#324953",
    icons: [
      { src: "/icon.png", sizes: "512x512", type: "image/png" },
      { src: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  };
}
