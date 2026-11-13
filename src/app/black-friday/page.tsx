import type { Metadata } from "next";
import { MembershipPage } from "../membership-page";

export const metadata: Metadata = {
  title: "Black Friday | 50% Off Your Dog’s First Month",
  description: "More play starts here. Enroll November 27–30, 2026 for 50% off your dog's first month of daycare membership. Activate by January 15, 2027.",
  alternates: { canonical: "/black-friday/" },
  robots: { index: false, follow: true },
};

export default function Page() { return <MembershipPage promotion />; }
