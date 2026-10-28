import { groomingPackages } from "../../lib/content/grooming-packages";
import { makeContentMetadata } from "../../lib/content/metadata";
import type { ContentPage } from "../../lib/content/types";
import { ContentPageTemplate } from "../content-page-template";

const page: ContentPage = {
  slug: "grooming-packages",
  title: "Grooming Packages",
  eyebrow: "In-House & Mobile Grooming",
  hero: "The same spa-day upgrades, at our resort or at your door.",
  metaTitle: "Grooming Packages | In-House & Mobile | Planet Pooch",
  metaDescription: "Explore Basic, Plus (+$19), and Premium (+$29) grooming packages for Planet Pooch in-house and mobile grooming.",
  image: "/Grooming.png",
  sections: [groomingPackages],
};

export const metadata = {
  ...makeContentMetadata(page),
  robots: { index: false, follow: true },
};

export default function GroomingPackagesPage() {
  return <ContentPageTemplate page={page} />;
}
