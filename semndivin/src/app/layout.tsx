import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import { SITE_NAME, SITE_DESCRIPTION, SITE_URL, generateWebSiteSchema, generateOrganizationSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: {
    default: `${SITE_NAME} — Spiritualitate și Numere Angelice`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: "numere angelice, spiritualitate, numerologie, semnificatie numere, ingeri pazitori, mesaje divine, spiritualitate Romania",
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: SITE_URL,
    types: {
      "application/rss+xml": `${SITE_URL}/rss.xml`,
    },
  },
  openGraph: {
    type: "website",
    locale: "ro_RO",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} — Spiritualitate și Numere Angelice`,
    description: SITE_DESCRIPTION,
    images: [{ url: `${SITE_URL}/og-default.jpg`, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@SemnDivin",
    creator: "@SemnDivin",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "YOUR_GOOGLE_SITE_VERIFICATION",
  },
  other: {
    "geo.region": "RO",
    "geo.country": "Romania",
    language: "Romanian",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ro">
      <head>
        <link rel="alternate" type="application/rss+xml" title={`${SITE_NAME} RSS Feed`} href="/rss.xml" />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        <meta name="theme-color" content="#4c1d95" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateWebSiteSchema()),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateOrganizationSchema()),
          }}
        />
      </head>
      <body className="bg-gradient-to-br from-indigo-950 via-purple-950 to-indigo-950 min-h-screen flex flex-col text-white antialiased" style={{ fontFamily: "'Segoe UI', system-ui, -apple-system, sans-serif" }}>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
