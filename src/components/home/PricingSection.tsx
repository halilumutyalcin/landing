'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Check, 
  ShieldCheck, 
  Clock, 
  Building2, 
  ChevronDown, 
  ChevronUp, 
  Server, 
  Zap, 
  PhoneCall,
  CheckCircle2,
  Minus,
  Sparkles,
  Palette,
  CreditCard,
  MapPin,
  Calendar,
  FileCheck2
} from 'lucide-react';
import { siteConfig } from '@/config/site.config';
import { generateWhatsAppUrl } from '@/lib/utils';
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon';

interface CategoryGroup {
  title: string;
  items: {
    feature: string;
    starter: string;
    pro: string;
    enterprise: string;
  }[];
}

export const PricingSection: React.FC = () => {
  const [billingMode, setBillingMode] = useState<'onetime' | 'waas'>('onetime');
  const [showTaxDeduction, setShowTaxDeduction] = useState<boolean>(false);
  const [showFullMatrix, setShowFullMatrix] = useState<boolean>(false);
  const [expandedPackages, setExpandedPackages] = useState<Record<string, boolean>>({});

  const toggleExpand = (id: string) => {
    setExpandedPackages((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // Group the 26 criteria into 5 logical categories
  const matrixCategories: CategoryGroup[] = [
    {
      title: '1. Mimari & Genel Kapsam',
      items: [
        { feature: 'Kime uygun?', starter: 'Yeni başlayan işletmeler, tek kişilik ofisler', pro: 'Kurumsal görünüm isteyen işletmeler & KOBİ\'ler', enterprise: 'Profesyonel dijital varlık ve ihracat odaklı firmalar' },
        { feature: 'Tasarım mimarisi', starter: 'Hazır yapı üzerinde özelleştirilmiş tasarım', pro: 'Markaya özel UI/UX tasarım ve kurumsal renkler', enterprise: 'Tamamen özel UI/UX + gelişmiş etkileşimler' },
        { feature: 'Sayfa yapısı', starter: 'Tek sayfalık landing page veya 5 sayfaya kadar', pro: '10 sayfaya kadar kurumsal yapı', enterprise: '20 sayfaya kadar / ihtiyaca göre' },
        { feature: 'Mobil & tablet uyumluluk', starter: 'Dahil (%100 Responsive)', pro: 'Dahil (%100 Responsive)', enterprise: 'Dahil (%100 Responsive)' },
      ]
    },
    {
      title: '2. Sayfa & İçerik Düzeni',
      items: [
        { feature: 'Ana Sayfa (Hero & Vitrin)', starter: 'Dahil', pro: 'Dahil', enterprise: 'Dahil' },
        { feature: 'Hakkımızda sayfası', starter: 'Bölüm olarak (One-Page)', pro: 'Ayrı özel sayfa', enterprise: 'Zengin hikaye & zaman tüneli sayfası' },
        { feature: 'Hizmetler / Ürünler', starter: 'Bölüm olarak (3-6 hizmet)', pro: 'Ayrı detay sayfaları', enterprise: 'Gelişmiş mimari & filtreli detay sayfaları' },
        { feature: 'Blog / Haberler modülü', starter: '—', pro: 'Opsiyonel / Temel altyapı', enterprise: 'Kategori, etiket ve yazar destekli' },
        { feature: 'İletişim sayfası', starter: 'Temel bölüm', pro: 'Ayrı sayfa & Google Harita', enterprise: 'Gelişmiş sayfa, departman seçimi & harita' },
        { feature: 'İletişim formu', starter: 'Temel form', pro: 'E-posta bildirimli gelişmiş form', enterprise: 'Dosya ekli, çoklu e-posta & SMS bildirimli' },
      ]
    },
    {
      title: '3. Satış, Dönüşüm & İletişim Araçları',
      items: [
        { feature: 'WhatsApp entegrasyonu', starter: 'Sabit WhatsApp butonu', pro: 'Hazır mesajlı buton', enterprise: 'Departman yönlendirmeli akıllı buton' },
        { feature: 'Google Haritalar (İşletme)', starter: 'Harita iframe yerleşimi', pro: 'Profil kaydı, optimizasyon & yorum desteği', enterprise: 'Tam optimizasyon + QR stant tasarımı' },
        { feature: 'Sosyal medya bağlantıları', starter: 'Bağlantı ikonları', pro: 'Bağlantılar + Open Graph paylaşım kartı', enterprise: 'Open Graph zengin önizleme kartları' },
        { feature: 'Form e-posta bildirimi', starter: 'Temel bildirim', pro: 'Anlık e-posta bildirimi', enterprise: 'Çoklu yetkili bildirimi & SMS opsiyonu' },
      ]
    },
    {
      title: '4. SEO, Hız & Bulut Altyapısı',
      items: [
        { feature: 'Temel SEO altyapısı', starter: 'Meta, sitemap, robots.txt', pro: 'Dahil', enterprise: 'Dahil' },
        { feature: 'Gelişmiş SEO & Schema', starter: '—', pro: 'JSON-LD Schema & Search Console', enterprise: 'Sayfa bazlı derin SEO & iç bağlantı mimarisi' },
        { feature: 'Google Analytics & Search Console', starter: 'Temel Analytics', pro: 'Analytics + Search Console kurulumu', enterprise: 'İleri seviye hedef & dönüşüm takibi' },
        { feature: 'Site hız optimizasyonu', starter: 'Temel (Yüksek Hızlı Bulut Ağı)', pro: 'Gelişmiş (Lighthouse 90+)', enterprise: 'İleri seviye (0.3 sn anında yükleme)' },
        { feature: 'Güvenlik / SSL sertifikası', starter: '3 Yıl Ücretsiz SSL', pro: '3 Yıl Ücretsiz SSL', enterprise: '3 Yıl Kurumsal SSL & DDoS koruması' },
      ]
    },
    {
      title: '5. Yönetim, Revizyon & Destek',
      items: [
        { feature: 'Özel animasyonlar', starter: 'Temel fade-in ve scroll', pro: 'Gelişmiş hover ve mikro efektler', enterprise: 'Premium aurora glow & zengin etkileşimler' },
        { feature: 'Özel içerik bileşenleri', starter: 'Temel bileşenler', pro: 'Sektöre özel akordeon, sayaç, kartlar', enterprise: 'İhtiyaca özel modüler dinamik bileşenler' },
        { feature: 'Yönetilebilir içerik yapısı', starter: '—', pro: '—', enterprise: 'Modüler ve genişletilebilir mimari' },
        { feature: 'Admin / CMS altyapısı', starter: '—', pro: 'Opsiyonel (~9.900 ₺)', enterprise: 'Opsiyonel (~9.900 ₺)' },
        { feature: 'Tasarım revizyon hakkı', starter: '1 Tur revizyon', pro: '2 Tur revizyon', enterprise: '3 Tur revizyon' },
        { feature: 'Yayınlama & 3 Yıl Hosting', starter: '3 Yıl Domain + SSL + Bulut Barındırma Dahil', pro: '3 Yıl Domain + SSL + Bulut Barındırma Dahil', enterprise: '3 Yıl Domain + SSL + Bulut Barındırma Dahil' },
        { feature: 'Teknik destek & Garanti', starter: '15 gün hata garantisi', pro: '30 gün garanti + 1 ay bakım dahil', enterprise: '60 gün garanti + 3 ay bakım dahil' },
      ]
    }
  ];

  const renderTableCell = (val: string, isProCol = false) => {
    if (val === '—') {
      return (
        <span className="inline-flex items-center justify-center text-slate-500 font-bold text-sm">
          —
        </span>
      );
    }
    if (val.startsWith('Dahil') || val.includes('3 Yıl Domain + SSL')) {
      return (
        <span className={`inline-flex items-center gap-1.5 font-semibold text-xs ${isProCol ? 'text-emerald-400' : 'text-slate-200'}`}>
          <Check className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
          <span>{val}</span>
        </span>
      );
    }
    return (
      <span className={`text-xs ${isProCol ? 'text-zinc-300 font-medium' : 'text-slate-300'}`}>
        {val}
      </span>
    );
  };

  return (
    <section id="paketler" className="py-20 bg-black border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* High-Trust Delivery Commitment Banner */}
        <div className="max-w-3xl mx-auto mb-10 p-3.5 rounded-xl bg-zinc-900/60 border border-white/10 text-center flex items-center justify-center gap-2.5 text-xs text-zinc-300">
          <Clock className="w-4 h-4 text-amber-400 shrink-0" />
          <span>
            <strong>Dakik Teslim Taahhüdü:</strong> Her proje için teslimat takvimi sözleşmeyle belirlenir; gecikme ve ucu açık süreçler yaşanmaz.
          </span>
        </div>

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
            Şeffaf Paketler ve Net Fiyatlandırma
          </h2>
          <p className="text-base text-slate-300 leading-relaxed">
            Beğendiğiniz tasarım için ekstra bir ücret ödemezsiniz. 
            İhtiyacınıza uygun paketi seçin; <strong>3 Yıl Boyunca Sıfır Ek Masraf (0 ₺ Yenileme Güvencesi)</strong> ile yayına alalım.
          </p>

          {/* Billing Mode & B2B Tax Toggles */}
          <div className="mt-8 flex flex-col items-center gap-3">
            {/* Primary Toggle: One-Time vs Flexible Monthly Subscription */}
            <div className="inline-flex items-center p-1 rounded-2xl bg-[#0A0A0C] border border-white/[0.08] shadow-inner max-w-full overflow-x-auto">
              <button
                onClick={() => setBillingMode('onetime')}
                className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap ${
                  billingMode === 'onetime'
                    ? 'bg-white text-black shadow-lg shadow-white/10 ring-1 ring-white'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                Tek Seferlik (3 Yıl Sıfır Ek Masraf)
              </button>
              <button
                onClick={() => setBillingMode('waas')}
                className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all whitespace-nowrap ${
                  billingMode === 'waas'
                    ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/20 font-extrabold ring-1 ring-amber-400'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                <span>Sıfır Peşinatla Başlayın: Esnek Aylık Model</span>
                <span className="px-1.5 py-0.5 rounded text-[10px] font-black uppercase bg-emerald-400/20 text-zinc-300">
                  Sabit Taksit
                </span>
              </button>
            </div>

            {/* Secondary Toggle (Only relevant for One-time) */}
            {billingMode === 'onetime' ? (
              <div className="inline-flex items-center p-1 rounded-xl bg-[#0A0A0C] text-xs">
                <button
                  onClick={() => setShowTaxDeduction(false)}
                  className={`px-3 py-1.5 rounded-lg font-semibold transition-all ${
                    !showTaxDeduction
                      ? 'bg-white/10 text-white'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  Standart Fiyatlar
                </button>
                <button
                  onClick={() => setShowTaxDeduction(true)}
                  className={`px-3 py-1.5 rounded-lg font-semibold flex items-center gap-1.5 transition-all ${
                    showTaxDeduction
                      ? 'bg-emerald-600 text-white'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Building2 className="w-3.5 h-3.5" />
                  <span>Şirketler İçin Net Maliyet (Vergi İndirimi Sonrası)</span>
                </button>
              </div>
            ) : (
              <p className="text-xs text-emerald-400 animate-in fade-in duration-200">
                Peşin bütçe ayırmadan, düşük kurulum bedeli ve aylık sabit taksitlerle hemen yayına girin.
              </p>
            )}

            {billingMode === 'onetime' && showTaxDeduction && (
              <p className="text-xs text-emerald-400 mt-1 animate-in fade-in duration-200">
                %20 KDV mahsubu ve %25–%35 kurumlar/gelir vergisi gider indirimi düşüldükten sonra cebinizden çıkan net tutardır.
              </p>
            )}
          </div>
        </div>

        {/* 3 Packages Cards - Pure Background Separation, Zero Borders */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-14">
          {siteConfig.packages.map((pkg) => {
            const isPro = pkg.id === 'pro';

            const netPrice = pkg.id === 'starter' 
              ? '11.375 TL' 
              : pkg.id === 'pro' 
              ? '21.125 TL' 
              : '38.935 TL';

            const displayPrice = billingMode === 'waas'
              ? pkg.waasMonthlyFormatted || '1.450 ₺'
              : showTaxDeduction 
              ? netPrice 
              : pkg.priceFormatted;

            const priceSubText = billingMode === 'waas'
              ? '/ ay'
              : showTaxDeduction 
              ? 'Net Gider' 
              : '+ KDV (Tek Sefer)';

            const whatsAppPackageName = billingMode === 'waas'
              ? `${pkg.name} Paket (Abonelik / WaaS: ${pkg.waasSetupFormatted} Kurulum + ${pkg.waasMonthlyFormatted}/ay)`
              : `${pkg.name} Paket (${pkg.priceFormatted})`;

            return (
              <motion.div
                key={pkg.id}
                layout
                transition={{ duration: 0.35, ease: 'easeInOut' }}
                className={`rounded-2xl p-7 sm:p-8 flex flex-col justify-between transition-all relative ${
                  isPro
                    ? 'bg-[#121624] border-2 border-amber-500/30 shadow-2xl lg:-translate-y-2'
                    : 'bg-[#0A0A0C] border border-white/[0.08] hover:border-white/20'
                }`}
              >
                {/* Popular Ribbon */}
                {isPro && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-white text-black text-white text-[11px] font-bold tracking-normal shadow-lg shadow-white/10">
                    En Çok Tercih Edilen Paket
                  </div>
                )}

                <div>
                  {/* Top Header */}
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-amber-400 tracking-normal">
                      {pkg.name} Paketi
                    </span>
                    <span className="text-xs text-zinc-400 font-medium">
                      {pkg.deliveryTime}
                    </span>
                  </div>

                  <p className="text-xs text-zinc-300 mb-6 leading-relaxed">
                    {pkg.tagline}
                  </p>

                  {/* Price Box */}
                  <div className="mb-6 p-4 rounded-xl bg-black/40">
                    <div className="text-[11px] text-slate-400 line-through mb-1">
                      {pkg.id === 'starter' ? 'Ajans Değeri: ~35.000 TL' : pkg.id === 'pro' ? 'Ajans Değeri: ~70.000 TL' : 'Ajans Değeri: ~125.000 TL'}
                    </div>

                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl sm:text-4xl font-black text-white">
                        {displayPrice}
                      </span>
                      <span className="text-xs text-slate-400 font-medium">
                        {priceSubText}
                      </span>
                    </div>

                    {/* Payment Terms / Setup Fee Tag */}
                    <div className="mt-2 flex items-center justify-between text-[11px] pt-2 border-t border-white/5">
                      <span className="text-slate-400">
                        {billingMode === 'waas' ? 'Kurulum Bedeli:' : 'Ödeme Planı:'}
                      </span>
                      <span className="font-semibold text-amber-400">
                        {billingMode === 'waas' 
                          ? `${pkg.waasSetupFormatted} (Tek Seferlik)` 
                          : pkg.paymentTerms}
                      </span>
                    </div>

                    {billingMode === 'waas' ? (
                      <div className="text-xs text-zinc-300 font-medium mt-2 flex items-center gap-1.5 pt-2 border-t border-white/5">
                        <ShieldCheck className="w-4 h-4 shrink-0" />
                        <span>12 Ay Taahhütlü · Barındırma, Bakım & Güncelleme Dahil</span>
                      </div>
                    ) : (
                      <>
                        {showTaxDeduction && (
                          <div className="text-[11px] text-amber-400 mt-1 font-semibold">
                            Gider gösterildiğinde %35-40 net tasarruf
                          </div>
                        )}
                        <div className="text-xs text-zinc-300 font-medium mt-2 flex items-center gap-1.5 pt-2 border-t border-white/5">
                          <ShieldCheck className="w-4 h-4 shrink-0" />
                          <span>3 Yıl Domain + SSL + Bulut Barındırma Dahil (0 TL Masraf)</span>
                        </div>
                      </>
                    )}
                  </div>

                  {/* Target Audience */}
                  <div className="p-3 rounded-xl bg-white/[0.03] mb-6 text-xs">
                    <strong className="text-white block mb-0.5">Kime Uygun?</strong>
                    <span className="text-slate-300">{pkg.targetAudience}</span>
                  </div>

                  {/* Highlights Specs */}
                  <div className="space-y-2 text-xs text-slate-300 mb-6 pb-6 border-b border-white/10">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">Sayfa Mimarisi:</span>
                      <span className="font-semibold text-white">
                        {pkg.id === 'starter' ? 'Tek Sayfa veya 5 Sayfa' : pkg.id === 'pro' ? '10 Sayfaya Kadar' : '20 Sayfa & 2 Dil'}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">Revizyon Hakkı:</span>
                      <span className="font-semibold text-white">{pkg.revisions}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">Garanti & Bakım:</span>
                      <span className="font-semibold text-white">{pkg.warranty}</span>
                    </div>
                  </div>

                  {/* Feature Checklist - Progressive Disclosure for Optimal Scannability */}
                  <div className="space-y-2.5 mb-6">
                    {pkg.features.slice(0, 5).map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-200">
                        <Check className="w-4 h-4 text-zinc-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}

                    {/* Expandable Extra Features */}
                    <AnimatePresence initial={false}>
                      {expandedPackages[pkg.id] && (
                        <motion.div
                          key={`extra-feats-${pkg.id}`}
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.35, ease: 'easeInOut' }}
                          className="overflow-hidden"
                        >
                          <div className="space-y-2.5 pt-2.5">
                            {pkg.features.slice(5).map((feat, idx) => (
                              <div key={idx + 5} className="flex items-start gap-2.5 text-xs text-slate-300">
                                <Check className="w-4 h-4 text-zinc-500 shrink-0 mt-0.5" />
                                <span>{feat}</span>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {pkg.features.length > 5 && (
                      <button
                        type="button"
                        onClick={() => toggleExpand(pkg.id)}
                        className="w-full mt-2 py-2 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] text-[11px] font-bold text-amber-400 hover:text-zinc-300 flex items-center justify-center gap-1.5 transition-colors"
                      >
                        <span>
                          {expandedPackages[pkg.id]
                            ? 'Daha Az Göster'
                            : `+ ${pkg.features.length - 5} Özelliği Daha Gör`}
                        </span>
                        {expandedPackages[pkg.id] ? (
                          <ChevronUp className="w-3.5 h-3.5" />
                        ) : (
                          <ChevronDown className="w-3.5 h-3.5" />
                        )}
                      </button>
                    )}
                  </div>
                </div>

                {/* CTA Action with High Contrast Focus */}
                <div>
                  <a
                    href={generateWhatsAppUrl({
                      packageName: whatsAppPackageName,
                    })}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-3.5 rounded-xl font-bold text-sm tracking-normal flex items-center justify-center gap-2.5 transition-all shadow-md ${
                      isPro
                        ? 'bg-white hover:bg-zinc-200 text-black font-bold shadow-lg shadow-white/10'
                        : 'bg-white/10 hover:bg-white/15 text-white border border-white/10'
                    }`}
                  >
                    <WhatsAppIcon className="w-4 h-4 fill-emerald-400 shrink-0" />
                    <span>
                      {billingMode === 'waas' ? 'Abonelikle Başla (WhatsApp)' : 'Bu Paketi Seç & WhatsApp ile Başla'}
                    </span>
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* 360° Dijital Lansman Paketi - High-Ticket All-in-One Solution for New & Rebranding Companies */}
        <div className="mb-14 rounded-3xl bg-[#0A0A0C] border border-amber-500/30 p-7 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8 pb-8 border-b border-white/10">
            <div className="max-w-2xl">
              <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-amber-500/10 text-amber-400 text-xs font-bold uppercase tracking-wider mb-3">
                <span>Tek Elden Çözüm · Sıfırdan Zirveye</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                360° Dijital Lansman Paketi
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                Yeni kurulan veya kurumsal kabuk değiştiren şirketlerin en büyük problemi; logoyu birine, web sitesini birine, haritayı birine yaptırıp zaman ve para kaybetmektir. 
                Tüm kurumsal dijital varlığınızı tek elden, tek muhatapla ve 7 iş gününde anahtar teslim kuruyoruz.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-black/40 lg:min-w-[280px] shrink-0">
              <div className="text-[11px] text-slate-400 line-through mb-1">
                Ayrı Ayrı Alındığında: ~65.000 TL
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl sm:text-4xl font-black text-white">
                  39.500 ₺
                </span>
                <span className="text-xs text-slate-400 font-medium">+ KDV (Tek Seferlik)</span>
              </div>
              <div className="text-[11px] text-amber-400 mt-1 font-semibold flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
                <span>3 Yıl Domain + Hosting Dahil (0 TL Masraf)</span>
              </div>
            </div>
          </div>

          {/* 4 Core Pillars Grid - Exact Visual Alignment with Value Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <div className="p-5 rounded-2xl bg-white/[0.02] space-y-2">
              <div className="flex items-center gap-2.5">
                <Palette className="w-5 h-5 text-amber-400 shrink-0" />
                <strong className="text-white text-sm font-bold">
                  1. Logo & Renkler
                </strong>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed pt-1">
                AI destekli ve vektörel (SVG, AI, PDF, PNG) olarak teslim edilen, her mecraya uyumlu özgün logo ve kurumsal renk rehberi.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white/[0.02] space-y-2">
              <div className="flex items-center gap-2.5">
                <CreditCard className="w-5 h-5 text-emerald-400 shrink-0" />
                <strong className="text-white text-sm font-bold">
                  2. Marka Kimliği
                </strong>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed pt-1">
                Matbaa baskısına hazır PDF formatında kartvizit, antetli kağıt, fatura şablonu ve kurumsal e-posta imza tasarımı.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white/[0.02] space-y-2">
              <div className="flex items-center gap-2.5">
                <MapPin className="w-5 h-5 text-amber-400 shrink-0" />
                <strong className="text-white text-sm font-bold">
                  3. Google Haritalar & SEO
                </strong>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed pt-1">
                Google İşletme Profili doğrulaması, yerel arama anahtar kelimeleri optimizasyonu ve ilk müşteri yorum stratejisi.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white/[0.02] space-y-2">
              <div className="flex items-center gap-2.5">
                <Zap className="w-5 h-5 text-amber-400 shrink-0" />
                <strong className="text-white text-sm font-bold">
                  4. Ultra Hızlı Site + 3 Yıl
                </strong>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed pt-1">
                10 sayfaya kadar Profesyonel paket web sitesi, 0.3 sn açılış hızı ve 36 ay boyunca sıfır sunucu/domain masrafı.
              </p>
            </div>
          </div>

          {/* 360 Action CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/10">
            <div className="text-xs text-slate-300 flex items-center gap-2">
              <Clock className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Teslimat Süresi: <strong>7 İş Günü</strong> · Ödeme: %50 Başlangıçta + %50 Yayında</span>
            </div>

            <a
              href={generateWhatsAppUrl({
                packageName: '360° Dijital Lansman Paketi (39.500 ₺)',
              })}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm tracking-normal flex items-center justify-center gap-2.5 transition-all shadow-lg shadow-emerald-900/30"
            >
              <WhatsAppIcon className="w-4 h-4 fill-current shrink-0" />
              <span>360° Lansman Paketini Seç & WhatsApp ile Başla</span>
            </a>
          </div>
        </div>

        {/* 25-Row Comparison Matrix Toggle & Grouped Table */}
        <div className="mb-14 max-w-5xl mx-auto">
          <div className="text-center mb-6">
            <button
              onClick={() => setShowFullMatrix(!showFullMatrix)}
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-[#0A0A0C] hover:bg-[#182030] text-white text-xs sm:text-sm font-bold transition-all shadow-lg"
            >
              <span>{showFullMatrix ? 'Detaylı Karşılaştırmayı Gizle' : 'Tüm Paket Özelliklerini Karşılaştırın (25 Kriter)'}</span>
              {showFullMatrix ? (
                <ChevronUp className="w-4 h-4 text-amber-400" />
              ) : (
                <ChevronDown className="w-4 h-4 text-amber-400" />
              )}
            </button>
          </div>

          {showFullMatrix && (
            <div className="bg-[#0A0A0C] border border-white/10 rounded-2xl overflow-hidden shadow-2xl animate-in fade-in duration-300">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm border-collapse">
                  <thead>
                    <tr className="bg-[#0A0D14] border-b border-white/10 text-slate-300">
                      <th className="p-4 sm:p-5 font-bold text-white w-1/4">Özellik / Kriter</th>
                      <th className="p-4 sm:p-5 font-bold text-zinc-300 w-1/4">Başlangıç (17.500 ₺)</th>
                      <th className="p-4 sm:p-5 font-bold text-emerald-400 bg-zinc-900/60 border-x border-amber-500/30 w-1/4">
                        Profesyonel (32.500 ₺)
                      </th>
                      <th className="p-4 sm:p-5 font-bold text-amber-400 w-1/4">Kurumsal (59.900 ₺)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {matrixCategories.map((group, gIdx) => (
                      <React.Fragment key={gIdx}>
                        {/* Distinct Category Section Divider */}
                        <tr className="bg-[#0B101D] border-t-2 border-white/10">
                          <td 
                            colSpan={4} 
                            className="py-2.5 px-4 sm:px-5 font-extrabold text-amber-400 text-xs uppercase tracking-wider"
                          >
                            {group.title}
                          </td>
                        </tr>
                        {/* Category Items */}
                        {group.items.map((row, rIdx) => (
                          <tr 
                            key={rIdx}
                            className={rIdx % 2 === 0 ? 'bg-[#0A0A0C]' : 'bg-[#0A0A0C] hover:bg-white/[0.02]'}
                          >
                            <td className="p-3.5 sm:p-4 font-semibold text-white">
                              {row.feature}
                            </td>
                            <td className="p-3.5 sm:p-4">
                              {renderTableCell(row.starter)}
                            </td>
                            <td className="p-3.5 sm:p-4 bg-zinc-900/60 border-x border-amber-500/30">
                              {renderTableCell(row.pro, true)}
                            </td>
                            <td className="p-3.5 sm:p-4">
                              {renderTableCell(row.enterprise)}
                            </td>
                          </tr>
                        ))}
                      </React.Fragment>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>

        {/* UNIFIED Master Value & Guarantee Block: "Ne İçin Ödeme Yapıyorsunuz?" */}
        <div className="mt-8 rounded-3xl bg-[#0A0A0C] max-w-5xl mx-auto shadow-2xl overflow-hidden">
          
          {/* Header & 3 Value Pillars */}
          <div className="p-7 sm:p-10">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <div className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-2">
                Değer & Yatırım Mantığı
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Ne İçin Ödeme Yapıyorsunuz?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-2">
                Bir şablon satın almıyorsunuz; işinizi büyüten, 3 yıl boyunca sunucu derdini sıfırlayan anahtar teslim bir kurumsal dijital varlık ediniyorsunuz.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-300">
              <div className="p-5 rounded-2xl bg-white/[0.02] space-y-2">
                <div className="flex items-center gap-2.5">
                  <Server className="w-5 h-5 text-amber-400 shrink-0" />
                  <strong className="text-white text-sm font-bold">3 Yıl Boyunca Sıfır Ek Masraf: 0 ₺ Yenileme Güvencesi</strong>
                </div>
                <p className="text-slate-300 leading-relaxed pt-1">
                  Alan adı, SSL güvenlik sertifikası ve yüksek hızlı global bulut barındırma için ilk 36 ay boyunca 1 TL dahi sunucu faturası ödemezsiniz.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/[0.02] space-y-2">
                <div className="flex items-center gap-2.5">
                  <Zap className="w-5 h-5 text-emerald-400 shrink-0" />
                  <strong className="text-white text-sm font-bold">Özel Yazılım Altyapısı</strong>
                </div>
                <p className="text-slate-300 leading-relaxed pt-1">
                  WordPress veritabanı yavaşlığı ve eklenti açıkları yok. Google'ın en sevdiği temiz Next.js mimarisiyle 0.3 saniyede anında yüklenir.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/[0.02] space-y-2">
                <div className="flex items-center gap-2.5">
                  <PhoneCall className="w-5 h-5 text-amber-400 shrink-0" />
                  <strong className="text-white text-sm font-bold">Dönüşüm & WhatsApp Köprüsü</strong>
                </div>
                <p className="text-slate-300 leading-relaxed pt-1">
                  Sadece şık görünmekle kalmaz; ziyaretçiyi WhatsApp'tan mesaj atmaya ve telefonla aramaya yönlendiren kanıtlanmış kurumsal satış psikolojisiyle kurgulanır.
                </p>
              </div>
            </div>
          </div>

          {/* Integrated Trust Guarantees Footer Strip (No awkward second card) */}
          <div className="border-t border-white/10 bg-[#0A0D15] p-5 sm:p-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-300">
            <div className="flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-zinc-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white block mb-0.5">Sürpriz Ek Ücret Yok</strong>
                <span className="text-slate-400">Anlaşılan net fiyat geçerlidir. "Sunucu açılışı" veya "SSL bedeli" adı altında gizli faturalar çıkmaz.</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white block mb-0.5">Görerek Karar Verme</strong>
                <span className="text-slate-400">Beğendiğiniz canlı demoyu görmeden karar vermezsiniz; ne teslim alacağınızı en baştan bilirsiniz.</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white block mb-0.5">15–60 Gün Hata Garantisi</strong>
                <span className="text-slate-400">Teslimattan sonra fark edilen tüm teknik aksaklıklar ekibimizce anında ve ücretsiz giderilir.</span>
              </div>
            </div>
          </div>

        </div>

        {/* Custom Software & Enterprise Integration Architecture Section */}
        <div className="mt-12 rounded-3xl bg-gradient-to-b from-[#0F1422] to-[#0A0D15] border border-white/10 p-6 sm:p-10 max-w-5xl mx-auto shadow-2xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-white/10">
            <div className="max-w-2xl">
              <h3 className="text-xl sm:text-3xl font-extrabold text-white tracking-tight">
                Standart Sitelerin Ötesinde: İşletmenize Özel Web Yazılımı &amp; Entegrasyon
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-2.5 leading-relaxed">
                Hazır paketlerin yetersiz kaldığı karmaşık iş süreçleriniz için; yeni nesil yazılım mimarisi, güvenli bulut veritabanı ve anlık sistem entegrasyonlarıyla firmanıza özel terzi usulü çözümler inşa ediyoruz.
              </p>
            </div>

            <a
              href="https://wa.me/905550000000?text=Merhaba%20MediWeb!%20Özel%20yazılım%20ve%20kurumsal%20entegrasyon%20projemiz%20için%20mimari%20değerlendirme%20ve%20teklif%20almak%20istiyoruz."
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-xl bg-white hover:bg-zinc-200 text-black font-bold text-xs sm:text-sm whitespace-nowrap transition-all flex items-center justify-center gap-2.5 shrink-0 shadow-lg shadow-white/10"
            >
              <WhatsAppIcon className="w-4 h-4 fill-current shrink-0" />
              <span>Özel Mimari İçin Teklif Alın</span>
            </a>
          </div>

          {/* 4 Concrete Real-World Scenarios */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-8">
            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-amber-500/30 transition-colors">
              <div className="flex items-center gap-2.5 mb-2">
                <Building2 className="w-5 h-5 text-amber-400 shrink-0" />
                <h4 className="text-sm font-bold text-white">Bayi &amp; Cari Hesap Portalı</h4>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Toptancı ve imalatçılar için şifreli bayi girişi, kişiselleştirilmiş iskonto oranları, online sipariş toplama ve anlık cari ekstre indirme.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-emerald-500/30 transition-colors">
              <div className="flex items-center gap-2.5 mb-2">
                <Calendar className="w-5 h-5 text-emerald-400 shrink-0" />
                <h4 className="text-sm font-bold text-white">Online Randevu &amp; SMS Otomasyonu</h4>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Klinik ve servisler için webden anında randevu alma, Google/Apple Takvim senkronizasyonu ve otomatik SMS/WhatsApp onay bildirimleri.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-amber-500/30 transition-colors">
              <div className="flex items-center gap-2.5 mb-2">
                <Server className="w-5 h-5 text-amber-400 shrink-0" />
                <h4 className="text-sm font-bold text-white">Ön Muhasebe &amp; ERP Entegrasyonu</h4>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Siteden gelen teklif ve form taleplerinin Paraşüt, Logo, Mikro veya Bizmu sistemlerine el değmeden otomatik müşteri ve sipariş kaydı olarak aktarımı.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-amber-500/30 transition-colors">
              <div className="flex items-center gap-2.5 mb-2">
                <FileCheck2 className="w-5 h-5 text-amber-400 shrink-0" />
                <h4 className="text-sm font-bold text-white">Online Evrak &amp; Rapor Sorgulama</h4>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Otomotiv ekspertiz raporları, laboratuvar tahlil sonuçları veya sertifikaların plaka/TC/barkod ile webden anında güvenli sorgulanması.
              </p>
            </div>
          </div>

          {/* Technical Architecture Badges Strip */}
          <div className="mt-8 pt-6 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/[0.03] border border-white/5 font-mono text-[11px] text-slate-300">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                KVKK Uyumlu Veritabanı
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/[0.03] border border-white/5 font-mono text-[11px] text-slate-300">
                <Zap className="w-3.5 h-3.5 text-amber-400" />
                Canlı Sistem &amp; Muhasebe Entegrasyonu
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/[0.03] border border-white/5 font-mono text-[11px] text-slate-300">
                <Clock className="w-3.5 h-3.5 text-amber-400" />
                %99.9 Kesintisiz Yayın Garantisi
              </span>
            </div>

            <span className="text-[11px] font-medium text-slate-400">
              Ortalama teslim süresi proje kapsamına göre 2–4 haftadır.
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
