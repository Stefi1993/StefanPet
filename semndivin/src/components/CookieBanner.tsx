"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) setShow(true);
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setShow(false);
  };

  const decline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setShow(false);
  };

  if (!show) return null;

  return (
    <div
      role="dialog"
      aria-label="Consimțământ cookies"
      className="fixed bottom-0 left-0 right-0 z-50 bg-indigo-950/95 backdrop-blur-sm border-t border-purple-700/40 shadow-2xl"
    >
      <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="flex-1">
          <p className="text-purple-100 text-sm">
            <span className="font-semibold">🍪 Folosim cookie-uri</span> pentru a îmbunătăți experiența ta pe SemnDivin.ro.
            Prin continuarea navigării, accepți utilizarea cookie-urilor conform{" "}
            <Link href="/politica-de-cookies" className="text-purple-300 underline hover:text-purple-100">
              Politicii noastre de Cookies
            </Link>{" "}
            și{" "}
            <Link href="/gdpr" className="text-purple-300 underline hover:text-purple-100">
              GDPR
            </Link>.
          </p>
        </div>
        <div className="flex gap-3 shrink-0">
          <button
            onClick={decline}
            className="px-4 py-2 text-sm text-purple-300 border border-purple-700 rounded-lg hover:bg-purple-900/50 transition-colors"
          >
            Refuz
          </button>
          <button
            onClick={accept}
            className="px-4 py-2 text-sm bg-purple-600 text-white rounded-lg hover:bg-purple-500 transition-colors font-medium"
          >
            Accept Toate
          </button>
        </div>
      </div>
    </div>
  );
}
