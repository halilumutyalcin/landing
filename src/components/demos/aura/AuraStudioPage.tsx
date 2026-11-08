'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  ArrowUpRight, 
  Clock, 
  MapPin, 
  Phone, 
  Compass, 
  Sparkles, 
  ArrowDown, 
  ChevronRight,
  ExternalLink,
  ShieldCheck,
  Award
} from 'lucide-react';
import { AuraThreeScene } from './AuraThreeScene';
import { AuraScrollDecorStudio } from './AuraScrollDecorStudio';
import { AuraDecorElementsShowcase } from './AuraDecorElementsShowcase';
import { AuraProjectLayerViewer } from './AuraProjectLayerViewer';
import { AuraProcess } from './AuraProcess';
import { AuraBeforeAfter } from './AuraBeforeAfter';
import { AuraDiscoveryForm } from './AuraDiscoveryForm';

export const AuraStudioPage: React.FC = () => {
  // Live GMT+3 Istanbul Time for Footer.design signature
  const [timeStr, setTimeStr] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Format as Istanbul GMT+3
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Europe/Istanbul',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      };
      setTimeStr(new Intl.DateTimeFormat('tr-TR', options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-amber-500 selection:text-black">
      
      {/* 0. Top Agency Showcase Bar (Discreet sticky ribbon for platform reviewers) */}
      <div className="bg-[#09090C] border-b border-white/[0.08] px-4 py-2 text-[11px] font-mono flex items-center justify-between text-zinc-400 z-50 relative">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-amber-400" />
          <span className="text-white font-bold">CANLI DEMO:</span>
          <span>Aura Studio — Lüks İç Mimarlık & Mekan Tasarımı</span>
          <span className="hidden sm:inline text-zinc-600">|</span>
          <span className="hidden sm:inline text-zinc-500">KOD: DEMO-ARCH-AURA-01</span>
        </div>
        <div className="flex items-center gap-3">
          <Link
            href="/#tasarimlar"
            className="hover:text-white transition-colors underline decoration-zinc-700 underline-offset-4"
          >
            ← Vitrin Kataloğuna Dön
          </Link>
          <a
            href="https://wa.me/905438515086?text=Merhaba,%20Aura%20Studio%20iç%20mimarlık%20canlı%20demosunu%20inceledim.%20Kendi%20ofisimiz%20için%20bu%20tasarımı%20uyarlatmak%20istiyoruz."
            target="_blank"
            rel="noopener noreferrer"
            className="px-2.5 py-1 rounded bg-amber-500 text-black font-bold hover:bg-amber-400 transition-colors"
          >
            Bu Tasarımı Satın Al
          </a>
        </div>
      </div>

      {/* 1. Floating Pill Navbar (Navbar.gallery inspiration) */}
      <header className="fixed top-12 inset-x-0 z-40 flex justify-center px-4 pointer-events-none">
        <nav className="pointer-events-auto flex items-center justify-between gap-4 sm:gap-8 px-5 py-2.5 rounded-full bg-black/75 backdrop-blur-xl border border-white/10 shadow-2xl">
          
          {/* Brand Monogram */}
          <Link href="#top" className="flex items-center gap-2.5 text-white group">
            <div className="w-7 h-7 rounded-full bg-white/10 border border-white/20 flex items-center justify-center font-serif text-sm font-bold text-amber-400 group-hover:bg-amber-500 group-hover:text-black transition-all">
              A
            </div>
            <span className="font-serif tracking-widest text-sm font-medium">
              AURA<span className="text-amber-400 font-sans font-bold text-[10px] ml-1">STUDIO</span>
            </span>
          </Link>

          {/* Menu items */}
          <div className="hidden md:flex items-center gap-6 text-xs text-zinc-400 font-medium">
            <a href="#scroll-dekorasyon" className="hover:text-white transition-colors">Scroll Dekorasyon</a>
            <a href="#3d-elemanlar" className="hover:text-white transition-colors">3D Elemanlar</a>
            <a href="#projeler" className="hover:text-white transition-colors">Projeler</a>
            <a href="#felsefe" className="hover:text-white transition-colors">Felsefe</a>
            <a href="#surec" className="hover:text-white transition-colors">Süreç</a>
            <a href="#donusum" className="hover:text-white transition-colors">Öncesi / Sonrası</a>
          </div>

          {/* CTA Keşif Randevusu */}
          <div className="flex items-center gap-2">
            <a
              href="#kesif"
              className="px-4 py-1.5 rounded-full bg-white text-black text-xs font-bold hover:bg-amber-400 transition-all shadow-md shadow-white/10 flex items-center gap-1.5"
            >
              <span>Keşif Randevusu</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

        </nav>
      </header>

      {/* 2. Hero Section (Supahero.io inspiration + Three.js Interactive) */}
      <section id="top" className="pt-32 pb-16 lg:pt-36 lg:pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative overflow-hidden">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Text Column (7 Cols) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Top Badges */}
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-amber-400 text-xs font-mono font-medium tracking-wider">
                İstanbul / Pendik Sahil & Bağdat Caddesi
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-amber-500/15 text-amber-300 border border-amber-500/30 text-[10px] font-mono font-bold uppercase">
                Bienal Standardı
              </span>
            </div>

            {/* Editorial Serif Big Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-normal text-white tracking-tight leading-[1.08]">
              Mekanın Ruhunu, <br />
              <span className="italic font-serif text-amber-400">Malzemenin Zarafetiyle</span> <br />
              Şekillendiriyoruz.
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-zinc-300 max-w-xl font-sans font-light leading-relaxed">
              Sıradan bir iç mimarlık ofisi değil; brüt beton, İtalyan mermeri ve sıcak amber aydınlatmanın dengesiyle, yaşayan heykel niteliğinde lüks yaşam alanları tasarlıyoruz.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#kesif"
                className="px-7 py-3.5 rounded-2xl bg-white text-black font-bold text-xs sm:text-sm hover:bg-amber-400 transition-all shadow-xl shadow-white/10 flex items-center gap-2"
              >
                <span>Mekanınızı Dönüştürün</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href="#projeler"
                className="px-6 py-3.5 rounded-2xl bg-[#0D0D11] hover:bg-white/10 border border-white/10 text-white font-medium text-xs sm:text-sm transition-all flex items-center gap-2"
              >
                <span>3D Projeleri İncele</span>
                <ArrowDown className="w-4 h-4 text-amber-400" />
              </a>
            </div>

            {/* Trust / Accreditation bar */}
            <div className="pt-6 border-t border-white/10 flex items-center gap-6 text-xs text-zinc-400 font-mono">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-amber-400" />
                <span>0 Gün Gecikme Taahhüdü</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-amber-400" />
                <span>15 Ulusal Mimari Ödülü</span>
              </div>
            </div>

          </div>

          {/* Right Column: Three.js Interactive Architectural Sculpture (5 Cols) */}
          <div className="lg:col-span-5 relative">
            <AuraThreeScene />
          </div>

        </div>

      </section>

      {/* 3. Architectural Metrics & Commitments Bar */}
      <section className="py-8 bg-[#09090C] border-t border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            
            <div className="p-4">
              <div className="text-3xl sm:text-4xl font-serif text-white font-normal mb-1">
                140<span className="text-amber-400">+</span>
              </div>
              <div className="text-xs text-zinc-400 font-mono uppercase tracking-wider">
                Teslim Edilen Yaşam Alanı & Villa
              </div>
            </div>

            <div className="p-4">
              <div className="text-3xl sm:text-4xl font-serif text-white font-normal mb-1">
                15
              </div>
              <div className="text-xs text-zinc-400 font-mono uppercase tracking-wider">
                Tasarım & Bienal Ödülü
              </div>
            </div>

            <div className="p-4">
              <div className="text-3xl sm:text-4xl font-serif text-white font-normal mb-1">
                0<span className="text-amber-400"> Gün</span>
              </div>
              <div className="text-xs text-zinc-400 font-mono uppercase tracking-wider">
                Şantiye & Teslim Gecikmesi
              </div>
            </div>

            <div className="p-4">
              <div className="text-3xl sm:text-4xl font-serif text-white font-normal mb-1">
                %100
              </div>
              <div className="text-xs text-zinc-400 font-mono uppercase tracking-wider">
                Bütçe & Malzeme Sadakati
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Centerpiece: Scrolltide.co Scroll-Driven Interior Decoration Assembly & Styles.refero.design Material Palette */}
      <AuraScrollDecorStudio />

      {/* 5. 3dicons.co Inspired Tactile 3D Decor Objects Showcase */}
      <AuraDecorElementsShowcase />

      {/* 6. Featured Projects with Scrolltide Layer Switching */}
      <AuraProjectLayerViewer />

      {/* 5. 4-Stage Architectural Process & Manifesto */}
      <AuraProcess />

      {/* 6. Interactive Before & After Transformation Slider */}
      <AuraBeforeAfter />

      {/* 7. Conversion Module: Discovery & Proposal Form */}
      <AuraDiscoveryForm />

      {/* 8. Prestige Monochrome Footer (Footer.design inspiration) */}
      <footer className="pt-20 pb-12 bg-black border-t border-white/10 relative overflow-hidden">
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Top Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16">
            
            {/* Studio Identity (5 Cols) */}
            <div className="md:col-span-5 space-y-4">
              <div className="flex items-center gap-2">
                <span className="font-serif text-2xl font-normal tracking-widest text-white">
                  AURA STUDIO
                </span>
              </div>
              <p className="text-xs sm:text-sm text-zinc-400 font-sans max-w-sm leading-relaxed">
                Pendik Sahil, Batı Mahallesi, Kartal Kordonboyu ve Bağdat Caddesi hattında lüks villa, rezidans ve ticari mekan iç mimarlık danışmanlığı.
              </p>
              
              <div className="pt-2 font-mono text-xs text-zinc-500 space-y-1.5">
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-amber-400" />
                  <span>Batı Mah. Sahil Bulvarı No: 42, Pendik / İstanbul</span>
                </div>
                <div className="flex items-center gap-2">
                  <Compass className="w-3.5 h-3.5 text-amber-400" />
                  <span>Koordinatlar: 40.8756° N, 29.2331° E</span>
                </div>
              </div>
            </div>

            {/* Quick Links (3 Cols) */}
            <div className="md:col-span-3 space-y-3 font-mono text-xs">
              <span className="text-white font-bold uppercase tracking-wider block">Bölümler</span>
              <ul className="space-y-2 text-zinc-400">
                <li><a href="#projeler" className="hover:text-white transition-colors">Öne Çıkan Projeler</a></li>
                <li><a href="#felsefe" className="hover:text-white transition-colors">Tasarım Felsefesi</a></li>
                <li><a href="#surec" className="hover:text-white transition-colors">4 Aşamalı Süreç</a></li>
                <li><a href="#donusum" className="hover:text-white transition-colors">Öncesi / Sonrası</a></li>
                <li><a href="#kesif" className="hover:text-white transition-colors">Keşif Randevusu</a></li>
              </ul>
            </div>

            {/* Studio Hours & Local Time (4 Cols) */}
            <div className="md:col-span-4 space-y-4 p-6 rounded-2xl bg-[#0D0D11] border border-white/10 font-mono text-xs">
              <div className="flex items-center justify-between">
                <span className="text-zinc-400">İstanbul Yerel Saati (GMT+3):</span>
                <span className="flex items-center gap-1.5 text-amber-400 font-bold">
                  <Clock className="w-3.5 h-3.5 animate-spin" />
                  <span>{timeStr || '14:20:00'}</span>
                </span>
              </div>
              <div className="pt-2 border-t border-white/5 space-y-1 text-zinc-400">
                <div className="flex justify-between">
                  <span>Pazartesi – Cuma:</span>
                  <span className="text-white">09:00 – 19:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Cumartesi:</span>
                  <span className="text-white">10:00 – 16:00 (Randevuyla)</span>
                </div>
                <div className="flex justify-between">
                  <span>Pazar:</span>
                  <span className="text-zinc-600">Kapalı (Atölye Dinlenme)</span>
                </div>
              </div>
            </div>

          </div>

          {/* Huge Monochromatic Studio Silhouette (Footer.design hallmark) */}
          <div className="py-8 border-t border-white/10 text-center select-none overflow-hidden">
            <span className="block font-serif font-black tracking-tighter text-white/[0.04] text-[14vw] leading-none whitespace-nowrap pointer-events-none">
              AURA STUDIO
            </span>
          </div>

          {/* Bottom Copyright */}
          <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-zinc-500 gap-3">
            <div>
              © 2026 Aura Studio Mimarlık Ltd. Şti. Tüm Hakları Saklıdır.
            </div>
            <div>
              Canlı Demo Mimarisi: <span className="text-zinc-300 font-bold">MediWeb Agency v3.0</span>
            </div>
          </div>

        </div>

      </footer>

    </div>
  );
};
