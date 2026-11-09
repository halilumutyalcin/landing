export interface LocationSeoItem {
  id: string;
  slug: string;
  name: string;
  side: 'anadolu' | 'avrupa';
  title: string;
  metaDescription: string;
  heroHeadline: string;
  heroSubheadline: string;
  commercialHubs: string[];
  focusSectors: string[];
  localGuarantee: string;
  targetKeywords: string[];
  sampleClients: string[];
}

export const LOCATIONS_SEO_DATA: LocationSeoItem[] = [
  {
    id: 'kartal',
    slug: 'kartal-web-tasarim',
    name: 'Kartal',
    side: 'anadolu',
    title: 'Kartal Web Tasarım & Kurumsal Web Yazılım Ajansı | MediWeb',
    metaDescription: 'Kartal, Soğanlık ve Oto Sanayi bölgesindeki işletmelere özel ultra hızlı kurumsal web siteleri. 3–5 günde canlıda, 3 yıl boyunca sıfır ek masraf güvencesi.',
    heroHeadline: 'Kartal İşletmelerine Özel Kurumsal Web Mimarisi',
    heroSubheadline: 'Soğanlık, Çavuşoğlu ve Kartal Sanayi bölgesindeki klinikler, hukuk büroları ve kurumsal firmalara 3–5 günde anahtar teslim teslimat.',
    commercialHubs: ['Kartal Oto Sanayi Sitesi', 'Soğanlık Ticaret Aksı', 'Kartal Sahil & Kordonboyu Ofisleri', 'Atalar & Çavuşoğlu'],
    focusSectors: ['Özel Sağlık & Diş Klinikleri', 'Hukuk & Avukatlık Ofisleri', 'Otomotiv Servis & Ekspertiz', 'Mali Müşavirlik'],
    localGuarantee: 'Kartal merkezli işletmeler için aynı gün içinde ofisinizde keşif ve demo sunumu imkanı.',
    targetKeywords: ['kartal web tasarım', 'kartal web sitesi yapan yerler', 'kartal kurumsal web tasarım', 'soğanlık web yazılım'],
    sampleClients: ['Kartal Hukuk Ortaklığı', 'Soğanlık Diş Polikliniği', 'Kartal Sanayi Araç Bakım']
  },
  {
    id: 'maltepe',
    slug: 'maltepe-web-tasarim',
    name: 'Maltepe',
    side: 'anadolu',
    title: 'Maltepe Web Tasarım & Dijital Prestij Ajansı | MediWeb',
    metaDescription: 'Maltepe, Küçükyalı ve Bağdat Caddesi aksındaki kurumsal işletmelere özel 0.4 saniyede açılan modern web siteleri. 3 yıl 0 ₺ yenileme güvencesi.',
    heroHeadline: 'Maltepe & Küçükyalı İçin Yeni Nesil Web Mimarisi',
    heroSubheadline: 'Bölgedeki prestijli avukatlar, sağlık poliklinikleri ve danışmanlık şirketleri için haftalarca sürmeyen dakik web çözümleri.',
    commercialHubs: ['Küçükyalı İş Merkezleri', 'Maltepe Sahil & Çarşı', 'Bağdat Caddesi Giriş Aksı', 'Altayçeşme & Zümrütevler'],
    focusSectors: ['Estetik & Diş Klinikleri', 'Hukuk & Arabuluculuk', 'İnşaat & Mimarlık', 'Danışmanlık'],
    localGuarantee: 'Maltepe ve Küçükyalı firmalarına yerinde analiz ve hızlı içerik toplama desteği.',
    targetKeywords: ['maltepe web tasarım', 'küçükyalı web sitesi', 'maltepe web ajansı', 'maltepe kurumsal site'],
    sampleClients: ['Maltepe Ortodonti Merkezi', 'Küçükyalı Hukuk Bürosu', 'Maltepe İç Mimarlık']
  },
  {
    id: 'tuzla',
    slug: 'tuzla-web-tasarim',
    name: 'Tuzla',
    side: 'anadolu',
    title: 'Tuzla Web Tasarım — OSB & Sanayi Odaklı Kurumsal Siteler | MediWeb',
    metaDescription: 'Tuzla Deri OSB, Birlik OSB, Mermerciler ve Tersaneler bölgesindeki üretici ve ihracatçılara özel kurumsal B2B web mimarisi.',
    heroHeadline: 'Tuzla Sanayi & OSB Firmaları İçin İhracat Odaklı Web Siteleri',
    heroSubheadline: 'Fabrika ve imalatçıların yurt içi ve yurt dışı alıcılar karşısındaki kurumsal güvenini artıran teknik ve hızlı altyapı.',
    commercialHubs: ['İstanbul Deri Organize Sanayi (İDOSB)', 'Tuzla Kimyacılar OSB', 'Tuzla Tersaneler Bölgesi', 'Birlik Organize Sanayi Sitesi'],
    focusSectors: ['Sanayi, İmalatçı & Fabrikalar', 'Lojistik & Depolama', 'Metal & Makine İmalatı', 'Dış Ticaret'],
    localGuarantee: 'Tuzla OSB bölgelerindeki üretim tesislerinize doğrudan yerinde ziyaret ve proje planlama.',
    targetKeywords: ['tuzla web tasarım', 'tuzla osb web sitesi', 'tuzla sanayi web yazılım', 'tuzla tersane web tasarım'],
    sampleClients: ['Tuzla Dış Ticaret A.Ş.', 'İDOSB Kimya İmalat', 'Tuzla Tersane Tedarik']
  },
  {
    id: 'kadikoy',
    slug: 'kadikoy-web-tasarim',
    name: 'Kadıköy',
    side: 'anadolu',
    title: 'Kadıköy Web Tasarım & Kreatif Web Geliştirme | MediWeb',
    metaDescription: 'Kadıköy, Moda, Kozyatağı ve Suadiye bölgesindeki seçkin klinikler, tasarım ofisleri ve hukuk büroları için anti-slop modern web mimarisi.',
    heroHeadline: 'Kadıköy & Kozyatağı İçin Ödül Seviyesinde Web Tasarımı',
    heroSubheadline: 'Yapay zeka şablonlarından uzak, tipografisi güçlü ve doğrudan randevu/iletişim üreten kreatif kurumsal vitrinler.',
    commercialHubs: ['Kozyatağı İş Merkezleri', 'Bağdat Caddesi & Caddebostan', 'Moda & Bahariye Sanat Aksı', 'Fikirtepe Yeni Finans Aksı'],
    focusSectors: ['Sağlık & Psikiyatri / Klinik', 'Hukuk & Patent Ofisleri', 'İç Mimarlık & Portfolyo', 'Kreatif Ajanslar'],
    localGuarantee: 'Kadıköy ve Bağdat Caddesi işletmelerine aynı gün yerinde kahve eşliğinde demo sunumu.',
    targetKeywords: ['kadıköy web tasarım', 'kozyatağı web yazılım', 'bağdat caddesi web ajansı', 'kadıköy hazır web sitesi'],
    sampleClients: ['Kozyatağı Psikoterapi', 'Caddebostan Gülüş Tasarımı', 'Kadıköy Mimarlık Atölyesi']
  },
  {
    id: 'atasehir',
    slug: 'atasehir-web-tasarim',
    name: 'Ataşehir',
    side: 'anadolu',
    title: 'Ataşehir Web Tasarım & Finans Merkezi Kurumsal Siteleri | MediWeb',
    metaDescription: 'İstanbul Finans Merkezi ve Batı Ataşehir kurumsal yapıları için yüksek performanslı web çözümleri. 3 yıl sıfır ek masraf güvencesi.',
    heroHeadline: 'Ataşehir & Finans Merkezi Kurumsal Web Mimarisi',
    heroSubheadline: 'Bölgedeki holding iştirakleri, kurumsal danışmanlar, mali müşavirler ve avukatlık ortaklıkları için prestijli dijital vitrin.',
    commercialHubs: ['İstanbul Finans Merkezi (İFM)', 'Batı Ataşehir Varyap Aksı', 'Barbaros Mahallesi Ofis Kuleleri', 'Brandium & Ataşehir Bulvarı'],
    focusSectors: ['Mali Müşavir & YMM', 'Kurumsal Hukuk & M&A', 'Yatırım & Gayrimenkul', 'Yazılım & Teknoloji'],
    localGuarantee: 'Ataşehir plazalarındaki ofisinizde 30 dakikalık canlı mimari demosu.',
    targetKeywords: ['ataşehir web tasarım', 'finans merkezi web sitesi', 'batı ataşehir web ajansı', 'ataşehir kurumsal web yazılım'],
    sampleClients: ['Ataşehir Denetim & YMM', 'Finans Merkezi Danışmanlık', 'Ataşehir Yatırım Gayrimenkul']
  },
  {
    id: 'umraniye',
    slug: 'umraniye-web-tasarim',
    name: 'Ümraniye',
    side: 'anadolu',
    title: 'Ümraniye Web Tasarım — İMES & Dudullu Sanayi Web Çözümleri | MediWeb',
    metaDescription: 'Ümraniye, İMES Sanayi Sitesi ve Dudullu OSB işletmelerine özel ürün vitrini, katalog ve kurumsal web siteleri. 3–5 günde anahtar teslim.',
    heroHeadline: 'Ümraniye, İMES & Dudullu İçin Yüksek Performanslı Web Mimarisi',
    heroSubheadline: 'İmalatçı, yedek parça ve toptancı firmaların dijitalde güvenle müşteri bulmasını sağlayan hızlı web platformları.',
    commercialHubs: ['İMES Sanayi Sitesi', 'Dudullu Organize Sanayi Bölgesi (DES)', 'Modoko Mobilya Kenti', 'Ümraniye Çarşı & Alemdağ Aksı'],
    focusSectors: ['Sanayi & Yedek Parça', 'Mobilya & İç Mekan', 'Kalıp & Talaşlı İmalat', 'Toptan Ticaret'],
    localGuarantee: 'İMES ve Dudullu sanayi bölgelerine yerinde teknik keşif hizmeti.',
    targetKeywords: ['ümraniye web tasarım', 'imes web sitesi', 'dudullu osb web tasarım', 'modoko web sitesi'],
    sampleClients: ['İMES Makine Sanayi', 'Dudullu Plastik Kalıp', 'Modoko Tasarım Mobilya']
  },
  {
    id: 'pendik',
    slug: 'pendik-web-tasarim',
    name: 'Pendik',
    side: 'anadolu',
    title: 'Pendik Web Tasarım & Kurtköy Lojistik Web Siteleri | MediWeb',
    metaDescription: 'Pendik Çarşı, Kurtköy Teknopark ve Sabiha Gökçen lojistik aksı firmalarına özel kurumsal web siteleri. 3 yıl hosting dahil.',
    heroHeadline: 'Pendik & Kurtköy İşletmelerine Özel Web Mimarisi',
    heroSubheadline: 'İç mimarlık ofisleri, denizcilik ve sanayi firmaları, klinikler ve teknoloji işletmeleri için Lighthouse 95+ performans optimizasyonuyla modern web platformları.',
    commercialHubs: ['Kurtköy Teknopark & Havalimanı Aksı', 'Pendik Marina & Sahil', 'Şeyhli Sanayi Bölgesi', 'Kaynarca & Çamçeşme Ticaret'],
    focusSectors: ['İç Mimarlık & Tasarım', 'Sanayi & İmalat', 'Özel Klinik & Sağlık', 'Hukuk & Danışmanlık'],
    localGuarantee: 'Pendik ve Kurtköy firmaları için sözleşmeli ve taahhütlü 3-7 iş gününde teslimat.',
    targetKeywords: ['pendik web tasarım', 'kurtköy web yazılım', 'pendik web sitesi yapanlar', 'pendik kurumsal ajans'],
    sampleClients: ['Kurtköy Lojistik A.Ş.', 'Pendik Marina Yat Servis', 'Kaynarca Tıp Merkezi']
  },
  {
    id: 'sisli',
    slug: 'sisli-web-tasarim',
    name: 'Şişli',
    side: 'avrupa',
    title: 'Şişli Web Tasarım — Mecidiyeköy & Bomonti Kurumsal Ajans | MediWeb',
    metaDescription: 'Şişli, Mecidiyeköy ve Bomonti aksındaki hukuk büroları, sağlık turizmi klinikleri ve kurumsal danışmanlara özel ultra hızlı web siteleri.',
    heroHeadline: 'Şişli & Mecidiyeköy İçin Prestijli Dijital Mimari',
    heroSubheadline: 'Sağlık turizmi, uluslararası danışmanlık ve avukatlık bürolarına çok dilli, anında açılan ve güven veren web altyapısı.',
    commercialHubs: ['Mecidiyeköy Meydan & Trump Towers', 'Bomontiada & Yeni Bomonti Ofisleri', 'Büyükdere Caddesi Şişli Aksı', 'Nişantaşı Sağlık Koridoru'],
    focusSectors: ['Sağlık Turizmi & Estetik', 'Ceza & Ticaret Hukuku', 'Yeminli Mali Müşavirlik', 'Moda & Tasarım'],
    localGuarantee: 'Şişli merkezli ofisler için aynı gün yerinde yüz yüze proje değerlendirme.',
    targetKeywords: ['şişli web tasarım', 'mecidiyeköy web sitesi', 'bomonti web ajansı', 'şişli klinik web tasarım'],
    sampleClients: ['Nişantaşı Estetik Cerrahi', 'Mecidiyeköy Hukuk Ortaklığı', 'Bomonti Danışmanlık']
  },
  {
    id: 'levent',
    slug: 'levent-web-tasarim',
    name: 'Levent',
    side: 'avrupa',
    title: 'Levent Web Tasarım & Büyükdere Caddesi Kurumsal Çözümleri | MediWeb',
    metaDescription: 'Levent, 4. Levent ve Maslak plazalarında yer alan kurumsal şirketlere ve avukatlık ortaklıklarına özel güvenilir web mimarisi.',
    heroHeadline: 'Levent & Maslak Plazaları İçin Kurumsal Web Mimarisi',
    heroSubheadline: 'Haftalarca süren bürokratik süreçler olmadan, kurumsal kimliğinizi 3–5 günde dünya standartlarında yayına alalım.',
    commercialHubs: ['Kanyon & Metrocity Aksı', 'Sapphire & 4. Levent Sanayi', 'Büyükdere Kurumsal Plazalar', 'Etiler Giriş Aksı'],
    focusSectors: ['Kurumsal Şirketler & Holdingler', 'M&A & Şirketler Hukuku', 'Yönetim Danışmanlığı', 'Yatırım'],
    localGuarantee: 'Levent bölgesindeki kurumsal şirket merkezlerine yerinde sunum ve gizlilik sözleşmeli çalışma.',
    targetKeywords: ['levent web tasarım', '4 levent web sitesi', 'büyükdere caddesi web yazılım', 'levent kurumsal ajans'],
    sampleClients: ['Levent Kurumsal Danışmanlık', '4. Levent Hukuk Bürosu', 'Sapphire Varlık Yönetimi']
  },
  {
    id: 'besiktas',
    slug: 'besiktas-web-tasarim',
    name: 'Beşiktaş',
    side: 'avrupa',
    title: 'Beşiktaş Web Tasarım & Etiler Kurumsal Web Siteleri | MediWeb',
    metaDescription: 'Beşiktaş, Etiler, Akatlar ve Balmumcu bölgesindeki butik klinikler, mimarlar ve kurumsal yapılar için anti-slop web mimarisi.',
    heroHeadline: 'Beşiktaş & Etiler İçin Rafine ve Güçlü Web Tasarımı',
    heroSubheadline: 'Yapay zeka şablonlarının sıradanlığından arındırılmış, tipografisi ve yüzey kalitesiyle fark yaratan kurumsal platformlar.',
    commercialHubs: ['Akaretler & Sıraselviler', 'Etiler & Nispetiye Caddesi', 'Balmumcu & Barbaros Bulvarı', 'Levent Giriş Koridoru'],
    focusSectors: ['Estetik & Diş Klinikleri', 'Çağdaş Mimarlık', 'Hukuk & Arabuluculuk', 'Gastronomi & Butik Markalar'],
    localGuarantee: 'Beşiktaş merkezli işletmelere özel birebir mimari tasarım oturumu.',
    targetKeywords: ['beşiktaş web tasarım', 'etiler web sitesi', 'akatlar kurumsal web', 'beşiktaş web ajansı'],
    sampleClients: ['Etiler Diş Kliniği', 'Akaretler Mimarlık', 'Barbaros Hukuk']
  },
  {
    id: 'bakirkoy',
    slug: 'bakirkoy-web-tasarim',
    name: 'Bakırköy',
    side: 'avrupa',
    title: 'Bakırköy Web Tasarım & Florya Kurumsal Web Çözümleri | MediWeb',
    metaDescription: 'Bakırköy, Florya ve Yeşilköy bölgesindeki özel poliklinikler, dış ticaret ofisleri ve hukuk büroları için 3 günde anahtar teslim siteler.',
    heroHeadline: 'Bakırköy & Florya İçin Güvenilirlik Odaklı Web Siteleri',
    heroSubheadline: 'Özel sağlık poliklinikleri, avukatlar ve dış ticaret firmaları için 3 yıl boyunca sıfır ek masraf güvencesiyle canlıda.',
    commercialHubs: ['İncirli Caddesi Sağlık Aksı', 'Florya Ticaret & Ofis Merkezleri', 'Yeşilköy Çarşı & Marina', 'Ataköy Towers Aksı'],
    focusSectors: ['Medikal Poliklinik & Diş', 'Avukatlık Büroları', 'Dış Ticaret & Gümrük', 'Gayrimenkul'],
    localGuarantee: 'Bakırköy ve Florya işletmelerine yerinde analiz ve hızlı içerik onboarding desteği.',
    targetKeywords: ['bakırköy web tasarım', 'florya web sitesi', 'yeşilköy web ajansı', 'incirli klinik web sitesi'],
    sampleClients: ['Florya Sağlık Merkezi', 'İncirli Hukuk Ortaklığı', 'Yeşilköy Dış Ticaret']
  },
  {
    id: 'basaksehir',
    slug: 'basaksehir-web-tasarim',
    name: 'Başakşehir',
    side: 'avrupa',
    title: 'Başakşehir Web Tasarım — İkitelli OSB & Masko Siteleri | MediWeb',
    metaDescription: 'İkitelli OSB, Masko ve Başakşehir sanayi kuruluşlarına özel katalog, kurumsal kimlik ve ihracat web platformları.',
    heroHeadline: 'Başakşehir, İkitelli OSB & Masko İçin Sanayi Web Mimarisi',
    heroSubheadline: 'Büyük ölçekli üretici, mobilya ve plastik/metal imalatçıları için yurt içi ve dışı müşteri toplayan hızlı web platformları.',
    commercialHubs: ['İkitelli Organize Sanayi Bölgesi (İOSB)', 'Masko Mobilya Kenti', 'Triko Center & İsdök', 'Başakşehir Merkez & Kayaşehir'],
    focusSectors: ['Sanayi & İmalatçı', 'Mobilya & Dekorasyon', 'Toptan & İhracat', 'İnşaat Taahhüt'],
    localGuarantee: 'İkitelli OSB ve Masko firmalarına üretim tesisinizde yerinde proje başlatma.',
    targetKeywords: ['başakşehir web tasarım', 'ikitelli osb web sitesi', 'masko web tasarım', 'ikitelli sanayi web yazılım'],
    sampleClients: ['İkitelli Metal Sanayi', 'Masko Tasarım Mobilya', 'Başakşehir İnşaat']
  },
  {
    id: 'maslak',
    slug: 'maslak-web-tasarim',
    name: 'Maslak',
    side: 'avrupa',
    title: 'Maslak Web Tasarım & Plaza Kurumsal Web Mimarisi | MediWeb',
    metaDescription: 'Maslak plazalarında yer alan teknoloji, hukuk, finans ve holding iştirakleri için ultra hızlı ve üst düzey kurumsal web mimarisi.',
    heroHeadline: 'Maslak Plazaları İçin Üst Düzey Kurumsal Web Çözümleri',
    heroSubheadline: 'Işık hızında global bulut altyapısında 0.3 saniyede açılan, kurumsal prestijinizi eksiksiz yansıtan modern dijital vitrin.',
    commercialHubs: ['Maslak Meydan & Sun Plaza', 'Spine Tower & Veko Giz', 'İTÜ Arı Teknokent Aksı', 'Ayazağa & Vadi İstanbul'],
    focusSectors: ['Teknoloji & SaaS', 'Büyük Ölçekli Hukuk Ortaklıkları', 'Varlık Yönetimi & Fonlar', 'İhracat & İmalat'],
    localGuarantee: 'Maslak bölgesindeki plazalara doğrudan kurumsal sunum ve NDA (gizlilik) güvencesi.',
    targetKeywords: ['maslak web tasarım', 'maslak web ajansı', 'maslak plaza kurumsal site', 'vadi istanbul web tasarım'],
    sampleClients: ['Maslak Finans Danışmanlık', 'Spine Tower Hukuk', 'Vadi İstanbul Yazılım']
  }
];

export function getAllLocationSlugs(): string[] {
  return LOCATIONS_SEO_DATA.map((l) => l.slug);
}

export function getLocationBySlug(slug: string): LocationSeoItem | undefined {
  return LOCATIONS_SEO_DATA.find((l) => l.slug === slug);
}
