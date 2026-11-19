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
      text: `6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") ve 7499 sayılı Kanun ile yapılan güncel değişiklikler uyarınca, veri sorumlusu sıfatıyla ${siteConfig.legalEntity.title} (${siteConfig.legalEntity.businessType} - ${siteConfig.legalEntity.taxOffice} - Vergi No: 2020589059 - Adres: Orhangazi Mah. Gülcü Sk. No:4 D:8 Pendik/İstanbul - İletişim: 0545 620 11 35, info@mediweb.com.tr) olarak;

1. İşlenen Kişisel Veriler: Ad, soyad, telefon numarası, kurumsal e-posta adresi, şirket unvanı, sektör bilgisi, vergi dairesi/numarası (fatura süreçleri için) ve teklif formunda iletilen proje notları. Form alanlarımızda sağlık verisi, ceza mahkumiyeti gibi özel nitelikli kişisel veriler toplanmamakta olup müşterilerimizin bu alanlarda özel nitelikli veri paylaşmaması gerekmektedir.

2. İşleme Amaçları ve Hukuki Sebepler: Kişisel verileriniz;
- KVKK m. 5/2-c: Web tasarım ve yazılım hizmet sözleşmesinin kurulması veya ifasıyla doğrudan doğruya ilgili olması,
- KVKK m. 5/2-ç: Veri sorumlusunun hukuki yükümlülüğünü yerine getirebilmesi (Vergi Usul Kanunu, Türk Ticaret Kanunu uyarınca faturalandırma ve yasal defter kayıtları),
- KVKK m. 5/2-f: Temel hak ve özgürlüklerinize zarar vermemek kaydıyla meşru menfaatlerimiz (müşteri memnuniyeti, teknik destek ve operasyonel iletişim süreçleri) hukuki sebeplerine dayalı olarak işlenmektedir.

3. Toplama Yöntemi: Web sitemizdeki keşif ve teklif formları, e-posta, telefon ve WhatsApp Business iletişim hatları üzerinden otomatik ve kısmen otomatik elektronik yöntemlerle toplanmaktadır.

4. Veri Aktarımı ve Alıcı Grupları: Kişisel verileriniz ticari/pazarlama amacıyla üçüncü kişilere asla satılmaz veya kiralanmaz. Verileriniz yalnızca; yasal faturalandırma süreçleri için Gelir İdaresi Başkanlığı ve e-fatura özel entegratörüne, resmi mali müşavirimize, teknik altyapı hizmeti sağlayan bulut ve e-posta sunucu sağlayıcılarına ve kanunen yetkili kamu kurum ve kuruluşlarına mevzuat sınırları dahilinde aktarılmaktadır. İletişimin WhatsApp veya e-posta servisleri üzerinden yürütülmesi ve küresel bulut barındırma altyapısının kullanılması hallerinde, 7499 sayılı Kanun ile düzenlenen yurt dışı aktarım rejimine uygun teknik ve idari tedbirler ile standart sözleşme/hizmet güvenceleri uygulanmaktadır.

5. Saklama Süreleri: Kişisel verileriniz; Türk Ticaret Kanunu (TTK) uyarınca ticari defter ve sözleşme ilişkisi kapsamında 10 yıl; Vergi Usul Kanunu (VUK) uyarınca fatura ve muhasebe kayıtları kapsamında 5 yıl; teklif aşamasında kalan ve sözleşmeye dönüşmeyen taleplerde ise azami 2 yıl süreyle muhafaza edilir ve sürenin bitiminde re'sen silinir veya imha edilir.

6. İlgili Kişi Hakları: KVKK'nın 11. maddesi kapsamındaki haklarınızı (verilerinizin silinmesi, düzeltilmesi, işlenme amacının öğrenilmesi vb.) Orhangazi Mah. Gülcü Sk. No:4 D:8 Pendik/İstanbul adresine yazılı olarak veya sistemimizde kayıtlı e-posta adresiniz üzerinden info@mediweb.com.tr adresine ileterek her zaman kullanabilirsiniz.`
    },
    terms: {
      title: 'Hizmet ve Teslimat Sözleşmesi',
      icon: FileText,
      text: `1. Taraflar, Kapsam ve Ticari Amaç Beyanı: İşbu sözleşme; Orhangazi Mah. Gülcü Sk. No:4 D:8 Pendik/İstanbul adresinde mukim Ahmet Hakan Cansız (Pendik V.D. Vergi No: 2020589059 - İletişim: 0545 620 11 35 - info@mediweb.com.tr, bundan böyle "Hizmet Sağlayıcı" veya "MediWeb" olarak anılacaktır) ile sipariş veren Müşteri arasında akdedilir. Müşteri, işbu sözleşmeye konu web tasarım ve yazılım hizmetlerini ticari, mesleki veya kurumsal faaliyetleri kapsamında sipariş ettiğini ve işlemin 6502 sayılı Kanun kapsamında tüketici işlemi olmadığını kabul ve beyan eder.

2. Teslim Süresi Başlangıcı ve Gecikme Güvencesi: Teslim süresi (Başlangıç: 3–5, Profesyonel: 5–7, Kurumsal: 7–10 iş günü); Müşterinin logo, kurumsal metin ve görsel içeriklerini yazılı olarak (e-posta veya WhatsApp) eksiksiz teslim ettiği ve proje kapsamını onayladığı iş gününü takip eden ilk iş günü başlar. Müşteri kaynaklı onay, revizyon iletimi veya içerik gecikmeleri teslim süresine eklenir. Canlı taslak inceleme bağlantısı Müşteriye iletildikten sonra 5 (beş) iş günü içinde yazılı revizyon veya itiraz bildirilmemesi halinde işin zımnen kabul edildiği varsayılır. Hizmet Sağlayıcının kusuru nedeniyle taahhüt edilen teslim tarihinin aşılması durumunda; taahhüt edilen tarihten sonraki her 5 (beş) iş günü gecikme için Müşteriye 1 ay ücretsiz rutin teknik bakım hediye edilir (azami 3 ay ile sınırlıdır).

3. Alan Adı Tescili ve 36 Aylık Bulut Barındırma Hizmeti: Paket bedeline ilk 3 yıl boyunca (yayın tarihinden itibaren 36 ay) .com/.com.tr alan adı tahsisi, yüksek güvenlikli SSL sertifikası ve bulut barındırma hizmeti dahildir. Alan adı ilk günden itibaren doğrudan Müşterinin adına tescil edilir; DNS yönetim yetkisi Müşteridedir, rehin veya kilit altında tutulmaz. 36 aylık sürenin bitiminde Müşteriye şeffaf yenileme hatırlatması sunulur; Müşteri, barındırma sağlayıcısının resmi güncel maliyet tarifesi üzerinden (yıllık tahmini ~2.500–3.500 ₺) yenileyebilir veya kaynak kod devriyle bağımsız sunucusuna taşıyabilir.

4. Garanti Kapsamı, Müdahale SLA'sı ve Rutin Bakım: Başlangıç paketinde 15 gün, Profesyonel pakette 30 gün, Kurumsal pakette 60 gün sözleşmeli yazılımsal hata garantisi verilir. Bildirilen teknik aksaklıklara hafta içi mesai saatlerinde (Pazartesi-Cuma 09:00–18:00) WhatsApp veya e-posta üzerinden en geç 1–2 iş günü içinde ilk teknik inceleme başlatılır; kritik işlevsel aksaklıklar (form çalışmaması, link kırılması vb.) öncelikle giderilir. Müşteri kaynaklı yeni sayfa ekleme, metin/görsel değişikliği veya kapsam dışı tasarım revizyonları ise isteğe bağlı aylık bakım anlaşması (2.500 ₺/ay) çerçevesindedir. Profesyonel pakette ilk 1 ay, Kurumsal pakette ilk 3 ay rutin içerik güncelleme desteği dahildir.

5. Fatura, KDV ve Ödeme Koşulları: Tüm fiyatlar KDV hariçtir; %20 KDV eklenerek resmî e-Arşiv / e-Fatura düzenlenir. Fatura bedelinin tek seferde gider mi yazılacağı yoksa gayrimaddi hak amortismanına mı tabi tutulacağı Müşterinin mali müşavirinin takdirindedir. Tek seferlik ödemelerde sipariş anında %50 peşinat, kalan %50 bakiye ise yayına alma öncesinde canlı taslak onayında tahsil edilir; bakiye ödenmeden alan adı yönlendirmesi yapılmaz. Müşterinin kurumsal taleplerine istinaden kişiye/şirkete özel hazırlanan tasarımlarda ve ifasına başlanan dijital alan adı tahsislerinde cayma hakkı bulunmamaktadır; garanti süresince yazılımsal teknik aksaklıklar ücretsiz giderilir.

6. Kaynak Kod Lisansı ve Süreklilik (Kapanma) Güvencesi: Standart teslimat bulut altyapımızda barındırmayı kapsar. Web sitesine özgü kaynak kodlarının teslimi ek lisans devir bedeline tabidir (+%75 lisans devir bedeli, KDV hariç: Başlangıç: +13.125 ₺, Pro: +24.375 ₺, Kurumsal: +44.925 ₺ + KDV). Kaynak kod devri, sitenin kalıcı ve yazılı kullanım lisansıyla teslimini kapsar; Müşteri siteyi kendi bağımsız sunucusunda barındırabilir, değiştirebilir ve üçüncü kişilere teknik geliştirme için verebilir; ancak temel mimariyi ve şablonu üçüncü kişilere ticari olarak satamaz veya devredemez. Üçüncü taraf açık kaynak kütüphaneler kendi lisanslarına tabidir. Faaliyet Güvencesi: Hizmet Sağlayıcının ticari faaliyetini herhangi bir sebeple kalıcı olarak sonlandırması durumunda (vergi mükellefiyetinin kapanması, vefat veya 60 günden uzun süreyle erişilemezlik); sitenin kaynak kodları Müşterinin erişebileceği özel arşiv deposu (kod emaneti) üzerinden bedelsiz teslim edilir.

7. Taksitli Model (WaaS) ve Temerrüt Şartları: 12 aylık taksitli modelde alan adı ilk günden Müşteri adına tescil edilir. Düşük kurulum bedeli başlangıçta, aylık taksitler her ay fatura karşılığı ödenir. 12 aylık taahhüt tamamlandığında zorunlu aylık ödeme biter; site 36 aylık barındırma süresince ek ücret olmadan yayında kalır. Müşteri 12 aydan önce ayrılmak veya bağımsız sunucusuna taşımak isterse; kalan aylık taksitleri ve isteğe bağlı kaynak kod lisans bedelini ödeyerek kod arşivini teslim alır. Aylık taksit ödemesinin yazılı ihtara rağmen 15 (on beş) iş günü içinde yapılmaması halinde web yayını geçici olarak askıya alınabilir; ödemenin tamamlanmasıyla yayın derhal yeniden açılır. Web yayınının askıya alınması alan adı mülkiyetini ve DNS yönetim yetkisini kesinlikle etkilemez.

8. Mevzuata Uyum ve İçerik Sorumluluğu: Hizmet Sağlayıcı; avukatlık, sağlık ve mali müşavirlik sektörlerine yönelik web sitelerini meslek kurallarına duyarlı, bilgilendirici ve ağırbaşlı şablonlarla hazırlar; hukuki, tıbbi veya mesleki mevzuat danışmanlığı vermez. Nihai içeriğin sektörel mevzuata (TBB Reklam Yasağı, Sağlık Bakanlığı Tanıtım ve Bilgilendirme Yönetmeliği, TÜRMOB kuralları vb.) uygunluğu ve yayın onayı münhasıran Müşteriye aittir. Müşterinin talebiyle siteye eklenen ve mevzuata aykırı reklam sayılabilecek öğelerden (hasta/müvekkil yorumu, önce/sonra görseli, başarı ve garanti vaadi vb.) doğabilecek idari veya mesleki yaptırımlardan Müşteri bizzat ve tek başına sorumludur.

9. Fikri Mülkiyet, Logo ve Lisanslı Görseller: Müşteri tarafından sağlanan marka, logo, metin ve fotoğrafların telif ve hukuki sorumluluğu Müşteriye aittir. 360° Dijital Lansman paketinde hazırlanan özgün logo tasarımının mali hakları (FSEK m. 21, 22, 23, 24, 25), fatura bedelinin tam ve eksiksiz ödenmesi şartıyla Müşteriye yazılı olarak devredilir. Şablonlarda kullanılan ücretsiz stok fotoğraflar (Unsplash vb.) ticari kullanıma uygun genel lisanslıdır; sağlık ve hukuk sitelerinde mesleki güvenilirlik açısından Müşterinin kendi özgün ofis/ekip fotoğraflarını temin etmesi önerilir.

10. Kişisel Verilerin Korunması (KVKK): Müşterinin web sitesi üzerinden randevu, form veya e-posta yoluyla toplanan ziyaretçi verilerinde Müşteri "Veri Sorumlusu", Hizmet Sağlayıcı ise yalnızca teknik barındırma sağlayan "Veri İşleyen" sıfatındadır. Müşteri, kendi web sitesinde yasal KVKK aydınlatma ve çerez metinlerini yayınlamakla yükümlüdür.

11. Sorumluluk Sınırı ve Mücbir Sebepler: Doğal afet, savaş, mevzuat değişikliği, global telekomünikasyon ve bulut ağı kesintileri mücbir sebep sayılır. Kanunen izin verilen ölçüde, Hizmet Sağlayıcının işbu sözleşmeden doğan azami mali sorumluluğu, Müşterinin ilgili paket kapsamında ödediği toplam bedel ile sınırlıdır.

12. Referans İzni (Opt-in) ve Yetkili Mahkeme: Tamamlanan web siteleri, yalnızca Müşterinin yazılı (e-posta/mesaj) onayı alınması halinde Hizmet Sağlayıcının referans portfolyosunda sergilenebilir. İşbu sözleşmeden doğabilecek her türlü uyuşmazlıkta İstanbul Anadolu (Kartal) Mahkemeleri ve İcra Daireleri yetkilidir.

--------------------------------------------------
EK-1 SİPARİŞ ÖZETİ & HİZMET TAAHHÜTNAMESİ
Hizmet Sağlayıcı: Ahmet Hakan Cansız (Pendik V.D. - 2020589059)
Müşteri Unvanı / Adı: [Müşteri Bilgisi]
VKN / TCKN: [Vergi / Kimlik No]
Seçilen Paket: [Başlangıç / Profesyonel / Kurumsal / 360° Lansman]
Alan Adı: [Müşteriye Ait Alan Adı]
Sözleşme Bedeli: [Net Bedel] + %20 KDV
Ödeme Modeli: [Tek Seferlik: %50 Başlangıç + %50 Canlıya Alma / 12 Ay Taksitli WaaS]
Teslim Taahhüdü: İçerik onayını izleyen [3–5 / 5–7 / 7–10] iş günü`
    },
    privacy: {
      title: 'Gizlilik ve Çerez Politikası',
      icon: Lock,
      text: `MediWeb (Ahmet Hakan Cansız) web sitesi, kullanıcı deneyimini iyileştirmek, form güvenliğini sağlamak ve site performansını ölçümlemek amacıyla temel ve analitik çerezler kullanmaktadır.

1. Çerez Türleri: Sitemizde oturum güvenliği ve form işlevselliği için gerekli zorunlu teknik çerezler ile ziyaretçi etkileşimini anonim olarak ölçen performans çerezleri yer almaktadır.
2. Veri Güvenliği: İletişim ve teklif formları üzerinden paylaşılan veriler SSL/TLS 256-bit şifreleme ile korunur ve güvenli bulut sunucuları üzerinden iletilir.
3. Çerez Yönetimi: Tarayıcınızın ayarlarından çerez tercihlerinizi dilediğiniz zaman değiştirebilir veya silebilirsiniz. Çerezlerin devre dışı bırakılması bazı form özelliklerinin çalışmasını kısıtlayabilir.
4. İletişim: Gizlilik politikamızla ilgili her türlü soru için info@mediweb.com.tr adresi üzerinden bizimle iletişime geçebilirsiniz.`
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
