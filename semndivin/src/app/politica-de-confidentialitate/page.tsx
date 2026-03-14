import { Metadata } from "next";
import Link from "next/link";
import { SITE_URL, SITE_NAME } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Politica de Confidențialitate",
  description: `Politica de confidențialitate a ${SITE_NAME}. Află cum colectăm, folosim și protejăm datele tale personale.`,
  alternates: { canonical: `${SITE_URL}/politica-de-confidentialitate` },
};

export default function PoliticaConfidentialitatePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      <nav className="text-purple-400 text-sm mb-8">
        <ol className="flex gap-2">
          <li><Link href="/" className="hover:text-purple-200">Acasă</Link></li>
          <li>/</li>
          <li className="text-purple-200">Politica de Confidențialitate</li>
        </ol>
      </nav>

      <h1 className="text-4xl font-bold text-white mb-2">Politica de Confidențialitate</h1>
      <p className="text-purple-400 mb-10">Ultima actualizare: 1 ianuarie 2024</p>

      <div className="space-y-8 text-purple-200">
        <section>
          <h2 className="text-2xl font-semibold text-white mb-3">1. Operatorul de Date</h2>
          <p>
            Operatorul de date cu caracter personal este <strong className="text-white">SemnDivin.ro</strong>,
            cu sediul în România. Puteți lua legătura cu noi la adresa de email:{" "}
            <a href="mailto:contact@semndivin.ro" className="text-purple-300 hover:text-purple-100 underline">
              contact@semndivin.ro
            </a>
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-3">2. Ce Date Colectăm</h2>
          <p>Colectăm următoarele categorii de date:</p>
          <ul className="list-disc pl-6 space-y-2 mt-3">
            <li>
              <strong className="text-white">Date tehnice:</strong> adresa IP, tipul browserului, sistemul de
              operare, paginile vizitate, durata vizitei
            </li>
            <li>
              <strong className="text-white">Date de contact:</strong> adresa de email (dacă ne contactați)
            </li>
            <li>
              <strong className="text-white">Date de utilizare:</strong> preferințe de navigare, interacțiuni cu site-ul
            </li>
          </ul>
          <p className="mt-3">
            <strong className="text-white">Nu colectăm</strong> date sensibile, date despre copii sub 16 ani
            sau date de plată.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-3">3. Scopul Prelucrării</h2>
          <p>Datele tale sunt prelucrate pentru:</p>
          <ul className="list-disc pl-6 space-y-2 mt-3">
            <li>Furnizarea serviciilor site-ului și îmbunătățirea experienței utilizatorului</li>
            <li>Analizarea traficului și comportamentului pe site (statistici anonimizate)</li>
            <li>Răspunsul la solicitările de contact</li>
            <li>Respectarea obligațiilor legale</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-3">4. Temeiul Legal</h2>
          <p>Prelucrăm datele tale pe baza:</p>
          <ul className="list-disc pl-6 space-y-2 mt-3">
            <li><strong className="text-white">Consimțământului</strong> — pentru cookie-uri non-esențiale</li>
            <li><strong className="text-white">Interesului legitim</strong> — pentru securitatea și funcționarea site-ului</li>
            <li><strong className="text-white">Obligației legale</strong> — pentru conformitatea cu legislația aplicabilă</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-3">5. Partajarea Datelor</h2>
          <p>
            Nu vindem și nu închiriem datele tale personale. Putem partaja date cu:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-3">
            <li>Furnizori de servicii tehnice (hosting, analiză web) — în baza contractelor de prelucrare a datelor</li>
            <li>Autorități publice — doar când suntem obligați legal</li>
          </ul>
          <p className="mt-3">
            Furnizorii noștri principali includ: Vercel (hosting), Google Analytics (statistici anonimizate).
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-3">6. Drepturile Tale (GDPR)</h2>
          <p>Conform Regulamentului GDPR, ai dreptul la:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            {[
              { right: "Acces", desc: "Să știi ce date deținem despre tine" },
              { right: "Rectificare", desc: "Să corectezi datele incorecte" },
              { right: "Ștergere", desc: "Să soliciți ștergerea datelor (dreptul la uitare)" },
              { right: "Restricționare", desc: "Să limitezi prelucrarea datelor" },
              { right: "Portabilitate", desc: "Să primești datele într-un format lizibil automat" },
              { right: "Opoziție", desc: "Să te opui prelucrării în anumite cazuri" },
            ].map((item) => (
              <div key={item.right} className="bg-purple-900/30 border border-purple-700/30 rounded-xl p-4">
                <strong className="text-white block">{item.right}</strong>
                <span className="text-sm">{item.desc}</span>
              </div>
            ))}
          </div>
          <p className="mt-4">
            Pentru exercitarea drepturilor, contactează-ne la:{" "}
            <a href="mailto:gdpr@semndivin.ro" className="text-purple-300 hover:text-purple-100 underline">
              gdpr@semndivin.ro
            </a>
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-3">7. Securitatea Datelor</h2>
          <p>
            Implementăm măsuri tehnice și organizatorice adecvate pentru protejarea datelor tale: conexiune
            HTTPS, restricții de acces, monitorizare de securitate. În caz de incident de securitate, te vom
            notifica conform legislației GDPR.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-3">8. Retenția Datelor</h2>
          <p>
            Păstrăm datele tale doar atât timp cât este necesar scopului colectării sau cât impune legislația:
          </p>
          <ul className="list-disc pl-6 space-y-1 mt-3">
            <li>Loguri tehnice: 30 de zile</li>
            <li>Emailuri de contact: 2 ani</li>
            <li>Cookie-uri: conform politicii de cookies</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-3">9. Reclamații</h2>
          <p>
            Dacă ai reclamații privind prelucrarea datelor, poți contacta Autoritatea Națională de
            Supraveghere a Prelucrării Datelor cu Caracter Personal (ANSPDCP) la{" "}
            <a
              href="https://www.dataprotection.ro"
              className="text-purple-300 hover:text-purple-100 underline"
              rel="noopener noreferrer"
              target="_blank"
            >
              www.dataprotection.ro
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
