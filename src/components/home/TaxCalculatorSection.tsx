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

  return (
    <section id="vergi-avantaji" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header - Clean & Direct */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
            Şirketler İçin Gerçek Net Maliyet Hesabı
          </h2>
          <p className="text-base text-slate-300 leading-relaxed">
            Tüm paket fiyatlarımız KDV hariçtir; resmî faturada %20 KDV eklenir. Faturayı şirket gideri olarak muhasebeleştirdiğinizde KDV mahsubu ve gelir/kurumlar vergisi matrahı indirimiyle net maliyet hafifler. <em>(Bilgilendirme simülasyonudur; nihai vergi etkisi için mali müşavirinize danışınız.)</em>
          </p>
        </div>

        {/* Company Type Filter & Legend */}
        <div className="flex justify-center mb-8">
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
              <span>LTD. / A.Ş. (%25 KV Odaklı)</span>
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
              <span>Şahıs Şirketi (%15–%40 GV Odaklı)</span>
            </button>
          </div>
        </div>

        {/* Tax Table - Complete Side-by-Side Clarity (Fully Visible in Print & PDF) */}
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
                    LTD. / A.Ş. Net Maliyet (%25 KV)
                  </th>
                  <th className={`py-4 px-5 text-right transition-colors ${companyType === 'individual' ? 'text-amber-400 bg-white/[0.03]' : 'text-slate-300'}`}>
                    Şahıs Şirketi Net Maliyet (~%35 GV)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-slate-300 font-medium">
                {siteConfig.taxCalculation.map((row, idx) => {
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
                          -{formatCurrency(row.corporateTaxSaving)} KV Matrah İndirimi
                        </div>
                      </td>
                      <td className={`py-5 px-5 text-right font-bold ${companyType === 'individual' ? 'text-white bg-white/[0.03]' : 'text-slate-300'}`}>
                        <div className="text-sm sm:text-base font-bold text-white">
                          {formatCurrency(row.personalCompanyCost)}
                        </div>
                        <div className="text-[10px] text-zinc-400 font-normal">
                          -{formatCurrency(Math.round(row.price * 0.35))} GV Matrah İndirimi
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
              <strong className="text-white">KDV Mahsubu:</strong> Faturadaki %20 KDV tutarını, aylık KDV beyannamenizde devlete ödeyeceğiniz KDV'den doğrudan düşersiniz.
            </div>
          </div>
          <div className="p-4 rounded-xl bg-[#0A0A0C] border border-white/[0.08] flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <strong className="text-white">Resmi Gider:</strong> Faturanın net tutarı şirketin resmi gideri kabul edilerek dönem sonu vergi matrahından düşülür.
            </div>
          </div>
          <div className="p-4 rounded-xl bg-[#0A0A0C] border border-white/[0.08] flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-slate-300 shrink-0 mt-0.5" />
            <div>
              <strong className="text-white">Anında E-Fatura:</strong> Siparişiniz onaylandığında kurumsal e-faturanız muhasebe e-postanıza aynı gün iletilir.
            </div>
          </div>
        </div>

        {/* Mandatory Legal & Tax Disclaimer */}
        <div className="p-4 rounded-xl bg-zinc-950/60 border border-white/5 text-[11px] text-zinc-400 leading-relaxed text-center">
          <strong>Yasal Uyarı:</strong> Bu simülasyon, KDV mükellefi olan ve dönem matrahı kârda olan işletmelerin genel Türk vergi mevzuatı çerçevesindeki tahmini nakit akışı avantajını gösterir. Zarar beyan eden işletmelerde, sonraki döneme devreden KDV durumunda veya vergiden muaf meslek mensuplarında fiili nakit etkisi farklılık gösterebilir. Kesin vergi hesaplaması için lütfen mali müşavirinize danışınız.
        </div>

      </div>
    </section>
  );
};
