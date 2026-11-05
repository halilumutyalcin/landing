'use client';

import React from 'react';
import { 
  Bot, 
  MessageSquare, 
  Smartphone, 
  Globe, 
  Settings, 
  TrendingUp, 
  Code2, 
  PenTool, 
  Star,
  ShieldCheck,
  ShieldOff,
  Sparkles
} from 'lucide-react';

interface ServiceItem {
  id: string;
  title: string;
  description: string;
  pricing: string;
  icon: React.FC<{ className?: string }>;
}

interface ServiceGroup {
  groupTitle: string;
  groupDesc: string;
  services: ServiceItem[];
}

const SERVICE_GROUPS: ServiceGroup[] = [
  {
    groupTitle: 'İletişim & Yapay Zeka Otomasyonu',
    groupDesc: 'Gelen ziyaretçiyi anında yakalayan, mesai dışı teklif toplayan ve müşteriye SMS ile güven veren modüller.',
    services: [
      {
        id: 'ai-assistant',
        title: 'Sitede AI Akıllı Asistan',
        description: 'Ziyaretçi sorularını 7/24 yanıtlayan, SSS içeriğinizden öğrenen ve mesai dışı doğrudan teklif toplayan yapay zeka chatbot.',
        pricing: 'Tek seferlik kurulum + lisans',
        icon: Bot,
      },
      {
        id: 'whatsapp-business',
        title: 'WhatsApp Business Entegrasyonu',
        description: 'Departman seçimi (Satış, Destek, Randevu), otomatik karşılama ve mesai dışı hazır yanıt kurgusu.',
        pricing: 'Tek seferlik kurulum',
        icon: MessageSquare,
      },
      {
        id: 'sms-integration',
        title: 'SMS Bildirim Entegrasyonu',
        description: 'Sitedeki form doldurulduğunda müşteriye ve firma yetkilisine anlık SMS onayı ve randevu hatırlatması.',
        pricing: 'Kurulum + SMS paket bedeli',
        icon: Smartphone,
      },
    ],
  },
  {
    groupTitle: 'Global Mimari & Yönetim Paneli',
    groupDesc: 'İhracat yapan firmalar için çoklu dil altyapısı ve içeriklerinizi kendiniz güncelleyebileceğiniz modern panel.',
    services: [
      {
        id: 'extra-lang',
        title: 'Ek Yabancı Dil Mimarisi',
        description: 'Almanca, Arapça, Rusça veya Fransızca için dil değiştirici, hreflang etiketleri ve SEO altyapı kurulumu.',
        pricing: 'Dil başına ~7.500 ₺',
        icon: Globe,
      },
      {
        id: 'admin-cms',
        title: 'Headless CMS Yönetim Paneli',
        description: 'Metin, fotoğraf, blog ve duyuruları kendiniz yönetebileceğiniz modern bulut panel entegrasyonu ve eğitimi.',
        pricing: 'Tek seferlik ~9.900 ₺',
        icon: Settings,
      },
      {
        id: 'source-code',
        title: 'Tam Kaynak Kod Mülkiyeti',
        description: 'Sitenin tüm Next.js 14 kaynak kodlarının teslim edilmesi. Kendi bağımsız sunucunuzda barındırma imkanı.',
        pricing: 'Paket bedeline ek +%75',
        icon: Code2,
      },
    ],
  },
  {
    groupTitle: 'Büyüme, İtibar & Rutin Güvence',
    groupDesc: 'Google aramalarında öne çıkaran, müşteri yorumlarını artıran ve sitenizi sürekli güncel tutan destek.',
    services: [
      {
        id: 'advanced-seo',
        title: 'Aylık İleri SEO & Harita Yönetimi',
        description: 'Aylık anahtar kelime takibi, Google Harita gönderileri, rakip analizi ve bölgesel arama motoru optimizasyonu.',
        pricing: 'Aylık 6.500 ₺\'den başlayan',
        icon: TrendingUp,
      },
      {
        id: 'content-writing',
        title: 'Profesyonel Metin Yazarlığı',
        description: 'Sektörünüze özel, ikna edici ve Google uyumlu tüm kurumsal sayfa metinlerinin anahtar teslim yazılması.',
        pricing: 'Sayfa başı ~1.250 ₺',
        icon: PenTool,
      },
      {
        id: 'google-review',
        title: 'Google Yorum & İtibar Kurgusu',
        description: 'Masaüstü QR stant tasarımı, memnun müşteri yönlendirme linki ve ilk 10 organik inceleme stratejisi.',
        pricing: 'Kurulum paketi ~3.500 ₺',
        icon: Star,
      },
      {
        id: 'white-label',
        title: 'White-Label / Ajans İmzası Kaldırma',
        description: 'Sitenin altındaki "Mimari: MediWeb" ibaresinin tamamen kaldırılması; sitenin %100 kendi bağımsız kurumsal markanız olarak sunulması.',
        pricing: '+3.500 ₺ (Tek Seferlik)',
        icon: ShieldOff,
      },
      {
        id: '360-launch',
        title: '360° Logo & Kurumsal Kimlik Paketi',
        description: 'Vektörel logo tasarımı, renk kılavuzu, kartvizit ve kurumsal e-posta imza şablonu ile Google Harita resmi doğrulaması.',
        pricing: 'Pakete Ek ~9.500 ₺ (Pro+ Pakette Dahil)',
        icon: Sparkles,
      },
      {
        id: 'maintenance',
        title: 'Aylık Teknik Bakım & Güvence',
        description: 'Aylık içerik güncellemeleri, güvenlik kontrolleri, DNS izleme ve kesintisiz öncelikli teknik destek.',
        pricing: 'Aylık 2.500 ₺ (Paketlerde ilk aylar ücretsiz)',
        icon: ShieldCheck,
      },
    ],
  },
];

