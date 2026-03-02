import Image from "next/image";
import { DurationToggle } from "./DurationToggle";
import type { PriceTier } from "@/types";

interface PricingCardProps {
  tier: PriceTier;
}

export function PricingCard({ tier }: PricingCardProps) {
  return (
    <div
      className={`group relative flex flex-col overflow-hidden rounded-2xl bg-surface transition-all duration-200 hover:-translate-y-1 ${
        tier.popular
          ? "shadow-lg ring-2 ring-pride-blue/20 hover:shadow-xl"
          : "shadow-sm hover:shadow-lg"
      }`}
    >
      {/* Accent border on popular tier — per Refactoring UI "Add color with accent borders" */}
      {tier.popular && (
        <div
          aria-hidden="true"
          className="h-1 w-full bg-gradient-to-r from-pride-blue to-pride-purple"
        />
      )}
      {tier.popular && (
        <span className="absolute top-5 right-4 z-10 rounded-full bg-pride-blue px-4 py-1 text-xs font-semibold text-white shadow-md">
          Most Popular
        </span>
      )}

      {/* Tier image */}
      <div className="relative h-40 w-full overflow-hidden">
        <Image
          src={tier.image}
          alt={tier.imageAlt}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 900px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white/80 to-transparent" />
      </div>

      <div className="flex grow flex-col p-8 pt-4">
        <h3 className="font-heading text-xl font-bold text-text">
          {tier.name}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-text-muted">
          {tier.description}
        </p>
        <div className="mt-6 grow">
          <DurationToggle tier={tier} />
        </div>
        <p className="mt-4 text-xs text-text-muted">
          Remote &middot; Coffee &middot; Lunch
        </p>
      </div>
    </div>
  );
}
