'use client';

import React, { useState, useRef, useCallback } from 'react';
import Image from 'next/image';
import { Sparkles, MoveHorizontal, ArrowLeftRight, CheckCircle2 } from 'lucide-react';

export const AuraBeforeAfter: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const startDrag = () => setIsDragging(true);
  const stopDrag = () => setIsDragging(false);

  return (
    <section id="donusum" className="py-24 bg-[#08080A] border-t border-b border-white/[0.08] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-amber-500/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 text-amber-400 text-xs font-mono tracking-widest uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Mekansal Dönüşüm Kanıtı</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-white tracking-tight mb-4">
            Eski Hantal Daireden, <br />
            <span className="italic font-serif text-amber-400">Lüks İtalyan Yaşam Alanına</span>
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 font-sans leading-relaxed">
            Kaydırma çubuğunu sağa-sola sürükleyerek mekanın yıkım öncesi eski planı ile Aura Studio imzalı anahtar teslim lüks dönüşümü arasındaki radikal farkı inceleyin.
          </p>
        </div>

        {/* Interactive Comparison Container */}
        <div className="relative max-w-5xl mx-auto rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-black select-none">
          
          <div
            ref={containerRef}
            className="relative w-full aspect-[4/3] sm:aspect-[16/9] cursor-ew-resize overflow-hidden"
            onMouseDown={startDrag}
            onMouseUp={stopDrag}
            onMouseLeave={stopDrag}
            onMouseMove={handleMouseMove}
            onTouchStart={startDrag}
            onTouchEnd={stopDrag}
            onTouchMove={handleTouchMove}
          >
            {/* AFTER IMAGE (Full width background) */}
            <div className="absolute inset-0 w-full h-full">
              <Image
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=85"
                alt="Aura Studio Dönüştürülmüş Lüks Salon & İtalyan Mutfak"
                fill
                priority
                className="object-cover"
              />
              <div className="absolute top-5 right-5 z-20 px-3.5 py-1.5 rounded-full bg-black/75 backdrop-blur-md border border-amber-500/30 text-amber-300 text-xs font-mono font-bold tracking-wider uppercase flex items-center gap-1.5 shadow-lg">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                <span>SONRASI: AURA DÖNÜŞÜMÜ</span>
              </div>
            </div>

            {/* BEFORE IMAGE (Clipped overlay) */}
            <div
              className="absolute inset-y-0 left-0 overflow-hidden z-10"
              style={{ width: `${sliderPosition}%` }}
            >
              <div className="relative w-full h-full min-w-full" style={{ width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%' }}>
                <Image
                  src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1800&q=80"
                  alt="Yenileme Öncesi Eski Hantal Daire"
                  fill
                  className="object-cover grayscale contrast-125 brightness-90"
                />
              </div>

              <div className="absolute top-5 left-5 z-20 px-3.5 py-1.5 rounded-full bg-black/75 backdrop-blur-md border border-white/20 text-zinc-300 text-xs font-mono font-bold tracking-wider uppercase flex items-center gap-1.5 shadow-lg">
                <span className="w-2 h-2 rounded-full bg-zinc-500" />
                <span>ÖNCESİ: ESKİ HANTAL PLAN</span>
              </div>
            </div>

            {/* SLIDER DIVIDER LINE */}
            <div
              className="absolute inset-y-0 z-30 pointer-events-none"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute inset-y-0 -left-[1.5px] w-[3px] bg-white shadow-[0_0_15px_rgba(255,255,255,0.7)]" />
              
              {/* Center Grab Handle */}
              <div className="absolute top-1/2 -translate-y-1/2 -left-5 w-10 h-10 rounded-full bg-black/90 backdrop-blur-md border-2 border-white flex items-center justify-center text-white shadow-2xl">
                <ArrowLeftRight className="w-4 h-4 text-amber-400" />
              </div>
            </div>

          </div>

          {/* Quick Info Bar below slider */}
          <div className="p-6 bg-[#0D0D11] border-t border-white/10 grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-sans">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-white block">Açık Plan & Doğal Işık</span>
                <span className="text-zinc-400">Yıkılan 2 ara duvar ile salon, ada tezgah mutfak ve teras kesintisiz birleşti.</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-white block">Özel İtalyan İmalat</span>
                <span className="text-zinc-400">Calacatta mermer kaplama tezgah, gizli mekanizmalı meşe dolaplar.</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-white block">45 Günde Anahtar Teslim</span>
                <span className="text-zinc-400">Dragos Sahil / 210 m² — Kırım, tesisat, mobilya ve temizlik dahil 0 gün gecikme.</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
