import type { TierId, Duration, PriceTier } from "@/types";

export const TIERS: PriceTier[] = [
  {
    id: "advisory",
    name: "Advisory",
    description:
      "💡 AI readiness assessment, opportunity mapping, and strategic roadmap planning to accelerate your AI initiatives.",
    price30: 125,
    price60: 250,
    image: "/images/advisory.jpg",
    imageAlt: "Sunlit forest path — a clear way forward",
  },
  {
    id: "technical",
    name: "Technical Deep Dive",
    description:
      "⚙️ End-to-end architecture review, engineering velocity optimization, and production-grade AI pipeline design.",
    price30: 250,
    price60: 500,
    popular: true,
    image: "/images/technical.jpg",
    imageAlt: "Geometric architectural structure — systems and precision",
  },
  {
    id: "executive",
    name: "Executive Strategy",
    description:
      "🏛️ C-suite AI strategy, HIPAA and SOC 2 readiness, competitive positioning, and AI governance frameworks.",
    price30: 500,
    price60: 1000,
    image: "/images/executive.jpg",
    imageAlt: "Aerial view of mountain landscape — strategic perspective",
  },
];

/**
 * Builds the lookup key used in Stripe.
 * e.g. "advisory_30", "technical_60", "executive_30"
 */
export function getLookupKey(tierId: TierId, duration: Duration): string {
  return `${tierId}_${duration}_new`;
}

export const VALID_TIER_IDS: TierId[] = ["advisory", "technical", "executive"];
export const VALID_DURATIONS: Duration[] = [30, 60];
