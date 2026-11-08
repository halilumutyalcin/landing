'use client';

import React, { useState } from 'react';
import { Sparkles, Layers, Box, Check, ArrowUpRight, Maximize2 } from 'lucide-react';

interface DecorItem {
  id: string;
  name: string;
  category: string;
  material: string;
  dimensions: string;
  origin: string;
  weight: string;
  image: string;
  tag: string;
  description: string;
  leadTime: string;
}

const DECOR_ITEMS: DecorItem[] = [
  {
    id: 'marble-table',
    name: 'Aura Monolit Mermer Sehpa',
    category: 'Merkezi Masa / Doğal Taş',
    material: 'Calacatta Viola İtalyan Mermeri',
    dimensions: '160 cm x 90 cm x 38 cm',
    origin: 'Carrara, İtalya',
    weight: '145 kg',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    tag: '3D İkonik Parça',
    description: 'Tek bir mermer bloğun CNC ve el zanaatıyla işlenmesiyle oluşturulan heykelsi orta sehpa. Ham kenar ve honlu ipek mat yüzey dokusu.',
    leadTime: '3 Hafta Özel İmalat',
  },
  {
    id: 'brass-pendant',
    name: 'Brutalist Lineer Pirinç Sarkıt',
    category: 'Mimari Aydınlatma',
    material: 'Ham Fırçalanmış Pirinç & Mat Difüzör',
    dimensions: '180 cm Uzunluk x 4 cm Çap',
    origin: 'Milano / İstanbul Atölye',
    weight: '12 kg',
    image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=1200&q=80',
    tag: '2700K Kehribar Işık',
    description: 'Yüksek tavanlı villalar ve ada mutfaklar için mimari aydınlatma. DALI otomasyonu ile gün batımı tonuna göre ışık sıcaklığını ayarlar.',
    leadTime: '10 Gün Özel Montaj',
  },
  {
    id: 'boucle-chair',
    name: 'Kavisli İtalyan Bouclé Berjer',
    category: 'Oturma Grubu & Tekstil',
    material: 'Organik Yün Bouclé & Fırınlanmış Kayın',
    dimensions: '95 cm x 88 cm x 76 cm',
    origin: 'Lombardiya, İtalya',
    weight: '28 kg',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80',
    tag: 'El Yapımı Zanaat',
    description: 'İnsan omurgasını saran organik kavisli sırt yapısı. Yüksek yoğunluklu sünger ve leke tutmayan doğal dokuma bouclé kumaş.',
    leadTime: '2 Hafta Döşeme',
  },
  {
    id: 'ceramic-vase',
    name: 'Wabi-Sabi Ham Terracotta Vazo',
    category: 'Sanat & Aksesuar',
    material: 'Doğal Kil & Reaktif Mat Sır',
    dimensions: '42 cm Yükseklik x 26 cm Çap',
    origin: 'Kapadokya / Aura Seramik Serisi',
    weight: '8 kg',
    image: 'https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?auto=format&fit=crop&w=1200&q=80',
    tag: 'Numaralı Sınırlı Seri',
    description: 'Japon wabi-sabi felsefesinden ilham alan kusursuz asimetri. Her vazo elde şekillendirilir ve fırından kendine has renk geçişleriyle çıkar.',
    leadTime: 'Stokta / Hemen Teslim',
  },
];

