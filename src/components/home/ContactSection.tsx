'use client';

import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { 
  CheckCircle2, 
  Phone, 
  Mail, 
  MapPin,
  Clock,
  Zap,
  Sparkles,
  ShieldCheck
} from 'lucide-react';
import { DEMO_CATALOG } from '@/config/demos.config';
import { siteConfig } from '@/config/site.config';
import { generateWhatsAppUrl } from '@/lib/utils';
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon';
import { LegalModal } from '@/components/layout/LegalModal';

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
  const [isKvkkModalOpen, setIsKvkkModalOpen] = useState(false);
  const [selectedDesignBanner, setSelectedDesignBanner] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
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

  useEffect(() => {
    const handleSelectDesign = (e: Event) => {
      const customEvent = e as CustomEvent<{ design: string; sector: string }>;
      if (customEvent.detail) {
        setValue('selectedDesign', customEvent.detail.design);
        if (customEvent.detail.sector) {
          setValue('sector', customEvent.detail.sector);
        }
        setSelectedDesignBanner(customEvent.detail.design);
      }
    };

    window.addEventListener('select-design', handleSelectDesign);
    return () => window.removeEventListener('select-design', handleSelectDesign);
  }, [setValue]);

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
    <section id="iletisim" className="py-24 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Natural, Human Agency Directory (No artificial boxed cards) */}
          <div className="lg:col-span-5 space-y-7">
            <div>
              <div className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-2">
                Doğrudan İletişim & Kurulum
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-display tracking-tight leading-tight">
                Sitenizi Paketinize Göre 3–10 İş Gününde Yayına Alalım.
              </h2>
            </div>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Formu doldurabilir veya doğrudan WhatsApp üzerinden beğendiğiniz tasarımı iletebilirsiniz. Ekibimiz aynı gün içinde içerik planınızı çıkarır ve kuruluma başlar.
            </p>

            {/* Clean Editorial Contact Details - Pure naked icons, no boxed cards */}
            <div className="space-y-6 pt-2">
              <div className="flex items-start gap-4">
                <Mail className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-bold text-white">E-posta ile İletişim</div>
                  <a href={`mailto:${siteConfig.email}`} className="text-xs text-slate-300 hover:text-white transition-colors block mt-0.5">
                    {siteConfig.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
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
                  <div className="text-sm font-bold text-white">Ofis & Operasyon Merkezi</div>
                  <div className="text-xs text-slate-400 mt-0.5">{siteConfig.address}</div>
                </div>
              </div>
            </div>

            {/* Direct Discovery Call & 4 High-Trust Guarantees */}
            <div className="space-y-4">
              <div className="p-5 rounded-2xl bg-[#0A0A0C] border border-white/[0.08] space-y-3">
                <div className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                  Karar Vermeden Önce Görüşelim
                </div>
                <h4 className="text-base font-bold text-white">
                  15 Dakikalık Ücretsiz Keşif &amp; Demo İnceleme
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Hangi mimarinin sektörünüze ve hedeflerinize en uygun olduğunu uzman ekibimizle birlikte 15 dakikalık telefon veya Google Meet görüşmesinde değerlendirin.
                </p>
                <a
                  href={generateWhatsAppUrl({
                    customMessage: 'Merhaba MediWeb ekibi! Firmam için 15 dakikalık online keşif ve demo inceleme görüşmesi planlamak istiyorum.',
                  })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-semibold text-xs transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-400" />
                  <span>15 Dk. Keşif Görüşmesi Planla</span>
                </a>
              </div>

              {/* 4 Trust Highlights Beside Form */}
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                  <div className="flex items-center gap-1.5 text-amber-400 font-bold">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Ücretsiz Demo</span>
                  </div>
                  <p className="text-[11px] text-zinc-400">Satın almadan önce canlı çalışan siteyi test edin.</p>
                </div>

                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                  <div className="flex items-center gap-1.5 text-emerald-400 font-bold">
                    <Clock className="w-3.5 h-3.5" />
                    <span>~30 Dk. Yanıt</span>
                  </div>
                  <p className="text-[11px] text-zinc-400">Mesai saatlerinde teklifiniz anında hazırlanır.</p>
                </div>

                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                  <div className="flex items-center gap-1.5 text-blue-400 font-bold">
                    <Zap className="w-3.5 h-3.5" />
                    <span>4 Adımda Teslim</span>
                  </div>
                  <p className="text-[11px] text-zinc-400">Sözleşmeli 3–10 iş gününde yayına alınır.</p>
                </div>

                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                  <div className="flex items-center gap-1.5 text-amber-400 font-bold">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>3 Yıl Altyapı</span>
                  </div>
                  <p className="text-[11px] text-zinc-400">Hosting ve SSL için 0 ₺ yenileme garantisi.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Form (No heavy artificial border styling) */}
          <div className="lg:col-span-7 bg-[#0A0A0C] border border-white/[0.08] rounded-3xl p-6 sm:p-10 shadow-2xl relative">
            {selectedDesignBanner && (
              <div className="mb-4 p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-between text-xs text-amber-400 animate-in fade-in">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 shrink-0" />
                  <span>Seçilen Tasarım: <strong>{selectedDesignBanner}</strong></span>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedDesignBanner(null)}
                  className="text-zinc-400 hover:text-white text-[11px]"
                >
                  ✕
                </button>
              </div>
            )}
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
                  className="px-6 py-2.5 rounded-xl bg-white text-black font-semibold text-xs hover:bg-zinc-200 transition-colors"
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
                      onChange={(e) => {
                        let val = e.target.value.replace(/\D/g, '');
                        if (val.startsWith('0')) val = val.substring(1);
                        let formatted = '0';
                        if (val.length > 0) formatted += val.substring(0, 3);
                        if (val.length > 3) formatted += ' ' + val.substring(3, 6);
                        if (val.length > 6) formatted += ' ' + val.substring(6, 8);
                        if (val.length > 8) formatted += ' ' + val.substring(8, 10);
                        e.target.value = formatted;
                        register('phone').onChange(e);
                      }}
                      placeholder="05XX XXX XX XX"
                      maxLength={14}
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
                      <option value="sanayi">Sanayi & İmalatçı</option>
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

                <div className="flex items-start gap-2.5 pt-1">
                  <input
                    type="checkbox"
                    id="kvkk-consent"
                    required
                    className="mt-0.5 rounded bg-zinc-900 border-white/20 text-amber-500 focus:ring-amber-400"
                  />
                  <label htmlFor="kvkk-consent" className="text-[11px] text-slate-400 leading-snug">
                    <button
                      type="button"
                      onClick={() => setIsKvkkModalOpen(true)}
                      className="text-amber-400 hover:text-amber-300 underline font-medium inline"
                    >
                      KVKK Aydınlatma Metni
                    </button>
                    'ni okudum ve anladım.
                  </label>
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
              </form>
            )}
          </div>
        </div>
      </div>

      <LegalModal
        isOpen={isKvkkModalOpen}
        onClose={() => setIsKvkkModalOpen(false)}
        type="kvkk"
      />
    </section>
  );
};
