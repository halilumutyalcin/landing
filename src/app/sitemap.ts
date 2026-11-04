import { MetadataRoute } from 'next';
import { DEMO_CATALOG } from '@/config/demos.config';
import { SECTORS_SEO_DATA } from '@/config/sectors.config';
import { siteConfig } from '@/config/site.config';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = `https://${siteConfig.domain}`;

  // 1. Core static routes
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/tasarimlar`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/sektorler`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ];

  // 2. Dynamic sector showcase detail routes (15 Designs)
  const demoRoutes: MetadataRoute.Sitemap = DEMO_CATALOG.map((demo) => ({
    url: `${baseUrl}/tasarimlar/${demo.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  // 3. Programmatic Sectoral SEO routes (/sektorler/[sektor]-web-sitesi)
  const sectorRoutes: MetadataRoute.Sitemap = SECTORS_SEO_DATA.map((sector) => ({
    url: `${baseUrl}/sektorler/${sector.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.85,
  }));

  return [...staticRoutes, ...demoRoutes, ...sectorRoutes];
}
