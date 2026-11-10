'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Eye, 
  ArrowRight, 
  Check 
} from 'lucide-react';
import { DemoItem } from '@/config/demos.config';

interface DemoCardProps {
  demo: DemoItem;
  onOpenPreview?: (demo: DemoItem) => void;
}

export const DemoCard: React.FC<DemoCardProps> = ({ demo }) => {
  return (
    <div className="bg-[#0A0A0C] border border-white/[0.08] hover:border-white/20 rounded-2xl overflow-hidden shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group">
      {/* Thumbnail Area */}
      <div className="relative aspect-[16/10] overflow-hidden bg-zinc-950 flex items-center justify-center">
        <Image
          src={demo.previewImage}
          alt={demo.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />

        {/* Subtle Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0C] via-transparent to-transparent opacity-80 pointer-events-none" />

        {/* Sector Tag Badge */}
        <div className="absolute top-3 left-3 z-10">
          <span className="px-2.5 py-1 rounded-lg text-xs font-bold bg-black/80 backdrop-blur-md text-zinc-300 border border-white/10 shadow">
            {demo.sectorName}
          </span>
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
        <div className="space-y-3 pt-3 border-t border-white/5">
          <div className="flex items-center justify-between text-xs text-zinc-400">
            <span className="text-[11px] text-zinc-400">Anahtar Teslim 3–10 Gün</span>
            <span className="text-amber-400 font-semibold text-xs">17.500 ₺'den Başlayan</span>
          </div>

          {/* 1. Canlı Demo (Yeni Sekmede) & 2. Tasarım Detayı */}
          <div className="grid grid-cols-2 gap-2">
            <a
              href={`/preview/${demo.slug}`}
              target="_blank"
              rel="noopener noreferrer"
              className="py-2.5 px-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-black font-bold text-xs transition-all flex items-center justify-center gap-1.5 shadow-md"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Canlı Demo ↗</span>
            </a>
            <Link
              href={`/tasarimlar/${demo.slug}`}
              className="py-2.5 px-3 rounded-xl bg-white/[0.04] hover:bg-white/10 text-zinc-300 font-medium text-xs border border-white/[0.08] transition-all flex items-center justify-center gap-1.5 group/btn"
            >
              <span>Tasarım Detayı</span>
              <ArrowRight className="w-3.5 h-3.5 text-zinc-400 group-hover/btn:translate-x-0.5 transition-all" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
