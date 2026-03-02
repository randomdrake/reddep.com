"use client";

import { useState } from "react";
import { CheckoutButton } from "./CheckoutButton";
import type { PriceTier, Duration } from "@/types";

interface DurationToggleProps {
  tier: PriceTier;
}

export function DurationToggle({ tier }: DurationToggleProps) {
  const [duration, setDuration] = useState<Duration>(60);
  const price = duration === 30 ? tier.price30 : tier.price60;

  return (
    <div>
      {/* Toggle */}
      <div className="flex rounded-lg bg-bg p-1" role="radiogroup" aria-label="Session duration">
        <button
          role="radio"
          aria-checked={duration === 30}
          onClick={() => setDuration(30)}
          className={`flex-1 rounded-md px-3 py-2 text-sm font-semibold transition-colors ${
            duration === 30
              ? "bg-white text-text shadow-sm"
              : "text-text-muted hover:text-text"
          }`}
        >
          30 min
        </button>
        <button
          role="radio"
          aria-checked={duration === 60}
          onClick={() => setDuration(60)}
          className={`flex-1 rounded-md px-3 py-2 text-sm font-semibold transition-colors ${
            duration === 60
              ? "bg-white text-text shadow-sm"
              : "text-text-muted hover:text-text"
          }`}
        >
          1 hour
        </button>
      </div>

      {/* Price */}
      <div className="mt-4">
        <span className="text-3xl font-bold text-text">
          ${price.toLocaleString()}
        </span>
        <span className="text-text-muted">
          /{duration === 30 ? "30 min" : "hr"}
        </span>
      </div>

      {/* Checkout */}
      <div className="mt-4">
        <CheckoutButton tierId={tier.id} duration={duration} popular={tier.popular} />
      </div>
    </div>
  );
}
