import { SectionWrapper } from "@/components/ui/SectionWrapper";

export function Contact() {
  return (
    <SectionWrapper id="contact" labelId="contact-heading" bg="white">
      <div className="mx-auto max-w-2xl">
        <h2
          id="contact-heading"
          className="font-heading text-3xl font-bold text-text md:text-4xl"
        >
          Get in Touch 👋
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-text-light">
          Not sure which session is right? Have a question before booking?
          Reach out directly to David&mdash;no forms, no friction, no
          gatekeepers.
        </p>
        <a
          href="mailto:david@reddep.com"
          className="group mt-8 inline-block text-2xl font-bold text-pride-orange-text transition-colors hover:text-pride-orange md:text-3xl"
        >
          <span className="border-b-3 border-pride-orange/20 pb-1 transition-colors group-hover:border-pride-orange/50">
            david@reddep.com
          </span>
        </a>
        <p className="mt-4 text-sm text-text-muted">
          All conversations are confidential. Need a formal NDA?{" "}
          <a
            href="mailto:david@reddep.com?subject=NDA%20Request"
            className="font-semibold text-pride-orange-text transition-colors hover:text-pride-orange"
          >
            We have one ready via DocuSign.
          </a>
        </p>
        <p className="mt-6 text-base text-text-light">
          Want to follow David&rsquo;s thinking before reaching out?{" "}
          <a
            href="https://randomdrake.medium.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-pride-orange-text transition-colors hover:text-pride-orange"
          >
            Read David&rsquo;s writing on Medium
          </a>{" "}
          &mdash; essays on AI, narrative, and reducing dependencies of every
          kind.
        </p>
      </div>
    </SectionWrapper>
  );
}
