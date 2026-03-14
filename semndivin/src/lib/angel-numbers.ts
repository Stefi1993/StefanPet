// Angel numbers data for all numbers 1-999

export interface AngelNumber {
  number: number;
  title: string;
  shortDescription: string;
  fullDescription: string;
  meaning: string;
  spiritualMessage: string;
  keywords: string[];
  category: string;
}

// Categories for angel numbers
const categories: { [key: string]: string } = {
  "1-9": "Numere de o cifră",
  "10-99": "Numere de două cifre",
  "100-199": "Numere de trei cifre - Seria 1",
  "200-299": "Numere de trei cifre - Seria 2",
  "300-399": "Numere de trei cifre - Seria 3",
  "400-499": "Numere de trei cifre - Seria 4",
  "500-599": "Numere de trei cifre - Seria 5",
  "600-699": "Numere de trei cifre - Seria 6",
  "700-799": "Numere de trei cifre - Seria 7",
  "800-899": "Numere de trei cifre - Seria 8",
  "900-999": "Numere de trei cifre - Seria 9",
};

function getCategory(n: number): string {
  if (n < 10) return "Numere de o cifră";
  if (n < 100) return "Numere de două cifre";
  const series = Math.floor(n / 100) * 100;
  return `Numere de trei cifre - Seria ${Math.floor(n / 100)}`;
}

function sumDigits(n: number): number {
  return String(n)
    .split("")
    .reduce((acc, d) => acc + parseInt(d), 0);
}

function reduceToSingle(n: number): number {
  while (n > 9) n = sumDigits(n);
  return n;
}

const singleDigitMeanings: { [key: number]: string } = {
  1: "noi începuturi, lider, independență și creație",
  2: "echilibru, parteneriat, diplomație și sensibilitate",
  3: "creativitate, comunicare, bucurie și expansiune",
  4: "stabilitate, muncă asiduă, fundație solidă și ordine",
  5: "schimbare, libertate, aventură și adaptabilitate",
  6: "armonie, familie, responsabilitate și iubire necondiționată",
  7: "spiritualitate, intuiție, înțelepciune și introspecție",
  8: "abundență, succes material, putere și karma",
  9: "completare, iluminare, umanitarism și înțelepciune superioară",
};

const energyWords: string[] = [
  "transformare", "iluminare", "iubire divină", "ghidare angelică",
  "protecție cerească", "mesaj divin", "trezire spirituală", "evoluție",
  "prosperitate", "pace interioară", "claritate", "intuiție sporită",
  "conexiune divină", "vindecare", "echilibru", "armonie universală",
];

const positiveAffirmations: string[] = [
  "Îngerii tăi te înconjoară cu iubire și lumină divină.",
  "Universul îți trimite un semn puternic de susținere și ghidare.",
  "Ești pe calea cea bună și îngerii îți confirmă progresul.",
  "O perioadă de abundență și binecuvântare divină te așteaptă.",
  "Ai puterea de a-ți manifesta visurile cu ajutorul divinității.",
  "Îngerii tăi păzitori sunt alături de tine în fiecare pas.",
  "Energia divină curge prin tine și îți luminează calea.",
  "Sufletul tău evoluează frumos pe drumul spiritual ales.",
];

