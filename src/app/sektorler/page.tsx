import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { 
  ArrowRight, 
  Sparkles, 
  Check, 
  ShieldCheck, 
  Zap, 
  ChevronRight,
  Server,
  Layers
} from 'lucide-react';
import { SECTORS_SEO_DATA } from '@/config/sectors.config';
import { siteConfig } from '@/config/site.config';
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon';
import { generateWhatsAppUrl } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Sektörel Web Sitesi Tasarımı Çözümleri | MediWeb',
  description: 'Diş kliniği, hukuk bürosu, mimarlık, sanayi imalat, mali müşavirlik ve gayrimenkul sektörlerine özel geliştirilmiş ultra hızlı kurumsal web sitesi paketleri. 3 yıl hosting dahil.',
  alternates: {
    canonical: `https://${siteConfig.domain}/sektorler`,
  },
  openGraph: {
    title: 'Sektörel Web Sitesi Tasarımı Çözümleri | MediWeb',
    description: 'Diş kliniği, hukuk bürosu, mimarlık, sanayi imalat ve mali müşavirlere özel 3–10 iş gününde teslim kurumsal web siteleri. 3 yıl domain + hosting fiyata dahil.',
    url: `https://${siteConfig.domain}/sektorler`,
    siteName: siteConfig.name,
    locale: 'tr_TR',
    type: 'website',
  },
};

export default function SectorsIndexPage() {
  const whatsAppUrl = generateWhatsAppUrl({
    customMessage: 'Merhaba MediWeb! Sektörel web sitesi paketleriniz ve hazır tasarımlarınız hakkında bilgi almak istiyorum.',
  });

  return (
    <div className="pt-24 pb-20 bg-black">
      {/* 1. Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-6">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-400">
          <Link href="/" className="hover:text-white transition-colors">
            Ana Sayfa
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <span className="text-amber-400 font-semibold">Sektörel Çözümler</span>
        </nav>
      </div>

      {/* 2. Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 text-amber-400 text-xs font-bold uppercase tracking-wider mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Sektöre Özel Mimari</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
          Sektörünüze Özel Kurumsal Web Sitesi Çözümleri
        </h1>
        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Her sektörün müşteri kazanma psikolojisi, regülasyon kuralları ve Google Harita dinamikleri farklıdır. Sektörünüzü seçin, paketinize göre 3–10 iş gününde anahtar teslim yayına alalım.
        </p>
      </section>

      {/* 3. Sektör Kartları Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SECTORS_SEO_DATA.map((sector) => (
            <div
              key={sector.slug}
              className="rounded-2xl bg-[#0A0A0C] hover:bg-[#121214] p-7 flex flex-col justify-between transition-all group hover:-translate-y-1 shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-400 text-[10px] font-bold uppercase tracking-wider">
                    {sector.badge}
                  </span>
                  <span className="text-xs text-slate-400 font-medium">
                    3–10 İş Gününde Lansman
                  </span>
                </div>

                <h2 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors mb-2">
                  {sector.name}
                </h2>

                <p className="text-xs text-slate-300 leading-relaxed mb-6">
                  {sector.heroSubheadline}
                </p>

                {/* Key feature bullets */}
                <div className="space-y-2 mb-6 pt-4 border-t border-white/5">
                  {sector.keyFeatures.slice(0, 3).map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-200">
                      <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <span className="text-xs font-semibold text-emerald-400">
                  3 Yıl Barındırma Dahil
                </span>

                <Link
                  href={`/sektorler/${sector.slug}`}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white hover:bg-zinc-200 text-black font-bold text-xs font-bold transition-colors"
                >
                  <span>Çözümü İncele</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Bottom Value Proposition */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-[#0A0A0C] p-8 sm:p-12 text-center flex flex-col items-center justify-center gap-6 shadow-2xl">
          <div className="max-w-2xl">
            <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Sektörünüz Listede Yok mu?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
              İster üretim tesisi ister danışmanlık firması olun; iş modelinize özel modern Next.js mimarisini 3–10 iş günü içinde kurabiliriz.
            </p>
          </div>

          <a
            href={whatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm tracking-normal flex items-center gap-2.5 transition-all shadow-xl shadow-emerald-900/30"
          >
            <WhatsAppIcon className="w-4 h-4 fill-current shrink-0" />
            <span>WhatsApp ile Özel Sektörel Teklif Alın</span>
          </a>
        </div>
      </section>
    </div>
  );
}
