import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SitaRam ecoProducts | Thoughtful Everyday Packaging",
  description:
    "Paper cups, paper plates, dona, buffet plates and nasta plates from SitaRam ecoProducts. Call for the best price.",
  openGraph: {
    title: "SitaRam ecoProducts",
    description: "Eco-conscious disposable packaging for everyday gatherings.",
    images: ["/images/sitaram-logo-round.svg"]
  }
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
