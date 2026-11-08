'use client';

import React, { useState, useEffect, useRef } from 'react';
import { 
  AuraScrollRoomCanvas3D, 
  MaterialTheme 
} from './AuraScrollRoomCanvas3D';
import { 
  Layers, 
  Sparkles, 
  Palette, 
  Sliders, 
  Compass, 
  CheckCircle2, 
  ArrowDown, 
  Sun,
  Flame,
  Maximize2
} from 'lucide-react';

interface DecorPhase {
  id: number;
  threshold: number;
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  specTokens: { label: string; value: string }[];
}

const DECOR_PHASES: DecorPhase[] = [
  {
    id: 1,
    threshold: 0.1,
    badge: 'AŞAMA 01 · TABULA RASA',
    title: 'Ham Mekan & Doğal Gün Işığı',
    subtitle: 'Taşıyıcı Akslar & Panoramik Cam Cephe',
    description: 'Tasarım fazlalıkları silerek başlar. 180 m² boş penthouse hacminde gün ışığının kırılma açıları hesaplanır, zemin ve tavan gridi kurulur.',
    specTokens: [
      { label: 'Zemin Kotu', value: '±0.00 Kot' },
      { label: 'Tavan Yüksekliği', value: '3.40 Metre' },
      { label: 'Işık Açısı', value: 'Güneybatı (Akdeniz)' },
      { label: 'Hacim', value: '180 m² / 612 m³' },
    ],
  },
  {
    id: 2,
    threshold: 0.3,
    badge: 'AŞAMA 02 · MERKAZİ MONOLİT',
    title: 'Heykelsi Mermer Sehpa',
    subtitle: 'Calacatta Viola Ham Taş Blok',
    description: 'Mekanın merkez aksına tek parça organik İtalyan mermeri yerleştirilir. Ağır kütle, havada süzülüyormuş hissi veren yivli alt kaideyle dengelenir.',
    specTokens: [
      { label: 'Malzeme', value: 'Calacatta Viola Mermer' },
      { label: 'Boyutlar', value: '160 x 90 x 38 cm' },
      { label: 'Yüzey İşlemi', value: 'Honlu & İpek Mat' },
      { label: 'Menşei', value: 'Carrara, İtalya' },
    ],
  },
  {
    id: 3,
    threshold: 0.5,
    badge: 'AŞAMA 03 · MİMARİ AYDINLATMA',
    title: 'Lineer Pirinç Sarkıt Armatür',
    subtitle: '2700K Sıcak Kehribar Ambiyans Işığı',
    description: 'Tavandan inen fırçalanmış pirinç profil armatür sahneyi aydınlatır. Gizli lineer difüzör, mermer sehpanın damarlarını ve zemin dokusunu parlatır.',
    specTokens: [
      { label: 'Armatür', value: 'Fırçalanmış Ham Pirinç' },
      { label: 'Renk Sıcaklığı', value: '2700 Kelvin (Amber)' },
      { label: 'CRI Değeri', value: 'CRI 98+ Doğal Spektrum' },
      { label: 'Kontrol', value: 'DALI Akıllı Otomasyon' },
    ],
  },
  {
    id: 4,
    threshold: 0.7,
    badge: 'AŞAMA 04 · ERGONOMİ & DOKU',
    title: 'Kavisli İtalyan Bouclé Berjer',
    subtitle: 'Doğal Yün Halı & Organik Formlar',
    description: 'Keskin mimari hatları yumuşatan dairesel formlu bouclé oturma elemanı ve el dokuması yün kilim yana doğru kayarak kompozisyona dahil olur.',
    specTokens: [
      { label: 'Döşeme', value: 'Doğal Dokuma Bouclé' },
      { label: 'İç İskelet', value: 'Fırınlanmış Masif Kayın' },
      { label: 'Halı', value: 'Yeni Zelanda Yünü (%100)' },
      { label: 'Konfor', value: 'Yüksek Yoğunluklu HR Sünger' },
    ],
  },
  {
    id: 5,
    threshold: 0.9,
    badge: 'AŞAMA 05 · AKUSTİK & YAŞAM',
    title: 'Akustik Ceviz Çıta & Şömine',
    subtitle: 'Biyoetanol Alev & Mekan %100 Hazır',
    description: 'Arka duvara akustik çıta paneller kilitlenir, minimalist lineer şömine alev alır ve seramik vazo yerini alır. Mekan artık yaşayan bir sanat eseridir.',
    specTokens: [
      { label: 'Duvar Paneli', value: 'Akustik Keçe & Masif Ceviz' },
      { label: 'Şömine', value: 'Akıllı Biyoetanol Brülör' },
      { label: 'Sanat Eseri', value: 'Aura Özel Seri Tuval' },
      { label: 'Teslim Durumu', value: '%100 Anahtar Teslim' },
    ],
  },
];

