import type { Metadata } from "next";
import { TermsContent } from "@/components/legal/TermsContent";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://reddep.com";

export const metadata: Metadata = {
  title: "Terms of Service — RedDep",
  description:
    "RedDep terms of service. Consulting session terms, payment, intellectual property, and confidentiality.",
  alternates: {
    canonical: `${siteUrl}/terms`,
  },
  openGraph: {
    title: "Terms of Service — RedDep",
    description:
      "RedDep terms of service. Consulting session terms, payment, and confidentiality.",
    url: `${siteUrl}/terms`,
    siteName: "RedDep",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Terms of Service — RedDep",
    description:
      "RedDep terms of service. Consulting session terms, payment, and confidentiality.",
  },
};

export default function TermsPage() {
  return (
    <main id="main-content">
      <TermsContent />
    </main>
  );
}
