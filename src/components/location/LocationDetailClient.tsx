'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  ShieldCheck, 
  Clock, 
  MapPin, 
  CheckCircle2, 
  ArrowRight, 
  Zap, 
  Check, 
  Building2, 
  Sparkles,
  PhoneCall
} from 'lucide-react';
import { LocationSeoItem, LOCATIONS_SEO_DATA } from '@/config/locations.config';
import { siteConfig } from '@/config/site.config';
import { DEMO_CATALOG } from '@/config/demos.config';
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon';
import { ProposalModal } from '@/components/home/ProposalModal';

interface LocationDetailClientProps {
  location: LocationSeoItem;
}

export const LocationDetailClient: React.FC<LocationDetailClientProps> = ({ location }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Get 4 core featured demos to showcase on this local page
  const featuredDemos = DEMO_CATALOG.slice(0, 4);

  const localWhatsAppUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    `Merhaba MediWeb! ${location.name} bölgesindeki işletmemiz için web sitesi ve kurumsal mimari hakkında bilgi ve yerinde keşif almak istiyorum.`
  )}`;

  return (
    <div className="min-h-screen bg-black text-slate-100">
      {/* 1. HERO SECTION */}
      <section className="relative pt-24 pb-20 overflow-hidden border-b border-white/[0.08]">
        {/* Subtle Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-radial-gradient from-blue-600/10 via-emerald-600/5 to-transparent blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            {/* Breadcrumb & Side Badge */}
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 mb-6">
              <Link href="/" className="hover:text-white transition-colors">Ana Sayfa</Link>
              <span>/</span>
              <Link href="/bolgeler" className="hover:text-white transition-colors">Bölgeler</Link>
              <span>/</span>
              <span className="text-amber-400 font-bold">{location.name}</span>
              <span className="ml-2 px-2.5 py-0.5 rounded-full text-[10px] uppercase font-black tracking-wider bg-amber-500/10 border border-amber-500/30 text-zinc-300">
                {location.side === 'anadolu' ? 'Anadolu Yakası' : 'Avrupa Yakası'}
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-[1.15] mb-6">
              {location.heroHeadline}
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8">
              {location.heroSubheadline}
            </p>

            {/* Local Guarantee Card */}
            <div className="p-4 rounded-xl bg-zinc-900/60 border border-amber-500/30 flex items-start gap-3 mb-8">
              <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div className="text-xs sm:text-sm text-slate-200">
                <strong className="text-white block mb-0.5">{location.name} Bölgesine Özel Güvence:</strong>
                <span>{location.localGuarantee}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={localWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm shadow-lg shadow-emerald-900/30 transition-all"
              >
                <WhatsAppIcon className="w-5 h-5" />
                <span>{location.name} İçin WhatsApp'tan Teklif Al</span>
              </a>

              <button
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.1] border border-white/10 text-white font-bold text-sm transition-all"
              >
                <span>Hızlı Teklif Hesapla</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Commercial Hubs Strip */}
          <div className="mt-16 pt-8 border-t border-white/[0.08]">
            <span className="text-xs uppercase font-bold tracking-wider text-slate-400 block mb-4">
              {location.name} Hizmet Bölgelerimiz &amp; Ticaret Aksları:
            </span>
            <div className="flex flex-wrap gap-2.5">
              {location.commercialHubs.map((hub, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/[0.08] text-xs font-medium text-slate-300"
                >
                  {hub}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. VALUE PROPOSITION: WHY LOCAL BUSINESSES CHOOSE US */}
      <section className="py-16 border-b border-white/[0.08] bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-3">
              {location.name} Bölgesindeki İşletmeler Neden Bizi Tercih Ediyor?
            </h2>
            <p className="text-sm sm:text-base text-slate-400">
              Klasik ajansların haftalarca süren toplantılarını ve sürpriz faturalarını unutun.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">3 Yıl Sıfır Ek Masraf</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Alan adı, SSL güvenlik sertifikası ve yüksek hızlı bulut barındırma 3 yıl boyunca tek fiyata dahildir. Sürpriz yenileme faturaları yok.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-4">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">&lt; 0.5 Saniyede Anında Açılış</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                WordPress hantallığı ve açık kaynak çökmeleri yok. Next.js mimarisiyle mobilde sıfır bekleme süresiyle açılır, Google'da öne çıkarır.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-4">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">3–5 Günde Dakik Teslimat</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Süreç sözleşmeyle belirlenir. İçerikleriniz alındıktan sonra 3–5 iş günü içinde siteniz eksiksiz şekilde yayına alınır.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE DEMOS SHOWCASE */}
      <section className="py-20 border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <span className="text-xs uppercase font-bold tracking-wider text-amber-400 block mb-2">
                Canlı Mimariler
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {location.name} İçin Önerilen Sektörel Vitrinler
              </h2>
            </div>
            <Link
              href="/#tasarimlar"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 hover:text-zinc-300 transition-colors"
            >
              <span>15 Tasarımın Tamamını İnceleyin</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredDemos.map((demo) => (
              <div
                key={demo.id}
                className="group rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-amber-500/30 transition-all flex flex-col justify-between overflow-hidden"
              >
                <div>
                  <div className="aspect-[16/10] bg-slate-900 overflow-hidden relative">
                    <img
                      src={demo.previewImage}
                      alt={demo.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded text-[10px] font-bold bg-black/60 backdrop-blur-md text-white">
                      {demo.sectorName}
                    </div>
                  </div>

                  <div className="p-5">
                    <h3 className="text-base font-bold text-white mb-1.5">{demo.name}</h3>
                    <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed mb-4">
                      {demo.shortDesc}
                    </p>

                    <ul className="space-y-1.5 mb-2">
                      {demo.keyFeatures.slice(0, 2).map((feat, i) => (
                        <li key={i} className="flex items-center gap-2 text-[11px] text-slate-300">
                          <Check className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                          <span className="truncate">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <Link
                    href={`/preview/${demo.slug}`}
                    className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-white/[0.04] hover:bg-white text-black font-bold hover:text-white text-xs font-bold text-slate-300 transition-all"
                  >
                    <span>Canlı Demoyu Aç</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PRICING SUMMARY FOR LOCAL CLIENTS */}
      <section className="py-20 border-b border-white/[0.08] bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-3">
              {location.name} İçin Şeffaf Paketler
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Sürpriz maliyet yok. 3 yıl boyunca sıfır ek masraf güvencesiyle anahtar teslim teslimat.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {siteConfig.packages.map((pkg) => (
              <div
                key={pkg.id}
                className={`p-6 rounded-2xl flex flex-col justify-between transition-all ${
                  pkg.isPopular
                    ? 'bg-zinc-900/60 border-2 border-amber-500/30 relative'
                    : 'bg-white/[0.02] border border-white/[0.06]'
                }`}
              >
                <div>
                  {pkg.isPopular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full text-[10px] uppercase font-black tracking-wider bg-white text-black font-bold text-white shadow-md">
                      En Çok Tercih Edilen
                    </span>
                  )}

                  <h3 className="text-lg font-bold text-white mb-1">{pkg.name}</h3>
                  <p className="text-xs text-slate-400 mb-4">{pkg.pageStructure}</p>

                  <div className="mb-6">
                    <span className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                      {pkg.priceFormatted}
                    </span>
                    <span className="text-[11px] text-slate-400 block mt-0.5">
                      (Tek Seferlik • 3 Yıl 0 ₺ Masraf)
                    </span>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {pkg.features.slice(0, 4).map((f, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-slate-300">
                        <Check className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
                    `Merhaba MediWeb! ${location.name} bölgesinden ${pkg.name} paketi hakkında bilgi almak istiyorum.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-bold transition-all ${
                    pkg.isPopular
                      ? 'bg-white hover:bg-zinc-200 text-black font-bold shadow-lg'
                      : 'bg-white/[0.05] hover:bg-white/[0.1] text-white'
                  }`}
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  <span>Bu Paketi Seç</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. OTHER DISTRICTS NAVIGATION (INTERNAL LINKING FOR SEO) */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-sm uppercase font-bold tracking-wider text-slate-400 mb-6 text-center">
            İstanbul Diğer Hizmet Bölgelerimiz:
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-2.5 max-w-4xl mx-auto">
            {LOCATIONS_SEO_DATA.filter((l) => l.id !== location.id).map((otherLoc) => (
              <Link
                key={otherLoc.id}
                href={`/bolgeler/${otherLoc.slug}`}
                className="px-3.5 py-2 rounded-lg bg-white/[0.02] hover:bg-white text-black font-bold/20 border border-white/[0.06] hover:border-amber-500/30 text-xs font-medium text-slate-300 hover:text-white transition-all"
              >
                {otherLoc.name} Web Tasarım
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Proposal Modal */}
      <ProposalModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};
