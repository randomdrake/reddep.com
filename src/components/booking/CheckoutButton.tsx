"use client";

import { useState } from "react";
import type { TierId, Duration } from "@/types";

interface CheckoutButtonProps {
  tierId: TierId;
  duration: Duration;
  popular?: boolean;
}

export function CheckoutButton({ tierId, duration, popular }: CheckoutButtonProps) {
  const [loading, setLoading] = useState(false);

  async function handleCheckout() {
    setLoading(true);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ tierId, duration }),
      });

      const data = await res.json();

      if (data.url) {
        window.location.href = data.url;
      } else {
        setLoading(false);
      }
    } catch {
      setLoading(false);
    }
  }

  return (
    <button
      onClick={handleCheckout}
      disabled={loading}
      className={`w-full rounded-lg px-6 py-3 text-sm font-semibold transition-colors disabled:opacity-50 ${
        popular
          ? "bg-pride-blue text-white hover:bg-pride-blue-dark"
          : "border-2 border-pride-blue text-pride-blue hover:bg-pride-blue hover:text-white"
      }`}
    >
      {loading ? "Redirecting..." : "Book Now"}
    </button>
  );
}
