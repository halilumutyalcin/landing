'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  ArrowRight, 
  Menu, 
  X, 
  Sparkles
} from 'lucide-react';
import { generateWhatsAppUrl } from '@/lib/utils';
import { siteConfig } from '@/config/site.config';
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled 
          ? 'bg-[#0B0E14]/95 backdrop-blur-md border-b border-white/10 py-3.5 shadow-xl' 
          : 'bg-[#0B0E14]/80 backdrop-blur-sm border-b border-white/5 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white font-black text-base shadow-md">
            M
          </div>
          <div>
            <div className="text-lg font-black text-white tracking-tight leading-none">
              Medi<span className="text-blue-400">Web</span>
            </div>
            <div className="text-[11px] text-slate-400 mt-0.5 font-medium">
              Yeni Nesil Web Ajansı
            </div>
          </div>
        </Link>

        {/* Clean, Spacious Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <Link 
            href="/#tasarimlar" 
            className="hover:text-white transition-colors"
          >
            Sektörel Mimariler
          </Link>
          <Link 
            href="/#nasil-calisir" 
            className="hover:text-white transition-colors"
          >
            Nasıl Çalışır?
          </Link>
          <Link 
            href="/#paketler" 
            className="hover:text-white transition-colors"
          >
            Paketler &amp; Fiyat
          </Link>
          <Link 
            href="/#neden-biz" 
            className="hover:text-white transition-colors"
          >
            İlkelerimiz
          </Link>
          <Link 
            href="/#sss" 
            className="hover:text-white transition-colors"
          >
            SSS
          </Link>
        </nav>

        {/* Action Button */}
        <div className="hidden sm:flex items-center gap-4">
          <a
            href={generateWhatsAppUrl({
              customMessage: 'Merhaba MediWeb! Web sitesi yaptırmak istiyorum, paketler ve süreç hakkında bilgi alabilir miyim?'
            })}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs tracking-wide shadow-md transition-all hover:scale-[1.02]"
          >
            <WhatsAppIcon className="w-4 h-4 fill-current shrink-0" />
            <span>WhatsApp ile Danışın</span>
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
          aria-label="Menü"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0B0E14] border-b border-white/10 px-5 pt-3 pb-6 space-y-3">
          <div className="space-y-1 text-sm font-medium">
            <Link
              href="/#tasarimlar"
              onClick={() => setMobileMenuOpen(false)}
              className="block p-3 rounded-lg text-blue-400 font-bold bg-blue-500/10"
            >
              Sektörel Mimariler (Canlı Vitrinler)
            </Link>
            <Link
              href="/#nasil-calisir"
              onClick={() => setMobileMenuOpen(false)}
              className="block p-3 rounded-lg text-slate-200 hover:bg-white/5"
            >
              Nasıl Çalışır? (3–5 Günde Teslim)
            </Link>
            <Link
              href="/#paketler"
              onClick={() => setMobileMenuOpen(false)}
              className="block p-3 rounded-lg text-slate-200 hover:bg-white/5"
            >
              Paketler &amp; Fiyatlar (17.500 ₺'den başlayan)
            </Link>
            <Link
              href="/#neden-biz"
              onClick={() => setMobileMenuOpen(false)}
              className="block p-3 rounded-lg text-slate-200 hover:bg-white/5"
            >
              İlkelerimiz &amp; Şeffaf Taahhütler
            </Link>
            <Link
              href="/#sss"
              onClick={() => setMobileMenuOpen(false)}
              className="block p-3 rounded-lg text-slate-200 hover:bg-white/5"
            >
              Sıkça Sorulan Sorular
            </Link>
          </div>

          <div className="pt-2">
            <a
              href={generateWhatsAppUrl({})}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-emerald-600 text-white font-bold text-sm shadow"
            >
              <WhatsAppIcon className="w-4 h-4 fill-current shrink-0" />
              <span>WhatsApp ile Hemen Görüşün</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
