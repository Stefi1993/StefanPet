"use client";

import { useState } from "react";
import Link from "next/link";
import { getSlug } from "@/lib/angel-numbers";

const questions = [
  {
    question: "Ce element al naturii te atrage cel mai mult?",
    options: [
      { text: "🔥 Focul — Pasiunea și transformarea", value: 3 },
      { text: "💧 Apa — Emoțiile și intuiția", value: 2 },
      { text: "🌍 Pământul — Stabilitatea și concretul", value: 4 },
      { text: "🌬️ Aerul — Libertatea și gândirea", value: 5 },
    ],
  },
  {
    question: "Care este cel mai puternic calitate a ta?",
    options: [
      { text: "💡 Creativitatea și imaginația", value: 3 },
      { text: "❤️ Empatia și compasiunea", value: 6 },
      { text: "🔍 Analiza și profunzimea", value: 7 },
      { text: "⚡ Determinarea și curajul", value: 1 },
    ],
  },
  {
    question: "Ce te face să te simți cel mai împlinit?",
    options: [
      { text: "🎨 Crearea a ceva frumos sau util", value: 3 },
      { text: "🤝 Ajutarea celorlalți", value: 9 },
      { text: "📈 Atingerea succesului și prosperității", value: 8 },
      { text: "🧘 Liniștea interioară și pacea", value: 7 },
    ],
  },
  {
    question: "Cum gestionezi schimbările majore în viață?",
    options: [
      { text: "🚀 Le îmbrățișez cu entuziasm", value: 5 },
      { text: "📋 Le planific cu grijă", value: 4 },
      { text: "🌊 Mă las dus de val și am încredere", value: 2 },
      { text: "💪 Le înfrunt cu determinare", value: 1 },
    ],
  },
  {
    question: "Care culoare te atrage cel mai mult spiritual?",
    options: [
      { text: "🟣 Violet — Spiritualitate și intuiție", value: 7 },
      { text: "🩷 Roz — Iubire și compasiune", value: 6 },
      { text: "🟡 Auriu — Abundență și succes", value: 8 },
      { text: "⚪ Alb — Puritate și noi începuturi", value: 1 },
    ],
  },
  {
    question: "Ce moment al zilei simți cel mai multă energie spirituală?",
    options: [
      { text: "🌅 Dimineața devreme — noi începuturi", value: 1 },
      { text: "☀️ Amiaza — forță și claritate", value: 3 },
      { text: "🌆 Apusul — reflecție și gratitudine", value: 6 },
      { text: "🌙 Noaptea — mister și intuiție", value: 7 },
    ],
  },
  {
    question: "Care este cel mai important lucru în viața ta acum?",
    options: [
      { text: "💕 Relațiile și iubirea", value: 2 },
      { text: "🌱 Creșterea și evoluția personală", value: 9 },
      { text: "🏆 Realizările și recunoașterea", value: 8 },
      { text: "✨ Conexiunea spirituală și scopul", value: 11 },
    ],
  },
];

const resultMeanings: Record<number, { number: number; title: string; message: string }> = {
  1: { number: 1, title: "Numărul 1 — Pionierul Divin", message: "Îngerii tăi îți transmit energie de lider și deschizător de drumuri. Ești chemat să fii primul, să ai curaj și să îți urmezi propria cale cu încredere." },
  2: { number: 2, title: "Numărul 2 — Diplomatic Spiritual", message: "Îngerii tăi te ghidează prin energie de echilibru și parteneriat. Puterea ta stă în capacitatea de a aduce armonie și de a înțelege profund pe cei din jur." },
  3: { number: 3, title: "Numărul 3 — Artistul Divin", message: "Spiritul creativ și bucuria sunt darurile tale angelice. Îngerii îți spun să îți exprimi liber creativitatea — ea este canalul tău divin." },
  4: { number: 4, title: "Numărul 4 — Constructorul Sacru", message: "Energia ta angelică este de stabilitate și construcție. Îngerii îți confirmă că fundamentele pe care le construiești sunt binecuvântate și durabile." },
  5: { number: 5, title: "Numărul 5 — Spiritul Liber", message: "Libertatea și transformarea sunt esența ta spirituală. Îngerii te încurajează să îmbrațișezi schimbările — ele te duc spre destinul tău adevărat." },
  6: { number: 6, title: "Numărul 6 — Vindecătorul Iubitor", message: "Inima ta deschisă și capacitatea de a iubi sunt calitățile tale angelice supreme. Îngerii îți reamintesc că iubirea pe care o oferi se întoarce amplificată." },
  7: { number: 7, title: "Numărul 7 — Înțeleptul Mistic", message: "Căutarea adevărului și conexiunea cu dimensiunile superioare sunt calea ta. Îngerii îți confirmă că intuiția ta este un dar divin — ai încredere în ea." },
  8: { number: 8, title: "Numărul 8 — Abundentul Divin", message: "Energia prosperității și a succesului curge spre tine. Îngerii îți transmit că meriți abundența și că succesul tău va beneficia mulți." },
  9: { number: 9, title: "Numărul 9 — Umanitarul Celest", message: "Sufletul tău vechi și înțelepciunea ta profundă sunt daruri pentru umanitate. Îngerii te cheamă să servești cu compasiune — aceasta este cea mai înaltă misiune." },
  11: { number: 11, title: "Numărul 11 — Iluminatorul ✨", message: "Ai un număr maestru! Îngerii îți transmit că ești un canal de lumină spirituală. Sensibilitatea și intuiția ta extraordinară sunt menite să inspire și să trezească pe alții." },
};

