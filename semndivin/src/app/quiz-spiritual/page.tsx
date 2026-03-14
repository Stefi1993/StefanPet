import { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/seo";
import QuizClient from "./QuizClient";

export const metadata: Metadata = {
  title: "Quiz Spiritual — Descoperă Numărul Tău Angelic Protector",
  description:
    "Răspunde la 7 întrebări spirituale și descoperă care este numărul angelic protector al tău. Quiz gratuit în română cu rezultate personalizate.",
  keywords:
    "quiz spiritual, numarul meu angelic, test spiritualitate, quiz numerologie, inger protector",
  alternates: { canonical: `${SITE_URL}/quiz-spiritual` },
};

export default function QuizPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <nav className="text-purple-400 text-sm mb-8">
        <ol className="flex gap-2">
          <li><Link href="/" className="hover:text-purple-200">Acasă</Link></li>
          <li>/</li>
          <li className="text-purple-200">Quiz Spiritual</li>
        </ol>
      </nav>

      <div className="text-center mb-10">
        <div className="text-5xl mb-4">🔮</div>
        <h1 className="text-4xl font-bold text-white mb-4">
          Care este{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
            Numărul Tău Angelic
          </span>{" "}
          Protector?
        </h1>
        <p className="text-purple-200 text-lg">
          Răspunde la 7 întrebări și descoperă care număr angelic rezonează cel mai puternic cu sufletul tău.
        </p>
      </div>

      <QuizClient />
    </div>
  );
}
