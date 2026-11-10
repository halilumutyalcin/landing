'use client';

import React from 'react';
import { X, Shield, FileText, Lock } from 'lucide-react';
import { siteConfig } from '@/config/site.config';

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
      text: `6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") uyarınca, veri sorumlusu sıfatıyla ${siteConfig.legalEntity.providerTitle} (${siteConfig.legalEntity.type} - MediWeb) olarak; tarafımıza iletilen kişisel verilerinizi (ad, soyad, telefon numarası, e-posta adresi, şirket ve sektör bilgisi) yalnızca teklif hazırlama, iletişim sağlama, sözleşme ve faturalandırma süreçlerinin yürütülmesi ve kanuni yükümlülüklerin yerine getirilmesi amacıyla işlemekteyiz. 

Verileriniz açık rızanız ve yasal zorunluluklar haricinde üçüncü taraflarla ticari veya pazarlama amacıyla paylaşılmaz ve mevzuatta öngörülen saklama süreleri boyunca güvenli altyapılarda korunur. KVKK'nın 11. maddesi kapsamındaki haklarınızı info@mediweb.com.tr adresi üzerinden her zaman talep edebilirsiniz.`
    },
    terms: {
      title: 'Hizmet ve Teslimat Sözleşmesi',
      icon: FileText,
      text: `1. Taraflar ve Kapsam: İşbu sözleşme kapsamında hizmet sağlayıcı ${siteConfig.legalEntity.providerTitle} (${siteConfig.legalEntity.type} - ${siteConfig.legalEntity.taxOffice} - ${siteConfig.legalEntity.city}) ile müşteri arasında akdedilir. MediWeb, seçilen kurumsal mimari ve paket kapsamında web sitesini müşteri içerik ve tasarım onayından itibaren 3–10 iş günü (Başlangıç: 3–5, Profesyonel: 5–7, Kurumsal: 7–10 iş günü) içerisinde anahtar teslim olarak hazırlar ve yüksek hızlı modern web altyapısına bağlar.

2. 3 Yıl Domain ve Hosting Güvencesi: Paket bedeline ilk 3 yıl boyunca .com/.com.tr alan adı tahsisi, SSL güvenlik sertifikası ve bulut barındırma dahildir. Alan adı doğrudan müşterinin adına veya tüzel kişiliğine tescil edilir; tam mülkiyet müşteridedir. 3 yıl sonunda müşteri dilerse yıllık standart maliyetle (tahmini ~2.500–3.500 ₺/yıl) yeniler veya isteğe bağlı kaynak kod devir modülüyle kendi sunucusuna taşıyabilir.

3. Garanti Kapsamı & Rutin Bakım: Başlangıç paketinde 15 gün, Profesyonel pakette 30 gün, Kurumsal pakette 60 gün sözleşmeli hata garantisi sağlanır; bu süre boyunca yazılımsal teknik düzeltmeler koşulsuz ücretsizdir. Profesyonel pakette ilk 1 ay, Kurumsal pakette ilk 3 ay rutin içerik güncelleme desteği dahildir. Garanti süresi sonrasındaki düzenli içerik güncelleme ve geliştirme talepleri isteğe bağlı aylık bakım anlaşması (2.500 ₺/ay) ile yürütülür.

4. Fatura, Vergi & Muhasebe: Tüm fiyatlar KDV hariçtir; faturalandırmada %20 KDV eklenerek resmî e-Arşiv / e-Fatura düzenlenir. Fatura bedelinin tek seferde doğrudan gider mi yazılacağı yoksa aktifleştirilip amortismana mı tabi tutulacağı müşterinin mali müşavirinin muhasebe takdirindedir. Dijital hizmet ve özel alan adı tahsisi başladıktan sonra cayma hakkı kapsam dışıdır; ancak garanti süresince teknik aksaklıklar koşulsuz giderilir.

5. Kaynak Kod & Bağımsız Lisans: Standart teslimat bulut barındırma dahil anahtar teslim yayını kapsar. Yazılımın kaynak kodlarının müşteri bünyesine aktarılması ve bağımsız sunucularda ajans harici geliştirilmesi 'Tam Kaynak Kod & Bağımsız Lisans Devri' ek modülü (+%75) kapsamında protokole bağlanır.

6. Taksitli / Aylık Model (WaaS): 12 aylık taahhüt süresi dolduğunda sitenin yayın hakkı, alan adı (.com/.com.tr) tescili ve 3 yıllık bulut barındırma hakkı müşteriye devredilir. 13. aydan itibaren zorunlu aylık ödeme kesilir; site asla kapatılmaz veya rehin tutulmaz. Müşteri 13. aydan sonra dilerse aylık teknik bakımı sonlandırabilir veya isteğe bağlı sürdürebilir.`
    },
    privacy: {
      title: 'Gizlilik ve Çerez Politikası',
      icon: Lock,
      text: `MediWeb web sitesi, kullanıcı deneyimini iyileştirmek ve site trafiğini analiz etmek için temel ve analitik çerezler kullanmaktadır. Ziyaretçilerin form bilgileri ve iletişim verileri SSL 256-bit şifreleme ile korunur. Bilgileriniz hiçbir koşulda spam veya yetkisiz pazarlama amacıyla kullanılmaz.`
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
