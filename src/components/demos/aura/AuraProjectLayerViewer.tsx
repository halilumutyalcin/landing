'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Layers, Compass, Maximize2, Sparkles, Check, ArrowRight } from 'lucide-react';

interface ProjectData {
  id: string;
  title: string;
  subtitle: string;
  location: string;
  area: string;
  duration: string;
  year: string;
  materials: string[];
  description: string;
  layers: {
    wireframe: {
      image: string;
      caption: string;
      badge: string;
    };
    render: {
      image: string;
      caption: string;
      badge: string;
    };
    final: {
      image: string;
      caption: string;
      badge: string;
    };
  };
}

const PROJECTS: ProjectData[] = [
  {
    id: 'villa-dragos',
    title: 'Villa Dragos',
    subtitle: 'Penthouse & Çatı Terası Özel İmalatı',
    location: 'Dragos Sahil, Kartal / İstanbul',
    area: '420 m²',
    duration: '60 Gün',
    year: '2026',
    materials: ['İtalyan Calacatta Mermer', 'Termo Meşe Kaplama', 'Lineer Gizli LED', 'Minimal Alüminyum Doğrama'],
    description: 'Adalar manzarasına açılan geniş hacimlerde, brüt beton ve ham mermerin monokrom dengesiyle tasarlanmış özel penthouse rezidansı.',
    layers: {
      wireframe: {
        image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=80',
        caption: 'Katman 01 — 3D CAD Tel Kafes (Wireframe) & Taşıyıcı Aks Analizi',
        badge: '01 / TEKNİK ESKİZ & PLAN',
      },
      render: {
        image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80',
        caption: 'Katman 02 — V-Ray / Corona Işık ve Malzeme Dokusu Simülasyonu',
        badge: '02 / 3D FOTOGERÇEKÇİ RENDER',
      },
      final: {
        image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=85',
        caption: 'Katman 03 — Şantiye Bitimi & Yaşayan Mekan Fotoğrafı (Teslim Edildi)',
        badge: '03 / TAMAMLANMIŞ GERÇEK MEKAN',
      },
    },
  },
  {
    id: 'sahil-loft',
    title: 'Sahil Loft',
    subtitle: 'Kurtköy Minimalist Rezidans & Çalışma Odaklı Yaşam',
    location: 'Kurtköy Yenişehir, Pendik / İstanbul',
    area: '185 m²',
    duration: '40 Gün',
    year: '2025',
    materials: ['Mikroçimento Zemin', 'Akustik Ahşap Çıta', 'Dumanlı Cam Bölücü', 'Gizli Priz Rayları'],
    description: 'Yüksek tavanlı endüstriyel loft kabuğunda, akustik paneller ve sıcak amber ışık hatlarıyla sakinleştirilmiş çağdaş stüdyo daire.',
    layers: {
      wireframe: {
        image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=80',
        caption: 'Katman 01 — Hacimsel Kütle Çalışması ve Dolaşım Şeması',
        badge: '01 / TEKNİK ESKİZ & PLAN',
      },
      render: {
        image: 'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=1600&q=80',
        caption: 'Katman 02 — Akustik Çıta & Gizli LED Işık Kırılma Testi',
        badge: '02 / 3D FOTOGERÇEKÇİ RENDER',
      },
      final: {
        image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1600&q=85',
        caption: 'Katman 03 — Anahtar Teslim İç Mekan Uygulaması',
        badge: '03 / TAMAMLANMIŞ GERÇEK MEKAN',
      },
    },
  },
  {
    id: 'studio-zen',
    title: 'Studio Zen',
    subtitle: 'Butik Gastronomi & Mekan Deneyimi',
    location: 'Tuzla Marina Hattı / İstanbul',
    area: '260 m²',
    duration: '50 Gün',
    year: '2026',
    materials: ['Traverten Bar Bankosu', 'Ham Pirinç Detaylar', 'Japon Sedir Ahşabı', 'Floklu Kumaş Koltuklar'],
    description: 'Minimalist Japon estetiği ile İtalyan malzeme kalitesini buluşturan, 80 kişilik özel şef masası ve kokteyl lounge deneyimi.',
    layers: {
      wireframe: {
        image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1600&q=80',
        caption: 'Katman 01 — Mutfak Tesisatı ve Misafir Dolaşım Paftası',
        badge: '01 / TEKNİK ESKİZ & PLAN',
      },
      render: {
        image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=80',
        caption: 'Katman 02 — Akşam Işığı Atmosfer Simülasyonu',
        badge: '02 / 3D FOTOGERÇEKÇİ RENDER',
      },
      final: {
        image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1600&q=85',
        caption: 'Katman 03 — Açılış Günü Canlı Mekan Çekimi',
        badge: '03 / TAMAMLANMIŞ GERÇEK MEKAN',
      },
    },
  },
];

