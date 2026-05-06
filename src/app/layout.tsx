import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Planet Pooch Pet Resort",
  description:
    "Luxury daycare, boarding, training, and grooming for busy professionals who want beautiful care for their dogs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
