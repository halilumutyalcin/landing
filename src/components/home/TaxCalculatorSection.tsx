'use client';

import React, { useState } from 'react';
import { 
  Building2, 
  UserCheck, 
  CheckCircle2,
  Printer
} from 'lucide-react';
import { siteConfig } from '@/config/site.config';
import { formatCurrency } from '@/lib/utils';

export const TaxCalculatorSection: React.FC = () => {
  const [selectedPackageId, setSelectedPackageId] = useState<string>('pro');
  const [companyType, setCompanyType] = useState<'ltd' | 'individual'>('ltd');
  const [gvRate, setGvRate] = useState<number>(35);
  const [canOffsetKdv, setCanOffsetKdv] = useState<boolean>(true);

  const gvRates = [15, 20, 27, 35, 40];

  const packagesInfo: Record<string, { name: string; price: number }> = {
    starter: { name: 'Başlangıç Paketi', price: 17500 },
    pro: { name: 'Profesyonel Paketi', price: 32500 },
    enterprise: { name: 'Kurumsal Paket', price: 59900 },
  };

  const currentPkg = packagesInfo[selectedPackageId] || packagesInfo.pro;
  const currentKdv = Math.round(currentPkg.price * 0.20);
  const totalWithKdv = currentPkg.price + currentKdv;
  const effectiveTaxRate = companyType === 'ltd' ? 25 : gvRate;
  const currentTaxSaving = Math.round(currentPkg.price * (effectiveTaxRate / 100));
  const currentNetCost = canOffsetKdv 
    ? currentPkg.price - currentTaxSaving 
    : (currentPkg.price + currentKdv) - currentTaxSaving;

  const handlePrint = () => {
    if (typeof window !== 'undefined') {
      window.print();
    }
  };

  return (
    <section id="vergi-avantaji" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header - Clean & Direct */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-2">
            İnteraktif Vergi Simülatörü
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
            Şirketler İçin Tahmini Net Maliyet Hesabı
          </h2>
          <p className="text-base text-slate-300 leading-relaxed">
            Tüm paket fiyatlarımız KDV hariçtir; resmî faturada %20 KDV eklenir. Fatura bedeli işletme gideri veya amortisman kapsamında değerlendirildiğinde KDV mahsubu ve vergi tasarrufuyla fiili net maliyet hafifler. <em>(Bilgilendirme simülasyonudur; nihai muhasebeleştirme ve vergi etkisi için mali müşavirinize danışınız.)</em>
          </p>
        </div>

        {/* BALANCED 2-COLUMN SIMULATOR CARD */}
        <div className="max-w-4xl mx-auto bg-[#0A0A0C] border border-white/[0.08] rounded-3xl p-6 sm:p-8 mb-12 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            
            {/* Left Column: Selections */}
            <div className="flex flex-col justify-between space-y-6">
              <div className="space-y-5">
                {/* 1. Paket Seçimi */}
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                    1. Paket Seçimi
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    <button
                      type="button"
                      onClick={() => setSelectedPackageId('starter')}
                      className={`p-3 rounded-xl border text-center transition-all ${
                        selectedPackageId === 'starter'
                          ? 'bg-white text-black border-white font-bold shadow-md'
                          : 'bg-white/[0.03] text-zinc-300 border-white/10 hover:border-white/20'
                      }`}
                    >
                      <div className="text-xs font-bold truncate">Başlangıç</div>
                      <div className="text-[11px] mt-0.5 opacity-80">17.500 ₺</div>
                    </button>
                    <button
                      type="button"
                      onClick={() => setSelectedPackageId('pro')}
                      className={`p-3 rounded-xl border text-center transition-all ${
                        selectedPackageId === 'pro'
                          ? 'bg-white text-black border-white font-bold shadow-md'
                          : 'bg-white/[0.03] text-zinc-300 border-white/10 hover:border-white/20'
                      }`}
                    >
                      <div className="text-xs font-bold truncate">Profesyonel</div>
                      <div className="text-[11px] mt-0.5 opacity-80">32.500 ₺</div>
                    </button>
                    <button
                      type="button"
                      onClick={() => setSelectedPackageId('enterprise')}
                      className={`p-3 rounded-xl border text-center transition-all ${
                        selectedPackageId === 'enterprise'
                          ? 'bg-white text-black border-white font-bold shadow-md'
                          : 'bg-white/[0.03] text-zinc-300 border-white/10 hover:border-white/20'
                      }`}
                    >
                      <div className="text-xs font-bold truncate">Kurumsal</div>
                      <div className="text-[11px] mt-0.5 opacity-80">59.900 ₺</div>
                    </button>
                  </div>
                </div>

                {/* 2. Şirket Türü */}
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                    2. Şirket Türünüz
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setCompanyType('ltd')}
                      className={`p-3 rounded-xl border flex items-center gap-2.5 transition-all text-left ${
                        companyType === 'ltd'
                          ? 'bg-amber-400 text-black border-amber-400 font-bold shadow-md'
                          : 'bg-white/[0.03] text-zinc-300 border-white/10 hover:border-white/20'
                      }`}
                    >
                      <Building2 className="w-4 h-4 shrink-0" />
                      <div>
                        <div className="text-xs font-bold">LTD. / A.Ş.</div>
                        <div className="text-[10px] opacity-80">%25 Kurumlar V.</div>
                      </div>
                    </button>
                    <button
                      type="button"
                      onClick={() => setCompanyType('individual')}
                      className={`p-3 rounded-xl border flex items-center gap-2.5 transition-all text-left ${
                        companyType === 'individual'
                          ? 'bg-amber-400 text-black border-amber-400 font-bold shadow-md'
                          : 'bg-white/[0.03] text-zinc-300 border-white/10 hover:border-white/20'
                      }`}
                    >
                      <UserCheck className="w-4 h-4 shrink-0" />
                      <div>
                        <div className="text-xs font-bold">Şahıs İşletmesi</div>
                        <div className="text-[10px] opacity-80">%{gvRate} Gelir V. Dilimi</div>
                      </div>
                    </button>
                  </div>

                  {/* GV Dilim Seçimi */}
                  {companyType === 'individual' && (
                    <div className="mt-2.5 p-2.5 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-between text-xs animate-in fade-in">
                      <span className="text-zinc-400 text-[11px]">Vergi Dilimi:</span>
                      <div className="flex items-center gap-1">
                        {gvRates.map((rate) => (
                          <button
                            key={rate}
                            type="button"
                            onClick={() => setGvRate(rate)}
                            className={`px-2 py-0.5 rounded text-[11px] font-bold transition-all ${
                              gvRate === rate
                                ? 'bg-amber-400 text-black'
                                : 'text-zinc-400 hover:text-white bg-white/5'
                            }`}
                          >
                            %{rate}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* 3. KDV Mahsup Seçeneği */}
                <label className="flex items-center gap-2.5 cursor-pointer select-none text-xs text-zinc-300 pt-1">
                  <input
                    type="checkbox"
                    checked={canOffsetKdv}
                    onChange={(e) => setCanOffsetKdv(e.target.checked)}
                    className="w-4 h-4 rounded accent-amber-400 cursor-pointer"
                  />
                  <span>%20 KDV beyannamemde mahsup edilebiliyor</span>
                </label>
              </div>

              {/* Print / Save Action */}
              <div className="pt-2 print:hidden">
                <button
                  type="button"
                  onClick={handlePrint}
                  className="w-full py-2.5 px-3 rounded-xl bg-white/[0.04] hover:bg-white/10 text-zinc-300 text-xs font-semibold transition-all flex items-center justify-center gap-1.5 border border-white/10"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Hesaplama Özetini Yazdır / PDF Kaydet</span>
                </button>
              </div>
            </div>

            {/* Right Column: Calculated Output Panel */}
            <div className="bg-black/70 border border-white/[0.1] rounded-2xl p-6 flex flex-col justify-between shadow-xl">
              <div>
                <div className="text-xs font-bold text-amber-400 uppercase tracking-wider pb-3 border-b border-white/10">
                  Tahmini Maliyet Özeti ({currentPkg.name})
                </div>

                <div className="space-y-2.5 text-xs pt-4">
                  <div className="flex items-center justify-between text-zinc-400">
                    <span>Fatura Bedeli (KDV Hariç):</span>
                    <span className="text-white font-medium">{formatCurrency(currentPkg.price)}</span>
                  </div>
                  <div className="flex items-center justify-between text-zinc-400">
                    <span>+ %20 KDV Tutarı:</span>
                    <span className="text-zinc-300">{formatCurrency(currentKdv)}</span>
                  </div>
                  <div className="flex items-center justify-between text-zinc-400 pb-2 border-b border-white/5 font-semibold">
                    <span className="text-zinc-300">Fatura Toplamı (KDV Dahil):</span>
                    <span className="text-white">{formatCurrency(totalWithKdv)}</span>
                  </div>
                  {canOffsetKdv && (
                    <div className="flex items-center justify-between text-emerald-400">
                      <span>KDV Mahsubu İndirimi:</span>
                      <span className="font-semibold">-{formatCurrency(currentKdv)}</span>
                    </div>
                  )}
                  <div className="flex items-center justify-between text-amber-400">
                    <span>Tahmini {companyType === 'ltd' ? 'KV' : 'GV'} Tasarrufu (%{effectiveTaxRate}):</span>
                    <span className="font-semibold">-{formatCurrency(currentTaxSaving)}</span>
                  </div>
                </div>
              </div>

              {/* Net Output Box */}
              <div className="pt-4 border-t border-white/10 mt-4">
                <div className="text-[11px] text-zinc-400 mb-0.5">
                  Tahmini Fiili Net Maliyet:
                </div>
                <div className="text-3xl font-black text-white font-display">
                  {formatCurrency(currentNetCost)}
                </div>
                <div className="text-[11px] text-zinc-400 mt-2 leading-relaxed">
                  {canOffsetKdv 
                    ? 'KDV mahsubu ve vergi matrah indirimi sonrası işletmenizin cebinden çıkan tahmini net tutardır.' 
                    : 'Vergi matrah indirimi sonrası tahmini net maliyettir (KDV mahsup edilmediğinde).'}
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Section Reference Table Header */}
        <div className="text-center mb-6">
          <h3 className="text-lg font-bold text-white">
            Tüm Paketler İçin Karşılaştırmalı Vergi Tablosu
          </h3>
        </div>

        {/* Mobil Kaydırma İpucu */}
        <div className="sm:hidden text-center text-[11px] text-amber-400/90 mb-2 flex items-center justify-center gap-1.5 font-medium">
          <span>← Tabloyu sağa/sola kaydırarak tüm sütunları inceleyebilirsiniz →</span>
        </div>

        {/* Tax Table */}
        <div className="bg-[#0A0A0C] rounded-2xl overflow-hidden shadow-xl mb-8 border border-white/[0.08]">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm min-w-[640px]">
              <thead className="bg-[#0C0F17] text-slate-400 uppercase text-[11px] font-bold border-b border-white/5">
                <tr>
                  <th className="py-4 px-5">Paket Adı</th>
                  <th className="py-4 px-5">Fatura Bedeli</th>
                  <th className="py-4 px-5">+ %20 KDV</th>
                  <th className="py-4 px-5 text-zinc-300">KDV Mahsubu</th>
                  <th className={`py-4 px-5 transition-colors ${companyType === 'ltd' ? 'text-amber-400 bg-white/[0.03]' : 'text-slate-300'}`}>
                    LTD. / A.Ş. Tahmini Net Maliyet (%25 KV)
                  </th>
                  <th className={`py-4 px-5 text-right transition-colors ${companyType === 'individual' ? 'text-amber-400 bg-white/[0.03]' : 'text-slate-300'}`}>
                    Şahıs İşletmesi Tahmini Net Maliyet (%{gvRate} GV)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-slate-300 font-medium">
                {siteConfig.taxCalculation.map((row, idx) => {
                  const currentGvSaving = Math.round(row.price * (gvRate / 100));
                  const currentGvCost = row.price - currentGvSaving;

                  return (
                    <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                      <td className="py-5 px-5 font-bold text-white">
                        {row.packageName}
                      </td>
                      <td className="py-5 px-5">{formatCurrency(row.price)}</td>
                      <td className="py-5 px-5 text-slate-400">{formatCurrency(row.kdv)}</td>
                      <td className="py-5 px-5 text-zinc-300">-{formatCurrency(row.kdvDeduction)}</td>
                      <td className={`py-5 px-5 font-bold ${companyType === 'ltd' ? 'text-white bg-white/[0.03]' : 'text-slate-300'}`}>
                        <div className="text-sm sm:text-base font-bold text-white">
                          {formatCurrency(row.netEffectiveCost)}
                        </div>
                        <div className="text-[10px] text-zinc-400 font-normal">
                          -{formatCurrency(row.corporateTaxSaving)} Tahmini KV Tasarrufu (%25)
                        </div>
                      </td>
                      <td className={`py-5 px-5 text-right font-bold ${companyType === 'individual' ? 'text-white bg-white/[0.03]' : 'text-slate-300'}`}>
                        <div className="text-sm sm:text-base font-bold text-white">
                          {formatCurrency(currentGvCost)}
                        </div>
                        <div className="text-[10px] text-zinc-400 font-normal">
                          -{formatCurrency(currentGvSaving)} Tahmini GV Tasarrufu (%{gvRate})
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Explainers Footer */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-slate-400 mb-6">
          <div className="p-4 rounded-xl bg-[#0A0A0C] border border-white/[0.08] flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <strong className="text-white">KDV Mahsubu:</strong> Faturadaki %20 KDV tutarını, aylık KDV beyannamenizde hesaplanan KDV'nizden mahsup ederek doğrudan düşebilirsiniz.
            </div>
          </div>
          <div className="p-4 rounded-xl bg-[#0A0A0C] border border-white/[0.08] flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <strong className="text-white">Resmi Gider & Amortisman:</strong> Fatura bedeli işletme gideri olarak matrahtan düşülür veya aktifleştirilip amortismana tabi tutulur. Doğrudan gider yazımı veya amortisman tercihi mali müşavirinizin muhasebe takdirine ve vergi mevzuatına bağlıdır.
            </div>
          </div>
          <div className="p-4 rounded-xl bg-[#0A0A0C] border border-white/[0.08] flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-slate-300 shrink-0 mt-0.5" />
            <div>
              <strong className="text-white">Resmî E-Arşiv / E-Fatura:</strong> Siparişiniz onaylandığında kurumsal e-arşiv veya e-faturanız muhasebe e-postanıza resmî olarak aynı gün iletilir.
            </div>
          </div>
        </div>

        {/* Mandatory Legal & Tax Disclaimer */}
        <div className="p-4 rounded-xl bg-zinc-950/60 border border-white/5 text-[11px] text-zinc-400 leading-relaxed text-center">
          <strong>Yasal Uyarı:</strong> Bu simülasyon bilgilendirme amaçlıdır; bağlayıcı mali müşavirlik tavsiyesi teşkil etmez. KDV mükellefiyeti olan, dönem kârı bulunan ve KDV mahsubu yapabilen işletmelerin genel vergi mevzuatı çerçevesindeki tahmini nakit avantajını gösterir. Zarar beyan eden işletmelerde, sonraki döneme devreden KDV durumunda veya KDV'den istisna meslek mensuplarında (ör. bazı serbest meslek / sağlık faaliyetleri) fiili nakit etkisi farklılık gösterebilir. Web yazılım ve barındırma harcamalarının doğrudan tek yılda gider mi yazılacağı yoksa aktifleştirilip amortismana mı tabi tutulacağı işletmenizin mali müşavirinin muhasebe takdirine ve yürürlükteki Vergi Usul Kanunu (VUK) uygulamalarına göre belirlenir.
        </div>

      </div>
    </section>
  );
};
