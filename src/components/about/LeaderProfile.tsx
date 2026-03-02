import Image from "next/image";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { CredentialChip } from "@/components/ui/CredentialChip";

const credentials = [
  { label: "Background", value: "Former YC CTO" },
  { label: "Research", value: "Narrative Compression" },
  { label: "Author", value: "Published, 2 Languages" },
  { label: "Location", value: "Portland, OR" },
];

export function LeaderProfile() {
  return (
    <SectionWrapper id="leader" labelId="leader-heading" bg="white">
      <div className="mx-auto max-w-4xl items-start gap-12 md:flex">
        <div className="shrink-0 md:w-64">
          <Image
            src="/images/david-drake.jpg"
            alt="David Drake"
            width={800}
            height={800}
            className="w-full max-w-[240px] rounded-2xl shadow-md"
            priority
          />
          <a
            href="https://linkedin.com/in/randomdrake"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-pride-blue-text transition-colors hover:text-pride-blue"
          >
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            Connect on LinkedIn
          </a>
        </div>

        <div className="mt-8 md:mt-0">
          <h1
            id="leader-heading"
            className="font-heading text-3xl font-bold text-text md:text-4xl"
          >
            About David Drake
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-text-light">
            David Drake is an AI researcher, former YC-backed CTO, and published
            author whose work has appeared in two languages. His current
            research focuses on narrative compression&mdash;how large language
            models reshape the way stories are told and understood.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-text-light">
            Before founding RedDep, David built and led engineering teams
            shipping AI-powered products at scale. That experience&mdash;seeing
            firsthand how AI can either expand or constrain what people can
            do&mdash;is what drives this practice.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-text-light">
            David leads every engagement personally. His approach combines deep
            technical expertise with a commitment to making AI work for
            people&mdash;not the other way around. Whether the work is
            architecture review, research consultation, or executive strategy,
            you get direct access to the person doing the thinking.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {credentials.map((cred) => (
              <CredentialChip
                key={cred.label}
                label={cred.label}
                value={cred.value}
              />
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
