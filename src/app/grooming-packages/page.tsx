import { groomingAddons, groomingPackages } from "../../lib/content/grooming-packages";
import { makeContentMetadata } from "../../lib/content/metadata";
import type { ContentPage } from "../../lib/content/types";
import { ContentPageTemplate } from "../content-page-template";

const page: ContentPage = {
  slug: "grooming-packages",
  title: "Grooming Packages",
  eyebrow: "Mobile Grooming",
  hero: "Spa-day upgrades at your door.",
  metaTitle: "Grooming Packages | Mobile | Planet Pooch",
  metaDescription: "Explore Basic, Plus (+$19), and Premium (+$29) grooming packages for Planet Pooch mobile grooming.",
  image: "/Grooming.png",
  sections: [groomingPackages, groomingAddons],
};

export const metadata = {
  ...makeContentMetadata(page),
  robots: { index: false, follow: true },
};

export default function GroomingPackagesPage() {
  return <ContentPageTemplate page={page} />;
}
