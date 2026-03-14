import { Metadata } from "next";

export const SITE_URL = "https://semndivin.ro";
export const SITE_NAME = "SemnDivin.ro";
export const SITE_DESCRIPTION =
  "Descoperă semnificația spirituală a numerelor angelice, simboluri divine și mesaje din univers. Ghid complet de spiritualitate în limba română.";

export function generateMetadata({
  title,
  description,
  path,
  image,
  type = "website",
  keywords,
  publishedTime,
  modifiedTime,
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: string;
  keywords?: string[];
  publishedTime?: string;
  modifiedTime?: string;
}): Metadata {
  const fullTitle = title.includes(SITE_NAME)
    ? title
    : `${title} | ${SITE_NAME}`;
  const url = `${SITE_URL}${path}`;
  const ogImage = image || `${SITE_URL}/og-default.jpg`;

  return {
    title: fullTitle,
    description,
    keywords: [
      "spiritualitate",
      "numere angelice",
      "semnificatie numere",
      "spiritualitate Romania",
      "ingeri pazitori",
      "mesaje divine",
      "numerologie",
      ...(keywords || []),
    ].join(", "),
    authors: [{ name: SITE_NAME, url: SITE_URL }],
    creator: SITE_NAME,
    publisher: SITE_NAME,
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: url,
      types: {
        "application/rss+xml": `${SITE_URL}/rss.xml`,
      },
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE_NAME,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
      locale: "ro_RO",
      type: type as "website" | "article",
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage],
      creator: "@SemnDivin",
      site: "@SemnDivin",
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
    other: {
      "geo.region": "RO",
      "geo.country": "Romania",
      language: "Romanian",
      "content-language": "ro",
    },
  };
}

export function generateStructuredData(type: string, data: Record<string, unknown>) {
  return {
    "@context": "https://schema.org",
    "@type": type,
    ...data,
  };
}

export function generateBreadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function generateWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    inLanguage: "ro",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/semnificatie-numere-angelice?cauta={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    description: SITE_DESCRIPTION,
    inLanguage: "ro",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: "contact@semndivin.ro",
      availableLanguage: "Romanian",
    },
    sameAs: [
      "https://www.facebook.com/semndivin",
      "https://www.instagram.com/semndivin",
    ],
  };
}
