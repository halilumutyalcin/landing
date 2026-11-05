'use client';

import React from 'react';
import { 
  LayoutGrid, 
  Scale, 
  Stethoscope, 
  Factory, 
  Calculator, 
  Home
} from 'lucide-react';
import { SECTORS } from '@/config/demos.config';

interface SectorTabsProps {
  activeSector: string;
  onSelectSector: (sectorId: string) => void;
}

export const SectorTabs: React.FC<SectorTabsProps> = ({
  activeSector,
  onSelectSector,
}) => {
  const iconMap: Record<string, React.FC<{ className?: string }>> = {
    all: LayoutGrid,
    hukuk: Scale,
    klinik: Stethoscope,
    sanayi: Factory,
    muhasebe: Calculator,
    emlak: Home,
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6">
      {/* Wrapped, non-scrolling multi-row sector selector - Extensible and fully visible at once */}
      <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
        {SECTORS.map((sector) => {
          const Icon = iconMap[sector.id] || LayoutGrid;
          const isActive = activeSector === sector.id;

          return (
            <button
              key={sector.id}
              onClick={() => onSelectSector(sector.id)}
              className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                isActive
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                  : 'bg-[#121622] text-slate-300 hover:text-white hover:bg-[#1C2436]'
              }`}
            >
              <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-blue-400'}`} />
              <span>{sector.name}</span>
              <span
                className={`text-[10px] px-1.5 py-0.5 rounded-full font-mono font-bold ${
                  isActive
                    ? 'bg-black/35 text-white'
                    : 'bg-white/10 text-slate-200'
                }`}
              >
                {sector.count}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
