'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { DEMO_CATALOG, DemoItem } from '@/config/demos.config';
import { SectorTabs } from './SectorTabs';
import { DemoCard } from './DemoCard';

// Defer heavy iframe preview modal from initial page bundle (vercel-react-best-practices)
const LivePreviewModal = dynamic(
  () => import('./LivePreviewModal').then((mod) => mod.LivePreviewModal),
  { ssr: false }
);

interface DemoGridProps {
  initialSector?: string;
}

export const DemoGrid: React.FC<DemoGridProps> = ({ initialSector = 'all' }) => {
  const [activeSector, setActiveSector] = useState<string>(initialSector);
  const [showAllDemos, setShowAllDemos] = useState(false);
  const [previewDemo, setPreviewDemo] = useState<DemoItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredDemos = activeSector === 'all'
    ? DEMO_CATALOG
    : DEMO_CATALOG.filter((item) => item.sectorId === activeSector);

  // If "all" and not expanded, show top 6 flagship demos (representing each of the 6 sectors)
  const displayedDemos = (activeSector === 'all' && !showAllDemos)
    ? filteredDemos.slice(0, 6)
    : filteredDemos;

  const handleOpenPreview = (demo: DemoItem) => {
    setPreviewDemo(demo);
    setIsModalOpen(true);
  };

  return (
    <section id="tasarimlar" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header - Clean & Direct */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <p className="text-xs font-semibold uppercase tracking-wider text-amber-400 mb-3">
            6 Ana Sektör · 16 Canlı Mimari Yayında
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
            Sektörel Canlı Vitrin Mimarileri
          </h2>
          <p className="text-base text-slate-300 leading-relaxed">
            Firmanız için ne çıkacağını bilmeden haftalarca beklemek yerine, sektörünüze özel geliştirilmiş çalışan canlı mimarileri inceleyin. Beğendiğiniz mimariyi kurumsal kimliğinize uyarlayarak paketinize göre 3–10 iş gününde anahtar teslim yayına alıyoruz.
          </p>
        </div>

        {/* Sector Tabs Bar */}
        <div className="mb-10">
          <SectorTabs
            activeSector={activeSector}
            onSelectSector={(sector) => {
              setActiveSector(sector);
              setShowAllDemos(false);
            }}
          />
        </div>

        {/* Grid of Demos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {displayedDemos.map((demo) => (
            <DemoCard
              key={demo.id}
              demo={demo}
              onOpenPreview={handleOpenPreview}
            />
          ))}
        </div>

        {/* Expand / Show More Demos Banner for 'all' */}
        {activeSector === 'all' && filteredDemos.length > 6 && (
          <div className="mt-14 max-w-2xl mx-auto p-6 rounded-2xl bg-[#0A0A0C] border border-white/[0.08] hover:border-amber-400/30 transition-all text-center space-y-3 shadow-xl">
            <div className="text-xs text-zinc-400">
              Şu an 6 ana amiral gemisi vitrinde. Sağlık, Hukuk, Mimarlık, Sanayi, Mali Müşavirlik ve Emlak sektörlerine ait tüm 16 çalışan mimari yayındadır.
            </div>
            <div>
              <button
                onClick={() => setShowAllDemos(!showAllDemos)}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-black font-extrabold text-xs sm:text-sm transition-all shadow-lg shadow-amber-400/20"
              >
                <span>
                  {showAllDemos
                    ? 'Vitrine Dön (İlk 6 Tasarımı Göster)'
                    : `Kalan 10 Mimarimizi İnceleyin (Toplam ${filteredDemos.length} Tasarım) ↓`}
                </span>
                {showAllDemos ? (
                  <ChevronUp className="w-4 h-4 text-black" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-black" />
                )}
              </button>
            </div>
          </div>
        )}

      </div>

      {/* Responsive Preview Modal */}
      <LivePreviewModal
        demo={previewDemo}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
};
