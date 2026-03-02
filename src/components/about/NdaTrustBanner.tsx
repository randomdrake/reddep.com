import { SectionWrapper } from "@/components/ui/SectionWrapper";

export function NdaTrustBanner() {
  return (
    <SectionWrapper id="nda" labelId="nda-heading" bg="white">
      <div className="mx-auto max-w-2xl rounded-2xl border border-pride-blue/10 bg-[#EFF6FF] p-8 shadow-xs">
        <div>
          <svg
            className="h-10 w-10 text-pride-blue-text"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            aria-hidden="true"
          >
            <path
              d="M12 2l7 4v6c0 5-3.5 9.74-7 11-3.5-1.26-7-6-7-11V6l7-4z"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9.5 12l2 2 3.5-3.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <h2
          id="nda-heading"
          className="mt-4 font-heading text-xl font-bold text-text"
        >
          Your Confidence, Protected
        </h2>
        <p className="mt-3 text-text-light">
          Every conversation with RedDep is treated as confidential by
          default. If your organization requires a formal agreement before
          engagement, we have a mutual NDA ready for signature via
          DocuSign&mdash;no back-and-forth with legal teams, no delays.
        </p>
        <a
          href="mailto:david@reddep.com?subject=NDA%20Request"
          className="mt-5 inline-block rounded-lg border-2 border-pride-blue bg-white px-6 py-2.5 text-sm font-semibold text-pride-blue-text transition-all duration-150 hover:bg-pride-blue hover:text-white"
        >
          Request an NDA &rarr;
        </a>
      </div>
    </SectionWrapper>
  );
}
