import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Compress output
  compress: true,

  // Generate ETags for caching
  generateEtags: true,

  // Power headers
  poweredByHeader: false,

  // Security headers
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com",
              "style-src 'self' 'unsafe-inline'",
              "img-src 'self' data: https:",
              "font-src 'self'",
              "connect-src 'self' https://www.google-analytics.com",
              "frame-ancestors 'none'",
            ].join("; "),
          },
        ],
      },
      {
        source: "/:path*.xml",
        headers: [
          { key: "Cache-Control", value: "public, max-age=86400, stale-while-revalidate=43200" },
        ],
      },
      {
        source: "/semnificatie-numere-angelice/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=3600, stale-while-revalidate=86400" },
        ],
      },
    ];
  },

  // Redirects for SEO
  async redirects() {
    return [
      // Handle direct number searches
      {
        source: "/semnificatie-numere-angelice",
        has: [{ type: "query", key: "numar", value: "(?<num>\\d+)" }],
        destination: "/semnificatie-numere-angelice/semnificatia-numarului-angelic-:num",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
