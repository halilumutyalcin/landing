import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { DEMO_CATALOG } from '@/config/demos.config';
import { DemoDetailClient } from '@/components/detail/DemoDetailClient';
import { siteConfig } from '@/config/site.config';

interface PageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return DEMO_CATALOG.map((demo) => ({
    slug: demo.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const demo = DEMO_CATALOG.find((d) => d.slug === params.slug);
  if (!demo) {
    return {
      title: 'Tasarım Bulunamadı — MediWeb',
    };
  }

  const pageTitle = `${demo.name} — ${demo.sectorName} Kurumsal Web Sitesi Tasarımı | MediWeb`;
  const canonicalUrl = `https://${siteConfig.domain}/tasarimlar/${demo.slug}`;

  return {
    title: pageTitle,
    description: `${demo.shortDesc} 3–5 günde anahtar teslim kurulum, 3 yıl domain + hosting dahil. Canlı demoyu hemen test edin.`,
    alternates: {
      canonical: canonicalUrl,
    },
    keywords: [
      `${demo.sectorName} web sitesi`,
      `${demo.sectorName} web tasarımı`,
      `${demo.sectorName} hazır site`,
      'kurumsal web mimarisi',
      '3 yıl hosting dahil site',
      demo.name,
    ],
    openGraph: {
      title: pageTitle,
      description: demo.shortDesc,
      url: canonicalUrl,
      siteName: siteConfig.name,
      locale: 'tr_TR',
      type: 'article',
      images: [
        {
          url: demo.previewImage,
          width: 1200,
          height: 630,
          alt: `${demo.name} ${demo.sectorName} Web Sitesi Önizlemesi`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description: demo.shortDesc,
      images: [demo.previewImage],
    },
  };
}

export default function DemoDetailPage({ params }: PageProps) {
  const demo = DEMO_CATALOG.find((d) => d.slug === params.slug);

  if (!demo) {
    notFound();
  }

  return <DemoDetailClient demo={demo} />;
}
