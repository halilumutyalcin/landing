import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { 
  getLocationBySlug, 
  getAllLocationSlugs, 
  LOCATIONS_SEO_DATA 
} from '@/config/locations.config';
import { LocationDetailClient } from '@/components/location/LocationDetailClient';
import { siteConfig } from '@/config/site.config';

interface PageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return getAllLocationSlugs().map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const location = getLocationBySlug(params.slug);
  if (!location) {
    return {
      title: 'Bölge Bulunamadı — MediWeb',
    };
  }

  const canonicalUrl = `https://${siteConfig.domain}/bolgeler/${location.slug}`;

  return {
    title: location.title,
    description: location.metaDescription,
    alternates: {
      canonical: canonicalUrl,
    },
    keywords: [
      ...location.targetKeywords,
      `${location.name.toLowerCase()} web tasarım`,
      `${location.name.toLowerCase()} kurumsal web sitesi`,
      `${location.name.toLowerCase()} web yazılım ajansı`,
      '3 yıl hosting ve domain dahil',
      siteConfig.name,
    ],
    openGraph: {
      title: location.title,
      description: location.metaDescription,
      url: canonicalUrl,
      siteName: siteConfig.name,
      locale: 'tr_TR',
      type: 'website',
      images: ['/opengraph-image'],
    },
    twitter: {
      card: 'summary_large_image',
      title: location.title,
      description: location.metaDescription,
      images: ['/opengraph-image'],
    },
  };
}

export default function LocationPage({ params }: PageProps) {
  const location = getLocationBySlug(params.slug);

  if (!location) {
    notFound();
  }

  return <LocationDetailClient location={location} />;
}
