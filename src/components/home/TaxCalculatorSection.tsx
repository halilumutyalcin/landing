'use client';

import React, { useState } from 'react';
import { 
  Building2, 
  UserCheck,
  Receipt,
  Hourglass,
  ArrowRight,
  AlertCircle
} from 'lucide-react';
import { formatCurrency } from '@/lib/utils';

export const TaxCalculatorSection: React.FC = () => {
  const [selectedPackageId, setSelectedPackageId] = useState<string>('pro');
  const [companyType, setCompanyType] = useState<'ltd' | 'individual'>('ltd');
  const [gvRate, setGvRate] = useState<number>(35);
  const [canOffsetKdv, setCanOffsetKdv] = useState<boolean>(true);
  const [treatmentMethod, setTreatmentMethod] = useState<'expense' | 'amortization'>('expense');

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

  // Scenario 1: Doğrudan Gider Yazma
  const totalTaxSaving = Math.round(currentPkg.price * (effectiveTaxRate / 100));
  
  // Scenario 2: Amortisman (3 yıl / %33.33)
  const yearlyAmortizationExpense = Math.round(currentPkg.price / 3);
  const yearOneTaxSaving = Math.round(yearlyAmortizationExpense * (effectiveTaxRate / 100));

  // Applied values depending on chosen method
  const activeTaxSaving = treatmentMethod === 'expense' ? totalTaxSaving : yearOneTaxSaving;
  
  const currentNetCost = canOffsetKdv 
    ? currentPkg.price - totalTaxSaving
    : totalWithKdv - totalTaxSaving;

  const yearOneCashImpact = canOffsetKdv
    ? currentPkg.price - activeTaxSaving
    : totalWithKdv - activeTaxSaving;

  const handleTransferToQuote = () => {
    const event = new CustomEvent('tax-calculation-applied', {
      detail: {
        packageId: selectedPackageId,
        companyType: companyType === 'ltd' ? 'LTD / A.Ş. (%25 KV)' : `Şahıs Şirketi (%${gvRate} GV)`,
        netCost: currentNetCost,
        packageName: currentPkg.name,
      }
    });
    window.dispatchEvent(event);
    const contactEl = document.getElementById('iletisim');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="vergi-avantaji" className="py-20 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
            Şirketler İçin Tahmini Net Maliyet Hesabı
          </h2>
          <p className="text-base text-slate-300 leading-relaxed">
            Fatura bedelinin gider kaydedilmesi veya amortisman yoluyla değerlendirilmesi vergisel açıdan farklılık gösterir. Aşağıdaki simülatörle firmanızın vergi yapısına en uygun tahmini senaryoyu karşılaştırabilirsiniz.
          </p>
        </div>

        {/* 2-Column Interactive Simulator Card */}
        <div className="max-w-4xl mx-auto bg-[#0A0A0C] border border-white/[0.08] rounded-3xl p-6 sm:p-8 mb-8 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            
            {/* Left Column: Configuration Controls */}
            <div className="flex flex-col justify-between space-y-6">
              <div className="space-y-5">
                
                {/* 1. Paket Seçimi */}
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                    1. Paket Seçimi
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {(['starter', 'pro', 'enterprise'] as const).map((pkgId) => (
                      <button
                        key={pkgId}
                        type="button"
                        onClick={() => setSelectedPackageId(pkgId)}
                        className={`p-3 rounded-xl border text-center transition-all ${
                          selectedPackageId === pkgId
                            ? 'bg-white text-black border-white font-bold shadow-md'
                            : 'bg-white/[0.03] text-zinc-300 border-white/10 hover:border-white/20'
                        }`}
                      >
                        <div className="text-xs font-bold truncate">
                          {pkgId === 'starter' ? 'Başlangıç' : pkgId === 'pro' ? 'Profesyonel' : 'Kurumsal'}
                        </div>
                        <div className="text-[11px] mt-0.5 opacity-80">
                          {formatCurrency(packagesInfo[pkgId].price)}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* 2. Vergisel Değerlendirme Yöntemi (Senaryo Ayrımı) */}
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                    2. Muhasebeleştirme Senaryosu
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setTreatmentMethod('expense')}
                      className={`p-3 rounded-xl border flex items-start gap-2.5 transition-all text-left ${
                        treatmentMethod === 'expense'
                          ? 'bg-amber-400 text-black border-amber-400 font-bold shadow-md'
                          : 'bg-white/[0.03] text-zinc-300 border-white/10 hover:border-white/20'
                      }`}
                    >
                      <Receipt className="w-4 h-4 shrink-0 mt-0.5" />
                      <div>
                        <div className="text-xs font-bold">Doğrudan Gider</div>
                        <div className="text-[10px] opacity-80">Aynı yıl %100 matrahtan indirim</div>
                      </div>
                    </button>

                    <button
                      type="button"
                      onClick={() => setTreatmentMethod('amortization')}
                      className={`p-3 rounded-xl border flex items-start gap-2.5 transition-all text-left ${
                        treatmentMethod === 'amortization'
                          ? 'bg-amber-400 text-black border-amber-400 font-bold shadow-md'
                          : 'bg-white/[0.03] text-zinc-300 border-white/10 hover:border-white/20'
                      }`}
                    >
                      <Hourglass className="w-4 h-4 shrink-0 mt-0.5" />
                      <div>
                        <div className="text-xs font-bold">Amortisman (3 Yıl)</div>
                        <div className="text-[10px] opacity-80">Yıllık %33,33 itfa payı</div>
                      </div>
                    </button>
                  </div>
                </div>

                {/* 3. Şirket Türü */}
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                    3. Şirket Türünüz
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setCompanyType('ltd')}
                      className={`p-3 rounded-xl border flex items-center gap-2.5 transition-all text-left ${
                        companyType === 'ltd'
                          ? 'bg-white text-black border-white font-bold shadow-md'
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
                          ? 'bg-white text-black border-white font-bold shadow-md'
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
                      <span className="text-zinc-400 text-[11px]">Gelir Vergisi Dilimi:</span>
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

                {/* 4. KDV Mahsup Şartı */}
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
            </div>

            {/* Right Column: Calculated Output Panel */}
            <div className="bg-black/70 border border-white/[0.1] rounded-2xl p-6 flex flex-col justify-between shadow-xl">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <div className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                    {treatmentMethod === 'expense' ? 'Doğrudan Gider Senaryosu' : 'Amortisman Senaryosu (3 Yıl)'}
                  </div>
                  <span className="text-[10px] text-zinc-400 font-mono">
                    {currentPkg.name}
                  </span>
                </div>

                <div className="space-y-2 text-xs pt-4">
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
                      <span>KDV Mahsubu:</span>
                      <span className="font-semibold">-{formatCurrency(currentKdv)}</span>
                    </div>
                  )}

                  {treatmentMethod === 'expense' ? (
                    <div className="flex items-center justify-between text-amber-400">
                      <span>Aynı Yıl {companyType === 'ltd' ? 'KV' : 'GV'} Tasarrufu (%{effectiveTaxRate}):</span>
                      <span className="font-semibold">-{formatCurrency(totalTaxSaving)}</span>
                    </div>
                  ) : (
                    <>
                      <div className="flex items-center justify-between text-zinc-400">
                        <span>Yıllık Amortisman Gideri (%33,3):</span>
                        <span className="text-zinc-300">{formatCurrency(yearlyAmortizationExpense)} / yıl</span>
                      </div>
                      <div className="flex items-center justify-between text-amber-400">
                        <span>1. Yıl {companyType === 'ltd' ? 'KV' : 'GV'} İndirimi (%{effectiveTaxRate}):</span>
                        <span className="font-semibold">-{formatCurrency(yearOneTaxSaving)}</span>
                      </div>
                      <div className="flex items-center justify-between text-amber-400/80 text-[11px]">
                        <span>3 Yıl Toplam Vergi Tasarrufu:</span>
                        <span>-{formatCurrency(totalTaxSaving)}</span>
                      </div>
                    </>
                  )}
                </div>
              </div>

              {/* Net Output Box & Action Button */}
              <div className="pt-4 border-t border-white/10 mt-4">
                <div className="flex items-baseline justify-between mb-1">
                  <div className="text-[11px] text-zinc-400">
                    {treatmentMethod === 'expense' ? 'Tahmini Fiili Net Maliyet:' : '3 Yıl Kümülatif Net Maliyet:'}
                  </div>
                  {treatmentMethod === 'amortization' && (
                    <span className="text-[10px] text-amber-400">
                      (1. Yıl Net: {formatCurrency(yearOneCashImpact)})
                    </span>
                  )}
                </div>
                
                <div className="text-3xl font-black text-white font-display">
                  {formatCurrency(currentNetCost)}
                </div>

                <p className="text-[11px] text-zinc-400 mt-2 leading-relaxed">
                  {treatmentMethod === 'expense'
                    ? 'Yeterli kâr matrahı ve KDV mahsubu sağlandığında aynı yıl içinde işletmenize yansıyan tahmini net tutardır.'
                    : 'Fatura 3 yılda itfa edildiğinde yıllık vergi avantajı sonrası 3. yıl sonundaki kümülatif net maliyettir.'}
                </p>

                <button
                  type="button"
                  onClick={handleTransferToQuote}
                  className="w-full mt-4 py-2.5 px-4 rounded-xl bg-amber-400 hover:bg-amber-300 text-black font-bold text-xs transition-all flex items-center justify-center gap-2 shadow-lg shadow-amber-400/20"
                >
                  <span>Bu Hesaplamayı Teklif Formuna Aktar</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* Explicit Professional Assumptions Footnote */}
        <div className="max-w-4xl mx-auto p-4 rounded-2xl bg-white/[0.02] border border-white/5 text-[11px] text-zinc-400 leading-relaxed space-y-1">
          <div className="flex items-center gap-1.5 text-zinc-300 font-semibold mb-1">
            <AlertCircle className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span>Vergisel Varsayımlar ve Resmî Hatırlatma:</span>
          </div>
          <p>
            • Hesaplama, şirketin ilgili dönemde yeterli vergi matrahı (kârı) bulunduğu ve ödenecek KDV/vergi çıktığı varsayımına dayanır.
          </p>
          <p>
            • Faturanın doğrudan pazarlama gideri mi yoksa 267 Diğer Maddi Olmayan Duran Varlıklar altında amortisman yoluyla mı muhasebeleştirileceği şirketinizin mali müşaviri tarafından takdir edilir.
          </p>
          <p>
            • Bu simülatördeki tutarlar bağlayıcı bir fiyat teklifi veya kesin vergi garantisi değildir; genel muhasebe ilkelerine dayalı tahmini projeksiyondur.
          </p>
        </div>

      </div>
    </section>
  );
};