import { getStripe } from "@/lib/stripe";
import { CalEmbed } from "@/components/booking/CalEmbed";

export const dynamic = "force-dynamic";

interface SuccessPageProps {
  searchParams: Promise<{ session_id?: string }>;
}

export default async function BookingSuccess({ searchParams }: SuccessPageProps) {
  const params = await searchParams;
  const sessionId = params.session_id;

  let customerName = "";
  let customerEmail = "";
  let tierName = "";
  let duration = "";

  if (sessionId) {
    try {
      const session = await getStripe().checkout.sessions.retrieve(sessionId);
      customerName = session.customer_details?.name || "";
      customerEmail = session.customer_details?.email || "";
      tierName = session.metadata?.tierName || "";
      duration = session.metadata?.duration || "";
    } catch {
      // Session retrieval failed — continue with empty data
    }
  }

  // Build the Cal.com link based on purchased duration
  const calUsername = process.env.NEXT_PUBLIC_CAL_USERNAME || "";
  const calSlug =
    duration === "30"
      ? process.env.NEXT_PUBLIC_CAL_SLUG_30
      : process.env.NEXT_PUBLIC_CAL_SLUG_60;
  const calLink = calUsername && calSlug ? `${calUsername}/${calSlug}` : "";

  return (
    <main id="main-content" className="px-6 py-16">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <h1 className="font-heading text-3xl font-bold text-text md:text-4xl">
            Payment Confirmed
          </h1>
          <p className="mt-4 text-lg text-text-light">
            Thank you{customerName ? `, ${customerName}` : ""}! Your{" "}
            {tierName && (
              <strong>{tierName}</strong>
            )}{" "}
            {duration && `(${duration} min) `}
            session is reserved. Pick a time that works for you below.
          </p>
        </div>

        {calLink ? (
          <div className="mt-10">
            <CalEmbed
              calLink={calLink}
              name={customerName}
              email={customerEmail}
            />
          </div>
        ) : (
          <div className="mt-10 rounded-xl bg-surface p-8 text-center shadow-sm">
            <p className="text-text-light">
              Scheduling is being set up. We&apos;ll reach out to{" "}
              <strong>{customerEmail || "you"}</strong> shortly to confirm your
              session time.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
