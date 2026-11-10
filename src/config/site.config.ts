export interface PackageItem {
  id: 'starter' | 'pro' | 'enterprise';
  name: string;
  badge: string;
  price: number;
  priceFormatted: string;
  period: string;
  tagline: string;
  targetAudience: string;
  pageStructure: string;
  deliveryTime: string;
  paymentTerms: string;
  domainHosting: string;
  revisions: string;
  warranty: string;
  support: string;
  animations: string;
  features: string[];
  notIncluded: string[];
  isPopular: boolean;
  ctaText: string;
  // WaaS (Aylık Abonelik Modeli)
  waasSetupPrice: number;
  waasSetupFormatted: string;
  waasMonthlyPrice: number;
  waasMonthlyFormatted: string;
  waasTotal12Months: number;
  waasTotal12MonthsFormatted: string;
  waasCommitment: string;
  // Kaynak Kod Devri
  sourceCodePrice: number;
  sourceCodePriceFormatted: string;
}

export interface ComparisonMatrixRow {
  feature: string;
  starter: string;
  pro: string;
  enterprise: string;
}

export interface TaxCalculationItem {
  packageName: string;
  price: number;
  kdv: number;
  totalPaid: number;
  kdvDeduction: number;
  corporateTaxSaving: number;
  netEffectiveCost: number;
  personalCompanyCost: number;
}

export interface ExtraServiceItem {
  id: string;
  icon: string;
  title: string;
  description: string;
  pricing: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: 'surec' | 'paketler' | 'hosting' | 'revizyon';
}

export interface PrincipleItem {
  type: 'do' | 'dont';
  title: string;
  desc: string;
}

