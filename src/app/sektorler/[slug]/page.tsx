import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { 
  getSectorBySlug, 
  getAllSectorSlugs, 
  SECTORS_SEO_DATA 
} from '@/config/sectors.config';
import { SectorDetailClient } from '@/components/sector/SectorDetailClient';
import { siteConfig } from '@/config/site.config';

interface PageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return getAllSectorSlugs().map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const sector = getSectorBySlug(params.slug);
  if (!sector) {
    return {
      title: 'Sektör Bulunamadı — MediWeb',
    };
  }

  const canonicalUrl = `https://${siteConfig.domain}/sektorler/${sector.slug}`;

  return {
    title: sector.title,
    description: sector.metaDescription,
    alternates: {
      canonical: canonicalUrl,
    },
    keywords: [
      `${sector.name.toLowerCase()} web sitesi`,
      `${sector.name.toLowerCase()} web tasarım`,
      `${sector.name.toLowerCase()} hazır site`,
      `${sector.name.toLowerCase()} site fiyatları`,
      'kurumsal web mimarisi',
      '3 yıl hosting dahil web sitesi',
      'hızlı kurumsal site',
      siteConfig.name,
    ],
    openGraph: {
      title: sector.title,
      description: sector.metaDescription,
      url: canonicalUrl,
      siteName: siteConfig.name,
      locale: 'tr_TR',
      type: 'article',
      images: [
        {
          url: `https://${siteConfig.domain}/opengraph-image`,
          width: 1200,
          height: 630,
          alt: `${sector.name} Web Sitesi Tasarımı`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: sector.title,
      description: sector.metaDescription,
    },
  };
}

export default function SectorDetailPage({ params }: PageProps) {
  const sector = getSectorBySlug(params.slug);

  if (!sector) {
    notFound();
  }

  // Generate structured JSON-LD schemas
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      // 1. Service Schema
      {
        '@type': 'Service',
        name: `${sector.name} Web Sitesi Tasarımı`,
        description: sector.metaDescription,
        provider: {
          '@type': 'ProfessionalService',
          name: siteConfig.name,
          url: `https://${siteConfig.domain}`,
          telephone: `+${siteConfig.whatsappNumber}`,
        },
        areaServed: 'TR',
        offers: {
          '@type': 'Offer',
          price: '17500',
          priceCurrency: 'TRY',
          availability: 'https://schema.org/InStock',
        },
      },
      // 2. BreadcrumbList Schema
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Ana Sayfa',
            item: `https://${siteConfig.domain}`,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Sektörel Çözümler',
            item: `https://${siteConfig.domain}/sektorler`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: `${sector.name} Web Sitesi`,
            item: `https://${siteConfig.domain}/sektorler/${sector.slug}`,
          },
        ],
      },
      // 3. FAQPage Schema
      {
        '@type': 'FAQPage',
        mainEntity: sector.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
        }}
      />
      <SectorDetailClient sector={sector} />
    </>
  );
}
