import type { Metadata } from "next";
import { servicePages } from "../service-page-data";
import { ServicePageTemplate } from "../service-page-template";

const service = servicePages.boarding;

export const metadata: Metadata = {
  title: `${service.title} | Planet Pooch Pet Resort`,
  description: service.intro,
};

export default function BoardingPage() {
  return <ServicePageTemplate service={service} />;
}
