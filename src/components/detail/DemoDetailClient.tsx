'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  ArrowLeft, 
  Monitor, 
  Smartphone, 
  Check, 
  Layers, 
  ShieldCheck, 
  MessageSquare, 
  ChevronRight,
  Target,
  FileCheck
} from 'lucide-react';
import { DEMO_CATALOG, DemoItem } from '@/config/demos.config';
import { siteConfig } from '@/config/site.config';
import { generateWhatsAppUrl } from '@/lib/utils';
import { DemoCard } from '@/components/home/DemoCard';
import { LivePreviewModal } from '@/components/home/LivePreviewModal';
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon';

interface DemoDetailClientProps {
  demo: DemoItem;
}

export const DemoDetailClient: React.FC<DemoDetailClientProps> = ({ demo }) => {
  const [device, setDevice] = useState<'desktop' | 'mobile'>('desktop');
  const [selectedPackageTier, setSelectedPackageTier] = useState<'starter' | 'pro' | 'enterprise'>('pro');
  const [relatedPreviewDemo, setRelatedPreviewDemo] = useState<DemoItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const relatedDemos = DEMO_CATALOG.filter(
    (d) => d.sectorId === demo.sectorId && d.slug !== demo.slug
  );

  const selectedPkgConfig = siteConfig.packages.find((p) => p.id === selectedPackageTier);

  const deviceWidths = {
    desktop: 'w-full max-w-5xl h-[650px]',
    mobile: 'w-[375px] max-w-full h-[650px]',
  };

  const getBreakdownPages = () => {
    switch (selectedPackageTier) {
      case 'starter':
        return demo.pageBreakdown.singlePage;
      case 'pro':
        return demo.pageBreakdown.fivePages;
      case 'enterprise':
        return demo.pageBreakdown.enterprise;
      default:
        return demo.pageBreakdown.fivePages;
    }
  };

  return (
    <div className="pt-24 pb-24 min-h-screen bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 1. ÜST BREADCRUMB & KONTROL ÇUBUĞU */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-4 mb-6 border-b border-white/10">
          <div className="flex items-center gap-3">
            <Link
              href="/#tasarimlar"
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors flex items-center gap-1.5 text-xs font-semibold"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Ana Sayfaya Dön</span>
            </Link>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-xl sm:text-2xl font-black text-white font-display">
                  {demo.name}
                </h1>
                <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-brand-500/20 text-brand-300 border border-brand-500/30">
                  {demo.sectorName}
                </span>
              </div>
              <p className="text-xs text-slate-400">{demo.style}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Viewport Switcher */}
            <div className="flex items-center bg-black/60 p-1 rounded-xl border border-white/[0.08]">
              <button
                onClick={() => setDevice('desktop')}
                className={`p-2 rounded-lg text-xs font-semibold transition-colors flex items-center gap-1 ${
                  device === 'desktop' ? 'bg-white text-black font-bold shadow' : 'text-slate-400 hover:text-white'
                }`}
                title="Masaüstü Görünüm"
              >
                <Monitor className="w-4 h-4" />
                <span className="hidden md:inline text-[11px]">Masaüstü</span>
              </button>
              <button
                onClick={() => setDevice('mobile')}
                className={`p-2 rounded-lg text-xs font-semibold transition-colors flex items-center gap-1 ${
                  device === 'mobile' ? 'bg-amber-400 text-black font-bold shadow' : 'text-slate-400 hover:text-white'
                }`}
                title="Mobil Görünüm"
              >
                <Smartphone className="w-4 h-4" />
                <span className="hidden md:inline text-[11px]">Mobil</span>
              </button>
            </div>

            {/* Direct WhatsApp CTA */}
            <a
              href={generateWhatsAppUrl({
                designName: `${demo.name} (${demo.sectorName})`,
                packageName: `${selectedPkgConfig?.name} Paket (${selectedPkgConfig?.priceFormatted})`,
              })}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-lg shadow-emerald-600/30 transition-all"
            >
              <WhatsAppIcon className="w-4 h-4 fill-current shrink-0" />
              <span>Bu Tasarımı Seç & Başla</span>
            </a>
          </div>
        </div>

        {/* 2. BÜYÜK CANLI ÖNİZLEME ÇERÇEVESİ */}
        <div className="bg-[#0A0A0C] border border-white/10 rounded-3xl p-3 sm:p-6 mb-16 flex items-center justify-center shadow-2xl overflow-hidden">
          <div className={`transition-all duration-300 bg-black rounded-2xl border border-white/10 shadow-2xl overflow-hidden flex flex-col ${deviceWidths[device]}`}>
            {/* Mock browser header */}
            <div className="bg-[#1E293B] px-4 py-2.5 flex items-center justify-between border-b border-white/5 shrink-0">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
              </div>
              <div className="text-[11px] text-slate-400 font-mono bg-black px-4 py-1 rounded-md border border-white/5 max-w-sm truncate">
                https://demo-{demo.slug}.mediweb.com.tr
              </div>
              <div className="text-[10px] text-emerald-400 font-mono flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>SSL 256-bit</span>
              </div>
            </div>

            {/* Iframe */}
            <iframe
              src={demo.liveUrl}
              title={demo.name}
              className="w-full flex-1 border-0 bg-white"
              sandbox="allow-scripts allow-same-origin"
            />
          </div>
        </div>

        {/* 3 & 4. DETAY BİLGİLERİ: HEDEF KİTLE + ÖZELLİKLER */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {/* Sol Kolon: Hedef Kitle & Vurgular */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-[#0A0A0C] border border-white/[0.08] rounded-3xl p-7 shadow-2xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                  <Target className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white font-display">
                    Bu Tasarım Kimler İçin?
                  </h3>
                  <p className="text-xs text-zinc-400">Sektörel Uygunluk & Hedef Kitle</p>
                </div>
              </div>
              <p className="text-sm text-zinc-300 leading-relaxed bg-white/[0.02] p-4 rounded-2xl border border-white/5">
                {demo.targetAudience}
              </p>

              {/* Stats Highlight */}
              <div className="grid grid-cols-3 gap-3 mt-6 pt-6 border-t border-white/10">
                {demo.highlights.stats.map((st, idx) => (
                  <div key={idx} className="text-center p-3 rounded-xl bg-black border border-white/5">
                    <div className="text-base sm:text-lg font-black text-amber-400 font-display">
                      {st.value}
                    </div>
                    <div className="text-[10px] text-zinc-400 font-medium mt-0.5">
                      {st.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sağ Kolon: Öne Çıkan Özellikler */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-[#0A0A0C] border border-white/[0.08] rounded-3xl p-7 shadow-2xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                  <FileCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white font-display">
                    Tasarımın Öne Çıkan Özellikleri
                  </h3>
                  <p className="text-xs text-zinc-400">Sektöre Özel Entegre Fonksiyonlar</p>
                </div>
              </div>

              <div className="space-y-3">
                {demo.keyFeatures.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5 text-xs sm:text-sm text-zinc-200">
                    <Check className="w-4 h-4 text-zinc-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 5. "PAKETLERE GÖRE SAYFA YAPISI" (INTERACTIVE BREAKDOWN) */}
        <div className="bg-[#0A0A0C] border border-amber-500/25 rounded-3xl p-6 sm:p-10 shadow-2xl mb-16">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-bold uppercase tracking-wider mb-2">
              <Layers className="w-3.5 h-3.5" />
              <span>Tasarım ≠ Paket Modeli</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
              Bu Tasarım Paketlere Göre Nasıl Uyarlanır?
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 mt-1">
              Aşağıdaki paketlerden birini seçtiğinizde "{demo.name}" mimarisi kurumsal kimliğinize uyarlanır.
            </p>
          </div>

          {/* Package Selector Tabs */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-3xl mx-auto mb-8">
            <button
              onClick={() => setSelectedPackageTier('starter')}
              className={`p-4 rounded-2xl text-left border transition-all ${
                selectedPackageTier === 'starter'
                  ? 'bg-[#18181B] border-amber-400 text-white shadow-lg'
                  : 'bg-black border-white/10 text-slate-400 hover:text-white'
              }`}
            >
              <div className="text-xs font-bold uppercase tracking-wider text-slate-300">Başlangıç</div>
              <div className="text-lg font-black text-white mt-1">17.500 ₺</div>
              <div className="text-[11px] opacity-80 mt-0.5">Tek Sayfa (One-Page)</div>
            </button>

            <button
              onClick={() => setSelectedPackageTier('pro')}
              className={`p-4 rounded-2xl text-left border transition-all ${
                selectedPackageTier === 'pro'
                  ? 'bg-[#18181B] border-amber-400 text-white shadow-lg ring-2 ring-amber-400/40'
                  : 'bg-black border-white/10 text-slate-400 hover:text-white'
              }`}
            >
              <div className="text-xs font-bold uppercase tracking-wider flex items-center justify-between text-white">
                <span>Profesyonel</span>
                <span className="text-[9px] px-1.5 py-0.5 rounded bg-amber-400 text-black font-bold">Popüler</span>
              </div>
              <div className="text-lg font-black text-white mt-1">32.500 ₺</div>
              <div className="text-[11px] opacity-80 mt-0.5">10 Sayfaya Kadar Kurumsal</div>
            </button>

            <button
              onClick={() => setSelectedPackageTier('enterprise')}
              className={`p-4 rounded-2xl text-left border transition-all ${
                selectedPackageTier === 'enterprise'
                  ? 'bg-[#18181B] border-amber-400 text-white shadow-lg'
                  : 'bg-black border-white/10 text-slate-400 hover:text-white'
              }`}
            >
              <div className="text-xs font-bold uppercase tracking-wider text-slate-300">Kurumsal</div>
              <div className="text-lg font-black text-white mt-1">59.900 ₺</div>
              <div className="text-[11px] opacity-80 mt-0.5">20 Sayfaya Kadar & 2 Dil</div>
            </button>
          </div>

          {/* Active Package Breakdown Details */}
          <div className="bg-black/60 border border-white/10 rounded-2xl p-6 sm:p-8 max-w-4xl mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
              <div>
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                  {selectedPkgConfig?.name} Paket Kapsamında Sayfa Akışı
                </span>
                <h4 className="text-xl font-bold text-white mt-1">
                  {selectedPkgConfig?.pageStructure}
                </h4>
              </div>
              <div className="text-left sm:text-right">
                <span className="text-xs text-slate-400">Teslimat Süresi</span>
                <div className="text-sm font-bold text-amber-400">{selectedPkgConfig?.deliveryTime}</div>
              </div>
            </div>

            <div className="py-6">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
                Sayfa ve Bölüm Dağılımı
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {getBreakdownPages().map((pageName, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 p-3 rounded-xl bg-white/5 border border-white/5 text-xs text-slate-200">
                    <span className="w-5 h-5 rounded-md bg-amber-500/10 text-amber-400 border border-amber-500/20 text-[10px] font-bold flex items-center justify-center shrink-0">
                      {idx + 1}
                    </span>
                    <span className="font-medium">{pageName}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom CTA to WhatsApp with this exact configuration */}
            <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-slate-400 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                <span>3 Yıl Domain, SSL ve yüksek hızlı bulut barındırması fiyata dahildir.</span>
              </div>
              <a
                href={generateWhatsAppUrl({
                  designName: `${demo.name} (${demo.sectorName})`,
                  packageName: `${selectedPkgConfig?.name} Paket (${selectedPkgConfig?.priceFormatted})`,
                })}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/30 transition-all hover:scale-105"
              >
                <WhatsAppIcon className="w-4 h-4 fill-current shrink-0" />
                <span>Bu Pakette Başlat ({selectedPkgConfig?.priceFormatted})</span>
              </a>
            </div>
          </div>
        </div>

        {/* 6. İLGİLİ DİĞER DEMOLAR */}
        {relatedDemos.length > 0 && (
          <div>
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-2xl font-bold text-white font-display">
                  Aynı Sektördeki Diğer Tasarımlar
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  {demo.sectorName} sektörüne özel hazırladığımız diğer alternatifler
                </p>
              </div>
              <Link
                href="/#tasarimlar"
                className="text-xs font-semibold text-amber-400 hover:text-white flex items-center gap-1"
              >
                <span>Tümünü Gör</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedDemos.map((relDemo) => (
                <DemoCard
                  key={relDemo.id}
                  demo={relDemo}
                  onOpenPreview={(d) => {
                    setRelatedPreviewDemo(d);
                    setIsModalOpen(true);
                  }}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Live Preview Modal */}
      <LivePreviewModal
        demo={relatedPreviewDemo}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};
