'use client';

import React, { useState } from 'react';
import { 
  Layers, 
  Palette, 
  Check, 
  Sparkles, 
  Code2, 
  Cpu, 
  CheckCircle2, 
  ArrowRight,
  Monitor,
  LayoutTemplate
} from 'lucide-react';

interface ThemePreset {
  id: string;
  name: string;
  tagline: string;
  bgClass: string;
  cardBg: string;
  accentColor: string;
  borderClass: string;
  badgeBg: string;
  textColor: string;
  previewBg: string;
}

const THEMES: ThemePreset[] = [
  {
    id: 'obsidian',
    name: 'Obsidian Minimal',
    tagline: 'Asil Siyah, Hukuk & Kurumsal Ofisler',
    bgClass: 'from-slate-950 to-black',
    cardBg: 'bg-[#0B0F17]/90',
    accentColor: '#38BDF8',
    borderClass: 'border-slate-800',
    badgeBg: 'bg-sky-500/10 text-sky-400 border-sky-500/20',
    textColor: 'text-slate-100',
    previewBg: 'bg-black'
  },
  {
    id: 'champagne',
    name: 'Royal Champagne',
    tagline: 'Lüks Gayrimenkul, Özel Muayenehane & Butik Markalar',
    bgClass: 'from-[#17130E] to-[#0A0805]',
    cardBg: 'bg-[#1C160F]/90',
    accentColor: '#F59E0B',
    borderClass: 'border-amber-900/40',
    badgeBg: 'bg-amber-500/10 text-amber-300 border-amber-500/20',
    textColor: 'text-amber-50',
    previewBg: 'bg-[#0F0B06]'
  },
  {
    id: 'indigo',
    name: 'Electric Indigo',
    tagline: 'Yapay Zeka, Teknoloji & Dijital Dönüşüm',
    bgClass: 'from-[#0B0F2A] to-[#050714]',
    cardBg: 'bg-[#101538]/90',
    accentColor: '#6366F1',
    borderClass: 'border-white/10',
    badgeBg: 'bg-amber-500/15 text-zinc-300 border-amber-500/30',
    textColor: 'text-zinc-100',
    previewBg: 'bg-[#080B1E]'
  },
  {
    id: 'emerald',
    name: 'Nordic Emerald',
    tagline: 'Klinik, Diş Hekimi & Sağlık Merkezleri',
    bgClass: 'from-[#061C14] to-[#020B08]',
    cardBg: 'bg-[#0A261C]/90',
    accentColor: '#10B981',
    borderClass: 'border-emerald-800/40',
    badgeBg: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30',
    textColor: 'text-emerald-50',
    previewBg: 'bg-[#03120D]'
  },
  {
    id: 'safety',
    name: 'Industrial Amber',
    tagline: 'Sanayi, İmalatçı & Ağır Üretim',
    bgClass: 'from-[#1A1406] to-[#0D0A03]',
    cardBg: 'bg-[#221B0B]/90',
    accentColor: '#EAB308',
    borderClass: 'border-yellow-700/40',
    badgeBg: 'bg-yellow-500/15 text-yellow-300 border-yellow-500/30',
    textColor: 'text-yellow-50',
    previewBg: 'bg-[#120E04]'
  }
];

