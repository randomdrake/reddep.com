import { SectionWrapper } from "@/components/ui/SectionWrapper";

export function Writing() {
  return (
    <SectionWrapper id="writing" labelId="writing-heading" bg="default">
      <div className="mx-auto max-w-4xl">
        <h2
          id="writing-heading"
          className="font-heading text-3xl font-bold text-text md:text-4xl"
        >
          Writing
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-text-light">
          The name isn&rsquo;t just a tech metaphor. David writes about
          reducing dependencies of every kind&mdash;in systems, in
          organizations, and in life.
        </p>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {/* Book */}
          <a
            href="https://www.amazon.com/Will-Not-Drink-You-Today/dp/B0FX66ZG6P/"
            target="_blank"
            rel="noopener noreferrer"
            className="group block rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-shadow hover:shadow-md"
          >
            <div
              className="mb-4 h-1.5 w-16 rounded-full"
              style={{
                background:
                  "linear-gradient(90deg, var(--red) 0%, var(--orange) 100%)",
              }}
              aria-hidden="true"
            />
            <p className="text-xs font-semibold uppercase tracking-wider text-text-muted">
              📖 Book
            </p>
            <h3 className="mt-2 font-heading text-xl font-bold text-text group-hover:text-pride-orange-text">
              I Will Not Drink With You Today
            </h3>
            <p className="mt-3 text-base leading-relaxed text-text-light">
              A personal account of sobriety, identity, and clearing the path
              forward. The values behind RedDep&mdash;agency, dignity,
              honesty&mdash;aren&rsquo;t abstractions. They&rsquo;re lived
              experience.
            </p>
            <span className="mt-4 inline-block text-sm font-semibold text-pride-orange-text transition-colors group-hover:text-pride-orange">
              Available on Amazon &rarr;
            </span>
          </a>

          {/* Substack */}
          <a
            href="https://randomdrake.substack.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group block rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-shadow hover:shadow-md"
          >
            <div
              className="mb-4 h-1.5 w-16 rounded-full"
              style={{
                background:
                  "linear-gradient(90deg, var(--purple) 0%, var(--trans-blue) 100%)",
              }}
              aria-hidden="true"
            />
            <p className="text-xs font-semibold uppercase tracking-wider text-text-muted">
              ✉️ Newsletter
            </p>
            <h3 className="mt-2 font-heading text-xl font-bold text-text group-hover:text-pride-orange-text">
              Narrative Compression
            </h3>
            <p className="mt-3 text-base leading-relaxed text-text-light">
              David&rsquo;s research in public. Free essays on AI, narrative,
              neurodivergence, and the systems that shape how we think.
            </p>
            <span className="mt-4 inline-block text-sm font-semibold text-pride-orange-text transition-colors group-hover:text-pride-orange">
              Read on Substack &rarr;
            </span>
          </a>
        </div>
      </div>
    </SectionWrapper>
  );
}
