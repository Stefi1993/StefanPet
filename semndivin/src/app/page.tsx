import Link from "next/link";
import { Metadata } from "next";
import { getFeaturedNumbers, getSlug } from "@/lib/angel-numbers";
import { SITE_URL, SITE_NAME, generateStructuredData } from "@/lib/seo";

export const metadata: Metadata = {
  title: `${SITE_NAME} — Spiritualitate, Numere Angelice și Mesaje Divine`,
  description:
    "Descoperă semnificația spirituală a numerelor angelice, simboluri divine și mesaje din univers. Ghid complet de spiritualitate și numerologie în limba română.",
  keywords:
    "numere angelice, spiritualitate, numerologie, semnificatie numere, ingeri pazitori, mesaje divine, spiritualitate Romania, semne divine",
  openGraph: {
    title: `${SITE_NAME} — Spiritualitate și Numere Angelice`,
    description:
      "Ghid complet de spiritualitate și numerologie angelică în limba română.",
    url: SITE_URL,
  },
};

const articles = [
  {
    title: "Ce sunt Numerele Angelice?",
    excerpt:
      "Numerele angelice sunt secvențe repetitive pe care îngerii le folosesc pentru a comunica cu noi. Află cum să le recunoști și să le interpretezi.",
    icon: "👼",
    href: "/semnificatie-numere-angelice",
  },
  {
    title: "Cum să Comunici cu Îngerii Tăi",
    excerpt:
      "Tehnici dovedite de meditație și rugăciune pentru a deschide canalul de comunicare cu ghizii spirituali și îngerii tăi păzitori.",
    icon: "🙏",
    href: "/semnificatie-numere-angelice",
  },
  {
    title: "Numerologia și Calea Vieții",
    excerpt:
      "Numărul căii vieții tale îți revelă misiunea sufletului și lecțiile karmice pe care ai venit să le înveți în această incarnare.",
    icon: "🌟",
    href: "/semnificatie-numere-angelice",
  },
  {
    title: "Sincronicitate și Semne Divine",
    excerpt:
      "Carl Jung a definit sincronicitatea ca coincidențe semnificative. Descoperă cum universul îți trimite semne prin numere, animale și evenimente.",
    icon: "🌌",
    href: "/semnificatie-numere-angelice",
  },
  {
    title: "Numerele Maestru: 11, 22, 33",
    excerpt:
      "Numerele maestru sunt cele mai puternice vibrații numerice. Ele poartă un potențial spiritual extraordinar și o misiune divină specială.",
    icon: "💫",
    href: "/semnificatie-numere-angelice/semnificatia-numarului-angelic-11",
  },
  {
    title: "Chakrele și Vibrațiile Numerice",
    excerpt:
      "Fiecare chakră rezonează cu anumite numere și frecvențe. Află cum să îți aliniezi centrele energetice prin numerologie.",
    icon: "🌈",
    href: "/semnificatie-numere-angelice",
  },
];