export const AuraProjectLayerViewer: React.FC = () => {
  const [selectedProjectId, setSelectedProjectId] = useState<string>('villa-dragos');
  const [activeLayer, setActiveLayer] = useState<'wireframe' | 'render' | 'final'>('final');

  const currentProject = PROJECTS.find((p) => p.id === selectedProjectId) || PROJECTS[0];
  const currentLayerData = currentProject.layers[activeLayer];

  return (
    <section id="projeler" className="py-24 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 border-b border-white/10 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 text-amber-400 font-mono text-xs uppercase tracking-widest mb-3">
              <Layers className="w-4 h-4" />
              <span>Scrolltide Stili Akışkan Portfolyo</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-white tracking-tight">
              Seçkin Projeler & <br />
              <span className="italic text-zinc-300">3 Boyutlu Dönüşüm Hikayeleri</span>
            </h2>
          </div>
          <p className="text-sm text-zinc-400 max-w-md font-sans leading-relaxed">
            Mimarın emeğini ve vizyonunu tek kareye sığdırmıyoruz. Her projede teknik eskizden 3D ışık simülasyonuna ve tamamlanan mekanın nihai teslimine kadar tüm katmanları inceleyin.
          </p>
        </div>

        {/* Project Selector Tabs */}
        <div className="flex flex-wrap gap-2 sm:gap-3 mb-8">
          {PROJECTS.map((proj) => {
            const isSelected = proj.id === selectedProjectId;
            return (
              <button
                key={proj.id}
                onClick={() => setSelectedProjectId(proj.id)}
                className={`px-5 py-3 rounded-2xl text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center gap-2.5 ${
                  isSelected
                    ? 'bg-white text-black shadow-lg shadow-white/10 font-bold'
                    : 'bg-[#0A0A0C] border border-white/10 text-zinc-400 hover:text-white hover:border-white/20'
                }`}
              >
                <span className={`w-2 h-2 rounded-full ${isSelected ? 'bg-amber-500' : 'bg-zinc-600'}`} />
                <span>{proj.title}</span>
                <span className={`text-[11px] font-mono ${isSelected ? 'text-zinc-600' : 'text-zinc-500'}`}>
                  ({proj.area})
                </span>
              </button>
            );
          })}
        </div>

        {/* Main Interactive Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Visual Canvas (8 Cols) */}
          <div className="lg:col-span-8 space-y-4">
            
            {/* Layer Control Bar */}
            <div className="p-1.5 rounded-2xl bg-[#0D0D11] border border-white/10 flex items-center justify-between gap-1 shadow-xl">
              <div className="flex items-center gap-1 sm:gap-2 w-full">
                <button
                  onClick={() => setActiveLayer('wireframe')}
                  className={`flex-1 py-2.5 px-3 rounded-xl text-xs font-mono font-medium transition-all text-center flex items-center justify-center gap-1.5 ${
                    activeLayer === 'wireframe'
                      ? 'bg-amber-500 text-black font-bold shadow-md shadow-amber-500/20'
                      : 'text-zinc-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span>01</span>
                  <span className="hidden sm:inline">Eskiz & Çizim</span>
                </button>

                <button
                  onClick={() => setActiveLayer('render')}
                  className={`flex-1 py-2.5 px-3 rounded-xl text-xs font-mono font-medium transition-all text-center flex items-center justify-center gap-1.5 ${
                    activeLayer === 'render'
                      ? 'bg-amber-500 text-black font-bold shadow-md shadow-amber-500/20'
                      : 'text-zinc-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span>02</span>
                  <span className="hidden sm:inline">3D Render</span>
                </button>

                <button
                  onClick={() => setActiveLayer('final')}
                  className={`flex-1 py-2.5 px-3 rounded-xl text-xs font-mono font-medium transition-all text-center flex items-center justify-center gap-1.5 ${
                    activeLayer === 'final'
                      ? 'bg-white text-black font-bold shadow-md shadow-white/20'
                      : 'text-zinc-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span>03</span>
                  <span className="hidden sm:inline">Final Mekan</span>
                </button>
              </div>
            </div>

            {/* Image Canvas with Layer Filter Effect */}
            <div className="relative aspect-[16/10] rounded-3xl overflow-hidden border border-white/10 bg-black group shadow-2xl">
              <Image
                src={currentLayerData.image}
                alt={currentProject.title}
                fill
                priority
                className={`object-cover transition-all duration-700 ${
                  activeLayer === 'wireframe'
                    ? 'filter contrast-150 grayscale invert brightness-90 hue-rotate-180'
                    : activeLayer === 'render'
                    ? 'filter saturate-125 contrast-110'
                    : 'filter saturate-100'
                }`}
              />

              {/* Wireframe Architectural Blueprint Grid Overlay (Only when wireframe active) */}
              {activeLayer === 'wireframe' && (
                <div 
                  className="absolute inset-0 pointer-events-none opacity-30 bg-[linear-gradient(to_right,#3b82f615_1px,transparent_1px),linear-gradient(to_bottom,#3b82f615_1px,transparent_1px)] bg-[size:32px_32px]"
                />
              )}

              {/* Top Tag */}
              <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                <span className="px-3 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-white/15 text-white font-mono text-[11px] font-bold tracking-wider">
                  {currentLayerData.badge}
                </span>
              </div>

              {/* Bottom Caption Pill */}
              <div className="absolute bottom-4 inset-x-4 z-10 p-3.5 rounded-2xl bg-black/80 backdrop-blur-md border border-white/10 flex items-center justify-between text-xs text-zinc-300 font-sans">
                <span className="font-medium truncate pr-4">{currentLayerData.caption}</span>
                <span className="font-mono text-amber-400 shrink-0 font-bold">{currentProject.location}</span>
              </div>

            </div>

          </div>

          {/* Project Technical Sheet / Specs (4 Cols) */}
          <div className="lg:col-span-4 p-6 sm:p-8 rounded-3xl bg-[#0D0D11] border border-white/10 space-y-6">
            
            <div>
              <div className="text-amber-400 font-mono text-xs uppercase tracking-widest mb-1">
                Pafta #{currentProject.id.toUpperCase()}
              </div>
              <h3 className="text-2xl font-serif text-white font-normal mb-2">
                {currentProject.title}
              </h3>
              <p className="text-xs text-zinc-400 font-sans leading-relaxed">
                {currentProject.description}
              </p>
            </div>

            {/* Project Metrics */}
            <div className="grid grid-cols-2 gap-3 py-4 border-t border-b border-white/10 font-mono text-xs">
              <div>
                <span className="text-zinc-500 block text-[10px] uppercase">Toplam Alan</span>
                <span className="text-white font-bold text-sm">{currentProject.area}</span>
              </div>
              <div>
                <span className="text-zinc-500 block text-[10px] uppercase">Teslim Süresi</span>
                <span className="text-white font-bold text-sm">{currentProject.duration}</span>
              </div>
              <div>
                <span className="text-zinc-500 block text-[10px] uppercase">Teslim Yılı</span>
                <span className="text-white font-bold text-sm">{currentProject.year}</span>
              </div>
              <div>
                <span className="text-zinc-500 block text-[10px] uppercase">Konum</span>
                <span className="text-white font-bold text-sm truncate">{currentProject.location.split(',')[0]}</span>
              </div>
            </div>

            {/* Materials Used */}
            <div className="space-y-2.5">
              <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider block">
                Öne Çıkan İmalat & Malzemeler:
              </span>
              <ul className="space-y-1.5">
                {currentProject.materials.map((mat, i) => (
                  <li key={i} className="flex items-center gap-2 text-xs text-zinc-300">
                    <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>{mat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Action */}
            <a
              href="#kesif"
              className="w-full py-3.5 rounded-2xl bg-white text-black font-bold text-xs flex items-center justify-center gap-2 hover:bg-zinc-200 transition-colors shadow-lg shadow-white/10"
            >
              <span>Benzer Proje İçin Keşif İste</span>
              <ArrowRight className="w-4 h-4" />
            </a>

          </div>

        </div>

      </div>
    </section>
  );
};
