'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { 
  ShieldCheck, 
  CheckCircle2, 
  Phone, 
  Mail, 
  MapPin
} from 'lucide-react';
import { DEMO_CATALOG } from '@/config/demos.config';
import { siteConfig } from '@/config/site.config';
import { generateWhatsAppUrl } from '@/lib/utils';
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon';

const contactSchema = z.object({
  fullName: z.string().min(2, 'Lütfen adınızı ve soyadınızı giriniz.'),
  phone: z.string().min(10, 'Geçerli bir telefon numarası giriniz.'),
  email: z.string().email('Geçerli bir e-posta adresi giriniz.'),
  sector: z.string().min(1, 'Lütfen sektör seçiniz.'),
  selectedDesign: z.string().min(1, 'Lütfen beğendiğiniz tasarımı seçiniz.'),
  selectedPackage: z.string().min(1, 'Lütfen paket seçiniz.'),
  message: z.string().optional(),
});

type ContactFormData = z.infer<typeof contactSchema>;

export const ContactSection: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      sector: 'hukuk',
      selectedDesign: 'Lexora',
      selectedPackage: 'pro',
    },
  });

  const onSubmit = (data: ContactFormData) => {
    const pkgName = data.selectedPackage === 'starter' 
      ? 'Başlangıç (17.500 ₺)' 
      : data.selectedPackage === 'pro' 
      ? 'Profesyonel (32.500 ₺)' 
      : 'Kurumsal (59.900 ₺)';

    const customMessage = `Merhaba, web sitesi teklif talebi:\n• İsim: ${data.fullName}\n• Telefon: ${data.phone}\n• E-posta: ${data.email}\n• Sektör: ${data.sector}\n• Seçilen Tasarım: ${data.selectedDesign}\n• Seçilen Paket: ${pkgName}\n• Not: ${data.message || 'Yok'}`;

    window.open(generateWhatsAppUrl({ customMessage }), '_blank');
    setIsSubmitted(true);
    reset();
  };

  return (
    <section id="iletisim" className="py-24 bg-[#090B10] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Natural, Human Agency Directory (No artificial boxed cards) */}
          <div className="lg:col-span-5 space-y-7">
            <div>
              <div className="text-xs font-bold text-blue-400 uppercase tracking-wider mb-2">
                Doğrudan İletişim & Kurulum
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-display tracking-tight leading-tight">
                Sitenizi 3–5 Günde Yayına Alalım.
              </h2>
            </div>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Formu doldurabilir veya doğrudan WhatsApp üzerinden beğendiğiniz tasarımı iletebilirsiniz. Ekibimiz aynı gün içinde içerik planınızı çıkarır ve kuruluma başlar.
            </p>

            {/* Clean Editorial Contact Details - Pure naked icons, no boxed cards */}
            <div className="space-y-6 pt-2">
              <div className="flex items-start gap-4">
                <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-bold text-white">3 Yıl Domain & Barındırma Fiyata Dahil</div>
                  <div className="text-xs text-slate-400 mt-0.5">Gizli veya sürpriz yıllık yenileme faturası çıkmaz.</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-bold text-white">E-posta ile İletişim</div>
                  <a href={`mailto:${siteConfig.email}`} className="text-xs text-slate-300 hover:text-white transition-colors block mt-0.5">
                    {siteConfig.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-bold text-white">Telefon & WhatsApp Danışma</div>
                  <a href={`tel:${siteConfig.phoneDisplay.replace(/\s+/g, '')}`} className="text-xs text-slate-300 hover:text-white transition-colors block mt-0.5">
                    {siteConfig.phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-bold text-white">Ofis & Operasyon</div>
                  <div className="text-xs text-slate-400 mt-0.5">Levent, İstanbul & Çankaya, Ankara</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Form (No heavy artificial border styling) */}
          <div className="lg:col-span-7 bg-[#0E1320] rounded-3xl p-6 sm:p-10 shadow-2xl relative">
            {isSubmitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white font-display">
                  Talebiniz Alındı!
                </h3>
                <p className="text-sm text-slate-300 max-w-md mx-auto">
                  WhatsApp mesajınız hazırlandı. En geç 30 dakika içerisinde müşteri temsilcimiz sizinle irtibata geçecektir.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-6 py-2.5 rounded-xl bg-blue-600 text-white font-semibold text-xs hover:bg-blue-500 transition-colors"
                >
                  Yeni Form Doldur
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <h3 className="text-xl font-bold text-white font-display mb-4 pb-2 border-b border-white/10">
                  Teklif & Kurulum Talep Formu
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-fullName" className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Ad Soyad *
                    </label>
                    <input
                      id="contact-fullName"
                      {...register('fullName')}
                      placeholder="Örn: Av. Mehmet Yılmaz"
                      className="w-full bg-[#090C14] rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-blue-500 focus-visible:ring-2 focus-visible:ring-blue-500"
                    />
                    {errors.fullName && (
                      <p className="text-rose-400 text-[11px] mt-1">{errors.fullName.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="contact-phone" className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Telefon Numarası *
                    </label>
                    <input
                      id="contact-phone"
                      {...register('phone')}
                      placeholder="05XX XXX XX XX"
                      className="w-full bg-[#090C14] rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-blue-500 focus-visible:ring-2 focus-visible:ring-blue-500"
                    />
                    {errors.phone && (
                      <p className="text-rose-400 text-[11px] mt-1">{errors.phone.message}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-semibold text-slate-300 mb-1.5">
                      E-posta Adresi *
                    </label>
                    <input
                      id="contact-email"
                      {...register('email')}
                      placeholder="info@firmaniz.com"
                      className="w-full bg-[#090C14] rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-blue-500 focus-visible:ring-2 focus-visible:ring-blue-500"
                    />
                    {errors.email && (
                      <p className="text-rose-400 text-[11px] mt-1">{errors.email.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="contact-sector" className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Sektörünüz
                    </label>
                    <select
                      id="contact-sector"
                      {...register('sector')}
                      className="w-full bg-[#090C14] rounded-xl px-3 py-3 text-xs text-white focus:outline-none focus:ring-1 focus:ring-blue-500 focus-visible:ring-2 focus-visible:ring-blue-500"
                    >
                      <option value="hukuk">Hukuk & Avukatlık</option>
                      <option value="klinik">Sağlık & Klinik</option>
                      <option value="osgb">OSGB & İş Güvenliği</option>
                      <option value="muhasebe">Mali Müşavir & YMM</option>
                      <option value="emlak">Emlak & Gayrimenkul</option>
                      <option value="diger">Diğer Kurumsal</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="contact-package" className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Paket Tercihi
                    </label>
                    <select
                      id="contact-package"
                      {...register('selectedPackage')}
                      className="w-full bg-[#090C14] rounded-xl px-3 py-3 text-xs text-white focus:outline-none focus:ring-1 focus:ring-blue-500 focus-visible:ring-2 focus-visible:ring-blue-500"
                    >
                      <option value="starter">Başlangıç (17.500 ₺)</option>
                      <option value="pro">Profesyonel (32.500 ₺)</option>
                      <option value="enterprise">Kurumsal (59.900 ₺)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Ek İstekler & Notlar (Opsiyonel)
                  </label>
                  <textarea
                    id="contact-message"
                    {...register('message')}
                    rows={3}
                    placeholder="Mevcut bir alan adınız var mı, ek yabancı dil veya özel bir modül istiyor musunuz?"
                    className="w-full bg-[#090C14] rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-blue-500 focus-visible:ring-2 focus-visible:ring-blue-500"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-xl shadow-emerald-600/25 transition-all flex items-center justify-center gap-2.5"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-current shrink-0" />
                  <span>Teklif Al & WhatsApp ile Gönder</span>
                </button>

                <p className="text-center text-[11px] text-slate-400">
                  Bilgileriniz 256-bit SSL ile korunur. Asla spam arama yapılmaz; yalnızca teklifiniz için WhatsApp üzerinden irtibata geçilir.
                </p>

                <p className="text-center text-[10px] text-slate-500">
                  Formu göndererek KVKK aydınlatma metnini okuduğunuzu ve kabul ettiğinizi beyan edersiniz.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
