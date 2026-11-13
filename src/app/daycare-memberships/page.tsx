import type { Metadata } from "next";
import { MembershipPage } from "../membership-page";

export const metadata: Metadata = {
  title: "Daycare Memberships | More Play, Every Month",
  description: "Find your dog's happy routine at Planet Pooch in Franklin Square. Four visits, eight visits or unlimited daycare, with member perks every month.",
  alternates: { canonical: "/daycare-memberships/" },
  robots: { index: false, follow: true },
};

export default function Page() { return <MembershipPage />; }
