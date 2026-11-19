import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, FileText } from 'lucide-react';
import { siteConfig } from '@/config/site.config';

export const metadata: Metadata = {
  title: 'Hizmet ve Teslimat Sözleşmesi',
  description: 'Web tasarım, bulut barındırma, garanti ve teslimat şartlarını düzenleyen kurumsal hizmet sözleşmesi.',
  alternates: {
    canonical: `https://${siteConfig.domain}/sozlesme`,
  },
};

export default function SozlesmePage() {
  return (
    <div className="pt-32 pb-24 bg-black min-h-screen text-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Link 
          href="/"
          className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400 hover:text-amber-300 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Ana Sayfaya Dön</span>
        </Link>

        <div className="p-8 sm:p-12 rounded-3xl bg-[#0A0A0C] border border-white/[0.08] shadow-2xl space-y-6">
          <div className="flex items-center gap-3 pb-6 border-b border-white/10">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                Hizmet ve Teslimat Sözleşmesi
              </h1>
              <p className="text-xs text-zinc-400 mt-1">
                Web Tasarım, Barındırma, Lisans ve SLA Standartları
              </p>
            </div>
          </div>

          <div className="prose prose-invert max-w-none text-sm text-zinc-300 leading-relaxed space-y-5">
            <div>
              <h2 className="text-base font-bold text-white mb-2">1. Taraflar, Kapsam ve Ticari Amaç Beyanı</h2>
              <p>
                İşbu sözleşme; Orhangazi Mah. Gülcü Sk. No:4 D:8 Pendik/İstanbul adresinde mukim Ahmet Hakan Cansız (Pendik V.D. Vergi No: 2020589059 - İletişim: 0545 620 11 35 - info@mediweb.com.tr, bundan böyle <strong>"Hizmet Sağlayıcı"</strong> veya <strong>"MediWeb"</strong> olarak anılacaktır) ile sipariş veren Müşteri arasında akdedilir. Müşteri, işbu sözleşmeye konu web tasarım ve yazılım hizmetlerini ticari, mesleki veya kurumsal faaliyetleri kapsamında sipariş ettiğini ve işlemin 6502 sayılı Kanun kapsamında tüketici işlemi olmadığını kabul ve beyan eder.
              </p>
            </div>

            <div>
              <h2 className="text-base font-bold text-white mb-2">2. Teslim Süresi Başlangıcı ve Gecikme Güvencesi</h2>
              <p>
                Teslim süresi (Başlangıç: 3–5, Profesyonel: 5–7, Kurumsal: 7–10 iş günü); Müşterinin logo, kurumsal metin ve görsel içeriklerini yazılı olarak (e-posta veya WhatsApp) eksiksiz teslim ettiği ve proje kapsamını onayladığı iş gününü takip eden ilk iş günü başlar. Müşteri kaynaklı onay, revizyon iletimi veya içerik gecikmeleri teslim süresine eklenir. Canlı taslak inceleme bağlantısı Müşteriye iletildikten sonra 5 (beş) iş günü içinde yazılı revizyon veya itiraz bildirilmemesi halinde işin zımnen kabul edildiği varsayılır. Hizmet Sağlayıcının kusuru nedeniyle taahhüt edilen teslim tarihinin aşılması durumunda; taahhüt edilen tarihten sonraki her 5 (beş) iş günü gecikme için Müşteriye 1 ay ücretsiz rutin teknik bakım hediye edilir (azami 3 ay ile sınırlıdır).
              </p>
            </div>

            <div>
              <h2 className="text-base font-bold text-white mb-2">3. Alan Adı Tescili ve 36 Aylık Bulut Barındırma Hizmeti</h2>
              <p>
                Paket bedeline ilk 3 yıl boyunca (yayın tarihinden itibaren 36 ay) .com/.com.tr alan adı tahsisi, yüksek güvenlikli SSL sertifikası ve bulut barındırma hizmeti dahildir. Alan adı ilk günden itibaren doğrudan Müşterinin adına tescil edilir; DNS yönetim yetkisi Müşteridedir, rehin veya kilit altında tutulmaz. 36 aylık sürenin bitiminde Müşteriye şeffaf yenileme hatırlatması sunulur; Müşteri, barındırma sağlayıcısının resmi güncel maliyet tarifesi üzerinden (yıllık tahmini ~2.500–3.500 ₺) yenileyebilir veya kaynak kod devriyle bağımsız sunucusuna taşıyabilir.
              </p>
            </div>

            <div>
              <h2 className="text-base font-bold text-white mb-2">4. Garanti Kapsamı, Müdahale SLA'sı ve Rutin Bakım</h2>
              <p>
                Başlangıç paketinde 15 gün, Profesyonel pakette 30 gün, Kurumsal pakette 60 gün sözleşmeli yazılımsal hata garantisi verilir. Bildirilen teknik aksaklıklara hafta içi mesai saatlerinde (Pazartesi-Cuma 09:00–18:00) WhatsApp veya e-posta üzerinden en geç 1–2 iş günü içinde ilk teknik inceleme başlatılır; kritik işlevsel aksaklıklar (form çalışmaması, link kırılması vb.) öncelikle giderilir. Müşteri kaynaklı yeni sayfa ekleme, metin/görsel değişikliği veya kapsam dışı tasarım revizyonları ise isteğe bağlı aylık bakım anlaşması (2.500 ₺/ay) çerçevesindedir. Profesyonel pakette ilk 1 ay, Kurumsal pakette ilk 3 ay rutin içerik güncelleme desteği dahildir.
              </p>
            </div>

            <div>
              <h2 className="text-base font-bold text-white mb-2">5. Fatura, KDV ve Ödeme Koşulları</h2>
              <p>
                Tüm fiyatlar KDV hariçtir; %20 KDV eklenerek resmî e-Arşiv / e-Fatura düzenlenir. Fatura bedelinin tek seferde gider mi yazılacağı yoksa gayrimaddi hak amortismanına mı tabi tutulacağı Müşterinin mali müşavirinin takdirindedir. Tek seferlik ödemelerde sipariş anında %50 peşinat, kalan %50 bakiye ise yayına alma öncesinde canlı taslak onayında tahsil edilir; bakiye ödenmeden alan adı yönlendirmesi yapılmaz. Müşterinin kurumsal taleplerine istinaden kişiye/şirkete özel hazırlanan tasarımlarda ve ifasına başlanan dijital alan adı tahsislerinde cayma hakkı bulunmamaktadır; garanti süresince yazılımsal teknik aksaklıklar ücretsiz giderilir.
              </p>
            </div>

            <div>
              <h2 className="text-base font-bold text-white mb-2">6. Kaynak Kod Lisansı ve Süreklilik (Kapanma) Güvencesi</h2>
              <p>
                Standart teslimat bulut altyapımızda barındırmayı kapsar. Web sitesine özgü kaynak kodlarının teslimi ek lisans devir bedeline tabidir (+%75 lisans devir bedeli, KDV hariç: Başlangıç: +13.125 ₺, Pro: +24.375 ₺, Kurumsal: +44.925 ₺ + KDV). Kaynak kod devri, sitenin kalıcı ve yazılı kullanım lisansıyla teslimini kapsar; Müşteri siteyi kendi bağımsız sunucusunda barındırabilir, değiştirebilir ve üçüncü kişilere teknik geliştirme için verebilir; ancak temel mimariyi ve şablonu üçüncü kişilere ticari olarak satamaz veya devredemez. Üçüncü taraf açık kaynak kütüphaneler kendi lisanslarına tabidir. <strong>Faaliyet Güvencesi:</strong> Hizmet Sağlayıcının ticari faaliyetini herhangi bir sebeple kalıcı olarak sonlandırması durumunda (vergi mükellefiyetinin kapanması, vefat veya 60 günden uzun süreyle erişilemezlik); sitenin kaynak kodları Müşterinin erişebileceği özel arşiv deposu (kod emaneti) üzerinden bedelsiz teslim edilir.
              </p>
            </div>

            <div>
              <h2 className="text-base font-bold text-white mb-2">7. Taksitli Model (WaaS) ve Temerrüt Şartları</h2>
              <p>
                12 aylık taksitli modelde alan adı ilk günden Müşteri adına tescil edilir. Düşük kurulum bedeli başlangıçta, aylık taksitler her ay fatura karşılığı ödenir. 12 aylık taahhüt tamamlandığında zorunlu aylık ödeme biter; site 36 aylık barındırma süresince ek ücret olmadan yayında kalır. Müşteri 12 aydan önce ayrılmak veya bağımsız sunucusuna taşımak isterse; kalan aylık taksitleri ve isteğe bağlı kaynak kod lisans bedelini ödeyerek kod arşivini teslim alır. Aylık taksit ödemesinin yazılı ihtara rağmen 15 (on beş) iş günü içinde yapılmaması halinde web yayını geçici olarak askıya alınabilir; ödemenin tamamlanmasıyla yayın derhal yeniden açılır. Web yayınının askıya alınması alan adı mülkiyetini ve DNS yönetim yetkisini kesinlikle etkilemez.
              </p>
            </div>

            <div>
              <h2 className="text-base font-bold text-white mb-2">8. Mevzuata Uyum ve İçerik Sorumluluğu</h2>
              <p>
                Hizmet Sağlayıcı; avukatlık, sağlık ve mali müşavirlik sektörlerine yönelik web sitelerini meslek kurallarına duyarlı, bilgilendirici ve ağırbaşlı şablonlarla hazırlar; hukuki, tıbbi veya mesleki mevzuat danışmanlığı vermez. Nihai içeriğin sektörel mevzuata (TBB Reklam Yasağı, Sağlık Bakanlığı Tanıtım ve Bilgilendirme Yönetmeliği, TÜRMOB kuralları vb.) uygunluğu ve yayın onayı münhasıran Müşteriye aittir. Müşterinin talebiyle siteye eklenen ve mevzuata aykırı reklam sayılabilecek öğelerden (hasta/müvekkil yorumu, önce/sonra görseli, başarı ve garanti vaadi vb.) doğabilecek idari veya mesleki yaptırımlardan Müşteri bizzat ve tek başına sorumludur.
              </p>
            </div>

            <div>
              <h2 className="text-base font-bold text-white mb-2">9. Fikri Mülkiyet, Logo ve Lisanslı Görseller</h2>
              <p>
                Müşteri tarafından sağlanan marka, logo, metin ve fotoğrafların telif ve hukuki sorumluluğu Müşteriye aittir. 360° Dijital Lansman paketinde hazırlanan özgün logo tasarımının mali hakları (FSEK m. 21, 22, 23, 24, 25), fatura bedelinin tam ve eksiksiz ödenmesi şartıyla Müşteriye yazılı olarak devredilir. Şablonlarda kullanılan ücretsiz stok fotoğraflar (Unsplash vb.) ticari kullanıma uygun genel lisanslıdır; sağlık ve hukuk sitelerinde mesleki güvenilirlik açısından Müşterinin kendi özgün ofis/ekip fotoğraflarını temin etmesi önerilir.
              </p>
            </div>

            <div>
              <h2 className="text-base font-bold text-white mb-2">10. Kişisel Verilerin Korunması (KVKK)</h2>
              <p>
                Müşterinin web sitesi üzerinden randevu, form veya e-posta yoluyla toplanan ziyaretçi verilerinde Müşteri "Veri Sorumlusu", Hizmet Sağlayıcı ise yalnızca teknik barındırma sağlayan "Veri İşleyen" sıfatındadır. Müşteri, kendi web sitesinde yasal KVKK aydınlatma ve çerez metinlerini yayınlamakla yükümlüdür.
              </p>
            </div>

            <div>
              <h2 className="text-base font-bold text-white mb-2">11. Sorumluluk Sınırı ve Mücbir Sebepler</h2>
              <p>
                Doğal afet, savaş, mevzuat değişikliği, global telekomünikasyon ve bulut ağı kesintileri mücbir sebep sayılır. Kanunen izin verilen ölçüde, Hizmet Sağlayıcının işbu sözleşmeden doğan azami mali sorumluluğu, Müşterinin ilgili paket kapsamında ödediği toplam bedel ile sınırlıdır.
              </p>
            </div>

            <div>
              <h2 className="text-base font-bold text-white mb-2">12. Referans İzni (Opt-in) ve Yetkili Mahkeme</h2>
              <p>
                Tamamlanan web siteleri, yalnızca Müşterinin yazılı (e-posta/mesaj) onayı alınması halinde Hizmet Sağlayıcının referans portfolyosunda sergilenebilir. İşbu sözleşmeden doğabilecek her türlü uyuşmazlıkta İstanbul Anadolu (Kartal) Mahkemeleri ve İcra Daireleri yetkilidir.
              </p>
            </div>

            <div className="mt-8 p-6 rounded-2xl bg-white/[0.02] border border-white/10 font-mono text-xs space-y-2">
              <h3 className="font-bold text-amber-400 text-sm mb-3">EK-1 SİPARİŞ ÖZETİ &amp; HİZMET TAAHHÜTNAMESİ</h3>
              <p><strong>Hizmet Sağlayıcı:</strong> Ahmet Hakan Cansız (Pendik V.D. - 2020589059)</p>
              <p><strong>Müşteri Unvanı / Adı:</strong> [Müşteri Bilgisi]</p>
              <p><strong>VKN / TCKN:</strong> [Vergi / Kimlik No]</p>
              <p><strong>Seçilen Paket:</strong> [Başlangıç / Profesyonel / Kurumsal / 360° Lansman]</p>
              <p><strong>Alan Adı:</strong> [Müşteriye Ait Alan Adı]</p>
              <p><strong>Sözleşme Bedeli:</strong> [Net Bedel] + %20 KDV</p>
              <p><strong>Ödeme Modeli:</strong> [Tek Seferlik: %50 Başlangıç + %50 Canlıya Alma / 12 Ay Taksitli WaaS]</p>
              <p><strong>Teslim Taahhüdü:</strong> İçerik onayını izleyen [3–5 / 5–7 / 7–10] iş günü</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
