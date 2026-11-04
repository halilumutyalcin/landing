'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { HeroSection } from '@/components/home/HeroSection';
import { DemoGrid } from '@/components/home/DemoGrid';
import { PricingSection } from '@/components/home/PricingSection';
import { HowItWorksSection } from '@/components/home/HowItWorksSection';
import { WhyUsUnifiedSection } from '@/components/home/WhyUsUnifiedSection';
import { ExtraServicesSection } from '@/components/home/ExtraServicesSection';
import { FaqSection } from '@/components/home/FaqSection';
import { ContactSection } from '@/components/home/ContactSection';
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
      {/* 1. HERO: Sektörünüze Özel Mimari, 3-5 Günde Canlıda, 3 Yıl Hosting Dahil */}
      <HeroSection />

      {/* 2. CANLI SEKTÖREL VİTRİN MİMARİLERİ */}
      <DemoGrid />

      {/* 3. NASIL ÇALIŞIR? (4 KOLAY ADIMDA SÜREÇ - FİYATTAN ÖNCE SÜREÇ GÜVENİ) */}
      <HowItWorksSection />

      {/* 4. ŞEFFAF PAKETLER & 3 NET FİYAT (Pazarlama Stratejisi & Vergi İndirimi Entegre) */}
      <PricingSection />

      {/* 5. NEDEN BİZ? - 3'LÜ İNTERAKTİF BİRLEŞİK SEKME (Geleneksel Ajans vs. Biz / WP vs. Next.js / İlkeler) */}
      <WhyUsUnifiedSection />

      {/* 6. EK MODÜLLER & ENTEGRASYONLAR */}
      <ExtraServicesSection />

      {/* 7. SIKÇA SORULAN SORULAR */}
      <FaqSection />

      {/* 8. İLETİŞİM & TEKLİF FORMU */}
      <ContactSection />

      {/* Sabit Hızlı Teklif Hesaplayıcı Butonu */}
      <button
        onClick={() => setIsProposalModalOpen(true)}
        className="fixed bottom-6 left-6 z-40 px-4 py-3 rounded-xl bg-[#161B26] hover:bg-[#1E2536] text-white shadow-xl flex items-center gap-2.5 text-xs sm:text-sm font-semibold transition-all hover:scale-105"
      >
        <div className="w-6 h-6 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center">
          <Calculator className="w-3.5 h-3.5" />
        </div>
        <span className="hidden sm:inline">Hızlı Teklif & Vergi Hesapla</span>
        <span className="sm:hidden">Teklif Simülatörü</span>
      </button>

      {/* İnteraktif Teklif Modalı */}
      <ProposalModal 
        isOpen={isProposalModalOpen}
        onClose={() => setIsProposalModalOpen(false)}
      />
    </div>
  );
}
