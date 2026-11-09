'use client';

import React from 'react';
import { 
  CheckCircle2, 
  ArrowRight,
  Eye,
  FileCheck,
  Send,
  Rocket
} from 'lucide-react';

export const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Mimarınızı Canlıda Test Edin',
      desc: 'Katalogdaki 16 çalışan canlı vitrinden firmanızın kurumsal ağırlığına en uygun olanı seçin. Ne alacağınızı baştan canlı görün.',
      milestone: 'Görerek Karar Verme',
      icon: Eye,
    },
    {
      step: '02',
      title: 'Paketinizi Belirleyin',
      desc: 'İhtiyacınıza göre Başlangıç (Tek Sayfa), Profesyonel (10 Sayfa) veya Kurumsal paketi seçin. Net, sabit tek fiyat.',
      milestone: 'Sürpriz Ek Masraf Yok',
      icon: FileCheck,
    },
    {
      step: '03',
      title: 'Bilgilerinizi WhatsApp\'tan İletin',
      desc: 'Logonuzu, hizmetlerinizi ve fotoğraflarınızı tek bir mesajla gönderin. Metniniz yoksa sektör şablonlarımızla biz toparlarız.',
      milestone: 'Zahmetsiz Aktarım',
      icon: Send,
    },
    {
      step: '04',
      title: '3–10 İş Gününde Canlıdasınız',
      desc: 'İçerik onayınızdan itibaren paketinize göre belirlenen net sürede Google uyumu ve ilk 3 yıl barındırmanızla siteniz eksiksiz yayına alınır.',
      milestone: '3 Yıl Barındırma Dahil',
      icon: Rocket,
    },
  ];

  return (
    <section id="nasil-calisir" className="py-24 bg-black border-b border-white/[0.08] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header - Human & Direct */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-2">
            Zahmetsiz & Şeffaf Süreç
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
            4 Adımda Siteniz Yayında!
          </h2>
          <p className="text-base text-slate-300 leading-relaxed">
            Haftalarca süren ajans toplantılarını, ucu açık revizyon kuyruklarını ve sürpriz ek faturaları geride bıraktık. 
            Süreç ilk dakikadan itibaren planlı, dakik ve şeffaftır.
          </p>
        </div>

        {/* Process Flow Timeline with Connecting Line */}
        <div className="relative">
          {/* Connecting Flow Line for Desktop */}
          <div className="hidden lg:block absolute top-14 left-10 right-10 h-0.5 bg-gradient-to-r from-blue-500/20 via-emerald-500/30 to-blue-500/20 pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative z-10">
            {steps.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.step}
                  className="p-6 sm:p-7 rounded-2xl bg-[#0A0A0C] border border-white/[0.08] hover:border-amber-500/40 shadow-xl flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 group"
                >
                  <div>
                    {/* Step Number + Naked Icon */}
                    <div className="flex items-center justify-between mb-5">
                      <span className="text-3xl sm:text-4xl font-black font-mono text-white tracking-tight">
                        {item.step}
                      </span>
                      <Icon className="w-5 h-5 text-zinc-400 group-hover:text-amber-400 transition-colors" />
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-white mb-2.5 leading-snug">
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-6">
                      {item.desc}
                    </p>
                  </div>

                  {/* Milestone Footnote */}
                  <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-semibold">
                    <span className="text-amber-400">{item.milestone}</span>
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