export default function HomePage() {
  const featuredNumbers = getFeaturedNumbers();

  const faqSchema = generateStructuredData("FAQPage", {
    mainEntity: [
      {
        "@type": "Question",
        name: "Ce sunt numerele angelice?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Numerele angelice sunt secvențe numerice repetitive prin care îngerii și ghizii spirituali comunică mesaje divine. Când observi același număr în mod repetat, acesta poartă un mesaj special pentru tine.",
        },
      },
      {
        "@type": "Question",
        name: "Cum știu dacă văd un număr angelic?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Dacă observi același număr de mai multe ori pe zi – pe ceas, plăci de înmatriculare, chitanțe, numere de telefon – este un semn că îngerii încearcă să îți transmită un mesaj.",
        },
      },
      {
        "@type": "Question",
        name: "Care este cel mai puternic număr angelic?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Numerele cu cifre repetitive (111, 222, 333, 444, 555, 666, 777, 888, 999) sunt considerate cele mai puternice numere angelice, deoarece intensifică energia cifrei respective.",
        },
      },
    ],
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-600/20 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-purple-800/40 border border-purple-600/30 rounded-full px-4 py-1.5 text-purple-200 text-sm mb-6">
            <span>✨</span>
            <span>Ghidul tău spiritual în limba română</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Descoperă{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Mesajele Divine
            </span>{" "}
            din Jurul Tău
          </h1>

          <p className="text-lg sm:text-xl text-purple-200 max-w-3xl mx-auto mb-10 leading-relaxed">
            Numerele angelice nu sunt coincidențe — sunt mesaje de la îngerii
            tăi păzitori. Descoperă semnificația spirituală a fiecărui număr de
            la 1 la 999 și înțelege ghidarea divină din viața ta.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/semnificatie-numere-angelice"
              className="inline-flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-500 text-white font-semibold px-8 py-4 rounded-xl text-lg transition-all duration-200 shadow-lg"
            >
              🔮 Explorează Numerele Angelice
            </Link>
            <Link
              href="/despre-noi"
              className="inline-flex items-center justify-center gap-2 border border-purple-500/50 hover:border-purple-400 text-purple-200 hover:text-white font-semibold px-8 py-4 rounded-xl text-lg transition-all duration-200 hover:bg-purple-800/30"
            >
              Află Mai Multe
            </Link>
          </div>
        </div>
      </section>

      {/* Number Search */}
      <section className="py-12 bg-purple-900/20 border-y border-purple-800/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-white mb-2">
              Caută Numărul Tău Angelic
            </h2>
            <p className="text-purple-300">
              Introdu orice număr de la 1 la 999 pentru a afla semnificația sa spirituală
            </p>
          </div>
          <form
            action="/semnificatie-numere-angelice"
            method="get"
            className="flex gap-3 max-w-md mx-auto"
          >
            <input
              type="number"
              name="numar"
              min="1"
              max="999"
              placeholder="Introdu un număr (1-999)"
              className="flex-1 bg-purple-900/40 border border-purple-600/40 text-white placeholder-purple-400 rounded-xl px-4 py-3 focus:outline-none focus:border-purple-400"
              aria-label="Numărul angelic de căutat"
            />
            <button
              type="submit"
              className="bg-purple-600 hover:bg-purple-500 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
            >
              Caută →
            </button>
          </form>
        </div>
      </section>

      {/* Featured Numbers */}
      <section className="py-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Numere Angelice Populare
          </h2>
          <p className="text-purple-300 max-w-2xl mx-auto">
            Descoperă semnificația celor mai cunoscute numere angelice
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {featuredNumbers.map((an) => (
            <Link
              key={an.number}
              href={`/semnificatie-numere-angelice/${getSlug(an.number)}`}
              className="group bg-purple-900/30 hover:bg-purple-800/50 border border-purple-700/30 hover:border-purple-500/50 rounded-xl p-5 text-center transition-all duration-200"
            >
              <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-purple-300 to-pink-300 mb-2">
                {an.number}
              </div>
              <p className="text-purple-300 text-xs leading-tight">
                {an.shortDescription.slice(0, 55)}...
              </p>
            </Link>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            href="/semnificatie-numere-angelice"
            className="inline-flex items-center gap-2 text-purple-300 hover:text-white border border-purple-600/40 hover:border-purple-400 px-6 py-3 rounded-xl transition-all"
          >
            Vezi Toate Numerele (1-999) →
          </Link>
        </div>
      </section>

      {/* Articles */}
      <section className="py-16 bg-indigo-950/50 border-y border-purple-800/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ghid de Spiritualitate
            </h2>
            <p className="text-purple-300 max-w-2xl mx-auto">
              Articole și ghiduri despre spiritualitate, numerologie și mesaje divine
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <Link
                key={article.title}
                href={article.href}
                className="group bg-purple-900/20 hover:bg-purple-800/30 border border-purple-700/30 hover:border-purple-500/40 rounded-xl p-6 transition-all duration-200"
              >
                <div className="text-3xl mb-3">{article.icon}</div>
                <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-purple-200">
                  {article.title}
                </h3>
                <p className="text-purple-300 text-sm leading-relaxed">
                  {article.excerpt}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Întrebări Frecvente</h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {[
            {
              q: "Ce sunt numerele angelice?",
              a: "Numerele angelice sunt secvențe numerice repetitive prin care îngerii și ghizii spirituali comunică mesaje divine. Când observi același număr în mod repetat – pe ceas, plăci de înmatriculare, chitanțe – acesta poartă un mesaj special pentru tine.",
            },
            {
              q: "Cum știu dacă văd un număr angelic?",
              a: "Dacă observi același număr de mai multe ori pe zi în contexte diferite, este un semn că îngerii încearcă să îți transmită un mesaj. Intuiția ta joacă un rol important – dacă numărul îți atrage atenția în mod special, ascultă-ți sufletul.",
            },
            {
              q: "Care este cel mai puternic număr angelic?",
              a: "Numerele cu cifre repetitive (111, 222, 333, 444, 555, 666, 777, 888, 999) sunt considerate cele mai puternice, deoarece intensifică energia cifrei respective. Numerele maestru 11, 22 și 33 sunt de asemenea extrem de puternice.",
            },
            {
              q: "Trebuie să fiu spiritual pentru a înțelege numerele angelice?",
              a: "Nu este necesar. Oricine poate beneficia de ghidarea numerologică, indiferent de credință sau nivel de spiritualitate. Numerele angelice sunt semne universale disponibile tuturor celor deschiși să le primească.",
            },
          ].map((faq, i) => (
            <details
              key={i}
              className="group bg-purple-900/20 border border-purple-700/30 rounded-xl"
            >
              <summary className="flex justify-between items-center p-5 cursor-pointer text-white font-medium hover:text-purple-200 list-none">
                {faq.q}
                <span className="text-purple-400 ml-4 shrink-0">▼</span>
              </summary>
              <div className="px-5 pb-5 text-purple-300 text-sm leading-relaxed">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-purple-900/40 via-indigo-900/40 to-purple-900/40 border-y border-purple-700/30">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Vrei să Afli Semnificația Numărului Tău?
          </h2>
          <p className="text-purple-200 mb-8 text-lg">
            Avem semnificația spirituală completă pentru toate numerele de la 1 la 999.
          </p>
          <Link
            href="/semnificatie-numere-angelice"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold px-10 py-4 rounded-xl text-lg transition-all duration-200 shadow-xl"
          >
            ✨ Caută Numărul Tău Acum
          </Link>
        </div>
      </section>
    </>
  );
}
