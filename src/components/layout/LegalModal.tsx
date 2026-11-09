'use client';

import React from 'react';
import { X, Shield, FileText, Lock } from 'lucide-react';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'kvkk' | 'terms' | 'privacy';
}

export const LegalModal: React.FC<LegalModalProps> = ({ isOpen, onClose, type }) => {
  if (!isOpen) return null;

  const content = {
    kvkk: {
      title: 'KVKK Aydınlatma Metni',
      icon: Shield,
      text: `6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") uyarınca, MediWeb Dijital Çözümler ("Şirket") olarak, veri sorumlusu sıfatıyla tarafımıza iletilen kişisel verilerinizi (ad, soyad, telefon numarası, e-posta adresi, şirket bilgisi) yalnızca teklif hazırlama, iletişim sağlama, sözleşme süreçlerinin yürütülmesi ve yasal yükümlülüklerin yerine getirilmesi amacıyla işlemekteyiz. Verileriniz üçüncü taraflarla ticari amaçla paylaşılmaz ve yasal süreler boyunca güvenli sunucularda saklanır.`
    },
    terms: {
      title: 'Hizmet ve Teslimat Sözleşmesi',
      icon: FileText,
      text: `1. Hizmet Kapsamı: MediWeb, seçilen tasarım ve paket kapsamında web sitesini müşteri içerik onayından itibaren 3–10 iş günü (Başlangıç: 3–5, Profesyonel: 5–7, Kurumsal: 7–10 iş günü) içerisinde anahtar teslim olarak hazırlar ve yüksek hızlı global bulut altyapısına bağlar.
2. 3 Yıl Domain ve Hosting: Paket bedeline ilk 3 yıl boyunca .com/.com.tr alan adı, SSL sertifikası ve bulut barındırma dahildir. Alan adı doğrudan müşterinin adına tahsis edilir. 3 yıl sonunda müşteri dilerse yıllık standart maliyetle yeniler veya kaynak kodunu devralabilir.
3. Revizyon Hakları: Başlangıç paketinde 1 tur, Profesyonel pakette 2 tur, Kurumsal pakette 3 tur revizyon hakkı sağlanır.
4. Fatura ve İade: Tüm fiyatlar KDV hariçtir; faturalandırmada %20 KDV eklenerek resmî e-Fatura/e-Arşiv düzenlenir. Dijital hizmet ve özel alan adı tahsisi başladıktan sonra cayma hakkı kapsam dışıdır; ancak hata garantisi süresince teknik düzeltmeler koşulsuz sağlanır.
5. Ajans İmzası ve White-Label: Varsayılan olarak hazırlanan sitelerin alt bilgi (footer) alanında 'Mimari: MediWeb' ibaresi yer alır. Müşteri dilerse tek seferlik White-Label bedeli karşılığında bu ibareyi tamamen kaldırtma hakkına sahiptir.`
    },
    privacy: {
      title: 'Gizlilik ve Çerez Politikası',
      icon: Lock,
      text: `MediWeb web sitesi, kullanıcı deneyimini iyileştirmek ve site trafiğini analiz etmek için temel ve analitik çerezler kullanmaktadır. Ziyaretçilerin IP adresleri ve form bilgileri SSL 256-bit şifreleme ile korunur. Bilgileriniz hiçbir koşulda spam veya yetkisiz pazarlama amacıyla kullanılmaz.`
    }
  }[type];

  const Icon = content.icon;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        role="dialog"
        aria-modal="true"
        aria-labelledby="legal-modal-title"
        className="relative w-full max-w-2xl bg-card border border-card-border rounded-2xl p-6 md:p-8 shadow-2xl text-left"
      >
        <div className="flex items-center justify-between pb-4 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center text-brand-400">
              <Icon className="w-5 h-5" />
            </div>
            <h3 id="legal-modal-title" className="text-xl font-bold text-white">{content.title}</h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Kapat"
            className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="mt-6 max-h-[60vh] overflow-y-auto pr-2 text-sm text-slate-300 leading-relaxed whitespace-pre-line space-y-4">
          {content.text}
        </div>

        <div className="mt-8 pt-4 border-t border-white/10 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-medium text-sm transition-colors"
          >
            Anladım, Kapat
          </button>
        </div>
      </div>
    </div>
  );
};
