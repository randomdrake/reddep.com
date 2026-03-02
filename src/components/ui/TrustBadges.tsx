const badges = [
  {
    label: "WCAG AA",
    sublabel: "Accessible",
    icon: (
      <svg
        className="h-4 w-4"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8a2 2 0 100-4 2 2 0 000 4z" fill="currentColor" stroke="none" />
        <path d="M12 8v4m-2 4l2-4 2 4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    href: "https://www.w3.org/WAI/WCAG21/quickref/",
  },
  {
    label: "HIPAA",
    sublabel: "Aware",
    icon: (
      <svg
        className="h-4 w-4"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        aria-hidden="true"
      >
        <path
          d="M12 2l7 4v6c0 5-3.5 9.74-7 11-3.5-1.26-7-6-7-11V6l7-4z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: "Open",
    sublabel: "Source",
    icon: (
      <svg
        className="h-4 w-4"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        aria-hidden="true"
      >
        <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    href: "https://github.com/randomdrake/reddep.com",
  },
];

export function TrustBadges() {
  return (
    <div className="flex flex-wrap gap-3">
      {badges.map((badge) => {
        const content = (
          <>
            <span className="text-pride-blue">{badge.icon}</span>
            <span className="font-semibold text-text-light">{badge.label}</span>
            <span className="text-text-muted">{badge.sublabel}</span>
          </>
        );

        return badge.href ? (
          <a
            key={badge.label}
            href={badge.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-bg px-3.5 py-1.5 text-xs shadow-xs transition-shadow duration-150 hover:shadow-sm"
          >
            {content}
          </a>
        ) : (
          <span
            key={badge.label}
            className="inline-flex items-center gap-1.5 rounded-full bg-bg px-3.5 py-1.5 text-xs shadow-xs"
          >
            {content}
          </span>
        );
      })}
    </div>
  );
}
