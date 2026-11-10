'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { HeroSection } from '@/components/home/HeroSection';
import { DemoGrid } from '@/components/home/DemoGrid';
import { PricingSection } from '@/components/home/PricingSection';
import { TaxCalculatorSection } from '@/components/home/TaxCalculatorSection';
import { HowItWorksSection } from '@/components/home/HowItWorksSection';
import { WhyUsUnifiedSection } from '@/components/home/WhyUsUnifiedSection';
import { ExtraServicesSection } from '@/components/home/ExtraServicesSection';
import { FaqSection } from '@/components/home/FaqSection';
import { ContactSection } from '@/components/home/ContactSection';
import { MobileBottomBar } from '@/components/layout/MobileBottomBar';
import { Calculator } from 'lucide-react';

// Defer non-critical modal to reduce initial First Load JS (vercel-react-best-practices)
const ProposalModal = dynamic(
  () => import('@/components/home/ProposalModal').then((mod) => mod.ProposalModal),
  { ssr: false }
);

export default function HomePage() {
  const [isProposalModalOpen, setIsProposalModalOpen] = useState(false);

  return (
    <div className="relative">
      {/* 1. HERO: Sektörünüze Özel Mimari, 3-10 İş Gününde Lansman, İlk 3 Yıl Hosting Dahil */}
      <HeroSection />

      {/* 2. CANLI SEKTÖREL VİTRİN MİMARİLERİ */}
      <DemoGrid />

      {/* 4. NASIL ÇALIŞIR? (4 KOLAY ADIMDA SÜREÇ - FİYATTAN ÖNCE SÜREÇ GÜVENİ) */}
      <HowItWorksSection />

      {/* 5. ŞEFFAF PAKETLER & 3 NET FİYAT (Pazarlama Stratejisi & Vergi İndirimi Entegre) */}
      <PricingSection />

      {/* 6. ŞİRKETLER İÇİN GERÇEK NET MALİYET & İNTERAKTİF VERGİ HESABI (LTD/A.Ş. & ŞAHIS) */}
      <TaxCalculatorSection />

      {/* 7. NEDEN BİZ? - 3'LÜ İNTERAKTİF BİRLEŞİK SEKME (Geleneksel Ajans vs. Biz / WP vs. Next.js / İlkeler) */}
      <WhyUsUnifiedSection />

      {/* 8. EK MODÜLLER & ENTEGRASYONLAR */}
      <ExtraServicesSection />

      {/* 9. SIKÇA SORULAN SORULAR */}
      <FaqSection />

      {/* 10. İLETİŞİM & TEKLİF FORMU */}
      <ContactSection />

      {/* Masaüstü Sabit Hızlı Teklif Hesaplayıcı Butonu */}
      <button
        onClick={() => setIsProposalModalOpen(true)}
        className="hidden sm:flex fixed bottom-6 left-6 z-40 px-4 py-3 rounded-xl bg-[#0A0A0C] hover:bg-[#141416] border border-white/[0.08] text-white shadow-2xl items-center gap-2.5 text-xs sm:text-sm font-semibold transition-all hover:scale-105"
      >
        <div className="w-6 h-6 rounded-lg bg-amber-500/15 text-amber-400 flex items-center justify-center">
          <Calculator className="w-3.5 h-3.5" />
        </div>
        <span>Hızlı Teklif & Vergi Hesapla</span>
      </button>

      {/* Mobilde Sabit Alt CTA Eylem Çubuğu */}
      <MobileBottomBar onOpenProposal={() => setIsProposalModalOpen(true)} />

      {/* İnteraktif Teklif Modalı */}
      <ProposalModal 
        isOpen={isProposalModalOpen}
        onClose={() => setIsProposalModalOpen(false)}
      />
    </div>
  );
}
