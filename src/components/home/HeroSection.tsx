'use client';

import React from 'react';
import { 
  ArrowRight, 
  ShieldCheck, 
  Clock, 
  Zap,
  Smartphone
} from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Asymmetrical Layout with Clean, Empty Right Side as requested */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Authoritative, Prestigious Positioning (8 Cols) */}
          <div className="lg:col-span-8 space-y-7 text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.08]">
              İşletmenize özel web siteniz,{' '}
              <span className="text-amber-400 block mt-2">
                3–10 iş gününde yayında.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-zinc-300 max-w-2xl leading-relaxed">
              Markanızı dijitalde güçlü gösteren, mobil uyumlu, SEO altyapısı hazır ve size özel tasarlanmış web siteleri. 
              Aylarca süren ajans belirsizliklerine ve sürpriz faturalara son: Sektörünüze özel çalışan canlı mimarimizi 
              satın almadan önce deneyimleyin, onayınızla birlikte anahtar teslim yayına alalım. <strong>İlk 3 yıl domain + hosting dahil.</strong>
            </p>

            {/* Direct Dual Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
              <a
                href="#tasarimlar"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-black font-extrabold text-sm shadow-xl shadow-amber-400/20 transition-all hover:-translate-y-0.5"
              >
                <span>Ücretsiz Canlı Demo İncele</span>
                <ArrowRight className="w-4 h-4 text-black" />
              </a>

              <a
                href="#paketler"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#0A0A0C] hover:bg-zinc-800 text-white font-bold text-sm border border-white/[0.12] transition-all hover:-translate-y-0.5"
              >
                <span>Paketleri ve Fiyatları Gör</span>
              </a>
            </div>

            {/* 3 Clear Authority Badges */}
            <div className="pt-8 border-t border-white/[0.08] grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs text-slate-300 max-w-3xl">
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block mb-0.5 text-sm sm:text-xs">3–10 İş Günü</strong>
                  <span className="text-slate-400">İçerik onayından itibaren taahhütlü teslim</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block mb-0.5 text-sm sm:text-xs">3 Yıl Domain + Hosting</strong>
                  <span className="text-slate-400">İlk 3 yıl sıfır yenileme masrafı dahil</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Zap className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block mb-0.5 text-sm sm:text-xs">Canlı Tasarım Demosu</strong>
                  <span className="text-slate-400">Satın almadan önce çalışan siteyi görün</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: High-Impact Realistic Browser & Device Mockup */}
          <div className="hidden lg:block lg:col-span-4">
            <div className="relative group">
              {/* Outer Glow Halo */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-amber-500/20 via-blue-500/10 to-amber-500/20 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition duration-500" />

              {/* Realistic Desktop Browser Frame */}
              <div className="relative bg-[#0A0A0C] border border-white/[0.12] rounded-2xl overflow-hidden shadow-2xl">
                {/* Browser Top Window Chrome */}
                <div className="px-4 py-3 bg-[#111114] border-b border-white/[0.08] flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  </div>
                  <div className="px-3 py-1 rounded-md bg-black/60 border border-white/5 text-[11px] font-mono text-zinc-400 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>medweb.com.tr/canli-demo/lexora</span>
                  </div>
                  <span className="text-[10px] text-amber-400 font-bold px-1.5 py-0.5 rounded bg-amber-400/10">
                    CANLI
                  </span>
                </div>

                {/* Preview Image with Realistic Website UI */}
                <div className="relative aspect-[4/3] bg-zinc-950 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1000&q=80"
                    alt="MedWeb Canlı Hukuk & Danışmanlık Web Sitesi Mimarisi"
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                  {/* On-image Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-lg text-xs font-bold bg-black/80 backdrop-blur-md text-white border border-white/10 shadow">
                      Lexora · Hukuk Mimarisi
                    </span>
                    <span className="px-2.5 py-1 rounded-lg text-[11px] font-bold bg-emerald-500/90 text-black shadow">
                      Lighthouse 95+
                    </span>
                  </div>

                  {/* Bottom Image Callout */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-black/80 backdrop-blur-md border border-white/10 space-y-1">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-white font-bold">16 Farklı Sektör Mimarisi</span>
                      <span className="text-amber-400 font-semibold">Tıklayıp Deneyin</span>
                    </div>
                    <p className="text-[11px] text-zinc-400">
                      Hukuk, klinik, sanayi, mimarlık ve mali müşavirlik için çalışan demolar hazır.
                    </p>
                  </div>
                </div>

                {/* Bottom Spec Footer Strip */}
                <div className="p-4 bg-[#0E0E12] border-t border-white/[0.08] flex items-center justify-between text-xs text-zinc-300">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span className="text-[11px]">İlk 3 Yıl Bulut + SSL Dahil</span>
                  </div>
                  <a
                    href="#tasarimlar"
                    className="text-amber-400 hover:text-amber-300 font-bold text-xs flex items-center gap-1 group/link"
                  >
                    <span>Demoları Gez</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </div>

              {/* Floating Mobile Preview Device Chip */}
              <div className="absolute -bottom-5 -left-5 bg-[#141418] border border-white/20 rounded-2xl p-3 shadow-2xl flex items-center gap-3 backdrop-blur-xl animate-in fade-in slide-in-from-bottom-2">
                <div className="w-8 h-8 rounded-xl bg-amber-400 text-black flex items-center justify-center font-bold text-xs">
                  <Smartphone className="w-4 h-4 text-black" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Mobil & Tablet Uyumlu</div>
                  <div className="text-[10px] text-emerald-400 font-medium">0.8s Ultra Hızlı Açılış</div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
