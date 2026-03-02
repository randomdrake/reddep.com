import { SectionWrapper } from "@/components/ui/SectionWrapper";

export function AccessibilityContent() {
  return (
    <SectionWrapper
      id="accessibility"
      labelId="accessibility-heading"
      bg="white"
    >
      <div className="mx-auto max-w-3xl">
        <h1
          id="accessibility-heading"
          className="font-heading text-3xl font-bold text-text md:text-4xl"
        >
          Accessibility Statement
        </h1>
        <p className="mt-2 text-sm text-text-muted">
          Last updated: March 1, 2026
        </p>

        <div className="mt-10 space-y-8 text-lg leading-relaxed text-text-light">
          <section>
            <h2 className="font-heading text-xl font-bold text-text">
              Our Commitment
            </h2>
            <p className="mt-3">
              RedDep is committed to making this website accessible to everyone.
              &ldquo;Everyone deserves a clear path&rdquo; isn&rsquo;t just our
              tagline&mdash;it&rsquo;s how we build. We target{" "}
              <strong>WCAG 2.1 Level AA</strong> conformance across all pages.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-bold text-text">
              What We Do
            </h2>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>
                <strong>Semantic HTML</strong> &mdash; proper heading hierarchy,
                landmark regions, and meaningful document structure throughout
              </li>
              <li>
                <strong>Keyboard navigation</strong> &mdash; all interactive
                elements are fully operable with a keyboard, with visible focus
                indicators
              </li>
              <li>
                <strong>Screen reader support</strong> &mdash; ARIA labels,
                roles, and live regions where appropriate; decorative elements
                are hidden from assistive technology
              </li>
              <li>
                <strong>Color contrast</strong> &mdash; all text meets WCAG AA
                contrast ratios (4.5:1 for body text, 3:1 for large text)
              </li>
              <li>
                <strong>Motion preferences</strong> &mdash; animations and
                transitions respect the{" "}
                <code className="rounded bg-gray-100 px-1.5 py-0.5 text-base">
                  prefers-reduced-motion
                </code>{" "}
                media query
              </li>
              <li>
                <strong>Zoom support</strong> &mdash; content remains usable and
                readable at 200% browser zoom
              </li>
              <li>
                <strong>Skip navigation</strong> &mdash; a &ldquo;Skip to main
                content&rdquo; link is available as the first focusable element
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading text-xl font-bold text-text">
              Known Limitations
            </h2>
            <p className="mt-3">
              Third-party embeds (Cal.com scheduling widget, Stripe payment
              forms) are rendered by their respective services. While we select
              vendors who take accessibility seriously, we cannot fully control
              the accessibility of their embedded content. If you encounter
              barriers with these tools, please contact us directly and
              we&rsquo;ll find an alternative way to help.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-bold text-text">
              Report an Issue
            </h2>
            <p className="mt-3">
              If you encounter any accessibility barrier on this site, please let
              us know. We take every report seriously and will work to resolve
              issues promptly.
            </p>
            <p className="mt-3">
              Email:{" "}
              <a
                href="mailto:david@reddep.com"
                className="font-semibold text-pride-orange-text transition-colors hover:text-pride-orange"
              >
                david@reddep.com
              </a>
            </p>
            <p className="mt-3">
              When reporting an issue, it helps to include the page URL, a
              description of what you were trying to do, and the assistive
              technology you were using (if applicable). We aim to respond within
              two business days.
            </p>
          </section>
        </div>
      </div>
    </SectionWrapper>
  );
}
