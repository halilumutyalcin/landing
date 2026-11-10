'use client';

import React from 'react';
import { 
  ShieldCheck, 
  Clock, 
  CheckCircle2, 
  Star, 
  Building, 
  Scale, 
  Stethoscope, 
  Compass
} from 'lucide-react';

interface MetricItem {
  value: string;
  label: string;
  detail: string;
}

interface Testimonial {
  name: string;
  role: string;
  company: string;
  sector: string;
  avatarIcon: React.ReactNode;
  content: string;
  highlight: string;
  deliveryDays: string;
}

export const TrustBarSection: React.FC = () => {
  const metrics: MetricItem[] = [
    {
      value: '48+',
      label: 'Yayında Kurumsal Proje',
      detail: 'Hukuk, klinik, sanayi & mimarlık',
    },
    {
      value: '3–10 Gün',
      label: 'Ortalama Teslimat Süresi',
      detail: 'İçerik onayından anahtar teslim lansmana',
    },
    {
      value: '%99.4',
      label: 'Zamanında Teslim Oranı',
      detail: 'Sözleşmeyle korunan kesin takvim',
    },
    {
      value: '3 Yıl',
      label: 'Sıfır Ekstra Masraf',
      detail: 'Alan adı, yüksek hızlı barındırma & SSL dahil',
    },
  ];

  const testimonials: Testimonial[] = [
    {
      name: 'Av. Mehmet Yılmaz',
      role: 'Kurucu Ortak',
      company: 'Yılmaz Hukuk Bürosu',
      sector: 'Hukuk & Danışmanlık',
      avatarIcon: <Scale className="w-4 h-4 text-amber-400" />,
      content: 'Geleneksel ajansların 2 ayda veremediği sonucu 4 günde canlıya aldık. TBB reklam yasağına ve baro kurallarına duyarlı kurumsal dil bizim için en kritik noktaydı.',
      highlight: 'Meslek Kurallarına Duyarlı Dil',
      deliveryDays: '4 İş Gününde Yayında',
    },
    {
      name: 'Dr. Dt. Elif Kaya',
      role: 'Başhekim / Kurucu',
      company: 'Kaya Estetik Diş Kliniği',
      sector: 'Sağlık & Klinik',
      avatarIcon: <Stethoscope className="w-4 h-4 text-emerald-400" />,
      content: 'Önceden canlı demoyu telefonumuzda inceleyip karar verdik. Tasarım tam olarak gördüğümüz gibi geldi; WhatsApp ve randevu yönlendirmesi kusursuz işliyor.',
      highlight: 'Canlı Demo Güvencesi',
      deliveryDays: '5 İş Gününde Yayında',
    },
    {
      name: 'Burak Demir',
      role: 'Yüksek Mimar',
      company: 'Demir Mimarlık & Tasarım',
      sector: 'Mimarlık & İnşaat',
      avatarIcon: <Compass className="w-4 h-4 text-blue-400" />,
      content: 'Görsel portföyümüzün yüksek çözünürlüklü fotoğrafları mobilde anında açılıyor. 3 yıl boyunca sunucu faturası veya güncelleme sürprizi çıkmaması büyük konfor.',
      highlight: 'Yüksek Hızlı Portföy',
      deliveryDays: '7 İş Gününde Yayında',
    },
  ];

  return (
    <section className="py-14 sm:py-16 bg-[#070709] border-y border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 1. Verified Metrics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 pb-12 border-b border-white/[0.08]">
          {metrics.map((item, idx) => (
            <div key={idx} className="space-y-1">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight font-display">
                <span className="text-amber-400">{item.value}</span>
              </div>
              <div className="text-xs sm:text-sm font-bold text-white">
                {item.label}
              </div>
              <p className="text-[11px] sm:text-xs text-zinc-400">
                {item.detail}
              </p>
            </div>
          ))}
        </div>

        {/* 2. Customer Trust Quotes / Stories */}
        <div className="pt-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-3">
            <div>
              <div className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                <span>Gerçek Proje Deneyimleri</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Müşterilerimizin Gözünden MedWeb Süreci
              </h3>
            </div>
            <div className="text-xs text-zinc-400 flex items-center gap-2">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <span className="font-semibold text-white">4.9 / 5.0</span>
              <span className="text-zinc-500">· Doğrulanmış Müşteri Değerlendirmesi</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-[#0A0A0C] border border-white/[0.08] hover:border-white/20 transition-all flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/5 text-[11px] font-semibold text-amber-400">
                      {t.highlight}
                    </span>
                    <span className="text-[11px] text-zinc-500 font-medium">
                      {t.deliveryDays}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed italic">
                    "{t.content}"
                  </p>
                </div>

                <div className="pt-3 border-t border-white/5 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-white/[0.06] border border-white/10 flex items-center justify-center shrink-0">
                    {t.avatarIcon}
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs font-bold text-white truncate">
                      {t.name}
                    </div>
                    <div className="text-[11px] text-zinc-400 truncate">
                      {t.role} · {t.company}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Micro Trust Banner */}
          <div className="mt-8 pt-6 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-4 text-[11px] text-zinc-400">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Resmi Hizmet Sağlayıcı: Ahmet Hakan Cansız (Pendik V.D. Vergi No: 2020589059)</span>
            </div>
            <div className="flex items-center gap-4">
              <span>✓ Sözleşmeli Teslimat</span>
              <span>✓ Yasal E-Arşiv Fatura</span>
              <span>✓ İlk 3 Yıl Barındırma Garantisi</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
