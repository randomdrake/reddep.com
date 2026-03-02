interface WordmarkProps {
  className?: string;
  showSubtitle?: boolean;
}

const letters = [
  { char: "R", color: "#E40303" },
  { char: "e", color: "#FF8C00" },
  { char: "d", color: "#008026" },
  { char: "D", color: "#004DFF" },
  { char: "e", color: "#750787" },
  { char: "p", color: "#5BCEFA", textShadow: "0 0 1px rgba(0,0,0,0.15)" },
];

export function Wordmark({ className = "", showSubtitle = true }: WordmarkProps) {
  return (
    <div className={className}>
      <span
        className="font-heading text-3xl font-black tracking-wide"
        aria-label="RedDep"
      >
        {letters.map((l, i) => (
          <span key={i} style={{ color: l.color, textShadow: l.textShadow }}>
            {l.char}
          </span>
        ))}
      </span>
      {showSubtitle && (
        <span className="ml-3 hidden text-sm font-semibold uppercase tracking-[0.15em] text-text-muted sm:inline">
          Reducing Dependencies
        </span>
      )}
    </div>
  );
}
