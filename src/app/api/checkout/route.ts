import { NextResponse } from "next/server";
import { getStripe } from "@/lib/stripe";
import { getLookupKey, VALID_TIER_IDS, VALID_DURATIONS, TIERS } from "@/lib/constants";
import type { TierId, Duration } from "@/types";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { tierId, duration } = body as {
      tierId: TierId;
      duration: Duration;
    };

    // Validate input
    if (
      !tierId ||
      !duration ||
      !VALID_TIER_IDS.includes(tierId) ||
      !VALID_DURATIONS.includes(duration)
    ) {
      return NextResponse.json(
        { error: "Invalid tier or duration" },
        { status: 400 }
      );
    }

    const lookupKey = getLookupKey(tierId, duration);

    // Resolve price ID from lookup key
    const prices = await getStripe().prices.list({
      lookup_keys: [lookupKey],
      limit: 1,
    });

    const price = prices.data[0];
    if (!price) {
      return NextResponse.json(
        { error: `No price found for lookup key: ${lookupKey}` },
        { status: 500 }
      );
    }

    const tier = TIERS.find((t) => t.id === tierId);
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

    const session = await getStripe().checkout.sessions.create({
      mode: "payment",
      line_items: [{ price: price.id, quantity: 1 }],
      success_url: `${siteUrl}/booking/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${siteUrl}/#booking`,
      metadata: {
        tierId,
        duration: String(duration),
        tierName: tier?.name || tierId,
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error("Checkout error:", err);
    return NextResponse.json(
      { error: "Failed to create checkout session" },
      { status: 500 }
    );
  }
}