export const LegoThemeStudioSection: React.FC = () => {
  const [activeTheme, setActiveTheme] = useState<ThemePreset>(THEMES[0]);
  const [activeCategory, setActiveCategory] = useState<'hero' | 'beforeafter' | 'comparison' | 'process'>('hero');

  return (
    <section id="lego-studio" className="py-24 bg-black relative overflow-hidden border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Cpu className="w-3.5 h-3.5" />
            <span>Modular Agency Core v2.0 Teknolojisi</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white font-display tracking-tight mb-5">
            195 LEGO Blok. 53 Figma Teması.
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Biz hantal WordPress temalarını indirip metinleri değiştirmiyoruz. 
            13 kategoride 195 adet test edilmiş ve optimize edilmiş bağımsız React varyantını, 
            sektörünüze özel renk matematiğiyle <strong>3–5 iş gününde</strong> yayına alıyoruz.
          </p>
        </div>

        {/* Studio Controls & Live Preview Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Interactive Selectors (4 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Theme Selector */}
            <div className="glass-card rounded-3xl p-6 border border-white/10 shadow-xl">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
                  <Palette className="w-4 h-4 text-brand-400" />
                  1. Canlı Tema Motorunu Seçin
                </span>
                <span className="text-[11px] font-mono text-brand-400 font-bold">53 Temadan 5'i</span>
              </div>

              <div className="space-y-2.5">
                {THEMES.map((theme) => {
                  const isSelected = activeTheme.id === theme.id;
                  return (
                    <button
                      key={theme.id}
                      onClick={() => setActiveTheme(theme)}
                      className={`w-full text-left p-3.5 rounded-2xl transition-all border flex items-center justify-between ${
                        isSelected 
                          ? `${theme.cardBg} ${theme.borderClass} shadow-lg ring-1 ring-white/20`
                          : 'bg-white/[0.02] border-white/5 hover:bg-white/[0.05] text-slate-400'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div 
                          className="w-4 h-4 rounded-full shadow-md"
                          style={{ backgroundColor: theme.accentColor }}
                        />
                        <div>
                          <div className={`text-sm font-bold ${isSelected ? 'text-white' : 'text-slate-300'}`}>
                            {theme.name}
                          </div>
                          <div className="text-[11px] text-slate-400">
                            {theme.tagline}
                          </div>
                        </div>
                      </div>
                      {isSelected && (
                        <Check className="w-4 h-4 text-white shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Category Component Selector */}
            <div className="glass-card rounded-3xl p-6 border border-white/10 shadow-xl">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
                  <Layers className="w-4 h-4 text-emerald-400" />
                  2. LEGO Bileşenini Değiştirin
                </span>
                <span className="text-[11px] font-mono text-emerald-400 font-bold">195 Varyant</span>
              </div>

              <div className="grid grid-cols-2 gap-2">
                {[
                  { id: 'hero', label: 'Hero Varyantı', count: '15 Seçenek' },
                  { id: 'beforeafter', label: 'Kıyas Slider', count: '15 Seçenek' },
                  { id: 'comparison', label: 'Rakip Matrisi', count: '15 Seçenek' },
                  { id: 'process', label: 'Süreç / 4 Adım', count: '15 Seçenek' },
                ].map((cat) => {
                  const isSelected = activeCategory === cat.id;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => setActiveCategory(cat.id as any)}
                      className={`p-3 rounded-xl text-left border transition-all ${
                        isSelected
                          ? 'bg-brand-600/20 border-brand-500/50 text-white font-bold'
                          : 'bg-white/[0.02] border-white/5 hover:bg-white/5 text-slate-400'
                      }`}
                    >
                      <div className="text-xs font-semibold">{cat.label}</div>
                      <div className="text-[10px] text-slate-500 font-mono mt-0.5">{cat.count}</div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right: Dynamic Interactive Preview (7 Cols) */}
          <div className="lg:col-span-7">
            <div className={`rounded-3xl border ${activeTheme.borderClass} overflow-hidden shadow-2xl transition-all duration-500 bg-gradient-to-b ${activeTheme.bgClass}`}>
              {/* Browser mockup top bar */}
              <div className="px-5 py-3.5 bg-black/40 border-b border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                  <div className="w-3 h-3 rounded-full bg-green-500/60" />
                  <span className="ml-3 font-mono text-[11px] text-slate-400">
                    mediweb.core / preview / {activeTheme.id}-{activeCategory}.tsx
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${activeTheme.badgeBg}`}>
                    Aktif Tema: {activeTheme.name}
                  </span>
                </div>
              </div>

              {/* Dynamic Preview Content */}
              <div className="p-8 sm:p-12 min-h-[380px] flex flex-col justify-center">
                {activeCategory === 'hero' && (
                  <div className="space-y-6 animate-in fade-in duration-300">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border ${activeTheme.badgeBg}`}>
                      <Sparkles className="w-3.5 h-3.5" />
                      Hero Varyant #07 — {activeTheme.name}
                    </span>
                    <h3 className="text-2xl sm:text-4xl font-black text-white font-display tracking-tight leading-tight">
                      Sektörünüzün En Saygın <br />
                      <span style={{ color: activeTheme.accentColor }}>
                        Dijital Vitrinine
                      </span>{' '}
                      Sahip Olun.
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 max-w-lg leading-relaxed">
                      Sürpriz maliyet yok. Kod kalitesi ödüllü. 3 yıl boyunca sunucu masrafı ödemeden 
                      Google'da 1. sayfaya oynayan anahtar teslim web mimarisi.
                    </p>
                    <div className="flex items-center gap-3 pt-2">
                      <button 
                        style={{ backgroundColor: activeTheme.accentColor }}
                        className="px-5 py-2.5 rounded-xl text-black font-extrabold text-xs sm:text-sm shadow-lg flex items-center gap-2"
                      >
                        <span>Hemen İncele</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                      <button className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-xs sm:text-sm border border-white/10">
                        Canlı Demo
                      </button>
                    </div>
                  </div>
                )}

                {activeCategory === 'beforeafter' && (
                  <div className="space-y-6 animate-in fade-in duration-300">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border ${activeTheme.badgeBg}`}>
                      Before/After Varyant #03 — {activeTheme.name}
                    </span>
                    <h4 className="text-xl sm:text-2xl font-black text-white">Performans & Hız Kıyaslaması</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 rounded-xl bg-black/40 border border-white/5">
                        <div className="text-xs text-rose-400 font-bold mb-1">Eski Web Siteniz</div>
                        <div className="text-2xl font-mono font-black text-white">4.2 sn</div>
                        <div className="text-[11px] text-slate-400">Yavaş açılış, %60 kayıp</div>
                      </div>
                      <div className="p-4 rounded-xl border border-white/20" style={{ backgroundColor: `${activeTheme.accentColor}15` }}>
                        <div className="text-xs font-bold mb-1" style={{ color: activeTheme.accentColor }}>MediWeb Yeni Mimari</div>
                        <div className="text-2xl font-mono font-black text-white">0.3 sn</div>
                        <div className="text-[11px]" style={{ color: activeTheme.accentColor }}>Google 99 Lighthouse</div>
                      </div>
                    </div>
                  </div>
                )}

                {activeCategory === 'comparison' && (
                  <div className="space-y-6 animate-in fade-in duration-300">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border ${activeTheme.badgeBg}`}>
                      Comparison Matrix #09 — {activeTheme.name}
                    </span>
                    <h4 className="text-xl sm:text-2xl font-black text-white">Neden MediWeb?</h4>
                    <div className="space-y-2 text-xs sm:text-sm">
                      <div className="flex items-center justify-between p-3 rounded-lg bg-white/5">
                        <span className="text-slate-300">3 Yıl Domain + SSL + Hosting</span>
                        <span className="font-bold font-mono text-emerald-400">Dahil (0 ₺)</span>
                      </div>
                      <div className="flex items-center justify-between p-3 rounded-lg bg-white/5">
                        <span className="text-slate-300">Teslim Süresi</span>
                        <span className="font-bold font-mono" style={{ color: activeTheme.accentColor }}>3–5 İş Günü</span>
                      </div>
                      <div className="flex items-center justify-between p-3 rounded-lg bg-white/5">
                        <span className="text-slate-300">Kaynak Kod Mimarisi</span>
                        <span className="font-bold text-white">Next.js 14 + Tailwind</span>
                      </div>
                    </div>
                  </div>
                )}

                {activeCategory === 'process' && (
                  <div className="space-y-6 animate-in fade-in duration-300">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border ${activeTheme.badgeBg}`}>
                      Process Stepper #12 — {activeTheme.name}
                    </span>
                    <h4 className="text-xl sm:text-2xl font-black text-white">4 Adımda Canlıya Geçiş</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs">
                      {['1. Tasarımı Seç', '2. Paketi Belirle', '3. İçeriği Yolla', '4. 3 Günde Yayında'].map((step, idx) => (
                        <div key={idx} className="p-3 rounded-xl bg-white/5 border border-white/5">
                          <div className="text-base font-black mb-1" style={{ color: activeTheme.accentColor }}>0{idx + 1}</div>
                          <div className="font-bold text-white text-[11px]">{step}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom bar */}
              <div className="px-8 py-4 bg-black/30 border-t border-white/5 flex flex-wrap items-center justify-between text-xs text-slate-400 gap-2">
                <div className="flex items-center gap-2">
                  <Code2 className="w-4 h-4 text-brand-400" />
                  <span>Sıfır Hantal Bağımlılık · Tam Tip Güvenli TypeScript</span>
                </div>
                <div className="font-mono text-[11px] text-slate-500">
                  Total Engine: 195 variants / 13 categories / 53 themes
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
