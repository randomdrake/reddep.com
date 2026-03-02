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
          <nav className="mt-8 flex flex-wrap gap-x-6 gap-y-2" aria-label="Footer">
            <Link
              href="/about"
              className="text-sm text-text-muted transition-colors hover:text-text"
            >
              About
            </Link>
            <a
              href="https://randomdrake.substack.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-text-muted transition-colors hover:text-text"
            >
              Newsletter
            </a>
            <Link
              href="/privacy"
              className="text-sm text-text-muted transition-colors hover:text-text"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="text-sm text-text-muted transition-colors hover:text-text"
            >
              Terms
            </Link>
            <Link
              href="/accessibility"
              className="text-sm text-text-muted transition-colors hover:text-text"
            >
              Accessibility
            </Link>
          </nav>
          <p className="mt-6 text-xs text-text-muted">
            &copy; {new Date().getFullYear()} RedDep. All rights reserved.
          </p>
          <p className="mt-1 text-xs text-text-muted">
            Made with 🌲 in Oregon
          </p>
        </div>
      </div>
    </footer>
  );
}
