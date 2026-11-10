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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-xs font-semibold text-amber-400 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>Şu An Aktif 4 Sektörde Yayında Olan Canlı Mimariler</span>
          </div>
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

        {/* Expand / Show More Demos Button for 'all' */}
        {activeSector === 'all' && filteredDemos.length > 6 && (
          <div className="mt-12 flex items-center justify-center">
            <button
              onClick={() => setShowAllDemos(!showAllDemos)}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#111114] hover:bg-zinc-800 border border-white/10 text-white font-semibold text-sm transition-all shadow-md"
            >
              <span>
                {showAllDemos
                  ? 'Daha Az Tasarım Göster'
                  : `Kalan 10 Mimarimizi İnceleyin (Toplam ${filteredDemos.length} Tasarım)`}
              </span>
              {showAllDemos ? (
                <ChevronUp className="w-4 h-4 text-amber-400" />
              ) : (
                <ChevronDown className="w-4 h-4 text-amber-400" />
              )}
            </button>
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