function generateAngelNumber(n: number): AngelNumber {
  const digits = String(n).split("").map(Number);
  const rootNumber = reduceToSingle(n);
  const rootMeaning = singleDigitMeanings[rootNumber] || "energie universală";

  const digitDescriptions = digits
    .map((d) => `${d} (${singleDigitMeanings[d] || "energie universală"})`)
    .join(", ");

  const affirmation = positiveAffirmations[n % positiveAffirmations.length];
  const energy = energyWords[n % energyWords.length];

  let specificMeaning = "";
  let specificMessage = "";

  if (digits.every((d) => d === digits[0])) {
    // Repeating numbers like 111, 222, 333
    specificMeaning = `Numărul ${n} este un număr maestru de intensitate maximă. Repetarea cifrei ${digits[0]} amplifică exponențial energiile acesteia: ${singleDigitMeanings[digits[0]]}. Acesta este unul dintre cele mai puternice semne angelice pe care le poți primi.`;
    specificMessage = `Îngerii tăi îți trimit un mesaj de putere maximă prin numărul ${n}. Energia de ${singleDigitMeanings[digits[0]]} este amplificată la cel mai înalt nivel. Fii atent la gândurile și intențiile tale în acest moment, deoarece manifestarea este extrem de rapidă.`;
  } else if (n >= 100 && digits[0] === 1) {
    specificMeaning = `Numărul ${n} combină energia leadership-ului și a noilor începuturi (1) cu energiile ${digitDescriptions}. Acesta marchează un punct de tranziție important în călătoria ta spirituală.`;
    specificMessage = `Îngerii te încurajează să faci primul pas cu curaj. ${affirmation}`;
  } else if (n % 11 === 0 && n > 11) {
    specificMeaning = `Numărul ${n} conține un multiple al numărului maestru 11, aducând energie de inspirație, intuiție superioară și iluminare spirituală amplificată.`;
    specificMessage = `Intuiția ta este acum la cote maxime. ${affirmation}`;
  } else {
    specificMeaning = `Numărul angelic ${n} combină energiile cifrelor sale componente: ${digitDescriptions}. Suma cifrelor (${digits.join("+")} = ${sumDigits(n)}${sumDigits(n) !== rootNumber ? ` = ${rootNumber}` : ""}) indică energia fundamentală de ${rootMeaning}.`;
    specificMessage = `${affirmation} Numărul ${n} îți aduce ${energy}.`;
  }

  const keywords = [
    singleDigitMeanings[digits[0]]?.split(",")[0] || "energie",
    rootMeaning.split(",")[0],
    energy,
    "numere angelice",
    `semnificatia numarului ${n}`,
  ];

  return {
    number: n,
    title: `Numărul Angelic ${n} - Semnificație și Mesaj Divin`,
    shortDescription: `Descoperă semnificația spirituală a numărului angelic ${n}. Mesajul pe care îngerii tăi îl transmit prin această secvență numerică sacră.`,
    fullDescription: `
Numărul angelic ${n} este un mesaj special trimis de îngerii tăi păzitori pentru a te ghida pe calea spirituală.
Când observi în mod repetat numărul ${n} – pe ceasuri (${digits.join("")}:00), plăci de înmatriculare, numere de telefon sau în alte contexte – acesta nu este o simplă coincidență, ci o sincronicitate divină menită să îți atragă atenția.

${specificMeaning}

Fiecare cifră din componența numărului ${n} aduce o vibrație unică:
${digits.map((d, i) => `• Cifra ${d} pe poziția ${i + 1}: reprezintă ${singleDigitMeanings[d] || "energie universală"}`).join("\n")}

Energia numerologică de bază a numărului ${n} se reduce la ${rootNumber}, vibrația de ${rootMeaning}.
    `.trim(),
    meaning: specificMeaning,
    spiritualMessage: specificMessage,
    keywords,
    category: getCategory(n),
  };
}

// Generate all numbers 1-999
const allAngelNumbers: AngelNumber[] = Array.from({ length: 999 }, (_, i) =>
  generateAngelNumber(i + 1)
);

export function getAngelNumber(n: number): AngelNumber | null {
  if (n < 1 || n > 999) return null;
  return allAngelNumbers[n - 1];
}

export function getAllAngelNumbers(): AngelNumber[] {
  return allAngelNumbers;
}

export function getAngelNumbersByCategory(category: string): AngelNumber[] {
  return allAngelNumbers.filter((an) => an.category === category);
}

export function getCategories(): string[] {
  return [
    "Numere de o cifră",
    "Numere de două cifre",
    ...Array.from({ length: 9 }, (_, i) => `Numere de trei cifre - Seria ${i + 1}`),
  ];
}

export function getRelatedNumbers(n: number, count: number = 6): AngelNumber[] {
  const rootNumber = reduceToSingle(n);
  return allAngelNumbers
    .filter((an) => an.number !== n && reduceToSingle(an.number) === rootNumber)
    .slice(0, count);
}

export function getFeaturedNumbers(): AngelNumber[] {
  const featured = [111, 222, 333, 444, 555, 666, 777, 888, 999, 11, 22, 33];
  return featured.map((n) => getAngelNumber(n)!).filter(Boolean);
}

export function getSlug(n: number): string {
  return `semnificatia-numarului-angelic-${n}`;
}

export function numberFromSlug(slug: string): number | null {
  const match = slug.match(/^semnificatia-numarului-angelic-(\d+)$/);
  if (!match) return null;
  const n = parseInt(match[1]);
  return n >= 1 && n <= 999 ? n : null;
}
