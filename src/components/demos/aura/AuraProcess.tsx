'use client';

import React from 'react';
import { Compass, Box, Hammer, Key, ArrowUpRight } from 'lucide-react';

const STEPS = [
  {
    step: '01',
    title: 'Keşif & Mekansal Analiz',
    subtitle: 'Lazer Tarama & İhtiyaç Programı',
    desc: 'Pendik, Kartal veya Bağdat Caddesi’ndeki mekanınızda yerinde 3D lazer tarama ve gün ışığı açı analizi yapıyoruz. Yaşam alışkanlıklarınızı ve önceliklerinizi dinliyoruz.',
    icon: Compass,
    badge: '1–3. Gün',
    deliverables: ['Lazer Rölöve Paftası', 'Gün Işığı & Havalandırma Raporu', 'İhtiyaç & Bütçe Matrisi'],
  },
  {
    step: '02',
    title: 'Moodboard & 3D Simülasyon',
    subtitle: 'Malzeme Eşleşmesi & 4K Render',
    desc: 'Doğal taş, ham ahşap ve metal numuneleriyle moodboard oluşturuyoruz. Mekanınızı henüz tek bir çivi çakılmadan 4K fotogerçekçi 3D ışık simülasyonlarıyla deneyimletiyoruz.',
    icon: Box,
    badge: '4–10. Gün',
    deliverables: ['Dokunsal Malzeme Tahtası', 'V-Ray 360° Panoramik Render', 'Mobilya Ölçü & Aks Çizimleri'],
  },
  {
    step: '03',
    title: 'Özel İmalat & Malzeme Temini',
    subtitle: 'Atölye Üretimi & Zanaat',
    desc: 'Katalog mobilyaları yerine mekana özel milimetrik marangozluk, mermer işleme ve mimari aydınlatma armatürlerini kendi çözüm ortağı atölyelerimizde üretiyoruz.',
    icon: Hammer,
    badge: '11–35. Gün',
    deliverables: ['İtalyan Mermer Kesim Planı', 'Masif Ahşap Atölye İmalatı', 'Akıllı Aydınlatma Rayları'],
  },
  {
    step: '04',
    title: 'Şantiye Denetimi & Teslim',
    subtitle: 'Sıfır Tolerans & Anahtar Teslim',
    desc: 'Kırım, sıva, elektrik ve mobilya montajını mimarımız her gün şantiyede bizzat denetler. Belirlenen bütçeden 1 kuruş sapmadan ve 0 gün gecikmeyle anahtarınızı teslim ediyoruz.',
    icon: Key,
    badge: '36–45. Gün',
    deliverables: ['Eksiksiz Şantiye Günlüğü', '2 Yıl İşçilik & Malzeme Garantisi', 'Profesyonel Mimari Çekim'],
  },
];

export const AuraProcess: React.FC = () => {
  return (
    <section id="surec" className="py-24 bg-[#0A0A0C] border-t border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-amber-400 font-mono text-xs uppercase tracking-widest mb-3">
            <span>Disiplinli Mimari Metodoloji</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-white tracking-tight mb-4">
            4 Aşamada Kusursuz <br />
            <span className="italic font-serif text-zinc-300">Anahtar Teslim Yolculuk</span>
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 font-sans leading-relaxed">
            Belirsizliklere, uzayan şantiyelere ve sürpriz maliyetlere yer yok. Her aşaması paftalanmış, onaylı ve milimetrik yürütülen şeffaf süreç.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map((st, i) => {
            const Icon = st.icon;
            return (
              <div
                key={i}
                className="group relative p-7 rounded-3xl bg-[#0D0D11] border border-white/10 hover:border-amber-500/40 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
              >
                {/* Step number watermark */}
                <div className="absolute top-4 right-5 text-4xl font-serif font-bold text-white/5 group-hover:text-amber-500/10 transition-colors pointer-events-none select-none">
                  {st.step}
                </div>

                <div>
                  {/* Top Icon & Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-amber-400 group-hover:bg-amber-500 group-hover:text-black transition-all">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-400 font-mono text-[10px] font-bold">
                      {st.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-serif font-normal text-white mb-1 group-hover:text-amber-300 transition-colors">
                    {st.title}
                  </h3>
                  <div className="text-xs text-amber-400/90 font-mono mb-3">
                    {st.subtitle}
                  </div>
                  <p className="text-xs text-zinc-400 leading-relaxed font-sans mb-6">
                    {st.desc}
                  </p>
                </div>

                {/* Deliverables list */}
                <div className="pt-4 border-t border-white/5 space-y-1.5 font-mono text-[11px] text-zinc-400">
                  <span className="text-[10px] text-zinc-500 uppercase block tracking-wider font-sans">
                    Teslim Çıktıları:
                  </span>
                  {st.deliverables.map((d, idx) => (
                    <div key={idx} className="flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-amber-400" />
                      <span className="truncate">{d}</span>
                    </div>
                  ))}
                </div>

              </div>
            );
          })}
        </div>

        {/* Studio Philosophy Quote / Manifesto Box */}
        <div id="felsefe" className="mt-16 p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#0E0E12] via-[#0A0A0C] to-[#0E0E12] border border-white/10 text-center relative overflow-hidden">
          <div className="max-w-3xl mx-auto space-y-4 relative z-10">
            <span className="text-amber-400 font-mono text-xs uppercase tracking-widest">
              Aura Tasarım Manifestosu
            </span>
            <blockquote className="text-xl sm:text-2xl md:text-3xl font-serif text-white font-normal leading-snug">
              &ldquo;Bir mekan, yalnızca içinde yaşanılan dört duvar değil; gün ışığının, dokunulan taşın ve sessizliğin insanın ruhuna dokunduğu bir sığınaktır.&rdquo;
            </blockquote>
            <div className="text-xs font-mono text-zinc-400">
              Mimari Tasarım Direktörü — Aura Studio, Pendik
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
