import { MetadataRoute } from "next";
import { getAllAngelNumbers, getSlug } from "@/lib/angel-numbers";
import { SITE_URL } from "@/lib/seo";

export const revalidate = 86400; // 24 hours

export default function sitemap(): MetadataRoute.Sitemap {
  const allNumbers = getAllAngelNumbers();
  const now = new Date().toISOString();
  const today = now.split("T")[0];

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: today,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/semnificatie-numere-angelice`,
      lastModified: today,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/despre-noi`,
      lastModified: "2024-01-01",
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified: "2024-01-01",
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${SITE_URL}/termeni-si-conditii`,
      lastModified: "2024-01-01",
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/politica-de-confidentialitate`,
      lastModified: "2024-01-01",
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/politica-de-cookies`,
      lastModified: "2024-01-01",
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/gdpr`,
      lastModified: "2024-01-01",
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  // Angel number pages
  const numberPages: MetadataRoute.Sitemap = allNumbers.map((an) => {
    // Higher priority for popular/repeating numbers
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

  return [...staticPages, ...numberPages];
}
