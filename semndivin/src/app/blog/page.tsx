import { Metadata } from "next";
import Link from "next/link";
import { getAllArticles, getCategories } from "@/lib/articles";
import { SITE_URL, SITE_NAME } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Blog Spiritualitate — Articole despre Numere Angelice și Numerologie",
  description:
    "Articole aprofundate despre spiritualitate, numere angelice, numerologie și dezvoltare spirituală în limba română. Ghiduri complete pentru călătoria ta spirituală.",
  keywords:
    "blog spiritualitate, articole numere angelice, numerologie Romania, spiritualitate romani, ghid spiritual",
  alternates: { canonical: `${SITE_URL}/blog` },
};

export default function BlogPage() {
  const articles = getAllArticles();
  const categories = getCategories();

  return (
    <>
      <section className="py-14 lg:py-20 border-b border-purple-800/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <nav className="text-purple-400 text-sm mb-6">
            <ol className="flex justify-center gap-2">
              <li><Link href="/" className="hover:text-purple-200">Acasă</Link></li>
              <li>/</li>
              <li className="text-purple-200">Blog</li>
            </ol>
          </nav>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Blog{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Spiritualitate
            </span>
          </h1>
          <p className="text-purple-200 text-lg max-w-2xl mx-auto">
            Articole aprofundate despre numere angelice, numerologie și călătoria spirituală
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Category filters */}
        <div className="flex gap-2 flex-wrap mb-10">
          {["Toate", ...categories].map((cat) => (
            <span
              key={cat}
              className="px-4 py-1.5 rounded-full text-sm bg-purple-900/40 border border-purple-700/30 text-purple-300"
            >
              {cat}
            </span>
          ))}
        </div>

        {/* Articles grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/blog/${article.slug}`}
              className="group flex flex-col bg-purple-900/20 hover:bg-purple-800/30 border border-purple-700/30 hover:border-purple-500/40 rounded-2xl overflow-hidden transition-all duration-200"
            >
              <div className="h-40 bg-gradient-to-br from-purple-800/50 to-indigo-900/50 flex items-center justify-center text-5xl">
                {article.category === "Numere Angelice" && "✨"}
                {article.category === "Numerologie" && "🔢"}
                {article.category === "Spiritualitate" && "🌟"}
                {article.category === "Energie & Chakre" && "🌈"}
              </div>
              <div className="flex flex-col flex-1 p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs bg-purple-800/60 text-purple-300 border border-purple-600/30 px-2 py-0.5 rounded-full">
                    {article.category}
                  </span>
                  <span className="text-purple-500 text-xs">{article.readingTime} min citire</span>
                </div>
                <h2 className="text-white font-semibold text-lg mb-2 group-hover:text-purple-200 leading-snug line-clamp-2">
                  {article.title}
                </h2>
                <p className="text-purple-300 text-sm leading-relaxed flex-1 line-clamp-3">
                  {article.excerpt}
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-purple-500 text-xs">
                    {new Date(article.publishedAt).toLocaleDateString("ro-RO", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </span>
                  <span className="text-purple-400 group-hover:text-purple-200 text-sm transition-colors">
                    Citește →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
