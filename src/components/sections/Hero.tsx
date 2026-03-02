import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden bg-surface px-6 py-24 md:py-36 lg:py-44"
    >
      {/* Layered abstract gradient background */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background: `
            radial-gradient(ellipse 600px 400px at 10% 40%, rgba(91,206,250,0.15) 0%, transparent 70%),
            radial-gradient(ellipse 500px 500px at 90% 30%, rgba(245,169,184,0.13) 0%, transparent 70%),
            radial-gradient(ellipse 700px 300px at 50% 90%, rgba(0,77,255,0.06) 0%, transparent 60%),
            radial-gradient(ellipse 400px 400px at 30% 70%, rgba(255,237,0,0.05) 0%, transparent 50%)
          `,
        }}
      />

      {/* Subtle dot pattern overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        aria-hidden="true"
        style={{
          backgroundImage: "radial-gradient(circle, #1a1a1a 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative mx-auto max-w-3xl">
        <h1
          id="hero-heading"
          className="font-heading text-4xl font-black text-text md:text-5xl lg:text-[3.5rem]"
        >
          Removing obstacles so people can move under their own power.
        </h1>
        <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-text-light md:text-xl md:leading-relaxed">
          Independent AI research and responsible technical guidance for
          organizations building with AI. We help you ship tools that make
          people more capable, not more dependent.
        </p>
        <div className="mt-10">
          <Button href="#booking" className="text-lg px-10 py-4">
            Book a Session &rarr;
          </Button>
        </div>
      </div>
    </section>
  );
}
