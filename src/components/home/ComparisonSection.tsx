'use client';

import React from 'react';
import { 
  CheckCircle2, 
  XCircle 
} from 'lucide-react';
import { siteConfig } from '@/config/site.config';

export const ComparisonSection: React.FC = () => {
  return (
    <section id="neden-biz" className="py-20 bg-black border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
            Geleneksel Web Ajansları ile Farkımız
          </h2>
          <p className="text-base text-slate-300 leading-relaxed">
            Hantal süreçler, ne çıkacağı bilinmeyen tasarımlar ve sürpriz yenileme faturaları geride kaldı.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="bg-[#0A0A0C] rounded-2xl overflow-hidden shadow-xl max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 bg-[#0C0F17] text-xs sm:text-sm font-semibold tracking-normal text-slate-400 p-4 sm:p-5">
            <div className="hidden md:block">Karşılaştırma Kriteri</div>
            <div className="text-rose-400 flex items-center gap-2">
              <XCircle className="w-4 h-4 text-rose-400" />
              <span>Geleneksel Ajans Modeli</span>
            </div>
            <div className="text-emerald-400 flex items-center gap-2 mt-2 md:mt-0">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>MediWeb Modeli</span>
            </div>
          </div>

          <div className="divide-y divide-white/5">
            {siteConfig.comparisonPoints.map((item, idx) => (
              <div
                key={idx}
                className="grid grid-cols-1 md:grid-cols-3 p-4 sm:p-5 gap-2 md:gap-4 hover:bg-white/[0.02] transition-colors items-center text-xs sm:text-sm"
              >
                <div className="font-bold text-white mb-1 md:mb-0">
                  {item.feature}
                </div>
                <div className="text-slate-400">
                  <span className="text-rose-400 font-bold mr-1 md:hidden">Eski:</span>
                  <span>{item.traditional}</span>
                </div>
                <div className="text-emerald-300 font-semibold">
                  <span className="text-emerald-400 font-bold mr-1 md:hidden">MediWeb:</span>
                  <span>{item.mediweb}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
