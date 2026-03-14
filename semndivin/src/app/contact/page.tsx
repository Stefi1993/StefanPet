import { Metadata } from "next";
import Link from "next/link";
import { SITE_URL, SITE_NAME } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contactează echipa ${SITE_NAME}. Suntem here să te ajutăm cu orice întrebări despre numerologie angelică și spiritualitate.`,
  alternates: { canonical: `${SITE_URL}/contact` },
};

export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      <nav className="text-purple-400 text-sm mb-8">
        <ol className="flex gap-2">
          <li><Link href="/" className="hover:text-purple-200">Acasă</Link></li>
          <li>/</li>
          <li className="text-purple-200">Contact</li>
        </ol>
      </nav>

      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-white mb-4">Contactează-ne</h1>
        <p className="text-purple-200 text-lg max-w-2xl mx-auto">
          Ai întrebări despre numerele angelice sau vrei să ne trimiți un mesaj? Suntem bucuroși să te ajutăm.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Info */}
        <div className="space-y-6">
          <div className="bg-purple-900/20 border border-purple-700/30 rounded-2xl p-6">
            <h2 className="text-xl font-bold text-white mb-5">Informații de Contact</h2>
            <div className="space-y-4">
              <div className="flex gap-3">
                <span className="text-2xl">📧</span>
                <div>
                  <p className="text-purple-400 text-xs uppercase tracking-wider mb-1">Email General</p>
                  <a href="mailto:contact@semndivin.ro" className="text-white hover:text-purple-200 transition-colors">
                    contact@semndivin.ro
                  </a>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-2xl">🔒</span>
                <div>
                  <p className="text-purple-400 text-xs uppercase tracking-wider mb-1">GDPR & Date Personale</p>
                  <a href="mailto:gdpr@semndivin.ro" className="text-white hover:text-purple-200 transition-colors">
                    gdpr@semndivin.ro
                  </a>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-2xl">🌍</span>
                <div>
                  <p className="text-purple-400 text-xs uppercase tracking-wider mb-1">Locație</p>
                  <p className="text-white">România</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-purple-900/20 border border-purple-700/30 rounded-2xl p-6">
            <h2 className="text-xl font-bold text-white mb-4">Urmărește-ne</h2>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/semndivin"
                className="flex items-center gap-2 text-purple-300 hover:text-white transition-colors"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span>Facebook</span>
              </a>
              <a
                href="https://www.instagram.com/semndivin"
                className="flex items-center gap-2 text-purple-300 hover:text-white transition-colors"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span>Instagram</span>
              </a>
            </div>
          </div>

          <div className="bg-purple-900/20 border border-purple-700/30 rounded-2xl p-6">
            <h2 className="text-lg font-bold text-white mb-3">Timp de Răspuns</h2>
            <p className="text-purple-200 text-sm">
              Răspundem la toate mesajele în termen de <strong className="text-white">1-3 zile lucrătoare</strong>.
              Pentru solicitări GDPR, termenul legal este de 30 de zile.
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-purple-900/20 border border-purple-700/30 rounded-2xl p-6">
          <h2 className="text-xl font-bold text-white mb-5">Trimite un Mesaj</h2>
          <form className="space-y-4" action="mailto:contact@semndivin.ro" method="post" encType="text/plain">
            <div>
              <label htmlFor="name" className="block text-purple-300 text-sm mb-2">
                Numele tău <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full bg-purple-950/50 border border-purple-700/40 text-white placeholder-purple-500 rounded-xl px-4 py-3 focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-500/30 transition-colors"
                placeholder="Numele tău complet"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-purple-300 text-sm mb-2">
                Email <span className="text-red-400">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full bg-purple-950/50 border border-purple-700/40 text-white placeholder-purple-500 rounded-xl px-4 py-3 focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-500/30 transition-colors"
                placeholder="email@exemplu.ro"
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-purple-300 text-sm mb-2">
                Subiect <span className="text-red-400">*</span>
              </label>
              <select
                id="subject"
                name="subject"
                required
                className="w-full bg-purple-950/50 border border-purple-700/40 text-white rounded-xl px-4 py-3 focus:outline-none focus:border-purple-400 transition-colors"
              >
                <option value="">Selectează subiectul</option>
                <option value="intrebare-numere">Întrebare despre numere angelice</option>
                <option value="colaborare">Propunere de colaborare</option>
                <option value="gdpr">Solicitare GDPR</option>
                <option value="problema-tehnica">Problemă tehnică</option>
                <option value="altele">Altele</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="block text-purple-300 text-sm mb-2">
                Mesaj <span className="text-red-400">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="w-full bg-purple-950/50 border border-purple-700/40 text-white placeholder-purple-500 rounded-xl px-4 py-3 focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-500/30 transition-colors resize-none"
                placeholder="Scrie mesajul tău here..."
              />
            </div>
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="gdpr-consent"
                name="gdpr-consent"
                required
                className="mt-1"
              />
              <label htmlFor="gdpr-consent" className="text-purple-300 text-sm">
                Sunt de acord cu{" "}
                <Link href="/politica-de-confidentialitate" className="text-purple-200 underline hover:text-white">
                  Politica de Confidențialitate
                </Link>{" "}
                și cu prelucrarea datelor mele personale în scopul răspunsului la solicitare.
              </label>
            </div>
            <button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-500 text-white font-semibold py-3 rounded-xl transition-colors"
            >
              Trimite Mesajul ✉️
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
