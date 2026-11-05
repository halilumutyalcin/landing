export interface DemoItem {
  id: string;
  slug: string;
  name: string;
  sectorId: 'hukuk' | 'klinik' | 'sanayi' | 'muhasebe' | 'emlak';
  sectorName: string;
  style: string;
  themeColor: 'slate' | 'blue' | 'amber' | 'emerald' | 'red';
  badge?: string;
  liveUrl: string;
  previewImage: string;
  shortDesc: string;
  targetAudience: string;
  keyFeatures: string[];
  pageBreakdown: {
    singlePage: string[];
    fivePages: string[];
    enterprise: string[];
  };
  highlights: {
    headline: string;
    subheadline: string;
    stats: { label: string; value: string }[];
  };
}

export const SECTORS = [
  { id: 'all', name: 'Tüm Tasarımlar', icon: 'LayoutGrid', count: 15 },
  { id: 'hukuk', name: 'Hukuk & Avukatlık', icon: 'Scale', count: 3 },
  { id: 'klinik', name: 'Sağlık & Klinik', icon: 'Stethoscope', count: 3 },
  { id: 'sanayi', name: 'Sanayi & İmalatçı', icon: 'Factory', count: 3 },
  { id: 'muhasebe', name: 'Mali Müşavir & YMM', icon: 'Calculator', count: 3 },
  { id: 'emlak', name: 'Emlak & Gayrimenkul', icon: 'Home', count: 3 },
] as const;

