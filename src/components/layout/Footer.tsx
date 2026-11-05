'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Sparkles, 
  ShieldCheck, 
  Zap, 
  Clock, 
  Mail, 
  Phone, 
  MapPin, 
  MessageSquare, 
  ArrowUpRight 
} from 'lucide-react';
import { siteConfig } from '@/config/site.config';
import { SECTORS } from '@/config/demos.config';
import { generateWhatsAppUrl } from '@/lib/utils';
import { LegalModal } from './LegalModal';

export const Footer: React.FC = () => {
  const [legalModalType, setLegalModalType] = useState<'kvkk' | 'terms' | 'privacy' | null>(null);

  return (
    <footer className="bg-[#080B12] border-t border-white/[0.08] relative overflow-hidden pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Guarantee Banner - Clean, Crisp Surface Without Fuzzy Blur Banding */}
        <div className="bg-[#0E121B] rounded-2xl p-6 sm:p-8 mb-16 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="flex items-center gap-4">
            <ShieldCheck className="w-8 h-8 text-emerald-400 shrink-0" />
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
            className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm transition-all shrink-0 flex items-center gap-2"
          >
            <span>Hemen Bilgi Alın</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white font-black text-base shadow-md">
                M
              </div>
              <span className="text-2xl font-black text-white font-display">
                Medi<span className="text-blue-400">Web</span>
              </span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Sektörünüze özel tasarlanmış, 3–5 günde anahtar teslim yayına alınan yeni nesil ürünleştirilmiş web ajansı vitrin platformu.
            </p>
            <div className="flex flex-col gap-2 pt-2 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-brand-400 shrink-0" />
                <span>{siteConfig.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-brand-400 shrink-0" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-white transition-colors">{siteConfig.email}</a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-brand-400 shrink-0" />
                <span>{siteConfig.phoneDisplay}</span>
              </div>
            </div>
          </div>

          {/* Sektörel Çözümler (SEO & Vitrin) */}
          <div>
            <h5 className="text-sm font-bold text-white uppercase tracking-wider mb-4 font-display">
              Sektörel Çözümler
            </h5>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link href="/sektorler/dis-klinigi-web-sitesi" className="hover:text-white transition-colors">
                  Diş Kliniği Web Sitesi
                </Link>
              </li>
              <li>
                <Link href="/sektorler/hukuk-burosu-web-sitesi" className="hover:text-white transition-colors">
                  Hukuk Bürosu Web Sitesi
                </Link>
              </li>
              <li>
                <Link href="/sektorler/mimarlik-web-sitesi" className="hover:text-white transition-colors">
                  Mimarlık Ofisi Web Sitesi
                </Link>
              </li>
              <li>
                <Link href="/sektorler/lojistik-web-sitesi" className="hover:text-white transition-colors">
                  Lojistik Firması Web Sitesi
                </Link>
              </li>
              <li>
                <Link href="/sektorler/mali-musavir-web-sitesi" className="hover:text-white transition-colors">
                  Mali Müşavir & YMM Sitesi
                </Link>
              </li>
              <li>
                <Link href="/sektorler" className="text-blue-400 font-semibold hover:text-blue-300 transition-colors flex items-center gap-1 pt-1">
                  <span>Tüm Sektörel Paketler</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Paketler & Hizmetler */}
          <div>
            <h5 className="text-sm font-bold text-white uppercase tracking-wider mb-4 font-display">
              Paketler & Fiyatlar
            </h5>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link href="/#paketler" className="hover:text-white transition-colors">
                  Başlangıç (₺16.900)
                </Link>
              </li>
              <li>
                <Link href="/#paketler" className="hover:text-white transition-colors font-semibold text-brand-300">
                  Profesyonel (₺29.900)
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
                <Link href="/bolgeler" className="hover:text-white transition-colors">
                  Hizmet Bölgelerimiz (13 İlçe)
                </Link>
              </li>
              <li>
                <button 
                  onClick={() => setLegalModalType('kvkk')}
                  className="hover:text-white transition-colors text-left"
                >
                  KVKK Aydınlatma Metni
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setLegalModalType('terms')}
                  className="hover:text-white transition-colors text-left"
                >
                  Hizmet Sözleşmesi
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setLegalModalType('privacy')}
                  className="hover:text-white transition-colors text-left"
                >
                  Gizlilik & Çerez Politikası
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} MediWeb Dijital Çözümler A.Ş. Tüm hakları saklıdır.</p>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-slate-400">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              3 Yıl Kesintisiz Barındırma & Hız Garantisi
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
