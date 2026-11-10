'use client';

import React from 'react';
import { 
  ArrowRight, 
  ShieldCheck, 
  Clock, 
  Zap
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
                <span>Canlı Demoları İncele</span>
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

          {/* Right Column: Corporate Engineering Standards Card */}
          <div className="hidden lg:block lg:col-span-4">
            <div className="bg-[#0A0A0C] border border-white/[0.08] rounded-2xl p-6 space-y-5 shadow-2xl relative">
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                  <span className="text-xs font-bold text-white uppercase tracking-wider">
                    Mühendislik Standartları
                  </span>
                </div>
                <span className="text-[11px] font-medium px-2.5 py-0.5 rounded-md bg-white/[0.04] border border-white/5 text-slate-400">
                  Pendik / İstanbul
                </span>
              </div>

              <div className="space-y-3 text-xs">
                <div className="flex items-center justify-between p-3 rounded-xl bg-black/50 border border-white/5">
                  <span className="text-slate-400 font-medium">Lighthouse Skoru</span>
                  <span className="text-white font-bold">90–95+ (Statik Sayfalar)</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-xl bg-black/50 border border-white/5">
                  <span className="text-slate-400 font-medium">İçerik Yaklaşımı</span>
                  <span className="text-amber-400 font-bold">Meslek Kurallarına Duyarlı</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-xl bg-black/50 border border-white/5">
                  <span className="text-slate-400 font-medium">Barındırma &amp; SSL</span>
                  <span className="text-white font-bold">İlk 3 Yıl 0 ₺ (Dahil)</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-xl bg-black/50 border border-white/5">
                  <span className="text-slate-400 font-medium">Teslimat Güvencesi</span>
                  <span className="text-white font-bold">Sözleşmeli 3–10 İş Günü</span>
                </div>
              </div>

              <div className="pt-2 text-[11px] text-slate-400 leading-relaxed">
                Şengüller Otomotiv &amp; Bilişim Danışmanlığı altyapısıyla geliştirilmiş, regülasyonlara duyarlı kurumsal web platformu.
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
