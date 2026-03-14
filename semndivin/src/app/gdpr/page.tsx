import { Metadata } from "next";
import Link from "next/link";
import { SITE_URL, SITE_NAME } from "@/lib/seo";

export const metadata: Metadata = {
  title: "GDPR — Protecția Datelor Personale",
  description: `Informații despre conformitatea ${SITE_NAME} cu Regulamentul General privind Protecția Datelor (GDPR). Drepturile tale și cum le exerciți.`,
  alternates: { canonical: `${SITE_URL}/gdpr` },
};

export default function GDPRPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      <nav className="text-purple-400 text-sm mb-8">
        <ol className="flex gap-2">
          <li><Link href="/" className="hover:text-purple-200">Acasă</Link></li>
          <li>/</li>
          <li className="text-purple-200">GDPR</li>
        </ol>
      </nav>

      <h1 className="text-4xl font-bold text-white mb-2">GDPR — Protecția Datelor cu Caracter Personal</h1>
      <p className="text-purple-400 mb-10">Ultima actualizare: 1 ianuarie 2024</p>

      <div className="bg-gradient-to-br from-purple-900/40 to-indigo-900/40 border border-purple-600/30 rounded-2xl p-6 mb-10">
        <p className="text-purple-100 leading-relaxed">
          <strong className="text-white">SemnDivin.ro</strong> se angajează să respecte și să protejeze
          confidențialitatea datelor personale ale utilizatorilor săi în conformitate cu{" "}
          <strong className="text-white">Regulamentul (UE) 2016/679</strong> al Parlamentului European și al
          Consiliului (GDPR) și cu legislația română aplicabilă.
        </p>
      </div>

      <div className="space-y-8 text-purple-200">
        <section>
          <h2 className="text-2xl font-semibold text-white mb-3">Principiile GDPR pe care le Respectăm</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            {[
              { icon: "⚖️", title: "Legalitate și Transparență", desc: "Prelucrăm datele doar pe baze legale clare și te informăm deschis" },
              { icon: "🎯", title: "Limitarea Scopului", desc: "Colectăm date doar pentru scopuri specifice și legitime" },
              { icon: "📏", title: "Minimizarea Datelor", desc: "Colectăm doar datele strict necesare" },
              { icon: "✅", title: "Exactitate", desc: "Menținem datele exacte și actualizate" },
              { icon: "⏱️", title: "Limitarea Stocării", desc: "Păstrăm datele doar cât este necesar" },
              { icon: "🔒", title: "Securitate", desc: "Protejăm datele prin măsuri tehnice adecvate" },
            ].map((p) => (
              <div key={p.title} className="flex gap-3 bg-purple-900/20 border border-purple-700/30 rounded-xl p-4">
                <span className="text-2xl shrink-0">{p.icon}</span>
                <div>
                  <strong className="text-white block text-sm">{p.title}</strong>
                  <span className="text-sm">{p.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-3">Drepturile Tale conform GDPR</h2>
          <div className="space-y-4">
            {[
              {
                right: "Dreptul la Informare (Art. 13-14 GDPR)",
                desc: "Ai dreptul să fii informat cu privire la datele colectate, scopul și temeiul legal al prelucrării.",
              },
              {
                right: "Dreptul de Acces (Art. 15 GDPR)",
                desc: "Poți solicita o copie a datelor personale pe care le deținem despre tine. Vom răspunde în termen de 30 de zile.",
              },
              {
                right: "Dreptul la Rectificare (Art. 16 GDPR)",
                desc: "Poți solicita corectarea datelor inexacte sau completarea datelor incomplete.",
              },
              {
                right: "Dreptul la Ștergere / Dreptul la Uitare (Art. 17 GDPR)",
                desc: "Poți solicita ștergerea datelor tale atunci când nu mai sunt necesare, și-ai retras consimțământul sau te-ai opus prelucrării.",
              },
              {
                right: "Dreptul la Restricționarea Prelucrării (Art. 18 GDPR)",
                desc: "Poți solicita limitarea prelucrării datelor tale în anumite circumstanțe.",
              },
              {
                right: "Dreptul la Portabilitatea Datelor (Art. 20 GDPR)",
                desc: "Poți primi datele tale într-un format structurat, utilizat frecvent, care poate fi citit automat.",
              },
              {
                right: "Dreptul de Opoziție (Art. 21 GDPR)",
                desc: "Te poți opune prelucrării datelor bazate pe interesul legitim sau în scopuri de marketing direct.",
              },
              {
                right: "Dreptul de a Nu Face Obiectul Deciziilor Automate (Art. 22 GDPR)",
                desc: "Ai dreptul de a nu fi supus unor decizii luate exclusiv prin mijloace automate.",
              },
            ].map((item) => (
              <div key={item.right} className="bg-purple-900/20 border border-purple-700/30 rounded-xl p-5">
                <h3 className="text-white font-semibold mb-2">{item.right}</h3>
                <p className="text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-3">Cum Îți Exerciți Drepturile</h2>
          <p>
            Pentru a-ți exercita oricare dintre drepturile de mai sus, trimite o solicitare scrisă la:
          </p>
          <div className="mt-4 bg-purple-900/30 border border-purple-600/30 rounded-xl p-5">
            <p className="text-white font-medium">SemnDivin.ro — Responsabil GDPR</p>
            <p className="mt-1">Email:{" "}
              <a href="mailto:gdpr@semndivin.ro" className="text-purple-300 hover:text-purple-100 underline">
                gdpr@semndivin.ro
              </a>
            </p>
          </div>
          <p className="mt-4">
            Vom răspunde solicitărilor tale în termen de <strong className="text-white">30 de zile calendaristice</strong>.
            În cazuri complexe, termenul poate fi prelungit cu încă 60 de zile, cu notificarea prealabilă.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-3">Transferuri Internaționale de Date</h2>
          <p>
            Serviciile noastre de hosting pot implica transferuri de date în afara SEE (Spațiul Economic European).
            Aceste transferuri se realizează cu garanții adecvate conform GDPR (clauze contractuale standard
            aprobate de Comisia Europeană).
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-3">Dreptul de a Depune o Plângere</h2>
          <p>
            Dacă consideri că prelucrarea datelor tale încalcă GDPR, ai dreptul să depui o plângere la
            autoritatea de supraveghere competentă din România:
          </p>
          <div className="mt-4 bg-purple-900/20 border border-purple-700/30 rounded-xl p-5">
            <p className="text-white font-medium">
              Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal (ANSPDCP)
            </p>
            <p className="mt-1">
              Website:{" "}
              <a
                href="https://www.dataprotection.ro"
                className="text-purple-300 hover:text-purple-100 underline"
                rel="noopener noreferrer"
                target="_blank"
              >
                www.dataprotection.ro
              </a>
            </p>
            <p>B-dul Magheru 28-30, Sector 1, București, 010336</p>
          </div>
        </section>
      </div>
    </div>
  );
}