export default function QuizClient() {
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [result, setResult] = useState<typeof resultMeanings[number] | null>(null);

  const handleAnswer = (value: number) => {
    const newAnswers = [...answers, value];

    if (currentQ < questions.length - 1) {
      setAnswers(newAnswers);
      setCurrentQ(currentQ + 1);
    } else {
      // Calculate result
      const sum = newAnswers.reduce((a, b) => a + b, 0);
      const avg = Math.round(sum / newAnswers.length);
      // Find closest result
      const keys = Object.keys(resultMeanings).map(Number);
      const closest = keys.reduce((a, b) =>
        Math.abs(b - avg) < Math.abs(a - avg) ? b : a
      );
      setResult(resultMeanings[closest]);
    }
  };

  const reset = () => {
    setCurrentQ(0);
    setAnswers([]);
    setResult(null);
  };

  if (result) {
    return (
      <div className="bg-gradient-to-br from-purple-900/50 to-indigo-900/50 border border-purple-600/40 rounded-2xl p-8 text-center">
        <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-purple-300 to-pink-300 mb-2">
          {result.number}
        </div>
        <h2 className="text-2xl font-bold text-white mb-4">{result.title}</h2>
        <p className="text-purple-200 text-lg leading-relaxed mb-8 italic">
          "{result.message}"
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href={`/semnificatie-numere-angelice/${getSlug(result.number)}`}
            className="bg-purple-600 hover:bg-purple-500 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
          >
            ✨ Semnificația Completă
          </Link>
          <button
            onClick={reset}
            className="border border-purple-600/40 text-purple-300 hover:text-white px-6 py-3 rounded-xl transition-colors"
          >
            Încearcă din nou
          </button>
        </div>
        <div className="mt-6 pt-6 border-t border-purple-700/30">
          <p className="text-purple-400 text-sm">Distribuie rezultatul tău:</p>
          <div className="flex justify-center gap-3 mt-3">
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=https://semndivin.ro/quiz-spiritual`}
              target="_blank" rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-200 text-sm transition-colors"
            >
              Facebook
            </a>
            <a
              href={`https://wa.me/?text=Am descoperit că numărul meu angelic protector este ${result.number}! Află și tu numărul tău pe semndivin.ro/quiz-spiritual`}
              target="_blank" rel="noopener noreferrer"
              className="text-green-400 hover:text-green-200 text-sm transition-colors"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    );
  }

  const q = questions[currentQ];
  const progress = ((currentQ) / questions.length) * 100;

  return (
    <div className="space-y-6">
      {/* Progress */}
      <div>
        <div className="flex justify-between text-purple-400 text-sm mb-2">
          <span>Întrebarea {currentQ + 1} din {questions.length}</span>
          <span>{Math.round(progress)}%</span>
        </div>
        <div className="h-2 bg-purple-900/40 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-purple-600 to-pink-500 transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Question */}
      <div className="bg-purple-900/20 border border-purple-700/30 rounded-2xl p-6">
        <h2 className="text-xl font-semibold text-white mb-6 text-center">{q.question}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {q.options.map((opt, i) => (
            <button
              key={i}
              onClick={() => handleAnswer(opt.value)}
              className="text-left bg-purple-900/30 hover:bg-purple-700/50 border border-purple-700/30 hover:border-purple-500/50 text-purple-200 hover:text-white p-4 rounded-xl transition-all duration-200 font-medium"
            >
              {opt.text}
            </button>
          ))}
        </div>
      </div>

      {currentQ > 0 && (
        <button
          onClick={() => { setCurrentQ(currentQ - 1); setAnswers(answers.slice(0, -1)); }}
          className="text-purple-400 hover:text-purple-200 text-sm transition-colors"
        >
          ← Înapoi
        </button>
      )}
    </div>
  );
}
