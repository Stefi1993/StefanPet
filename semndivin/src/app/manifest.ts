import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "SemnDivin.ro — Numere Angelice",
    short_name: "SemnDivin",
    description:
      "Ghid complet de spiritualitate și numere angelice 1-999 în română.",
    start_url: "/",
    display: "standalone",
    background_color: "#1e1b4b",
    theme_color: "#4c1d95",
    orientation: "portrait",
    lang: "ro",
    categories: ["lifestyle", "education", "spirituality"],
    icons: [
      {
        src: "/icons/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/icons/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
    screenshots: [
      {
        src: "/og-default.jpg",
        sizes: "1200x630",
        type: "image/jpeg",
      },
    ],
    shortcuts: [
      {
        name: "Numere Angelice",
        url: "/semnificatie-numere-angelice",
        description: "Caută semnificația oricărui număr angelic",
      },
      {
        name: "Calculator",
        url: "/calculator-numerologic",
        description: "Calculează numărul căii vieții",
      },
      {
        name: "Horoscop Zilnic",
        url: "/horoscop-numeric-zilnic",
        description: "Numărul angelic al zilei de azi",
      },
    ],
  };
}
