'use client';

import React, { useState } from 'react';
import { 
  Building2, 
  UserCheck, 
  CheckCircle2 
} from 'lucide-react';
import { siteConfig } from '@/config/site.config';
import { formatCurrency } from '@/lib/utils';

export const TaxCalculatorSection: React.FC = () => {
  const [companyType, setCompanyType] = useState<'ltd' | 'individual'>('ltd');
  const [gvRate, setGvRate] = useState<number>(35);

  const gvRates = [15, 20, 27, 35, 40];

  return (
    <section id="vergi-avantaji" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header - Clean & Direct */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
            Şirketler İçin Tahmini Net Maliyet Hesabı
          </h2>
          <p className="text-base text-slate-300 leading-relaxed">
            Tüm paket fiyatlarımız KDV hariçtir; resmî faturada %20 KDV eklenir. Fatura bedeli işletme gideri veya amortisman kapsamında değerlendirildiğinde KDV mahsubu ve vergi tasarrufuyla fiili net maliyet hafifler. <em>(Bilgilendirme simülasyonudur; nihai muhasebeleştirme ve vergi etkisi için mali müşavirinize danışınız.)</em>
          </p>
        </div>

        {/* Company Type Filter & GV Dilim Seçimi */}
        <div className="flex flex-col items-center gap-4 mb-8">
          <div className="bg-[#0A0A0C] p-1.5 rounded-xl flex items-center gap-1 border border-white/[0.08]">
            <button
              onClick={() => setCompanyType('ltd')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                companyType === 'ltd'
                  ? 'bg-white text-black font-semibold shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Building2 className="w-4 h-4" />
              <span>LTD. / A.Ş. (%25 Kurumlar Vergisi)</span>
            </button>
            <button
              onClick={() => setCompanyType('individual')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                companyType === 'individual'
                  ? 'bg-white text-black font-semibold shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <UserCheck className="w-4 h-4" />
              <span>Gerçek Kişi / Şahıs İşletmesi</span>
            </button>
          </div>

          {/* Dinamik Gelir Vergisi Dilim Seçici (Gerçek Kişi / Şahıs İşletmesi seçildiğinde) */}
          {companyType === 'individual' && (
            <div className="flex items-center gap-2 bg-[#0A0A0C] px-4 py-2 rounded-xl border border-white/[0.08] text-xs animate-in fade-in duration-200">
              <span className="text-slate-400 font-medium">Gelir Vergisi Diliminiz:</span>
              <div className="flex items-center gap-1">
                {gvRates.map((rate) => (
                  <button
                    key={rate}
                    onClick={() => setGvRate(rate)}
                    className={`px-2.5 py-1 rounded-md font-bold transition-all ${
                      gvRate === rate
                        ? 'bg-amber-400 text-black shadow-sm'
                        : 'text-slate-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    %{rate}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Tax Table */}
        <div className="bg-[#0A0A0C] rounded-2xl overflow-hidden shadow-xl mb-8 border border-white/[0.08]">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
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
