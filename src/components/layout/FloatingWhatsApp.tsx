'use client';

import React, { useState } from 'react';
import { X, Send } from 'lucide-react';
import { generateWhatsAppUrl } from '@/lib/utils';
import { siteConfig } from '@/config/site.config';
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<string>('Profesyonel (32.500 ₺)');
  const [sector, setSector] = useState<string>('Hukuk / Avukatlık');

  const handleStartChat = () => {
    const customMessage = `Merhaba, "${sector}" sektörü için "${selectedPackage}" paketi hakkında bilgi almak ve canlı demo incelemesi talep ediyorum.`;
    window.open(generateWhatsAppUrl({ customMessage }), '_blank');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-16 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end select-none">
      {/* Popover Card */}
      {isOpen && (
        <div className="mb-4 w-80 sm:w-96 bg-[#111827] border border-emerald-500/30 rounded-2xl p-5 shadow-2xl shadow-emerald-950/80 text-left animate-in slide-in-from-bottom-5 duration-200 backdrop-blur-xl">
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                  <WhatsAppIcon className="w-5 h-5 fill-current" />
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-500 ring-2 ring-[#111827]"></span>
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">MediWeb Canlı Danışma</h4>
                <p className="text-[11px] text-emerald-400 font-medium">Şu an çevrimiçi · 3 dk içinde yanıt</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
              aria-label="Kapat"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="my-4 p-3 rounded-xl bg-white/5 border border-white/5 text-xs text-slate-300 leading-relaxed">
            Merhaba! Firmanıza özel kurumsal web mimarisi ve paketlerimiz hakkında doğrudan bilgi alabilirsiniz.
          </div>

          <div className="space-y-3">
            <div>
              <label className="block text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1">
                Sektörünüz
              </label>
              <select
                value={sector}
                onChange={(e) => setSector(e.target.value)}
                className="w-full bg-black border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-emerald-500"
              >
                <option value="Hukuk / Avukatlık">Hukuk / Avukatlık</option>
                <option value="Sağlık / Klinik">Sağlık / Diş / Klinik</option>
                <option value="Sanayi / İmalatçı">Sanayi / İmalatçı</option>
                <option value="Mali Müşavir / Finans">Mali Müşavir / YMM</option>
                <option value="Emlak / Gayrimenkul">Emlak / Gayrimenkul</option>
                <option value="Diğer Kurumsal">Diğer Kurumsal Sektör</option>
              </select>
            </div>

            <div>
              <label className="block text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1">
                İlgilendiğiniz Paket
              </label>
              <select
                value={selectedPackage}
                onChange={(e) => setSelectedPackage(e.target.value)}
                className="w-full bg-black border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-emerald-500"
              >
                <option value="Başlangıç (17.500 ₺)">Başlangıç Paketi (17.500 ₺)</option>
                <option value="Profesyonel (32.500 ₺)">Profesyonel Paket (32.500 ₺)</option>
                <option value="Kurumsal (59.900 ₺)">Kurumsal Paket (59.900 ₺)</option>
              </select>
            </div>

            <button
              onClick={handleStartChat}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-lg shadow-emerald-600/30 transition-all hover:scale-[1.02]"
            >
              <WhatsAppIcon className="w-3.5 h-3.5 fill-current shrink-0" />
              <span>WhatsApp Sohbetini Başlat</span>
            </button>
          </div>
        </div>
      )}

      {/* Trigger Button with Official WhatsApp Icon */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center gap-2.5 px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-xl shadow-emerald-600/40 hover:shadow-emerald-600/60 transition-all duration-300 hover:scale-105 active:scale-95"
        aria-label="WhatsApp Canlı Danışma"
      >
        <WhatsAppIcon className="w-5 h-5 fill-current shrink-0" />
        <span className="font-bold text-sm hidden sm:inline">WhatsApp Hızlı Destek</span>
      </button>
    </div>
  );
};
