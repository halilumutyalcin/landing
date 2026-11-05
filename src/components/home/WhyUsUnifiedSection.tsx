'use client';

import React, { useState, useRef, useCallback } from 'react';
import { 
  CheckCircle2, 
  XCircle, 
  CheckCircle,
  MapPin,
  Sliders,
  ArrowRight,
  ShieldCheck,
  Zap,
  TrendingUp,
  Scale
} from 'lucide-react';
import { siteConfig } from '@/config/site.config';

type TabType = 'agency-vs-us' | 'wp-vs-next' | 'principles';

export const WhyUsUnifiedSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('agency-vs-us');

  // Slider state for WordPress vs Next.js tab
  const [sliderPos, setSliderPos] = useState<number>(50);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percent = Math.min(Math.max((x / rect.width) * 100, 5), 95);
    setSliderPos(percent);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  return (
    <section id="neden-biz" className="py-20 bg-[#090B10] border-b border-white/[0.08] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-wider mb-3">
            <span>Neden MediWeb? · Şeffaf ve Modern Standart</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-3">
            Klasik Ajans Hantallığına Son Veriyoruz.
          </h2>
          <p className="text-base text-slate-300 leading-relaxed">
            Hantal WordPress eklentileri, ne çıkacağı belirsiz hayali tasarımlar ve sürpriz yenileme faturaları geride kaldı. Üç temel boyutta farkımızı inceleyin:
          </p>

          {/* Interactive Unified Segmented Tabs - Pure Flex Wrap, Zero Scrollbars */}
          <div className="mt-8 inline-flex flex-wrap items-center justify-center p-1.5 rounded-2xl bg-[#121622] gap-1.5 shadow-inner">
            <button
              onClick={() => setActiveTab('agency-vs-us')}
              className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
                activeTab === 'agency-vs-us'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Scale className="w-4 h-4" />
              <span>Geleneksel Ajans vs. Biz</span>
            </button>

            <button
              onClick={() => setActiveTab('wp-vs-next')}
              className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
                activeTab === 'wp-vs-next'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Zap className="w-4 h-4 text-emerald-400" />
              <span>WordPress vs. Next.js Hız Kıyası</span>
            </button>

            <button
              onClick={() => setActiveTab('principles')}
              className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
                activeTab === 'principles'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span>Şeffaf İlkelerimiz & Taahhütler</span>
            </button>
          </div>
        </div>

        {/* TAB 1: Geleneksel Ajans vs. MediWeb (Comparison Table) */}
        {activeTab === 'agency-vs-us' && (
          <div className="bg-[#121622] rounded-3xl overflow-hidden shadow-2xl max-w-5xl mx-auto animate-in fade-in duration-300">
            <div className="grid grid-cols-1 md:grid-cols-3 bg-[#0C0F17] text-xs sm:text-sm font-semibold text-slate-400 p-4 sm:p-5 border-b border-white/5">
              <div className="hidden md:block">Karşılaştırma Kriteri</div>
              <div className="text-rose-400 flex items-center gap-2">
                <XCircle className="w-4 h-4 text-rose-400 shrink-0" />
                <span>Geleneksel Ajans Modeli</span>
              </div>
              <div className="text-emerald-400 flex items-center gap-2 mt-2 md:mt-0">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>MediWeb Modeli</span>
              </div>
            </div>

            <div className="divide-y divide-white/5">
              {siteConfig.comparisonPoints.map((item, idx) => (
                <div
                  key={idx}
                  className="grid grid-cols-1 md:grid-cols-3 p-4 sm:p-5 gap-2 md:gap-4 hover:bg-white/[0.02] transition-colors items-center text-xs sm:text-sm"
                >
                  <div className="font-bold text-white mb-1 md:mb-0">
                    {item.feature}
                  </div>
                  <div className="text-slate-400">
                    <span className="text-rose-400 font-bold mr-1 md:hidden">Eski:</span>
                    <span>{item.traditional}</span>
                  </div>
                  <div className="text-emerald-300 font-semibold">
                    <span className="text-emerald-400 font-bold mr-1 md:hidden">MediWeb:</span>
                    <span>{item.mediweb}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 2: WordPress vs. Next.js Hız Kıyası (Interactive Slider & Metrics) */}
        {activeTab === 'wp-vs-next' && (
          <div className="max-w-5xl mx-auto space-y-6 animate-in fade-in duration-300">
            <div 
              ref={containerRef}
              onMouseDown={() => setIsDragging(true)}
              onMouseUp={() => setIsDragging(false)}
              onMouseLeave={() => setIsDragging(false)}
              onMouseMove={handleMouseMove}
              onTouchMove={handleTouchMove}
              className="relative w-full h-[460px] sm:h-[480px] rounded-3xl overflow-hidden select-none shadow-2xl cursor-ew-resize bg-[#0E121A]"
            >
              {/* AFTER (MediWeb / Right Side) */}
              <div className="absolute inset-0 bg-[#0C1422] p-6 sm:p-10 flex flex-col justify-between">
                <div className="text-right">
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-1 block">
                    Yeni Nesil MediWeb Mimarisi
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">Yüksek Prestij & 0.3 Sn Açılış</h3>
                  <p className="text-xs sm:text-sm text-slate-300">0.3 saniyede anında açılan, müşteriyi doğrudan WhatsApp ve aramaya bağlayan yapı</p>
                </div>

                {/* Metrics Showcase Right */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 my-auto">
                  <div className="p-4 rounded-xl bg-black/40">
                    <div className="text-xs font-bold text-emerald-400 mb-1">Açılış Hızı</div>
                    <div className="text-3xl font-black text-white font-mono">0.3 sn</div>
                    <div className="text-[11px] text-emerald-300 mt-1">Sıfır Müşteri Kaybı</div>
                  </div>

                  <div className="p-4 rounded-xl bg-black/40">
                    <div className="text-xs font-bold text-blue-400 mb-1">Google Uyumu</div>
                    <div className="text-3xl font-black text-white font-mono">Hazır</div>
                    <div className="text-[11px] text-blue-300 mt-1">Harita &amp; SEO Kayıtlı</div>
                  </div>

                  <div className="p-4 rounded-xl bg-black/40">
                    <div className="text-xs font-bold text-cyan-400 mb-1">Sunucu Faturası</div>
                    <div className="text-3xl font-black text-white font-mono">3 Yıl 0 ₺</div>
                    <div className="text-[11px] text-cyan-300 mt-1">Sürpriz Ek Masraf Yok</div>
                  </div>

                  <div className="p-4 rounded-xl bg-black/40">
                    <div className="text-xs font-bold text-indigo-400 mb-1">Çökme &amp; Virüs</div>
                    <div className="text-3xl font-black text-white font-mono">%0 Risk</div>
                    <div className="text-[11px] text-indigo-300 mt-1">Eklenti Açıkları Yok</div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-end gap-3 sm:gap-6 text-xs sm:text-sm text-slate-300 font-medium">
                  <span className="flex items-center gap-1.5 text-emerald-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    3–5 Günde Canlıda
                  </span>
                  <span className="flex items-center gap-1.5 text-emerald-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    Doğrudan WhatsApp İletişimi
                  </span>
                </div>
              </div>

              {/* BEFORE (Old WordPress / Left Side Layer - Clipped) */}
              <div 
                className="absolute inset-0 bg-[#160B0F] p-6 sm:p-10 flex flex-col justify-between overflow-hidden shadow-2xl transition-none pointer-events-none select-none"
                style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
              >
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-rose-400 mb-1 block">
                    Geleneksel WordPress Siteleri
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">Yavaş, Hantal &amp; Güvensiz</h3>
                  <p className="text-xs sm:text-sm text-slate-300">4.8 saniyede açılan, her yıl sunucu faturası çıkaran eski sistemler</p>
                </div>

                {/* Metrics Showcase Left */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 my-auto">
                  <div className="p-4 rounded-xl bg-black/40">
                    <div className="text-xs font-bold text-rose-400 mb-1">Açılış Hızı</div>
                    <div className="text-3xl font-black text-white font-mono">4.8 sn</div>
                    <div className="text-[11px] text-rose-300 mt-1">%53 Ziyaretçi Terk Ediyor</div>
                  </div>

                  <div className="p-4 rounded-xl bg-black/40">
                    <div className="text-xs font-bold text-amber-400 mb-1">Google Uyumu</div>
                    <div className="text-3xl font-black text-white font-mono">Kötü</div>
                    <div className="text-[11px] text-amber-300 mt-1">Düşük Mobil Performans</div>
                  </div>

                  <div className="p-4 rounded-xl bg-black/40">
                    <div className="text-xs font-bold text-red-400 mb-1">Yıllık Masraf</div>
                    <div className="text-3xl font-black text-white font-mono">Sürekli</div>
                    <div className="text-[11px] text-red-300 mt-1">Hosting, SSL, Eklenti Faturası</div>
                  </div>

                  <div className="p-4 rounded-xl bg-black/40">
                    <div className="text-xs font-bold text-orange-400 mb-1">Çökme Riski</div>
                    <div className="text-3xl font-black text-white font-mono">Yüksek</div>
                    <div className="text-[11px] text-orange-300 mt-1">Sürekli Güncelleme ve Hata</div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 sm:gap-6 text-xs sm:text-sm text-slate-300 font-medium">
                  <span className="flex items-center gap-1.5 text-rose-300">
                    <XCircle className="w-4 h-4 text-rose-400 shrink-0" />
                    Haftalarca Süren Belirsizlik
                  </span>
                  <span className="flex items-center gap-1.5 text-rose-300">
                    <XCircle className="w-4 h-4 text-rose-400 shrink-0" />
                    Sürekli Bozulabilen Formlar
                  </span>
                </div>
              </div>

              {/* Slider Divider Line & Handle Knob */}
              <div 
                className="absolute inset-y-0 w-0.5 bg-white/70 pointer-events-none shadow-[0_0_12px_rgba(255,255,255,0.6)]"
                style={{ left: `${sliderPos}%` }}
              >
                <div className="absolute top-1/2 -translate-y-1/2 -left-4 w-8 h-8 rounded-full bg-white text-black shadow-2xl flex items-center justify-center font-black text-xs select-none">
                  ‹›
                </div>
              </div>
            </div>

            <p className="text-center text-xs text-slate-400">
              Kaydırıcıyı sağa ve sola sürükleyerek eski hantal siteler ile Next.js altyapımız arasındaki performans farkını doğrudan karşılaştırın.
            </p>
          </div>
        )}

        {/* TAB 3: Şeffaf İlkelerimiz & Kurucu Notu */}
        {activeTab === 'principles' && (
          <div className="max-w-5xl mx-auto space-y-8 animate-in fade-in duration-300">
            {/* Founder's Authentic Note */}
            <div className="p-7 sm:p-9 rounded-3xl bg-[#0E1320] shadow-2xl relative overflow-hidden">
              <div className="space-y-3.5 text-left">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <div className="text-xs font-bold text-blue-400 uppercase tracking-wider mb-1">
                      Ajans Manifestosu & Samimi Taahhüt
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                      Neden Geleneksel Ajans Modelini Reddettik?
                    </h3>
                  </div>
                  <span className="text-[11px] text-slate-400 font-medium">
                    Kurucu Ortaklar Notu
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Türkiye'de web sitesi yaptırmak isteyen bir avukatın, kliniğin, mali müşavirin veya KOBİ'nin yaşadığı çileyi çok iyi biliyoruz:
                  Haftalarca süren oyalayıcı toplantılar, 2–3 ay sonra ne çıkacağı belirsiz hayali Photoshop tasarımları ve her yıl kapıya dayanan fahiş "sunucu yenileme" faturaları.
                </p>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Biz bu ezberi kökten bozmak için yola çıktık: <strong>Canlı demoyu önceden test edin</strong>, ne alacağınızı ve ne ödeyeceğinizi ilk saniyede bilin, <strong>3–5 iş gününde anahtar teslim</strong> yayına geçin. Üstelik 3 yıl boyunca da alan adı ve sunucu takibini tamamen kafanızdan çıkarın.
                </p>

                <div className="pt-4 border-t border-white/5 flex flex-wrap items-center justify-between text-xs text-slate-400 gap-2">
                  <span className="text-white font-semibold">MediWeb Ekibi</span>
                  <span className="text-emerald-400 font-medium flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>İstanbul & Ankara</span>
                  </span>
                </div>
              </div>
            </div>

            {/* 2 Elevated Cards: What We Do vs What We Don't */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Ne Yapıyoruz */}
              <div className="bg-[#0C1520] rounded-3xl p-7 flex flex-col justify-between shadow-2xl">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <CheckCircle className="w-7 h-7 text-emerald-400 shrink-0" />
                    <div>
                      <span className="text-xs font-semibold text-emerald-400 block">MediWeb Standartları</span>
                      <h4 className="text-xl font-bold text-white">Neleri Yapıyoruz?</h4>
                    </div>
                  </div>

                  <div className="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    <div className="flex items-start gap-2.5">
                      <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-white block text-xs sm:text-sm">Kurumsal Ciddiyete Uygun Vitrin</strong>
                        <span className="text-slate-300 text-xs">Hukuk, sağlık, danışmanlık, muhasebe ve emlak sektörünün beklentilerine uygun, güven uyandıran tasarımlar hazırlıyoruz.</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5">
                      <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-white block text-xs sm:text-sm">Ziyaretçiyi Bekletmeyen Açılış</strong>
                        <span className="text-slate-300 text-xs">Mobilde ve masaüstünde 0.3 saniyede açılan, müşteriyi doğrudan WhatsApp veya telefon aramasına yönlendiren temiz mimari.</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5">
                      <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-white block text-xs sm:text-sm">3 Yıl Boyunca Sıfır Sunucu Masrafı</strong>
                        <span className="text-slate-300 text-xs">Alan adı, SSL sertifikası ve bulut barındırmayı ilk 3 yıl karşılıyoruz; ek bakım masrafı çıkmaz.</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5">
                      <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-white block text-xs sm:text-sm">Resmi Fatura ve Vergi Avantajı</strong>
                        <span className="text-slate-300 text-xs">Tüm paketlerimiz kurumsal faturalandırılır; kurumlar veya gelir vergisinden düşülerek net tasarruf sağlar.</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-emerald-500/20 flex items-center justify-between text-xs font-semibold text-emerald-400">
                  <span>Sözleşmeli ve Garantili Teslimat</span>
                  <span>%100 Taahhüt</span>
                </div>
              </div>

              {/* Ne Yapmıyoruz */}
              <div className="bg-[#180F14] rounded-3xl p-7 flex flex-col justify-between shadow-2xl">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <XCircle className="w-7 h-7 text-rose-400 shrink-0" />
                    <div>
                      <span className="text-xs font-semibold text-rose-400 block">Sektördeki Kötü Deneyimler</span>
                      <h4 className="text-xl font-bold text-white">Neleri Yapmıyoruz?</h4>
                    </div>
                  </div>

                  <div className="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    <div className="flex items-start gap-2.5">
                      <XCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-white block text-xs sm:text-sm">Ucu Açık Süreçler & Oyalama Yok</strong>
                        <span className="text-slate-300 text-xs">"Haftaya teslim ediyoruz" deyip aylarca süren ucu açık süreçler yaşatmayız. Gün ve saat sözleşmede bellidir.</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5">
                      <XCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-white block text-xs sm:text-sm">Güvensiz WordPress Eklentileri Yok</strong>
                        <span className="text-slate-300 text-xs">Sürekli bozulan, virüs kapabilen ve sitenizi yavaşlatan 40 tane WordPress eklentisi kullanmayız.</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5">
                      <XCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-white block text-xs sm:text-sm">Her Yıl Fahiş Yenileme Faturası Yok</strong>
                        <span className="text-slate-300 text-xs">1 yıl sonra "hosting süreniz doldu, siteniz kapanır" diyerek fahiş paralar talep etmeyiz; ilk 3 yıl fiyata dahildir.</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5">
                      <XCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-white block text-xs sm:text-sm">Ulaşılamayan Destek Yok</strong>
                        <span className="text-slate-300 text-xs">Siteyi teslim ettikten sonra telefonlara çıkmayan ajanslar gibi değiliz; doğrudan WhatsApp hattımızdan anında yanıt veririz.</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-rose-500/20 flex items-center justify-between text-xs font-semibold text-rose-400">
                  <span>Sürpriz Yok, Hayal Satmak Yok</span>
                  <span>Şeffaf Standart</span>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
