'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { siteConfig } from '@/config/site.config';
import { generateWhatsAppUrl } from '@/lib/utils';
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="sss" className="py-24 bg-[#090B10]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs font-bold text-blue-400 uppercase tracking-wider mb-2">
            Aklınıza Takılan Sorular
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-display tracking-tight mb-4">
            Sıkça Sorulan Sorular
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Hizmet modelimiz, barındırma, revizyon ve faturalandırma süreçleri hakkında en çok merak edilen samimi yanıtlar.
          </p>
        </div>

        {/* Accordion List - Clean, Subtle Separators, No Heavy Borders */}
        <div className="space-y-3 mb-16">
          {siteConfig.faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="bg-[#0E1320] rounded-2xl overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 font-semibold text-white hover:text-blue-300 transition-colors"
                >
                  <span className="text-sm sm:text-base">{faq.question}</span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center text-slate-400 transition-transform duration-200 shrink-0 ${
                      isOpen ? 'rotate-180 text-white' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/5 animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Clean CTA Box (No heavy gradient, no artificial border, authentic WhatsAppIcon) */}
        <div className="bg-[#0E1320] rounded-3xl p-8 sm:p-10 text-center shadow-xl">
          <h3 className="text-xl sm:text-2xl font-bold text-white font-display mb-2">
            Sorunuzu Burada Göremediniz mi?
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mb-6 max-w-lg mx-auto leading-relaxed">
            Aklınıza takılan her türlü teknik veya ticari konuyu doğrudan kurucu ekibimize WhatsApp üzerinden sorabilirsiniz.
          </p>
          <a
            href={generateWhatsAppUrl({
              customMessage: 'Merhaba MediWeb! Sıkça sorulan sorular haricinde aklıma takılan bir soru sormak istiyorum.',
            })}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-lg shadow-emerald-600/25 transition-all hover:scale-105"
          >
            <WhatsAppIcon className="w-4 h-4 fill-current shrink-0" />
            <span>WhatsApp ile Doğrudan Sorun</span>
          </a>
        </div>

      </div>
    </section>
  );
};
