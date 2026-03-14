"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { getAllAngelNumbers, getSlug } from "@/lib/angel-numbers";
import { getAllArticles } from "@/lib/articles";

const allNumbers = getAllAngelNumbers();
const allArticles = getAllArticles();

export default function SearchClient() {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const q = query.toLowerCase().trim();
    if (!q || q.length < 2) return { numbers: [], articles: [] };

    // Check if query is a number
    const numQuery = parseInt(q);
    const isNumeric = !isNaN(numQuery) && numQuery >= 1 && numQuery <= 999;

    const numbers = isNumeric
      ? allNumbers.filter((n) => String(n.number).includes(q))
      : allNumbers.filter(
          (n) =>
            n.keywords.some((k) => k.toLowerCase().includes(q)) ||
            n.shortDescription.toLowerCase().includes(q) ||
            n.category.toLowerCase().includes(q)
        );

    const articles = allArticles.filter(
      (a) =>
        a.title.toLowerCase().includes(q) ||
        a.excerpt.toLowerCase().includes(q) ||
        a.tags.some((t) => t.toLowerCase().includes(q)) ||
        a.category.toLowerCase().includes(q)
    );

    return {
      numbers: numbers.slice(0, 24),
      articles: articles.slice(0, 6),
    };
  }, [query]);

  const total = results.numbers.length + results.articles.length;

  return (
    <div className="space-y-6">
      <div className="relative">
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Caută un număr (ex: 333) sau un subiect (ex: dragoste, bani, transformare)..."
          className="w-full bg-purple-900/30 border border-purple-600/40 text-white placeholder-purple-400 rounded-2xl px-5 py-4 pr-12 text-lg focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-500/20 transition-all"
          autoFocus
        />
        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-purple-400 text-xl">🔍</span>
      </div>

      {query.length >= 2 && (
        <p className="text-purple-400 text-sm">
          {total > 0 ? `${total} rezultate pentru "${query}"` : `Niciun rezultat pentru "${query}"`}
        </p>
      )}

      {/* Number results */}
      {results.numbers.length > 0 && (
        <div>
          <h2 className="text-white font-semibold mb-3 flex items-center gap-2">
            <span>✨</span> Numere Angelice ({results.numbers.length})
          </h2>
          <div className="grid grid-cols-3 sm:grid-cols-6 md:grid-cols-8 gap-2">
            {results.numbers.map((n) => (
              <Link
                key={n.number}
                href={`/semnificatie-numere-angelice/${getSlug(n.number)}`}
                className="aspect-square flex items-center justify-center bg-purple-900/30 hover:bg-purple-700/50 border border-purple-700/20 hover:border-purple-500/50 rounded-xl font-semibold text-purple-200 hover:text-white transition-all text-sm"
              >
                {n.number}
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Article results */}
      {results.articles.length > 0 && (
        <div>
          <h2 className="text-white font-semibold mb-3 flex items-center gap-2">
            <span>📖</span> Articole ({results.articles.length})
          </h2>
          <div className="space-y-3">
            {results.articles.map((article) => (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}`}
                className="block bg-purple-900/20 hover:bg-purple-800/30 border border-purple-700/30 hover:border-purple-500/40 rounded-xl p-4 transition-all"
              >
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs bg-purple-800/60 text-purple-300 border border-purple-600/30 px-2 py-0.5 rounded-full">
                    {article.category}
                  </span>
                  <span className="text-purple-500 text-xs">{article.readingTime} min</span>
                </div>
                <h3 className="text-white font-medium">{article.title}</h3>
                <p className="text-purple-300 text-sm mt-1 line-clamp-2">{article.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      )}

      {query.length >= 2 && total === 0 && (
        <div className="text-center py-12">
          <p className="text-purple-400 text-lg mb-4">Niciun rezultat găsit.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/semnificatie-numere-angelice" className="text-purple-300 hover:text-white border border-purple-600/40 px-5 py-2 rounded-xl text-sm transition-colors">
              Toate numerele angelice
            </Link>
            <Link href="/blog" className="text-purple-300 hover:text-white border border-purple-600/40 px-5 py-2 rounded-xl text-sm transition-colors">
              Toate articolele
            </Link>
          </div>
        </div>
      )}

      {query.length < 2 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-purple-900/20 border border-purple-700/30 rounded-xl p-4">
            <p className="text-purple-300 text-sm mb-3 font-medium">Căutări populare:</p>
            <div className="flex flex-wrap gap-2">
              {["111", "222", "333", "444", "777", "888", "999", "dragoste", "bani", "transformare"].map((s) => (
                <button
                  key={s}
                  onClick={() => setQuery(s)}
                  className="text-xs bg-purple-900/40 border border-purple-700/30 text-purple-300 hover:text-white hover:border-purple-500 px-3 py-1 rounded-full transition-colors"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
          <div className="bg-purple-900/20 border border-purple-700/30 rounded-xl p-4">
            <p className="text-purple-300 text-sm mb-3 font-medium">Accese rapide:</p>
            <div className="space-y-2">
              <Link href="/semnificatie-numere-angelice" className="block text-purple-300 hover:text-white text-sm transition-colors">→ Toate numerele 1-999</Link>
              <Link href="/blog" className="block text-purple-300 hover:text-white text-sm transition-colors">→ Blog spiritualitate</Link>
              <Link href="/calculator-numerologic" className="block text-purple-300 hover:text-white text-sm transition-colors">→ Calculator numerologic</Link>
              <Link href="/quiz-spiritual" className="block text-purple-300 hover:text-white text-sm transition-colors">→ Quiz spiritual</Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
