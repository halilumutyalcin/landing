'use client';

import React from 'react';
import { CheckCircle, XCircle, MapPin } from 'lucide-react';

export const PrinciplesSection: React.FC = () => {
  return (
    <section id="neden-biz" className="py-24 bg-[#090B10]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Human Touch / Founder's Authentic Note (No heavy borders, clean typography) */}
        <div className="max-w-4xl mx-auto mb-16 p-7 sm:p-9 rounded-3xl bg-[#0E1320] shadow-2xl relative overflow-hidden">
          <div className="space-y-3.5 text-left">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div>
                <div className="text-xs font-bold text-blue-400 uppercase tracking-wider mb-1">
                  Ajans Manifestosu & Samimi Taahhüt
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                  Neden Geleneksel Ajans Modelini Reddettik?
                </h3>
              </div>
              <span className="text-[11px] text-slate-400 font-medium">
                Kurucu Ortaklar Notu
              </span>
            </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Türkiye'de web sitesi yaptırmak isteyen bir avukatın, kliniğin, mali müşavirin veya KOBİ'nin yaşadığı çileyi çok iyi biliyoruz:
                Haftalarca süren oyalayıcı toplantılar, 2–3 ay sonra ne çıkacağı belirsiz hayali Photoshop tasarımları ve her yıl kapıya dayanan fahiş "sunucu yenileme" faturaları.
              </p>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Biz bu ezberi kökten bozmak için yola çıktık: <strong>Canlı demoyu önceden test edin</strong>, ne alacağınızı ve ne ödeyeceğinizi ilk saniyede bilin, <strong>3–5 iş gününde anahtar teslim</strong> yayına geçin. Üstelik 3 yıl boyunca da alan adı ve sunucu takibini tamamen kafanızdan çıkarın.
              </p>

              <div className="pt-4 border-t border-white/5 flex flex-wrap items-center justify-between text-xs text-slate-400 gap-2">
                <span className="text-white font-semibold">MediWeb Mimarlık & Geliştirme Ekibi</span>
                <span className="text-emerald-400 font-medium flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>İstanbul & Ankara</span>
                </span>
              </div>
            </div>
        </div>

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-2">
            Şeffaf İlkelerimiz
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
            Ne Yapıyoruz, Ne Yapmıyoruz?
          </h2>
          <p className="text-base text-slate-300 leading-relaxed">
            Müşterilerimizle uzun vadeli güven ilişkisi kurmanın tek yolunun açık, net ve dürüst taahhütler olduğuna inanıyoruz.
          </p>
        </div>

        {/* 2 Clean Elevated Cards: What We Do vs What We Don't (No harsh double borders, naked icons) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* Ne Yapıyoruz */}
          <div className="bg-[#0C1520] rounded-3xl p-7 sm:p-9 flex flex-col justify-between shadow-2xl relative overflow-hidden">
            <div>
              <div className="flex items-center gap-3.5 mb-7">
                <CheckCircle className="w-8 h-8 text-emerald-400 shrink-0" />
                <div>
                  <span className="text-xs font-semibold text-emerald-400 block">MediWeb Standartları</span>
                  <h3 className="text-2xl font-bold text-white font-display">
                    Neleri Yapıyoruz?
                  </h3>
                </div>
              </div>

              <div className="space-y-5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                  <div>
                    <strong className="text-white block mb-0.5 text-sm">Sektörünüze Özel Prestij:</strong>
                    Hukuk, sağlık, danışmanlık, muhasebe ve emlak sektörünün kurumsal ciddiyetine uygun, güven ve saygı uyandıran vitrinler teslim ediyoruz.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                  <div>
                    <strong className="text-white block mb-0.5 text-sm">Ziyaretçiyi Bekletmeyen Açılış:</strong>
                    Mobilde ve masaüstünde 0.3 saniyede anında açılan, müşteriyi doğrudan WhatsApp veya telefon aramasına yönlendiren temiz mimari.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                  <div>
                    <strong className="text-white block mb-0.5 text-sm">3 Yıl Boyunca Sıfır Sunucu Masrafı:</strong>
                    Alan adı, SSL güvenlik sertifikası ve bulut barındırmayı ilk 3 yıl boyunca tamamen biz karşılıyoruz (0 ₺ ek maliyet).
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                  <div>
                    <strong className="text-white block mb-0.5 text-sm">Resmi Fatura ve Vergi Avantajı:</strong>
                    Tüm işlemlerimiz kurumsal faturalandırılır; şirketinizin kurumlar/gelir vergisinden düşülerek net %35–40 vergi tasarrufu sağlar.
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-emerald-500/20 flex items-center justify-between text-xs font-semibold text-emerald-400">
              <span>Sözleşmeli ve Garantili Teslimat</span>
              <span>%100 Taahhüt</span>
            </div>
          </div>

          {/* Ne Yapmıyoruz */}
          <div className="bg-[#180F14] rounded-3xl p-7 sm:p-9 flex flex-col justify-between shadow-2xl relative overflow-hidden">
            <div>
              <div className="flex items-center gap-3.5 mb-7">
                <XCircle className="w-8 h-8 text-rose-400 shrink-0" />
                <div>
                  <span className="text-xs font-semibold text-rose-400 block">Sektördeki Kötü Deneyimler</span>
                  <h3 className="text-2xl font-bold text-white font-display">
                    Neleri Yapmıyoruz?
                  </h3>
                </div>
              </div>

              <div className="space-y-5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                <div className="flex items-start gap-3">
                  <XCircle className="w-4 h-4 text-rose-400 shrink-0 mt-1" />
                  <div>
                    <strong className="text-white block mb-0.5 text-sm">Ağır ve Güvensiz Sistemler Yok:</strong>
                    Sayısız eklenti açığı barındıran, sürekli yama isteyen veya çökebilen eski tip WordPress şablonları teslim etmiyoruz.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <XCircle className="w-4 h-4 text-rose-400 shrink-0 mt-1" />
                  <div>
                    <strong className="text-white block mb-0.5 text-sm">Gizli Faturalar ve Ek Harçlar Yok:</strong>
                    Süreç başladıktan sonra "sunucu açılışı", "SSL bedeli", "lisans güncellemesi" gibi bahanelerle sürpriz masraf çıkarmıyoruz.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <XCircle className="w-4 h-4 text-rose-400 shrink-0 mt-1" />
                  <div>
                    <strong className="text-white block mb-0.5 text-sm">Haftalarca Süren Oyalama Yok:</strong>
                    2 aylık ucu açık tasarım süreçleriyle işinizi aksatmıyoruz; 3–5 iş gününde eksiksiz çalışan sitenizi teslim ediyoruz.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <XCircle className="w-4 h-4 text-rose-400 shrink-0 mt-1" />
                  <div>
                    <strong className="text-white block mb-0.5 text-sm">Ulaşılamayan Destek Yok:</strong>
                    Siteyi teslim ettikten sonra kaybolmuyoruz; WhatsApp hattımızdan acil güncellemeleriniz ve sorularınız için anında yanıt veriyoruz.
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-rose-500/20 flex items-center justify-between text-xs font-semibold text-rose-400">
              <span>Sıfır Sürpriz Maliyet</span>
              <span>%100 Şeffaflık</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
