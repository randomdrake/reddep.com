export function MissionVision() {
  return (
    <section id="mission-vision" className="bg-bg px-6 py-16 md:py-20">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:gap-16">
        {/* Mission */}
        <article aria-labelledby="mission-heading">
          <h2
            id="mission-heading"
            className="font-heading text-2xl font-bold text-text md:text-3xl"
          >
            Mission
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-text-light">
            To bring independent AI research and responsible technical guidance
            to organizations building with AI&mdash;so the tools they ship make
            people more capable, not more dependent.
          </p>
        </article>

        {/* Vision */}
        <article aria-labelledby="vision-heading">
          <h2
            id="vision-heading"
            className="font-heading text-2xl font-bold text-text md:text-3xl"
          >
            Vision
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-text-light">
            A technology landscape where AI is designed to increase human
            capacity and independence&mdash;not to create new dependencies on
            the tools themselves or the people who sell them.
          </p>
        </article>
      </div>
    </section>
  );
}
