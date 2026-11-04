'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  X, 
  Monitor, 
  Tablet, 
  Smartphone, 
  ExternalLink, 
  ArrowRight, 
  Check, 
  MessageSquare,
  Sparkles,
  ShieldCheck
} from 'lucide-react';
import { DemoItem } from '@/config/demos.config';
import { generateWhatsAppUrl } from '@/lib/utils';
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon';

interface LivePreviewModalProps {
  demo: DemoItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export const LivePreviewModal: React.FC<LivePreviewModalProps> = ({
  demo,
  isOpen,
  onClose,
}) => {
  const [device, setDevice] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');

  if (!isOpen || !demo) return null;

  const deviceWidths = {
    desktop: 'w-full max-w-6xl h-[75vh]',
    tablet: 'w-[768px] max-w-full h-[75vh]',
    mobile: 'w-[375px] max-w-full h-[75vh]',
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        role="dialog"
        aria-modal="true"
        aria-labelledby="preview-modal-title"
        className="relative w-full max-w-7xl bg-[#0F172A] border border-white/10 rounded-2xl sm:rounded-3xl flex flex-col h-[92vh] shadow-2xl overflow-hidden"
      >
        {/* Top Control Bar */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 bg-[#0B0F19] border-b border-white/10">
          {/* Demo Details */}
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 hidden sm:block" />
            <div>
              <div className="flex items-center gap-2">
                <h3 id="preview-modal-title" className="text-sm sm:text-base font-bold text-white font-display">
                  {demo.name}
                </h3>
                <span className="text-[11px] px-2 py-0.5 rounded bg-brand-500/20 text-brand-300 font-medium">
                  {demo.sectorName}
                </span>
              </div>
              <p className="text-[11px] text-slate-400 hidden md:block">
                {demo.style} · 3 Pakete de Uyarlanabilir
              </p>
            </div>
          </div>

          {/* Viewport Switcher */}
          <div className="flex items-center bg-[#1E293B] p-1 rounded-xl border border-white/5">
            <button
              onClick={() => setDevice('desktop')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                device === 'desktop'
                  ? 'bg-brand-600 text-white shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
              title="Masaüstü Görünümü"
            >
              <Monitor className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Masaüstü</span>
            </button>
            <button
              onClick={() => setDevice('tablet')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                device === 'tablet'
                  ? 'bg-brand-600 text-white shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
              title="Tablet Görünümü"
            >
              <Tablet className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Tablet</span>
            </button>
            <button
              onClick={() => setDevice('mobile')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                device === 'mobile'
                  ? 'bg-brand-600 text-white shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
              title="Mobil Görünümü"
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Mobil</span>
            </button>
          </div>

          {/* Actions & Close */}
          <div className="flex items-center gap-2">
            <Link
              href={`/tasarimlar/${demo.slug}`}
              onClick={onClose}
              className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-brand-300 bg-brand-500/10 hover:bg-brand-500/20 border border-brand-500/30 transition-colors"
            >
              <span>Tüm Detayları Gör</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            <a
              href={generateWhatsAppUrl({
                designName: `${demo.name} (${demo.sectorName})`,
                packageName: 'Profesyonel Paket (32.500 ₺)',
              })}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 transition-colors"
            >
              <WhatsAppIcon className="w-3.5 h-3.5 fill-current shrink-0" />
              <span className="hidden sm:inline">Bu Tasarımı Seç</span>
            </a>

            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
              aria-label="Kapat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Viewport Frame Area */}
        <div className="flex-1 bg-[#090D16] p-2 sm:p-6 flex items-center justify-center overflow-auto">
          <div
            className={`transition-all duration-300 bg-[#0B0F19] rounded-xl border border-white/10 shadow-2xl overflow-hidden flex flex-col ${deviceWidths[device]}`}
          >
            {/* Mock Browser Header */}
            <div className="bg-[#1E293B] px-4 py-2.5 flex items-center justify-between border-b border-white/5 shrink-0">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
              </div>
              <div className="text-[11px] text-slate-400 font-mono bg-[#0B0F19] px-4 py-1 rounded-md border border-white/5 max-w-sm truncate">
                https://demo-{demo.slug}.mediweb.com.tr
              </div>
              <div className="text-[10px] text-emerald-400 font-mono flex items-center gap-1">
                <ShieldCheck className="w-3 h-3" />
                <span>SSL Aktif</span>
              </div>
            </div>

            {/* Simulated Live View / Iframe Content */}
            <iframe
              src={demo.liveUrl}
              title={demo.name}
              className="w-full flex-1 border-0 bg-white"
              sandbox="allow-scripts allow-same-origin"
            />
          </div>
        </div>

        {/* Bottom Banner Bar */}
        <div className="px-6 py-2.5 bg-[#0B0F19] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-brand-400" />
            <span>
              Bu tasarım; <strong>Başlangıç</strong> (Tek Sayfa), <strong>Profesyonel</strong> (10 Sayfaya Kadar) veya <strong>Kurumsal</strong> (20 Sayfa & 2 Dil) paketiyle teslim edilebilir.
            </span>
          </div>
          <Link
            href={`/tasarimlar/${demo.slug}`}
            onClick={onClose}
            className="text-brand-400 hover:underline font-semibold flex items-center gap-1"
          >
            Paketlere Göre Sayfa Dağılımını İncele →
          </Link>
        </div>
      </div>
    </div>
  );
};
