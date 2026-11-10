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
    <section id="neden-biz" className="py-20 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <div className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-3">
            Neden MediWeb? · Şeffaf ve Modern Standart
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-3">
            Klasik Ajans Hantallığına Son Veriyoruz.
          </h2>
          <p className="text-base text-slate-300 leading-relaxed">
            Karmaşık WordPress eklentileri, ne çıkacağı belirsiz hayali tasarımlar ve sürpriz yenileme faturaları geride kaldı. Üç temel boyutta farkımızı inceleyin:
          </p>
        </div>

        {/* Interactive Unified Segmented Tabs - Mobile-Friendly Responsive & Desktop Grid */}
        <div className="mb-8 sm:mb-10 w-full max-w-4xl lg:max-w-5xl mx-auto flex sm:grid sm:grid-cols-3 overflow-x-auto p-1.5 rounded-2xl bg-[#0A0A0C] border border-white/[0.08] gap-1.5 sm:gap-2 shadow-inner print:hidden [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <button
            onClick={() => setActiveTab('agency-vs-us')}
            className={`flex-1 shrink-0 sm:shrink sm:w-full min-w-[125px] sm:min-w-0 px-2.5 sm:px-4 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-1.5 sm:gap-2 text-center whitespace-nowrap ${
              activeTab === 'agency-vs-us'
                ? 'bg-white text-black shadow-lg shadow-white/10 ring-1 ring-white'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            <Scale className={`w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 ${activeTab === 'agency-vs-us' ? 'text-black' : 'text-amber-400'}`} />
            <span className="hidden sm:inline">Geleneksel Ajans vs. Biz</span>
            <span className="sm:hidden text-xs">Ajans vs. Biz</span>
          </button>

          <button
            onClick={() => setActiveTab('wp-vs-next')}
            className={`flex-1 shrink-0 sm:shrink sm:w-full min-w-[125px] sm:min-w-0 px-2.5 sm:px-4 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-1.5 sm:gap-2 text-center whitespace-nowrap ${
              activeTab === 'wp-vs-next'
                ? 'bg-white text-black shadow-lg shadow-white/10 ring-1 ring-white'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            <Zap className={`w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 ${activeTab === 'wp-vs-next' ? 'text-black' : 'text-amber-400'}`} />
            <span className="hidden sm:inline">WordPress vs. Hızlı Mimari</span>
            <span className="sm:hidden text-xs">WordPress vs. Hız</span>
          </button>

          <button
            onClick={() => setActiveTab('principles')}
            className={`flex-1 shrink-0 sm:shrink sm:w-full min-w-[125px] sm:min-w-0 px-2.5 sm:px-4 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-1.5 sm:gap-2 text-center whitespace-nowrap ${
              activeTab === 'principles'
                ? 'bg-white text-black shadow-lg shadow-white/10 ring-1 ring-white'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            <ShieldCheck className={`w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 ${activeTab === 'principles' ? 'text-black' : 'text-amber-400'}`} />
            <span className="hidden sm:inline">Şeffaf İlkelerimiz &amp; Taahhütler</span>
            <span className="sm:hidden text-xs">İlkeler &amp; Güvence</span>
          </button>
        </div>

        {/* TAB 1: Geleneksel Ajans vs. MediWeb (Comparison Table) */}
        <div className={`bg-[#0A0A0C] border border-white/[0.08] rounded-3xl overflow-hidden shadow-2xl max-w-5xl mx-auto ${activeTab === 'agency-vs-us' ? 'block animate-in fade-in duration-300' : 'hidden print:block'}`}>
          <div className="grid grid-cols-1 md:grid-cols-3 bg-[#121214] text-xs sm:text-sm font-semibold text-zinc-400 p-4 sm:p-5 border-b border-white/5">
            <div className="hidden md:block">Karşılaştırma Kriteri</div>
            <div className="text-rose-400 flex items-center gap-2">
              <XCircle className="w-4 h-4 text-rose-400 shrink-0" />
              <span>Geleneksel Ajans Modeli</span>
            </div>
            <div className="text-emerald-400 flex items-center gap-2 mt-2 md:mt-0">
              <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
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
                <div className="text-zinc-300 font-semibold">
                  <span className="text-amber-400 font-bold mr-1 md:hidden">MediWeb:</span>
                  <span>{item.mediweb}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* TAB 2: WordPress vs. Next.js Hız Kıyası (Interactive Slider & Metrics) */}
        <div className={`max-w-5xl mx-auto space-y-6 ${activeTab === 'wp-vs-next' ? 'block animate-in fade-in duration-300' : 'hidden print:block print:mt-10'}`}>
          <div 
            ref={containerRef}
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onMouseMove={handleMouseMove}
            onTouchStart={() => setIsDragging(true)}
            onTouchEnd={() => setIsDragging(false)}
            onTouchMove={handleTouchMove}
            className="relative w-full h-[520px] sm:h-[480px] rounded-3xl overflow-hidden select-none shadow-2xl cursor-ew-resize bg-[#0A0A0C]"
          >
            {/* AFTER (MediWeb / Right Side) */}
            <div className="absolute inset-0 bg-[#0C1422] p-5 sm:p-10 flex flex-col justify-between">
              <div className="text-right max-w-[240px] sm:max-w-md ml-auto">
                <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-amber-400 mb-1 block">
                  Yeni Nesil MediWeb Mimarisi
                </span>
                <h3 className="text-base sm:text-2xl font-bold text-white mb-1.5 leading-tight">
                  Yüksek Prestij &amp; Anında Açılış Hızı
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-snug">
                  Yüksek hızlı bulut altyapısıyla anında açılan,<br />
                  müşteriyi doğrudan WhatsApp ve aramaya bağlayan modern yapı
                </p>
              </div>

              {/* Metrics Showcase Right */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 my-auto">
                <div className="p-4 rounded-xl bg-black/40">
                  <div className="text-xs font-bold text-white mb-1">Lighthouse Skoru</div>
                  <div className="text-3xl font-black text-white">90–95+</div>
                  <div className="text-[11px] text-zinc-400 mt-1">Statik Sayfalarda</div>
                </div>

                <div className="p-4 rounded-xl bg-black/40">
                  <div className="text-xs font-bold text-amber-400 mb-1">Google Uyumu</div>
                  <div className="text-3xl font-black text-white">Hazır</div>
                  <div className="text-[11px] text-zinc-300 mt-1">Harita &amp; SEO Kayıtlı</div>
                </div>

                <div className="p-4 rounded-xl bg-black/40">
                  <div className="text-xs font-bold text-amber-400 mb-1">Sunucu Faturası</div>
                  <div className="text-3xl font-black text-white">3 Yıl 0 ₺</div>
                  <div className="text-[11px] text-cyan-300 mt-1">Sürpriz Ek Masraf Yok</div>
                </div>

                <div className="p-4 rounded-xl bg-black/40">
                  <div className="text-xs font-bold text-amber-400 mb-1">Çökme &amp; Güvenlik</div>
                  <div className="text-3xl font-black text-white">Düşük Risk</div>
                  <div className="text-[11px] text-zinc-300 mt-1">Statik Mimari Güvenliği</div>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-end gap-2 sm:gap-6 text-[11px] sm:text-sm text-slate-300 font-medium max-w-[220px] sm:max-w-none ml-auto">
                <span className="flex items-center gap-1.5 text-zinc-300">
                  <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400 shrink-0" />
                  3–10 İş Gününde Canlıda
                </span>
                <span className="flex items-center gap-1.5 text-zinc-300">
                  <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400 shrink-0" />
                  Doğrudan İletişim Kanalları
                </span>
              </div>
            </div>

            {/* BEFORE (Old WordPress / Left Side Layer - Clipped) */}
            <div 
              className="absolute inset-0 bg-[#160B0F] p-5 sm:p-10 flex flex-col justify-between overflow-hidden shadow-2xl transition-none pointer-events-none select-none"
              style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
            >
              <div className="text-left max-w-[240px] sm:max-w-md mr-auto">
                <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-rose-400 mb-1 block">
                  Geleneksel WordPress Siteleri
                </span>
                <h3 className="text-base sm:text-2xl font-bold text-white mb-1.5 leading-tight">
                  Yavaş, Karmaşık &amp; Bakım İsteyen
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-snug">
                  Ağır eklenti yüküyle yavaşlayan ve<br />
                  her yıl sunucu faturası çıkaran eski sistemler
                </p>
              </div>

              {/* Metrics Showcase Left */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 my-auto">
                <div className="p-4 rounded-xl bg-black/40">
                  <div className="text-xs font-bold text-rose-400 mb-1">Açılış Hızı</div>
                  <div className="text-3xl font-black text-white">Yavaş</div>
                  <div className="text-[11px] text-rose-300 mt-1">Ağır Veritabanı Yükü</div>
                </div>

                <div className="p-4 rounded-xl bg-black/40">
                  <div className="text-xs font-bold text-amber-400 mb-1">Google Uyumu</div>
                  <div className="text-3xl font-black text-white">Sınırlı</div>
                  <div className="text-[11px] text-amber-300 mt-1">Optimizasyon Gerektiren CMS</div>
                </div>

                <div className="p-4 rounded-xl bg-black/40">
                  <div className="text-xs font-bold text-red-400 mb-1">Yıllık Masraf</div>
                  <div className="text-3xl font-black text-white">Sürekli</div>
                  <div className="text-[11px] text-red-300 mt-1">Hosting, SSL, Eklenti Faturası</div>
                </div>

                <div className="p-4 rounded-xl bg-black/40">
                  <div className="text-xs font-bold text-orange-400 mb-1">Çökme Riski</div>
                  <div className="text-3xl font-black text-white">Yüksek</div>
                  <div className="text-[11px] text-orange-300 mt-1">Sürekli Güncelleme ve Hata</div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2 sm:gap-6 text-[11px] sm:text-sm text-slate-300 font-medium max-w-[220px] sm:max-w-none mr-auto">
                <span className="flex items-center gap-1.5 text-rose-300">
                  <XCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-rose-400 shrink-0" />
                  Haftalarca Süren Belirsizlik
                </span>
                <span className="flex items-center gap-1.5 text-rose-300">
                  <XCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-rose-400 shrink-0" />
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
              Kaydırıcıyı sağa ve sola sürükleyerek geleneksel eklenti bağımlı siteler ile modern bulut mimarimiz arasındaki performans farkını doğrudan karşılaştırın.
            </p>
          </div>

        {/* TAB 3: Şeffaf İlkelerimiz & Kurucu Notu */}
        <div className={`max-w-5xl mx-auto space-y-8 ${activeTab === 'principles' ? 'block animate-in fade-in duration-300' : 'hidden print:block print:mt-10'}`}>
          {/* Founder's Authentic Note */}
            <div className="p-7 sm:p-9 rounded-3xl bg-[#0A0A0C] border border-white/[0.08] shadow-2xl relative overflow-hidden">
              <div className="space-y-3.5 text-left">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <div className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-1">
                      Ajans Manifestosu & Samimi Taahhüt
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                      Neden Geleneksel Ajans Modelini Reddettik?
                    </h3>
                  </div>
                  <span className="text-[11px] text-slate-400 font-medium">
                    Şengüller & MediWeb Ekibi · Mühendislik Notu
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Web sitesi yaptırmak isteyen kurumsal işletmelerin, avukatların, kliniklerin ve sanayicilerin yaşadığı en büyük sorun; haftalarca süren ucu açık süreçler, ne çıkacağı belirsiz tasarımlar ve sonradan çıkan beklenmedik yenileme faturalarıdır.
                </p>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Biz bu belirsizlikleri ortadan kaldırmak için ürünleştirilmiş ajans modelini benimsedik: <strong>Canlı demoyu önceden test edin</strong>, kurumsal kimliğinize uyarlayalım; içerik onayınızdan itibaren <strong>3–10 iş gününde anahtar teslim</strong> yayına alın. İlk 3 yıl alan adı ve bulut barındırma dahil sabit fiyat güvencesiyle.
                </p>

                <div className="pt-4 border-t border-white/5 flex flex-wrap items-center justify-between text-xs text-slate-400 gap-2">
                  <span className="text-white font-semibold">Şengüller Otomotiv & Bilişim / MediWeb Ekibi</span>
                  <span className="text-emerald-400 font-medium flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>Pendik / İstanbul</span>
                  </span>
                </div>
              </div>
            </div>

            {/* 2 Elevated Cards: What We Do vs What We Don't */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Ne Yapıyoruz */}
              <div className="bg-[#0A0A0C] border border-white/[0.08] rounded-3xl p-7 flex flex-col justify-between shadow-2xl">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <CheckCircle className="w-7 h-7 text-amber-400 shrink-0" />
                    <div>
                      <span className="text-xs font-semibold text-emerald-400 block">MediWeb Standartları</span>
                      <h4 className="text-xl font-bold text-white">Neleri Yapıyoruz?</h4>
                    </div>
                  </div>

                  <div className="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    <div className="flex items-start gap-2.5">
                      <CheckCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-white block text-xs sm:text-sm">Kurumsal Ciddiyete Uygun Vitrin</strong>
                        <span className="text-slate-300 text-xs">Hukuk, sağlık, danışmanlık, muhasebe ve emlak sektörünün etik ve kurumsal beklentilerine uygun, güven uyandıran tasarımlar hazırlıyoruz.</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5">
                      <CheckCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-white block text-xs sm:text-sm">Ziyaretçiyi Bekletmeyen Açılış</strong>
                        <span className="text-slate-300 text-xs">Mobilde ve masaüstünde statik demo sayfalarımızda 90–95+ Lighthouse skoru hedefleyen, doğrudan doğru iletişim kanalına yönlendiren temiz mimari.</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5">
                      <CheckCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-white block text-xs sm:text-sm">İlk 3 Yıl Barındırma & Alan Adı Dahil</strong>
                        <span className="text-slate-300 text-xs">Alan adı, SSL sertifikası ve küresel bulut barındırmayı ilk 3 yıl karşılıyoruz; zorunlu ek barındırma masrafı çıkmaz.</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5">
                      <CheckCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-white block text-xs sm:text-sm">Resmi e-Fatura ve Belgelendirme</strong>
                        <span className="text-slate-300 text-xs">Tüm paketlerimiz KDV hariç kurumsal faturalandırılır; faturanız şirket gideri olarak muhasebeleştirilebilir.</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-emerald-500/20 flex items-center justify-between text-xs font-semibold text-emerald-400">
                  <span>Sözleşmeli ve Taahhütlü Teslimat</span>
                  <span>Şeffaf Süreç</span>
                </div>
              </div>

              {/* Ne Yapmıyoruz */}
              <div className="bg-[#180F14] rounded-3xl p-7 flex flex-col justify-between shadow-2xl">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <XCircle className="w-7 h-7 text-rose-400 shrink-0" />
                    <div>
                      <span className="text-xs font-semibold text-rose-400 block">Prensiplerimiz</span>
                      <h4 className="text-xl font-bold text-white">Neleri Yapmıyoruz?</h4>
                    </div>
                  </div>

                  <div className="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    <div className="flex items-start gap-2.5">
                      <XCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-white block text-xs sm:text-sm">Belirsiz Takvim ve Gecikmeler Yok</strong>
                        <span className="text-slate-300 text-xs">İçerik onayından itibaren takvimimiz sözleşmeyle belirlenir; ucu açık bekleme süreleri yaşatmayız.</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5">
                      <XCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-white block text-xs sm:text-sm">Ağır ve Güvensiz Eklenti Yükü Yok</strong>
                        <span className="text-slate-300 text-xs">Tipik olarak sürekli eklenti güncellemesi ve güvenlik açığı takibi gerektiren yapılar yerine hafif, güvenli ve modern web mimarisi kurarız.</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5">
                      <XCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-white block text-xs sm:text-sm">Sürpriz Yenileme ve Lisans Masrafları Yok</strong>
                        <span className="text-slate-300 text-xs">İlk 3 yıl alan adı ve bulut barındırma fiyata dahildir; 4. yıldan itibaren sadece maliyetine devam eder.</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5">
                      <XCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-white block text-xs sm:text-sm">Kopuk Destek Süreci Yok</strong>
                        <span className="text-slate-300 text-xs">Teslimat sonrasında yalnız bırakmayız; sözleşmeli garanti süresince (15/30/60 gün) bildirilen yazılımsal aksaklıklara 1–2 iş günü içinde teknik müdahale başlatır, sonrasında ise isteğe bağlı aylık bakım anlaşmasıyla doğrudan teknik muhatap sunarız (müşteri kaynaklı yeni içerik ve tasarım revizyonları bakım kapsamındadır).</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-rose-500/20 flex items-center justify-between text-xs font-semibold text-rose-400">
                  <span>Net Şartlar, Sıfır Belirsizlik</span>
                  <span>Şeffaf Standart</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>
  );
};
