import React from 'react';
import type { Metadata } from 'next';
import { AuraStudioPage } from '@/components/demos/aura/AuraStudioPage';

export const metadata: Metadata = {
  title: 'Aura Studio — Lüks İç Mimarlık & Mekan Tasarımı | Canlı Demo',
  description: 'Three.js destekli akışkan heykel, katmanlı 3D render-fotoğraf geçişleri, öncesi/sonrası slider ve akıllı keşif formu ile mimarlık bienali standartlarında canlı demo.',
  robots: {
    index: true,
    follow: true,
  },
};

export default function AuraStudioPreviewPage() {
  return <AuraStudioPage />;
}
