import { MetadataRoute } from "next";
import { getAllAngelNumbers, getSlug } from "@/lib/angel-numbers";
import { getAllArticles } from "@/lib/articles";
import { SITE_URL } from "@/lib/seo";

export const revalidate = 86400;

export default function sitemap(): MetadataRoute.Sitemap {
  const allNumbers = getAllAngelNumbers();
  const allArticles = getAllArticles();
  const today = new Date().toISOString().split("T")[0];

  const staticPages: MetadataRoute.Sitemap = [
    { url: SITE_URL, lastModified: today, changeFrequency: "weekly", priority: 1.0 },
    { url: `${SITE_URL}/semnificatie-numere-angelice`, lastModified: today, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/blog`, lastModified: today, changeFrequency: "weekly", priority: 0.85 },
    { url: `${SITE_URL}/calculator-numerologic`, lastModified: "2024-01-01", changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/quiz-spiritual`, lastModified: "2024-01-01", changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/horoscop-numeric-zilnic`, lastModified: today, changeFrequency: "daily", priority: 0.9 },
    { url: `${SITE_URL}/meditatie-ghidata`, lastModified: "2024-01-01", changeFrequency: "monthly", priority: 0.75 },
    { url: `${SITE_URL}/cautare`, lastModified: "2024-01-01", changeFrequency: "monthly", priority: 0.5 },
    // Theme categories
    { url: `${SITE_URL}/numere-angelice/dragoste`, lastModified: "2024-01-01", changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/numere-angelice/bani`, lastModified: "2024-01-01", changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/numere-angelice/sanatate`, lastModified: "2024-01-01", changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/numere-angelice/spiritualitate`, lastModified: "2024-01-01", changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/numere-angelice/transformare`, lastModified: "2024-01-01", changeFrequency: "monthly", priority: 0.75 },
    { url: `${SITE_URL}/numere-angelice/avertisment`, lastModified: "2024-01-01", changeFrequency: "monthly", priority: 0.7 },
    // Info pages
    { url: `${SITE_URL}/despre-noi`, lastModified: "2024-01-01", changeFrequency: "monthly", priority: 0.5 },
    { url: `${SITE_URL}/contact`, lastModified: "2024-01-01", changeFrequency: "monthly", priority: 0.5 },
    { url: `${SITE_URL}/termeni-si-conditii`, lastModified: "2024-01-01", changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE_URL}/politica-de-confidentialitate`, lastModified: "2024-01-01", changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE_URL}/politica-de-cookies`, lastModified: "2024-01-01", changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE_URL}/gdpr`, lastModified: "2024-01-01", changeFrequency: "yearly", priority: 0.3 },
  ];

  const articlePages: MetadataRoute.Sitemap = allArticles.map((a) => ({
    url: `${SITE_URL}/blog/${a.slug}`,
    lastModified: a.publishedAt,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const numberPages: MetadataRoute.Sitemap = allNumbers.map((an) => {
    const isRepeating = String(an.number).split("").every((d) => d === String(an.number)[0]);
    const isMaster = [11, 22, 33, 44, 55, 66, 77, 88, 99].includes(an.number);
    const priority = isRepeating || isMaster ? 0.85 : an.number < 100 ? 0.75 : 0.7;

    return {
      url: `${SITE_URL}/semnificatie-numere-angelice/${getSlug(an.number)}`,
      lastModified: "2024-01-01",
      changeFrequency: "monthly" as const,
      priority,
    };
  });

  return [...staticPages, ...articlePages, ...numberPages];
}