export const siteConfig = {
  name: 'MediWeb',
  domain: 'mediweb.com.tr',
  tagline: 'Sektörünüze Özel Kurumsal Web Mimarisi. Canlı demoyu görün, onaylayın; anahtar teslim yayına alalım.',
  description: 'Web sitesi için haftalarca beklemenize ve sürpriz yenileme faturalarıyla karşılaşmanıza gerek yok. Sektörünüze özel geliştirilmiş kurumsal mimariler, ilk 3 yıl hosting ve alan adı dahil sabit fiyat güvencesiyle.',
  whatsappNumber: '905550000000',
  whatsappDisplay: '+90 555 000 00 00',
  phoneDisplay: '+90 (216) 700 00 00',
  email: 'info@mediweb.com.tr',
  address: 'Doğu Mah. Erol Kaya Cad. No:94, Pendik / İstanbul',
  legalEntity: {
    title: 'Şengüller Otomotiv & Bilişim Danışmanlığı - Halil Umut Yalçın',
    businessType: 'Şahıs İşletmesi',
    taxOffice: 'Pendik Vergi Dairesi',
    taxNumber: 'VKN: Resmî Sözleşmede Belirtilir',
    city: 'Pendik / İstanbul',
  },
  
  metrics: [
    { value: '3 Yıl', label: 'Hosting & Alan Adı Dahil', icon: 'ShieldCheck', sub: 'İlk 3 yıl sıfır yenileme maliyeti' },
    { value: '90–95+', label: 'Lighthouse Performans Skoru', icon: 'Zap', sub: 'Statik ve temel sayfalarda' },
    { value: '3–10 Gün', label: 'Pakete Göre Teslim Süresi', icon: 'Clock', sub: 'İçerik onayından itibaren' },
    { value: '16 Mimari', label: '6 Sektöre Özel Canlı Vitrin', icon: 'Sparkles', sub: 'Görerek seçebileceğiniz altyapı' },
  ],

  packages: [
    {
      id: 'starter',
      name: 'Başlangıç',
      badge: 'Başlangıç',
      price: 17500,
      priceFormatted: '17.500 ₺',
      period: 'Tek Seferlik',
      paymentTerms: '%100 Peşin',
      tagline: 'Yeni başlayan işletmeler, tek kişilik ofisler ve doğrudan dönüşüm hedefleyenler.',
      targetAudience: 'Yeni açılan işletmeler, tek kişilik ofisler, esnaf ve bütçesi kısıtlı KOBİ\'ler.',
      pageStructure: 'Tek Sayfa (One-Page) veya 5 Sayfaya Kadar Temel Yapı',
      deliveryTime: '3–5 İş Günü (İçerik onayından itibaren)',
      domainHosting: '3 Yıl Domain (.com / .com.tr) + Bulut Barındırma Dahil',
      revisions: '1 Tur Tasarım Revizyonu',
      warranty: '15 Gün Hata Garantisi',
      support: 'E-posta & WhatsApp Destek',
      animations: 'Temel fade-in ve scroll geçişleri',
      features: [
        'Tek sayfa (One Page) veya 5 sayfaya kadar kurumsal mimari',
        '3 Yıl Domain (.com / .com.tr) + Yüksek Hızlı Bulut Barındırma Dahil',
        'Mobil ve Tablet Tam Uyumlu Responsive Tasarım',
        'Temel SEO Altyapısı (Sitemap, Meta, Robots.txt)',
        'Sabit WhatsApp İletişim Butonu & Hızlı Mesaj',
        'E-posta Bildirimli İletişim Formu',
        'Google Analytics Kurulumu & Entegrasyonu',
        '2 Adet Kurumsal E-posta DNS Kurulumu',
        'KVKK ve Yasal Sayfa Şablonları Dahil',
        'Yüksek Hızlı Bulut Altyapısıyla Hızlı Açılış (Lighthouse 90+)',
      ],
      notIncluded: [
        'Gelişmiş SEO & Search Console Yönetimi',
        'Google Haritalar & Yorum Stratejisi',
        'Blog / Haber Modülü',
        'Aylık Bakım',
      ],
      isPopular: false,
      ctaText: 'Başlangıç Paketini Seç',
      waasSetupPrice: 5000,
      waasSetupFormatted: '5.000 ₺',
      waasMonthlyPrice: 1450,
      waasMonthlyFormatted: '1.450 ₺',
      waasTotal12Months: 22400,
      waasTotal12MonthsFormatted: '22.400 ₺',
      waasCommitment: '12 Ay Taahhütlü Model',
      sourceCodePrice: 13125,
      sourceCodePriceFormatted: '+13.125 ₺',
    },
    {
      id: 'pro',
      name: 'Profesyonel',
      badge: 'Profesyonel',
      price: 32500,
      priceFormatted: '32.500 ₺',
      period: 'Tek Seferlik',
      paymentTerms: '%50 Başlangıçta + %50 Teslimde',
      tagline: 'Avukatlık ofisleri, klinikler, sanayi firmaları, mali müşavirler ve yerleşik KOBİ\'ler.',
      targetAudience: 'Kurumsal ciddiyet arayan avukatlar, sağlık klinikleri, danışmanlık firmaları ve KOBİ\'ler.',
      pageStructure: '10 Sayfaya Kadar (Anasayfa, Hakkımızda, Hizmetler, Ekip, Blog, SSS, İletişim + 3 Sayfa)',
      deliveryTime: '5–7 İş Günü (İçerik onayından itibaren)',
      domainHosting: '3 Yıl Domain (.com / .com.tr) + Bulut Barındırma Dahil',
      revisions: '2 Tur Tasarım Revizyonu',
      warranty: '30 Gün Hata Garantisi',
      support: 'Öncelikli WhatsApp Destek + 1 Ay Rutin Bakım Dahil (Sonrasında İsteğe Bağlı: 2.500 ₺/ay)',
      animations: 'Gelişmiş — parallax, mikro hover efektleri, pürüzsüz geçişler',
      features: [
        '10 Sayfaya Kadar Kurumsal Site Mimarisi',
        '3 Yıl Domain (.com / .com.tr) + Yüksek Hızlı Bulut Barındırma Dahil',
        'Sektörel Mevzuat Uyumu (TBB, Sağlık Bakanlığı, TÜRMOB kurallarına duyarlı dil)',
        'Google Haritalar (İşletme Profili) Kaydı & Doğrulaması',
        'Google Search Console Bağlantısı & JSON-LD Schema',
        'Blog / Duyuru Altyapısı (Kategori & Yazar Desteği)',
        'Accordion Yapısında Sık Sorulan Sorular Bölümü',
        'Gelişmiş Form (Konu Seçimi, Dosya Eki, Bildirim)',
        'Canlı Destek veya Akıllı WhatsApp Yönlendirme Kurulumu',
        '5 Adet Kurumsal E-posta DNS Kurulumu',
        'Sosyal Paylaşım Kartları (Open Graph)',
        'Lighthouse 90–95+ Performans Optimizasyonu (Statik Sayfalar)',
        'İlk 1 Ay İçerik Güncelleme & Bakım Desteği Dahil (Sonrasında İsteğe Bağlı: 2.500 ₺/ay)',
      ],
      notIncluded: [
        'Çoklu Yabancı Dil (Ek Hizmet)',
        'Anahtar Teslim Metin Yazarlığı (Ek Hizmet)',
      ],
      isPopular: true,
      ctaText: 'En Çok Tercih Edileni Seç',
      waasSetupPrice: 7500,
      waasSetupFormatted: '7.500 ₺',
      waasMonthlyPrice: 2650,
      waasMonthlyFormatted: '2.650 ₺',
      waasTotal12Months: 39300,
      waasTotal12MonthsFormatted: '39.300 ₺',
      waasCommitment: '12 Ay Taahhütlü Model',
      sourceCodePrice: 24375,
      sourceCodePriceFormatted: '+24.375 ₺',
    },
    {
      id: 'enterprise',
      name: 'Kurumsal',
      badge: 'Kurumsal',
      price: 59900,
      priceFormatted: '59.900 ₺',
      period: 'Tek Seferlik',
      paymentTerms: '%40 Başlangıçta + %30 Tasarım Onayında + %30 Yayında',
      tagline: 'Prestijli markalar, çok şubeli firmalar ve ihracat yapan kurumsal yapılar.',
      targetAudience: 'Çok şubeli, ihracat yapan veya güçlü pazar lideri imajı hedefleyen şirketler.',
      pageStructure: '20 Sayfaya Kadar Geniş Mimari + Türkçe & İngilizce 2 Dil Dahil',
      deliveryTime: '7–10 İş Günü (İçerik onayından itibaren)',
      domainHosting: '3 Yıl Domain (.com / .com.tr) + Bulut Barındırma Dahil',
      revisions: '3 Tur Tasarım Revizyonu',
      warranty: '60 Gün Hata Garantisi',
      support: 'Atanmış Müşteri Temsilcisi + 3 Ay Rutin Bakım Dahil (Sonrasında İsteğe Bağlı: 2.500 ₺/ay)',
      animations: 'Premium — aurora glow, interaktif vitrin, glassmorphism',
      features: [
        '20 Sayfaya Kadar Geniş Kurumsal İçerik Mimarisi',
        '2 Dil Dahil (Türkçe + İngilizce Tam Altyapısı)',
        'Tarafımızca Yazılmış 5 Adet SEO Uyumlu Blog Makalesi',
        'Anahtar Teslim İçerik Üretimi & Profesyonel Görsel Yerleşimi',
        'Google Haritalar Tam Optimizasyon + QR Kodlu Lokasyon & İletişim Kartı',
        'Departman Yönlendirmeli Gelişmiş WhatsApp Sistemi',
        '10 Adet Kurumsal E-posta DNS Kurulumu',
        'Sayfa Bazlı Birebir SEO ve İç Bağlantı Mimarisi',
        '30. Gün Karşılaştırmalı Performans & Arama Raporu',
        'İlk 3 Ay Güncelleme & SEO Takip Desteği Dahil',
      ],
      notIncluded: [],
      isPopular: false,
      ctaText: 'Kurumsal Paketi Seç',
      waasSetupPrice: 12500,
      waasSetupFormatted: '12.500 ₺',
      waasMonthlyPrice: 4850,
      waasMonthlyFormatted: '4.850 ₺',
      waasTotal12Months: 70700,
      waasTotal12MonthsFormatted: '70.700 ₺',
      waasCommitment: '12 Ay Taahhütlü Model',
      sourceCodePrice: 44925,
      sourceCodePriceFormatted: '+44.925 ₺',
    }
  ] as PackageItem[],

  taxCalculation: [
    {
      packageName: 'Başlangıç',
      price: 17500,
      kdv: 3500,
      totalPaid: 21000,
      kdvDeduction: 3500,
      corporateTaxSaving: 4375,
      netEffectiveCost: 13125,
      personalCompanyCost: 11375,
    },
    {
      packageName: 'Profesyonel',
      price: 32500,
      kdv: 6500,
      totalPaid: 39000,
      kdvDeduction: 6500,
      corporateTaxSaving: 8125,
      netEffectiveCost: 24375,
      personalCompanyCost: 21125,
    },
    {
      packageName: 'Kurumsal',
      price: 59900,
      kdv: 11980,
      totalPaid: 71880,
      kdvDeduction: 11980,
      corporateTaxSaving: 14975,
      netEffectiveCost: 44925,
      personalCompanyCost: 38935,
    },
  ] as TaxCalculationItem[],

  extraServices: [
    {
      id: 'ai-assistant',
      icon: 'Bot',
      title: 'Sitede AI Akıllı Asistan',
      description: 'Ziyaretçi sorularını 7/24 yanıtlayan, SSS içeriğinizden öğrenen ve mesai dışı teklif toplayan yapay zeka chatbot. (Kullanıcı verileri güvenli model sağlayıcı üzerinden işlenir; hukuk ve sağlıkta teşhis veya hukuki tavsiye vermez).',
      pricing: 'Tek seferlik kurulum + lisans',
    },
    {
      id: 'whatsapp-business',
      icon: 'MessageSquare',
      title: 'WhatsApp Business Entegrasyonu',
      description: 'Departman seçimi (Satış, Destek, Randevu), otomatik karşılama ve mesai dışı yanıt sistemleri.',
      pricing: 'Tek seferlik kurulum',
    },
    {
      id: 'sms-integration',
      icon: 'Smartphone',
      title: 'SMS Bildirim Entegrasyonu',
      description: 'Form dolduğunda müşteriye ve firma yetkilisine anlık SMS onayı ve randevu hatırlatması.',
      pricing: 'Kurulum + SMS paket bedeli',
    },
    {
      id: 'extra-lang',
      icon: 'Globe',
      title: 'Ek Yabancı Dil Desteği',
      description: 'Almanca, Arapça, Rusça veya Fransızca için dil değiştirici, hreflang etiketleri ve altyapı kurulumu.',
      pricing: 'Dil başına ~7.500 ₺',
    },
    {
      id: 'admin-cms',
      icon: 'Settings',
      title: 'Headless CMS / Admin Paneli',
      description: 'Metin, resim, blog ve duyuruları kendiniz yönetebileceğiniz modern bulut panel entegrasyonu ve eğitimi.',
      pricing: 'Tek seferlik ~9.900 ₺',
    },
    {
      id: 'advanced-seo',
      icon: 'TrendingUp',
      title: 'Aylık İleri SEO & Harita Yönetimi',
      description: 'Aylık anahtar kelime takibi, Google Harita gönderileri, rakip analizi ve yapay zeka arama motorları optimizasyonu.',
      pricing: 'Aylık 6.500 ₺\'den başlayan',
    },
    {
      id: 'source-code',
      icon: 'Code2',
      title: 'Tam Kaynak Kod & Bağımsız Lisans Devri',
      description: 'Sitenin tüm kaynak kodlarının ve varlıklarının teslim edilmesi. Kendi bağımsız sunucunuzda kurum içi ekibinizle barındırma ve geliştirme imkanı.',
      pricing: '+%75 Lisans Devri (Başlangıç: 13.125 ₺, Pro: 24.375 ₺, Kurumsal: 44.925 ₺)',
    },
    {
      id: 'content-writing',
      icon: 'PenTool',
      title: 'Anahtar Teslim Metin Yazarlığı',
      description: 'Sektörünüze özel, ikna edici ve SEO uyumlu tüm sayfa metinlerinin profesyonelce yazılması.',
      pricing: 'Sayfa başı ~1.250 ₺',
    },
    {
      id: 'google-review',
      icon: 'Star',
      title: 'Google İşletme Profili & Tarafsız Yorum Standı',
      description: 'Tüm müşterilere doğrudan ve tarafsız inceleme bağlantısı sunan masaüstü QR stant tasarımı ve Google politikalarına uyumlu yerel rehberlik. (Not: Hukuk ve sağlık sektörlerinde meslek kuralları gereği danışan/hasta yorumu kullanımı kısıtlıdır.)',
      pricing: 'Kurulum paketi ~3.500 ₺',
    },
    {
      id: 'white-label',
      icon: 'ShieldOff',
      title: 'White-Label / Ajans İmzası Kaldırma',
      description: 'Sitenin altındaki "Mimari: MediWeb" ibaresinin tamamen kaldırılması ve sitenin bağımsız kurumsal markanız altında sunulması.',
      pricing: '+3.500 ₺ (Tek Seferlik)',
    },
    {
      id: '360-launch',
      icon: 'Sparkles',
      title: '360° Logo & Kurumsal Kimlik Paketi',
      description: 'Vektörel logo tasarımı, renk kılavuzu, kartvizit ve kurumsal e-posta imza şablonu ile Google Harita resmi doğrulaması.',
      pricing: 'Pakete Ek ~9.500 ₺ (Pro+ Pakette Dahil)',
    },
    {
      id: 'maintenance',
      icon: 'ShieldCheck',
      title: 'Aylık Teknik Güvence & Rutin Bakım',
      description: 'Aylık içerik güncellemeleri, güvenlik kontrolleri, DNS izleme ve kesintisiz teknik destek.',
      pricing: 'Profesyonel pakette 1 ay, Kurumsal pakette 3 ay dahil; sonrasında isteğe bağlı 2.500 ₺/ay',
    }
  ] as ExtraServiceItem[],

  comparisonMatrix: [
    { feature: 'Kime uygun?', starter: 'Yeni başlayan işletmeler, tek kişilik ofisler', pro: 'Kurumsal görünüm isteyen işletmeler & KOBİ\'ler', enterprise: 'Profesyonel dijital varlık ve ihracat odaklı firmalar' },
    { feature: 'Tasarım mimarisi', starter: 'Hazır yapı üzerinde özelleştirilmiş tasarım', pro: 'Markaya özel UI/UX tasarım ve kurumsal renkler', enterprise: 'Tamamen özel UI/UX + gelişmiş etkileşimler' },
    { feature: 'Sayfa yapısı', starter: 'Tek sayfalık landing page veya 5 sayfaya kadar', pro: '10 sayfaya kadar kurumsal yapı', enterprise: '20 sayfaya kadar / ihtiyaca göre' },
    { feature: 'Mobil & tablet uyumluluk', starter: '✓ Dahil (Mobil & Tablet Uyumlu)', pro: '✓ Dahil (Mobil & Tablet Uyumlu)', enterprise: '✓ Dahil (Mobil & Tablet Uyumlu)' },
    { feature: 'Ana Sayfa (Hero & Vitrin)', starter: '✓ Dahil', pro: '✓ Dahil', enterprise: '✓ Dahil' },
    { feature: 'Hakkımızda sayfası', starter: 'Bölüm olarak (One-Page)', pro: '✓ Ayrı özel sayfa', enterprise: '✓ Zengin hikaye & zaman tüneli sayfası' },
    { feature: 'Hizmetler / Ürünler', starter: 'Bölüm olarak (3-6 hizmet)', pro: '✓ Ayrı detay sayfaları', enterprise: '✓ Gelişmiş mimari & filtreli detay sayfaları' },
    { feature: 'Blog / Haberler modülü', starter: '—', pro: 'Opsiyonel / Temel altyapı', enterprise: '✓ Kategori, etiket ve yazar destekli' },
    { feature: 'İletişim sayfası', starter: 'Temel bölüm', pro: '✓ Ayrı sayfa & Google Harita', enterprise: '✓ Gelişmiş sayfa, departman seçimi & harita' },
    { feature: 'İletişim formu', starter: 'Temel form', pro: '✓ E-posta bildirimli gelişmiş form', enterprise: '✓ Dosya ekli, çoklu e-posta & SMS bildirimli' },
    { feature: 'WhatsApp entegrasyonu', starter: '✓ Sabit WhatsApp butonu', pro: '✓ Hazır mesajlı buton', enterprise: '✓ Departman yönlendirmeli akıllı buton' },
    { feature: 'Google Haritalar (İşletme)', starter: 'Harita iframe yerleşimi', pro: '✓ Profil kaydı, optimizasyon & yol tarifi desteği', enterprise: '✓ Tam optimizasyon + QR lokasyon kartı' },
    { feature: 'Sosyal medya bağlantıları', starter: '✓ Bağlantı ikonları', pro: '✓ Bağlantılar + Open Graph paylaşım kartı', enterprise: '✓ Open Graph zengin önizleme kartları' },
    { feature: 'Temel SEO altyapısı', starter: '✓ Meta, sitemap, robots.txt', pro: '✓ Dahil', enterprise: '✓ Dahil' },
    { feature: 'Gelişmiş SEO & Schema', starter: '—', pro: '✓ JSON-LD Schema & Search Console', enterprise: '✓ Sayfa bazlı derin SEO & iç bağlantı mimarisi' },
    { feature: 'Google Analytics & Search Console', starter: 'Temel Analytics', pro: '✓ Analytics + Search Console kurulumu', enterprise: '✓ İleri seviye hedef & dönüşüm takibi' },
    { feature: 'Site hız optimizasyonu', starter: 'Temel (Yüksek Hızlı Altyapı)', pro: 'Gelişmiş (Lighthouse 90+)', enterprise: 'İleri Seviye (Statik Sayfalarda 90–95+)' },
    { feature: 'Güvenlik / SSL sertifikası', starter: '✓ 3 Yıl Ücretsiz SSL', pro: '✓ 3 Yıl Ücretsiz SSL', enterprise: '✓ 3 Yıl Kurumsal SSL & DDoS koruması' },
    { feature: 'Form e-posta bildirimi', starter: 'Temel bildirim', pro: '✓ Anlık e-posta bildirimi', enterprise: '✓ Çoklu yetkili bildirimi & SMS opsiyonu' },
    { feature: 'Özel animasyonlar', starter: 'Temel fade-in ve scroll', pro: 'Gelişmiş hover ve mikro efektler', enterprise: 'Premium aurora glow & zengin etkileşimler' },
    { feature: 'Özel içerik bileşenleri', starter: 'Temel bileşenler', pro: '✓ Sektöre özel akordeon, sayaç, kartlar', enterprise: '✓ İhtiyaca özel modüler dinamik bileşenler' },
    { feature: 'Yönetilebilir içerik yapısı', starter: '—', pro: '—', enterprise: '✓ Modüler ve genişletilebilir mimari' },
    { feature: 'Admin / CMS altyapısı', starter: '—', pro: 'Opsiyonel (~9.900 ₺)', enterprise: 'Opsiyonel (~9.900 ₺)' },
    { feature: 'Tasarım revizyon hakkı', starter: '1 Tur revizyon', pro: '2 Tur revizyon', enterprise: '3 Tur revizyon' },
    { feature: 'Yayınlama & 3 Yıl Hosting', starter: '✓ 3 Yıl Domain + SSL + Bulut Barındırma Dahil', pro: '✓ 3 Yıl Domain + SSL + Bulut Barındırma Dahil', enterprise: '✓ 3 Yıl Domain + SSL + Bulut Barındırma Dahil' },
    { feature: 'Teknik destek & Garanti', starter: '15 gün hata garantisi', pro: '30 gün garanti + 1 ay bakım dahil', enterprise: '60 gün garanti + 3 ay bakım dahil' },
  ] as ComparisonMatrixRow[],

  comparisonPoints: [
    {
      feature: 'Teslim Süresi',
      traditional: 'Geleneksel ajans süreçlerinde tipik olarak 4 – 12 hafta',
      mediweb: '3 – 10 İş Günü (Pakete ve içerik onayına göre net süre)',
    },
    {
      feature: 'Fiyatlandırma',
      traditional: 'Kapsam dışı revizyonlarda değişkenlik gösterebilen bütçeler',
      mediweb: 'Net Sabit Fiyat (17.500 ₺ / 32.500 ₺ / 59.900 ₺)',
    },
    {
      feature: 'Barındırma & Domain',
      traditional: 'Geleneksel barındırmada sıkça karşılaşılan yıllık ek yenileme faturaları',
      mediweb: 'İlk 3 Yıl Domain + SSL + Bulut Barındırma Fiyata Dahil',
    },
    {
      feature: 'Altyapı & Performans',
      traditional: 'Tipik olarak ağır eklentili, güvenlik açığı ve bakım riski taşıyabilen geleneksel yapılar',
      mediweb: 'Hafif, optimize ve yüksek hızlı modern altyapı, anında açılan sayfalar (Statik sayfalarda 90–95+)',
    },
    {
      feature: 'Tasarım Süreci',
      traditional: 'Ne çıkacağını bilmeden ödeme yapma',
      mediweb: 'Canlı Çalışan Demoyu Önceden Deneyimleme',
    },
    {
      feature: 'Mevzuat & Etik Uyum',
      traditional: 'Sektörel reklam yasaklarını göz ardı edebilen kontrolsüz pazarlama dili',
      mediweb: 'Meslek kurallarına duyarlı içerik yaklaşımı (Nihai içerik sorumluluğu müşteridedir)',
    },
  ],

  principles: [
    {
      type: 'do',
      title: 'Ne Yapıyoruz?',
      desc: 'İşinize ve sektörünüze özel, ziyaretçide anında güven ve saygı uyandıran kurumsal vitrinler inşa ediyoruz. 3 yıl boyunca sunucu, güvenlik sertifikası ve alan adı yönetimiyle sizi uğraştırmıyoruz.'
    },
    {
      type: 'dont',
      title: 'Ne Yapmıyoruz?',
      desc: 'Güvensiz ve bakım yükü yüksek eski eklenti çöplüklerini kurmuyoruz. Anlaşılan net fiyat dışında sürpriz ek faturalar çıkartmıyoruz. Süreci haftalarca uzatarak işinizi aksatmıyoruz.'
    }
  ] as PrincipleItem[],

  faqs: [
    {
      category: 'hosting',
      question: 'Domain (alan adı) kimin adına kayıt ediliyor?',
      answer: 'Alan adınız (.com / .com.tr / .net vb.) ilk günden itibaren doğrudan sizin veya şirketinizin adına tescil edilir. DNS yönetim yetkisi ve tam mülkiyeti sizdedir; asla rehin veya kilit altında tutulmaz.'
    },
    {
      category: 'hosting',
      question: '3 yıllık ücretsiz hosting süresi dolunca ne oluyor? 4. yıl masrafı nedir?',
      answer: 'İlk 3 yıl boyunca alan adı, bulut barındırma ve SSL için 0 ₺ ödersiniz. 4. yıldan itibaren herhangi bir zorunlu ajans yönetim primi çıkmaz; yalnızca sağlayıcının maliyetine (güncel kurlarla yıllık tahmini ~1.500–2.500 ₺ bandında) devam eder. Siteniz asla kapatılmaz veya kilitlenmez.'
    },
    {
      category: 'yonetim',
      question: 'Web sitesini kendim yönetebilir miyim? İçerik yönetim paneli (CMS) var mı?',
      answer: 'Sitelerimiz ultra yüksek hız ve sıfır eklenti açığı için modern mimariyle kodlanır. İçerikleri (metin, blog, fotoğraflar) kendiniz güncellemek isterseniz isteğe bağlı Headless CMS yönetim paneli (~9.900 ₺) entegre edilir. Panel istemezseniz, rutin içerik güncellemelerinizi aylık bakım desteğimiz (2.500 ₺/ay) kapsamında biz gerçekleştiririz.'
    },
    {
      category: 'genisleme',
      question: 'Sonradan yeni sayfa veya yeni hizmetler ekleyebilir miyim?',
      answer: 'Evet. Mimarimiz tamamen modülerdir. İleride ek bir hizmet sayfası, yeni bir yabancı dil veya departman eklemek istediğinizde sayfa başı ~1.500 ₺ net birim fiyatla mevcut sitenize zahmetsizce entegre edilir.'
    },
    {
      category: 'seo',
      question: 'Google aramalarında hemen birinci sırada çıkar mıyız?',
      answer: 'Başlangıç paketimizde temel SEO (meta, sitemap); Profesyonel ve Kurumsal paketlerimizde ise gelişmiş JSON-LD Schema ve Google Harita yerel optimizasyonu dahildir. Google sıralamaları arama motorunun kendi algoritmasına ve sektörel rekabete bağlıdır; hiçbir dürüst ajans 1. sıra garantisi veremez, biz de vermiyoruz. Ancak Google\'ın en sevdiği teknik altyapıyı (statik sayfalarda 90–95+ hız) eksiksiz teslim ediyoruz.'
    },
    {
      category: 'revizyon',
      question: 'Revizyon hakkım kaç tane? Tasarım içime sinmezse ne olur?',
      answer: 'Satın almadan önce çalışan canlı demoyu incelediğiniz için ne çıkacağını baştan bilirsiniz. Paketlerimizde Başlangıç için 1 tur, Profesyonel için 2 tur, Kurumsal için 3 tur revizyon hakkı dahildir. Logonuz, renkleriniz ve kurumsal metinleriniz tam onayınızı alana kadar titizlikle uyarlanır.'
    },
    {
      category: 'destek',
      question: 'Teknik destek nasıl sağlanıyor ve garanti süresi nedir?',
      answer: 'Teslimattan sonra paketinize göre 15, 30 veya 60 gün yazılımsal teknik hata garantisi verilir. Bildirilen teknik aksaklıklara 1–2 iş günü içinde doğrudan müdahale edilir. Profesyonel pakette ilk 1 ay, Kurumsal pakette ilk 3 ay rutin teknik bakım fiyata dahildir.'
    },
    {
      category: 'tasima',
      question: 'Web sitesini başka bir firmaya veya kendi bağımsız sunucuma taşıyabilir miyim?',
      answer: 'Alan adınız zaten ilk günden adınızadır. Siteniz bulut altyapımızda kaldığı sürece ilk 3 yıl barındırma için tek kuruş ödemezsiniz. Sitenizi kendi bağımsız sunucunuza taşımak veya yazılım ekibinize devretmek isterseniz, kaynak kod devir modülü (+%75 lisans devir bedeli) ile tam mülkiyet teslim edilir. Ayrıca ajansımızın ticari faaliyetini sonlandırması halinde tüm kaynak kodlar müşteriye bedelsiz teslim edilir.'
    },
    {
      category: 'fatura',
      question: 'Fatura kesiyor musunuz? Şirketime gider olarak gösterebilir miyim?',
      answer: 'Tüm fiyatlarımız KDV hariçtir; resmî e-Arşiv / e-Fatura kesilir. Fatura bedeli işletme gideri olarak değerlendirilebilir veya amortismana tabi tutulabilir; KDV mahsubu yapılabilir. Kesin muhasebeleştirme için mali müşavirinize danışmanızı öneririz.'
    }
  ] as FaqItem[]
};
