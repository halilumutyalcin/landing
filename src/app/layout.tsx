import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { siteConfig } from '@/config/site.config';
import { getBaseUrl } from '@/lib/utils';

import { JsonLd } from '@/components/seo/JsonLd';
import { AmbientDustCanvas } from '@/components/ui/AmbientDustCanvas';

const baseUrl = getBaseUrl();

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: `Kurumsal Web Tasarım Ajansı & Sektörel Vitrinler | ${siteConfig.name}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: 'WordPress karmaşasına ve ağır eklenti yüküne son. Hukuk, klinik, sanayi/imalat ve mali müşavirlere özel 16 canlı web mimarisi. 3–10 iş gününde anahtar teslim kurulum, 3 yıl boyunca alan adı ve hosting yenileme masrafı yok.',
  alternates: {
    canonical: baseUrl,
  },
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/manifest.webmanifest',
  keywords: [
    'kurumsal web tasarım ajansı',
    'hukuk bürosu web sitesi',
    'avukat web sitesi fiyatları',
    'klinik web tasarım',
    'doktor web sitesi',
    'sanayi web sitesi tasarımı',
    'fabrika web sitesi',
    'imalatçı kurumsal web sitesi',
    'mali müşavir web sitesi',
    'emlak web sitesi tasarımı',
    'ürünleştirilmiş web tasarım',
    '3 yıl hosting dahil web sitesi',
    'istanbul web tasarım firmaları',
    'nextjs kurumsal web sitesi',
  ],
  authors: [{ name: 'MediWeb Mimarlık & Geliştirme Ekibi' }],
  creator: 'MediWeb',
  publisher: `MediWeb · ${siteConfig.legalEntity.title}`,
  openGraph: {
    title: `Kurumsal Web Tasarım Ajansı & Sektörel Vitrinler | ${siteConfig.name}`,
    description: 'WordPress karmaşasına ve ağır eklenti yüküne son. Sektörünüze özel geliştirilmiş kurumsal web mimarisi. 3–10 iş gününde anahtar teslim, 3 yıl domain + hosting dahil.',
    url: baseUrl,
    siteName: siteConfig.name,
    locale: 'tr_TR',
    type: 'website',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} — Kurumsal Web Mimarisi`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `Kurumsal Web Tasarım Ajansı & Sektörel Vitrinler | ${siteConfig.name}`,
    description: 'WordPress karmaşasına ve ağır eklenti yüküne son. 3–10 iş gününde anahtar teslim web mimarisi, 3 yıl domain + hosting fiyata dahil.',
    images: ['/opengraph-image'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Outfit:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-black text-[#F8FAFC] antialiased selection:bg-amber-400 selection:text-black relative">
        <AmbientDustCanvas />
        <JsonLd />
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
