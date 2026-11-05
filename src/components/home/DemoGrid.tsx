'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
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
  const [previewDemo, setPreviewDemo] = useState<DemoItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredDemos = activeSector === 'all'
    ? DEMO_CATALOG
    : DEMO_CATALOG.filter((item) => item.sectorId === activeSector);

  const handleOpenPreview = (demo: DemoItem) => {
    setPreviewDemo(demo);
    setIsModalOpen(true);
  };

  return (
    <section id="tasarimlar" className="py-20 bg-black border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header - Clean & Direct */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="text-sm font-semibold text-indigo-400 mb-2">
            Kanıtlanmış Sektörel Çözümler
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
            Sektörel Vitrin Mimarileri
          </h2>
          <p className="text-base text-slate-300 leading-relaxed">
            Firmanız için sıfırdan hayal kurup haftalarca beklemek yerine, sektörünüzde güven ve saygı uyandırdığı kanıtlanmış canlı mimarileri deneyimleyin. Beğendiğiniz mimariyi kurumsal kimliğinize uyarlayarak 3–5 günde anahtar teslim yayına alıyoruz.
          </p>
        </div>

        {/* Sector Tabs Bar */}
        <div className="mb-10">
          <SectorTabs
            activeSector={activeSector}
            onSelectSector={setActiveSector}
          />
        </div>

        {/* Grid of Demos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredDemos.map((demo) => (
            <DemoCard
              key={demo.id}
              demo={demo}
              onOpenPreview={handleOpenPreview}
            />
          ))}
        </div>

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
