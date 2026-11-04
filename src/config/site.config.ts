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
  tagline: 'Sektörünüze Özel Kurumsal Web Mimarisi. 3–5 Günde Canlıda, 3 Yıl Boyunca Sıfır Ek Masraf (0 ₺ Yenileme Güvencesi).',
  description: 'Haftalarca süren ajans toplantılarını ve sürpriz faturaları geride bırakın. Sektörünüze göre optimize edilmiş kurumsal web mimarisiyle, 3 yıl boyunca sıfır ek masraf güvencesiyle anahtar teslim dijital prestij.',
  whatsappNumber: '905550000000',
  whatsappDisplay: '+90 555 000 00 00',
  phoneDisplay: '0850 300 00 00',
  email: 'info@mediweb.com.tr',
  address: 'Levent Mah. Büyükdere Cad. No:199, Şişli / İstanbul',
  
  metrics: [
    { value: '3 Yıl', label: 'Sıfır Ek Masraf Güvencesi', icon: 'ShieldCheck', sub: '0 ₺ Yenileme Maliyeti' },
    { value: '< 0.5 sn', label: 'Anında Açılış Hızı', icon: 'Zap', sub: 'Mobilde sıfır bekleme' },
    { value: '3–5 Gün', label: 'Ortalama Teslim Süresi', icon: 'Clock', sub: 'Hızlı & eksiksiz lansman' },
    { value: '15 Mimari', label: '5 Sektöre Özel Vitrin', icon: 'Sparkles', sub: 'Canlı test edilmiş altyapı' },
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
      deliveryTime: '3–5 İş Günü',
      domainHosting: '3 Yıl Boyunca Sıfır Ek Masraf: 0 ₺ Yenileme Güvencesi (.com/.com.tr + Vercel Global Edge CDN)',
      revisions: '1 Tur Tasarım Revizyonu',
      warranty: '15 Gün Hata Garantisi',
      support: 'E-posta & WhatsApp Destek',
      animations: 'Temel fade-in ve scroll geçişleri',
      features: [
        'Tek sayfa (One Page) veya 5 sayfaya kadar kurumsal mimari',
        '3 Yıl Boyunca Sıfır Ek Masraf: 0 ₺ Yenileme Güvencesi (Domain + CDN Hosting Dahil)',
        'Mobil ve Tablet %100 Kusursuz Uyum',
        'Temel SEO Altyapısı (Sitemap, Meta, Robots.txt)',
        'Sabit WhatsApp İletişim Butonu & Hızlı Mesaj',
        'E-posta Bildirimli İletişim Formu',
        'Google Analytics Kurulumu & Entegrasyonu',
        '2 Adet Kurumsal E-posta DNS Kurulumu',
        'KVKK ve Yasal Sayfa Şablonları Dahil',
        'Vercel CDN Destekli Yüksek Hız (0.3 sn)',
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
      waasCommitment: 'Sabit Taksitli Model',
    },
    {
      id: 'pro',
      name: 'Profesyonel',
      badge: 'Profesyonel',
      price: 32500,
      priceFormatted: '32.500 ₺',
      period: 'Tek Seferlik',
      paymentTerms: '%50 Başlangıçta + %50 Teslimde',
      tagline: 'Avukatlık ofisleri, klinikler, OSGB\'ler, mali müşavirler ve yerleşik KOBİ\'ler.',
      targetAudience: 'Kurumsal ciddiyet arayan avukatlar, sağlık klinikleri, danışmanlık firmaları ve KOBİ\'ler.',
      pageStructure: '10 Sayfaya Kadar (Anasayfa, Hakkımızda, Hizmetler, Ekip, Blog, SSS, İletişim + 3 Sayfa)',
      deliveryTime: '5–7 İş Günü',
      domainHosting: '3 Yıl Boyunca Sıfır Ek Masraf: 0 ₺ Yenileme Güvencesi (.com/.com.tr + Vercel Global Edge CDN)',
      revisions: '2 Tur Tasarım Revizyonu',
      warranty: '30 Gün Hata Garantisi',
      support: 'Öncelikli WhatsApp Destek + 1 Ay Rutin Bakım Dahil',
      animations: 'Gelişmiş — parallax, mikro hover efektleri, pürüzsüz geçişler',
      features: [
        '10 Sayfaya Kadar Kurumsal Site Mimarisi',
        '3 Yıl Boyunca Sıfır Ek Masraf: 0 ₺ Yenileme Güvencesi (Domain + CDN Hosting Dahil)',
        'Google Haritalar (İşletme Profili) Kaydı & Optimizasyonu',
        'İlk 5–10 Gerçek Müşteri Yorum Stratejisi Desteği',
        'Google Search Console Bağlantısı & JSON-LD Schema',
        'Blog / Duyuru Altyapısı (Kategori & Yazar Desteği)',
        'Accordion Yapısında Sık Sorulan Sorular Bölümü',
        'Gelişmiş Form (Konu Seçimi, Dosya Eki, Bildirim)',
        'Canlı Destek Kurulumu (Tawk.to vb.)',
        '5 Adet Kurumsal E-posta DNS Kurulumu',
        'Sosyal Paylaşım Kartları (Open Graph)',
        'Hızlı Mobil ve Masaüstü Açılış (Lighthouse 95+)',
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
      waasCommitment: 'Sabit Taksitli Model',
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
      deliveryTime: '7–10 İş Günü',
      domainHosting: '3 Yıl Boyunca Sıfır Ek Masraf: 0 ₺ Yenileme Güvencesi (.com/.com.tr + Vercel Global Edge CDN)',
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
      waasCommitment: 'Sabit Taksitli Model',
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
    { feature: 'Site hız optimizasyonu', starter: 'Temel (Vercel Edge CDN)', pro: 'Gelişmiş (Lighthouse 90+)', enterprise: 'İleri seviye (0.3 sn anında yükleme)' },
    { feature: 'Güvenlik / SSL sertifikası', starter: '✓ 3 Yıl Ücretsiz SSL', pro: '✓ 3 Yıl Ücretsiz SSL', enterprise: '✓ 3 Yıl Kurumsal SSL & DDoS koruması' },
    { feature: 'Form e-posta bildirimi', starter: 'Temel bildirim', pro: '✓ Anlık e-posta bildirimi', enterprise: '✓ Çoklu yetkili bildirimi & SMS opsiyonu' },
    { feature: 'Özel animasyonlar', starter: 'Temel fade-in ve scroll', pro: 'Gelişmiş hover ve mikro efektler', enterprise: 'Premium aurora glow & zengin etkileşimler' },
    { feature: 'Özel içerik bileşenleri', starter: 'Temel bileşenler', pro: '✓ Sektöre özel akordeon, sayaç, kartlar', enterprise: '✓ İhtiyaca özel modüler dinamik bileşenler' },
    { feature: 'Yönetilebilir içerik yapısı', starter: '—', pro: '—', enterprise: '✓ Modüler ve genişletilebilir mimari' },
    { feature: 'Admin / CMS altyapısı', starter: '—', pro: 'Opsiyonel (~9.900 ₺)', enterprise: 'Opsiyonel (~9.900 ₺)' },
    { feature: 'Tasarım revizyon hakkı', starter: '1 Tur revizyon', pro: '2 Tur revizyon', enterprise: '3 Tur revizyon' },
    { feature: 'Yayınlama & 3 Yıl Hosting', starter: '✓ 3 Yıl Domain + SSL + CDN Dahil', pro: '✓ 3 Yıl Domain + SSL + CDN Dahil', enterprise: '✓ 3 Yıl Domain + SSL + CDN Dahil' },
    { feature: 'Teknik destek & Garanti', starter: '15 gün hata garantisi', pro: '30 gün garanti + 1 ay bakım dahil', enterprise: '60 gün garanti + 3 ay bakım dahil' },
  ] as ComparisonMatrixRow[],

  comparisonPoints: [
    {
      feature: 'Teslim Süresi',
      traditional: '4 – 12 Hafta (Ucu açık süreçler)',
      mediweb: '3 – 5 İş Günü (Standartlaştırılmış süreç)',
    },
    {
      feature: 'Fiyatlandırma',
      traditional: 'Değişken & Sürpriz ek maliyetler',
      mediweb: 'Net Sabit Tek Fiyat (17.500 ₺ / 32.500 ₺ / 59.900 ₺)',
    },
    {
      feature: 'Barındırma & Domain',
      traditional: 'Her yıl yüksek yenileme & SSL maliyeti',
      mediweb: '3 Yıl Domain + SSL + Global Edge CDN Dahil',
    },
    {
      feature: 'Altyapı & Hız',
      traditional: 'Ağır eklentili, 6–8 saniyede açılan hantal yapı',
      mediweb: '0.3 saniyede anında yüklenen modern bulut altyapı',
    },
    {
      feature: 'Tasarım Süreci',
      traditional: 'Ne çıkacağını bilmeden para ödeme',
      mediweb: 'Canlı Çalışan Demoyu Önceden Görüp Seçme',
    },
    {
      feature: 'Google & Harita Desteği',
      traditional: 'Ekstra yüksek ajans danışmanlık ücreti',
      mediweb: 'Profesyonel & Kurumsal Pakette Dahil',
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
      desc: 'Ağır, hantal ve güvensiz eski altyapıları süsleyip sunmuyoruz. Anlaşılan net fiyat dışında sürpriz ek faturalar çıkartmıyoruz. Süreci haftalarca uzatarak işinizi aksatmıyoruz.'
    }
  ] as PrincipleItem[],

  faqs: [
    {
      category: 'surec',
      question: 'Gerçekten 3–5 günde bitebilir mi, yoksa siz de diğer ajanslar gibi haftalarca oyalar mısınız?',
      answer: 'Haftalarca süren oyalama ve toplantı trafiği yok, çünkü ne yapacağımızı en baştan biliyoruz. Tasarım mimariniz hazır, altyapınız hazır. Sizden logonuzu, temel iletişim bilgilerinizi ve fotoğraflarınızı aldıktan sonra ekibimiz doğrudan içerik yerleşimine ve Google kayıtlarına başlıyor. Süreci uzatıp sizi yormadan, 3–5 iş gününde eksiksiz çalışan sitenizi yayına alıyoruz.'
    },
    {
      category: 'hosting',
      question: '3 yıl sonra ne olacak? Karşımıza fahiş bir yenileme faturası çıkaracak mısınız?',
      answer: 'Kesinlikle hayır; sektörde en çok can yakan ajans tuzağının bu olduğunu çok iyi biliyoruz. İlk 3 yıl boyunca alan adı ve küresel bulut barındırma için sizden 1 kuruş bile talep etmiyoruz. 3 yıl dolduğunda ise sadece o günün standart resmi sunucu ve alan adı maliyetini (sembolik yıllık bakım ücreti) ödersiniz. Sürpriz lisans bedeli veya ajans harcı asla çıkmaz. Dilerseniz sitenizin tüm kaynak kodlarını alıp kendi bağımsız sunucunuza da ücretsiz taşıyabilirsiniz.'
    },
    {
      category: 'surec',
      question: 'Sitemdeki yazıları ve fotoğrafları kim hazırlıyor? Bizim elimizde hazır metin yok.',
      answer: 'Hiç dert etmeyin, müşterilerimizin %80\'inin elinde hazır metin veya profesyonel fotoğraf olmuyor. Hukuk, klinik, OSGB, mali müşavirlik ve emlak sektörüne uygun kurumsal içerik şablonlarını ve yüksek kaliteli telifsiz profesyonel fotoğraf arşivini biz sağlıyoruz. Siz sadece "Şu hizmetimizi öne çıkaralım" deyin, gerisini biz toparlayalım.'
    },
    {
      category: 'revizyon',
      question: 'Yarın bir gün telefon numaramız veya adresimiz değişirse ne yapacağız? Size muhtaç mı kalırız?',
      answer: 'Asla muhtaç kalmazsınız. Ufak tefek metin, adres veya telefon değişiklikleri için WhatsApp\'tan yazmanız yeterlidir; ekibimiz aynı gün içinde ücretsiz günceller. Eğer "Ben kendim panelden blog yazısı veya resim eklemek istiyorum" derseniz, sitenize tek tıkla modern ve kullanımı çok kolay bir yönetim paneli (Headless CMS) entegre edebiliyoruz.'
    },
    {
      category: 'surec',
      question: 'Site yayına girince Google\'da hemen birinci sırada çıkar mıyız?',
      answer: 'Size "1 haftada Google\'da 1. sıraya çıkarırız" diyenlere lütfen inanmayın. Ancak biz sitenizi Google\'ın en çok sevdiği temiz kod yapısıyla, ışık hızında açılan altyapıyla ve Google Haritalar (İşletme Profili) kaydıyla teslim ediyoruz. Çevrenizdeki müşteriler işletme adınızı veya sunduğunuz hizmeti aradığında doğru, saygın ve güvenilir şekilde doğrudan karşısına çıkarsınız.'
    },
    {
      category: 'paketler',
      question: 'Beğendiğim tasarım ile paket fiyatı arasında nasıl bir ilişki var? Tasarıma ayrı para ödüyor muyum?',
      answer: 'Hayır, tasarım için tek kuruş ekstra ödemezsiniz. Bizde "Tasarım ≠ Paket" kuralı geçerlidir. Beğendiğiniz herhangi bir mimariyi Başlangıç (Tek Sayfa), Profesyonel (5 Sayfa) veya Kurumsal (10-15 Sayfa) paketlerimizden birine giydiriyoruz. Ne ödeyeceğiniz en baştan bellidir; sürpriz ek masraf çıkmaz.'
    },
    {
      category: 'paketler',
      question: 'Fatura kesiyor musunuz? Şirketime gider olarak gösterebilir miyim?',
      answer: 'Elbette. Tüm hizmetlerimiz %20 KDV dahil kurumsal faturalandırılır. Faturanızı muhasebecinize ilettiğinizde, KDV\'yi doğrudan mahsup edebilir; kalan tutarı da kurumlar veya gelir verginizden düşerek net maliyetinizi %37.5 ila %50 oranında hafifletebilirsiniz.'
    },
    {
      category: 'surec',
      question: 'Mevcut bir alan adım (domain) ve kurumsal e-postalarım var, onlar bozulur mu?',
      answer: 'Mevcut e-postalarınız ve alan adınız kesinlikle kesintiye uğramaz. DNS yönlendirmelerini e-posta (MX) kayıtlarınıza hiç dokunmadan profesyonelce yaparız; e-posta akışınız bir saniye bile durmadan yeni web siteniz yayına girer.'
    }
  ] as FaqItem[]
};
