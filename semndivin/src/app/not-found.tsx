import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pagina nu a fost găsită — 404",
  description: "Pagina pe care o cauți nu există. Explorează numerele angelice de la SemnDivin.ro.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        <div className="text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-purple-400 to-pink-400 mb-4">
          404
        </div>
        <h1 className="text-3xl font-bold text-white mb-4">
          Pagina nu a fost găsită
        </h1>
        <p className="text-purple-300 mb-8 leading-relaxed">
          Se pare că universul te-a ghidat în altă direcție. Pagina pe care o cauți
          nu există, dar putem să te ajutăm să găsești ce ai nevoie.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="bg-purple-600 hover:bg-purple-500 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
          >
            ← Înapoi Acasă
          </Link>
          <Link
            href="/semnificatie-numere-angelice"
            className="border border-purple-500/50 hover:border-purple-400 text-purple-200 hover:text-white px-6 py-3 rounded-xl transition-colors"
          >
            Numere Angelice
          </Link>
        </div>
      </div>
    </div>
  );
}
