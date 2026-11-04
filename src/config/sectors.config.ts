export interface SectorConfig {
  slug: string; // e.g. 'dis-klinigi-web-sitesi'
  shortSlug: string; // 'klinik'
  name: string; // 'Diş Kliniği'
  title: string; // 'Diş Kliniği Web Sitesi Tasarımı & Fiyatları (3-5 Günde Teslim)'
  metaDescription: string;
  heroHeadline: string;
  heroSubheadline: string;
  targetAudience: string;
  badge: string;
  relatedDemoSlugs: string[]; // e.g. ['dentart', 'medilife', 'vitacare']
  sectorSpecificNeeds: {
    title: string;
    description: string;
  }[];
  keyFeatures: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
  statHeadline: string;
  stats: {
    label: string;
    value: string;
  }[];
}

export const SECTORS_SEO_DATA: SectorConfig[] = [
  {
    slug: 'dis-klinigi-web-sitesi',
    shortSlug: 'dis-klinigi',
    name: 'Diş Kliniği & Diş Hekimi',
    title: 'Diş Kliniği Web Sitesi Tasarımı & Fiyatları | 3-5 Günde Teslim',
    metaDescription: 'Diş hekimleri ve poliklinikler için hasta randevulu, Google Harita uyumlu, 3 yıl domain ve hosting dahil ultra hızlı diş kliniği web sitesi tasarımı.',
    heroHeadline: 'Yeni Hasta Kazandıran Prestijli Diş Kliniği Web Sitesi',
    heroSubheadline: 'Kliniğinizin steril, modern ve güvenilir atmosferini yansıtan; Google Haritalar entegrasyonlu ve 0.3 saniyede anında açılan özel klinik web sitesi.',
    targetAudience: 'Diş hekimleri, ağız ve diş sağlığı poliklinikleri, ortodonti ve implant merkezleri.',
    badge: 'Sağlık Sektörü Çözümü',
    relatedDemoSlugs: ['dentart', 'medilife', 'vitacare'],
    sectorSpecificNeeds: [
      {
        title: 'Online Hasta Randevusu & WhatsApp',
        description: 'Hastaların doğrudan istedikleri hekim ve tedavi için randevu oluşturabilmesi veya anında WhatsApp ile iletişime geçmesi.'
      },
      {
        title: 'Google Harita & Yerel SEO Görünürlüğü',
        description: '"Yakınımdaki diş hekimi", "implant tedavisi [şehir]" aramalarında haritalarda en üstte çıkma optimizasyonu.'
      },
      {
        title: 'Hekim Kadrosu & Tedavi Sayfaları',
        description: 'İmplant, ortodonti, estetik gülüş tasarımı gibi uzmanlıkların profesyonel görsel ve şeffaf metinlerle sunumu.'
      },
      {
        title: 'Sağlık Bakanlığı & KVKK Mevzuatına Uyum',
        description: 'Reklam yasağı ilkelerine uygun kurumsal bilgilendirme dili ve tam uyumlu KVKK aydınlatma metinleri.'
      }
    ],
    keyFeatures: [
      '3 Yıl Alan Adı, SSL ve Yüksek Hızlı Hosting Dahil (0 TL Masraf)',
      'Mobil Uyumlu Online Randevu ve Hızlı Arama Butonları',
      'Google Haritalar (İşletme Profili) Kayıt ve Doğrulama Desteği',
      'Hekim Özgeçmişleri ve Sertifika Vitrini',
      'Tedavi Süreçleri ve Sık Sorulan Sorular Modülü',
      '0.3 Saniye Açılış Hızıyla Google Lighthouse 95+ Performansı'
    ],
    faqs: [
      {
        question: 'Diş kliniği web sitesi kaç günde teslim edilir?',
        answer: 'Tüm tasarım ve içerikler 3 ila 5 iş günü içerisinde anahtar teslim olarak tamamlanır ve 3 yıllık alan adı/hosting altyapısıyla canlıya alınır.'
      },
      {
        question: 'Sağlık Bakanlığı reklam mevzuatına uygun mu?',
        answer: 'Evet. Sitelerimiz ticari abartı ve haksız rekabet oluşturmayacak şekilde; hastayı doğru bilgilendirme, hekim uzmanlığı ve iletişim odaklı yasal standartlara tam uyumlu olarak hazırlanır.'
      },
      {
        question: 'Google Haritalarda kliniğimizin çıkmasını sağlıyor musunuz?',
        answer: 'Evet. Paketimiz kapsamında Google İşletme Profili (Maps) kaydınız yapılır veya mevcut kaydınız yerel SEO kriterlerine göre optimize edilir.'
      },
      {
        question: '3 yıl sonra sunucu veya lisans için ne kadar öderim?',
        answer: 'İlk 36 ay boyunca 1 TL dahi sunucu veya SSL faturası ödemezsiniz. 3 yılın sonunda sadece o günün standart alan adı yenileme maliyetiyle devam edebilirsiniz.'
      }
    ],
    statHeadline: 'Klinikler İçin Kanıtlanmış Sonuçlar',
    stats: [
      { label: 'Açılış Hızı', value: '0.3 sn' },
      { label: 'Mobil Randevu Dönüşümü', value: '+%65' },
      { label: '3 Yıllık Masraf', value: '0 TL' }
    ]
  },
  {
    slug: 'hukuk-burosu-web-sitesi',
    shortSlug: 'hukuk-burosu',
    name: 'Hukuk Bürosu & Avukat',
    title: 'Hukuk Bürosu Web Sitesi Tasarımı | Baro Uyumlu & 3 Yıl Barındırma',
    metaDescription: 'Avukatlar ve hukuk büroları için TBB reklam yasağına %100 uyumlu, saygın, müvekkil odaklı ve 3 yıl domain/hosting dahil kurumsal web sitesi.',
    heroHeadline: 'Müvekkil Kazandıran Saygın Hukuk Bürosu Web Sitesi',
    heroSubheadline: 'Türkiye Barolar Birliği reklam yasağı kurallarına %100 uyumlu, ağırbaşlı tipografi ve 0.3 sn açılış hızıyla tasarlanmış kurumsal avukatlık sitesi.',
    targetAudience: 'Bağımsız avukatlar, ortaklık büroları, arabuluculuk merkezleri ve kurumsal hukuk müşavirlikleri.',
    badge: 'Hukuk Sektörü Çözümü',
    relatedDemoSlugs: ['lexora', 'justice', 'legalist'],
    sectorSpecificNeeds: [
      {
        title: 'TBB Reklam Yasağına Tam Uyum',
        description: 'Avukatlık Meslek Kuralları ve TBB Reklam Yasağı Yönetmeliği ilkelerine harfiyen riayet eden kurumsal tanıtım dili.'
      },
      {
        title: 'Uzmanlık Alanları & Makale Yayını',
        description: 'Ceza, Ticaret, İcra, Gayrimenkul, Aile hukuku gibi alanlarda zengin içerik ve Yargıtay kararları yayın modülü.'
      },
      {
        title: 'Müvekkil İletişim & Gizlilik Mimarisi',
        description: 'KVKK uyumlu ön görüşme formları, doğrudan e-posta ve şifrelenmiş SSL altyapısıyla güvenli iletişim.'
      },
      {
        title: 'Prestijli ve Saygın Görsel Dil',
        description: 'Ucuz şablonlardan uzak, müvekkilde ilk andan itibaren güven oluşturan koyu veya editoryal açık renk paleti.'
      }
    ],
    keyFeatures: [
      '3 Yıl .com veya .av.tr Uyumlu Domain + SSL + CDN Barındırma Dahil',
      'Türkiye Barolar Birliği Reklam Yönetmeliği Standartları',
      'Çalışma Alanları (Ceza, Ticaret, İş Hukuku vb.) Zengin Sayfaları',
      'Hukuki Makale, Blog ve Duyuru Yayın Altyapısı',
      'Kıdemli Avukat ve Ekip Profil Sayfaları',
      'Doğrudan Acil Müdafi & WhatsApp İletişim Köprüsü'
    ],
    faqs: [
      {
        question: 'Avukatlar için web sitesi yaptırmak serbest mi?',
        answer: 'Evet, Türkiye Barolar Birliği Reklam Yasağı Yönetmeliği kapsamında avukatların büro ve uzmanlık alanlarını tanıtan web sitesine sahip olması tamamen yasaldır.'
      },
      {
        question: '.av.tr uzantılı alan adını bağlayabilir miyiz?',
        answer: 'Evet. Baro levha kaydınızla tahsis edilen .av.tr uzantınızı veya standart .com/.com.tr alan adınızı ücretsiz olarak kurup bağlıyoruz.'
      },
      {
        question: 'Web sitesi kaç günde yayına girer?',
        answer: 'İçeriklerinizle birlikte 3 ila 5 iş günü içerisinde tüm sayfalar anahtar teslim tamamlanır.'
      },
      {
        question: 'Müvekkiller cepten hızlı ulaşabilir mi?',
        answer: 'Evet, mobil cihazlarda tek tıkla doğrudan ofis numaranızı arama veya WhatsApp hattınıza ulaşma imkanı sunulur.'
      }
    ],
    statHeadline: 'Hukuk Bürolarında Güven Endeksi',
    stats: [
      { label: 'TBB Uyumluluğu', value: '%100' },
      { label: 'Google Hız Puanı', value: '98+' },
      { label: 'Teslim Süresi', value: '3-5 Gün' }
    ]
  },
  {
    slug: 'mimarlik-web-sitesi',
    shortSlug: 'mimarlik',
    name: 'Mimarlık & İç Mimarlık',
    title: 'Mimarlık Ofisi Web Sitesi Tasarımı | Portfolyo & Proje Vitrini',
    metaDescription: 'Mimarlık ve iç mimarlık ofisleri için yüksek çözünürlüklü proje galerili, minimalist, ultra hızlı ve 3 yıl barındırma dahil web sitesi.',
    heroHeadline: 'Projelerinizi Sanata Dönüştüren Mimarlık Web Sitesi',
    heroSubheadline: 'Estetik projelerinizi en yüksek çözünürlükte, sıfır bekleme süresi ve ödül standartlarında tipografiyle sergileyen özel mimari web vitrini.',
    targetAudience: 'Mimarlık ofisleri, iç mimarlar, restorasyon stüdyoları ve peyzaj mimarları.',
    badge: 'Tasarım & Mimarlık',
    relatedDemoSlugs: ['primeresidence', 'santiyeyapi', 'portfoy'],
    sectorSpecificNeeds: [
      {
        title: 'Geniş Ekran Proje Vitrini & Filtreleme',
        description: 'Konut, ticari, kamusal ve iç mekan projelerini kategorilere göre filtreleyen akıcı galeri.'
      },
      {
        title: '0.3 Saniye Yüklenen Yüksek Kalite Görseller',
        description: 'Büyük render ve fotoğraf dosyalarını yeni nesil WebP/AVIF formatlarıyla anında yükleyen CDN altyapısı.'
      },
      {
        title: 'Ödüller, Basın & Felsefe Bölümü',
        description: 'Ofisinizin tasarım manifestosunu, ulusal/uluslararası mimari ödüllerini ve basında çıkan haberleri öne çıkaran kurgu.'
      },
      {
        title: 'Doğrudan Teklif & Keşif Formu',
        description: 'Yeni yatırımcı ve mülk sahiplerinin proje brifini ve metrekare bilgilerini iletebileceği profesyonel form.'
      }
    ],
    keyFeatures: [
      '3 Yıl Domain + Yüksek Kapasiteli Görsel CDN Dahil',
      'Kategorize Edilebilir İnteraktif Proje Portfolyosu',
      'Tam Ekran Görsel Önizleme ve Proje Hikayesi Sayfaları',
      'Mimari Yaklaşım & Ekip Tanıtım Alanı',
      'Mobil Cihazlarda Kusursuz Tam Ekran Galeri Gezintisi',
      'Google Lighthouse 95+ Görsel Performans Skoru'
    ],
    faqs: [
      {
        question: 'Yüksek kaliteli render ve fotoğraflar siteyi yavaşlatır mı?',
        answer: 'Hayır. Next.js ve Vercel CDN üzerinde çalışan otomatik görsel optimizasyonu sayesinde devasa mimari görseller dahi 0.3 saniyede açılır.'
      },
      {
        question: 'İleride yeni projelerimizi nasıl ekleyeceğiz?',
        answer: 'Modüler mimarimiz sayesinde yeni projelerinizi kolayca ekleyebilir veya bakım paketimizle ekibimize bir WhatsApp mesajıyla ekletebilirsiniz.'
      },
      {
        question: 'Yabancı müşteriler için İngilizce dil desteği eklenebilir mi?',
        answer: 'Evet, ek modül olarak veya Kurumsal paketimizde tam altyapılı çok dilli (İngilizce/Almanca) seçenek mevcuttur.'
      }
    ],
    statHeadline: 'Mimari Vitrin Performansı',
    stats: [
      { label: 'Görsel Yükleme', value: '< 0.4s' },
      { label: 'Portfolyo Etkisi', value: 'Yüksek' },
      { label: 'Yıllık Sunucu Gideri', value: '0 TL' }
    ]
  },
  {
    slug: 'lojistik-web-sitesi',
    shortSlug: 'lojistik',
    name: 'Lojistik & Taşımacılık',
    title: 'Lojistik Firması Web Sitesi Tasarımı | Uluslararası Taşımacılık',
    metaDescription: 'Lojistik, navlun ve taşımacılık şirketleri için online navlun talep formlu, filo tanıtımlı, 3 yıl hosting dahil kurumsal lojistik web sitesi.',
    heroHeadline: 'Navlun Talebi Toplayan Kurumsal Lojistik Web Sitesi',
    heroSubheadline: 'Karayolu, denizyolu, havayolu ve depolama hizmetlerinizi küresel standartlarda sergileyen; anında navlun teklifi toplayan dinamik altyapı.',
    targetAudience: 'Uluslararası nakliyat, forwarder firmaları, antrepo işletmeleri ve filo sahipleri.',
    badge: 'Lojistik & Dış Ticaret',
    relatedDemoSlugs: ['santiyeyapi', 'proguard', 'mizan'],
    sectorSpecificNeeds: [
      {
        title: 'Hızlı Navlun Teklif Talep Modülü',
        description: 'Çıkış-varış noktası, yük cinsi ve hacim bilgilerini alarak ihracatçı firmalardan anlık navlun talebi toplama.'
      },
      {
        title: 'Hizmet & Hat Haritası Görselleştirmesi',
        description: 'Avrupa, BDT, Orta Doğu hatlarınızı ve düzenli sefer güzergahlarınızı gösteren interaktif harita.'
      },
      {
        title: 'Filo & Depolama Kapasitesi Vitrini',
        description: 'Özmal araç filosu, yeşil lojistik belgeleri (Euro 6 vb.) ve antrepo metrekare kapasitelerinin şeffaf sunumu.'
      },
      {
        title: 'Çok Dilli İhracat Altyapısı',
        description: 'Yabancı acente ve ithalatçılar için Türkçe, İngilizce ve opsiyonel Rusça/Almanca dil hazırlığı.'
      }
    ],
    keyFeatures: [
      '3 Yıl Global CDN + Kurumsal E-posta Altyapısı Dahil',
      'Kapsamlı Navlun ve Fiyat Teklif Formu',
      'Karayolu, Denizyolu, Havayolu ve İntermodal Hizmet Sayfaları',
      'Yetki Belgeleri (TİO, C2 vb.) ve ISO Kalite Sertifikaları Vitrini',
      'İhracatçılar İçin WhatsApp Hızlı Destek Butonu',
      'Dünya Çapında Hızlı Yüklenen Global Edge Dağıtımı'
    ],
    faqs: [
      {
        question: 'Yabancı ülkelerden sitemize girenler de hızlı açılış yaşar mı?',
        answer: 'Kesinlikle. Vercel Global Edge CDN altyapımız dünya genelinde 300+ veri merkezine dağıtıldığı için siteniz Frankfurt, Dubai veya Şanghay\'dan da 0.3 saniyede açılır.'
      },
      {
        question: 'Navlun teklif formları kime iletilir?',
        answer: 'Belirlediğiniz kurumsal operasyon e-posta adreslerine anında ve eşzamanlı olarak WhatsApp bildirimli olarak iletilir.'
      },
      {
        question: 'Sektörel yetki belgelerimizi yükleyebilir miyiz?',
        answer: 'Evet, TİO, ISO ve gümrük sertifikalarınız müvekkil ve müşterilerin güvenle inceleyebileceği yüksek çözünürlüklü alanda sergilenir.'
      }
    ],
    statHeadline: 'Global Taşımacılıkta Dijital Güç',
    stats: [
      { label: 'Küresel Açılış', value: '0.3 sn' },
      { label: 'Teklif Dönüşümü', value: '+%70' },
      { label: 'Sunucu Masrafı', value: '3 Yıl 0 TL' }
    ]
  },
  {
    slug: 'mali-musavir-web-sitesi',
    shortSlug: 'mali-musavir',
    name: 'Mali Müşavir & YMM',
    title: 'Mali Müşavir & YMM Web Sitesi Tasarımı | TÜRMOB Uyumlu',
    metaDescription: 'SMMM ve YMM ofisleri için mevzuat uyumlu, vergi takvimi ve pratik bilgiler modüllü, 3 yıl hosting dahil kurumsal mali müşavir web sitesi.',
    heroHeadline: 'Kurumsal Firmaların Güvendiği Mali Müşavirlik Web Sitesi',
    heroSubheadline: 'TÜRMOB etik kurallarına uygun, vergi takvimi ve mevzuat bülteni içeren, şirket kurucularına güven aşılayan kurumsal SMMM/YMM platformu.',
    targetAudience: 'Serbest Muhasebeci Mali Müşavirler (SMMM), Yeminli Mali Müşavirler (YMM) ve bağımsız denetim şirketleri.',
    badge: 'Mali & Finansal Çözüm',
    relatedDemoSlugs: ['mizan', 'denetimpro', 'varlikymm'],
    sectorSpecificNeeds: [
      {
        title: 'TÜRMOB Mesleki İlkelere Tam Uyum',
        description: 'Haksız rekabet oluşturmayan, mesleğin saygınlığını ve uzmanlık alanlarını öne çıkaran kurumsal şablon.'
      },
      {
        title: 'Şirket Kuruluş & Danışmanlık Rehberi',
        description: 'LTD, A.Ş. kuruluş süreçleri, teşvikler ve yabancı sermaye danışmanlığı hakkında bilgilendirici sayfalar.'
      },
      {
        title: 'Vergi Takvimi & Mevzuat Duyuruları',
        description: 'Mükelleflerin beyanname ve ödeme tarihlerini takip edebileceği pratik bilgi alanı.'
      },
      {
        title: 'Kurumsal Müşteri Ön Bilgi Formu',
        description: 'Yeni defter devri veya danışmanlık talep eden firmaların güvenle irtibata geçebileceği şifreli form.'
      }
    ],
    keyFeatures: [
      '3 Yıl Alan Adı, SSL ve Yüksek Hızlı Hosting Dahil',
      'TÜRMOB Standartlarında Saygın ve Güven Verici Tasarım',
      'Muhasebe, Denetim, Bordrolama ve Vergi Danışmanlığı Sayfaları',
      'Mükellefler İçin Vergi Takvimi ve Pratik Bilgiler Modülü',
      'Mobil Uyumlu WhatsApp ve Ofis Telefonu Bağlantısı',
      'Google Arama ve Harita Kaydı Optimizasyonu'
    ],
    faqs: [
      {
        question: 'Mali müşavirlerin web sitesi açması yasal mı?',
        answer: 'Evet. TÜRMOB Mecburi Meslek Kararları doğrultusunda yanıltıcı ve haksız rekabet doğurmayacak kurumsal bilgilendirme siteleri tamamen yasaldır.'
      },
      {
        question: 'Vergi takvimi ve pratik bilgileri sitede paylaşabilir miyiz?',
        answer: 'Evet, mükellefleriniz için vergi takvimini ve önemli yasal değişiklikleri paylaşabileceğiniz duyuru/blog yapısı hazır sunulmaktadır.'
      },
      {
        question: 'Site kurulumu ne kadar sürer?',
        answer: 'SMMM/YMM ofisleri için siteniz 3 ila 5 iş günü içerisinde tüm kurumsal sayfalarıyla hazır hale getirilir.'
      }
    ],
    statHeadline: 'Finansal Güven Göstergeleri',
    stats: [
      { label: 'TÜRMOB Uyumu', value: '%100' },
      { label: 'Lighthouse Puanı', value: '99' },
      { label: 'İlk 3 Yıl Masraf', value: '0 TL' }
    ]
  },
  {
    slug: 'osgb-is-guvenligi-web-sitesi',
    shortSlug: 'osgb',
    name: 'OSGB & İş Sağlığı Güvenliği',
    title: 'OSGB Web Sitesi Tasarımı | İş Sağlığı ve Güvenliği Şirketleri',
    metaDescription: 'Ortak Sağlık Güvenlik Birimleri için İSG teklif alma modüllü, mevzuat uyumlu, tehlike sınıfı rehberli ve 3 yıl barındırma dahil OSGB sitesi.',
    heroHeadline: 'Fabrika ve Şantiyelerden İSG Teklifi Toplayan OSGB Sitesi',
    heroSubheadline: 'İşyeri hekimliği, iş güvenliği uzmanlığı, patlamadan korunma ve periyodik kontrol hizmetlerinizi kurumsal şirketlere pazarlayan özel mimari.',
    targetAudience: 'OSGB firmaları, çevre danışmanlık şirketleri, periyodik kontrol ve İSG eğitim kuruluşları.',
    badge: 'Sanayi & İSG Çözümü',
    relatedDemoSlugs: ['safepoint', 'zirveosgb', 'proguard'],
    sectorSpecificNeeds: [
      {
        title: 'Tehlike Sınıfı & Personel Sayısı Teklif Modülü',
        description: 'Sanayi kuruluşlarının tehlike sınıfı (Az Tehlikeli, Tehlikeli, Çok Tehlikeli) ve personel sayısıyla İSG teklifi istemesi.'
      },
      {
        title: 'Hizmet Kapsamının Detaylı Tanıtımı',
        description: 'İşyeri hekimi, İSG uzmanı, risk analizi, acil durum eylem planı ve yangın eğitimi gibi zorunlu hizmetlerin açık dökümü.'
      },
      {
        title: 'Bakanlık Yetki Belgesi ve Sertifikalar',
        description: 'Çalışma ve Sosyal Güvenlik Bakanlığı yetki belgesi vitrini ve İSG-KATİP entegrasyon bilgilendirmesi.'
      },
      {
        title: 'Referanslar ve Sanayi Tesisleri Portföyü',
        description: 'Birlikte çalışılan fabrika, lojistik ve inşaat referanslarının kurumsal logo galerisi.'
      }
    ],
    keyFeatures: [
      '3 Yıl Domain, Kurumsal E-posta ve Barındırma Dahil',
      'İSG Hizmet Teklif Hesaplama ve Talep Formu',
      'İşyeri Hekimliği, İSG Uzmanlığı ve Ölçüm Sayfaları',
      'Yetki Belgeleri ve Akreditasyon Alanı',
      'Fabrika Yetkilileri İçin Doğrudan WhatsApp Destek Hattı',
      'Google\'da "OSGB [Şehir]" Aramalarında Yerel SEO Avantajı'
    ],
    faqs: [
      {
        question: 'Fabrikalardan gelen teklif talepleri nasıl bildirilir?',
        answer: 'Web sitesi üzerinden tehlike sınıfı ve çalışan sayısını belirten teklif formları anında şirketinizin e-posta ve WhatsApp hattına bildirim olarak düşer.'
      },
      {
        question: 'OSGB sitemiz mobil cihazlarda nasıl görünür?',
        answer: 'Tamamen duyarlı (responsive) mimari sayesinde mobil telefonlarda 0.3 saniyede açılır ve fabrika müdürlerinin tek tıkla arama yapmasını sağlar.'
      },
      {
        question: 'Referans logolarımızı ekleyebilir miyiz?',
        answer: 'Evet, hizmet verdiğiniz tanınmış markaları ve sanayi tesislerini ana sayfada prestijli bir kaydırıcıyla sergileyebilirsiniz.'
      }
    ],
    statHeadline: 'OSGB Sektörel Etki',
    stats: [
      { label: 'İSG Teklif Oranı', value: '+%80' },
      { label: 'Açılış Hızı', value: '0.3 sn' },
      { label: 'Bakım Güvencesi', value: '3 Yıl' }
    ]
  },
  {
    slug: 'gayrimenkul-emlak-web-sitesi',
    shortSlug: 'emlak',
    name: 'Emlak & Gayrimenkul',
    title: 'Gayrimenkul & Emlak Ofisi Web Sitesi | Portföy Vitrin Tasarımı',
    metaDescription: 'Emlak ofisleri ve gayrimenkul danışmanları için satılık/kiralık portföy vitrinli, Google Haritalar uyumlu, 3 yıl hosting dahil emlak web sitesi.',
    heroHeadline: 'Portföyünüzü Doğrudan Yatırımcıya Sunan Emlak Sitesi',
    heroSubheadline: 'Sahibinden ve diğer portallara bağımlı kalmadan; kendi kurumsal markanızla prestijli satılık & kiralık mülk vitrini oluşturun.',
    targetAudience: 'Emlak ofisleri, gayrimenkul yatırım ortaklıkları, lüks konut danışmanları ve arsa brokerları.',
    badge: 'Gayrimenkul & Yatırım',
    relatedDemoSlugs: ['portfoy', 'primeresidence', 'santiyeyapi'],
    sectorSpecificNeeds: [
      {
        title: 'Filtreli İlan & Portföy Vitrini',
        description: 'Konut, ticari, arsa, villa kategorilerinde detaylı özellikler, metrekare ve fiyat filtreleme.'
      },
      {
        title: 'Büyük Boyutlu Fotoğraf ve Video Galerisi',
        description: 'Geniş açılı mülk fotoğraflarını ve drone çekimlerini sıfır hız kaybıyla sunan optimize galeri.'
      },
      {
        title: 'Doğrudan Danışmana Bağlanan WhatsApp Butonu',
        description: 'İlanı inceleyen müşterinin tek tıkla o portföyden sorumlu danışmanla WhatsApp\'ta konuşması.'
      },
      {
        title: 'Mülkünü Satmak İsteyenler İçin "İlan Bırak" Formu',
        description: 'Bölgenizdeki ev/arsa sahiplerinden portföy toplamanızı sağlayan kurumsal başvuru formu.'
      }
    ],
    keyFeatures: [
      '3 Yıl Alan Adı, SSL ve Yüksek Hızlı Sunucu Dahil',
      'Satılık ve Kiralık Portföy Yönetim Sayfaları',
      'Portföy Detay Sayfasında Tek Tıkla WhatsApp\'tan İlan Paylaşımı',
      'Danışman Tanıtım ve Doğrudan İletişim Kartları',
      'Emlak Değerleme ve Portföy Bırakma Formu',
      'Google Haritalar Ofis Konumu Entegrasyonu'
    ],
    faqs: [
      {
        question: 'Emlak portalı abonelikleri varken neden kendi web sitemiz olmalı?',
        answer: 'Portallar rekabetle doludur ve müşteriyi başka ilanlara yönlendirir. Kendi sitenizde ise sadece sizin portföyünüz yer alır ve komisyon kaybı yaşamadan kurumsal prestij kazanırsınız.'
      },
      {
        question: 'Danışmanlarımızın iletişim bilgileri ilanlarda yer alır mı?',
        answer: 'Evet, her ilan kartında veya detayında ilgili gayrimenkul danışmanının fotoğrafı, direkt cep numarası ve hazır WhatsApp bağlantısı bulunur.'
      },
      {
        question: 'Yeni ilan eklemek zor mu?',
        answer: 'Hayır, modüler yapısı sayesinde yeni ilanlarınızı hızla yayına alabilirsiniz.'
      }
    ],
    statHeadline: 'Gayrimenkul Dönüşüm Verisi',
    stats: [
      { label: 'Komisyon Koruması', value: '%100' },
      { label: 'Mobil İnceleme', value: '< 0.5s' },
      { label: 'Yıllık Masraf', value: '0 TL' }
    ]
  },
  {
    slug: 'psikolog-klinik-web-sitesi',
    shortSlug: 'psikolog',
    name: 'Psikolog & Psikolojik Danışmanlık',
    title: 'Psikolog Web Sitesi Tasarımı | Online Terapi & Seans Randevusu',
    metaDescription: 'Klinik psikologlar ve danışmanlık merkezleri için sakin, güven veren, online seans randevulu ve 3 yıl barındırma dahil web sitesi tasarımı.',
    heroHeadline: 'Danışanlarınıza Güven Veren Psikolog Web Sitesi',
    heroSubheadline: 'Sakin pastel tonlar, gizliliği önceleyen danışan formu ve online terapi randevusuyla tasarlanmış etik kurallara tam uyumlu psikoloji sitesi.',
    targetAudience: 'Klinik psikologlar, aile ve çift danışmanları, pedagoglar ve psikiyatri merkezleri.',
    badge: 'Ruh Sağlığı & Danışmanlık',
    relatedDemoSlugs: ['vitacare', 'dentart', 'medilife'],
    sectorSpecificNeeds: [
      {
        title: 'Online Seans / Terapi Randevu Altyapısı',
        description: 'Yüz yüze ve online terapi randevusu talep eden danışanlar için gizlilik korumalı form akışı.'
      },
      {
        title: 'Uzmanlık ve Ekol Bilgilendirme Sayfaları',
        description: 'Bilişsel Davranışçı Terapi (BDT), EMDR, Şema Terapi gibi yaklaşımların açıklayıcı sunumu.'
      },
      {
        title: 'Etik İlkelere ve KVKK\'ya Tam Uyum',
        description: 'Danışan mahremiyetini koruyan, etik standartlara uygun şeffaf bilgilendirme ve aydınlatma metinleri.'
      },
      {
        title: 'Psikoloji Makaleleri ve Blog Kütüphanesi',
        description: 'Kaygı, stres, çocuk gelişimi gibi konularda Google\'da arama yapan potansiyel danışanları çeken makaleler.'
      }
    ],
    keyFeatures: [
      '3 Yıl Alan Adı ve Gizlilik Uyumlu Yüksek Güvenlikli Barındırma',
      'Online Terapi ve Yüz Yüze Seans Talep Formu',
      'Terapist Özgeçmişi, Akreditasyonları ve Ekol Tanıtımları',
      'Mobil WhatsApp Doğrudan Randevu Hattı',
      'Etik ve Yasal Mevzuata Tam Uyumlu İçerik Mimarisi',
      '0.3 Sn Açılış Hızıyla Huzurlu ve Hızlı Kullanıcı Deneyimi'
    ],
    faqs: [
      {
        question: 'Online terapi yapan psikologlar için uygun mu?',
        answer: 'Evet. Sitelerimiz hem yüz yüze klinikler hem de Zoom/Meet üzerinden online seans veren terapistler için özel olarak yapılandırılmaktadır.'
      },
      {
        question: 'Danışan bilgileri güvenli mi?',
        answer: 'Siteniz Vercel Global Edge üzerinde 256-bit SSL şifrelemeyle korunur. Form verileri doğrudan hekimin şahsi e-posta veya WhatsApp sistemine iletilir.'
      },
      {
        question: 'Ne kadar sürede yayına girer?',
        answer: '3 ila 5 iş günü içerisinde tüm sayfalarınız, uzmanlıklarınız ve randevu sisteminiz anahtar teslim hazır hale getirilir.'
      }
    ],
    statHeadline: 'Terapist Vitrininde Etki',
    stats: [
      { label: 'Danışan Güveni', value: 'Yüksek' },
      { label: 'Mobil Hız', value: '0.3 sn' },
      { label: 'Sunucu Maliyeti', value: '3 Yıl 0 TL' }
    ]
  }
];

export function getSectorBySlug(slug: string): SectorConfig | undefined {
  return SECTORS_SEO_DATA.find((s) => s.slug === slug);
}

export function getAllSectorSlugs(): string[] {
  return SECTORS_SEO_DATA.map((s) => s.slug);
}
