import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Shield } from 'lucide-react';
import { siteConfig } from '@/config/site.config';

export const metadata: Metadata = {
  title: 'KVKK Aydınlatma Metni',
  description: '6698 sayılı Kişisel Verilerin Korunması Kanunu ve 7499 sayılı Kanun uyarınca kişisel verilerin işlenmesine ilişkin aydınlatma metni.',
  alternates: {
    canonical: `https://${siteConfig.domain}/kvkk`,
  },
};

export default function KvkkPage() {
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
              <Shield className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                KVKK Aydınlatma Metni
              </h1>
              <p className="text-xs text-zinc-400 mt-1">
                6698 Sayılı Kanun ve 7499 Sayılı Güncel Değişiklikler Kapsamında
              </p>
            </div>
          </div>

          <div className="prose prose-invert max-w-none text-sm text-zinc-300 leading-relaxed space-y-4">
            <p>
              6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") ve 7499 sayılı Kanun ile yapılan güncel değişiklikler uyarınca, veri sorumlusu sıfatıyla <strong>{siteConfig.legalEntity.title}</strong> (Pendik V.D. Vergi No: 2020589059 - Adres: Orhangazi Mah. Gülcü Sk. No:4 D:8 Pendik/İstanbul - İletişim: 0545 620 11 35, info@mediweb.com.tr) olarak;
            </p>

            <h2 className="text-base font-bold text-white mt-6">1. İşlenen Kişisel Veriler</h2>
            <p>
              Ad, soyad, telefon numarası, kurumsal e-posta adresi, şirket unvanı, sektör bilgisi, vergi dairesi ve numarası (fatura süreçleri için) ile teklif formunda iletilen proje notları. Form alanlarımızda sağlık verisi, ceza mahkumiyeti gibi özel nitelikli kişisel veriler işlenmemekte olup ziyaretçilerimizin serbest metin alanlarında bu tür verileri paylaşmaması gerekmektedir.
            </p>

            <h2 className="text-base font-bold text-white mt-6">2. İşleme Amaçları ve Hukuki Sebepler</h2>
            <ul className="list-disc pl-5 space-y-1.5 text-zinc-300">
              <li><strong>KVKK m. 5/2-c:</strong> Web tasarım ve yazılım hizmet sözleşmesinin kurulması veya ifasıyla doğrudan doğruya ilgili olması,</li>
              <li><strong>KVKK m. 5/2-ç:</strong> Veri sorumlusunun hukuki yükümlülüğünü yerine getirebilmesi (Vergi Usul Kanunu, Türk Ticaret Kanunu uyarınca faturalandırma ve yasal defter kayıtları),</li>
              <li><strong>KVKK m. 5/2-f:</strong> Temel hak ve özgürlüklerinize zarar vermemek kaydıyla meşru menfaatlerimiz (müşteri memnuniyeti, teknik destek ve operasyonel iletişim süreçleri).</li>
            </ul>

            <h2 className="text-base font-bold text-white mt-6">3. Toplama Yöntemi</h2>
            <p>
              Web sitemizdeki keşif ve teklif formları, e-posta, telefon ve WhatsApp Business iletişim hatları üzerinden otomatik ve kısmen otomatik elektronik yöntemlerle toplanmaktadır.
            </p>

            <h2 className="text-base font-bold text-white mt-6">4. Veri Aktarımı ve Alıcı Grupları</h2>
            <p>
              Kişisel verileriniz ticari/pazarlama amacıyla üçüncü kişilere asla satılmaz veya kiralanmaz. Verileriniz yalnızca; yasal faturalandırma süreçleri için Gelir İdaresi Başkanlığı ve e-fatura özel entegratörüne, resmi mali müşavirimize, teknik altyapı hizmeti sağlayan bulut ve e-posta sunucu sağlayıcılarına ve kanunen yetkili kamu kurum ve kuruluşlarına mevzuat sınırları dahilinde aktarılmaktadır. İletişimin WhatsApp veya e-posta servisleri üzerinden yürütülmesi ve küresel bulut barındırma altyapısının kullanılması hallerinde, 7499 sayılı Kanun ile düzenlenen yurt dışı aktarım rejimine uygun teknik ve idari tedbirler ile standart sözleşme/hizmet güvenceleri uygulanmaktadır.
            </p>

            <h2 className="text-base font-bold text-white mt-6">5. Saklama Süreleri</h2>
            <p>
              Kişisel verileriniz; Türk Ticaret Kanunu (TTK) uyarınca ticari defter ve sözleşme ilişkisi kapsamında 10 yıl; Vergi Usul Kanunu (VUK) uyarınca fatura ve muhasebe kayıtları kapsamında 5 yıl; teklif aşamasında kalan ve sözleşmeye dönüşmeyen taleplerde ise azami 2 yıl süreyle muhafaza edilir ve sürenin bitiminde re'sen silinir veya imha edilir.
            </p>

            <h2 className="text-base font-bold text-white mt-6">6. İlgili Kişi Hakları</h2>
            <p>
              KVKK'nın 11. maddesi kapsamındaki haklarınızı (verilerinizin silinmesi, düzeltilmesi, işlenme amacının öğrenilmesi vb.) Orhangazi Mah. Gülcü Sk. No:4 D:8 Pendik/İstanbul adresine yazılı olarak veya sistemimizde kayıtlı e-posta adresiniz üzerinden <strong>info@mediweb.com.tr</strong> adresine ileterek her zaman kullanabilirsiniz.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