export const ExtraServicesSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = React.useState<string>('all');

  const categories = [
    { id: 'all', label: 'Tüm Modüller', count: 12 },
    { id: '0', label: 'İletişim & Yapay Zeka', count: 3 },
    { id: '1', label: 'Panel & Global Dil', count: 3 },
    { id: '2', label: 'Büyüme, Lansman & SEO', count: 6 },
  ];

  const displayedGroups = selectedCategory === 'all'
    ? SERVICE_GROUPS
    : [SERVICE_GROUPS[parseInt(selectedCategory, 10)]];

  return (
    <section id="ek-hizmetler" className="py-20 bg-black border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-2">
            İhtiyaca Göre Genişletilebilir Mimari
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
            Ek Modüller ve Gelişmiş Entegrasyonlar
          </h2>
          <p className="text-base text-slate-300 leading-relaxed">
            Standart paketinizin üzerine işletmenizin büyümesine paralel olarak dilediğiniz yapay zeka, 
            çoklu dil, SMS veya yönetim paneli modüllerini bağımsız olarak ekletebilirsiniz.
          </p>

          {/* Interactive Category Filter Tabs - Side-by-side (Grid, No Scroll) */}
          <div className="mt-8 w-full max-w-4xl mx-auto grid grid-cols-4 p-1 sm:p-1.5 rounded-2xl bg-[#0A0A0C] border border-white/[0.08] gap-1 sm:gap-2 shadow-inner">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`w-full px-1.5 sm:px-3 md:px-5 py-2 sm:py-2.5 rounded-xl text-[10px] sm:text-xs md:text-sm font-bold transition-all flex items-center justify-center gap-1 sm:gap-1.5 text-center ${
                  selectedCategory === cat.id
                    ? 'bg-white text-black shadow-lg shadow-white/10 ring-1 ring-white'
                    : 'text-zinc-400 hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                <span>{cat.label}</span>
                <span className={`hidden sm:inline-flex px-1.5 py-0.5 rounded text-[10px] font-mono font-bold shrink-0 ${
                  selectedCategory === cat.id ? 'bg-amber-400/20 text-amber-900 ring-1 ring-amber-500/30' : 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                }`}>
                  {cat.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Filtered Grid - Compact & Responsive */}
        <div className="space-y-10">
          {displayedGroups.map((group, gIdx) => (
            <div key={gIdx} className="space-y-5 animate-in fade-in duration-200">
              {selectedCategory === 'all' && (
                <div className="pb-3 border-b border-white/10 flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                    {group.groupTitle}
                  </h3>
                  <p className="text-xs text-slate-400">
                    {group.groupDesc}
                  </p>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {group.services.map((service) => {
                  const Icon = service.icon;

                  return (
                    <div 
                      key={service.id}
                      className="p-5 rounded-2xl bg-[#0A0A0C] border border-white/[0.08] hover:border-amber-500/40 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
                    >
                      <div>
                        {/* Title + Icon */}
                        <div className="flex items-start gap-3 mb-2.5">
                          <Icon className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                          <div>
                            <h4 className="text-sm font-bold text-white leading-snug">
                              {service.title}
                            </h4>
                            <span className="text-[11px] font-semibold text-amber-400 font-mono block mt-0.5">
                              {service.pricing}
                            </span>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-xs text-zinc-300 leading-relaxed pl-8">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Section Footer Note */}
        <div className="mt-10 text-center text-xs text-slate-400">
          İhtiyacınız olan ek bir entegrasyon varsa teklif aşamasında paketinize esnekçe dahil edilebilir.
        </div>

      </div>
    </section>
  );
};
