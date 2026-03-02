import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { PricingCard } from "@/components/booking/PricingCard";
import { TIERS } from "@/lib/constants";

export function Booking() {
  return (
    <SectionWrapper id="booking" labelId="booking-heading">
      <h2
        id="booking-heading"
        className="text-center font-heading text-3xl font-bold text-text md:text-4xl"
      >
        Book a Session
      </h2>
      <p className="mx-auto mt-3 max-w-2xl text-center text-text-muted">
        All sessions available as 30-minute or 1-hour formats. Remote, coffee,
        or lunch.
      </p>

      <div className="mt-12 grid gap-8 md:grid-cols-3">
        {TIERS.map((tier) => (
          <PricingCard key={tier.id} tier={tier} />
        ))}
      </div>
    </SectionWrapper>
  );
}
