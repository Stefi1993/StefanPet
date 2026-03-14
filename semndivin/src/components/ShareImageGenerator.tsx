"use client";

import { useRef, useState } from "react";

interface ShareImageProps {
  number: number;
  message: string;
}

export default function ShareImageGenerator({ number, message }: ShareImageProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [generated, setGenerated] = useState(false);

  const generate = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Canvas size for Instagram square post
    canvas.width = 1080;
    canvas.height = 1080;

    // Background gradient
    const grad = ctx.createLinearGradient(0, 0, 1080, 1080);
    grad.addColorStop(0, "#1e1b4b");
    grad.addColorStop(0.5, "#4c1d95");
    grad.addColorStop(1, "#1e1b4b");
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 1080, 1080);

    // Decorative circles
    const circleGrad1 = ctx.createRadialGradient(900, 100, 0, 900, 100, 400);
    circleGrad1.addColorStop(0, "rgba(139,92,246,0.4)");
    circleGrad1.addColorStop(1, "transparent");
    ctx.fillStyle = circleGrad1;
    ctx.fillRect(0, 0, 1080, 1080);

    const circleGrad2 = ctx.createRadialGradient(180, 900, 0, 180, 900, 350);
    circleGrad2.addColorStop(0, "rgba(99,102,241,0.3)");
    circleGrad2.addColorStop(1, "transparent");
    ctx.fillStyle = circleGrad2;
    ctx.fillRect(0, 0, 1080, 1080);

    // Border
    ctx.strokeStyle = "rgba(139,92,246,0.4)";
    ctx.lineWidth = 3;
    ctx.strokeRect(30, 30, 1020, 1020);

    // Brand
    ctx.font = "bold 32px system-ui, sans-serif";
    ctx.fillStyle = "#c4b5fd";
    ctx.textAlign = "left";
    ctx.fillText("✨ SemnDivin.ro", 60, 90);

    // Main number
    const numGrad = ctx.createLinearGradient(0, 300, 0, 600);
    numGrad.addColorStop(0, "#c4b5fd");
    numGrad.addColorStop(0.5, "#f9a8d4");
    numGrad.addColorStop(1, "#c4b5fd");
    ctx.fillStyle = numGrad;
    ctx.font = `bold ${number >= 100 ? "220px" : "280px"} system-ui, sans-serif`;
    ctx.textAlign = "center";
    ctx.fillText(String(number), 540, 520);

    // Subtitle
    ctx.fillStyle = "#ffffff";
    ctx.font = "bold 52px system-ui, sans-serif";
    ctx.fillText("Numărul Angelic", 540, 620);

    // Message (word-wrap)
    ctx.fillStyle = "#ddd6fe";
    ctx.font = "36px system-ui, sans-serif";
    const words = message.split(" ");
    let line = "";
    let y = 720;
    const maxWidth = 880;
    const lineHeight = 50;

    for (const word of words) {
      const testLine = line + word + " ";
      const metrics = ctx.measureText(testLine);
      if (metrics.width > maxWidth && line !== "") {
        ctx.fillText(line.trim(), 540, y);
        line = word + " ";
        y += lineHeight;
        if (y > 900) break;
      } else {
        line = testLine;
      }
    }
    if (line && y <= 900) ctx.fillText(line.trim(), 540, y);

    // Bottom gradient bar
    const barGrad = ctx.createLinearGradient(0, 0, 1080, 0);
    barGrad.addColorStop(0, "#7c3aed");
    barGrad.addColorStop(0.5, "#ec4899");
    barGrad.addColorStop(1, "#7c3aed");
    ctx.fillStyle = barGrad;
    ctx.fillRect(0, 1050, 1080, 8);

    setGenerated(true);
  };

  const download = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const link = document.createElement("a");
    link.download = `numar-angelic-${number}-semndivin.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();
  };

  return (
    <div className="bg-purple-900/20 border border-purple-700/30 rounded-2xl p-6">
      <h3 className="text-white font-semibold text-lg mb-2 flex items-center gap-2">
        <span>📱</span> Generează Imagine pentru Instagram
      </h3>
      <p className="text-purple-300 text-sm mb-5">
        Creează o imagine frumoasă cu numărul {number} pentru a o distribui pe social media.
      </p>

      <div className="flex flex-col sm:flex-row gap-3 mb-5">
        <button
          onClick={generate}
          className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-semibold py-3 rounded-xl transition-all"
        >
          🎨 Generează Imaginea
        </button>
        {generated && (
          <button
            onClick={download}
            className="flex-1 bg-green-700/50 hover:bg-green-600/60 border border-green-600/40 text-green-200 font-semibold py-3 rounded-xl transition-all"
          >
            ⬇️ Descarcă PNG
          </button>
        )}
      </div>

      <canvas
        ref={canvasRef}
        className={`w-full rounded-xl ${generated ? "block" : "hidden"}`}
        style={{ maxHeight: "400px", objectFit: "contain" }}
      />
    </div>
  );
}
