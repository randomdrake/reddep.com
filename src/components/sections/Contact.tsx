import { SectionWrapper } from "@/components/ui/SectionWrapper";

export function Contact() {
  return (
    <SectionWrapper id="contact" labelId="contact-heading" bg="white">
      <div className="mx-auto max-w-2xl text-center">
        <h2
          id="contact-heading"
          className="font-heading text-3xl font-bold text-text md:text-4xl"
        >
          Get in Touch
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-text-light">
          Not sure which session is right? Have a question before booking?
          Reach out directly to David&mdash;no forms, no friction, no
          gatekeepers.
        </p>
        <a
          href="mailto:david@reddep.com"
          className="group mt-6 inline-block text-xl font-semibold text-pride-blue-text transition-colors hover:text-pride-blue"
        >
          <span className="border-b-2 border-pride-blue/0 transition-colors group-hover:border-pride-blue/40">
            david@reddep.com
          </span>
        </a>
        <p className="mt-4 text-sm text-text-muted">
          All conversations are confidential. Need a formal NDA?{" "}
          <a
            href="mailto:david@reddep.com?subject=NDA%20Request"
            className="font-semibold text-pride-blue-text transition-colors hover:text-pride-blue"
          >
            We have one ready via DocuSign.
          </a>
        </p>
      </div>
    </SectionWrapper>
  );
}
