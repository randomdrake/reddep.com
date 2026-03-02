import { SectionWrapper } from "@/components/ui/SectionWrapper";

const values = [
  {
    title: "Dignity",
    description:
      "Every engagement starts from respect for what you and your team already know. We\u2019re not here to replace your judgment\u2014we\u2019re here to sharpen it.",
    barColor: "bg-pride-red",
    bgColor: "bg-[#FEF2F2]",
    titleColor: "text-pride-red-text",
  },
  {
    title: "Inclusion",
    description:
      "The AI industry has a representation problem. Who builds the tools determines who they serve. We work with and for organizations that take this seriously.",
    barColor: "bg-pride-orange",
    bgColor: "bg-[#FFF7ED]",
    titleColor: "text-pride-orange-text",
  },
  {
    title: "Accessibility",
    description:
      "Knowledge locked behind jargon isn\u2019t knowledge. We explain clearly, build accessibly, and design for the people who actually use the tools\u2014not just the people who buy them.",
    barColor: "bg-pride-green",
    bgColor: "bg-[#F0FDF4]",
    titleColor: "text-pride-green-text",
  },
  {
    title: "Equity",
    description:
      "AI doesn\u2019t distribute its benefits evenly. We prioritize work that widens access, and we\u2019re honest about where the technology concentrates power instead of distributing it.",
    barColor: "bg-pride-blue",
    bgColor: "bg-[#EFF6FF]",
    titleColor: "text-pride-blue-text",
  },
  {
    title: "Agency",
    description:
      "We build our clients\u2019 capacity, not their reliance on us. If you need us forever, we\u2019ve failed. The goal is to leave you more capable than we found you.",
    barColor: "bg-pride-purple",
    bgColor: "bg-[#FAF5FF]",
    titleColor: "text-pride-purple-text",
  },
  {
    title: "Honesty",
    description:
      "We tell you what the evidence supports, not what the hype cycle promises. If AI isn\u2019t the right tool for your problem, we\u2019ll say so\u2014even when that\u2019s not what you called to hear.",
    barColor: "bg-pride-trans-pink",
    bgColor: "bg-[#FDF2F8]",
    titleColor: "text-[#B8507A]",
  },
];

export function Values() {
  return (
    <SectionWrapper id="values" labelId="values-heading">
      <div>
        <h2
          id="values-heading"
          className="font-heading text-3xl font-bold text-text md:text-4xl"
        >
          Our Values
        </h2>
        <p className="mt-3 text-lg text-text-light">
          How we work. What we won&rsquo;t compromise. Why it matters.
        </p>
      </div>

      <div className="mt-14 grid gap-5 md:grid-cols-2">
        {values.map((value) => (
          <article
            key={value.title}
            className={`relative overflow-hidden rounded-2xl p-6 shadow-xs transition-all duration-200 hover:shadow-sm hover:-translate-y-0.5 ${value.bgColor}`}
          >
            {/* Left color bar */}
            <div
              className={`absolute top-0 left-0 h-full w-[5px] ${value.barColor}`}
            />
            <h3
              className={`font-heading text-lg font-bold ${value.titleColor}`}
            >
              {value.title}
            </h3>
            <p className="mt-2 text-[0.95rem] leading-relaxed text-text-light">
              {value.description}
            </p>
          </article>
        ))}

        {/* Liberation Through Technology — full width */}
        <article className="relative col-span-1 overflow-hidden rounded-2xl p-6 shadow-xs transition-all duration-200 hover:shadow-sm hover:-translate-y-0.5 md:col-span-2"
          style={{ background: "linear-gradient(135deg, #E8F8FE, #FDF2F8)" }}
        >
          <div
            className="absolute top-0 left-0 h-full w-[5px]"
            style={{
              background: "linear-gradient(180deg, #5BCEFA, #F5A9B8)",
            }}
          />
          <h3
            className="font-heading text-lg font-bold"
            style={{
              background: "linear-gradient(90deg, #1A8AB8, #5C0668)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Liberation Through Technology
          </h3>
          <p className="mt-2 text-[0.95rem] leading-relaxed text-text-light">
            Tools should expand what someone can do alone, not what they can do
            with us. Autonomy is the metric. Every recommendation we make is
            tested against this standard.
          </p>
        </article>
      </div>
    </SectionWrapper>
  );
}
