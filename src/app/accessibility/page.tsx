import type { Metadata } from "next";
import { AccessibilityContent } from "@/components/legal/AccessibilityContent";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://reddep.com";

export const metadata: Metadata = {
  title: "Accessibility — RedDep",
  description:
    "RedDep accessibility statement. Our commitment to WCAG 2.1 Level AA conformance and how to report accessibility issues.",
  alternates: {
    canonical: `${siteUrl}/accessibility`,
  },
  openGraph: {
    title: "Accessibility — RedDep",
    description:
      "RedDep accessibility statement. WCAG 2.1 Level AA conformance commitment.",
    url: `${siteUrl}/accessibility`,
    siteName: "RedDep",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Accessibility — RedDep",
    description:
      "RedDep accessibility statement. WCAG 2.1 Level AA conformance commitment.",
  },
};

export default function AccessibilityPage() {
  return (
    <main id="main-content">
      <AccessibilityContent />
    </main>
  );
}
