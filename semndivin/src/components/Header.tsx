"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Acasă" },
  { href: "/semnificatie-numere-angelice", label: "Numere Angelice" },
  { href: "/blog", label: "Blog" },
  { href: "/calculator-numerologic", label: "Calculator" },
  { href: "/horoscop-numeric-zilnic", label: "Horoscop Zilnic" },
];

const moreLinks = [
  { href: "/quiz-spiritual", label: "🔮 Quiz Spiritual" },
  { href: "/meditatie-ghidata", label: "🧘 Meditație Ghidată" },
  { href: "/cautare", label: "🔍 Căutare" },
  { href: "/numere-angelice/dragoste", label: "❤️ Dragoste" },
  { href: "/numere-angelice/bani", label: "💰 Abundență" },
  { href: "/numere-angelice/spiritualitate", label: "✨ Spiritualitate" },
  { href: "/despre-noi", label: "Despre Noi" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [showMore, setShowMore] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-indigo-900 via-purple-900 to-indigo-900 shadow-lg border-b border-purple-700/30">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 group shrink-0">
            <span className="text-2xl">✨</span>
            <div>
              <span className="text-white font-bold text-xl tracking-wide group-hover:text-purple-200 transition-colors">
                SemnDivin
              </span>
              <span className="text-purple-300 text-xs block leading-none">.ro</span>
            </div>
          </Link>

          {/* Desktop menu */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-purple-200 hover:text-white hover:bg-purple-700/40 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200"
              >
                {link.label}
              </Link>
            ))}

            {/* More dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => setShowMore(true)}
                onMouseLeave={() => setShowMore(false)}
                className="text-purple-200 hover:text-white hover:bg-purple-700/40 px-3 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-1"
              >
                Mai Mult ▾
              </button>
              {showMore && (
                <div
                  onMouseEnter={() => setShowMore(true)}
                  onMouseLeave={() => setShowMore(false)}
                  className="absolute right-0 top-full mt-1 bg-indigo-950 border border-purple-700/40 rounded-xl shadow-xl py-2 min-w-48 z-50"
                >
                  {moreLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block px-4 py-2 text-purple-200 hover:text-white hover:bg-purple-800/40 text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/cautare"
              className="ml-1 text-purple-300 hover:text-white p-2 rounded-lg hover:bg-purple-700/40 transition-all"
              aria-label="Caută"
            >
              🔍
            </Link>
            <Link
              href="/semnificatie-numere-angelice"
              className="ml-1 bg-purple-600 hover:bg-purple-500 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 shadow-md"
            >
              Caută Număr
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center gap-2">
            <Link href="/cautare" className="text-purple-300 hover:text-white p-2" aria-label="Caută">🔍</Link>
            <button
              className="text-purple-200 hover:text-white p-2"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Deschide meniu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="lg:hidden pb-4 space-y-1 border-t border-purple-700/30 pt-3">
            {[...navLinks, ...moreLinks].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-purple-200 hover:text-white hover:bg-purple-700/40 px-4 py-2 rounded-lg text-sm font-medium transition-all"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
