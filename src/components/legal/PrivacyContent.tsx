import { SectionWrapper } from "@/components/ui/SectionWrapper";

export function PrivacyContent() {
  return (
    <SectionWrapper id="privacy" labelId="privacy-heading" bg="white">
      <div className="mx-auto max-w-3xl">
        <h1
          id="privacy-heading"
          className="font-heading text-3xl font-bold text-text md:text-4xl"
        >
          Privacy Policy
        </h1>
        <p className="mt-2 text-sm text-text-muted">
          Last updated: March 1, 2026
        </p>

        <div className="mt-10 space-y-8 text-lg leading-relaxed text-text-light">
          <section>
            <h2 className="font-heading text-xl font-bold text-text">
              Our Approach
            </h2>
            <p className="mt-3">
              RedDep does not use tracking pixels, advertising tools, or
              cookie-based analytics. We use{" "}
              <a
                href="https://vercel.com/docs/analytics"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-pride-orange-text transition-colors hover:text-pride-orange"
              >
                Vercel Analytics
              </a>
              {" "}for privacy-friendly, cookieless page view metrics. No
              personal data is collected and no individual visitors are tracked.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-bold text-text">
              Third-Party Services
            </h2>
            <p className="mt-3">
              We rely on a small number of third-party services to operate. Each
              has its own privacy policy governing how it handles data:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>
                <strong>Stripe</strong> processes payments for session bookings.
                RedDep does not store your payment information.{" "}
                <a
                  href="https://stripe.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-pride-orange-text transition-colors hover:text-pride-orange"
                >
                  Stripe Privacy Policy
                </a>
              </li>
              <li>
                <strong>Cal.com</strong> handles session scheduling. When you
                book a session, Cal.com processes your name and email to
                coordinate the appointment.{" "}
                <a
                  href="https://cal.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-pride-orange-text transition-colors hover:text-pride-orange"
                >
                  Cal.com Privacy Policy
                </a>
              </li>
              <li>
                <strong>Vercel</strong> hosts this website. Vercel may collect
                standard server logs (IP address, browser type, timestamps) as
                part of normal web hosting.{" "}
                <a
                  href="https://vercel.com/legal/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-pride-orange-text transition-colors hover:text-pride-orange"
                >
                  Vercel Privacy Policy
                </a>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading text-xl font-bold text-text">
              Fonts &amp; External Resources
            </h2>
            <p className="mt-3">
              All fonts are self-hosted using Next.js font optimization. No
              requests are made to Google Fonts or other external font services
              when you visit this site.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-bold text-text">
              Cookies
            </h2>
            <p className="mt-3">
              This site does not set any first-party cookies for analytics or
              tracking. Third-party services (Stripe, Cal.com) may set cookies
              necessary for payment processing and scheduling functionality.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-bold text-text">
              Contact
            </h2>
            <p className="mt-3">
              If you have questions about this privacy policy, contact us at{" "}
              <a
                href="mailto:david@reddep.com"
                className="font-semibold text-pride-orange-text transition-colors hover:text-pride-orange"
              >
                david@reddep.com
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </SectionWrapper>
  );
}
