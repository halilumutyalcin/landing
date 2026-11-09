import React from 'react';
import { siteConfig } from '@/config/site.config';

export const JsonLd: React.FC = () => {
  const baseUrl = `https://${siteConfig.domain}`;

  // 1. Professional Service & Local Business Schema
  const businessSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${baseUrl}/#organization`,
    name: siteConfig.name,
    url: baseUrl,
    logo: `${baseUrl}/icon.svg`,
    image: `${baseUrl}/opengraph-image`,
    description: siteConfig.description,
    telephone: siteConfig.phoneDisplay.replace(/\s+/g, ''),
    email: siteConfig.email,
    priceRange: '₺17.500 - ₺59.900',
    currenciesAccepted: 'TRY',
    paymentAccepted: 'Banka Havalesi, Kredi Kartı',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Batı Mah. E-5 Yan Yol No:14',
      addressLocality: 'Pendik',
      addressRegion: 'İstanbul',
      addressCountry: 'TR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '40.8756',
      longitude: '29.2331',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:30',
      },
    ],
    areaServed: {
      '@type': 'Country',
      name: 'Türkiye',
    },
    sameAs: [
      'https://www.linkedin.com/company/mediweb',
      'https://www.instagram.com/mediweb',
    ],
  };

  // 2. FAQPage Schema (Google Rich Snippet Accordion in SERP)
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: siteConfig.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  // 3. WebSite with SearchAction
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${baseUrl}/#website`,
    url: baseUrl,
    name: siteConfig.name,
    description: siteConfig.description,
    publisher: {
      '@id': `${baseUrl}/#organization`,
    },
    inLanguage: 'tr-TR',
  };

  // 4. Products / Packages Catalog Schema
  const packageSchemas = siteConfig.packages.map((pkg) => ({
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: `${pkg.name} Web Sitesi Paketi`,
    description: pkg.tagline,
    brand: {
      '@type': 'Brand',
      name: siteConfig.name,
    },
    offers: {
      '@type': 'Offer',
      url: `${baseUrl}/#paketler`,
      priceCurrency: 'TRY',
      price: pkg.price,
      priceValidUntil: '2026-12-31',
      availability: 'https://schema.org/InStock',
      seller: {
        '@type': 'Organization',
        name: siteConfig.name,
      },
    },
  }));

  const safeJson = (data: unknown) => JSON.stringify(data).replace(/</g, '\\u003c');

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJson(businessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJson(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJson(websiteSchema) }}
      />
      {packageSchemas.map((schema, idx) => (
        <script
          key={idx}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: safeJson(schema) }}
        />
      ))}
    </>
  );
};
