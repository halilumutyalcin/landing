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
    groupTitle: 'Teknik Altyapı & Entegrasyon',
    groupDesc: 'İşletmenizin operasyonlarını kolaylaştıran otomasyon, bağımsızlık ve yönetim altyapıları.',
    services: [
      {
        id: 'ai-assistant',
        title: 'Sitede AI Akıllı Asistan',
        description: 'Ziyaretçi sorularını 7/24 yanıtlayan, SSS içeriğinizden öğrenen ve mesai dışı doğrudan teklif toplayan yapay zeka asistanı.',
        pricing: 'Tek seferlik kurulum + lisans',
        icon: Bot,
      },
      {
        id: 'sms-integration',
        title: 'Online Randevu & SMS Otomasyonu',
        description: 'Form doldurulduğunda müşteriye ve firma yetkilisine anlık onay, hatırlatma ve takvim senkronizasyonu.',
        pricing: 'Kurulum + SMS paket bedeli',
        icon: Smartphone,
      },
      {
        id: 'admin-cms',
        title: 'Headless CMS Yönetim Paneli',
        description: 'Metin, fotoğraf ve duyuruları kendiniz güncelleyebileceğiniz modern bulut panel entegrasyonu.',
        pricing: 'Tek seferlik ~9.900 ₺',
        icon: Settings,
      },
      {
        id: 'source-code',
        title: 'Tam Kaynak Kod & Bağımsız Lisans Teslimi',
        description: 'Sitenizi kendi bağımsız sunucunuza taşımak isterseniz tüm kaynak kodlar ve bağımsız kullanım lisansı devredilir.',
        pricing: '+%75 Lisans Devri (Başlangıç: 13.125 ₺, Pro: 24.375 ₺, Kurumsal: 44.925 ₺)',
        icon: Code2,
      },
    ],
  },
  {
    groupTitle: 'Dijital Pazarlama & SEO',
    groupDesc: 'Sitenizin ve işletmenizin Google aramalarında ve haritalarda yerel olarak öne çıkmasını sağlayan büyüme modülleri.',
    services: [
      {
        id: 'advanced-seo',
        title: 'Aylık İleri SEO & Harita Yönetimi',
        description: 'Sektörel anahtar kelime takibi, Google Harita optimizasyonu ve yerel arama görünürlüğü.',
        pricing: 'Aylık 6.500 ₺\'den başlayan',
        icon: TrendingUp,
      },
      {
        id: 'google-review',
        title: 'Google İşletme Profili & Tarafsız Yorum Standı',
        description: 'Tüm müşterilere doğrudan ve tarafsız inceleme bağlantısı sunan masaüstü QR stant tasarımı ve yerel işletme rehberliği.',
        pricing: 'Kurulum paketi ~3.500 ₺',
        icon: Star,
      },
      {
        id: 'whatsapp-business',
        title: 'WhatsApp Business & Dönüşüm Köprüsü',
        description: 'Departman seçimi (Satış, Destek, Randevu), otomatik karşılama ve mesai dışı hazır yanıt kurgusu.',
        pricing: 'Tek seferlik kurulum',
        icon: MessageSquare,
      },
    ],
  },
  {
    groupTitle: 'İçerik & Tasarım Hizmetleri',
    groupDesc: 'Sitenizi yeni sayfalar, diller veya sıfırdan logo ve kurumsal kimlikle genişleten kreatif çözümler.',
    services: [
      {
        id: 'extra-pages',
        title: 'Ek Sayfa & Hizmet Genişletme',
        description: 'İhtiyacınız büyüdüğünde yeni hizmetler veya departmanlar için uyumlu kurumsal sayfa eklenmesi.',
        pricing: 'Sayfa başı ~1.500 ₺',
        icon: Sparkles,
      },
      {
        id: 'extra-lang',
        title: 'Ek Yabancı Dil Mimarisi',
        description: 'İhracat odaklı firmalar için İngilizce, Almanca veya Arapça dil altyapısı ve SEO kurulumu.',
        pricing: 'Dil başına ~7.500 ₺',
        icon: Globe,
      },
      {
        id: 'content-writing',
        title: 'Profesyonel Metin Yazarlığı',
        description: 'Sektörünüze özel, ikna edici ve Google uyumlu kurumsal sayfa metinlerinin anahtar teslim yazılması.',
        pricing: 'Sayfa başı ~1.250 ₺',
        icon: PenTool,
      },
      {
        id: '360-launch',
        title: '360° Logo & Kurumsal Kimlik Paketi',
        description: 'Vektörel logo tasarımı, renk kılavuzu, kartvizit ve kurumsal e-posta imza şablonu.',
        pricing: 'Pakete Ek ~9.500 ₺ (Pro+ Pakette Dahil)',
        icon: Sparkles,
      },
    ],
  },
];

export const ExtraServicesSection: React.FC = () => {
  // SEO is 2nd tab (index 1) and opens by default as requested
  const [activeTab, setActiveTab] = React.useState<number>(1);

  const categories = [
    { id: 0, label: 'Teknik & Entegrasyon', count: SERVICE_GROUPS[0].services.length },
    { id: 1, label: 'SEO & Dijital Pazarlama', count: SERVICE_GROUPS[1].services.length },
    { id: 2, label: 'İçerik & Marka Kimliği', count: SERVICE_GROUPS[2].services.length },
  ];

  const currentGroup = SERVICE_GROUPS[activeTab] || SERVICE_GROUPS[1];

  return (
    <section id="ek-hizmetler" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8">
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
        </div>

        {/* 3 Intuitive Category Tabs */}
        <div className="mb-10 w-full max-w-3xl mx-auto flex sm:grid sm:grid-cols-3 overflow-x-auto p-1.5 rounded-2xl bg-[#0A0A0C] border border-white/[0.08] gap-1.5 sm:gap-2 shadow-inner [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`flex-1 shrink-0 sm:shrink sm:w-full min-w-[130px] sm:min-w-0 px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 text-center whitespace-nowrap ${
                activeTab === cat.id
                  ? 'bg-white text-black shadow-lg shadow-white/10 ring-1 ring-white'
                  : 'text-zinc-400 hover:text-white hover:bg-white/[0.04]'
              }`}
            >
              <span>{cat.label}</span>
              <span className={`px-1.5 py-0.5 rounded text-[10px] font-bold shrink-0 ${
                activeTab === cat.id ? 'bg-amber-400/20 text-amber-900 ring-1 ring-amber-500/30' : 'bg-white/10 text-zinc-400'
              }`}>
                {cat.count}
              </span>
            </button>
          ))}
        </div>

        {/* Group Subheading Description */}
        <div className="text-center max-w-2xl mx-auto mb-8 animate-in fade-in duration-200">
          <p className="text-xs sm:text-sm text-zinc-400">
            {currentGroup.groupDesc}
          </p>
        </div>

        {/* Dynamic Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {currentGroup.services.map((srv) => {
            const Icon = srv.icon;
            const isSpecial = srv.id === '360-launch';

            return (
              <div
                key={srv.id}
                className={`p-6 rounded-2xl flex flex-col justify-between transition-all duration-300 relative group ${
                  isSpecial
                    ? 'bg-[#0A0A0C] border border-amber-500/30 shadow-lg'
                    : 'bg-[#0A0A0C] border border-white/[0.08] hover:border-white/20'
                }`}
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                    <Icon className="w-5 h-5 text-amber-400" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">
                    {srv.title}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                    {srv.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs">
                  <span className="text-[11px] text-zinc-400">Yatırım:</span>
                  <span className="font-semibold text-amber-400 text-xs">
                    {srv.pricing}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
