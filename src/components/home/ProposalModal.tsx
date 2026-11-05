'use client';

import React, { useState } from 'react';
import { 
  X, 
  Check, 
  MessageSquare, 
  Calculator, 
  Sparkles, 
  Building2, 
  UserCheck, 
  ShieldCheck,
  ChevronRight
} from 'lucide-react';
import { siteConfig } from '@/config/site.config';
import { formatCurrency, generateWhatsAppUrl } from '@/lib/utils';
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon';

interface ProposalModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPackage?: 'starter' | 'pro' | 'enterprise';
}

export const ProposalModal: React.FC<ProposalModalProps> = ({
  isOpen,
  onClose,
  initialPackage = 'pro'
}) => {
  const [selectedSector, setSelectedSector] = useState<string>('Hukuk & Avukatlık');
  const [selectedPackage, setSelectedPackage] = useState<'starter' | 'pro' | 'enterprise'>(initialPackage);
  const [billingModel, setBillingModel] = useState<'onetime' | 'waas'>('onetime');
  const [selectedExtras, setSelectedExtras] = useState<string[]>([]);
  const [companyType, setCompanyType] = useState<'ltd' | 'individual'>('ltd');

  if (!isOpen) return null;

  const pkg = siteConfig.packages.find((p) => p.id === selectedPackage) || siteConfig.packages[1];
  const basePrice = billingModel === 'waas' ? (pkg.waasSetupPrice || 2500) : pkg.price;

  // Extra service prices for instant calculation
  const extraPrices: Record<string, number> = {
    '360-launch': 9500,
    'white-label': 3500,
    'ai-assistant': 4500,
    'whatsapp-business': 2500,
    'sms-integration': 1900,
    'extra-lang': 7500,
    'admin-cms': 9900,
    'advanced-seo': 6500,
  };

  const extrasTotal = selectedExtras.reduce((acc, curr) => acc + (extraPrices[curr] || 0), 0);
  const subTotal = basePrice + extrasTotal;
  const kdvAmount = Math.round(subTotal * 0.20);
  const totalWithKdv = subTotal + kdvAmount;

  // Net cost calculation
  const taxDeductionRate = companyType === 'ltd' ? 0.25 : 0.40;
  const corporateTaxSaving = Math.round(subTotal * taxDeductionRate);
  const netEffectiveCost = totalWithKdv - kdvAmount - corporateTaxSaving;

  const toggleExtra = (id: string) => {
    setSelectedExtras((prev) => 
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleWhatsAppSubmit = () => {
    const text = `Merhaba MediWeb! Landing page üzerinden teklif konfigürasyonu oluşturdum:
- Sektörüm: ${selectedSector}
- Seçtiğim Paket: ${pkg.name} (${billingModel === 'waas' ? `Esnek Aylık Model: ${pkg.waasSetupFormatted} Kurulum + ${pkg.waasMonthlyFormatted}/ay` : `${pkg.priceFormatted} + KDV`})
- Ödeme Modeli: ${billingModel === 'waas' ? 'Sıfır Peşinatla Başlayın: Esnek Aylık Model (Sabit Taksit)' : 'Tek Seferlik (3 Yıl Boyunca Sıfır Ek Masraf: 0 ₺ Yenileme Güvencesi)'}
- Ek Hizmetler: ${selectedExtras.length > 0 ? selectedExtras.join(', ') : 'Seçilmedi'}
- Şirket Türü: ${companyType === 'ltd' ? 'LTD./A.Ş.' : 'Şahıs İşletmesi'}
- Tahmini Net Başlangıç Maliyeti: ${formatCurrency(netEffectiveCost)} (KDV Mahsubu Dahil)${billingModel === 'waas' ? ` + ${pkg.waasMonthlyFormatted}/ay` : ''}

Detayları görüşüp yayına almak için bilgi alabilir miyim?`;

    const url = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        role="dialog"
        aria-modal="true"
        aria-labelledby="proposal-modal-title"
        className="bg-[#0D121F] rounded-3xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl relative"
      >
        {/* Header */}
        <div className="p-6 border-b border-white/5 flex items-center justify-between sticky top-0 bg-[#0D121F]/90 backdrop-blur-md z-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600/20 text-blue-400 flex items-center justify-center">
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <h3 id="proposal-modal-title" className="text-lg font-bold text-white">Akıllı Teklif & Maliyet Hesaplayıcı</h3>
              <p className="text-xs text-slate-400">İhtiyacınızı seçin, anında net maliyeti ve vergi avantajını görün</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            aria-label="Hesaplayıcıyı Kapat"
            className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white flex items-center justify-center transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* 1. Sector Choice */}
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 block">
              1. Sektörünüzü Seçin
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {[
                'Hukuk & Avukatlık',
                'Sağlık & Klinik',
                'Sanayi & İmalatçı',
                'Mali Müşavir & YMM',
                'Emlak & Gayrimenkul',
                'Diğer Kurumsal',
              ].map((sec) => (
                <button
                  key={sec}
                  onClick={() => setSelectedSector(sec)}
                  className={`p-2.5 rounded-xl text-left text-xs transition-all ${
                    selectedSector === sec
                      ? 'bg-blue-600 text-white font-semibold shadow-md'
                      : 'bg-white/5 text-slate-300 hover:bg-white/10'
                  }`}
                >
                  {sec}
                </button>
              ))}
            </div>
          </div>

          {/* 2. Package Choice & Billing Model */}
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-400">
                2. Paketinizi & Ödeme Modelini Belirleyin
              </label>
              <div className="inline-flex items-center p-0.5 rounded-lg bg-black/40 text-[11px]">
                <button
                  onClick={() => setBillingModel('onetime')}
                  className={`px-2.5 py-1 rounded-md font-bold transition-all ${
                    billingModel === 'onetime' ? 'bg-blue-600 text-white' : 'text-slate-400'
                  }`}
                >
                  Tek Seferlik (3 Yıl 0 ₺ Masraf)
                </button>
                <button
                  onClick={() => setBillingModel('waas')}
                  className={`px-2.5 py-1 rounded-md font-bold transition-all ${
                    billingModel === 'waas' ? 'bg-emerald-600 text-white' : 'text-slate-400'
                  }`}
                >
                  Sıfır Peşinat: Esnek Aylık Model
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {siteConfig.packages.map((p) => {
                const isSelected = selectedPackage === p.id;
                const priceLabel = billingModel === 'waas'
                  ? `${p.waasMonthlyFormatted}/ay`
                  : p.priceFormatted;
                const subLabel = billingModel === 'waas'
                  ? `${p.waasSetupFormatted} Kurulum`
                  : p.deliveryTime;

                return (
                  <button
                    key={p.id}
                    onClick={() => setSelectedPackage(p.id)}
                    className={`p-3.5 rounded-2xl text-left transition-all relative ${
                      isSelected
                        ? 'bg-blue-600 text-white shadow-lg'
                        : 'bg-white/5 text-slate-300 hover:bg-white/10'
                    }`}
                  >
                    {p.isPopular && (
                      <span className="absolute -top-2 right-2 px-2 py-0.5 rounded-full bg-emerald-500 text-[9px] font-black uppercase text-white shadow">
                        Önerilen
                      </span>
                    )}
                    <div className="text-xs font-bold text-slate-200">{p.name}</div>
                    <div className="text-base font-black text-white font-mono mt-1">{priceLabel}</div>
                    <div className="text-[10px] text-slate-400 mt-1">{subLabel}</div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 3. Extras */}
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 block">
              3. İsteğe Bağlı Ek Modüller & Kurumsal Çözümler
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {[
                { id: '360-launch', label: '360° Logo & Kurumsal Kimlik Paketi', price: '+9.500 ₺' },
                { id: 'white-label', label: 'White-Label / Ajans İmzası Kaldırma', price: '+3.500 ₺' },
                { id: 'ai-assistant', label: 'AI Ziyaretçi Asistanı', price: '+4.500 ₺' },
                { id: 'whatsapp-business', label: 'WhatsApp Departman Yönlendirme', price: '+2.500 ₺' },
                { id: 'extra-lang', label: 'Ek Yabancı Dil (İngilizce/Almanca)', price: '+7.500 ₺' },
                { id: 'admin-cms', label: 'Headless CMS Yönetim Paneli', price: '+9.900 ₺' },
              ].map((extra) => {
                const isChecked = selectedExtras.includes(extra.id);
                return (
                  <button
                    key={extra.id}
                    onClick={() => toggleExtra(extra.id)}
                    className={`p-3 rounded-xl flex items-center justify-between text-xs transition-all ${
                      isChecked
                        ? 'bg-emerald-600/30 text-white font-semibold'
                        : 'bg-white/5 text-slate-400 hover:bg-white/10'
                    }`}
                  >
                    <span>{extra.label}</span>
                    <span className="font-mono text-emerald-400 text-[11px] font-bold">{extra.price}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 4. Company Tax Saving Simulator - Zero Outer Border */}
          <div className="p-4 rounded-2xl bg-[#0B0F19]">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold text-slate-300 flex items-center gap-2">
                <Building2 className="w-4 h-4 text-cyan-400" />
                Şirket Türü & Vergi İndirimi
              </span>
              <div className="flex items-center gap-1 bg-black/40 p-1 rounded-xl">
                <button
                  onClick={() => setCompanyType('ltd')}
                  className={`px-3 py-1 rounded-lg text-[11px] font-bold transition-all ${
                    companyType === 'ltd' ? 'bg-cyan-600 text-white' : 'text-slate-400'
                  }`}
                >
                  LTD. / A.Ş. (%25)
                </button>
                <button
                  onClick={() => setCompanyType('individual')}
                  className={`px-3 py-1 rounded-lg text-[11px] font-bold transition-all ${
                    companyType === 'individual' ? 'bg-emerald-600 text-white' : 'text-slate-400'
                  }`}
                >
                  Şahıs (%40)
                </button>
              </div>
            </div>

            {/* Calculations Breakdown */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center pt-2 border-t border-white/5">
              <div className="p-2 rounded-lg bg-black/30">
                <div className="text-[10px] text-slate-400 uppercase">Hizmet Toplamı</div>
                <div className="text-xs font-mono font-bold text-slate-200 mt-0.5">{formatCurrency(subTotal)}</div>
              </div>
              <div className="p-2 rounded-lg bg-black/30">
                <div className="text-[10px] text-slate-400 uppercase">+%20 KDV</div>
                <div className="text-xs font-mono font-bold text-slate-300 mt-0.5">{formatCurrency(kdvAmount)}</div>
              </div>
              <div className="p-2 rounded-lg bg-black/30">
                <div className="text-[10px] text-cyan-400 uppercase">Vergi Tasarrufu</div>
                <div className="text-xs font-mono font-bold text-cyan-400 mt-0.5">-{formatCurrency(corporateTaxSaving)}</div>
              </div>
              <div className="p-2 rounded-lg bg-emerald-500/10">
                <div className="text-[10px] text-emerald-300 font-bold uppercase">Net Maliyet</div>
                <div className="text-sm font-mono font-black text-emerald-400 mt-0.5">{formatCurrency(netEffectiveCost)}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-6 bg-[#0B0F19] border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <div className="text-xs text-slate-400">
              {billingModel === 'waas' ? 'Efektif Başlangıç & Aylık Taahhüt:' : 'Efektif Net Maliyetiniz:'}
            </div>
            <div className="text-xl sm:text-2xl font-black text-emerald-400 font-mono">
              {formatCurrency(netEffectiveCost)}
              {billingModel === 'waas' && (
                <span className="text-base sm:text-lg text-white font-mono font-bold ml-1.5">
                  + {pkg.waasMonthlyFormatted}/ay
                </span>
              )}
              <span className="text-xs text-slate-400 font-sans font-normal ml-2 block sm:inline">
                (KDV & Vergi İndirimi Sonrası)
              </span>
            </div>
          </div>

          <button
            onClick={handleWhatsAppSubmit}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-xs sm:text-sm shadow-lg shadow-emerald-600/25 flex items-center justify-center gap-2 transition-all hover:scale-[1.02]"
          >
            <WhatsAppIcon className="w-4 h-4 fill-current shrink-0" />
            <span>Bu Teklifi WhatsApp'tan Al</span>
          </button>
        </div>
      </div>
    </div>
  );
};
