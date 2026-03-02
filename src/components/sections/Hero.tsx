import { Button } from "@/components/ui/Button";
import { MathGradient } from "@/components/brand/MathGradient";

export function Hero() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden bg-surface px-6 py-24 md:py-36 lg:py-44"
    >
      {/* Animated mathematical gradient background */}
      <MathGradient />

      {/* White radial overlay — keeps center clean, lets gradient show at edges */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 45%, rgba(250,250,248,0.85) 0%, rgba(250,250,248,0.4) 60%, transparent 100%)",
        }}
      />

      <div className="relative mx-auto max-w-3xl">
        <h1
          id="hero-heading"
          className="font-heading text-4xl font-black text-text md:text-5xl lg:text-[3.5rem]"
        >
          Removing obstacles so people can move under their own power.
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-text-light md:text-xl md:leading-relaxed">
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
