import Image from "next/image";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

const services = [
  {
    title: "🔬 AI Research",
    description:
      "Narrative compression, cognitive architecture, and published work bridging theory and practice. Research that moves from insight to implementation.",
    gradient: "from-pride-red to-pride-orange",
    image: "/images/advisory.jpg",
    imageAlt: "Sunlit forest path — a clear way forward",
  },
  {
    title: "🏗️ Architecture Advisory",
    description:
      "Technical evaluation, model selection, prompt engineering, and pipeline architecture. For teams that are shipping responsibly and need expert guidance on the hard decisions.",
    gradient: "from-pride-green to-pride-blue",
    image: "/images/technical.jpg",
    imageAlt: "Geometric architectural structure — systems and precision",
  },
  {
    title: "🧭 Responsible AI Strategy",
    description:
      "Bias auditing, AI governance, HIPAA and SOC 2 compliance strategy, and product roadmapping. Build AI that expands what people can do alone.",
    gradient: "from-pride-purple to-pride-trans-blue",
    image: "/images/executive.jpg",
    imageAlt: "Aerial view of mountain landscape — strategic perspective",
  },
];

export function Services() {
  return (
    <SectionWrapper id="services" labelId="services-heading" bg="white">
      <h2
        id="services-heading"
        className="font-heading text-3xl font-bold text-text md:text-4xl"
      >
        What We Do
      </h2>
      <p className="mt-3 max-w-2xl text-lg text-text-light">
        Focused expertise where it counts.
      </p>

      <div className="mt-14 grid gap-8 md:grid-cols-3">
        {services.map((service) => (
          <div
            key={service.title}
            className="group overflow-hidden rounded-2xl bg-surface shadow-sm transition-all duration-200 hover:shadow-lg hover:-translate-y-1"
          >
            {/* Image banner with gradient overlay */}
            <div className="relative h-44 w-full overflow-hidden">
              <Image
                src={service.image}
                alt={service.imageAlt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 900px) 100vw, 33vw"
              />
              {/* Pride gradient bar over image bottom edge */}
              <div
                className={`absolute bottom-0 left-0 h-1.5 w-full bg-gradient-to-r ${service.gradient}`}
              />
            </div>

            <div className="p-8 pt-6">
              <h3 className="font-heading text-xl font-bold text-text">
                {service.title}
              </h3>
              <p className="mt-3 leading-relaxed text-text-light">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
