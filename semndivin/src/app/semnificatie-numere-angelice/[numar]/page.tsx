import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getAngelNumber,
  numberFromSlug,
  getSlug,
  getRelatedNumbers,
  getAllAngelNumbers,
} from "@/lib/angel-numbers";
import {
  SITE_URL,
  SITE_NAME,
  generateBreadcrumbSchema,
  generateStructuredData,
} from "@/lib/seo";

interface PageProps {
  params: Promise<{ numar: string }>;
}

export async function generateStaticParams() {
  return getAllAngelNumbers().map((an) => ({
    numar: getSlug(an.number),
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { numar } = await params;
  const n = numberFromSlug(numar);
  if (!n) return { title: "Număr negăsit" };

  const an = getAngelNumber(n);
  if (!an) return { title: "Număr negăsit" };

  return {
    title: `Numărul Angelic ${n} — Semnificație Spirituală și Mesaj Divin`,
    description: an.shortDescription,
    keywords: [
      `numar angelic ${n}`,
      `semnificatia numarului ${n}`,
      `semnificatia numarului angelic ${n}`,
      `ce inseamna ${n}`,
      `numar ${n} spiritualitate`,
      ...an.keywords,
    ].join(", "),
    alternates: {
      canonical: `${SITE_URL}/semnificatie-numere-angelice/${getSlug(n)}`,
    },
    openGraph: {
      title: `Numărul Angelic ${n} — Semnificație și Mesaj Divin | ${SITE_NAME}`,
      description: an.shortDescription,
      url: `${SITE_URL}/semnificatie-numere-angelice/${getSlug(n)}`,
      type: "article",
    },
  };
}

export default async function AngelNumberPage({ params }: PageProps) {
  const { numar } = await params;
  const n = numberFromSlug(numar);

  if (!n) notFound();

  const an = getAngelNumber(n);
  if (!an) notFound();

  const relatedNumbers = getRelatedNumbers(n, 8);
  const prevNumber = n > 1 ? getAngelNumber(n - 1) : null;
  const nextNumber = n < 999 ? getAngelNumber(n + 1) : null;

  const breadcrumb = generateBreadcrumbSchema([
    { name: "Acasă", url: SITE_URL },
    { name: "Numere Angelice", url: `${SITE_URL}/semnificatie-numere-angelice` },
    { name: `Numărul ${n}`, url: `${SITE_URL}/semnificatie-numere-angelice/${getSlug(n)}` },
  ]);

  const articleSchema = generateStructuredData("Article", {
    headline: an.title,
    description: an.shortDescription,
    url: `${SITE_URL}/semnificatie-numere-angelice/${getSlug(n)}`,
    datePublished: "2024-01-01",
    dateModified: new Date().toISOString().split("T")[0],
    inLanguage: "ro",
    author: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
      logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.png` },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/semnificatie-numere-angelice/${getSlug(n)}`,
    },
    keywords: an.keywords.join(", "),
    articleSection: "Numere Angelice",
    about: {
      "@type": "Thing",
      name: `Numărul Angelic ${n}`,
      description: an.shortDescription,
    },
  });

  const digits = String(n).split("");

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      {/* Hero */}
      <section className="relative py-14 lg:py-20 border-b border-purple-800/30 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-indigo-600/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="text-purple-400 text-sm mb-6">
            <ol className="flex gap-2 flex-wrap">
              <li><Link href="/" className="hover:text-purple-200">Acasă</Link></li>
              <li aria-hidden>/</li>
              <li><Link href="/semnificatie-numere-angelice" className="hover:text-purple-200">Numere Angelice</Link></li>
              <li aria-hidden>/</li>
              <li className="text-purple-200">Numărul {n}</li>
            </ol>
          </nav>

          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-purple-800/40 border border-purple-600/30 rounded-full px-4 py-1.5 text-purple-300 text-sm mb-6">
              ✨ Număr Angelic Sacru
            </div>

            <div className="text-8xl lg:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-purple-300 via-pink-300 to-purple-400 mb-4">
              {n}
            </div>

            <h1 className="text-2xl lg:text-4xl font-bold text-white mb-4">
              Semnificația Numărului Angelic {n}
            </h1>

            <p className="text-purple-200 text-lg max-w-2xl mx-auto leading-relaxed">
              {an.shortDescription}
            </p>
          </div>

          {/* Digit breakdown */}
          {digits.length > 1 && (
            <div className="mt-8 flex justify-center gap-3 flex-wrap">
              {digits.map((d, i) => (
                <Link
                  key={i}
                  href={`/semnificatie-numere-angelice/${getSlug(parseInt(d))}`}
                  className="flex flex-col items-center bg-purple-900/40 border border-purple-600/30 rounded-xl px-5 py-3 hover:bg-purple-800/50 hover:border-purple-500/50 transition-all"
                >
                  <span className="text-2xl font-bold text-purple-200">{d}</span>
                  <span className="text-purple-400 text-xs mt-1">Cifra {i + 1}</span>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Main Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Article */}
          <div className="lg:col-span-2 space-y-8">
            {/* Spiritual Message */}
            <div className="bg-gradient-to-br from-purple-900/50 to-indigo-900/50 border border-purple-600/30 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">💌</span>
                <h2 className="text-xl font-bold text-white">Mesajul Spiritual</h2>
              </div>
              <p className="text-purple-100 leading-relaxed italic text-lg">
                "{an.spiritualMessage}"
              </p>
            </div>

            {/* Full Description */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">
                Ce înseamnă Numărul Angelic {n}?
              </h2>
              <div className="text-purple-200 leading-relaxed space-y-4">
                {an.fullDescription.split("\n").filter(Boolean).map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </div>

            {/* Meaning */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">
                Semnificația Numerologică
              </h2>
              <p className="text-purple-200 leading-relaxed">{an.meaning}</p>
            </div>

            {/* What to do */}
            <div className="bg-purple-900/20 border border-purple-700/30 rounded-2xl p-6">
              <h2 className="text-xl font-bold text-white mb-4">
                Ce să Faci Când Văzi Numărul {n}?
              </h2>
              <ul className="space-y-3 text-purple-200">
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-0.5">🙏</span>
                  <span>Oprește-te un moment și mulțumește îngerilor pentru ghidare</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-0.5">💭</span>
                  <span>Fii atent la gândurile și sentimentele tale din acel moment</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-0.5">📓</span>
                  <span>Notează-ți când și în ce context apare numărul {n}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-0.5">🧘</span>
                  <span>Meditează asupra mesajului și cum se aplică situației tale actuale</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-0.5">✨</span>
                  <span>Acționează conform ghidării divine cu încredere și deschidere</span>
                </li>
              </ul>
            </div>

            {/* Keywords */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-3">Cuvinte Cheie Spirituale</h3>
              <div className="flex flex-wrap gap-2">
                {an.keywords.map((kw) => (
                  <span
                    key={kw}
                    className="bg-purple-900/40 border border-purple-700/30 text-purple-200 text-sm px-3 py-1 rounded-full"
                  >
                    {kw}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            {/* Quick Info */}
            <div className="bg-purple-900/30 border border-purple-700/30 rounded-2xl p-5 sticky top-24">
              <h3 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">
                Informații Rapide
              </h3>
              <dl className="space-y-3 text-sm">
                <div>
                  <dt className="text-purple-400">Număr</dt>
                  <dd className="text-white font-semibold text-xl">{n}</dd>
                </div>
                <div>
                  <dt className="text-purple-400">Categorie</dt>
                  <dd className="text-purple-100">{an.category}</dd>
                </div>
                <div>
                  <dt className="text-purple-400">Cifre componente</dt>
                  <dd className="text-purple-100">{digits.join(", ")}</dd>
                </div>
                <div>
                  <dt className="text-purple-400">Suma cifrelor</dt>
                  <dd className="text-purple-100">
                    {digits.join(" + ")} ={" "}
                    {digits.reduce((a, d) => a + parseInt(d), 0)}
                  </dd>
                </div>
              </dl>

              {/* Navigation */}
              <div className="mt-5 pt-5 border-t border-purple-700/30 flex gap-3">
                {prevNumber && (
                  <Link
                    href={`/semnificatie-numere-angelice/${getSlug(prevNumber.number)}`}
                    className="flex-1 text-center bg-purple-900/40 hover:bg-purple-800/50 border border-purple-700/30 text-purple-200 text-sm py-2 rounded-lg transition-colors"
                  >
                    ← {prevNumber.number}
                  </Link>
                )}
                {nextNumber && (
                  <Link
                    href={`/semnificatie-numere-angelice/${getSlug(nextNumber.number)}`}
                    className="flex-1 text-center bg-purple-900/40 hover:bg-purple-800/50 border border-purple-700/30 text-purple-200 text-sm py-2 rounded-lg transition-colors"
                  >
                    {nextNumber.number} →
                  </Link>
                )}
              </div>

              <Link
                href="/semnificatie-numere-angelice"
                className="mt-3 block text-center text-purple-400 hover:text-purple-200 text-sm transition-colors"
              >
                ← Toate Numerele Angelice
              </Link>
            </div>
          </aside>
        </div>

        {/* Related Numbers */}
        {relatedNumbers.length > 0 && (
          <section className="mt-12 pt-8 border-t border-purple-800/30">
            <h2 className="text-2xl font-bold text-white mb-6">
              Numere Înrudite Spiritual
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {relatedNumbers.map((rel) => (
                <Link
                  key={rel.number}
                  href={`/semnificatie-numere-angelice/${getSlug(rel.number)}`}
                  className="group bg-purple-900/25 hover:bg-purple-800/40 border border-purple-700/20 hover:border-purple-500/40 rounded-xl p-4 text-center transition-all"
                >
                  <div className="text-2xl font-bold text-purple-300 group-hover:text-white mb-1">
                    {rel.number}
                  </div>
                  <p className="text-purple-400 text-xs line-clamp-2 group-hover:text-purple-200">
                    {rel.shortDescription.slice(0, 50)}...
                  </p>
                </Link>
              ))}
            </div>
          </section>
        )}
      </article>
    </>
  );
}
