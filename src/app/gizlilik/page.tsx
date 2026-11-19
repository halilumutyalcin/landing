import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Lock } from 'lucide-react';
import { siteConfig } from '@/config/site.config';

export const metadata: Metadata = {
  title: 'Gizlilik ve Çerez Politikası',
  description: 'MediWeb ziyaretçilerinin gizlilik hakları, çerez kullanımı ve veri güvenliği standartları.',
  alternates: {
    canonical: `https://${siteConfig.domain}/gizlilik`,
  },
};

export default function GizlilikPage() {
  return (
    <div className="pt-32 pb-24 bg-black min-h-screen text-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Link 
          href="/"
          className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400 hover:text-amber-300 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Ana Sayfaya Dön</span>
        </Link>

        <div className="p-8 sm:p-12 rounded-3xl bg-[#0A0A0C] border border-white/[0.08] shadow-2xl space-y-6">
          <div className="flex items-center gap-3 pb-6 border-b border-white/10">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
              <Lock className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                Gizlilik ve Çerez Politikası
              </h1>
              <p className="text-xs text-zinc-400 mt-1">
                Veri Güvenliği, Çerez Standartları ve İletişim İlkeleri
              </p>
            </div>
          </div>

          <div className="prose prose-invert max-w-none text-sm text-zinc-300 leading-relaxed space-y-4">
            <p>
              <strong>MediWeb</strong> (Ahmet Hakan Cansız - Pendik V.D. 2020589059) olarak, web sitemizi ziyaret eden tüm kullanıcılarımızın gizliliğini korumak ve güvenli bir dijital deneyim sunmak temel ilkemizdir.
            </p>

            <h2 className="text-base font-bold text-white mt-6">1. Çerez (Cookie) Kullanımı</h2>
            <p>
              Sitemizde; temel oturum güvenliği ve form işlevselliğinin sağlanması amacıyla zorunlu teknik çerezler ile site trafiğini ve performansını anonim olarak ölçümleyen analitik çerezler kullanılmaktadır. Sitemizde üçüncü taraf reklam veya hedefleme çerezleri kullanılmamaktadır.
            </p>

            <h2 className="text-base font-bold text-white mt-6">2. Veri Güvenliği Standartları</h2>
            <p>
              Web sitemiz üzerinden iletilen keşif ve teklif formu verileri modern 256-bit SSL/TLS şifreleme protokolleriyle korunmakta olup doğrudan güvenli bulut sunucuları üzerinden aktarılmaktadır.
            </p>

            <h2 className="text-base font-bold text-white mt-6">3. İletişim Güvencesi</h2>
            <p>
              Teklif formunda paylaştığınız telefon numarası ve e-posta adresi, yalnızca projeniz hakkında keşif görüşmesi ve teklif hazırlığı amacıyla kullanılır. Bilgileriniz asla spam arama veya izinsiz ticari bülten gönderimi için kullanılmaz; üçüncü kişi ya da kuruluşlara satılmaz.
            </p>

            <h2 className="text-base font-bold text-white mt-6">4. Çerez Tercihlerini Yönetme</h2>
            <p>
              Tarayıcınızın ayarlar menüsünden çerezleri dilediğiniz zaman silebilir, engelleyebilir veya çerez bildirimi alacak şekilde ayarlayabilirsiniz. Çerezlerin tamamen devre dışı bırakılması durumunda form doğrulaması gibi bazı işlevlerde kesintiler yaşanabilir.
            </p>

            <h2 className="text-base font-bold text-white mt-6">5. İletişim</h2>
            <p>
              Gizlilik politikamız ve veri güvenliği uygulamalarımız hakkında sorularınız için <strong>info@mediweb.com.tr</strong> e-posta adresi üzerinden bizimle her zaman iletişime geçebilirsiniz.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