export const AuraDecorElementsShowcase: React.FC = () => {
  const [selectedItemId, setSelectedItemId] = useState<string>('marble-table');

  const selectedItem = DECOR_ITEMS.find((item) => item.id === selectedItemId) || DECOR_ITEMS[0];

  return (
    <section id="3d-elemanlar" className="py-24 bg-black relative border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (3dicons.co & Supahero inspiration) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono tracking-widest uppercase mb-3">
              <Box className="w-3.5 h-3.5" />
              <span>3DIcons.co İlhamlı Dokunsal Galeri</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white font-normal tracking-tight">
              Mekanı Var Eden <br />
              <span className="italic font-serif text-amber-400">3D Heykelsi Elemanlar</span>
            </h2>
          </div>
          <p className="text-sm text-zinc-400 max-w-md font-sans leading-relaxed">
            Katalog mobilyalarına yer yok. Mekanın her bir köşesi için özel olarak tasarladığımız, heykelsi ve dokunsal mimari detayları yakından inceleyin.
          </p>
        </div>

        {/* 4 Items Horizontal Selector Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-12">
          {DECOR_ITEMS.map((item) => {
            const isSelected = item.id === selectedItemId;
            return (
              <button
                key={item.id}
                onClick={() => setSelectedItemId(item.id)}
                className={`p-5 rounded-2xl text-left transition-all duration-300 border flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#141418] border-amber-500/50 shadow-xl shadow-amber-500/10 ring-1 ring-amber-500/30'
                    : 'bg-[#0A0A0C] border-white/10 hover:border-white/20 hover:bg-[#101014]'
                }`}
              >
                <div>
                  <span className={`text-[10px] font-mono uppercase tracking-wider block mb-1 ${
                    isSelected ? 'text-amber-400' : 'text-zinc-500'
                  }`}>
                    {item.category}
                  </span>
                  <h4 className="text-sm sm:text-base font-serif text-white font-medium mb-1">
                    {item.name}
                  </h4>
                </div>
                <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-zinc-400 font-mono">
                  <span>{item.leadTime}</span>
                  <span className={`w-2 h-2 rounded-full ${isSelected ? 'bg-amber-400' : 'bg-zinc-700'}`} />
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Item Master Inspection Stage */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#0C0C10] border border-white/10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-2xl">
          
          {/* Visual Showcase (7 Cols) */}
          <div className="lg:col-span-7 relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 group bg-zinc-950">
            <img
              src={selectedItem.image}
              alt={selectedItem.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter contrast-110"
            />
            
            {/* Top Left Tag */}
            <div className="absolute top-4 left-4 z-10 px-3 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-white/20 text-white font-mono text-xs font-bold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              <span>{selectedItem.tag}</span>
            </div>

            {/* Bottom Floating Material Callout */}
            <div className="absolute bottom-4 inset-x-4 z-10 p-3.5 rounded-xl bg-black/80 backdrop-blur-md border border-white/10 flex items-center justify-between text-xs text-zinc-300 font-mono">
              <span>Menşei: {selectedItem.origin}</span>
              <span className="text-amber-400 font-bold">{selectedItem.material}</span>
            </div>
          </div>

          {/* Technical Specs & Action (5 Cols) */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div>
              <span className="text-amber-400 font-mono text-xs uppercase tracking-widest block mb-1">
                {selectedItem.category}
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif text-white font-normal mb-3">
                {selectedItem.name}
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 font-sans leading-relaxed">
                {selectedItem.description}
              </p>
            </div>

            {/* Spec Sheet Table */}
            <div className="grid grid-cols-2 gap-3 py-4 border-t border-b border-white/10 font-mono text-xs">
              <div>
                <span className="text-zinc-500 block text-[10px] uppercase">Ölçüler</span>
                <span className="text-white font-bold">{selectedItem.dimensions}</span>
              </div>
              <div>
                <span className="text-zinc-500 block text-[10px] uppercase">Ağırlık</span>
                <span className="text-white font-bold">{selectedItem.weight}</span>
              </div>
              <div>
                <span className="text-zinc-500 block text-[10px] uppercase">Üretim Süresi</span>
                <span className="text-white font-bold">{selectedItem.leadTime}</span>
              </div>
              <div>
                <span className="text-zinc-500 block text-[10px] uppercase">Tasarım</span>
                <span className="text-white font-bold">Aura Studio Özel</span>
              </div>
            </div>

            {/* Direct WhatsApp Action for this element */}
            <a
              href={`https://wa.me/905438515086?text=${encodeURIComponent(
                `Merhaba Aura Studio, sitenizdeki 3D "${selectedItem.name}" parçasını çok beğendim. Mekanımız için bu tasarım ve özel imalat detayları hakkında görüşmek istiyorum.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 px-6 rounded-2xl bg-white hover:bg-amber-400 text-black font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-xl shadow-white/10"
            >
              <span>Bu Parçayı Projenize Dahil Edin</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

          </div>

        </div>

      </div>
    </section>
  );
};
