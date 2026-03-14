import { getAllAngelNumbers, getSlug } from "@/lib/angel-numbers";
import { SITE_URL, SITE_NAME, SITE_DESCRIPTION } from "@/lib/seo";

export const revalidate = 86400;

export async function GET() {
  const allNumbers = getAllAngelNumbers();

  // Feature the most notable numbers in RSS (first 50 + all repeating)
  const featured = allNumbers.filter(
    (an) =>
      an.number <= 50 ||
      String(an.number)
        .split("")
        .every((d) => d === String(an.number)[0]) ||
      [11, 22, 33, 44, 55, 66, 77, 88, 99, 111, 222, 333, 444, 555, 666, 777, 888, 999].includes(
        an.number
      )
  );

  const items = featured
    .slice(0, 100)
    .map(
      (an) => `
    <item>
      <title><![CDATA[Numărul Angelic ${an.number} — ${an.shortDescription.slice(0, 80)}]]></title>
      <link>${SITE_URL}/semnificatie-numere-angelice/${getSlug(an.number)}</link>
      <guid isPermaLink="true">${SITE_URL}/semnificatie-numere-angelice/${getSlug(an.number)}</guid>
      <description><![CDATA[${an.shortDescription}]]></description>
      <category>Numere Angelice</category>
      <category>${an.category}</category>
      <pubDate>Mon, 01 Jan 2024 00:00:00 +0000</pubDate>
      <language>ro</language>
    </item>`
    )
    .join("");

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"
  xmlns:atom="http://www.w3.org/2005/Atom"
  xmlns:dc="http://purl.org/dc/elements/1.1/"
  xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>${SITE_NAME} — Numere Angelice și Spiritualitate</title>
    <link>${SITE_URL}</link>
    <description>${SITE_DESCRIPTION}</description>
    <language>ro</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${SITE_URL}/rss.xml" rel="self" type="application/rss+xml"/>
    <image>
      <url>${SITE_URL}/logo.png</url>
      <title>${SITE_NAME}</title>
      <link>${SITE_URL}</link>
    </image>
    <copyright>© ${new Date().getFullYear()} ${SITE_NAME}. Toate drepturile rezervate.</copyright>
    <managingEditor>contact@semndivin.ro (${SITE_NAME})</managingEditor>
    <webMaster>contact@semndivin.ro (${SITE_NAME})</webMaster>
    <ttl>1440</ttl>
    <category>Spiritualitate</category>
    <category>Numerologie</category>
    <category>Numere Angelice</category>
    ${items}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=86400, stale-while-revalidate=43200",
    },
  });
}
