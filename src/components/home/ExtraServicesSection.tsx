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
  return (
    <section id="ek-hizmetler" className="py-24 bg-[#090B10]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header - Editorial & Clean */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-bold text-blue-400 uppercase tracking-wider mb-2">
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

        {/* 3 Editorial Group Columns (No heavy card boxes, no box borders, pure icons) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12">
          {SERVICE_GROUPS.map((group, gIdx) => (
            <div key={gIdx} className="space-y-6">
              
              {/* Group Header */}
              <div className="pb-4 border-b border-white/10">
                <h3 className="text-lg font-bold text-white tracking-tight">
                  {group.groupTitle}
                </h3>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  {group.groupDesc}
                </p>
              </div>

              {/* Service Cards - Distinct Background, High Contrast, Zero Borders */}
              <div className="space-y-4">
                {group.services.map((service) => {
                  const Icon = service.icon;

                  return (
                    <div 
                      key={service.id}
                      className="group p-5 rounded-2xl bg-[#0E1320] hover:bg-[#131A2B] shadow-lg transition-all duration-200"
                    >
                      {/* Title + Naked Icon */}
                      <div className="flex items-start gap-3 mb-2">
                        <Icon className="w-5 h-5 text-blue-400 shrink-0 mt-0.5 group-hover:text-blue-300 transition-colors" />
                        <div>
                          <h4 className="text-sm font-bold text-white group-hover:text-blue-300 transition-colors leading-snug">
                            {service.title}
                          </h4>
                          <span className="text-[11px] font-semibold text-emerald-400 block mt-0.5">
                            {service.pricing}
                          </span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-xs text-slate-300 leading-relaxed pl-8">
                        {service.description}
                      </p>
                    </div>
                  );
                })}
              </div>

            </div>
          ))}
        </div>

        {/* Unified Section Footer Note */}
        <div className="mt-12 text-center text-xs text-slate-400">
          İhtiyacınız olan ek bir entegrasyon veya özel bir modül varsa teklif aşamasında paketinize esnekçe dahil edilebilir.
        </div>

      </div>
    </section>
  );
};
