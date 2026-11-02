'use client';

import React from 'react';
import { 
  ShieldCheck, 
  Terminal, 
  Cpu, 
  ArrowUpRight, 
  Check, 
  Layers, 
  Flame, 
  Sparkles,
  Zap
} from 'lucide-react';

export const AgencyManifestoSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#08090D] relative overflow-hidden hairline-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-slate-300 uppercase tracking-wider mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
            <span>Ajans Manifestosu & Üretim İlkeleri</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white font-display tracking-tight leading-[1.02]">
            Geleneksel Ajans Modeli İflas Etti.{' '}
            <br />
            <span className="text-slate-500 font-light">
              Biz Yeni Standardı İnşa Ediyoruz.
            </span>
          </h2>
        </div>

        {/* 3 Asymmetric Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Pillar 1 */}
          <div className="studio-card studio-card-hover p-8 rounded-2xl border border-white/[0.08] flex flex-col justify-between">
            <div>
              <div className="font-mono text-xs text-indigo-400 font-bold mb-4 tracking-wider">
                // 01. PRENSİP
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 font-display">
                Hantal Temalar Değil, Saf React Mimarisi
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                40 tane güvensiz eklentiyle şişirilmiş, her ay çöken WordPress sitelerine son. 
                Next.js 14 SSG ve Vercel Edge ile <strong>0.3 saniyede anında açılan</strong>, 
                asla hacklenemeyen statik kod üretiyoruz.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between text-xs font-mono text-slate-400">
              <span>Core Web Vitals: 99/100</span>
              <span className="text-emerald-400 font-bold">DOĞRULANDI</span>
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="studio-card studio-card-hover p-8 rounded-2xl border border-white/[0.08] flex flex-col justify-between">
            <div>
              <div className="font-mono text-xs text-emerald-400 font-bold mb-4 tracking-wider">
                // 02. PRENSİP
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 font-display">
                Ürünleştirilmiş & Şeffaf Tek Fiyat
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Ucu açık ajans teklifleri ve sonradan çıkan "sunucu açılışı", "SSL masrafı" gibi gizli faturalar yok. 
                <strong>3 sabit tek fiyatımız</strong> vardır ve ne ödeyeceğinizi ilk saniyede bilirsiniz.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between text-xs font-mono text-slate-400">
              <span>Sürpriz Maliyet: 0 ₺</span>
              <span className="text-emerald-400 font-bold">TAAHHÜT</span>
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="studio-card studio-card-hover p-8 rounded-2xl border border-white/[0.08] flex flex-col justify-between">
            <div>
              <div className="font-mono text-xs text-cyan-400 font-bold mb-4 tracking-wider">
                // 03. PRENSİP
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 font-display">
                3 Yıl Domain + SSL + Hosting Dahil
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Her yıl gelen yenileme faturalarıyla sizi yormuyoruz. 
                Tüm paketlerimizde .com / .com.tr alan adı, SSL sertifikası ve küresel Edge barındırma 
                <strong>3 yıl boyunca ücretsizdir</strong>.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between text-xs font-mono text-slate-400">
              <span>Tasarruf: ~35.000 ₺</span>
              <span className="text-emerald-400 font-bold">DAHİL</span>
            </div>
          </div>
        </div>

        {/* Executive Studio Quote Strip */}
        <div className="p-8 rounded-2xl bg-gradient-to-r from-white/[0.02] via-white/[0.04] to-white/[0.02] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="space-y-1">
            <h4 className="text-lg font-bold text-white font-display">
              "İyi bir web sitesi bir masraf değil, şirketinize 7/24 müşteri getiren en saygın ofisinizdir."
            </h4>
            <p className="text-xs text-slate-400 font-mono">
              MEDISAN STUDIO MİMARİ İLKELERİ · İSTANBUL 2026
            </p>
          </div>
          <div className="flex items-center gap-4 shrink-0 font-mono text-xs">
            <div className="px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 text-slate-300">
              ISO 27001 GÜVENLİK
            </div>
            <div className="px-3.5 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-bold">
              99 LIGHTHOUSE
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
