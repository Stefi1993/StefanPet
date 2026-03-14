import Link from "next/link";
import { Metadata } from "next";
import { getAllAngelNumbers, getCategories, getSlug } from "@/lib/angel-numbers";
import { SITE_URL, SITE_NAME, generateBreadcrumbSchema, generateStructuredData } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Semnificația Numerelor Angelice 1-999 — Ghid Complet",
  description:
    "Descoperă semnificația spirituală a tuturor numerelor angelice de la 1 la 999. Mesajele divine pe care îngerii le transmit prin secvențe numerice. Ghid complet în română.",
  keywords:
    "semnificatie numere angelice, numere angelice 1-999, semnificatia numerelor, ingeri numere, mesaje divine numere, numerologie angelica",
  alternates: {
    canonical: `${SITE_URL}/semnificatie-numere-angelice`,
  },
  openGraph: {
    title: "Semnificația Numerelor Angelice 1-999",
    description: "Ghid complet al semnificației spirituale a numerelor angelice în limba română.",
    url: `${SITE_URL}/semnificatie-numere-angelice`,
  },
};

interface PageProps {
  searchParams: Promise<{ numar?: string; categorie?: string; pagina?: string }>;
}

const PAGE_SIZE = 99;

export default async function AngelNumbersPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const allNumbers = getAllAngelNumbers();
  const categories = getCategories();

  const selectedCategory = params.categorie || "";
  const page = parseInt(params.pagina || "1");
  const searchNum = params.numar ? parseInt(params.numar) : null;

  // Redirect search to specific number page
  if (searchNum && searchNum >= 1 && searchNum <= 999) {
    // We'll handle this client-side via the form action
  }

  const filtered = selectedCategory
    ? allNumbers.filter((n) => n.category === selectedCategory)
    : allNumbers;

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const paginated = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const breadcrumb = generateBreadcrumbSchema([
    { name: "Acasă", url: SITE_URL },
    { name: "Numere Angelice", url: `${SITE_URL}/semnificatie-numere-angelice` },
  ]);

  const collectionSchema = generateStructuredData("CollectionPage", {
    name: "Semnificația Numerelor Angelice 1-999",
    description: "Ghid complet al semnificației spirituale a numerelor angelice de la 1 la 999.",
    url: `${SITE_URL}/semnificatie-numere-angelice`,
    inLanguage: "ro",
    numberOfItems: 999,
  });

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }} />

      {/* Hero */}
      <section className="py-14 lg:py-20 border-b border-purple-800/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <nav aria-label="Breadcrumb" className="text-purple-400 text-sm mb-6">
            <ol className="flex justify-center gap-2">
              <li><Link href="/" className="hover:text-purple-200">Acasă</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-purple-200">Numere Angelice</li>
            </ol>
          </nav>

          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Semnificația Numerelor Angelice{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              1-999
            </span>
          </h1>
          <p className="text-purple-200 text-lg max-w-3xl mx-auto mb-8">
            Ghid complet cu semnificația spirituală a tuturor numerelor angelice. Află ce mesaj divin
            îți transmit îngerii prin numărul pe care îl observi.
          </p>

          {/* Search */}
          <form
            action=""
            method="get"
            className="flex gap-3 max-w-sm mx-auto"
          >
            <input
              type="number"
              name="numar"
              min="1"
              max="999"
              defaultValue={searchNum || ""}
              placeholder="Caută număr (1-999)"
              className="flex-1 bg-purple-900/40 border border-purple-600/40 text-white placeholder-purple-400 rounded-xl px-4 py-3 focus:outline-none focus:border-purple-400"
              aria-label="Caută număr angelic"
            />
            <button
              type="submit"
              className="bg-purple-600 hover:bg-purple-500 text-white font-semibold px-5 py-3 rounded-xl transition-colors"
            >
              Caută
            </button>
          </form>

          {searchNum && searchNum >= 1 && searchNum <= 999 && (
            <div className="mt-4">
              <Link
                href={`/semnificatie-numere-angelice/${getSlug(searchNum)}`}
                className="inline-flex items-center gap-2 bg-purple-700/50 hover:bg-purple-600/60 border border-purple-500/50 text-white px-6 py-3 rounded-xl transition-all"
              >
                ✨ Vedere Semnificația Completă a Numărului {searchNum} →
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-6 bg-purple-900/20 border-b border-purple-800/30 sticky top-16 z-30 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
            <Link
              href="/semnificatie-numere-angelice"
              className={`shrink-0 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                !selectedCategory
                  ? "bg-purple-600 text-white"
                  : "bg-purple-900/40 text-purple-300 hover:bg-purple-800/40 hover:text-white border border-purple-700/30"
              }`}
            >
              Toate (999)
            </Link>
            {categories.map((cat) => (
              <Link
                key={cat}
                href={`/semnificatie-numere-angelice?categorie=${encodeURIComponent(cat)}`}
                className={`shrink-0 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedCategory === cat
                    ? "bg-purple-600 text-white"
                    : "bg-purple-900/40 text-purple-300 hover:bg-purple-800/40 hover:text-white border border-purple-700/30"
                }`}
              >
                {cat}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Numbers Grid */}
      <section className="py-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-purple-400 text-sm mb-6">
          Afișând {(page - 1) * PAGE_SIZE + 1}–{Math.min(page * PAGE_SIZE, filtered.length)} din{" "}
          {filtered.length} numere
          {selectedCategory ? ` în categoria "${selectedCategory}"` : ""}
        </p>

        <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-7 lg:grid-cols-9 gap-2">
          {paginated.map((an) => (
            <Link
              key={an.number}
              href={`/semnificatie-numere-angelice/${getSlug(an.number)}`}
              className="group aspect-square flex items-center justify-center bg-purple-900/25 hover:bg-purple-700/50 border border-purple-700/20 hover:border-purple-500/50 rounded-xl font-semibold text-purple-200 hover:text-white transition-all duration-150 text-sm md:text-base"
              title={`Numărul Angelic ${an.number}`}
            >
              {an.number}
            </Link>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <nav aria-label="Paginare" className="flex justify-center gap-2 mt-10 flex-wrap">
            {page > 1 && (
              <Link
                href={`/semnificatie-numere-angelice?${selectedCategory ? `categorie=${encodeURIComponent(selectedCategory)}&` : ""}pagina=${page - 1}`}
                className="px-4 py-2 bg-purple-900/40 border border-purple-700/30 text-purple-200 hover:text-white rounded-lg text-sm transition-colors"
              >
                ← Anterior
              </Link>
            )}
            {Array.from({ length: Math.min(totalPages, 11) }, (_, i) => {
              const p = i + 1;
              return (
                <Link
                  key={p}
                  href={`/semnificatie-numere-angelice?${selectedCategory ? `categorie=${encodeURIComponent(selectedCategory)}&` : ""}pagina=${p}`}
                  className={`px-4 py-2 rounded-lg text-sm transition-colors ${
                    p === page
                      ? "bg-purple-600 text-white"
                      : "bg-purple-900/40 border border-purple-700/30 text-purple-200 hover:text-white"
                  }`}
                >
                  {p}
                </Link>
              );
            })}
            {page < totalPages && (
              <Link
                href={`/semnificatie-numere-angelice?${selectedCategory ? `categorie=${encodeURIComponent(selectedCategory)}&` : ""}pagina=${page + 1}`}
                className="px-4 py-2 bg-purple-900/40 border border-purple-700/30 text-purple-200 hover:text-white rounded-lg text-sm transition-colors"
              >
                Următor →
              </Link>
            )}
          </nav>
        )}
      </section>

      {/* SEO Content */}
      <section className="py-12 bg-indigo-950/50 border-t border-purple-800/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-6">
            Ghid Complet: Ce sunt Numerele Angelice?
          </h2>
          <div className="prose prose-invert max-w-none text-purple-200 space-y-4">
            <p>
              <strong className="text-white">Numerele angelice</strong> sunt secvențe numerice cu semnificație
              spirituală profundă, pe care îngerii și ghizii spirituali le folosesc pentru a comunica cu noi în
              viața de zi cu zi. Când observi același număr în mod repetat — pe ceas digital, plăci de
              înmatriculare, numere de chitanță, adrese sau altundeva — nu este o simplă coincidență.
            </p>
            <p>
              Conceptul de numere angelice își are rădăcinile în <strong className="text-white">numerologie</strong>,
              o știință spirituală milenară care studiază relația dintre numere și evenimentele din viața umană.
              Pitagora, matematicianul și filozoful grec, este considerat părintele numerologiei occidentale,
              afirmând că "numerele guvernează universul".
            </p>
            <p>
              Pe SemnDivin.ro găsești semnificația spirituală completă pentru toate numerele angelice de la{" "}
              <strong className="text-white">1 la 999</strong>. Fiecare pagină include mesajul divin al
              numărului, energia sa numerologică, ce înseamnă pentru tine în această perioadă și cum să
              integrezi ghidarea angelică în viața ta.
            </p>
            <h3 className="text-white text-xl font-semibold mt-6">Cum să folosești acest ghid</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Caută numărul pe care l-ai observat în câmpul de căutare</li>
              <li>Citește semnificația completă și mesajul spiritual</li>
              <li>Meditează asupra mesajului și aplică-l în contextul vieții tale</li>
              <li>Notează-ți numerele care apar frecvent — ele formează un model divin</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
