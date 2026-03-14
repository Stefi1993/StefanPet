"use client";

import { useState, useEffect } from "react";

interface Comment {
  id: string;
  name: string;
  text: string;
  date: string;
  likes: number;
}

interface CommentsProps {
  pageId: string;
  title?: string;
}

export default function Comments({ pageId, title = "Experiențele Tale" }: CommentsProps) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(`comments-${pageId}`);
    if (stored) {
      try {
        setComments(JSON.parse(stored));
      } catch {}
    }
  }, [pageId]);

  const saveComments = (updated: Comment[]) => {
    localStorage.setItem(`comments-${pageId}`, JSON.stringify(updated));
    setComments(updated);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !text.trim()) return;

    setSubmitting(true);
    setTimeout(() => {
      const newComment: Comment = {
        id: Date.now().toString(),
        name: name.trim(),
        text: text.trim(),
        date: new Date().toLocaleDateString("ro-RO", {
          day: "numeric",
          month: "long",
          year: "numeric",
        }),
        likes: 0,
      };
      saveComments([newComment, ...comments]);
      setName("");
      setText("");
      setSubmitting(false);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
    }, 600);
  };

  const handleLike = (id: string) => {
    const updated = comments.map((c) =>
      c.id === id ? { ...c, likes: c.likes + 1 } : c
    );
    saveComments(updated);
  };

  return (
    <section className="mt-12 pt-8 border-t border-purple-800/30">
      <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
        <span>💬</span> {title}
      </h2>

      {/* Form */}
      <form onSubmit={handleSubmit} className="bg-purple-900/20 border border-purple-700/30 rounded-2xl p-5 mb-8 space-y-3">
        <h3 className="text-white font-medium">Împărtășește experiența ta cu acest număr:</h3>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          placeholder="Prenumele tău"
          maxLength={50}
          className="w-full bg-purple-950/50 border border-purple-700/40 text-white placeholder-purple-500 rounded-xl px-4 py-2.5 focus:outline-none focus:border-purple-400 text-sm transition-colors"
        />
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
          rows={3}
          maxLength={500}
          placeholder="Descrie când și în ce context ai văzut acest număr și ce s-a întâmplat după..."
          className="w-full bg-purple-950/50 border border-purple-700/40 text-white placeholder-purple-500 rounded-xl px-4 py-2.5 focus:outline-none focus:border-purple-400 text-sm transition-colors resize-none"
        />
        <div className="flex items-center justify-between">
          <span className="text-purple-500 text-xs">{text.length}/500</span>
          <button
            type="submit"
            disabled={submitting || !name.trim() || !text.trim()}
            className="bg-purple-600 hover:bg-purple-500 disabled:opacity-50 text-white text-sm font-medium px-5 py-2 rounded-lg transition-colors"
          >
            {submitting ? "Se trimite..." : "Trimite ✨"}
          </button>
        </div>
        {submitted && (
          <p className="text-green-400 text-sm">Mulțumim! Experiența ta a fost adăugată.</p>
        )}
        <p className="text-purple-500 text-xs">
          * Comentariile sunt stocate local în browserul tău.
        </p>
      </form>

      {/* Comments list */}
      {comments.length === 0 ? (
        <p className="text-purple-400 text-center py-6">
          Fii primul care împărtășește experiența cu acest număr! ✨
        </p>
      ) : (
        <div className="space-y-4">
          {comments.map((c) => (
            <div key={c.id} className="bg-purple-900/15 border border-purple-700/20 rounded-xl p-4">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white text-sm font-bold">
                    {c.name[0].toUpperCase()}
                  </div>
                  <span className="text-white font-medium text-sm">{c.name}</span>
                </div>
                <span className="text-purple-500 text-xs">{c.date}</span>
              </div>
              <p className="text-purple-200 text-sm leading-relaxed">{c.text}</p>
              <button
                onClick={() => handleLike(c.id)}
                className="mt-2 text-purple-400 hover:text-purple-200 text-xs flex items-center gap-1 transition-colors"
              >
                ❤️ {c.likes > 0 ? c.likes : "Apreciezi?"}
              </button>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
