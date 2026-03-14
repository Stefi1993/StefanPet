import { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Meditație Ghidată — Conectare cu Îngerii și Numerele Angelice",
  description:
    "Practici de meditație ghidată pentru conectarea cu îngerii tăi și interpretarea numerelor angelice. Exerciții spirituale gratuite în română.",
  keywords:
    "meditatie ghidata, meditatie ingeri, meditatie numere angelice, meditatie spirituala Romania, exercitii spirituale",
  alternates: { canonical: `${SITE_URL}/meditatie-ghidata` },
};

const meditations = [
  {
    title: "Meditație de Conectare cu Îngerul Păzitor",
    duration: "10 minute",
    level: "Începători",
    icon: "👼",
    description: "O practică blândă pentru a-ți întâlni și a comunica cu îngerul tău păzitor.",
    steps: [
      "Găsește un loc liniștit unde nu vei fi deranjat pentru 10 minute.",
      "Stai confortabil, fie pe scaun cu spatele drept, fie pe jos în poziție de lotus.",
      "Închide ochii și respiră adânc de 5 ori. La fiecare expirare, lasă tensiunile să se dizolve.",
      "Vizualizează o lumină caldă, aurie, coborând din cer și înconjurând corpul tău.",
      "Invocă mental: 'Îngerul meu păzitor, te invit în spațiul meu. Te rog să te faci simțit.'",
      "Observă orice senzații — căldură, furnicături, o ușoară presiune sau pace profundă.",
      "Rămâi în liniște 5 minute. Orice imagini, cuvinte sau sentimente care apar sunt mesaje.",
      "Mulțumește îngerului tău și deschide ușor ochii.",
    ],
    tip: "Practică dimineața devreme sau seara târziu pentru rezultate mai bune.",
  },
  {
    title: "Meditație pentru Interpretarea Numerelor Angelice",
    duration: "15 minute",
    level: "Intermediar",
    icon: "🔢",
    description: "Utilizează meditația pentru a înțelege mai profund mesajul unui număr angelic specific.",
    steps: [
      "Alege numărul angelic pe care l-ai observat recent (ex: 444, 111, 333).",
      "Scrie numărul pe o foaie de hârtie și pune-o în fața ta sau ține-o în palmă.",
      "Intră în stare de meditație cu 5 respirații profunde.",
      "Vizualizează numărul strălucind cu lumină violet-aurie în fața ochilor minții.",
      "Întreabă: 'Ce mesaj îmi aduci? Ce aspect al vieții mele îl privești?'",
      "Fii atent la prima imagine, emoție sau cuvânt care apare — aceasta este intuiția ta.",
      "Explorează acea direcție mental timp de 5-7 minute.",
      "Notează ce ai primit imediat după meditație, înainte de a uita.",
    ],
    tip: "Citește semnificația numerică DUPĂ meditație pentru a compara cu ce ai primit intuitiv.",
  },
  {
    title: "Meditație de Aliniere a Chakrele prin Numere",
    duration: "20 minute",
    level: "Avansat",
    icon: "🌈",
    description: "Utilizează vibrațiile numerice pentru a echilibra și activa cele 7 chakre.",
    steps: [
      "Stai culcat pe spate, cu brațele ușor depărtate de corp, palmele în sus.",
      "Respiră adânc și relaxează-ți complet corpul în 2 minute.",
      "Începe de la baza coloanei (Chakra Rădăcinii). Vizualizează un disc roșu vibrând.",
      "Mental repetă numărul 1 de 4 ori: '1... 1... 1... 1...' Simte stabilitatea crescând.",
      "Ridică-te la chakra sacrală. Vizualizează un disc portocaliu. Repetă '2... 2... 2... 2...'",
      "Continuă cu plexul solar (galben, numărul 3), inima (verde, numărul 6), gâtul (albastru, numărul 5).",
      "Al treilea ochi: violet strălucitor. Repetă '7... 7... 7... 7...'",
      "Coroana: lumină albă pură. Repetă '9... 9... 9... 9...' Simte conexiunea cu divinul.",
      "Respiră adânc de 3 ori și revino ușor în prezent.",
    ],
    tip: "Această meditație este ideală seara, înainte de culcare.",
  },
  {
    title: "Meditație de Manifestare cu Numere Angelice",
    duration: "12 minute",
    level: "Intermediar",
    icon: "✨",
    description: "Combină puterea numerelor angelice cu tehnica de vizualizare pentru manifestare.",
    steps: [
      "Alege o dorință clară pe care vrei să o manifești.",
      "Intră în stare de relaxare profundă cu 5 respirații.",
      "Vizualizează-ți dorința ca și cum s-a realizat deja — în prezent, cu toate detaliile.",
      "Simte bucuria, gratitudinea și emoțiile ca și cum ai fi trăit deja acel moment.",
      "Invocă mental numărul 111 (poarta manifestării): '111 — gândurile mele se manifestează acum.'",
      "Ține vizualizarea vie timp de 7 minute, în timp ce repeti intern '111'.",
      "Adaugă: 'Acest lucru sau ceva mai bun vine spre mine acum. Îi mulțumesc universului.'",
      "Eliberează intenția — nu te agăța de ea. Universul a auzit.",
    ],
    tip: "Practică dimineața, imediat după trezire, când mintea este mai receptivă.",
  },
];

