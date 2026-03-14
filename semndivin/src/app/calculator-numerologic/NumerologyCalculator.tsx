"use client";

import { useState } from "react";
import Link from "next/link";
import { getSlug } from "@/lib/angel-numbers";

const LETTER_VALUES: Record<string, number> = {
  A: 1, B: 2, C: 3, D: 4, E: 5, F: 6, G: 7, H: 8, I: 9,
  J: 1, K: 2, L: 3, M: 4, N: 5, O: 6, P: 7, Q: 8, R: 9,
  S: 1, T: 2, U: 3, V: 4, W: 5, X: 6, Y: 7, Z: 8,
  // Romanian letters
  Ă: 1, Â: 1, Î: 9, Ș: 1, Ț: 2, Ş: 1, Ţ: 2,
};

const VOWELS = new Set(["A", "E", "I", "O", "U", "Ă", "Â", "Î"]);

function sumDigits(n: number): number {
  return String(n).split("").reduce((acc, d) => acc + parseInt(d), 0);
}

function reduceNumber(n: number): number {
  if ([11, 22, 33].includes(n)) return n;
  while (n > 9) {
    n = sumDigits(n);
    if ([11, 22, 33].includes(n)) return n;
  }
  return n;
}

function calcLifePath(dateStr: string): number | null {
  const parts = dateStr.split("-");
  if (parts.length !== 3) return null;
  const [year, month, day] = parts.map(Number);
  if (!year || !month || !day) return null;

  const daySum = reduceNumber(
    String(day).split("").reduce((a, d) => a + parseInt(d), 0)
  );
  const monthSum = reduceNumber(
    String(month).split("").reduce((a, d) => a + parseInt(d), 0)
  );
  const yearSum = reduceNumber(
    String(year).split("").reduce((a, d) => a + parseInt(d), 0)
  );

  const total = (typeof daySum === "number" ? daySum : 0) +
    (typeof monthSum === "number" ? monthSum : 0) +
    (typeof yearSum === "number" ? yearSum : 0);

  return reduceNumber(total);
}

function calcNameNumber(name: string, onlyVowels = false): number {
  const letters = name
    .toUpperCase()
    .normalize("NFC")
    .replace(/[^A-ZĂÂÎȘȚŞŢ]/g, "")
    .split("")
    .filter((l) => !onlyVowels || VOWELS.has(l));

  const sum = letters.reduce((acc, l) => acc + (LETTER_VALUES[l] || 0), 0);
  return reduceNumber(sum) || 0;
}

const lifePathMeanings: Record<number, { title: string; desc: string; color: string }> = {
  1: { title: "Liderul", desc: "Ești un pionier independent cu o voință puternică. Ai venit să deschizi drumuri noi și să conduci prin exemplu.", color: "from-red-500 to-orange-500" },
  2: { title: "Diplomatui", desc: "Ești un mediator sensibil și empatic. Misiunea ta este să creezi armonie și să construiești poduri între oameni.", color: "from-pink-500 to-rose-500" },
  3: { title: "Creativul", desc: "Ești un artist și comunicator înnăscut. Expresia creativă este respiral tău, bucuria este misiunea ta.", color: "from-yellow-500 to-amber-500" },
  4: { title: "Constructorul", desc: "Ești fundamentul pe care se construiesc lucrurile durabile. Munca, disciplina și ordinea sunt valorile tale.", color: "from-green-600 to-emerald-600" },
  5: { title: "Aventurierul", desc: "Libertatea și schimbarea sunt oxigenul tău. Ai venit să explorezi lumea și să înveți din experiențe variate.", color: "from-cyan-500 to-blue-500" },
  6: { title: "Îngrijitorul", desc: "Iubirea necondiționată, familia și responsabilitatea sunt esența ta. Ești vindecătorul și armonizatorul grupului.", color: "from-indigo-500 to-purple-500" },
  7: { title: "Căutătorul", desc: "Înțelepciunea profundă și spiritualitatea te definesc. Ai venit să descoperi misterele existenței.", color: "from-purple-500 to-violet-600" },
  8: { title: "Administratorul", desc: "Puterea, abundența și succesul sunt destinul tău. Ai venit să stăpânești lumea materială cu integritate.", color: "from-orange-500 to-yellow-600" },
  9: { title: "Umanitarul", desc: "Compasiunea universală și serviciul dezinteresat te definesc. Ești înțeleptul care a văzut totul.", color: "from-rose-500 to-pink-600" },
  11: { title: "Iluminatorul ✨", desc: "Număr Maestru! Ești un canal de inspirație divină și trezire spirituală. Misiunea ta este să iluminezi pe alții.", color: "from-white to-yellow-200" },
  22: { title: "Constructorul Maestru ✨", desc: "Număr Maestru! Ai potențialul de a construi ceva de importanță majoră pentru umanitate. Visuri mari, realizări monumentale.", color: "from-yellow-300 to-amber-400" },
  33: { title: "Maestrul Iubirii ✨", desc: "Număr Maestru! Cea mai înaltă vibrație a iubirii neconditionate. Ai venit să vindeci suflete și să ridici umanitatea.", color: "from-pink-300 to-rose-400" },
};