export const DEMO_CATALOG: DemoItem[] = [
  // 1. HUKUK TASARIMLARI
  {
    id: 'lexora',
    slug: 'lexora',
    name: 'Lexora',
    sectorId: 'hukuk',
    sectorName: 'Hukuk & Danışmanlık',
    style: 'Minimal · Kurumsal · Açık Tema',
    themeColor: 'slate',
    badge: 'Popüler Hukuk',
    liveUrl: '/preview/lexora',
    previewImage: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1200&q=80',
    shortDesc: 'Modern hukuk büroları ve avukatlık ortaklıkları için sakin, güvenilir ve tipografi odaklı tasarım.',
    targetAudience: 'Bağımsız avukatlar, hukuk büroları ve hukuki danışmanlık şirketleri.',
    keyFeatures: [
      'Uzmanlık Alanları Listesi (Ceza, Ticaret, Aile vb.)',
      'Müvekkil Ön Görüşme ve Danışma Formu',
      'Makale & Yargıtay Kararları Blog Modülü',
      'Doğrudan WhatsApp & Acil Müdafi İletişim Hattı'
    ],
    pageBreakdown: {
      singlePage: ['Hero & Manifesto', 'Hakkımızda & Ortaklık', 'Çalışma Alanları', 'Ekibimiz', 'SSS', 'İletişim & Konum'],
      fivePages: ['Anasayfa', 'Hakkımızda', 'Çalışma Alanları Detayları', 'Avukatlarımız & Kadro', 'İletişim & Randevu'],
      enterprise: ['15+ Sayfa Kapsamlı Mimari', 'İngilizce / Almanca 2 Dil', 'Dava Vaka Analizleri', 'Mevzuat Bülteni', 'Gelişmiş SEO']
    },
    highlights: {
      headline: 'Hukuki Güvenin Dijital Temsili',
      subheadline: 'Müvekkillerinizle ilk andan itibaren saygın ve kurumsal bir bağ kurun.',
      stats: [
        { label: 'Sayfa Yükleme', value: '< 0.8s' },
        { label: 'Mobil Uyum', value: '%100' },
        { label: 'SEO Puanı', value: '100' }
      ]
    }
  },
  {
    id: 'justice',
    slug: 'justice',
    name: 'Justice',
    sectorId: 'hukuk',
    sectorName: 'Hukuk & Danışmanlık',
    style: 'Prestij · Koyu Tema · Cam Efekt',
    themeColor: 'blue',
    badge: 'Dark Elegance',
    liveUrl: '/preview/justice',
    previewImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    shortDesc: 'Koyu lacivert zemin, altın/cam vurgular ve ağırbaşlı kurumsal kimlik arayan ceza ve ticaret avukatları için.',
    targetAudience: 'Ceza, ticaret, icra ve şirketler hukuku alanında çalışan deneyimli bürolar.',
    keyFeatures: [
      'Prestijli Koyu Tasarım & Glassmorphism',
      'Kıdemli Avukat Profilleri & Başarı Hikayeleri',
      'Hukuki Rehber Dosyaları & PDF İndirme',
      'Google Harita & Lokasyon Entegrasyonu'
    ],
    pageBreakdown: {
      singlePage: ['Hero', 'Büromuzun Felsefesi', 'Uzmanlıklar', 'Neden Biz', 'Sık Sorulanlar', 'İletişim'],
      fivePages: ['Anasayfa', 'Kurumsal Büro', 'Uzmanlık Alanları', 'Yönetici Avukatlar', 'İletişim & Harita'],
      enterprise: ['20 Sayfa', 'Uluslararası Tahkim Bölümü', 'Çok Dilli Altyapı', 'Basın Odası & Medya']
    },
    highlights: {
      headline: 'Ağırbaşlı ve Kararlı Hukuki Duruş',
      subheadline: 'Büyük ölçekli ticari davalar ve uluslararası müvekkiller için özel tasarlandı.',
      stats: [
        { label: 'Dönüşüm Oranı', value: '+%40' },
        { label: 'Lighthouse', value: '98' },
        { label: 'Özelleştirme', value: 'Sınırsız' }
      ]
    }
  },
  {
    id: 'legalist',
    slug: 'legalist',
    name: 'Legalist',
    sectorId: 'hukuk',
    sectorName: 'Hukuk & Danışmanlık',
    style: 'Editöryal · Dergi Estetiği · Prestij',
    themeColor: 'amber',
    badge: 'Akademik',
    liveUrl: '/preview/legalist',
    previewImage: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1200&q=80',
    shortDesc: 'Büyük başlıklar, asimetrik sütunlar ve akademik hukuki bülten yayını için tasarlanmış dergi estetiği.',
    targetAudience: 'Akademisyen avukatlar, arabuluculuk merkezleri ve patent/fikri mülkiyet ofisleri.',
    keyFeatures: [
      'Dergi Stili Tipografi & Serif Başlıklar',
      'Yayınlar & Kitaplar Tanıtım Bölümü',
      'Online Arabuluculuk / Danışmanlık Randevusu',
      'WhatsApp Entegre Hızlı Danışma Butonu'
    ],
    pageBreakdown: {
      singlePage: ['Hero & Alıntı', 'Hakkımızda', 'Yayınlar', 'Hizmetler', 'SSS', 'İletişim'],
      fivePages: ['Anasayfa', 'Hakkımızda', 'Hizmetler', 'Yayınlar/Blog', 'İletişim'],
      enterprise: ['Genişletilmiş Makale Kütüphanesi', 'Çok Dilli', 'Kurumsal Raporlama', 'E-Bülten Entegrasyonu']
    },
    highlights: {
      headline: 'Fikri Derinlik ve Modern Tipografi',
      subheadline: 'Görüş ve makalelerinizi doğrudan okunabilir kılan editoryal akış.',
      stats: [
        { label: 'Okunabilirlik', value: '100' },
        { label: 'Hız Endeksi', value: '0.6s' },
        { label: 'Responsive', value: '%100' }
      ]
    }
  },

  // 2. SAĞLIK & KLİNİK TASARIMLARI
  {
    id: 'dentart',
    slug: 'dentart',
    name: 'DentArt',
    sectorId: 'klinik',
    sectorName: 'Sağlık & Diş Kliniği',
    style: 'Organik · Pastel · Hijyenik',
    themeColor: 'emerald',
    badge: 'Klinik Favorisi ',
    liveUrl: '/preview/dentart',
    previewImage: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80',
    shortDesc: 'Diş hekimleri ve estetik klinikler için yumuşak formlar, vaka öncesi/sonrası ve online randevu.',
    targetAudience: 'Diş hekimleri, poliklinikler, estetik ve dermatoloji merkezleri.',
    keyFeatures: [
      'İnteraktif Önce / Sonra Vaka Karşılaştırma Kaydırıcısı',
      'Online Hızlı Randevu Talep Formu',
      'Uzman Hekim Özgeçmişleri & Sertifikaları',
      'Tedavi Süreçleri Görsel Rehberi'
    ],
    pageBreakdown: {
      singlePage: ['Hero & Karşılama', 'Klinik Hakkında', 'Tedavilerimiz', 'Önce/Sonra Galerisi', 'Hekimlerimiz', 'İletişim & Randevu'],
      fivePages: ['Anasayfa', 'Hakkımızda', 'Tedavilerimiz', 'Hekim Kadromuz', 'İletişim & Online Randevu'],
      enterprise: ['Çok Dilli Sağlık Turizmi Altyapısı (EN/DE/AR)', 'Tedavi Fiyat Hesaplayıcı', 'Genişletilmiş Vaka Arşivi', 'Blog']
    },
    highlights: {
      headline: 'Gülüşleri Değiştiren Dijital Deneyim',
      subheadline: 'Kliniğinizin steril, modern ve güvenilir ortamını hastalarınıza anında hissettirin.',
      stats: [
        { label: 'Randevu Dönüşümü', value: '+%55' },
        { label: 'Lighthouse', value: '99' },
        { label: 'Sağlık Turizmi', value: 'Uyumlu' }
      ]
    }
  },
  {
    id: 'medilife',
    slug: 'medilife',
    name: 'MediLife',
    sectorId: 'klinik',
    sectorName: 'Sağlık & Tıp Merkezi',
    style: 'Modern · Dinamik · Mavi',
    themeColor: 'blue',
    badge: 'Çok Branşlı',
    liveUrl: '/preview/medilife',
    previewImage: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80',
    shortDesc: 'Çok branşlı tıp merkezleri, laboratuvarlar ve fizik tedavi klinikleri için kurumsal site.',
    targetAudience: 'Tıp merkezleri, görüntüleme merkezleri, diyetisyenler ve psikologlar.',
    keyFeatures: [
      'Branş / Bölüm Listesi ve Arama',
      'Hızlı Tıkla-Ara Acil Hattı & WhatsApp',
      'Gerçek Hasta Yorumları & Değerlendirmeler',
      'Google Maps Tek Tıkla Yol Tarifi'
    ],
    pageBreakdown: {
      singlePage: ['Hero & Acil Hat', 'Tıbbi Bölümler', 'Doktorlarımız', 'Hasta Yorumları', 'SSS', 'İletişim & Ulaşım'],
      fivePages: ['Anasayfa', 'Hakkımızda', 'Tıbbi Bölümler', 'Doktorlarımız', 'İletişim'],
      enterprise: ['Laboratuvar Sonuç Portalı Bağlantısı', 'Sağlık Rehberi Blogu', '2 Dil', 'Geniş Cihaz Parkuru Tanıtımı']
    },
    highlights: {
      headline: 'Kapsamlı Sağlık Hizmetleri Portalı',
      subheadline: 'Hastalarınızın aradığı branş ve doktora 3 saniyede ulaşmasını sağlayın.',
      stats: [
        { label: 'Acil Arama', value: 'Tek Tık' },
        { label: 'Mobil Hız', value: '96' },
        { label: 'Ulaşılabilirlik', value: '%100' }
      ]
    }
  },
  {
    id: 'vitacare',
    slug: 'vitacare',
    name: 'VitaCare',
    sectorId: 'klinik',
    sectorName: 'Sağlık & Muayenehane',
    style: 'Minimal · Sade · Temiz',
    themeColor: 'emerald',
    badge: 'Bireysel Hekim',
    liveUrl: '/preview/vitacare',
    previewImage: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
    shortDesc: 'Bireysel doktor muayenehaneleri ve danışman hekimler için hızlı açılan ferah tasarım.',
    targetAudience: 'Tek hekimli özel muayenehaneler, fizyoterapistler ve beslenme uzmanları.',
    keyFeatures: [
      'Kompakt Hızlı Randevu Formu',
      'Çalışma Saatleri & Nöbetçi İletişim',
      'WhatsApp Doğrudan Danışma Hattı',
      'Hasta Memnuniyet Oranları'
    ],
    pageBreakdown: {
      singlePage: ['Hero & Tanıtım', 'Hakkımda & Eğitim', 'Uzmanlıklar', 'Yorumlar', 'İletişim'],
      fivePages: ['Anasayfa', 'Özgeçmiş & Başarılar', 'Hizmetler', 'Sık Sorulanlar', 'İletişim'],
      enterprise: ['Gelişmiş Vaka Galerisi', 'Akademik Yayınlar & TV Çıkışları', 'Online Danışmanlık Modülü']
    },
    highlights: {
      headline: 'Kişiselleştirilmiş Hekim Vitrini',
      subheadline: 'Hastalarınıza sıcak, profesyonel ve güven dolu bir ilk izlenim sunun.',
      stats: [
        { label: 'Yükleme', value: '0.5s' },
        { label: 'WhatsApp', value: 'Anlık' },
        { label: 'Lighthouse', value: '100' }
      ]
    }
  },

  // 3. SANAYİ & İMALATÇI TASARIMLARI
  {
    id: 'safepoint',
    slug: 'safepoint',
    name: 'ProMetal',
    sectorId: 'sanayi',
    sectorName: 'Sanayi & İmalatçı',
    style: 'Endüstriyel · Güvenilir · Metal',
    themeColor: 'emerald',
    badge: 'Fabrika & İmalat',
    liveUrl: '/preview/safepoint',
    previewImage: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80',
    shortDesc: 'Talaşlı imalat, metal ve plastik kalıp üreticileri için ihracat ve kurumsal müşteri odaklı vitrin.',
    targetAudience: 'Endüstriyel imalatçılar, talaşlı imalat tesisleri, metal ve plastik kalıp üreticileri.',
    keyFeatures: [
      'Üretim Kapasitesi & Makine Parkuru Listesi',
      'Teknik Çizim & CAD/CAM Teklif Formu',
      'ISO 9001 ve Kalite Sertifikaları Vitrini',
      'WhatsApp Hızlı İletişim & Fiyat Talebi'
    ],
    pageBreakdown: {
      singlePage: ['Hero & Makine Parkuru', 'Hakkımızda', 'Üretim Hizmetlerimiz', 'Kalite Belgelerimiz', 'Teklif Al & İletişim'],
      fivePages: ['Anasayfa', 'Kurumsal Hakkımızda', 'Talaşlı İmalat & Üretim', 'Makine Parkuru', 'İletişim & Teklif Formu'],
      enterprise: ['İnteraktif Kapasite Hesaplayıcı', 'İhracat Ürün Kataloğu & PDF İndirici', 'Geniş Referans Kataloğu', 'B2B Bayi Girişi']
    },
    highlights: {
      headline: 'Talaşlı İmalat ve Endüstriyel Üretimde Güven Veren Vitrin',
      subheadline: 'Yurt içi ve yurt dışı kurumsal alıcıların aradığı teknik yeterlilik ve disiplin.',
      stats: [
        { label: 'Teklif Talebi', value: '+%65' },
        { label: 'İhracat Uyumu', value: 'Eksiksiz' },
        { label: 'Hız', value: '98' }
      ]
    }
  },
  {
    id: 'zirvemakine',
    slug: 'zirvemakine',
    name: 'Zirve Makine',
    sectorId: 'sanayi',
    sectorName: 'Sanayi & İmalatçı',
    style: 'Dashboard · Koyu · Veri Odaklı',
    themeColor: 'slate',
    badge: 'Ağır Sanayi & Makine',
    liveUrl: '/preview/zirvemakine',
    previewImage: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
    shortDesc: 'Endüstriyel makine imalatı, üretim kapasitesi sayaçları ve teknik veri odaklı koyu tema.',
    targetAudience: 'Makine üreticileri, otomasyon sistemleri ve ağır sanayi tesisleri.',
    keyFeatures: [
      'Üretim ve Sevkiyat Kapasite Sayaçları',
      'Teknik Şartname & Tolerans Matrisi',
      'TSE ve CE Uygunluk Belgeleri',
      'Kurumsal Şirket Teklif Formu'
    ],
    pageBreakdown: {
      singlePage: ['Hero & Metrikler', 'Üretim Süreci', 'Makine Modelleri', 'Referanslar', 'Teklif Formu & İletişim'],
      fivePages: ['Anasayfa', 'Kurumsal', 'Makinelerimiz', 'Teknik Servis & Yedek Parça', 'İletişim'],
      enterprise: ['Çok Dilli İhracat Altyapısı', '20 Sayfa', 'Çok Şubeli İletişim & Bölge Temsilcilikleri']
    },
    highlights: {
      headline: 'Ağır Sanayi ve Makine İmalatında İhracat Odaklı Vitrin',
      subheadline: 'Büyük ölçekli tedarikçilerin ve fabrikaların aradığı teknik yetkinlik.',
      stats: [
        { label: 'Kurumsal Güven', value: 'En Yüksek' },
        { label: 'Lighthouse', value: '97' },
        { label: 'Metrik Paneli', value: 'Canlı' }
      ]
    }
  },
  {
    id: 'proguard',
    slug: 'proguard',
    name: 'ProTeknik',
    sectorId: 'sanayi',
    sectorName: 'Sanayi & İmalatçı',
    style: 'Modern · Dinamik · Mavi',
    themeColor: 'blue',
    badge: 'Endüstriyel Tedarik',
    liveUrl: '/preview/proguard',
    previewImage: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=80',
    shortDesc: 'Geniş ürün kataloğu, teknik malzeme tedariği ve toptan teklif motoru.',
    targetAudience: 'Endüstriyel hırdavat, fabrika sarf malzemeleri ve teknik hırdavat toptancıları.',
    keyFeatures: [
      'Ürün Kategori Filtreleme Sistemi',
      'PDF Katalog İndirme Modülü',
      'Fabrika ve Sanayi Referans Logoları',
      'WhatsApp Hızlı Fiyat & Sipariş Hattı'
    ],
    pageBreakdown: {
      singlePage: ['Hero & Ürünler', 'Hakkımızda', 'Ürün Kategorileri', 'Referanslarımız', 'İletişim'],
      fivePages: ['Anasayfa', 'Hakkımızda', 'Ürünlerimiz', 'Markalarımız', 'İletişim'],
      enterprise: ['B2B Bayi Portalı', 'Gelişmiş Teklif Motoru', 'Stok & Fiyat Entegrasyonu']
    },
    highlights: {
      headline: 'Fabrika ve Atölyelere Doğrudan Tedarik Vitrini',
      subheadline: 'Hızlı teklif alma ve toptan sipariş talebi toplayan modern katalog altyapısı.',
      stats: [
        { label: 'Ürün Vitrini', value: 'Dinamik' },
        { label: 'Hız Skoru', value: '99' },
        { label: 'İletişim', value: 'Anında' }
      ]
    }
  },

  // 4. MALİ MÜŞAVİR & FİNANS TASARIMLARI
  {
    id: 'mizan',
    slug: 'mizan',
    name: 'Mizan',
    sectorId: 'muhasebe',
    sectorName: 'Mali Müşavir & Denetim',
    style: 'Minimal · Sade · Ciddi',
    themeColor: 'slate',
    badge: 'SMMM Standart ',
    liveUrl: '/preview/mizan',
    previewImage: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80',
    shortDesc: 'SMMM ve bağımsız denetçiler için resmi vergi takvimi ve güven veren kurumsal sayfa.',
    targetAudience: 'Serbest Muhasebeci Mali Müşavirler (SMMM) ve bağımsız denetim büroları.',
    keyFeatures: [
      'Güncel Resmi Vergi Takvimi Hatırlatıcısı',
      'Adım Adım Şirket Kuruluş Süreç Rehberi',
      'WhatsApp Üzerinden Hızlı Danışma Butonu',
      'Mevzuat Duyuru Panosu'
    ],
    pageBreakdown: {
      singlePage: ['Hero & Mizan', 'Hakkımızda', 'Hizmetlerimiz', 'Vergi Takvimi', 'İletişim'],
      fivePages: ['Anasayfa', 'Hakkımızda', 'Hizmetlerimiz', 'Sık Sorulanlar', 'İletişim'],
      enterprise: ['Mevzuat Bülteni & Sirkülerler', 'Bordro Hesaplama Araçları', 'Yabancı Yatırımcı Rehberi']
    },
    highlights: {
      headline: 'Finansal Doğruluk ve Mali Rehberlik',
      subheadline: 'Mükellefleriniz için her ay güncel takvim ve güvenilir danışmanlık yüzü.',
      stats: [
        { label: 'Takvim', value: 'Otomatik' },
        { label: 'Lighthouse', value: '100' },
        { label: 'Güven Endeksi', value: '%100' }
      ]
    }
  },
  {
    id: 'denetimpro',
    slug: 'denetimpro',
    name: 'DenetimPro',
    sectorId: 'muhasebe',
    sectorName: 'Mali Müşavir & Denetim',
    style: 'Dashboard · Mavi · Hesaplayıcı',
    themeColor: 'blue',
    badge: 'Hesaplama Araçlı',
    liveUrl: '/preview/denetimpro',
    previewImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    shortDesc: 'Mevzuat sirküleri bülteni, bordro/KDV hesaplama araçları ve kurumsal mali danışmanlık vitrini.',
    targetAudience: 'Yeminli Mali Müşavirler (YMM), vergi denetim şirketleri ve bordro ajansları.',
    keyFeatures: [
      'İnteraktif Netten Brütte / KDV Hesaplama Araçları',
      'PDF Formatında Sirküler Bülteni İndirici',
      'Kurumsal Şirket Teklif & İletişim Formu',
      'Vergi İnceleme ve Raporlama Danışmanlığı'
    ],
    pageBreakdown: {
      singlePage: ['Hero & Panel', 'Hesaplayıcı Widget', 'Hizmetler', 'Sirkülerler', 'İletişim'],
      fivePages: ['Anasayfa', 'Kurumsal Denetim', 'Denetim Hizmetleri', 'Bülten', 'İletişim'],
      enterprise: ['Kapsamlı Vergi Rehberi Kütüphanesi', 'İngilizce Dil', 'Çok Şubeli Ofis Yönetimi']
    },
    highlights: {
      headline: 'Veri ve Hesaplama Odaklı Kurumsal Güç',
      subheadline: 'Ziyaretçilerinizi sitenizde tutan faydalı hesaplama modülleriyle öne çıkın.',
      stats: [
        { label: 'Kullanım Süresi', value: '+%70' },
        { label: 'Lighthouse', value: '98' },
        { label: 'Hesaplayıcı', value: 'Dahili' }
      ]
    }
  },
  {
    id: 'varlikymm',
    slug: 'varlikymm',
    name: 'Varlık YMM',
    sectorId: 'muhasebe',
    sectorName: 'Mali Müşavir & Denetim',
    style: 'Editöryal · Amber · Prestij',
    themeColor: 'amber',
    badge: 'YMM Prestij',
    liveUrl: '/preview/varlikymm',
    previewImage: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80',
    shortDesc: 'Yeminli mali müşavirler ve finans danışmanları için prestijli makale arşivi ve denetim sunumu.',
    targetAudience: 'Büyük ölçekli şirketlere tam tasdik ve KDV iadesi hizmeti veren YMM ortaklıkları.',
    keyFeatures: [
      'Akademik Makale & Analiz Arşivi',
      'Tam Tasdik Süreçleri Akış Şeması',
      'Kıdemli Ortak ve Denetçi Biyografileri',
      'VIP Müvekkil İletişim Hattı'
    ],
    pageBreakdown: {
      singlePage: ['Hero & Prestij', 'Ortaklık Felsefesi', 'Hizmetlerimiz', 'Yayınlarımız', 'İletişim'],
      fivePages: ['Anasayfa', 'Ortaklarımız', 'YMM Hizmetleri', 'Makaleler', 'İletişim'],
      enterprise: ['Uluslararası Vergi Raporları', 'Türkçe & İngilizce 2 Dil', 'Kurumsal Portfolyo']
    },
    highlights: {
      headline: 'Büyük Ölçekli Şirketler İçin Mali Güvence',
      subheadline: 'Tam tasdik ve KDV iadesi süreçlerinde kurumsal liderlik.',
      stats: [
        { label: 'Prestij', value: 'Kusursuz' },
        { label: 'Hız', value: '0.7s' },
        { label: 'Tipografi', value: 'Altın Oran' }
      ]
    }
  },

  // 5. EMLAK & GAYRİMENKUL TASARIMLARI
  {
    id: 'portfoy',
    slug: 'portfoy',
    name: 'Portföy',
    sectorId: 'emlak',
    sectorName: 'Emlak & Gayrimenkul',
    style: 'Klasik · Mavi · WhatsApp Satış',
    themeColor: 'blue',
    badge: 'Emlak Vitrini ',
    liveUrl: '/preview/portfoy',
    previewImage: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80',
    shortDesc: 'Gayrimenkul danışmanları ve emlak ofisleri için vitrin portföy ve tek tıkla WhatsApp ilan sorma sayfası.',
    targetAudience: 'Emlak ofisleri, gayrimenkul danışmanları ve arsa/tarla ofisleri.',
    keyFeatures: [
      'Öne Çıkan Satılık / Kiralık İlanlar Vitrini',
      'Tek Tıkla "Bu İlanı WhatsApp ile Sor" Butonu',
      'Bölge ve Uzmanlık Alanı Tanıtımı',
      'Müşteri Referansları ve Başarı Hikayeleri'
    ],
    pageBreakdown: {
      singlePage: ['Hero & Arama', 'Öne Çıkan İlanlar', 'Danışman Hakkında', 'Müşteri Yorumları', 'İletişim'],
      fivePages: ['Anasayfa', 'Hakkımızda', 'Satılık & Kiralık Portföy', 'Bölge Rehberi', 'İletişim'],
      enterprise: ['Proje Satış Kataloğu', '360 Derece Sanal Tur Entegrasyonu', 'İngilizce Dil Desteği']
    },
    highlights: {
      headline: 'İlanları Doğrudan Satışa Dönüştürün',
      subheadline: 'Ziyaretçiyi karmaşık formlarla yormadan tek tıkla WhatsApp üzerinden bağlayın.',
      stats: [
        { label: 'WhatsApp Talep', value: '+%75' },
        { label: 'Görsel Hızı', value: 'WebP 98' },
        { label: 'Mobil İlan', value: '%100' }
      ]
    }
  },
  {
    id: 'primeresidence',
    slug: 'primeresidence',
    name: 'PrimeResidence',
    sectorId: 'emlak',
    sectorName: 'Emlak & Gayrimenkul',
    style: 'Premium Cam · Altın/Amber · Lüks',
    themeColor: 'amber',
    badge: 'Lüks Konut',
    liveUrl: '/preview/primeresidence',
    previewImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    shortDesc: 'Lüks konut, villa projeleri ve rezidans satışları için tam ekran video/görsel sunumu ve kat planları.',
    targetAudience: 'Lüks konut projeleri, müteahhitler ve kentsel dönüşüm proje ofisleri.',
    keyFeatures: [
      'Tam Ekran Yüksek Çözünürlüklü Görsel Galerisi',
      'İnteraktif Kat Planı & Daire Tipleri İnceleyici',
      'VIP Randevu ve Özel Sunum Talep Formu',
      'Proje Lokasyon & Sosyal Donatılar Haritası'
    ],
    pageBreakdown: {
      singlePage: ['Hero & Sinematik', 'Proje Özellikleri', 'Kat Planları', 'Lokasyon & Donatılar', 'VIP Form'],
      fivePages: ['Anasayfa', 'Proje Hakkında', 'Daire Tipleri & Planlar', 'Sosyal Yaşam', 'Satış Ofisi & Randevu'],
      enterprise: ['Çok Projeli Şirket Portalı', 'Vatandaşlık Rehberi (EN/AR/RU)', 'Canlı Şantiye Kamerası Bağlantısı']
    },
    highlights: {
      headline: 'Ayrıcalıklı Yaşamın Sinematik Sunumu',
      subheadline: 'Yüksek bütçeli yatırımcıları etkileyen lüks ve minimalist mimari.',
      stats: [
        { label: 'Lüks İmaj', value: '10/10' },
        { label: 'Lighthouse', value: '96' },
        { label: 'Plan İnceleme', value: 'Dinamik' }
      ]
    }
  },
  {
    id: 'santiyeyapi',
    slug: 'santiyeyapi',
    name: 'Şantiye Yapı',
    sectorId: 'emlak',
    sectorName: 'İnşaat & Müteahhitlik',
    style: 'Neobrutalist · Sert · Kırmızı/Siyah',
    themeColor: 'red',
    badge: 'Müteahhitlik',
    liveUrl: '/preview/santiyeyapi',
    previewImage: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80',
    shortDesc: 'İnşaat ve taahhüt firmaları için devam eden/tamamlanan şantiye projeleri ve teknik şartname vitrini.',
    targetAudience: 'Müteahhitler, hafriyat, endüstriyel yapı ve altyapı inşaat şirketleri.',
    keyFeatures: [
      'Tamamlanan ve Devam Eden Projeler Filtresi',
      'Makine Parkı & Ekipman Listesi',
      'Teknik Şartname ve İhale Başvuru Butonu',
      'Şantiye İlerleme Görselleri'
    ],
    pageBreakdown: {
      singlePage: ['Hero & Güç', 'Projelerimiz', 'Hakkımızda', 'Makine Parkımız', 'İletişim'],
      fivePages: ['Anasayfa', 'Kurumsal', 'Devam Eden Projeler', 'Referanslar & Belgeler', 'İletişim'],
      enterprise: ['İhale & Taşeron Başvuru Modülü', '20 Sayfa Geniş Mimari', 'Şantiye Günlüğü & Arşiv']
    },
    highlights: {
      headline: 'Şantiyelerin Mühendislik Gücü',
      subheadline: 'Tamamlanan projeleriniz ve makine filonuzla güçlü müteahhitlik kimliği.',
      stats: [
        { label: 'Güç Endeksi', value: 'Maksimum' },
        { label: 'Hız Skoru', value: '98' },
        { label: 'Teknik Katalog', value: 'Dahili' }
      ]
    }
  },
];
