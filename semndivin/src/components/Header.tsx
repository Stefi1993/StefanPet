"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Acasă" },
  { href: "/semnificatie-numere-angelice", label: "Numere Angelice" },
  { href: "/despre-noi", label: "Despre Noi" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-indigo-900 via-purple-900 to-indigo-900 shadow-lg border-b border-purple-700/30">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-2xl">✨</span>
            <div>
              <span className="text-white font-bold text-xl tracking-wide group-hover:text-purple-200 transition-colors">
                SemnDivin
              </span>
              <span className="text-purple-300 text-xs block leading-none">.ro</span>
            </div>
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-purple-200 hover:text-white hover:bg-purple-700/40 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/semnificatie-numere-angelice"
              className="ml-2 bg-purple-600 hover:bg-purple-500 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 shadow-md"
            >
              Caută Număr
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-purple-200 hover:text-white p-2"
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

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-1">
            {navLinks.map((link) => (
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
