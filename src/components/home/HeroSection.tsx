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
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-[#090B10] border-b border-white/[0.08] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Asymmetrical Layout with Clean, Empty Right Side as requested */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Authoritative, Prestigious Positioning (8 Cols) */}
          <div className="lg:col-span-8 space-y-7 text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.08]">
              Markanıza yakışan ilk izlenim.{' '}
              <span className="text-slate-400 font-normal block mt-2">
                Firmanıza özel web mimarisi, 3–5 günde yayında.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              Aylarca süren ajans toplantılarına ve sürpriz yenileme faturalarına son. 
              Hukuk, klinik, sanayi, muhasebe ve emlak sektörüne özel geliştirilmiş 15 prestijli mimariyi inceleyin; 
              firmanızın kurumsal kimliğiyle 3–5 günde anahtar teslim yayına alalım. <strong>3 Yıl Boyunca Sıfır Ek Masraf: 0 ₺ Yenileme Güvencesi.</strong>
            </p>

            {/* Direct Action Button */}
            <div className="pt-2">
              <a
                href="#tasarimlar"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-xl shadow-blue-600/25 transition-all hover:-translate-y-0.5"
              >
                <span>15 Canlı Mimarimizi İnceleyin</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* 3 Clear Authority Badges */}
            <div className="pt-8 border-t border-white/[0.08] grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs text-slate-300 max-w-3xl">
              <div className="flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block mb-0.5">3 Yıl Sıfır Ek Masraf</strong>
                  <span className="text-slate-400">0 ₺ Yenileme Güvencesi</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block mb-0.5">3–5 Günde Hızlı Lansman</strong>
                  <span className="text-slate-400">Gecikmeyen dakik teslimat</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Zap className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block mb-0.5">Görerek Satın Alma</strong>
                  <span className="text-slate-400">Canlı demoyu önceden test edin</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Clean Whitespace (4 Cols Empty as requested) */}
          <div className="hidden lg:block lg:col-span-4" />

        </div>

      </div>
    </section>
  );
};
