'use client';

import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { generateWhatsAppUrl } from '@/lib/utils';
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon';

interface MobileBottomBarProps {
  onOpenProposal?: () => void;
}

export const MobileBottomBar: React.FC<MobileBottomBarProps> = ({ onOpenProposal }) => {
  return (
    <aside 
      aria-label="Mobil Hızlı Eylem Çubuğu"
      className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0A0A0C]/95 backdrop-blur-xl border-t border-white/[0.12] px-4 py-2.5 flex items-center justify-between shadow-[0_-8px_24px_rgba(0,0,0,0.8)] print:hidden"
    >
      <div className="flex flex-col">
        <span className="text-xs font-bold text-white tracking-tight flex items-center gap-1.5">
          <Sparkles className="w-3 h-3 text-amber-400" />
          <span>Web Sitenizi Hazırlayalım</span>
        </span>
        <span className="text-[10px] text-amber-400/90 font-medium">
          Ücretsiz demo & net teklif alın
        </span>
      </div>

      <div className="flex items-center gap-2">
        <a
          href={generateWhatsAppUrl({
            customMessage: 'Merhaba! Web sitem için ücretsiz canlı demo incelemesi ve paket teklifi almak istiyorum.',
          })}
          target="_blank"
          rel="noopener noreferrer"
          className="px-3.5 py-2 rounded-xl bg-amber-400 hover:bg-amber-300 text-black font-extrabold text-xs shadow-lg flex items-center gap-1.5 active:scale-95 transition-all"
        >
          <span>Demo İste</span>
          <ArrowRight className="w-3.5 h-3.5 text-black" />
        </a>
      </div>
    </aside>
  );
};
