'use client';

import React, { useState } from 'react';
import { Sparkles, MessageSquare, Send, CheckCircle2, ShieldCheck, MapPin } from 'lucide-react';

export const AuraDiscoveryForm: React.FC = () => {
  const [projectType, setProjectType] = useState<string>('Villa & Müstakil Konut');
  const [areaSize, setAreaSize] = useState<string>('150 – 350 m²');
  const [budgetRange, setBudgetRange] = useState<string>('1.000.000 ₺ – 2.500.000 ₺');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('Pendik / İstanbul');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const PROJECT_TYPES = [
    'Villa & Müstakil Konut',
    'Rezidans & Penthouse',
    'Ticari / Restoran / Ofis',
    'Komple Daire Yenileme',
  ];

  const AREA_SIZES = [
    '< 150 m²',
    '150 – 350 m²',
    '350 – 600 m²',
    '600 m²+',
  ];

  const BUDGET_RANGES = [
    '500.000 ₺ – 1.000.000 ₺',
    '1.000.000 ₺ – 2.500.000 ₺',
    '2.500.000 ₺ – 5.000.000 ₺',
    'Özel Bütçe / Proje Bazlı',
  ];

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const text = `Merhaba Aura Studio,\n\nWeb siteniz üzerinden yeni bir keşif randevusu oluşturmak istiyorum:\n\n` +
      `👤 Ad Soyad: ${name || 'Belirtilmedi'}\n` +
      `📞 Telefon: ${phone || 'Belirtilmedi'}\n` +
      `📍 Lokasyon: ${location || 'Pendik / İstanbul'}\n` +
      `🏛️ Proje Türü: ${projectType}\n` +
      `📐 Yaklaşık Alan: ${areaSize}\n` +
      `💰 Hedef Bütçe: ${budgetRange}\n\n` +
      `Mekanımızın yerinde keşfi ve 3D tasarım süreci için uygun bir randevu takvimi paylaşabilir misiniz?`;

    const encoded = encodeURIComponent(text);
    // WhatsApp direct link with target phone (agency hotline)
    const url = `https://wa.me/905438515086?text=${encoded}`;
    
    setIsSubmitted(true);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="kesif" className="py-24 bg-black relative overflow-hidden">
      {/* Background architectural glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/10 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-white/5 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Card Wrapper (CTA.gallery inspiration) */}
        <div className="p-8 sm:p-12 md:p-16 rounded-3xl bg-[#0C0C10] border border-white/10 shadow-2xl relative">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono tracking-widest uppercase mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>CTA.gallery İlhamlı Akıllı Keşif Formu</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-white tracking-tight mb-4">
              Mekanınızı Birlikte <br />
              <span className="italic font-serif text-amber-400">Dönüştürelim</span>
            </h2>
            <p className="text-sm text-zinc-400 font-sans leading-relaxed">
              Hantal formlar doldurmak yerine projenizin temel parametrelerini seçin; mimarımızla doğrudan WhatsApp üzerinden yerinde keşif randevusu planlayalım.
            </p>
          </div>

          <form onSubmit={handleWhatsAppSubmit} className="space-y-8 max-w-3xl mx-auto">
            
            {/* Step 1: Project Type */}
            <div className="space-y-3">
              <label className="text-xs font-mono uppercase tracking-wider text-zinc-400 block">
                01. Proje Türü:
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {PROJECT_TYPES.map((type) => {
                  const isSelected = projectType === type;
                  return (
                    <button
                      type="button"
                      key={type}
                      onClick={() => setProjectType(type)}
                      className={`p-3 rounded-2xl text-xs font-medium text-center transition-all ${
                        isSelected
                          ? 'bg-white text-black font-bold shadow-lg shadow-white/10'
                          : 'bg-[#141418] border border-white/10 text-zinc-300 hover:text-white hover:border-white/20'
                      }`}
                    >
                      {type}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Area Size */}
            <div className="space-y-3">
              <label className="text-xs font-mono uppercase tracking-wider text-zinc-400 block">
                02. Yaklaşık Alan Büyüklüğü:
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {AREA_SIZES.map((size) => {
                  const isSelected = areaSize === size;
                  return (
                    <button
                      type="button"
                      key={size}
                      onClick={() => setAreaSize(size)}
                      className={`p-3 rounded-2xl text-xs font-medium text-center transition-all ${
                        isSelected
                          ? 'bg-amber-500 text-black font-bold shadow-lg shadow-amber-500/20'
                          : 'bg-[#141418] border border-white/10 text-zinc-300 hover:text-white hover:border-white/20'
                      }`}
                    >
                      {size}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Budget Range */}
            <div className="space-y-3">
              <label className="text-xs font-mono uppercase tracking-wider text-zinc-400 block">
                03. Hedeflenen Yatırım Bütçesi:
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {BUDGET_RANGES.map((budget) => {
                  const isSelected = budgetRange === budget;
                  return (
                    <button
                      type="button"
                      key={budget}
                      onClick={() => setBudgetRange(budget)}
                      className={`p-3 rounded-2xl text-xs font-medium text-center transition-all ${
                        isSelected
                          ? 'bg-white text-black font-bold shadow-lg shadow-white/10'
                          : 'bg-[#141418] border border-white/10 text-zinc-300 hover:text-white hover:border-white/20'
                      }`}
                    >
                      {budget}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 4: Contact & Location */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-white/10">
              <div>
                <label className="text-[11px] font-mono text-zinc-400 block mb-1.5 uppercase">
                  Adınız Soyadınız:
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Örn: Selim Karadağ"
                  className="w-full px-4 py-3 rounded-xl bg-[#141418] border border-white/10 text-white text-xs placeholder:text-zinc-600 focus:outline-none focus:border-amber-400"
                />
              </div>

              <div>
                <label className="text-[11px] font-mono text-zinc-400 block mb-1.5 uppercase">
                  Telefon Numaranız:
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Örn: 0532 000 00 00"
                  className="w-full px-4 py-3 rounded-xl bg-[#141418] border border-white/10 text-white text-xs placeholder:text-zinc-600 focus:outline-none focus:border-amber-400"
                />
              </div>

              <div>
                <label className="text-[11px] font-mono text-zinc-400 block mb-1.5 uppercase">
                  Mekan Lokasyonu:
                </label>
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="Örn: Pendik Sahil / Kurtköy"
                  className="w-full px-4 py-3 rounded-xl bg-[#141418] border border-white/10 text-white text-xs placeholder:text-zinc-600 focus:outline-none focus:border-amber-400"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-bold text-sm tracking-wide transition-all shadow-xl shadow-amber-500/20 flex items-center justify-center gap-3"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Keşif Randevusu Talebini İlet (WhatsApp)</span>
              </button>
            </div>

            {/* Trust note */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-[11px] text-zinc-500 font-mono">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                <span>Ücretsiz Ön Değerlendirme</span>
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                <span>Pendik, Kartal & Anadolu Yakası</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                <span>24 Saat İçinde Geri Dönüş</span>
              </span>
            </div>

          </form>

        </div>

      </div>
    </section>
  );
};
