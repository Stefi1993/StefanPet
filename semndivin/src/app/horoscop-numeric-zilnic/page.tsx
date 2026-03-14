import { Metadata } from "next";
import Link from "next/link";
import { getAngelNumber, getSlug } from "@/lib/angel-numbers";
import { SITE_URL } from "@/lib/seo";

export const revalidate = 3600; // Revalidate every hour

export const metadata: Metadata = {
  title: "Horoscop Numeric Zilnic — Numărul Angelic al Zilei de Azi",
  description:
    "Descoperă numărul angelic al zilei de astăzi și mesajul spiritual pentru tine. Horoscop numeric zilnic gratuit în limba română.",
  keywords:
    "horoscop numeric zilnic, numarul zilei, horoscop numerologie, mesaj angelic azi, spiritualitate zilnica",
  alternates: { canonical: `${SITE_URL}/horoscop-numeric-zilnic` },
};

function getDailyNumber(): { daily: number; personal: null } {
  const now = new Date();
  const day = now.getDate();
  const month = now.getMonth() + 1;
  const year = now.getFullYear();

  const sum = String(day + month + year)
    .split("")
    .reduce((a, d) => a + parseInt(d), 0);

  let n = sum;
  while (n > 9) {
    n = String(n).split("").reduce((a, d) => a + parseInt(d), 0);
    if ([11, 22, 33].includes(n)) break;
  }

  return { daily: n === 0 ? 9 : n, personal: null };
}

const dayMessages: Record<number, { theme: string; advice: string; affirmation: string }> = {
  1: {
    theme: "Noi Începuturi & Inițiativă",
    advice: "Astăzi este o zi perfectă pentru a începe proiecte noi. Energia universului susține acțiunea curajoasă și independentă.",
    affirmation: "Sunt capabil să deschid drumuri noi cu curaj și determinare.",
  },
  2: {
    theme: "Armonie & Parteneriat",
    advice: "Zi excelentă pentru relații și colaborare. Ascultă-i cu atenție pe cei din jur — cineva are un mesaj important pentru tine.",
    affirmation: "Creez armonie și echilibru în toate relațiile mele.",
  },
  3: {
    theme: "Creativitate & Exprimare",
    advice: "Energia creativă este la apogeu. Exprimă-te liber prin artă, scris sau comunicare. Bucuria este cuvântul cheie al zilei.",
    affirmation: "Creativitatea mea este un dar divin care îmbogățește lumea.",
  },
  4: {
    theme: "Muncă & Fundație",
    advice: "Zi pentru organizare și muncă metodică. Pași mici și constanți duc la realizări mari. Construiește cu răbdare.",
    affirmation: "Pun fundații solide pentru succesul și stabilitatea mea.",
  },
  5: {
    theme: "Schimbare & Libertate",
    advice: "Fii deschis la surprize și schimbări neașteptate. Universul pregătește ceva interesant pentru tine astăzi.",
    affirmation: "Îmbrățișez schimbarea cu bucurie — ea mă duce spre destinul meu.",
  },
  6: {
    theme: "Iubire & Familie",
    advice: "Investește timp în relațiile care contează. Familia și prietenii apropiați au nevoie de prezența și atenția ta.",
    affirmation: "Iubirea pe care o ofer se întoarce la mine amplificată și înmulțită.",
  },
  7: {
    theme: "Intuiție & Reflecție",
    advice: "Zi pentru meditație și introspecție. Ascultă-ți vocea interioară și fii atent la semnele subtile din jurul tău.",
    affirmation: "Intuiția mea este precisă și mă ghidează mereu spre bine.",
  },
  8: {
    theme: "Abundență & Succes",
    advice: "Energia prosperității este puternică astăzi. Ia decizii financiare sau de carieră cu încredere — universul susține abundența.",
    affirmation: "Merit abundența și succesul vin spre mine cu ușurință și grație.",
  },
  9: {
    theme: "Completare & Înțelepciune",
    advice: "Zi de finalizare și recunoștință. Incheie ce a rămas neterminat și eliberează ce nu mai servește evoluției tale.",
    affirmation: "Eliberez cu recunoștință ce nu mai servește și îmbrățișez noile posibilități.",
  },
  11: {
    theme: "Iluminare & Inspirație",
    advice: "Zi de inspirație superioară! Fii atent la sincronicități și la gândurile creative care apar. Îngerii sunt foarte aproape.",
    affirmation: "Sunt un canal de lumină și inspirație divină pentru mine și pentru cei din jurul meu.",
  },
  22: {
    theme: "Construcție Maestru",
    advice: "Energie rară și puternică. Acțiunile tale de astăzi au un impact mult mai mare decât în mod normal. Folosește-o cu înțelepciune.",
    affirmation: "Am puterea de a construi ceva extraordinar și de durată.",
  },
  33: {
    theme: "Iubire Maestru",
    advice: "Cea mai pură energie de iubire. Zi pentru vindecare, compasiune și serviciu. Orice act de bunătate are efect cosmic azi.",
    affirmation: "Iubirea divină curge prin mine și vindecă tot ce atinge.",
  },
};

