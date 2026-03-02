import Image from "next/image";
import Link from "next/link";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { CredentialChip } from "@/components/ui/CredentialChip";

const credentials = [
  { label: "Background", value: "Former YC CTO" },
  { label: "Research", value: "Narrative Compression" },
  { label: "Author", value: "Published, 2 Languages" },
  { label: "Location", value: "Portland, OR" },
];

export function About() {
  return (
    <SectionWrapper id="about" labelId="about-heading" bg="white">
      <div className="mx-auto max-w-4xl items-start gap-12 md:flex">
        <div className="shrink-0 md:w-56">
          <Image
            src="/images/david-drake.jpg"
            alt="David Drake"
            width={800}
            height={800}
            className="w-full max-w-[200px] rounded-2xl shadow-md"
          />
          <a
            href="https://www.linkedin.com/in/randomdrake/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-pride-blue-text transition-colors hover:text-pride-blue"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            Connect on LinkedIn
          </a>
        </div>

        <div className="mt-8 md:mt-0">
          <h2
            id="about-heading"
            className="font-heading text-3xl font-bold text-text md:text-4xl"
          >
            About
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-text-light">
            David Drake is an AI researcher, former YC-backed CTO, and published
            author whose work has appeared in two languages. His current research
            focuses on narrative compression&mdash;how large language models
            reshape the way stories are told and understood.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-text-light">
            Before founding RedDep, David built and led engineering teams shipping
            AI-powered products. That experience&mdash;seeing firsthand how AI can
            either expand or constrain what people can do&mdash;is what drives this
            practice.
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

          <Link
            href="/about"
            className="mt-6 inline-block text-sm font-semibold text-pride-blue-text transition-colors hover:text-pride-blue"
          >
            Learn more about David and RedDep &rarr;
          </Link>
        </div>
      </div>
    </SectionWrapper>
  );
}
