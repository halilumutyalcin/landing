'use client';

import React, { useState, useRef, useCallback } from 'react';
import { 
  CheckCircle2, 
  XCircle, 
  ArrowLeftRight, 
  ShieldCheck, 
  Zap,
  PhoneCall,
  Lock
} from 'lucide-react';

export const BeforeAfterSection: React.FC = () => {
  const [sliderPos, setSliderPos] = useState<number>(50);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percent = Math.min(Math.max((x / rect.width) * 100, 5), 95);
    setSliderPos(percent);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  return (
    <section id="oncesi-sonrasi" className="py-24 bg-black border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-2">
            İşletmeniz İçin Gerçek Fark
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
            Neden Eski WordPress Siteleri İş Kaybettiriyor?
          </h2>
          <p className="text-base text-slate-300 leading-relaxed">
            Yavaş açılan her saniye potansiyel müşterinizin rakip firmayı aramasına sebep olur. 
            Aşağıdaki kaydırıcıyı çekerek aradaki uçurumu doğrudan görün.
          </p>
        </div>

        {/* Interactive Comparison Slider Container */}
        <div 
          ref={containerRef}
          onMouseDown={() => setIsDragging(true)}
          onMouseUp={() => setIsDragging(false)}
          onMouseLeave={() => setIsDragging(false)}
          onMouseMove={handleMouseMove}
          onTouchMove={handleTouchMove}
          className="relative w-full h-[480px] sm:h-[500px] rounded-3xl overflow-hidden select-none shadow-2xl cursor-ew-resize bg-[#0E121A]"
        >
          {/* AFTER (MediWeb / Right Side - Full Layer) */}
          <div className="absolute inset-0 bg-[#0C1422] p-6 sm:p-10 flex flex-col justify-between">
            <div className="text-right">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-1 block">
                MediWeb Mimarisi
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white">Yüksek Prestij & Hızlı Dönüşüm</h3>
              <p className="text-xs sm:text-sm text-slate-300">0.3 saniyede anında açılan, müşteriyi telefona yönlendiren yapı</p>
            </div>

            {/* Metrics Showcase Right - Business Outcomes */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 my-auto pl-12 sm:pl-24">
              <div className="p-4 rounded-xl bg-black/40">
                <div className="text-xs font-bold text-emerald-400 mb-1">Açılış Hızı</div>
                <div className="text-3xl font-black text-white">0.3 sn</div>
                <div className="text-[11px] text-emerald-300 mt-1">Sıfır Ziyaretçi Kaybı</div>
              </div>

              <div className="p-4 rounded-xl bg-black/40">
                <div className="text-xs font-bold text-blue-400 mb-1">Google Uyumu</div>
                <div className="text-3xl font-black text-white">Hazır</div>
                <div className="text-[11px] text-blue-300 mt-1">Harita, Arama & Schema Kayıtlı</div>
              </div>

              <div className="p-4 rounded-xl bg-black/40">
                <div className="text-xs font-bold text-cyan-400 mb-1">Sunucu Faturası</div>
                <div className="text-3xl font-black text-white">3 Yıl 0 ₺</div>
                <div className="text-[11px] text-cyan-300 mt-1">Sürpriz Ek Masraf Yok</div>
              </div>

              <div className="p-4 rounded-xl bg-black/40">
                <div className="text-xs font-bold text-indigo-400 mb-1">Çökme & Virüs</div>
                <div className="text-3xl font-black text-white">%0 Risk</div>
                <div className="text-[11px] text-indigo-300 mt-1">Eklenti Açıkları Yok</div>
              </div>
            </div>

            {/* Feature Checklist Right */}
            <div className="flex flex-wrap items-center justify-end gap-3 sm:gap-6 text-xs sm:text-sm text-slate-300 font-medium">
              <span className="flex items-center gap-1.5 text-emerald-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                3–5 Günde Canlıda
              </span>
              <span className="flex items-center gap-1.5 text-emerald-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                Doğrudan WhatsApp & Telefon Araması
              </span>
              <span className="flex items-center gap-1.5 text-emerald-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                Google Harita Kaydı Dahil
              </span>
            </div>
          </div>

          {/* BEFORE (Legacy / Left Side - Clipped Layer) */}
          <div 
            style={{ width: `${sliderPos}%` }}
            className="absolute inset-y-0 left-0 bg-[#1A0E13] border-r-2 border-white p-6 sm:p-10 flex flex-col justify-between overflow-hidden z-10"
          >
            <div className="w-[800px] sm:w-[1100px]">
              <span className="text-xs font-bold uppercase tracking-wider text-rose-400 mb-1 block">
                Geleneksel Sistem
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white">Hantal WordPress & Eski Tip Ajanslar</h3>
              <p className="text-xs sm:text-sm text-rose-300/80">Sürekli çöken eklentiler ve bitmeyen yenileme masrafları</p>
            </div>

            {/* Metrics Showcase Left */}
            <div className="w-[800px] sm:w-[1100px] grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 my-auto">
              <div className="p-4 rounded-xl bg-black/40">
                <div className="text-xs font-bold text-rose-400 mb-1">Açılış Hızı</div>
                <div className="text-3xl font-black text-rose-400">4.8 sn</div>
                <div className="text-[11px] text-rose-400 mt-1">%58 Müşteri Kaybı</div>
              </div>

              <div className="p-4 rounded-xl bg-black/40">
                <div className="text-xs font-bold text-rose-400 mb-1">Google Uyumu</div>
                <div className="text-3xl font-black text-rose-400">Eksik</div>
                <div className="text-[11px] text-rose-400 mt-1">Hantal Kod ve Şema Eksikliği</div>
              </div>

              <div className="p-4 rounded-xl bg-black/40">
                <div className="text-xs font-bold text-rose-400 mb-1">Yıllık Yenileme</div>
                <div className="text-3xl font-black text-rose-400">15.000 ₺+</div>
                <div className="text-[11px] text-rose-400 mt-1">Sürpriz Hosting Faturaları</div>
              </div>

              <div className="p-4 rounded-xl bg-black/40">
                <div className="text-xs font-bold text-rose-400 mb-1">Çökme & Virüs</div>
                <div className="text-3xl font-black text-rose-400">Yüksek</div>
                <div className="text-[11px] text-rose-400 mt-1">Haftada Bir Güvenlik Yaması</div>
              </div>
            </div>

            {/* Checklist Left */}
            <div className="w-[800px] sm:w-[1100px] flex flex-wrap items-center gap-3 sm:gap-6 text-xs sm:text-sm text-slate-400">
              <span className="flex items-center gap-1.5 text-rose-400">
                <XCircle className="w-4 h-4 text-rose-500 shrink-0" />
                6–12 Hafta Süren Ucu Açık Süreç
              </span>
              <span className="flex items-center gap-1.5 text-rose-400">
                <XCircle className="w-4 h-4 text-rose-500 shrink-0" />
                Telefonda Kaybolan Menüler
              </span>
              <span className="flex items-center gap-1.5 text-rose-400">
                <XCircle className="w-4 h-4 text-rose-500 shrink-0" />
                Destek İçin Ulaşılamayan Ajanslar
              </span>
            </div>
          </div>

          {/* Draggable Divider Handle */}
          <div 
            style={{ left: `${sliderPos}%` }}
            className="absolute inset-y-0 -ml-5 w-10 flex items-center justify-center pointer-events-none z-20"
          >
            <div className="w-10 h-10 rounded-full bg-white text-slate-950 font-bold shadow-2xl flex items-center justify-center border-2 border-slate-900 pointer-events-auto cursor-ew-resize hover:scale-110 transition-transform">
              <ArrowLeftRight className="w-4 h-4 text-slate-900" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
