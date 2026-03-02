import type { Metadata } from "next";
import { PrivacyContent } from "@/components/legal/PrivacyContent";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://reddep.com";

export const metadata: Metadata = {
  title: "Privacy Policy — RedDep",
  description:
    "RedDep privacy policy. No third-party tracking, no analytics pixels. Learn how we handle your data.",
  alternates: {
    canonical: `${siteUrl}/privacy`,
  },
  openGraph: {
    title: "Privacy Policy — RedDep",
    description:
      "RedDep privacy policy. No third-party tracking, no analytics pixels.",
    url: `${siteUrl}/privacy`,
    siteName: "RedDep",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Privacy Policy — RedDep",
    description:
      "RedDep privacy policy. No third-party tracking, no analytics pixels.",
  },
};

export default function PrivacyPage() {
  return (
    <main id="main-content">
      <PrivacyContent />
    </main>
  );
}
