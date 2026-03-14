import { Metadata } from "next";
import Link from "next/link";
import { SITE_URL, SITE_NAME } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Despre Noi — Misiunea Noastră Spirituală",
  description: `Descoperă povestea și misiunea ${SITE_NAME}. Suntem dedicați să te ajutăm să înțelegi mesajele divine din numerele angelice.`,
  alternates: { canonical: `${SITE_URL}/despre-noi` },
};

export default function DespreNoiPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      <nav className="text-purple-400 text-sm mb-8">
        <ol className="flex gap-2">
          <li><Link href="/" className="hover:text-purple-200">Acasă</Link></li>
          <li>/</li>
          <li className="text-purple-200">Despre Noi</li>
        </ol>
      </nav>

      {/* Hero */}
      <div className="text-center mb-14">
        <div className="text-6xl mb-4">✨</div>
        <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
          Despre{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
            SemnDivin.ro
          </span>
        </h1>
        <p className="text-purple-200 text-lg max-w-2xl mx-auto leading-relaxed">
          Suntem un ghid spiritual dedicat să te ajute să înțelegi mesajele divine
          pe care universul le transmite prin numerele din jurul tău.
        </p>
      </div>

      <div className="space-y-10 text-purple-200">
        <section className="bg-purple-900/20 border border-purple-700/30 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-4">Misiunea Noastră</h2>
          <p className="leading-relaxed">
            La SemnDivin.ro, credem că universul comunică cu noi în permanență — prin sincronicități,
            vise, și mai ales prin <strong className="text-white">numerele angelice</strong>. Misiunea
            noastră este să îți oferim un ghid complet și accesibil pentru interpretarea acestor mesaje
            divine, în limba română.
          </p>
          <p className="leading-relaxed mt-4">
            Am creat cel mai complet ghid de numere angelice în română, cu semnificația spirituală pentru
            toate numerele de la <strong className="text-white">1 la 999</strong>, pentru ca tu să poți
            înțelege și integra ghidarea angelică în viața ta de zi cu zi.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-6">Ce Oferim</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { icon: "🔢", title: "999 Numere Angelice", desc: "Semnificația spirituală completă pentru fiecare număr de la 1 la 999" },
              { icon: "🌟", title: "Conținut în Română", desc: "Tot ghidul nostru spiritual este disponibil exclusiv în limba română" },
              { icon: "📚", title: "Ghiduri Spirituale", desc: "Articole aprofundate despre spiritualitate, numerologie și conectare divină" },
              { icon: "🆓", title: "Acces Gratuit", desc: "Toată informația este disponibilă gratuit, fără înregistrare" },
            ].map((item) => (
              <div key={item.title} className="flex gap-4 bg-purple-900/20 border border-purple-700/30 rounded-xl p-5">
                <span className="text-3xl shrink-0">{item.icon}</span>
                <div>
                  <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-gradient-to-br from-purple-900/40 to-indigo-900/40 border border-purple-600/30 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-4">Filosofia Noastră</h2>
          <p className="leading-relaxed">
            Credem că spiritualitatea este o călătorie personală și profundă. Nu impunem o singură cale —
            oferim informații, perspective și instrumente pentru ca tu să îți construiești propria relație
            cu divinul și cu ghizii spirituali.
          </p>
          <p className="leading-relaxed mt-4">
            Numerologia angelică nu înlocuiește sfaturile medicale, psihologice sau de altă natură profesională.
            Este un instrument de <strong className="text-white">reflecție spirituală</strong> și de conectare
            cu înțelepciunea universală.
          </p>
        </section>

        <div className="text-center pt-6">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-500 text-white font-semibold px-8 py-4 rounded-xl transition-colors"
          >
            Contactează-ne →
          </Link>
        </div>
      </div>
    </div>
  );
}
