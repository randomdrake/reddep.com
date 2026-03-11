import { SectionWrapper } from "@/components/ui/SectionWrapper";

const capabilities = [
  {
    title: "Engineering",
    description:
      "Systems architecture, AI integration, pipeline design. Building reliable infrastructure that scales with your needs.",
    barColor: "bg-pride-red",
    bgColor: "bg-[#FEF2F2]",
    titleColor: "text-pride-red-text",
  },
  {
    title: "Research",
    description:
      "Narrative compression, cognitive architecture, published work bridging theory and practice.",
    barColor: "bg-pride-orange",
    bgColor: "bg-[#FFF7ED]",
    titleColor: "text-pride-orange-text",
  },
  {
    title: "Product Strategy",
    description:
      "AI product design, market fit evaluation, roadmap development grounded in what the technology actually does.",
    barColor: "bg-pride-green",
    bgColor: "bg-[#F0FDF4]",
    titleColor: "text-pride-green-text",
  },
  {
    title: "Marketing & Communications",
    description:
      "AI-informed content strategy, positioning, storytelling. Communicating technical capability without jargon.",
    barColor: "bg-pride-blue",
    bgColor: "bg-[#EFF6FF]",
    titleColor: "text-pride-blue-text",
  },
  {
    title: "Data & Infrastructure",
    description:
      "Model evaluation, data pipelines, deployment strategy. Getting AI systems from prototype to production.",
    barColor: "bg-pride-purple",
    bgColor: "bg-[#FAF5FF]",
    titleColor: "text-pride-purple-text",
  },
  {
    title: "Governance & Compliance",
    description:
      "AI ethics, bias auditing, responsible AI policy. Building frameworks that hold up under scrutiny.",
    barColor: "bg-pride-trans-blue",
    bgColor: "bg-[#E8F8FE]",
    titleColor: "text-pride-trans-blue-text",
  },
];

export function CapabilityAreas() {
  return (
    <SectionWrapper id="capabilities" labelId="capabilities-heading">
      <div>
        <h2
          id="capabilities-heading"
          className="font-heading text-3xl font-bold text-text md:text-4xl"
        >
          Capability Areas
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-text-light">
          David leads every engagement, drawing on a deep network of
          specialists across these disciplines.
        </p>
      </div>

      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {capabilities.map((cap) => (
          <article
            key={cap.title}
            className={`relative overflow-hidden rounded-2xl p-6 shadow-xs transition-all duration-200 hover:shadow-sm hover:-translate-y-0.5 ${cap.bgColor}`}
          >
            <div
              className={`absolute top-0 left-0 h-full w-[5px] ${cap.barColor}`}
            />
            <h3
              className={`font-heading text-lg font-bold ${cap.titleColor}`}
            >
              {cap.title}
            </h3>
            <p className="mt-2 text-[0.95rem] leading-relaxed text-text-light">
              {cap.description}
            </p>
          </article>
        ))}
      </div>
    </SectionWrapper>
  );
}
