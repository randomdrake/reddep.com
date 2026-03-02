interface SectionWrapperProps {
  id: string;
  labelId: string;
  children: React.ReactNode;
  className?: string;
  bg?: "default" | "white";
}

export function SectionWrapper({
  id,
  labelId,
  children,
  className = "",
  bg = "default",
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      aria-labelledby={labelId}
      className={`px-6 py-16 md:py-20 ${bg === "white" ? "bg-white" : "bg-bg"} ${className}`}
    >
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
}
