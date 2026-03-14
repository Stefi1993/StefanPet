import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllAngelNumbers, getSlug } from "@/lib/angel-numbers";
import { SITE_URL, generateBreadcrumbSchema } from "@/lib/seo";

const themeCategories: Record<string, {
  title: string;
  description: string;
  seoDesc: string;
  icon: string;
  keywords: string[];
  numbers: number[];
}> = {
  dragoste: {
    title: "Numere Angelice pentru Dragoste și Relații",
    description: "Numerele care transmit mesaje divine despre iubire, relații și sufletul pereche.",
    seoDesc: "Descoperă numerele angelice legate de dragoste, relații și sufletul pereche. Mesaje divine pentru viața sentimentală.",
    icon: "❤️",
    keywords: ["numere angelice dragoste", "ingeri iubire", "suflet pereche numerologie"],
    numbers: [2, 6, 22, 33, 112, 122, 212, 221, 222, 262, 266, 272, 282, 292, 322, 332, 366, 422, 466, 522, 566, 622, 633, 644, 655, 666, 677, 688, 699, 722, 766, 822, 866, 922, 966],
  },
  bani: {
    title: "Numere Angelice pentru Abundență și Prosperitate",
    description: "Numerele care transmit mesaje despre abundență, succes financiar și prosperitate.",
    seoDesc: "Numerele angelice ale abundenței și prosperității. Descoperă mesajele divine legate de bani, succes și împlinire materială.",
    icon: "💰",
    keywords: ["numere angelice bani", "abundenta numerologie", "prosperitate ingeri", "succes financial"],
    numbers: [8, 44, 88, 108, 188, 208, 288, 318, 388, 408, 448, 488, 508, 528, 548, 558, 568, 588, 608, 648, 688, 708, 808, 818, 828, 838, 848, 858, 868, 878, 888, 898, 908, 988],
  },
  sanatate: {
    title: "Numere Angelice pentru Sănătate și Vindecare",
    description: "Numerele care transmit mesaje divine despre vindecare, sănătate și echilibru corporal.",
    seoDesc: "Numerele angelice ale sănătății și vindecării. Mesaje divine pentru echilibrul fizic, emoțional și spiritual.",
    icon: "💚",
    keywords: ["numere angelice sanatate", "vindecare ingeri", "sanatate numerologie", "echilibru spiritual"],
    numbers: [5, 55, 155, 255, 355, 455, 515, 525, 535, 545, 551, 552, 553, 554, 555, 556, 557, 558, 559, 565, 575, 585, 595, 655, 755, 855, 955],
  },
  spiritualitate: {
    title: "Numere Angelice de Trezire Spirituală",
    description: "Numerele care anunță trezirea spirituală, iluminarea și evoluția conștiinței.",
    seoDesc: "Numerele angelice ale trezirii spirituale și iluminării. Descoperă semnele divine ale evoluției tale spirituale.",
    icon: "✨",
    keywords: ["trezire spirituala numere", "iluminare angelica", "evolutie spirituala numere"],
    numbers: [7, 11, 77, 111, 117, 171, 177, 711, 717, 771, 777, 117, 171, 333, 337, 373, 377, 733, 737, 773, 999],
  },
  transformare: {
    title: "Numere Angelice de Schimbare și Transformare",
    description: "Numerele care anunță schimbări majore, transformări și noi etape ale vieții.",
    seoDesc: "Numerele angelice ale schimbării și transformării. Pregătește-te pentru noi etape cu ghidare divină.",
    icon: "🦋",
    keywords: ["numere angelice schimbare", "transformare spirituala numere", "numere noi inceputuri"],
    numbers: [1, 5, 9, 15, 19, 51, 59, 91, 95, 105, 150, 159, 195, 501, 510, 519, 591, 519, 555, 559, 595, 599, 900, 909, 919, 990, 991, 999],
  },
  avertisment: {
    title: "Numere Angelice de Atenție și Avertisment",
    description: "Numerele care îți cer să fii mai atent, să reflectezi și să reconsideri direcția.",
    seoDesc: "Numerele angelice de avertisment și atenție. Mesaje divine care îți cer să reflectezi și să fii precaut.",
    icon: "⚠️",
    keywords: ["numere angelice avertisment", "numere atentie divine", "mesaje angelice precautie"],
    numbers: [0, 13, 14, 16, 17, 100, 113, 119, 130, 131, 133, 140, 141, 144, 160, 161, 166, 190, 191, 199, 300, 313, 330, 331, 400, 411, 440, 441, 900, 911, 990, 991],
  },
};

