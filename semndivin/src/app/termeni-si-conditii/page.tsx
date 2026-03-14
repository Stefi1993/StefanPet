import { Metadata } from "next";
import Link from "next/link";
import { SITE_URL, SITE_NAME } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Termeni și Condiții",
  description: `Termenii și condițiile de utilizare a site-ului ${SITE_NAME}. Citește cu atenție înainte de a folosi serviciile noastre.`,
  alternates: { canonical: `${SITE_URL}/termeni-si-conditii` },
  robots: { index: true, follow: true },
};

export default function TermeniConditiiPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      <nav className="text-purple-400 text-sm mb-8">
        <ol className="flex gap-2">
          <li><Link href="/" className="hover:text-purple-200">Acasă</Link></li>
          <li>/</li>
          <li className="text-purple-200">Termeni și Condiții</li>
        </ol>
      </nav>

      <h1 className="text-4xl font-bold text-white mb-2">Termeni și Condiții</h1>
      <p className="text-purple-400 mb-10">Ultima actualizare: 1 ianuarie 2024</p>

      <div className="prose prose-invert max-w-none space-y-8 text-purple-200">
        <section>
          <h2 className="text-2xl font-semibold text-white mb-3">1. Acceptarea Termenilor</h2>
          <p>
            Prin accesarea și utilizarea site-ului web <strong className="text-white">semndivin.ro</strong> (denumit în
            continuare "Site-ul"), acceptați în mod expres și fără rezerve prezentele Termeni și Condiții de utilizare.
            Dacă nu sunteți de acord cu acești termeni, vă rugăm să nu utilizați Site-ul.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-3">2. Descrierea Serviciilor</h2>
          <p>
            SemnDivin.ro este un site web cu caracter informativ și spiritual care oferă:
          </p>
          <ul className="list-disc pl-6 space-y-1 mt-3">
            <li>Informații despre semnificația spirituală a numerelor angelice (1-999)</li>
            <li>Articole și ghiduri despre spiritualitate, numerologie și dezvoltare personală</li>
            <li>Resurse educative despre comunicarea cu ghizii spirituali</li>
          </ul>
          <p className="mt-3">
            <strong className="text-white">Important:</strong> Conținutul prezentat are exclusiv caracter informativ
            și spiritual. Nu reprezintă sfaturi medicale, psihologice, juridice sau financiare.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-3">3. Proprietate Intelectuală</h2>
          <p>
            Tot conținutul publicat pe SemnDivin.ro — inclusiv texte, grafice, logo-uri, imagini și
            codul sursă — este proprietatea SemnDivin.ro și este protejat de legile privind drepturile
            de autor aplicabile în România și la nivel internațional.
          </p>
          <p className="mt-3">
            Este interzisă reproducerea, distribuirea, transmiterea sau modificarea oricărui conținut
            fără acordul prealabil scris al SemnDivin.ro.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-3">4. Limitarea Răspunderii</h2>
          <p>
            SemnDivin.ro nu garantează exactitatea, completitudinea sau actualitatea informațiilor publicate.
            Informațiile privind numerele angelice au caracter spiritual și interpretativ, nu factual-științific.
          </p>
          <p className="mt-3">
            SemnDivin.ro nu poate fi tras la răspundere pentru nicio pierdere sau daună rezultată din:
          </p>
          <ul className="list-disc pl-6 space-y-1 mt-3">
            <li>Utilizarea sau imposibilitatea utilizării Site-ului</li>
            <li>Decizii luate pe baza informațiilor prezentate pe Site</li>
            <li>Erori sau omisiuni în conținut</li>
            <li>Întreruperi temporare ale serviciului</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-3">5. Legăturile Externe</h2>
          <p>
            Site-ul poate conține linkuri către site-uri web externe. SemnDivin.ro nu controlează și nu
            își asumă responsabilitatea pentru conținutul sau practicile de confidențialitate ale acestor site-uri.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-3">6. Modificarea Termenilor</h2>
          <p>
            SemnDivin.ro își rezervă dreptul de a modifica acești Termeni și Condiții în orice moment.
            Modificările intră în vigoare la data publicării pe Site. Continuarea utilizării Site-ului
            după publicarea modificărilor constituie acceptarea noilor termeni.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-3">7. Legea Aplicabilă</h2>
          <p>
            Prezentele Termeni și Condiții sunt guvernate de legislația română. Orice litigii vor fi
            soluționate de instanțele competente din România.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-3">8. Contact</h2>
          <p>
            Pentru orice întrebări referitoare la acești termeni, ne puteți contacta la:{" "}
            <a href="mailto:contact@semndivin.ro" className="text-purple-300 hover:text-purple-100 underline">
              contact@semndivin.ro
            </a>
          </p>
        </section>
      </div>

      <div className="mt-12 pt-8 border-t border-purple-800/30 flex flex-wrap gap-4">
        <Link href="/politica-de-confidentialitate" className="text-purple-300 hover:text-purple-100 text-sm">
          Politica de Confidențialitate
        </Link>
        <Link href="/politica-de-cookies" className="text-purple-300 hover:text-purple-100 text-sm">
          Politica de Cookies
        </Link>
        <Link href="/gdpr" className="text-purple-300 hover:text-purple-100 text-sm">
          GDPR
        </Link>
      </div>
    </div>
  );
}
