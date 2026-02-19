import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/' },
      // Block any backend/LMS-style paths if they ever exist (per PDF)
      { userAgent: '*', disallow: ['/dashboard/', '/cart/', '/checkout/', '/api/'] },
    ],
    sitemap: 'https://deinephotography.com/sitemap.xml',
  };
}
