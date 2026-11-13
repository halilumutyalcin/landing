import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { siteConfig } from '@/config/site.config';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getBaseUrl(): string {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, '');
  }
  return `https://${siteConfig.domain}`;
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('tr-TR', {
    style: 'currency',
    currency: 'TRY',
    maximumFractionDigits: 0,
  }).format(amount);
}

export function generateWhatsAppUrl(options: {
  phone?: string;
  designName?: string;
  packageName?: string;
  customMessage?: string;
}): string {
  const phone = options.phone || siteConfig.whatsappNumber;
  let text = '';

  if (options.customMessage) {
    text = options.customMessage;
  } else if (options.designName && options.packageName) {
    text = `Merhaba, "${options.designName}" tasarımını beğendim. "${options.packageName}" kapsamında bilgi ve kurulum talep ediyorum.`;
  } else if (options.designName) {
    text = `Merhaba, "${options.designName}" tasarımı hakkında detaylı bilgi ve demo incelemesi talep ediyorum.`;
  } else if (options.packageName) {
    text = `Merhaba, "${options.packageName}" paketiniz hakkında detaylı bilgi ve kurulum talep ediyorum.`;
  } else {
    text = 'Merhaba, MediWeb kurumsal web mimarisi ve paketleriniz hakkında bilgi almak istiyorum.';
  }

  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
}
