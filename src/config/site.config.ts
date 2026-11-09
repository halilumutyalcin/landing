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
  waasCommitment: string;
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
  
  metrics: [
    { value: '3 Yıl', label: 'Hosting & Alan Adı Dahil', icon: 'ShieldCheck', sub: 'İlk 3 yıl sıfır yenileme maliyeti' },
    { value: '95+', label: 'Lighthouse Performans Skoru', icon: 'Zap', sub: 'Global Edge CDN altyapısı' },
    { value: '3–7 Gün', label: 'Pakete Göre Teslim Süresi', icon: 'Clock', sub: 'İçerik onayından itibaren' },
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
        'Mobil ve Tablet %100 Kusursuz Uyum',
        'Temel SEO Altyapısı (Sitemap, Meta, Robots.txt)',
        'Sabit WhatsApp İletişim Butonu & Hızlı Mesaj',
        'E-posta Bildirimli İletişim Formu',
        'Google Analytics Kurulumu & Entegrasyonu',
        '2 Adet Kurumsal E-posta DNS Kurulumu',
        'KVKK ve Yasal Sayfa Şablonları Dahil',
        'Global Edge CDN ile Yüksek Açılış Performansı (Lighthouse 90+)',
      ],
      notIncluded: [
        'Gelişmiş SEO & Search Console Yönetimi',
        'Google Haritalar & Yorum Stratejisi',
        'Blog / Haber Modülü',
        'Aylık Bakım',
      ],
      isPopular: false,
      ctaText: 'Başlangıç Paketini Seç',
      waasSetupPrice: 2500,
      waasSetupFormatted: '2.500 ₺',
      waasMonthlyPrice: 1450,
      waasMonthlyFormatted: '1.450 ₺',
      waasCommitment: 'Sabit Fiyatlı Model',
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
      support: 'Öncelikli WhatsApp Destek + 1 Ay Rutin Bakım Dahil',
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
        'Lighthouse 95+ Performans Optimizasyonu',
        'İlk 1 Ay İçerik Güncelleme & Bakım Desteği Dahil',
      ],
      notIncluded: [
        'Çoklu Yabancı Dil (Ek Hizmet)',
        'Anahtar Teslim Metin Yazarlığı (Ek Hizmet)',
      ],
      isPopular: true,
      ctaText: 'En Çok Tercih Edileni Seç',
      waasSetupPrice: 4500,
      waasSetupFormatted: '4.500 ₺',
      waasMonthlyPrice: 2450,
      waasMonthlyFormatted: '2.450 ₺',
      waasCommitment: 'Sabit Fiyatlı Model',
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
      support: 'Atanmış Müşteri Temsilcisi + 3 Ay Rutin Bakım Dahil',
      animations: 'Premium — aurora glow, interaktif vitrin, glassmorphism',
      features: [
        '20 Sayfaya Kadar Geniş Kurumsal İçerik Mimarisi',
        '2 Dil Dahil (Türkçe + İngilizce Tam Altyapısı)',
        'Tarafımızca Yazılmış 5 Adet SEO Uyumlu Blog Makalesi',
        'Anahtar Teslim İçerik Üretimi & Profesyonel Görsel Yerleşimi',
        'Google Haritalar Tam Optimizasyon + QR Kodlu Yorum Standı',
        'Departman Yönlendirmeli Gelişmiş WhatsApp Sistemi',
        '10 Adet Kurumsal E-posta DNS Kurulumu',
        'Sayfa Bazlı Birebir SEO ve İç Bağlantı Mimarisi',
        '30. Gün Karşılaştırmalı Performans & Arama Raporu',
        'İlk 3 Ay Güncelleme & SEO Takip Desteği Dahil',
      ],
      notIncluded: [],
      isPopular: false,
      ctaText: 'Kurumsal Paketi Seç',
      waasSetupPrice: 8500,
      waasSetupFormatted: '8.500 ₺',
      waasMonthlyPrice: 4250,
      waasMonthlyFormatted: '4.250 ₺',
      waasCommitment: 'Sabit Fiyatlı Model',
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
      description: 'Ziyaretçi sorularını 7/24 yanıtlayan, SSS içeriğinizden öğrenen ve mesai dışı teklif toplayan yapay zeka chatbot entegrasyonu.',
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
      title: 'Tam Kaynak Kod Teslimi',
      description: 'Sitenin tüm Next.js 14 kaynak kodunun teslim edilmesi. Kendi sunucunuzda bağımsız barındırma imkanı.',
      pricing: 'Paket bedeline ek +%75',
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
      title: 'Google Yorum & İtibar Kurgusu',
      description: 'Masaüstü QR stant tasarımı, memnun müşteri yönlendirme linki ve ilk 10 inceleme stratejisi.',
      pricing: 'Kurulum paketi ~3.500 ₺',
    },
    {
      id: 'white-label',
      icon: 'ShieldOff',
      title: 'White-Label / Ajans İmzası Kaldırma',
      description: 'Sitenin altındaki "Mimari: MediWeb" ibaresinin tamamen kaldırılması ve sitenin %100 kendi bağımsız kurumsal markanız altında sunulması.',
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
      pricing: 'Aylık 2.500 ₺ (Paketlerde ilk aylar ücretsiz)',
    }
  ] as ExtraServiceItem[],

  comparisonMatrix: [
    { feature: 'Kime uygun?', starter: 'Yeni başlayan işletmeler, tek kişilik ofisler', pro: 'Kurumsal görünüm isteyen işletmeler & KOBİ\'ler', enterprise: 'Profesyonel dijital varlık ve ihracat odaklı firmalar' },
    { feature: 'Tasarım mimarisi', starter: 'Hazır yapı üzerinde özelleştirilmiş tasarım', pro: 'Markaya özel UI/UX tasarım ve kurumsal renkler', enterprise: 'Tamamen özel UI/UX + gelişmiş etkileşimler' },
    { feature: 'Sayfa yapısı', starter: 'Tek sayfalık landing page veya 5 sayfaya kadar', pro: '10 sayfaya kadar kurumsal yapı', enterprise: '20 sayfaya kadar / ihtiyaca göre' },
    { feature: 'Mobil & tablet uyumluluk', starter: '✓ Dahil (%100 Responsive)', pro: '✓ Dahil (%100 Responsive)', enterprise: '✓ Dahil (%100 Responsive)' },
    { feature: 'Ana Sayfa (Hero & Vitrin)', starter: '✓ Dahil', pro: '✓ Dahil', enterprise: '✓ Dahil' },
    { feature: 'Hakkımızda sayfası', starter: 'Bölüm olarak (One-Page)', pro: '✓ Ayrı özel sayfa', enterprise: '✓ Zengin hikaye & zaman tüneli sayfası' },
    { feature: 'Hizmetler / Ürünler', starter: 'Bölüm olarak (3-6 hizmet)', pro: '✓ Ayrı detay sayfaları', enterprise: '✓ Gelişmiş mimari & filtreli detay sayfaları' },
    { feature: 'Blog / Haberler modülü', starter: '—', pro: 'Opsiyonel / Temel altyapı', enterprise: '✓ Kategori, etiket ve yazar destekli' },
    { feature: 'İletişim sayfası', starter: 'Temel bölüm', pro: '✓ Ayrı sayfa & Google Harita', enterprise: '✓ Gelişmiş sayfa, departman seçimi & harita' },
    { feature: 'İletişim formu', starter: 'Temel form', pro: '✓ E-posta bildirimli gelişmiş form', enterprise: '✓ Dosya ekli, çoklu e-posta & SMS bildirimli' },
    { feature: 'WhatsApp entegrasyonu', starter: '✓ Sabit WhatsApp butonu', pro: '✓ Hazır mesajlı buton', enterprise: '✓ Departman yönlendirmeli akıllı buton' },
    { feature: 'Google Haritalar (İşletme)', starter: 'Harita iframe yerleşimi', pro: '✓ Profil kaydı, optimizasyon & yorum desteği', enterprise: '✓ Tam optimizasyon + QR stant tasarımı' },
    { feature: 'Sosyal medya bağlantıları', starter: '✓ Bağlantı ikonları', pro: '✓ Bağlantılar + Open Graph paylaşım kartı', enterprise: '✓ Open Graph zengin önizleme kartları' },
    { feature: 'Temel SEO altyapısı', starter: '✓ Meta, sitemap, robots.txt', pro: '✓ Dahil', enterprise: '✓ Dahil' },
    { feature: 'Gelişmiş SEO & Schema', starter: '—', pro: '✓ JSON-LD Schema & Search Console', enterprise: '✓ Sayfa bazlı derin SEO & iç bağlantı mimarisi' },
    { feature: 'Google Analytics & Search Console', starter: 'Temel Analytics', pro: '✓ Analytics + Search Console kurulumu', enterprise: '✓ İleri seviye hedef & dönüşüm takibi' },
    { feature: 'Site hız optimizasyonu', starter: 'Temel (Global Edge CDN Ağı)', pro: 'Gelişmiş (Lighthouse 90+)', enterprise: 'İleri Seviye (Lighthouse 95+ & Edge CDN)' },
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
      traditional: '4 – 12 Hafta (Ucu açık belirsiz takvim)',
      mediweb: '3 – 7 İş Günü (İçerik onayından itibaren net süre)',
    },
    {
      feature: 'Fiyatlandırma',
      traditional: 'Değişken & Sürpriz ek revizyon maliyetleri',
      mediweb: 'Net Sabit Fiyat (17.500 ₺ / 32.500 ₺ / 59.900 ₺)',
    },
    {
      feature: 'Barındırma & Domain',
      traditional: 'Her yıl katlanarak artan yenileme faturaları',
      mediweb: 'İlk 3 Yıl Domain + SSL + Bulut Barındırma Fiyata Dahil',
    },
    {
      feature: 'Altyapı & Performans',
      traditional: 'Ağır eklentili, güvenlik açığı riski taşıyan eski CMS',
      mediweb: 'Next.js 14 tabanlı modern statik mimari, Lighthouse 95+',
    },
    {
      feature: 'Tasarım Süreci',
      traditional: 'Ne çıkacağını bilmeden ödeme yapma',
      mediweb: 'Canlı Çalışan Demoyu Önceden Deneyimleme',
    },
    {
      feature: 'Mevzuat & Etik Uyum',
      traditional: 'Yasal kısıtlardan habersiz standart pazarlama dili',
      mediweb: 'TBB, Sağlık Bakanlığı ve TÜRMOB mevzuatına tam uyumlu dil',
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
      category: 'surec',
      question: 'Belirtilen teslim süresi gerçekten tutturuluyor mu, gecikme yaşanır mı?',
      answer: 'Teslimat süremiz (Başlangıç: 3–5 iş günü, Profesyonel: 5–7 iş günü, Kurumsal: 7–10 iş günü), logonuzu ve kurumsal içerik onayınızı teslim ettiğiniz andan itibaren başlar. Mimari ve teknik altyapı önceden test edilip hazırlandığı için ajans içi gecikme yaşanmaz; içerik tesliminden itibaren takvim dakik şekilde işler.'
    },
    {
      category: 'hosting',
      question: '3 yıl sonra ne olacak? Domain kimin adına ve 4. yıl masrafı nedir?',
      answer: 'Alan adınız (domain) doğrudan sizin veya şirketinizin adına tescil edilir; tam mülkiyet ve DNS kontrolü sizdedir. İlk 3 yıl boyunca barındırma (hosting) ve SSL için 1 kuruş dahi ödemezsiniz. 4. yıldan itibaren ise hiçbir gizli ajans kârı olmadan, yalnızca o günün standart resmi alan adı ve bulut barındırma maliyetini (tahmini yıllık ~2.000–3.000 ₺) ödersiniz. Siteniz asla kapatılmaz, kilitlenmez veya rehin tutulmaz.'
    },
    {
      category: 'paketler',
      question: 'Kaynak kodlar bana veriliyor mu? Size bağımlı kalır mıyım?',
      answer: 'Asla bağımlı kalmazsınız. Profesyonel ve Kurumsal paketlerimizde talep etmeniz durumunda projenizin GitHub kaynak kodları eksiksiz devredilir. Dilediğiniz takdirde sitenizi kendi sunucunuza taşıyabilir veya bağımsız bir yazılımcıyla geliştirmeye devam edebilirsiniz.'
    },
    {
      category: 'surec',
      question: 'Avukatlık, klinik ve mali müşavirlik gibi mesleklerde reklam yasağı var; siteleriniz bu mevzuata uygun mu?',
      answer: 'Evet, özellikle bu regüle sektörlerde en hassas olduğumuz konu mevzuat uyumudur. Avukatlık Kanunu ve TBB Reklam Yasağı Yönetmeliği, Sağlık Bakanlığı Sağlık Hizmetlerinde Tanıtım ve Bilgilendirme Faaliyetleri Kılavuzu ile TÜRMOB meslek kurallarına harfiyen uyuyoruz. "Garantili tedavi", "en iyi avukat" gibi haksız ve hukuka aykırı iddialar barındırmayan, salt bilgilendirici ve ağırbaşlı kurumsal sayfalar hazırlıyoruz.'
    },
    {
      category: 'surec',
      question: 'Sitemdeki yazıları ve fotoğrafları kim hazırlıyor? Bizim elimizde hazır metin yok.',
      answer: 'Müşterilerimizin çoğunda hazır metin veya fotoğraf bulunmuyor. Seçtiğiniz sektöre (İç mimarlık, hukuk, klinik, sanayi, mali müşavir, emlak) uygun kurumsal taslak içerikleri ve yüksek çözünürlüklü lisanslı görsel havuzunu biz sağlıyoruz. Siz yalnızca faaliyet alanlarınızı ve iletişim detaylarınızı onaylıyorsunuz.'
    },
    {
      category: 'revizyon',
      question: 'İleride telefon, adres veya hizmet listemizde değişiklik gerekirse ne yapıyoruz?',
      answer: 'Küçük metin ve iletişim güncellemeleri için WhatsApp hattımızdan yazmanız yeterlidir; ekibimiz aynı iş günü içinde güncellemeyi gerçekleştirir. Kendi ekibinizin içerik girmesini isterseniz, opsiyonel olarak modern ve kullanımı kolay bir içerik yönetim paneli (CMS) de entegre edebiliyoruz.'
    },
    {
      category: 'surec',
      question: 'Site yayına girince Google aramalarında görünür mü?',
      answer: 'Evet. Siteniz Google arama motorunun doğrudan indeksleyebileceği temiz semantik kod yapısı, JSON-LD Schema işaretlemeleri, sitemap.xml ve Google İşletme Profili (Haritalar) entegrasyonuyla teslim edilir. Firmanızın adı veya yerel hizmet aramalarında hızlıca indeks alırsınız.'
    },
    {
      category: 'paketler',
      question: 'Fatura kesiyor musunuz? Şirketime gider olarak gösterebilir miyim?',
      answer: 'Elbette. Tüm hizmetlerimiz %20 KDV dahil kurumsal faturalandırılır. Faturanızı şirket gideri olarak işleyebilir, KDV mahsubu ve kurumlar/gelir vergisi avantajından tam olarak yararlanabilirsiniz.'
    }
  ] as FaqItem[]
};
