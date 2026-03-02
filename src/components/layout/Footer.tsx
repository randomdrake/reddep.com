import Link from "next/link";
import { PrideGradientBar } from "@/components/brand/PrideGradientBar";
import { Wordmark } from "@/components/brand/Wordmark";
import { TrustBadges } from "@/components/ui/TrustBadges";

export function Footer() {
  return (
    <footer role="contentinfo">
      <PrideGradientBar />
      <div className="bg-white px-6 py-12 md:py-16">
        <div className="mx-auto max-w-6xl">
          <Wordmark showSubtitle={false} />
          <p className="mt-2 text-sm text-text-muted">
            Because everyone deserves a clear path.
          </p>
          <div className="mt-6">
            <TrustBadges />
          </div>
          <nav className="mt-8 flex gap-6" aria-label="Footer">
            <Link
              href="/about"
              className="text-sm text-text-muted transition-colors hover:text-text"
            >
              About
            </Link>
            <a
              href="#"
              className="text-sm text-text-muted transition-colors hover:text-text"
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-sm text-text-muted transition-colors hover:text-text"
            >
              Terms
            </a>
            <a
              href="#"
              className="text-sm text-text-muted transition-colors hover:text-text"
            >
              Accessibility
            </a>
          </nav>
          <p className="mt-6 text-xs text-text-muted">
            &copy; {new Date().getFullYear()} RedDep. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
