import { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/seo";
import NumerologyCalculator from "./NumerologyCalculator";

export const metadata: Metadata = {
  title: "Calculator Numerologic Gratuit — Calea Vieții și Numărul Destinului",
  description:
    "Calculator numerologic gratuit în română. Calculează Numărul Căii Vieții din data nașterii și Numărul Destinului din nume. Descoperă misiunea sufletului tău.",
  keywords:
    "calculator numerologic, calea vietii numerologie, numarul destinului, numerologie data nasterii, calculator spiritual",
  alternates: { canonical: `${SITE_URL}/calculator-numerologic` },
};

export default function CalculatorPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <nav className="text-purple-400 text-sm mb-8">
        <ol className="flex gap-2">
          <li><Link href="/" className="hover:text-purple-200">Acasă</Link></li>
          <li>/</li>
          <li className="text-purple-200">Calculator Numerologic</li>
        </ol>
      </nav>

      <div className="text-center mb-12">
        <div className="text-5xl mb-4">🔢</div>
        <h1 className="text-4xl font-bold text-white mb-4">
          Calculator{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
            Numerologic
          </span>
        </h1>
        <p className="text-purple-200 text-lg max-w-2xl mx-auto">
          Descoperă Numărul Căii Vieții, Numărul Destinului și Numărul Sufletului tău.
          Complet gratuit, în limba română.
        </p>
      </div>

      <NumerologyCalculator />

      {/* SEO Content */}
      <section className="mt-16 space-y-6 text-purple-200">
        <h2 className="text-2xl font-bold text-white">Cum funcționează calculatorul numerologic?</h2>
        <p>
          Numerologia este o știință spirituală milenară care studiază relația dintre numere și viața umană.
          Calculatorul nostru folosește metoda numerologică pythagorică, cea mai răspândită în Occident.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
          {[
            {
              title: "Numărul Căii Vieții",
              desc: "Cel mai important număr. Derivat din data nașterii, revelează misiunea sufletului și lecțiile karmice.",
              icon: "🛤️",
            },
            {
              title: "Numărul Destinului",
              desc: "Calculat din literele numelui complet. Arată talentele naturale și scopul tău în această viață.",
              icon: "⭐",
            },
            {
              title: "Numărul Sufletului",
              desc: "Derivat din vocalele numelui. Revelează dorințele profunde și motivațiile interioare ale sufletului.",
              icon: "💫",
            },
          ].map((item) => (
            <div key={item.title} className="bg-purple-900/20 border border-purple-700/30 rounded-xl p-4">
              <span className="text-3xl block mb-2">{item.icon}</span>
              <strong className="text-white block mb-1">{item.title}</strong>
              <p className="text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
        <p>
          Citește mai multe în articolul nostru complet despre{" "}
          <Link href="/blog/calea-vietii-in-numerologie" className="text-purple-300 hover:text-purple-100 underline">
            Numărul Căii Vieții
          </Link>.
        </p>
      </section>
    </div>
  );
}
