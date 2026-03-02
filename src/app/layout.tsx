import type { Metadata } from "next";
import { Playfair_Display, Source_Sans_3 } from "next/font/google";
import { SkipNav } from "@/components/layout/SkipNav";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PrideGradientBar } from "@/components/brand/PrideGradientBar";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["700", "900"],
  variable: "--font-playfair-display",
  display: "swap",
});

const sourceSans3 = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-source-sans-3",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://reddep.com";

export const metadata: Metadata = {
  title: "RedDep — Reducing Dependencies | AI Research & Consulting",
  description:
    "Independent AI research and responsible consulting by David Drake — former YC CTO, published author. Architecture advisory, prompt engineering, and responsible AI strategy.",
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "RedDep — Reducing Dependencies | AI Research & Consulting",
    description:
      "Independent AI research and responsible consulting by David Drake. Removing obstacles so people can move under their own power.",
    url: siteUrl,
    siteName: "RedDep",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "RedDep — Reducing Dependencies",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RedDep — AI Research & Consulting",
    description:
      "Independent AI research and responsible consulting by David Drake — former YC CTO, published author.",
    images: ["/og-image.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "RedDep",
  url: siteUrl,
  description:
    "Independent AI research and responsible consulting. Removing obstacles so people can move under their own power.",
  founder: {
    "@type": "Person",
    name: "David Drake",
    jobTitle: "AI Researcher & Consultant",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Portland",
    addressRegion: "OR",
    addressCountry: "US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfairDisplay.variable} ${sourceSans3.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SkipNav />
        <Header />
        <PrideGradientBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
