import { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/seo";
import SearchClient from "./SearchClient";

export const metadata: Metadata = {
  title: "Căutare — Găsește Numărul Angelic sau Articolul Dorit",
  description:
    "Caută în baza noastră de date cu 999 numere angelice și articole spirituale. Găsește rapid semnificația oricărui număr sau subiect spiritual.",
  alternates: { canonical: `${SITE_URL}/cautare` },
  robots: { index: false, follow: true },
};

export default function SearchPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <nav className="text-purple-400 text-sm mb-8">
        <ol className="flex gap-2">
          <li><Link href="/" className="hover:text-purple-200">Acasă</Link></li>
          <li>/</li>
          <li className="text-purple-200">Căutare</li>
        </ol>
      </nav>

      <div className="text-center mb-10">
        <div className="text-4xl mb-4">🔍</div>
        <h1 className="text-4xl font-bold text-white mb-4">Căutare</h1>
        <p className="text-purple-200">
          Caută printre 999 numere angelice și articolele noastre spirituale
        </p>
      </div>

      <SearchClient />
    </div>
  );
}
