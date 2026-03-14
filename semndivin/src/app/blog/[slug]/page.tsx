import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getArticle, getAllArticles, getRelatedArticles } from "@/lib/articles";
import { SITE_URL, SITE_NAME, generateBreadcrumbSchema, generateStructuredData } from "@/lib/seo";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllArticles().map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return { title: "Articol negăsit" };
  return {
    title: article.title,
    description: article.excerpt,
    keywords: article.tags.join(", "),
    alternates: { canonical: `${SITE_URL}/blog/${slug}` },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      url: `${SITE_URL}/blog/${slug}`,
      type: "article",
      publishedTime: article.publishedAt,
    },
  };
}

// Simple markdown-like renderer
function renderContent(content: string) {
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let key = 0;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (line.startsWith("## ")) {
      elements.push(<h2 key={key++} className="text-2xl font-bold text-white mt-8 mb-4">{line.slice(3)}</h2>);
    } else if (line.startsWith("### ")) {
      elements.push(<h3 key={key++} className="text-xl font-semibold text-purple-100 mt-6 mb-3">{line.slice(4)}</h3>);
    } else if (line.startsWith("- ")) {
      elements.push(<li key={key++} className="text-purple-200 ml-4 mb-1">{parseParagraph(line.slice(2))}</li>);
    } else if (line.startsWith("**") && line.endsWith("**") && line.length > 4) {
      elements.push(<p key={key++} className="text-white font-semibold mt-2">{line.slice(2, -2)}</p>);
    } else if (line.trim() === "") {
      elements.push(<div key={key++} className="h-2" />);
    } else {
      elements.push(<p key={key++} className="text-purple-200 leading-relaxed">{parseParagraph(line)}</p>);
    }
  }
  return elements;
}

function parseParagraph(text: string): React.ReactNode {
  const parts = text.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={i} className="text-white font-semibold">{part.slice(2, -2)}</strong>;
    }
    const linkMatch = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (linkMatch) {
      return <Link key={i} href={linkMatch[2]} className="text-purple-300 hover:text-purple-100 underline">{linkMatch[1]}</Link>;
    }
    return part;
  });
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const related = getRelatedArticles(slug, 3);

  const articleSchema = generateStructuredData("Article", {
    headline: article.title,
    description: article.excerpt,
    url: `${SITE_URL}/blog/${slug}`,
    datePublished: article.publishedAt,
    dateModified: article.publishedAt,
    inLanguage: "ro",
    author: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
    publisher: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
    keywords: article.tags.join(", "),
    articleSection: article.category,
    wordCount: article.content.split(" ").length,
    timeRequired: `PT${article.readingTime}M`,
  });

  const breadcrumb = generateBreadcrumbSchema([
    { name: "Acasă", url: SITE_URL },
    { name: "Blog", url: `${SITE_URL}/blog` },
    { name: article.title, url: `${SITE_URL}/blog/${slug}` },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <nav className="text-purple-400 text-sm mb-8">
          <ol className="flex gap-2 flex-wrap">
            <li><Link href="/" className="hover:text-purple-200">Acasă</Link></li>
            <li>/</li>
            <li><Link href="/blog" className="hover:text-purple-200">Blog</Link></li>
            <li>/</li>
            <li className="text-purple-200 line-clamp-1">{article.title}</li>
          </ol>
        </nav>

        {/* Header */}
        <header className="mb-10">
          <div className="flex items-center gap-3 mb-4 flex-wrap">
            <span className="text-xs bg-purple-800/60 text-purple-300 border border-purple-600/30 px-3 py-1 rounded-full">
              {article.category}
            </span>
            <span className="text-purple-400 text-sm">
              {new Date(article.publishedAt).toLocaleDateString("ro-RO", {
                day: "numeric", month: "long", year: "numeric",
              })}
            </span>
            <span className="text-purple-500 text-sm">· {article.readingTime} min citire</span>
          </div>

          <h1 className="text-3xl lg:text-4xl font-bold text-white mb-5 leading-tight">
            {article.title}
          </h1>
          <p className="text-purple-200 text-lg leading-relaxed border-l-4 border-purple-600 pl-4">
            {article.excerpt}
          </p>

          <div className="flex flex-wrap gap-2 mt-5">
            {article.tags.map((tag) => (
              <span key={tag} className="text-xs text-purple-400 bg-purple-900/30 border border-purple-700/30 px-2 py-1 rounded-full">
                #{tag}
              </span>
            ))}
          </div>
        </header>

        <div className="h-px bg-purple-800/30 mb-10" />

        {/* Content */}
        <div className="space-y-2">
          {renderContent(article.content)}
        </div>

        <div className="h-px bg-purple-800/30 my-12" />

        {/* Share */}
        <div className="bg-purple-900/20 border border-purple-700/30 rounded-2xl p-6 mb-10">
          <p className="text-white font-semibold mb-3">Distribie acest articol:</p>
          <div className="flex gap-3 flex-wrap">
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${SITE_URL}/blog/${slug}`}
              target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 bg-blue-700/40 hover:bg-blue-600/50 border border-blue-600/30 text-blue-200 px-4 py-2 rounded-lg text-sm transition-colors"
            >
              Facebook
            </a>
            <a
              href={`https://twitter.com/intent/tweet?url=${SITE_URL}/blog/${slug}&text=${encodeURIComponent(article.title)}`}
              target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 bg-sky-700/40 hover:bg-sky-600/50 border border-sky-600/30 text-sky-200 px-4 py-2 rounded-lg text-sm transition-colors"
            >
              Twitter / X
            </a>
            <a
              href={`https://wa.me/?text=${encodeURIComponent(article.title + " " + SITE_URL + "/blog/" + slug)}`}
              target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-700/40 hover:bg-green-600/50 border border-green-600/30 text-green-200 px-4 py-2 rounded-lg text-sm transition-colors"
            >
              WhatsApp
            </a>
          </div>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold text-white mb-6">Articole Similare</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {related.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/blog/${rel.slug}`}
                  className="group bg-purple-900/20 hover:bg-purple-800/30 border border-purple-700/30 hover:border-purple-500/40 rounded-xl p-4 transition-all"
                >
                  <p className="text-white font-medium text-sm group-hover:text-purple-200 leading-snug mb-2">
                    {rel.title}
                  </p>
                  <span className="text-purple-400 text-xs">{rel.readingTime} min →</span>
                </Link>
              ))}
            </div>
          </section>
        )}
      </article>
    </>
  );
}
