"use client";

import { useState } from "react";

export default function NewsletterForm({ compact = false }: { compact?: boolean }) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, name }),
      });
      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setMessage(data.message);
        setEmail("");
        setName("");
      } else {
        setStatus("error");
        setMessage(data.error || "Eroare. Încearcă din nou.");
      }
    } catch {
      setStatus("error");
      setMessage("Eroare de conexiune. Încearcă din nou.");
    }
  };

  if (status === "success") {
    return (
      <div className="text-center py-4">
        <div className="text-4xl mb-3">✅</div>
        <p className="text-green-300 font-medium">{message}</p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className={compact ? "flex gap-2" : "space-y-3"}>
      {!compact && (
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Prenumele tău (opțional)"
          className="w-full bg-purple-950/50 border border-purple-700/40 text-white placeholder-purple-500 rounded-xl px-4 py-3 focus:outline-none focus:border-purple-400 transition-colors text-sm"
        />
      )}
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        placeholder="Adresa ta de email"
        className={`${compact ? "flex-1" : "w-full"} bg-purple-950/50 border border-purple-700/40 text-white placeholder-purple-500 rounded-xl px-4 py-3 focus:outline-none focus:border-purple-400 transition-colors text-sm`}
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className={`${compact ? "shrink-0 px-4" : "w-full"} bg-purple-600 hover:bg-purple-500 disabled:opacity-50 text-white font-semibold py-3 px-6 rounded-xl transition-colors text-sm`}
      >
        {status === "loading" ? "..." : compact ? "Abonare" : "Mă Abonez Gratuit ✨"}
      </button>
      {status === "error" && (
        <p className="text-red-400 text-xs">{message}</p>
      )}
    </form>
  );
}