export default function HoroscopZilnicPage() {
  const { daily } = getDailyNumber();
  const angelNumber = getAngelNumber(Math.min(daily, 33));
  const dayMsg = dayMessages[daily] || dayMessages[9];

  const today = new Date();
  const dateStr = today.toLocaleDateString("ro-RO", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  // Compute universe + personal day numbers for display
  const d = today.getDate();
  const m = today.getMonth() + 1;
  const y = today.getFullYear();

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <nav className="text-purple-400 text-sm mb-8">
        <ol className="flex gap-2">
          <li><Link href="/" className="hover:text-purple-200">Acasă</Link></li>
          <li>/</li>
          <li className="text-purple-200">Horoscop Numeric Zilnic</li>
        </ol>
      </nav>

      {/* Header */}
      <div className="text-center mb-12">
        <div className="text-5xl mb-4">🌟</div>
        <h1 className="text-4xl font-bold text-white mb-2">Horoscop Numeric Zilnic</h1>
        <p className="text-purple-300 text-lg capitalize">{dateStr}</p>
      </div>

      {/* Daily Number Card */}
      <div className="bg-gradient-to-br from-purple-900/60 to-indigo-900/60 border border-purple-600/40 rounded-2xl p-8 text-center mb-8">
        <p className="text-purple-300 text-sm uppercase tracking-widest mb-3">Numărul Universal al Zilei</p>
        <div className="text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-purple-300 via-pink-300 to-purple-400 mb-3">
          {daily}
        </div>
        <h2 className="text-2xl font-bold text-white mb-2">{dayMsg.theme}</h2>
        <p className="text-purple-200 text-lg leading-relaxed max-w-2xl mx-auto">
          {dayMsg.advice}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Affirmation */}
        <div className="bg-purple-900/20 border border-purple-700/30 rounded-2xl p-6">
          <h3 className="text-white font-semibold mb-3 flex items-center gap-2">
            <span>💫</span> Afirmația Zilei
          </h3>
          <p className="text-purple-200 italic text-lg leading-relaxed">
            "{dayMsg.affirmation}"
          </p>
        </div>

        {/* How number is calculated */}
        <div className="bg-purple-900/20 border border-purple-700/30 rounded-2xl p-6">
          <h3 className="text-white font-semibold mb-3 flex items-center gap-2">
            <span>🔢</span> Cum se Calculează
          </h3>
          <div className="text-purple-300 text-sm space-y-1">
            <p>Zi: {d}</p>
            <p>Lună: {m}</p>
            <p>An: {y}</p>
            <p className="text-purple-400">────────────</p>
            <p>Total: {d} + {m} + {y} = {d + m + y}</p>
            <p>Redus la: <strong className="text-white text-lg">{daily}</strong></p>
          </div>
        </div>
      </div>

      {/* Angel number link */}
      {angelNumber && (
        <div className="bg-purple-900/20 border border-purple-700/30 rounded-2xl p-6 mb-8">
          <h3 className="text-white font-semibold mb-3">Mesajul Angelic al Numărului {daily}</h3>
          <p className="text-purple-200 leading-relaxed mb-4">{angelNumber.shortDescription}</p>
          <Link
            href={`/semnificatie-numere-angelice/${getSlug(daily)}`}
            className="inline-flex items-center gap-2 text-purple-300 hover:text-purple-100 border border-purple-600/40 hover:border-purple-400 px-4 py-2 rounded-lg text-sm transition-all"
          >
            Citește semnificația completă →
          </Link>
        </div>
      )}

      {/* Personal day calculator */}
      <div className="bg-gradient-to-br from-purple-900/30 to-indigo-900/30 border border-purple-700/30 rounded-2xl p-6">
        <h3 className="text-white font-semibold text-lg mb-2">Calculează Ziua Ta Personală</h3>
        <p className="text-purple-300 text-sm mb-4">
          Ziua ta personală combină numărul universal al zilei cu data ta de naștere,
          oferind o perspectivă și mai precisă.
        </p>
        <Link
          href="/calculator-numerologic"
          className="inline-flex items-center gap-2 bg-purple-700/50 hover:bg-purple-600/60 text-white px-5 py-3 rounded-xl text-sm transition-colors font-medium"
        >
          🔢 Mergi la Calculator →
        </Link>
      </div>
    </div>
  );
}
