import Link from "next/link";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { CredentialChip } from "@/components/ui/CredentialChip";

const credentials = [
  { label: "Background", value: "Former YC CTO" },
  { label: "Research", value: "Narrative Compression" },
  { label: "Author", value: "Published, 3 Languages" },
  { label: "Location", value: "Portland, OR" },
];

export function About() {
  return (
    <SectionWrapper id="about" labelId="about-heading" bg="white">
      <div className="mx-auto max-w-2xl text-center">
        <h2
          id="about-heading"
          className="font-heading text-3xl font-bold text-text md:text-4xl"
        >
          About
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-text-light">
          David Drake is an AI researcher, former YC-backed CTO, and published
          author whose work has appeared in three languages. His current research
          focuses on narrative compression&mdash;how large language models
          reshape the way stories are told and understood.
        </p>
        <p className="mt-4 text-lg leading-relaxed text-text-light">
          Before founding RedDep, David built and led engineering teams shipping
          AI-powered products. That experience&mdash;seeing firsthand how AI can
          either expand or constrain what people can do&mdash;is what drives this
          practice.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {credentials.map((cred) => (
            <CredentialChip
              key={cred.label}
              label={cred.label}
              value={cred.value}
            />
          ))}
        </div>

        <Link
          href="/about"
          className="mt-6 inline-block text-sm font-semibold text-pride-blue-text transition-colors hover:text-pride-blue"
        >
          Learn more about David and RedDep &rarr;
        </Link>
      </div>
    </SectionWrapper>
  );
}