export const AuraScrollDecorStudio: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0.2);
  const [manualProgress, setManualProgress] = useState<number | null>(null);
  const [theme, setTheme] = useState<MaterialTheme>('travertine');

  // Listen to scroll inside the section for Scrolltide-like pinning
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate progress from when top of section enters to when it leaves
      const totalScrollable = rect.height - windowHeight;
      if (totalScrollable <= 0) return;

      const currentScroll = -rect.top;
      const rawProgress = currentScroll / totalScrollable;
      const clamped = Math.max(0.05, Math.min(1.0, rawProgress));

      // If user hasn't manually overridden via clicks
      if (manualProgress === null) {
        setScrollProgress(clamped);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [manualProgress]);

  const activeProgress = manualProgress !== null ? manualProgress : scrollProgress;

  // Determine current active phase
  const currentPhase =
    DECOR_PHASES.slice()
      .reverse()
      .find((p) => activeProgress >= p.threshold) || DECOR_PHASES[0];

  const handleSelectPhase = (phaseThreshold: number) => {
    setManualProgress(phaseThreshold);
    // Timeout to release manual override so scrolling still works
    setTimeout(() => setManualProgress(null), 3000);
  };

  return (
    <section
      id="scroll-dekorasyon"
      ref={containerRef}
      className="relative min-h-[220vh] bg-[#070709] border-t border-b border-white/[0.08]"
    >
      {/* Sticky Pinned Viewport Container (Scrolltide.co style) */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-between overflow-hidden p-4 sm:p-6 lg:p-8">
        
        {/* Top Control Bar (Styles.refero.design tokens + Navbar synergy) */}
        <div className="max-w-7xl mx-auto w-full flex flex-wrap items-center justify-between gap-4 z-20 pt-16 sm:pt-14">
          
          {/* Phase Badge & Progress Indicator */}
          <div className="flex items-center gap-3">
            <div className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                {currentPhase.badge}
              </span>
            </div>

            <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/60 border border-white/10 text-xs font-mono text-zinc-400">
              <span>Mekan Durumu:</span>
              <span className="text-amber-400 font-bold">
                %{Math.round(activeProgress * 100)} Tamamlandı
              </span>
            </div>
          </div>

          {/* Styles.refero.design Material Palette Switcher */}
          <div className="flex items-center gap-1.5 p-1 rounded-2xl bg-black/80 backdrop-blur-xl border border-white/10 shadow-xl">
            <span className="text-[10px] font-mono uppercase text-zinc-400 px-2.5 hidden md:inline">
              Malzeme Teması:
            </span>
            
            <button
              onClick={() => setTheme('travertine')}
              className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all flex items-center gap-1.5 ${
                theme === 'travertine'
                  ? 'bg-amber-500 text-black font-bold shadow-md shadow-amber-500/20'
                  : 'text-zinc-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-[#d5c8b5]" />
              <span>Traverten & Meşe</span>
            </button>

            <button
              onClick={() => setTheme('obsidian')}
              className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all flex items-center gap-1.5 ${
                theme === 'obsidian'
                  ? 'bg-white text-black font-bold shadow-md shadow-white/20'
                  : 'text-zinc-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-[#18181b]" />
              <span>Obsidyen & Pirinç</span>
            </button>

            <button
              onClick={() => setTheme('japandi')}
              className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all flex items-center gap-1.5 ${
                theme === 'japandi'
                  ? 'bg-amber-500 text-black font-bold shadow-md shadow-amber-500/20'
                  : 'text-zinc-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-[#8a7f72]" />
              <span>Japandi & Sedir</span>
            </button>
          </div>

        </div>

        {/* Center Stage: Interactive 3D Room and Architectural Context Card */}
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-6 items-center my-auto z-10">
          
          {/* Left Column: Architectural Story Card & Spec Tokens (5 Cols) */}
          <div className="lg:col-span-5 space-y-4 text-left order-2 lg:order-1">
            
            <div className="p-6 sm:p-7 rounded-3xl bg-[#0C0C10]/90 backdrop-blur-2xl border border-white/10 shadow-2xl space-y-5">
              
              <div className="space-y-1">
                <span className="text-[11px] font-mono text-amber-400 tracking-widest uppercase block">
                  Aşama 0{currentPhase.id} / 05 · Scroll Storytelling
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif text-white font-normal leading-tight">
                  {currentPhase.title}
                </h3>
                <p className="text-xs text-zinc-400 font-mono">
                  {currentPhase.subtitle}
                </p>
              </div>

              <p className="text-xs sm:text-sm text-zinc-300 font-sans leading-relaxed">
                {currentPhase.description}
              </p>

              {/* Styles.refero.design Spec Tokens Grid */}
              <div className="grid grid-cols-2 gap-2.5 pt-3 border-t border-white/10 font-mono text-xs">
                {currentPhase.specTokens.map((tok, i) => (
                  <div key={i} className="p-2 rounded-xl bg-white/[0.03] border border-white/5">
                    <span className="text-[10px] text-zinc-400 block uppercase">{tok.label}</span>
                    <span className="text-white font-bold truncate block">{tok.value}</span>
                  </div>
                ))}
              </div>

              {/* Interactive Phase Step Buttons */}
              <div className="pt-2 flex items-center justify-between gap-1 border-t border-white/5">
                {DECOR_PHASES.map((p) => {
                  const isActive = currentPhase.id === p.id;
                  return (
                    <button
                      key={p.id}
                      onClick={() => handleSelectPhase(p.threshold)}
                      title={p.title}
                      className={`flex-1 py-1.5 rounded-lg text-[10px] font-mono transition-all text-center ${
                        isActive
                          ? 'bg-amber-500 text-black font-bold shadow-sm'
                          : 'bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      0{p.id}
                    </button>
                  );
                })}
              </div>

            </div>

          </div>

          {/* Right Column: Three.js Interactive Room (7 Cols) */}
          <div className="lg:col-span-7 relative order-1 lg:order-2 flex items-center justify-center">
            <div className="w-full aspect-[4/3] max-w-[720px] rounded-3xl bg-black/60 border border-white/10 shadow-2xl relative overflow-hidden group">
              
              {/* Three.js Canvas */}
              <AuraScrollRoomCanvas3D
                progress={activeProgress}
                materialTheme={theme}
                className="w-full h-full"
              />

              {/* Floating Spatial HUD badge */}
              <div className="absolute bottom-4 left-4 z-20 px-3 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-white/10 text-[10px] text-zinc-300 font-mono flex items-center gap-2">
                <Compass className="w-3.5 h-3.5 text-amber-400" />
                <span>Scroll İle Dekore Edilen Canlı Model</span>
              </div>

              {/* Scroll prompt badge */}
              <div className="absolute top-4 right-4 z-20 px-3 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-white/10 text-[10px] text-amber-400 font-mono flex items-center gap-1.5 animate-pulse">
                <ArrowDown className="w-3 h-3" />
                <span>Kaydırarak Parçaları Yerleştirin</span>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Progress Timeline Strip */}
        <div className="max-w-7xl mx-auto w-full z-20 pb-2">
          <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-amber-500 via-amber-400 to-white transition-all duration-300"
              style={{ width: `${Math.max(5, activeProgress * 100)}%` }}
            />
          </div>
        </div>

      </div>
    </section>
  );
};