interface Props {
  params: Promise<{ categorie: string }>;
}

export async function generateStaticParams() {
  return Object.keys(themeCategories).map((c) => ({ categorie: c }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { categorie } = await params;
  const cat = themeCategories[categorie];
  if (!cat) return { title: "Categorie negăsită" };

  return {
    title: cat.title,
    description: cat.seoDesc,
    keywords: cat.keywords.join(", "),
    alternates: { canonical: `${SITE_URL}/numere-angelice/${categorie}` },
  };
}

export default async function CategorieAngelsPage({ params }: Props) {
  const { categorie } = await params;
  const cat = themeCategories[categorie];
  if (!cat) notFound();

  const allNumbers = getAllAngelNumbers();
  const relevantNumbers = cat.numbers
    .filter((n) => n >= 1 && n <= 999)
    .map((n) => allNumbers[n - 1])
    .filter(Boolean);

  const breadcrumb = generateBreadcrumbSchema([
    { name: "Acasă", url: SITE_URL },
    { name: "Numere Angelice", url: `${SITE_URL}/semnificatie-numere-angelice` },
    { name: cat.title, url: `${SITE_URL}/numere-angelice/${categorie}` },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      <section className="py-14 border-b border-purple-800/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-purple-400 text-sm mb-6">
            <ol className="flex gap-2 flex-wrap">
              <li><Link href="/" className="hover:text-purple-200">Acasă</Link></li>
              <li>/</li>
              <li><Link href="/semnificatie-numere-angelice" className="hover:text-purple-200">Numere Angelice</Link></li>
              <li>/</li>
              <li className="text-purple-200">{cat.icon} {categorie}</li>
            </ol>
          </nav>

          <div className="text-center">
            <div className="text-5xl mb-4">{cat.icon}</div>
            <h1 className="text-3xl lg:text-4xl font-bold text-white mb-4">{cat.title}</h1>
            <p className="text-purple-200 text-lg max-w-2xl mx-auto">{cat.description}</p>
          </div>
        </div>
      </section>

      {/* All theme categories nav */}
      <section className="py-4 bg-purple-900/20 border-b border-purple-800/30">
        <div className="max-w-6xl mx-auto px-4 flex gap-2 overflow-x-auto scrollbar-hide">
          {Object.entries(themeCategories).map(([slug, c]) => (
            <Link
              key={slug}
              href={`/numere-angelice/${slug}`}
              className={`shrink-0 flex items-center gap-1 px-4 py-2 rounded-lg text-sm transition-colors ${
                slug === categorie
                  ? "bg-purple-600 text-white"
                  : "bg-purple-900/30 text-purple-300 hover:text-white border border-purple-700/30"
              }`}
            >
              {c.icon} {slug.charAt(0).toUpperCase() + slug.slice(1)}
            </Link>
          ))}
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <p className="text-purple-400 text-sm mb-6">{relevantNumbers.length} numere în această categorie</p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {relevantNumbers.map((an) => (
            <Link
              key={an.number}
              href={`/semnificatie-numere-angelice/${getSlug(an.number)}`}
              className="group bg-purple-900/25 hover:bg-purple-800/40 border border-purple-700/20 hover:border-purple-500/40 rounded-xl p-4 transition-all"
            >
              <div className="text-2xl font-bold text-purple-300 group-hover:text-white mb-1">
                {an.number}
              </div>
              <p className="text-purple-400 text-xs line-clamp-2 group-hover:text-purple-200">
                {an.shortDescription.slice(0, 50)}...
              </p>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
