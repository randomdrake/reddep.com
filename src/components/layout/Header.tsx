"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Wordmark } from "@/components/brand/Wordmark";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  const sectionLinks = [
    { anchor: "services", label: "Services" },
    { anchor: "values", label: "Values" },
  ];

  function sectionHref(anchor: string) {
    return isHome ? `#${anchor}` : `/#${anchor}`;
  }

  const bookingHref = isHome ? "#booking" : "/#booking";

  return (
    <header className="sticky top-0 z-50 bg-white/95 shadow-sm backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" aria-label="RedDep home">
          <Wordmark />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 sm:flex" aria-label="Main">
          {sectionLinks.map((link) => (
            <a
              key={link.anchor}
              href={sectionHref(link.anchor)}
              className="text-sm font-semibold text-text-light transition-colors hover:text-text"
            >
              {link.label}
            </a>
          ))}
          <Link
            href="/about"
            className={`text-sm font-semibold transition-colors hover:text-text ${
              pathname === "/about"
                ? "text-text border-b-2 border-pride-blue"
                : "text-text-light"
            }`}
          >
            About
          </Link>
          <a
            href={bookingHref}
            className="rounded-lg bg-pride-blue px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-all duration-150 hover:shadow-lg hover:-translate-y-0.5 active:shadow-sm active:translate-y-0"
          >
            Book a Session &rarr;
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          className="flex items-center justify-center sm:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          <svg
            className="h-6 w-6 text-text"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            aria-hidden="true"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile nav */}
      {menuOpen && (
        <nav
          id="mobile-menu"
          className="bg-white px-6 pb-4 shadow-inner sm:hidden"
          aria-label="Main"
        >
          {sectionLinks.map((link) => (
            <a
              key={link.anchor}
              href={sectionHref(link.anchor)}
              className="block py-3 text-sm font-semibold text-text-light"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <Link
            href="/about"
            className={`block py-3 text-sm font-semibold ${
              pathname === "/about" ? "text-text" : "text-text-light"
            }`}
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>
          <a
            href={bookingHref}
            className="mt-2 block rounded-lg bg-pride-blue px-5 py-2.5 text-center text-sm font-semibold text-white"
            onClick={() => setMenuOpen(false)}
          >
            Book a Session &rarr;
          </a>
        </nav>
      )}
    </header>
  );
}
