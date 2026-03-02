import { SectionWrapper } from "@/components/ui/SectionWrapper";

export function TermsContent() {
  return (
    <SectionWrapper id="terms" labelId="terms-heading" bg="white">
      <div className="mx-auto max-w-3xl">
        <h1
          id="terms-heading"
          className="font-heading text-3xl font-bold text-text md:text-4xl"
        >
          Terms of Service
        </h1>
        <p className="mt-2 text-sm text-text-muted">
          Last updated: March 1, 2026
        </p>

        <div className="mt-10 space-y-8 text-lg leading-relaxed text-text-light">
          <section>
            <h2 className="font-heading text-xl font-bold text-text">
              Overview
            </h2>
            <p className="mt-3">
              RedDep (&ldquo;we,&rdquo; &ldquo;us&rdquo;) provides AI research
              and consulting services operated by David Drake. By using this
              website or booking a session, you agree to these terms.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-bold text-text">
              Services
            </h2>
            <p className="mt-3">
              RedDep offers consulting sessions at published rates. Sessions are
              available in Advisory, Technical Deep Dive, and Executive Strategy
              tiers. All sessions are conducted remotely or in-person at
              mutually agreed locations in the Portland, Oregon metro area.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-bold text-text">
              Booking &amp; Payment
            </h2>
            <p className="mt-3">
              Session payments are processed through{" "}
              <a
                href="https://stripe.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-pride-orange-text transition-colors hover:text-pride-orange"
              >
                Stripe
              </a>
              . Payment is required before scheduling a session. After payment,
              you will be directed to schedule your session through{" "}
              <a
                href="https://cal.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-pride-orange-text transition-colors hover:text-pride-orange"
              >
                Cal.com
              </a>
              . Refund requests made more than 48 hours before a scheduled
              session will be honored in full.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-bold text-text">
              No Guarantees
            </h2>
            <p className="mt-3">
              Consulting services are provided on an &ldquo;as-is&rdquo; basis.
              While we bring deep expertise and genuine effort to every
              engagement, we do not guarantee specific outcomes, results, or
              return on investment. AI is a rapidly evolving field, and our
              advice reflects our best professional judgment at the time of the
              session.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-bold text-text">
              Limitation of Liability
            </h2>
            <p className="mt-3">
              To the maximum extent permitted by law, RedDep&rsquo;s total
              liability for any claim arising from our services is limited to the
              amount you paid for the specific session giving rise to the claim.
              We are not liable for indirect, incidental, or consequential
              damages.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-bold text-text">
              Intellectual Property
            </h2>
            <p className="mt-3">
              You retain ownership of all materials, data, and information you
              provide during a session. RedDep retains ownership of its
              methodologies, frameworks, and general knowledge. Nothing in a
              session transfers ownership of either party&rsquo;s pre-existing
              intellectual property.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-bold text-text">
              Confidentiality
            </h2>
            <p className="mt-3">
              We treat the content of consulting sessions as confidential. We
              will not share details of your business, technical challenges, or
              strategy with third parties without your explicit permission. We
              ask that you extend the same courtesy regarding our proprietary
              frameworks and methodologies.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-bold text-text">
              Governing Law
            </h2>
            <p className="mt-3">
              These terms are governed by and construed in accordance with the
              laws of the State of Oregon, without regard to conflict of law
              principles.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-bold text-text">
              Contact
            </h2>
            <p className="mt-3">
              Questions about these terms? Reach out at{" "}
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
