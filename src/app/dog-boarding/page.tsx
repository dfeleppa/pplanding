import type { Metadata } from "next";
import { servicePages } from "../service-page-data";
import { ServicePageTemplate } from "../service-page-template";

const service = servicePages["dog-boarding"];

export const metadata: Metadata = {
  title: { absolute: service.metaTitle },
  description: service.metaDescription,
  alternates: { canonical: `/${service.slug}` },
  openGraph: {
    title: service.metaTitle,
    description: service.metaDescription,
    url: `/${service.slug}`,
    type: "website",
  },
};

export default function DogBoardingPage() {
  return <ServicePageTemplate service={service} />;
}
