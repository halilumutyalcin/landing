'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Check, 
  ShieldCheck, 
  Clock, 
  ArrowRight, 
  ExternalLink, 
  ChevronDown, 
  ChevronUp, 
  Sparkles,
  Zap,
  Globe,
  Layers,
  ChevronRight,
  Server,
  Star
} from 'lucide-react';
import { SectorConfig, SECTORS_SEO_DATA } from '@/config/sectors.config';
import { DEMO_CATALOG, DemoItem } from '@/config/demos.config';
import { siteConfig } from '@/config/site.config';
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon';
import { generateWhatsAppUrl } from '@/lib/utils';
import { ProposalModal } from '@/components/home/ProposalModal';

interface SectorDetailClientProps {
  sector: SectorConfig;
}

export const SectorDetailClient: React.FC<SectorDetailClientProps> = ({ sector }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [isProposalOpen, setIsProposalOpen] = useState(false);

  // Match related demos from DEMO_CATALOG
  const relatedDemos = sector.relatedDemoSlugs
    .map((slug) => DEMO_CATALOG.find((d) => d.slug === slug))
    .filter((d): d is DemoItem => Boolean(d));

  const otherSectors = SECTORS_SEO_DATA.filter((s) => s.slug !== sector.slug);

  const whatsAppUrl = generateWhatsAppUrl({
    customMessage: `Merhaba MediWeb! ${sector.name} web sitesi tasarım çözümleriniz ve paketleriniz hakkında bilgi almak istiyorum.`,
  });

  return (
    <div className="pt-24 pb-20 bg-black">
      {/* 1. Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-6">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-400">
          <Link href="/" className="hover:text-white transition-colors">
            Ana Sayfa
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <Link href="/sektorler" className="hover:text-white transition-colors">
            Sektörel Çözümler
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <span className="text-amber-400 font-semibold">{sector.name} Web Sitesi</span>
        </nav>
      </div>

      {/* 2. Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="p-8 sm:p-12 rounded-3xl bg-[#0A0A0C] border border-white/[0.08] relative overflow-hidden">
          <div className="max-w-3xl">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 text-amber-400 text-xs font-bold uppercase tracking-wider mb-5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{sector.badge} · 3–10 İş Gününde Lansman</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight mb-4">
              {sector.heroHeadline}
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8">
              {sector.heroSubheadline}
            </p>

            {/* Key Stats Bar */}
            <div className="grid grid-cols-3 gap-3 sm:gap-6 p-4 sm:p-5 rounded-2xl bg-black/60 border border-white/[0.08] mb-8 max-w-xl shadow-lg">
              {sector.stats.map((stat, idx) => (
                <div key={idx} className="text-center sm:text-left">
                  <div className="text-lg sm:text-2xl font-black text-amber-400 font-display tracking-tight leading-none mb-1">
                    {stat.value}
                  </div>
                  <div className="text-[11px] sm:text-xs text-zinc-400 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm tracking-normal flex items-center justify-center gap-2.5 transition-all shadow-xl shadow-emerald-900/30"
              >
                <WhatsAppIcon className="w-4 h-4 fill-current shrink-0" />
                <span>WhatsApp ile Sektörel Teklif Alın</span>
              </a>

              <button
                onClick={() => setIsProposalOpen(true)}
                className="px-6 py-4 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-sm transition-all flex items-center justify-center gap-2"
              >
                <span>Maliyet Hesaplayıcı</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Sektörel İhtiyaçlar & Özel Mimari Çözümleri */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-2">
            Sektörel Uzmanlık
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Neden {sector.name} İçin Özel Mimari Gerekir?
          </h2>
          <p className="text-sm text-slate-300 mt-2">
            Standart hazır şablonlar bu sektörün regülasyonlarını, hasta/müvekkil psikolojisini ve Google Harita dinamiklerini karşılayamaz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sector.sectorSpecificNeeds.map((need, idx) => (
            <div 
              key={idx} 
              className="p-6 sm:p-7 rounded-2xl bg-[#0A0A0C] border border-white/[0.08] hover:border-amber-400/30 transition-all space-y-2 shadow-lg group"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center font-bold text-xs shrink-0 group-hover:scale-105 transition-transform">
                  0{idx + 1}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-amber-400 transition-colors">
                  {need.title}
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pl-11">
                {need.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Canlı Sektörel Demo Vitrinleri */}
      {relatedDemos.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <div className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-1">
                Hazır & Çalışır Durumda
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {sector.name} İçin Canlı Demolar
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Hayal satmıyoruz; beğendiğiniz tasarımı seçtiğinizde 3–10 iş gününde logonuz ve içeriklerinizle canlıya alıyoruz.
              </p>
            </div>

            <Link
              href="/#tasarimlar"
              className="inline-flex items-center gap-1.5 text-xs text-amber-400 hover:text-zinc-300 font-bold self-start md:self-auto"
            >
              <span>Tüm 16 Mimarimizi Gör</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedDemos.map((demo) => (
              <div
                key={demo.id}
                className="rounded-2xl bg-[#0A0A0C] border border-white/[0.08] hover:border-white/20 overflow-hidden flex flex-col justify-between transition-all group hover:-translate-y-1 shadow-xl"
              >
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                    <Image
                      src={demo.previewImage}
                      alt={demo.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {demo.badge && (
                      <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md text-white text-[10px] font-bold shadow">
                        {demo.badge}
                      </span>
                    )}
                  </div>

                  <div className="p-5">
                    <div className="flex items-center justify-between mb-1.5">
                      <h4 className="text-base font-bold text-white group-hover:text-amber-400 transition-colors">
                        {demo.name}
                      </h4>
                      <span className="text-[11px] text-slate-400 font-medium">
                        {demo.style}
                      </span>
                    </div>

                    <p className="text-xs text-slate-300 line-clamp-2 mb-4 leading-relaxed">
                      {demo.shortDesc}
                    </p>

                    <div className="space-y-1.5 pt-3 border-t border-white/5">
                      {demo.keyFeatures.slice(0, 2).map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2 text-[11px] text-slate-300">
                          <Check className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                          <span className="truncate">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-0 grid grid-cols-2 gap-2">
                  <Link
                    href={`/preview/${demo.slug}`}
                    target="_blank"
                    className="py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-black text-xs font-bold flex items-center justify-center gap-1.5 transition-all shadow-md"
                  >
                    <span>Canlı İncele ↗</span>
                  </Link>

                  <Link
                    href={`/tasarimlar/${demo.slug}`}
                    className="py-2.5 rounded-xl bg-white/[0.04] hover:bg-white/10 text-zinc-300 border border-white/[0.08] text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <span>Detaylar</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 5. Pakete Dahil Hizmetler (Checklist) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="rounded-3xl bg-[#0A0A0C] border border-white/[0.08] p-8 sm:p-10">
          <div className="max-w-2xl mb-8">
            <div className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-2">
              Eksiksiz Kurulum
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              {sector.name} Web Sitenize Neler Dahil?
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-2">
              Gizli masraf veya sonradan çıkan faturalar yok. Tüm teknik ihtiyaçlarınız fiyata dahil olarak çözülür.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {sector.keyFeatures.map((feat, idx) => (
              <div 
                key={idx}
                className="p-4 rounded-xl bg-black/40 flex items-start gap-3"
              >
                <div className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs text-slate-200 font-medium leading-relaxed">
                  {feat}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Sektörel Sık Sorulan Sorular (FAQ) */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center mb-10">
          <div className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-2">
            Merak Edilenler
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            {sector.name} Web Sitesi Hakkında SSS
          </h2>
        </div>

        <div className="space-y-3">
          {sector.faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-[#0A0A0C] overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 text-sm font-bold text-white hover:text-zinc-300 transition-colors"
                >
                  <span>{faq.question}</span>
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-amber-400 shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-slate-500 shrink-0" />
                  )}
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/5 pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 7. Diğer Sektörel Çözümler (Internal Linking Hub) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 pt-10 border-t border-white/10">
        <div className="mb-6">
          <h3 className="text-base font-bold text-white">
            Diğer Sektörler İçin Web Sitesi Tasarımları
          </h3>
          <p className="text-xs text-slate-400 mt-1">
            Her sektörün müşteri dinamiklerine ve yasal kriterlerine göre geliştirilmiş özel web altyapıları:
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {otherSectors.map((other) => (
            <Link
              key={other.slug}
              href={`/sektorler/${other.slug}`}
              className="p-3.5 rounded-xl bg-[#0A0A0C] hover:bg-[#121214] text-xs font-semibold text-slate-300 hover:text-white transition-all flex items-center justify-between group"
            >
              <span className="truncate">{other.name}</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-amber-400 shrink-0 ml-1" />
            </Link>
          ))}
        </div>
      </section>

      {/* 8. Bottom Sticky / High Trust Lead CTA */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-blue-950/60 to-emerald-950/40 p-8 sm:p-10 text-center flex flex-col items-center justify-center gap-6 shadow-2xl">
          <div className="max-w-2xl">
            <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              {sector.name} Sitenizi 3–10 İş Gününde Yayına Alalım
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-2">
              3 yıl boyunca sıfır sunucu masrafı, hazır sektörel şablonlar ve WhatsApp entegrasyonuyla hemen yeni danışan ve müşterilere ulaşın.
            </p>
          </div>

          <a
            href={whatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-black text-sm tracking-normal flex items-center gap-3 transition-all shadow-xl shadow-emerald-900/40 hover:scale-[1.02]"
          >
            <WhatsAppIcon className="w-5 h-5 fill-current shrink-0" />
            <span>WhatsApp ile Hemen Başlayın</span>
          </a>
        </div>
      </section>

      {/* Proposal Modal */}
      <ProposalModal 
        isOpen={isProposalOpen}
        onClose={() => setIsProposalOpen(false)}
      />
    </div>
  );
};
