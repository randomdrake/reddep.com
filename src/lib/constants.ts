import type { TierId, Duration, PriceTier } from "@/types";

export const TIERS: PriceTier[] = [
  {
    id: "advisory",
    name: "Advisory",
    description:
      "💡 General AI guidance, strategy discussion, and initial assessment.",
    price30: 250,
    price60: 500,
    image: "/images/advisory.jpg",
    imageAlt: "Sunlit forest path — a clear way forward",
  },
  {
    id: "technical",
    name: "Technical Deep Dive",
    description:
      "⚙️ Architecture review, prompt engineering, and code-level guidance.",
    price30: 500,
    price60: 1000,
    popular: true,
    image: "/images/technical.jpg",
    imageAlt: "Geometric architectural structure — systems and precision",
  },
  {
    id: "executive",
    name: "Executive Strategy",
    description:
      "🏛️ C-suite AI strategy, governance, competitive positioning, and prosthetic-vs-therapeutic framework.",
    price30: 1000,
    price60: 2000,
    image: "/images/executive.jpg",
    imageAlt: "Aerial view of mountain landscape — strategic perspective",
  },
];

/**
 * Builds the lookup key used in Stripe.
 * e.g. "advisory_30", "technical_60", "executive_30"
 */
export function getLookupKey(tierId: TierId, duration: Duration): string {
  return `${tierId}_${duration}`;
}

export const VALID_TIER_IDS: TierId[] = ["advisory", "technical", "executive"];
export const VALID_DURATIONS: Duration[] = [30, 60];
