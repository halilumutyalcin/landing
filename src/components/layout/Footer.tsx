'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  ShieldCheck, 
  Mail, 
  Phone, 
  MapPin, 
  ArrowUpRight,
  FileText 
} from 'lucide-react';
import { siteConfig } from '@/config/site.config';
import { generateWhatsAppUrl } from '@/lib/utils';
import { LegalModal } from './LegalModal';

export const Footer: React.FC = () => {
  const [legalModalType, setLegalModalType] = useState<'kvkk' | 'terms' | 'privacy' | null>(null);

  return (
    <footer className="bg-black border-t border-white/[0.08] relative overflow-hidden pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Guarantee Banner - Clean, Crisp Surface Without Fuzzy Blur Banding */}
        <div className="bg-[#0A0A0C] rounded-2xl p-6 sm:p-8 mb-16 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="flex items-center gap-4">
            <ShieldCheck className="w-8 h-8 text-amber-400 shrink-0" />
            <div>
              <h4 className="text-lg font-bold text-white font-display">
                3 Yıl Domain + SSL + Hosting Dahil
              </h4>
              <p className="text-sm text-slate-300 mt-1 max-w-xl leading-relaxed">
                Tüm paketlerimizde ilk 3 yıl sıfır yenileme masrafı: Yüksek hızlı küresel bulut barındırması ve kurumsal alan adınız fiyata eksiksiz dahildir.
              </p>
            </div>
          </div>
          <a
            href={generateWhatsAppUrl({})}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl bg-white hover:bg-zinc-200 text-black font-bold text-sm transition-all shrink-0 flex items-center gap-2"
          >
            <span>Hemen Bilgi Alın</span>
            <ArrowUpRight className="w-4 h-4 text-zinc-700" />
          </a>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-white flex items-center justify-center shadow-md shrink-0 select-none">
                <span className="text-black font-black text-lg leading-none tracking-tight">M</span>
              </div>
              <span className="text-2xl font-black text-white font-display">
                Medi<span className="text-amber-400">Web</span>
              </span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Sektörünüze özel tasarlanmış, 3–10 iş gününde anahtar teslim yayına alınan yeni nesil ürünleştirilmiş web ajansı vitrin platformu.
            </p>
            <div className="flex flex-col gap-2 pt-2 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{siteConfig.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-white transition-colors">{siteConfig.email}</a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{siteConfig.phoneDisplay}</span>
              </div>
              <div className="pt-2 border-t border-white/5 text-[11px] text-slate-400 space-y-0.5">
                <div><span className="text-slate-300 font-semibold">Hizmet Sağlayıcı:</span> {siteConfig.legalEntity.title}, {siteConfig.legalEntity.businessType} · {siteConfig.legalEntity.taxOffice} · {siteConfig.legalEntity.taxNumber}</div>
              </div>
            </div>
          </div>

          {/* Paketler & Hizmetler */}
          <div>
            <h5 className="text-sm font-bold text-white uppercase tracking-wider mb-4 font-display">
              Paketler & Fiyatlar
            </h5>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link href="/#paketler" className="hover:text-white transition-colors">
                  Başlangıç (₺17.500)
                </Link>
              </li>
              <li>
                <Link href="/#paketler" className="hover:text-white transition-colors font-semibold text-amber-400">
                  Profesyonel (₺32.500)
                </Link>
              </li>
              <li>
                <Link href="/#paketler" className="hover:text-white transition-colors">
                  Kurumsal (₺59.900)
                </Link>
              </li>
              <li>
                <Link href="/#vergi-avantaji" className="hover:text-white transition-colors">
                  Vergi İndirimi Simülasyonu
                </Link>
              </li>
              <li>
                <Link href="/#ek-hizmetler" className="hover:text-white transition-colors">
                  AI Asistan & Ek Modüller
                </Link>
              </li>
            </ul>
          </div>

          {/* Kurumsal & Yasal */}
          <div>
            <h5 className="text-sm font-bold text-white uppercase tracking-wider mb-4 font-display">
              Kurumsal & Yasal
            </h5>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link href="/#nasil-calisir" className="hover:text-white transition-colors">
                  Nasıl Çalışır? (4 Adım)
                </Link>
              </li>
              <li>
                <Link href="/#neden-biz" className="hover:text-white transition-colors">
                  Geleneksel Ajans vs. Biz
                </Link>
              </li>
              <li>
                <button 
                  onClick={() => setLegalModalType('kvkk')}
                  className="hover:text-white transition-colors text-left flex items-center gap-1.5 underline-offset-4 hover:underline cursor-pointer group py-0.5"
                >
                  <FileText className="w-3.5 h-3.5 text-amber-400/80 group-hover:text-amber-400 shrink-0" />
                  <span>KVKK Aydınlatma Metni</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setLegalModalType('terms')}
                  className="hover:text-white transition-colors text-left flex items-center gap-1.5 underline-offset-4 hover:underline cursor-pointer group py-0.5"
                >
                  <FileText className="w-3.5 h-3.5 text-amber-400/80 group-hover:text-amber-400 shrink-0" />
                  <span>Hizmet Sözleşmesi &amp; Şartlar</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setLegalModalType('privacy')}
                  className="hover:text-white transition-colors text-left flex items-center gap-1.5 underline-offset-4 hover:underline cursor-pointer group py-0.5"
                >
                  <FileText className="w-3.5 h-3.5 text-amber-400/80 group-hover:text-amber-400 shrink-0" />
                  <span>Gizlilik &amp; Çerez Politikası</span>
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} MediWeb · {siteConfig.legalEntity.title}. Tüm hakları saklıdır.</p>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-slate-400">
              <span className="w-2 h-2 rounded-full bg-amber-400"></span>
              3 Yıl Kesintisiz Barındırma &amp; Yüksek Hızlı CDN Altyapısı
            </span>
          </div>
        </div>
      </div>

      <LegalModal 
        isOpen={legalModalType !== null} 
        onClose={() => setLegalModalType(null)} 
        type={legalModalType || 'kvkk'} 
      />
    </footer>
  );
};
