import type { Metadata } from "next";
import { LeaderProfile } from "@/components/about/LeaderProfile";
import { CapabilityAreas } from "@/components/about/CapabilityAreas";
import { NdaTrustBanner } from "@/components/about/NdaTrustBanner";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://reddep.com";

export const metadata: Metadata = {
  title: "About — RedDep | David Drake, AI Researcher & Consultant",
  description:
    "Meet David Drake — AI researcher, former YC CTO, and published author leading RedDep's AI research, architecture advisory, and responsible AI strategy consulting.",
  alternates: {
    canonical: `${siteUrl}/about`,
  },
  openGraph: {
    title: "About — RedDep | David Drake, AI Researcher & Consultant",
    description:
      "Meet David Drake — AI researcher, former YC CTO, and published author. Deep expertise in narrative compression, AI architecture, and responsible AI strategy.",
    url: `${siteUrl}/about`,
    siteName: "RedDep",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About — RedDep | David Drake",
    description:
      "AI researcher, former YC CTO, and published author leading RedDep's AI research and consulting practice.",
  },
};

export default function AboutPage() {
  return (
    <main id="main-content">
      <LeaderProfile />
      <CapabilityAreas />
      <NdaTrustBanner />
    </main>
  );
}
