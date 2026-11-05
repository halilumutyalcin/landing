import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { LOCATIONS_SEO_DATA } from '@/config/locations.config';
import { siteConfig } from '@/config/site.config';
import { MapPin, ArrowRight, ShieldCheck, Zap, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'İstanbul Hizmet Bölgelerimiz — İlçe Bazlı Kurumsal Web Mimarisi | MediWeb',
  description: 'Kartal, Maltepe, Tuzla, Kadıköy, Ataşehir, Şişli, Levent ve Maslak başta olmak üzere İstanbul’un tüm ana ticaret merkezlerine özel 3–5 günde teslim kurumsal web siteleri.',
  alternates: {
    canonical: `https://${siteConfig.domain}/bolgeler`,
  },
  openGraph: {
    title: 'İstanbul Hizmet Bölgelerimiz — İlçe Bazlı Kurumsal Web Mimarisi | MediWeb',
    description: 'İstanbul genelinde 13 ana ticaret merkezine özel hızlı, garantili ve 3 yıl sıfır ek masraflı kurumsal web altyapısı.',
    url: `https://${siteConfig.domain}/bolgeler`,
    siteName: siteConfig.name,
    images: ['/opengraph-image'],
  },
};

export default function BolgelerIndexPage() {
  const anadolu = LOCATIONS_SEO_DATA.filter((l) => l.side === 'anadolu');
  const avrupa = LOCATIONS_SEO_DATA.filter((l) => l.side === 'avrupa');

  return (
    <div className="min-h-screen bg-[#07090E] text-slate-100 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider mb-4">
            <MapPin className="w-3.5 h-3.5" />
            <span>İstanbul Kurumsal Hizmet Bölgeleri</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight mb-4">
            Bölgenize Özel Kurumsal Web Mimarisi
          </h1>

          <p className="text-base text-slate-300 leading-relaxed">
            Haftalarca süren ajans toplantılarını unutun. İstanbul’un ana ticaret akslarındaki işletmeler için 3–5 günde canlıda, <strong>3 yıl boyunca sıfır ek masraf güvencesiyle</strong> çalışan modern web vitrinleri inşa ediyoruz.
          </p>
        </div>

        {/* 1. ANADOLU YAKASI */}
        <div className="mb-16">
          <div className="flex items-center gap-3 pb-4 border-b border-white/[0.08] mb-8">
            <h2 className="text-xl font-bold text-white tracking-tight">Anadolu Yakası Bölgelerimiz</h2>
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-zinc-900/60 text-amber-400 font-semibold border border-amber-500/30">
              {anadolu.length} İlçe / Ticaret Aksı
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {anadolu.map((loc) => (
              <Link
                key={loc.id}
                href={`/bolgeler/${loc.slug}`}
                className="group p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-amber-500/30 hover:bg-white/[0.04] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors">
                      {loc.name}
                    </span>
                    <span className="text-[10px] uppercase font-black px-2 py-0.5 rounded bg-amber-500/10 text-zinc-300">
                      Yerinde Keşif
                    </span>
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed mb-4">
                    {loc.metaDescription}
                  </p>

                  <div className="space-y-1.5 mb-6">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">
                      Odak Sektörler:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {loc.focusSectors.slice(0, 2).map((s, i) => (
                        <span key={i} className="text-[11px] text-slate-300 bg-white/[0.03] px-2 py-0.5 rounded">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-bold text-amber-400 group-hover:translate-x-1 transition-transform">
                  <span>Bölge Sayfasını İncele</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* 2. AVRUPA YAKASI */}
        <div>
          <div className="flex items-center gap-3 pb-4 border-b border-white/[0.08] mb-8">
            <h2 className="text-xl font-bold text-white tracking-tight">Avrupa Yakası Bölgelerimiz</h2>
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-950/60 text-amber-400 font-semibold border border-emerald-500/20">
              {avrupa.length} Plaza &amp; Ticaret Aksı
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {avrupa.map((loc) => (
              <Link
                key={loc.id}
                href={`/bolgeler/${loc.slug}`}
                className="group p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-emerald-500/40 hover:bg-white/[0.04] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors">
                      {loc.name}
                    </span>
                    <span className="text-[10px] uppercase font-black px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300">
                      Plaza &amp; Merkez
                    </span>
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed mb-4">
                    {loc.metaDescription}
                  </p>

                  <div className="space-y-1.5 mb-6">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">
                      Odak Sektörler:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {loc.focusSectors.slice(0, 2).map((s, i) => (
                        <span key={i} className="text-[11px] text-slate-300 bg-white/[0.03] px-2 py-0.5 rounded">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-bold text-amber-400 group-hover:translate-x-1 transition-transform">
                  <span>Bölge Sayfasını İncele</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
