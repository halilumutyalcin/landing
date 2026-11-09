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
    <section id="vergi-avantaji" className="py-20 bg-black border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header - Clean & Direct */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
            Şirketler İçin Gerçek Net Maliyet Hesabı
          </h2>
          <p className="text-base text-slate-300 leading-relaxed">
            Tüm paket fiyatlarımız KDV hariçtir; resmî faturada %20 KDV eklenir (17.500 ₺ + KDV = 21.000 ₺). Faturayı şirket gideri olarak muhasebeleştirdiğinizde KDV mahsubu ve gelir/kurumlar vergisi matrahı indirimiyle net maliyet hafifler. <em>(Bilgilendirme simülasyonudur; nihai vergi etkisi için mali müşavirinize danışınız.)</em>
          </p>
        </div>

        {/* Company Type Switcher */}
        <div className="flex justify-center mb-8">
          <div className="bg-[#0A0A0C] p-1.5 rounded-xl flex items-center gap-1">
            <button
              onClick={() => setCompanyType('ltd')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                companyType === 'ltd'
                  ? 'bg-white text-black font-bold text-white shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Building2 className="w-4 h-4" />
              <span>LTD. / A.Ş. (Kurumlar Vergisi %25)</span>
            </button>
            <button
              onClick={() => setCompanyType('individual')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                companyType === 'individual'
                  ? 'bg-emerald-600 text-white shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <UserCheck className="w-4 h-4" />
              <span>Şahıs Şirketi (Gelir Vergisi ~%35-40)</span>
            </button>
          </div>
        </div>

        {/* Tax Table */}
        <div className="bg-[#0A0A0C] rounded-2xl overflow-hidden shadow-xl mb-8">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#0C0F17] text-slate-400 uppercase text-[11px] font-bold">
                <tr>
                  <th className="py-4 px-6">Paket Adı</th>
                  <th className="py-4 px-6">Paket Bedeli</th>
                  <th className="py-4 px-6">+ %20 KDV</th>
                  <th className="py-4 px-6">Ödenen Toplam</th>
                  <th className="py-4 px-6 text-emerald-400">KDV Mahsubu</th>
                  <th className="py-4 px-6 text-amber-400">Vergi Tasarrufu</th>
                  <th className="py-4 px-6 text-right font-bold text-white bg-black/40">
                    Net Efektif Maliyetiniz
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-slate-300 font-medium">
                {siteConfig.taxCalculation.map((row, idx) => {
                  const effectiveCost = companyType === 'ltd' 
                    ? row.netEffectiveCost 
                    : row.personalCompanyCost;

                  const taxSaving = companyType === 'ltd'
                    ? row.corporateTaxSaving
                    : Math.round(row.price * 0.40);

                  return (
                    <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                      <td className="py-5 px-6 font-bold text-white">
                        {row.packageName}
                      </td>
                      <td className="py-5 px-6">{formatCurrency(row.price)}</td>
                      <td className="py-5 px-6 text-slate-400">{formatCurrency(row.kdv)}</td>
                      <td className="py-5 px-6">{formatCurrency(row.totalPaid)}</td>
                      <td className="py-5 px-6 text-emerald-400">-{formatCurrency(row.kdvDeduction)}</td>
                      <td className="py-5 px-6 text-amber-400">-{formatCurrency(taxSaving)}</td>
                      <td className="py-5 px-6 text-right bg-black/40">
                        <div className="text-base sm:text-lg font-bold text-emerald-400">
                          {formatCurrency(effectiveCost)}
                        </div>
                        <div className="text-[11px] text-slate-400">
                          %{(100 - (effectiveCost / row.totalPaid) * 100).toFixed(0)} maliyet avantajı
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-slate-400">
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

      </div>
    </section>
  );
};