interface Result {
  lifePath: number | null;
  destiny: number;
  soul: number;
  name: string;
  date: string;
}

export default function NumerologyCalculator() {
  const [date, setDate] = useState("");
  const [name, setName] = useState("");
  const [result, setResult] = useState<Result | null>(null);
  const [tab, setTab] = useState<"birth" | "name">("birth");

  const calculate = () => {
    if (!date && !name) return;
    setResult({
      lifePath: date ? calcLifePath(date) : null,
      destiny: name ? calcNameNumber(name) : 0,
      soul: name ? calcNameNumber(name, true) : 0,
      name,
      date,
    });
  };

  const getMeaning = (n: number) => lifePathMeanings[n] || {
    title: `Numărul ${n}`,
    desc: "Energia ta numerologică este unică și puternică.",
    color: "from-purple-500 to-indigo-500",
  };

  return (
    <div className="space-y-6">
      {/* Tabs */}
      <div className="flex gap-2 bg-purple-950/50 border border-purple-700/30 rounded-xl p-1">
        <button
          onClick={() => setTab("birth")}
          className={`flex-1 py-2.5 rounded-lg text-sm font-medium transition-all ${tab === "birth" ? "bg-purple-600 text-white" : "text-purple-300 hover:text-white"}`}
        >
          🎂 Data Nașterii
        </button>
        <button
          onClick={() => setTab("name")}
          className={`flex-1 py-2.5 rounded-lg text-sm font-medium transition-all ${tab === "name" ? "bg-purple-600 text-white" : "text-purple-300 hover:text-white"}`}
        >
          📝 Numele Complet
        </button>
      </div>

      <div className="bg-purple-900/20 border border-purple-700/30 rounded-2xl p-6 space-y-5">
        {(tab === "birth" || result === null) && (
          <div>
            <label className="block text-purple-300 text-sm mb-2">Data Nașterii</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              max={new Date().toISOString().split("T")[0]}
              className="w-full bg-purple-950/50 border border-purple-700/40 text-white rounded-xl px-4 py-3 focus:outline-none focus:border-purple-400 transition-colors"
            />
          </div>
        )}

        {(tab === "name" || result === null) && (
          <div>
            <label className="block text-purple-300 text-sm mb-2">Numele Complet (la naștere)</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Ex: Ion Alexandru Popescu"
              className="w-full bg-purple-950/50 border border-purple-700/40 text-white placeholder-purple-500 rounded-xl px-4 py-3 focus:outline-none focus:border-purple-400 transition-colors"
            />
            <p className="text-purple-500 text-xs mt-1">Folosiți numele complet de pe certificatul de naștere</p>
          </div>
        )}

        <button
          onClick={calculate}
          disabled={!date && !name}
          className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-4 rounded-xl text-lg transition-all shadow-lg"
        >
          ✨ Calculează Numerologia Mea
        </button>
      </div>

      {result && (
        <div className="space-y-4 animate-in">
          {/* Life Path */}
          {result.lifePath && (
            <div className="bg-purple-900/30 border border-purple-600/40 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className={`text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${getMeaning(result.lifePath).color}`}>
                  {result.lifePath}
                </div>
                <div>
                  <p className="text-purple-400 text-xs uppercase tracking-wider">Calea Vieții</p>
                  <p className="text-white font-bold text-xl">{getMeaning(result.lifePath).title}</p>
                </div>
              </div>
              <p className="text-purple-200 leading-relaxed">{getMeaning(result.lifePath).desc}</p>
              <Link
                href={`/semnificatie-numere-angelice/${getSlug(result.lifePath)}`}
                className="inline-block mt-4 text-purple-300 hover:text-purple-100 text-sm underline"
              >
                Vezi semnificația angelică a numărului {result.lifePath} →
              </Link>
            </div>
          )}

          {/* Destiny + Soul */}
          {result.destiny > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-purple-900/20 border border-purple-700/30 rounded-2xl p-5">
                <p className="text-purple-400 text-xs uppercase tracking-wider mb-1">Numărul Destinului</p>
                <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300 mb-2">
                  {result.destiny}
                </div>
                <p className="text-white font-semibold">{getMeaning(result.destiny).title}</p>
                <p className="text-purple-300 text-sm mt-2 leading-relaxed">{getMeaning(result.destiny).desc}</p>
              </div>
              {result.soul > 0 && (
                <div className="bg-purple-900/20 border border-purple-700/30 rounded-2xl p-5">
                  <p className="text-purple-400 text-xs uppercase tracking-wider mb-1">Numărul Sufletului</p>
                  <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-purple-300 mb-2">
                    {result.soul}
                  </div>
                  <p className="text-white font-semibold">{getMeaning(result.soul).title}</p>
                  <p className="text-purple-300 text-sm mt-2 leading-relaxed">
                    Dorința profundă a sufletului tău și motivațiile interioare.
                  </p>
                </div>
              )}
            </div>
          )}

          <button
            onClick={() => setResult(null)}
            className="w-full py-3 border border-purple-700/40 text-purple-400 hover:text-purple-200 rounded-xl text-sm transition-colors"
          >
            Calculează din nou
          </button>
        </div>
      )}
    </div>
  );
}
