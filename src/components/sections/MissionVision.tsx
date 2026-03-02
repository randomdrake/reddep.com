export function MissionVision() {
  return (
    <section id="mission-vision" className="bg-bg px-6 py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:gap-20">
        {/* Mission */}
        <article aria-labelledby="mission-heading">
          <h2
            id="mission-heading"
            className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.15em] text-pride-red-text"
          >
            <span
              aria-hidden="true"
              className="inline-block h-px w-8 bg-pride-red"
            />
            Mission
          </h2>
          <p className="mt-5 font-heading text-xl font-bold leading-snug text-text md:text-2xl md:leading-snug">
            To bring independent AI research and responsible technical guidance
            to organizations building with AI&mdash;so the tools they ship make
            people more capable, not more dependent.
          </p>
        </article>

        {/* Vision */}
        <article aria-labelledby="vision-heading">
          <h2
            id="vision-heading"
            className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.15em] text-pride-blue-text"
          >
            <span
              aria-hidden="true"
              className="inline-block h-px w-8 bg-pride-blue"
            />
            Vision
          </h2>
          <p className="mt-5 font-heading text-xl font-bold leading-snug text-text md:text-2xl md:leading-snug">
            A technology landscape where AI is designed to increase human
            capacity and independence&mdash;not to create new dependencies on
            the tools themselves or the people who sell them.
          </p>
        </article>
      </div>
    </section>
  );
}
