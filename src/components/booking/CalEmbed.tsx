"use client";

import Cal from "@calcom/embed-react";

interface CalEmbedProps {
  calLink: string;
  name?: string;
  email?: string;
}

export function CalEmbed({ calLink, name, email }: CalEmbedProps) {
  return (
    <div>
      <Cal
        calLink={calLink}
        config={{
          ...(name ? { name } : {}),
          ...(email ? { email } : {}),
          layout: "month_view",
        }}
        style={{ width: "100%", height: "100%", overflow: "auto" }}
      />
      <p className="mt-4 text-sm text-text-muted">
        Having trouble with the scheduler?{" "}
        <a
          href={`https://cal.com/${calLink}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-pride-orange-text underline hover:text-pride-orange"
        >
          Open scheduling page directly
        </a>
      </p>
    </div>
  );
}
