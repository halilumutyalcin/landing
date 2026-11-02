import { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site.config';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = `https://${siteConfig.domain}`;

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/preview/'],
      },
      {
        userAgent: 'GPTBot',
        allow: '/',
      },
      {
        userAgent: 'PerplexityBot',
        allow: '/',
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