const quickPractices = [
  {
    title: "Respirația 4-7-8",
    desc: "Inspiră 4 secunde, ține 7 secunde, expiră 8 secunde. Repetă de 4 ori. Activează sistemul nervos parasimpatic.",
    icon: "💨",
    time: "2 min",
  },
  {
    title: "Grounding Rapid",
    desc: "Stai cu picioarele pe podeaua goală. Vizualizează rădăcini care coboară din tălpi în pământ. Respiră.",
    icon: "🌍",
    time: "3 min",
  },
  {
    title: "Practică de Recunoștință",
    desc: "Numără pe degete 10 lucruri pentru care ești recunoscător. Pentru fiecare, simte cu adevărat gratitudinea.",
    icon: "🙏",
    time: "5 min",
  },
  {
    title: "Scanare Corporală",
    desc: "De la cap la degete, observă fiecare parte a corpului. Unde simți tensiune? Respiră în acea zonă.",
    icon: "🔍",
    time: "7 min",
  },
];

export default function MeditatiePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <nav className="text-purple-400 text-sm mb-8">
        <ol className="flex gap-2">
          <li><Link href="/" className="hover:text-purple-200">Acasă</Link></li>
          <li>/</li>
          <li className="text-purple-200">Meditație Ghidată</li>
        </ol>
      </nav>

      <div className="text-center mb-12">
        <div className="text-5xl mb-4">🧘</div>
        <h1 className="text-4xl font-bold text-white mb-4">
          Meditație{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
            Ghidată
          </span>
        </h1>
        <p className="text-purple-200 text-lg max-w-2xl mx-auto">
          Practici de meditație pentru conectarea cu îngerii tăi, interpretarea numerelor angelice
          și alinierea spirituală.
        </p>
      </div>

      {/* Meditations */}
      <div className="space-y-6 mb-14">
        {meditations.map((med, i) => (
          <details key={i} className="group bg-purple-900/20 border border-purple-700/30 rounded-2xl overflow-hidden">
            <summary className="flex items-start gap-4 p-6 cursor-pointer list-none hover:bg-purple-800/20 transition-colors">
              <span className="text-3xl shrink-0">{med.icon}</span>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 flex-wrap mb-1">
                  <h2 className="text-white font-semibold text-lg">{med.title}</h2>
                </div>
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="text-xs bg-purple-800/50 text-purple-300 border border-purple-600/30 px-2 py-0.5 rounded-full">
                    ⏱ {med.duration}
                  </span>
                  <span className="text-xs bg-purple-800/50 text-purple-300 border border-purple-600/30 px-2 py-0.5 rounded-full">
                    {med.level}
                  </span>
                </div>
                <p className="text-purple-300 text-sm mt-2">{med.description}</p>
              </div>
              <span className="text-purple-400 shrink-0 group-open:rotate-180 transition-transform">▼</span>
            </summary>

            <div className="px-6 pb-6 border-t border-purple-800/30 pt-5">
              <ol className="space-y-3">
                {med.steps.map((step, j) => (
                  <li key={j} className="flex gap-3 text-purple-200">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-purple-700/50 text-purple-200 text-xs flex items-center justify-center font-bold">
                      {j + 1}
                    </span>
                    <span className="text-sm leading-relaxed">{step}</span>
                  </li>
                ))}
              </ol>
              <div className="mt-4 bg-purple-950/40 border border-purple-700/20 rounded-xl p-3">
                <p className="text-purple-300 text-xs">
                  <strong className="text-purple-200">💡 Sfat:</strong> {med.tip}
                </p>
              </div>
            </div>
          </details>
        ))}
      </div>

      {/* Quick practices */}
      <section>
        <h2 className="text-2xl font-bold text-white mb-6">Practici Rapide (2-7 minute)</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {quickPractices.map((p) => (
            <div key={p.title} className="bg-purple-900/20 border border-purple-700/30 rounded-xl p-5">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">{p.icon}</span>
                <div>
                  <h3 className="text-white font-medium">{p.title}</h3>
                  <span className="text-purple-400 text-xs">⏱ {p.time}</span>
                </div>
              </div>
              <p className="text-purple-300 text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="mt-10 bg-gradient-to-br from-purple-900/40 to-indigo-900/40 border border-purple-600/30 rounded-2xl p-6 text-center">
        <p className="text-purple-200 mb-4">
          Înainte sau după meditație, explorează mesajul numărului pe care l-ai observat recent:
        </p>
        <Link
          href="/semnificatie-numere-angelice"
          className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-500 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
        >
          ✨ Explorează Numerele Angelice
        </Link>
      </div>
    </div>
  );
}
