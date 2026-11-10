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
      text: `6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") uyarınca, veri sorumlusu sıfatıyla ${siteConfig.legalEntity.title} (${siteConfig.legalEntity.businessType} - ${siteConfig.legalEntity.taxOffice} - MediWeb) olarak;

1. İşlenen Kişisel Veriler: Ad, soyad, telefon numarası, e-posta adresi, şirket unvanı, sektör bilgisi ve teklif formunda paylaşılan proje detayları.
2. İşleme Amaçları ve Hukuki Sebepler: Verileriniz, KVKK m. 5/2-c (bir sözleşmenin kurulması veya ifasıyla doğrudan doğruya ilgili olması) ve m. 5/2-f (veri sorumlusunun meşru menfaatleri) hukuki sebeplerine dayalı olarak; teklif hazırlama, kurumsal iletişim, hizmet sözleşmesinin ifası, muhasebe ve e-fatura süreçlerinin yürütülmesi ve yasal bildirim yükümlülüklerinin yerine getirilmesi amacıyla işlenmektedir.
3. Toplama Yöntemi: Web sitemizdeki iletişim ve teklif formları, e-posta, telefon ve WhatsApp iletişim hatları üzerinden otomatik ve kısmen otomatik elektronik yöntemlerle toplanmaktadır.
4. Aktarım ve Yurt Dışı Veri Trafiği: Kişisel verileriniz, açık rızanız olmaksızın ticari/pazarlama amacıyla üçüncü taraflara satılmaz veya devredilmez. İletişimin WhatsApp (Meta Platforms Inc.) veya e-posta servisleri üzerinden yürütülmesi ve web altyapısının bulut barındırma hizmet sağlayıcıları üzerinden çalışması nedeniyle, teknik altyapı gereği yurt dışı sunucular vasıtasıyla güvenli veri aktarımı gerçekleşebilmektedir. Kanunen yetkili kamu kurum ve kuruluşlarına ise mevzuattan kaynaklanan zorunluluklar kapsamında aktarılabilir.
5. Saklama Süreleri: Verileriniz, Türk Ticaret Kanunu ve Vergi Usul Kanunu uyarınca sözleşme ve fatura ilişkisi kapsamında 10 yıl; teklif aşamasında kalan ve ticari ilişkiye dönüşmeyen başvurularda ise azami 2 yıl süreyle güvenli altyapılarda muhafaza edilir.
6. İlgili Kişi Hakları: KVKK'nın 11. maddesi kapsamındaki haklarınızı (verilerinizin silinmesi, düzeltilmesi, işlenme amacının öğrenilmesi vb.) info@mediweb.com.tr adresine yazılı başvuruda bulunarak her zaman kullanabilirsiniz.`
    },
    terms: {
      title: 'Hizmet ve Teslimat Sözleşmesi',
      icon: FileText,
      text: `1. Taraflar, Kapsam ve Ticari Amaç Beyanı: İşbu sözleşme, hizmet sağlayıcı ${siteConfig.legalEntity.title} (${siteConfig.legalEntity.businessType} - ${siteConfig.legalEntity.taxOffice} - ${siteConfig.legalEntity.city}) ile müşteri arasında akdedilir. Müşteri, işbu sözleşmeye konu web tasarım ve yazılım hizmetlerini ticari, mesleki veya kurumsal faaliyetleri kapsamında sipariş ettiğini ve işlemin 6502 sayılı Kanun kapsamında tüketici işlemi olmadığını beyan eder.

2. Teslim Süresi ve Ajans Kaynaklı Gecikme Güvencesi: MediWeb, seçilen paket kapsamında web sitesini müşteri içerik ve tasarım onayından itibaren taahhüt edilen sürede (Başlangıç: 3–5, Profesyonel: 5–7, Kurumsal: 7–10 iş günü) anahtar teslim hazırlar. Teslim süresi müşterinin logo, kurumsal metin ve görselleri eksiksiz teslim etmesiyle başlar; müşteri kaynaklı onay/içerik gecikmeleri takvime eklenir. Ajansın kusuru nedeniyle taahhüt edilen teslim tarihinin aşılması durumunda; taahhüt edilen tarihten sonraki her 5 (beş) iş günü gecikme için müşteriye 1 ay ücretsiz rutin bakım hizmeti hediye edilir (azami 3 ay ile sınırlıdır). Hediye edilen bakım, paketteki mevcut dahil bakım ve garanti süresi bittikten sonra başlar.

3. Alan Adı Tescili ve 3 Yıllık Bulut Barındırma Hizmeti: Paket bedeline ilk 3 yıl boyunca .com/.com.tr alan adı tahsisi, SSL sertifikası ve bulut barındırma hizmeti dahildir. Alan adı ilk günden itibaren doğrudan müşterinin adına tescil edilir; asla rehin veya kilit altında tutulmaz. Barındırma hizmeti ilk kurulum tarihinden itibaren 3 yıl boyunca geçerlidir. 3 yıl sonunda müşteri, sağlayıcının resmi güncel tarifesi üzerinden (tahmini ~2.500–3.500 ₺/yıl) yenileyebilir veya kaynak kod devriyle bağımsız sunucusuna taşıyabilir.

4. Garanti Kapsamı, Müdahale SLA'sı ve Rutin Bakım: Başlangıç paketinde 15 gün, Profesyonel pakette 30 gün, Kurumsal pakette 60 gün sözleşmeli yazılımsal hata garantisi verilir. Bildirilen teknik/yazılımsal hatalara en geç 1–2 iş günü içinde teknik müdahale başlatılır ve kritik işlevsel aksaklıklar öncelikle giderilir. Müşteri kaynaklı yeni sayfa ekleme, metin/görsel değişikliği veya kapsam dışı tasarım revizyonları ise isteğe bağlı aylık bakım anlaşması (2.500 ₺/ay) çerçevesindedir. Profesyonel pakette ilk 1 ay, Kurumsal pakette ilk 3 ay rutin içerik güncelleme desteği dahildir.

5. Fatura, Vergi & Cayma Hakkı: Tüm fiyatlar KDV hariçtir; %20 KDV eklenerek resmî e-Arşiv / e-Fatura düzenlenir. Fatura bedelinin tek seferde gider mi yazılacağı yoksa amortismana mı tabi tutulacağı müşterinin mali müşavirinin takdirindedir. Müşterinin özel kurumsal taleplerine istinaden kişiye/şirkete özel hazırlanan tasarımlarda ve ifasına başlanan dijital alan adı tahsislerinde sözleşme kurulduktan sonra cayma hakkı bulunmamaktadır; garanti süresince yazılımsal teknik aksaklıklar ücretsiz giderilir.

6. Kaynak Kod Devri ve Süreklilik (Kapanma) Güvencesi: Standart teslimat bulut altyapımızda yayını kapsar. Yazılımın açık kaynak kodlarının teslimi ek lisans bedeline tabidir (+%75 lisans devir bedeli: Başlangıç: 13.125 ₺, Pro: 24.375 ₺, Kurumsal: 44.925 ₺). Faaliyet Güvencesi: Hizmet sağlayıcının ticari faaliyetini herhangi bir sebeple kalıcı olarak sonlandırması durumunda; web sitesinin açık kaynak kodları ve bağımsız kurulum arşivleri müşteriye hiçbir ek bedel talep edilmeksizin derhal ve ücretsiz teslim edilir.

7. Taksitli Model (WaaS), Ödeme Temerrüdü ve Haklı Fesih: 12 aylık taksitli modelde alan adı ilk günden müşteri adınadır. Kurulum bedeli başlangıçta, aylık taksitler her ay fatura karşılığı ödenir. 12 aylık taahhüt tamamlandığında zorunlu aylık ödeme kesilir; site 3 yıllık barındırma süresince yayında kalmaya devam eder. Müşteri 12 aydan önce erken çıkış talep ederse yalnızca kalan taksit borcunu kapatır. Aylık taksidin 15 günden fazla gecikmesi halinde yazılı bildirimle hizmet geçici olarak durdurulabilir. Ajans kaynaklı telafisi imkansız ağır kusur halinde müşteri sözleşmeyi haklı nedenle feshedebilir ve peşinatın ifa edilmemiş kısmını talep edebilir.

8. Fikri Mülkiyet, Telif Hakları ve Lisanslı Görseller: Müşteri tarafından sağlanan marka, logo ve metinlerin tüm telif ve hukuki sorumluluğu müşteriye aittir. MediWeb tarafından hazırlanan nihai web arayüzü ve içeriklerin kullanım hakkı müşteriye aittir; temel mimari çatı kodlarının mülkiyeti ajanstadır. Şablonda sağlanan lisanslı stok görseller yalnızca işbu web sitesi bünyesinde dijital yayın hakkına sahiptir, bağımsız olarak satılamaz. Sağlık ve klinik sitelerinde stok modeller uzman hekim unvanıyla tanıtılamaz.

9. Gizlilik, Sorumluluk Sınırı ve Mücbir Sebepler: Taraflar sözleşme süresince edindikleri ticari ve mesleki sırları gizli tutmayı taahhüt eder. Doğal afet, savaş, mevzuat değişikliği, global bulut ağı kesintisi veya telekomünikasyon arızaları mücbir sebep sayılır. Ajansın işbu sözleşmeden doğan azami mali sorumluluğu, her halükarda müşterinin ödediği toplam paket bedeli ile sınırlıdır.

10. Referans İzni ve Yetkili Mahkeme: MediWeb, tamamlanan web sitesini kurumsal portfolyosunda referans olarak sergileme hakkına sahiptir (müşterinin yazılı gizlilik talebi saklıdır). İşbu sözleşmeden doğabilecek her türlü uyuşmazlıkta İstanbul Anadolu (Kartal) Mahkemeleri ve İcra Daireleri yetkilidir.`
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
