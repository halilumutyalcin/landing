import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Image from 'next/image';
import { 
  CheckCircle2, 
  ChevronRight
} from 'lucide-react';
import { DEMO_CATALOG } from '@/config/demos.config';

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
  return {
    title: `Canlı Önizleme: ${demo?.name || 'Tasarım'} — MediWeb Showcase`,
    robots: {
      index: false,
      follow: false,
    },
    alternates: {
      canonical: `https://mediweb.com.tr/tasarimlar/${params.slug}`,
    },
  };
}

export default function MockPreviewPage({ params }: PageProps) {
  const demo = DEMO_CATALOG.find((d) => d.slug === params.slug) || DEMO_CATALOG[0];

  // Theme styling helpers based on demo
  const themeStyles = {
    slate: {
      bg: 'bg-slate-900 text-slate-100',
      heroBg: 'bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950',
      accent: 'text-slate-300',
      button: 'bg-slate-800 hover:bg-slate-700 text-white border border-slate-600',
      card: 'bg-slate-800/80 border-slate-700',
      badge: 'bg-slate-700 text-slate-200',
    },
    blue: {
      bg: 'bg-slate-950 text-slate-100',
      heroBg: 'bg-gradient-to-b from-[#060D1F] via-[#0A1630] to-slate-950',
      accent: 'text-blue-400',
      button: 'bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/30',
      card: 'bg-slate-900/90 border-blue-900/40',
      badge: 'bg-blue-500/20 text-blue-300 border border-blue-500/30',
    },
    amber: {
      bg: 'bg-[#0E0C0A] text-amber-50',
      heroBg: 'bg-gradient-to-b from-[#18140E] via-[#0E0C0A] to-[#18140E]',
      accent: 'text-amber-400',
      button: 'bg-amber-600 hover:bg-amber-500 text-slate-950 font-bold shadow-lg shadow-amber-600/20',
      card: 'bg-[#1C1712] border-amber-900/40',
      badge: 'bg-amber-500/20 text-amber-300 border border-amber-500/30',
    },
    emerald: {
      bg: 'bg-[#08120E] text-emerald-50',
      heroBg: 'bg-gradient-to-b from-[#0C1B14] via-[#08120E] to-[#0C1B14]',
      accent: 'text-emerald-400',
      button: 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-600/30',
      card: 'bg-[#10241B] border-emerald-900/40',
      badge: 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30',
    },
    red: {
      bg: 'bg-[#120808] text-red-50',
      heroBg: 'bg-gradient-to-b from-[#1C0D0D] via-[#120808] to-[#1C0D0D]',
      accent: 'text-red-400',
      button: 'bg-red-600 hover:bg-red-500 text-white shadow-lg shadow-red-600/30',
      card: 'bg-[#221010] border-red-900/40',
      badge: 'bg-red-500/20 text-red-300 border border-red-500/30',
    }
  }[demo.themeColor] || {
    bg: 'bg-slate-950 text-slate-100',
    heroBg: 'bg-slate-900',
    accent: 'text-indigo-400',
    button: 'bg-indigo-600 text-white',
    card: 'bg-slate-900 border-slate-800',
    badge: 'bg-indigo-500/20 text-indigo-300',
  };

  return (
    <div className={`min-h-screen ${themeStyles.bg} font-sans selection:bg-brand-500 selection:text-white`}>
      {/* Mock Demo Header */}
      <nav className="border-b border-white/10 px-6 py-4 flex items-center justify-between sticky top-0 bg-black/60 backdrop-blur-md z-30">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center font-bold font-display text-sm">
            {demo.name[0]}
          </div>
          <span className="font-extrabold text-lg tracking-tight font-display text-white">
            {demo.name}
          </span>
          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${themeStyles.badge}`}>
            {demo.sectorName}
          </span>
        </div>

        <div className="hidden md:flex items-center gap-6 text-xs text-slate-300 font-medium">
          <span>Hakkımızda</span>
          <span>Hizmetler</span>
          <span>Uzmanlıklar</span>
          <span>Referanslar</span>
          <span>İletişim</span>
        </div>

        <div className="flex items-center gap-3">
          <button className={`px-4 py-2 rounded-xl text-xs font-bold ${themeStyles.button} transition-all`}>
            Online Randevu & Teklif
          </button>
        </div>
      </nav>

      {/* Mock Hero Section */}
      <section className={`py-16 px-6 sm:px-12 text-center relative overflow-hidden ${themeStyles.heroBg} border-b border-white/5`}>
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-block mb-3">
            <span className={`text-xs font-semibold px-3 py-1 rounded-full ${themeStyles.badge}`}>
              {demo.style}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white font-display mb-4 tracking-tight leading-tight">
            {demo.highlights.headline}
          </h1>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed">
            {demo.shortDesc}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <button className={`px-6 py-3 rounded-xl text-xs sm:text-sm font-bold ${themeStyles.button}`}>
              Hemen İletişime Geçin
            </button>
            <button className="px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold bg-white/5 hover:bg-white/10 border border-white/10 text-white">
              Çalışma Alanlarımız
            </button>
          </div>
        </div>
      </section>

      {/* Mock Stats Bar */}
      <div className="py-6 px-6 bg-black/40 border-b border-white/5">
        <div className="max-w-4xl mx-auto grid grid-cols-3 gap-4 text-center">
          {demo.highlights.stats.map((st, i) => (
            <div key={i}>
              <div className={`text-xl sm:text-2xl font-black ${themeStyles.accent} font-display`}>
                {st.value}
              </div>
              <div className="text-[11px] text-slate-400 font-medium">
                {st.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mock Features / Services Grid */}
      <section className="py-14 px-6 sm:px-12 max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-white font-display mb-2">
            Öne Çıkan Hizmet Alanlarımız
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Müvekkillerimize / Danışanlarımıza sunduğumuz anahtar teslim profesyonel çözümler.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {demo.keyFeatures.map((feat, idx) => (
            <div key={idx} className={`p-5 rounded-2xl border ${themeStyles.card} text-left flex flex-col justify-between`}>
              <div>
                <div className={`w-8 h-8 rounded-lg mb-3 flex items-center justify-center ${themeStyles.badge}`}>
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-white mb-1.5">
                  {feat}
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Sektörel standartlara tam uyumlu profesyonel süreç yönetimi.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-300">
                <span>Detaylı Bilgi</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Mock Content & About preview */}
      <section className="py-12 px-6 sm:px-12 bg-black/30 border-t border-white/5">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10">
            <Image
              src={demo.previewImage}
              alt={demo.name}
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-4 text-left">
            <span className={`text-xs font-bold uppercase tracking-wider ${themeStyles.accent}`}>
              Kurumsal Kimlik & Güvence
            </span>
            <h3 className="text-2xl font-bold text-white font-display">
              {demo.highlights.subheadline}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {demo.targetAudience}
            </p>
            <div className="pt-2">
              <button className={`px-5 py-2.5 rounded-xl text-xs font-bold ${themeStyles.button}`}>
                Randevu & Ön Görüşme Alın
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Mock Footer */}
      <footer className="py-8 px-6 text-center border-t border-white/10 text-xs text-slate-500">
        <p>© {demo.name} · {demo.sectorName} Demo Şablonu · Powered by MediWeb v3.0</p>
      </footer>
    </div>
  );
}
