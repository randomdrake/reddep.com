interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
}

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const base =
    "inline-block rounded-xl px-8 py-3.5 text-base font-semibold transition-all duration-150";
  const variants = {
    primary:
      "bg-pride-blue text-white shadow-md hover:shadow-lg hover:-translate-y-0.5 active:shadow-sm active:translate-y-0",
    secondary:
      "bg-white text-pride-blue shadow-sm ring-1 ring-pride-blue/20 hover:shadow-md hover:-translate-y-0.5 active:shadow-xs active:translate-y-0",
  };

  return (
    <a href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </a>
  );
}
