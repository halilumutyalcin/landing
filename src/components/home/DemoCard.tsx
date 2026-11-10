'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Eye, 
  ArrowRight, 
  Check, 
  MessageSquare,
  Sparkles
} from 'lucide-react';
import { DemoItem } from '@/config/demos.config';
import { generateWhatsAppUrl } from '@/lib/utils';
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon';

interface DemoCardProps {
  demo: DemoItem;
  onOpenPreview: (demo: DemoItem) => void;
}

export const DemoCard: React.FC<DemoCardProps> = ({ demo, onOpenPreview }) => {
  const handleChooseDesign = () => {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(
        new CustomEvent('select-design', {
          detail: {
            design: demo.name,
            sector: demo.sectorId,
          },
        })
      );
      const target = document.getElementById('iletisim');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="bg-[#0A0A0C] border border-white/[0.08] hover:border-amber-500/40 rounded-2xl overflow-hidden shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group">
      {/* Thumbnail Area */}
      <div className="relative aspect-[16/10] overflow-hidden bg-zinc-950">
        <Image
          src={demo.previewImage}
          alt={demo.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0C] via-transparent to-transparent opacity-80" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
          <span className="px-2.5 py-1 rounded-lg text-xs font-bold bg-black/80 backdrop-blur-md text-zinc-300 border border-white/10 shadow">
            {demo.sectorName}
          </span>
          {demo.badge && (
            <span className="px-2.5 py-1 rounded-lg text-xs font-bold bg-amber-500 text-black shadow">
              {demo.badge}
            </span>
          )}
        </div>

        {/* Hover Quick View Button */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/50 backdrop-blur-xs transition-opacity duration-300 gap-2 p-4">
          <button
            onClick={() => onOpenPreview(demo)}
            className="px-4 py-2.5 rounded-xl bg-white text-black font-bold text-xs shadow-xl flex items-center gap-1.5 hover:bg-zinc-200 hover:scale-105 transition-all"
          >
            <Eye className="w-4 h-4 text-black" />
            <span>Canlı Önizle</span>
          </button>
          <Link
            href={`/tasarimlar/${demo.slug}`}
            className="px-4 py-2.5 rounded-xl bg-amber-400 text-black font-bold text-xs shadow-xl flex items-center gap-1.5 hover:bg-amber-300 hover:scale-105 transition-all"
          >
            <span>Detaylar</span>
            <ArrowRight className="w-4 h-4 text-black" />
          </Link>
        </div>
      </div>

      {/* Content Area */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
        <div>
          {/* Style & Sector Tag */}
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-xs font-medium text-zinc-400">
              {demo.style}
            </span>
            <span className="text-[11px] text-zinc-400 font-mono">
              Mobil Uyumlu
            </span>
          </div>

          <Link href={`/tasarimlar/${demo.slug}`} className="group-hover:text-amber-400 transition-colors">
            <h3 className="text-xl font-bold text-white font-display mb-2">
              {demo.name}
            </h3>
          </Link>

          <p className="text-xs sm:text-sm text-zinc-400 line-clamp-2 mb-4 leading-relaxed">
            {demo.shortDesc}
          </p>

          {/* Features bullet list */}
          <div className="space-y-1.5 pt-3 border-t border-white/5 mb-5">
            {demo.keyFeatures.slice(0, 3).map((feature, idx) => (
              <div key={idx} className="flex items-center gap-2 text-xs text-zinc-300">
                <Check className="w-3.5 h-3.5 text-zinc-500 shrink-0" />
                <span className="truncate">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Delivery & Pricing Cue & Actions */}
        <div className="space-y-2.5">
          <div className="flex items-center justify-between text-xs text-zinc-400 pt-3 border-t border-white/5">
            <span className="text-[11px] text-zinc-400">Anahtar Teslim 3–10 Gün</span>
            <span className="text-amber-400 font-semibold text-xs">17.500 ₺'den Başlayan</span>
          </div>

          {/* 1. Canlı Demo & 2. Tasarım Detayı */}
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => onOpenPreview(demo)}
              className="py-2.5 px-3 rounded-xl bg-white/[0.08] hover:bg-white text-zinc-200 hover:text-black font-semibold text-xs transition-all flex items-center justify-center gap-1.5 border border-white/10 hover:border-white"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Canlı Demo</span>
            </button>
            <Link
              href={`/tasarimlar/${demo.slug}`}
              className="py-2.5 px-3 rounded-xl bg-white/[0.04] hover:bg-white/10 text-zinc-300 font-medium text-xs border border-white/[0.08] transition-all flex items-center justify-center gap-1.5 group/btn"
            >
              <span>Detayları Gör</span>
              <ArrowRight className="w-3.5 h-3.5 text-zinc-400 group-hover/btn:translate-x-0.5 transition-all" />
            </Link>
          </div>

          {/* 3. Bu Tasarımı İstiyorum (High-Conversion Action) */}
          <button
            onClick={handleChooseDesign}
            className="w-full py-2.5 px-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-black font-extrabold text-xs shadow-md transition-all flex items-center justify-center gap-2 group/btn"
          >
            <Sparkles className="w-3.5 h-3.5 text-black" />
            <span>Bu Tasarımı İstiyorum (Teklif Al)</span>
          </button>
        </div>
      </div>
    </div>
  );
};
