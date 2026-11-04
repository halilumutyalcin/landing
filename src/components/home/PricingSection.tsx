'use client';

import React, { useState } from 'react';
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
  Minus
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
  const [showTaxDeduction, setShowTaxDeduction] = useState<boolean>(false);
  const [showFullMatrix, setShowFullMatrix] = useState<boolean>(false);

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
        { feature: 'Site hız optimizasyonu', starter: 'Temel (Vercel Edge CDN)', pro: 'Gelişmiş (Lighthouse 90+)', enterprise: 'İleri seviye (0.3 sn anında yükleme)' },
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
        { feature: 'Yayınlama & 3 Yıl Hosting', starter: '3 Yıl Domain + SSL + CDN Dahil', pro: '3 Yıl Domain + SSL + CDN Dahil', enterprise: '3 Yıl Domain + SSL + CDN Dahil' },
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
          <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
          <span>{val}</span>
        </span>
      );
    }
    return (
      <span className={`text-xs ${isProCol ? 'text-emerald-300 font-medium' : 'text-slate-300'}`}>
        {val}
      </span>
    );
  };

  return (
    <section id="paketler" className="py-20 bg-[#090B10] border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* High-Trust Delivery Commitment Banner */}
        <div className="max-w-3xl mx-auto mb-10 p-3.5 rounded-xl bg-blue-950/40 text-center flex items-center justify-center gap-2.5 text-xs text-blue-200">
          <Clock className="w-4 h-4 text-blue-400 shrink-0" />
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
            İhtiyacınıza uygun sayfa sayısını seçin; <strong>3 yıl alan adı ve barındırma dahil</strong> yayına alalım.
          </p>

          {/* Interactive B2B Tax Toggle */}
          <div className="mt-6 inline-flex items-center p-1 rounded-xl bg-[#121622]">
            <button
              onClick={() => setShowTaxDeduction(false)}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                !showTaxDeduction
                  ? 'bg-blue-600 text-white shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Standart Fiyatlar
            </button>
            <button
              onClick={() => setShowTaxDeduction(true)}
              className={`px-4 py-2 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
                showTaxDeduction
                  ? 'bg-emerald-600 text-white shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Building2 className="w-3.5 h-3.5" />
              <span>Şirketler İçin Net Maliyet (Vergi İndirimi Sonrası)</span>
            </button>
          </div>

          {showTaxDeduction && (
            <p className="text-xs text-emerald-400 mt-2.5 animate-in fade-in duration-200">
              %20 KDV mahsubu ve %25–%35 kurumlar/gelir vergisi gider indirimi düşüldükten sonra cebinizden çıkan net tutardır.
            </p>
          )}
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

            return (
              <div
                key={pkg.id}
                className={`rounded-2xl p-7 sm:p-8 flex flex-col justify-between transition-all relative ${
                  isPro
                    ? 'bg-[#141B2D] shadow-2xl lg:-translate-y-2'
                    : 'bg-[#0E121A] hover:bg-[#121724]'
                }`}
              >
                {/* Popular Ribbon */}
                {isPro && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-blue-600 text-white text-[11px] font-semibold tracking-normal shadow">
                    En Çok Tercih Edilen Paket
                  </div>
                )}

                <div>
                  {/* Top Header */}
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-blue-400 tracking-normal">
                      {pkg.name} Paketi
                    </span>
                    <span className="text-xs text-slate-400 font-medium">
                      {pkg.deliveryTime}
                    </span>
                  </div>

                  <p className="text-xs text-slate-300 mb-6 leading-relaxed">
                    {pkg.tagline}
                  </p>

                  {/* Price Box */}
                  <div className="mb-6 p-4 rounded-xl bg-black/40">
                    <div className="text-[11px] text-slate-400 line-through mb-1">
                      {pkg.id === 'starter' ? 'Ajans Değeri: ~35.000 TL' : pkg.id === 'pro' ? 'Ajans Değeri: ~70.000 TL' : 'Ajans Değeri: ~125.000 TL'}
                    </div>

                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl sm:text-4xl font-black text-white">
                        {showTaxDeduction ? netPrice : pkg.priceFormatted}
                      </span>
                      <span className="text-xs text-slate-400 font-medium">
                        {showTaxDeduction ? 'Net Gider' : '+ KDV (Tek Sefer)'}
                      </span>
                    </div>

                    {/* Payment Terms Tag */}
                    <div className="mt-2 flex items-center justify-between text-[11px] pt-2 border-t border-white/5">
                      <span className="text-slate-400">Ödeme Planı:</span>
                      <span className="font-semibold text-amber-400">{pkg.paymentTerms}</span>
                    </div>

                    {showTaxDeduction && (
                      <div className="text-[11px] text-emerald-400 mt-1 font-semibold">
                        Gider gösterildiğinde %35-40 net tasarruf
                      </div>
                    )}

                    <div className="text-xs text-emerald-400 font-medium mt-2 flex items-center gap-1.5 pt-2 border-t border-white/5">
                      <ShieldCheck className="w-4 h-4 shrink-0" />
                      <span>3 Yıl Domain + SSL + CDN Dahil (0 TL Masraf)</span>
                    </div>
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

                  {/* Feature Checklist */}
                  <div className="space-y-2.5 mb-8">
                    {pkg.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-200">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Action with Official WhatsApp Icon */}
                <div>
                  <a
                    href={generateWhatsAppUrl({
                      packageName: `${pkg.name} Paket (${pkg.priceFormatted})`,
                    })}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-3.5 rounded-xl font-bold text-sm tracking-normal flex items-center justify-center gap-2.5 transition-all shadow-md ${
                      isPro
                        ? 'bg-emerald-600 hover:bg-emerald-500 text-white'
                        : 'bg-white/10 hover:bg-white/15 text-white'
                    }`}
                  >
                    <WhatsAppIcon className="w-4 h-4 fill-current shrink-0" />
                    <span>Bu Paketi Seç & WhatsApp ile Başla</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* 25-Row Comparison Matrix Toggle & Grouped Table */}
        <div className="mb-14 max-w-5xl mx-auto">
          <div className="text-center mb-6">
            <button
              onClick={() => setShowFullMatrix(!showFullMatrix)}
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-[#121622] hover:bg-[#182030] text-white text-xs sm:text-sm font-bold transition-all shadow-lg"
            >
              <span>{showFullMatrix ? 'Detaylı Karşılaştırmayı Gizle' : 'Tüm Paket Özelliklerini Karşılaştırın (25 Kriter)'}</span>
              {showFullMatrix ? (
                <ChevronUp className="w-4 h-4 text-blue-400" />
              ) : (
                <ChevronDown className="w-4 h-4 text-blue-400" />
              )}
            </button>
          </div>

          {showFullMatrix && (
            <div className="bg-[#121622] border border-white/10 rounded-2xl overflow-hidden shadow-2xl animate-in fade-in duration-300">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm border-collapse">
                  <thead>
                    <tr className="bg-[#0A0D14] border-b border-white/10 text-slate-300">
                      <th className="p-4 sm:p-5 font-bold text-white w-1/4">Özellik / Kriter</th>
                      <th className="p-4 sm:p-5 font-bold text-blue-300 w-1/4">Başlangıç (17.500 ₺)</th>
                      <th className="p-4 sm:p-5 font-bold text-emerald-400 bg-blue-950/30 border-x border-blue-500/20 w-1/4">
                        Profesyonel (32.500 ₺)
                      </th>
                      <th className="p-4 sm:p-5 font-bold text-purple-300 w-1/4">Kurumsal (59.900 ₺)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {matrixCategories.map((group, gIdx) => (
                      <React.Fragment key={gIdx}>
                        {/* Distinct Category Section Divider */}
                        <tr className="bg-[#0B101D] border-t-2 border-white/10">
                          <td 
                            colSpan={4} 
                            className="py-2.5 px-4 sm:px-5 font-extrabold text-blue-400 text-xs uppercase tracking-wider"
                          >
                            {group.title}
                          </td>
                        </tr>
                        {/* Category Items */}
                        {group.items.map((row, rIdx) => (
                          <tr 
                            key={rIdx}
                            className={rIdx % 2 === 0 ? 'bg-[#121622]' : 'bg-[#0E121A] hover:bg-white/[0.02]'}
                          >
                            <td className="p-3.5 sm:p-4 font-semibold text-white">
                              {row.feature}
                            </td>
                            <td className="p-3.5 sm:p-4">
                              {renderTableCell(row.starter)}
                            </td>
                            <td className="p-3.5 sm:p-4 bg-blue-950/20 border-x border-blue-500/20">
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
        <div className="mt-8 rounded-3xl bg-[#0E121A] max-w-5xl mx-auto shadow-2xl overflow-hidden">
          
          {/* Header & 3 Value Pillars */}
          <div className="p-7 sm:p-10">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <div className="text-xs font-bold text-blue-400 uppercase tracking-wider mb-2">
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
                  <Server className="w-5 h-5 text-blue-400 shrink-0" />
                  <strong className="text-white text-sm font-bold">3 Yıl Sıfır Masraf Güvencesi</strong>
                </div>
                <p className="text-slate-300 leading-relaxed pt-1">
                  Alan adı, SSL güvenlik sertifikası ve Vercel Global Edge CDN barındırma için ilk 36 ay boyunca 1 TL dahi sunucu faturası ödemezsiniz.
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
                  <PhoneCall className="w-5 h-5 text-purple-400 shrink-0" />
                  <strong className="text-white text-sm font-bold">Dönüşüm & WhatsApp Köprüsü</strong>
                </div>
                <p className="text-slate-300 leading-relaxed pt-1">
                  Sadece şık görünmekle kalmaz; ziyaretçiyi WhatsApp'tan mesaj atmaya ve telefonla aramaya yönlendiren kanıtlanmış B2B psikolojisiyle kurgulanır.
                </p>
              </div>
            </div>
          </div>

          {/* Integrated Trust Guarantees Footer Strip (No awkward second card) */}
          <div className="border-t border-white/10 bg-[#0A0D15] p-5 sm:p-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-300">
            <div className="flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white block mb-0.5">Sürpriz Ek Ücret Yok</strong>
                <span className="text-slate-400">Anlaşılan net fiyat geçerlidir. "Sunucu açılışı" veya "SSL bedeli" adı altında gizli faturalar çıkmaz.</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
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

      </div>
    </section>
  );
};
