import { Metadata } from "next";
import Link from "next/link";
import { SITE_URL, SITE_NAME } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Politica de Cookies",
  description: `Politica de cookies a ${SITE_NAME}. Aflați ce cookie-uri folosim și cum le puteți gestiona.`,
  alternates: { canonical: `${SITE_URL}/politica-de-cookies` },
};

const cookieTypes = [
  {
    name: "Cookie-uri Strict Necesare",
    required: true,
    retention: "Sesiune / 1 an",
    description: "Esențiale pentru funcționarea de bază a site-ului. Nu pot fi dezactivate.",
    examples: [
      { name: "cookie-consent", purpose: "Stochează preferința ta de consimțământ pentru cookie-uri" },
      { name: "__Host-next-auth.csrf-token", purpose: "Protecție CSRF pentru securitatea formularelor" },
    ],
  },
  {
    name: "Cookie-uri de Performanță",
    required: false,
    retention: "2 ani",
    description: "Ne ajută să înțelegem cum folosești site-ul pentru a îmbunătăți experiența.",
    examples: [
      { name: "_ga", purpose: "Google Analytics — identificarea utilizatorilor unici" },
      { name: "_ga_*", purpose: "Google Analytics — păstrarea stării sesiunii" },
    ],
  },
  {
    name: "Cookie-uri Funcționale",
    required: false,
    retention: "1 an",
    description: "Permit funcționalități îmbunătățite și personalizare.",
    examples: [
      { name: "user-preferences", purpose: "Stochează preferințele de vizualizare ale utilizatorului" },
    ],
  },
];

export default function PoliticaCookiesPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      <nav className="text-purple-400 text-sm mb-8">
        <ol className="flex gap-2">
          <li><Link href="/" className="hover:text-purple-200">Acasă</Link></li>
          <li>/</li>
          <li className="text-purple-200">Politica de Cookies</li>
        </ol>
      </nav>

      <h1 className="text-4xl font-bold text-white mb-2">Politica de Cookies</h1>
      <p className="text-purple-400 mb-10">Ultima actualizare: 1 ianuarie 2024</p>

      <div className="space-y-8 text-purple-200">
        <section>
          <h2 className="text-2xl font-semibold text-white mb-3">Ce sunt Cookie-urile?</h2>
          <p>
            Cookie-urile sunt mici fișiere text stocate pe dispozitivul tău atunci când vizitezi un site web.
            Ele permit site-ului să rețină informații despre vizita ta, precum preferințele tale de limbă sau
            starea de autentificare, pentru a face experiența mai plăcută și mai eficientă.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-3">Cookie-urile pe care le Folosim</h2>
          <div className="space-y-6 mt-4">
            {cookieTypes.map((type) => (
              <div key={type.name} className="bg-purple-900/20 border border-purple-700/30 rounded-2xl p-6">
                <div className="flex items-start justify-between mb-3 gap-3">
                  <h3 className="text-white font-semibold text-lg">{type.name}</h3>
                  <span
                    className={`shrink-0 text-xs px-3 py-1 rounded-full font-medium ${
                      type.required
                        ? "bg-green-900/50 text-green-300 border border-green-700/40"
                        : "bg-purple-900/50 text-purple-300 border border-purple-600/40"
                    }`}
                  >
                    {type.required ? "Obligatoriu" : "Opțional"}
                  </span>
                </div>
                <p className="text-sm mb-3">{type.description}</p>
                <p className="text-purple-400 text-xs mb-4">Perioadă de retenție: {type.retention}</p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-purple-700/30">
                        <th className="text-left text-purple-400 py-2 pr-4">Nume Cookie</th>
                        <th className="text-left text-purple-400 py-2">Scop</th>
                      </tr>
                    </thead>
                    <tbody>
                      {type.examples.map((ex) => (
                        <tr key={ex.name} className="border-b border-purple-800/20">
                          <td className="py-2 pr-4 font-mono text-purple-300 text-xs">{ex.name}</td>
                          <td className="py-2 text-purple-200">{ex.purpose}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-3">Cum să Gestionezi Cookie-urile</h2>
          <p className="mb-4">
            Poți controla și/sau șterge cookie-urile după cum dorești. Poți șterge toate cookie-urile
            existente pe dispozitivul tău și poți seta majoritatea browserelor să blocheze instalarea lor.
          </p>
          <p className="mb-4">
            <strong className="text-white">Atenție:</strong> Dacă blochezi cookie-urile strict necesare,
            unele funcționalități ale site-ului pot fi afectate.
          </p>
          <p>Instrucțiuni pentru browserele populare:</p>
          <ul className="list-disc pl-6 space-y-2 mt-3">
            <li>
              <strong className="text-white">Google Chrome:</strong> Setări → Confidențialitate și securitate → Cookie-uri
            </li>
            <li>
              <strong className="text-white">Mozilla Firefox:</strong> Opțiuni → Confidențialitate și securitate → Cookie-uri
            </li>
            <li>
              <strong className="text-white">Safari:</strong> Preferințe → Confidențialitate → Gestionare date site
            </li>
            <li>
              <strong className="text-white">Microsoft Edge:</strong> Setări → Cookie-uri și permisiuni site
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-3">Cookie-uri Terțe Părți</h2>
          <p>
            Utilizăm servicii terțe care pot instala propriile cookie-uri:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-3">
            <li>
              <strong className="text-white">Google Analytics:</strong> analiză trafic web (
              <a
                href="https://policies.google.com/privacy"
                className="text-purple-300 underline hover:text-purple-100"
                rel="noopener noreferrer"
                target="_blank"
              >
                Politica de confidențialitate Google
              </a>)
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-3">Contact</h2>
          <p>
            Pentru întrebări despre utilizarea cookie-urilor:{" "}
            <a href="mailto:contact@semndivin.ro" className="text-purple-300 hover:text-purple-100 underline">
              contact@semndivin.ro
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}
