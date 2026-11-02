'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { 
  Sparkles, 
  Search, 
  ArrowLeft, 
  SlidersHorizontal,
} from 'lucide-react';
import { DEMO_CATALOG, DemoItem } from '@/config/demos.config';
import { SectorTabs } from '@/components/home/SectorTabs';
import { DemoCard } from '@/components/home/DemoCard';
import { LivePreviewModal } from '@/components/home/LivePreviewModal';

function CatalogContent() {
  const searchParams = useSearchParams();
  const initialSectorParam = searchParams.get('sector') || 'all';

  const [activeSector, setActiveSector] = useState<string>(initialSectorParam);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [previewDemo, setPreviewDemo] = useState<DemoItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const sector = searchParams.get('sector');
    if (sector) {
      setActiveSector(sector);
    }
  }, [searchParams]);

  const filteredDemos = DEMO_CATALOG.filter((item) => {
    const matchesSector = activeSector === 'all' || item.sectorId === activeSector;
    const matchesSearch = 
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.sectorName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.style.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSector && matchesSearch;
  });

  const handleOpenPreview = (demo: DemoItem) => {
    setPreviewDemo(demo);
    setIsModalOpen(true);
  };

  return (
    <div className="pt-28 pb-24 min-h-screen bg-[#0B0F19]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Breadcrumb & Title */}
        <div className="mb-10 text-center sm:text-left flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/10 pb-8">
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors mb-3"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Ana Sayfaya Dön</span>
            </Link>
            <h1 className="text-3xl sm:text-5xl font-black text-white font-display tracking-tight">
              Sektörel Vitrin Mimarileri Koleksiyonu
            </h1>
            <p className="text-sm text-slate-400 mt-2 max-w-2xl">
              İşletmenizin kurumsal kimliğine ve sektör standartlarına uygun geliştirilmiş canlı demoları keşfedin. Her tasarım 3 paketimizle de uyumludur.
            </p>
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Tasarım veya stil ara..."
              className="w-full bg-[#111827] border border-card-border rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-brand-500 shadow-inner"
            />
          </div>
        </div>

        {/* Sector Tabs */}
        <div className="mb-10">
          <SectorTabs
            activeSector={activeSector}
            onSelectSector={setActiveSector}
          />
        </div>

        {/* Catalog Grid */}
        {filteredDemos.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredDemos.map((demo) => (
              <DemoCard
                key={demo.id}
                demo={demo}
                onOpenPreview={handleOpenPreview}
              />
            ))}
          </div>
        ) : (
          <div className="bg-[#111827] border border-card-border rounded-3xl p-12 text-center max-w-md mx-auto my-12">
            <SlidersHorizontal className="w-10 h-10 text-slate-500 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-white mb-1">Eşleşen Tasarım Bulunamadı</h3>
            <p className="text-xs text-slate-400 mb-4">
              Arama filtrenizi temizleyerek tüm tasarımları yeniden görüntüleyebilirsiniz.
            </p>
            <button
              onClick={() => {
                setActiveSector('all');
                setSearchQuery('');
              }}
              className="px-4 py-2 rounded-xl bg-brand-600 text-white font-semibold text-xs"
            >
              Filtreleri Sıfırla
            </button>
          </div>
        )}
      </div>

      {/* Live Preview Modal */}
      <LivePreviewModal
        demo={previewDemo}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}

export default function CatalogPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#0B0F19] pt-32 text-center text-slate-400">Yükleniyor...</div>}>
      <CatalogContent />
    </Suspense>
  );
}
