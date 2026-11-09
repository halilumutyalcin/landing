import { ImageResponse } from 'next/og';
import { siteConfig } from '@/config/site.config';

export const runtime = 'nodejs';
export const alt = `${siteConfig.name} — ${siteConfig.tagline}`;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: '#0B0F19',
          padding: '64px 72px',
          fontFamily: 'sans-serif',
          color: '#F8FAFC',
          border: '2px solid #1F293D',
        }}
      >
        {/* Top Header Badge */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '8px 18px',
              borderRadius: '9999px',
              backgroundColor: 'rgba(99, 102, 241, 0.15)',
              border: '1px solid rgba(99, 102, 241, 0.35)',
              color: '#818CF8',
              fontSize: '15px',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
            }}
          >
            Kurumsal Web Mimarisi &amp; Dijital Prestij
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '16px',
              color: '#94A3B8',
            }}
          >
            <span>İstanbul, TR</span>
            <span>•</span>
            <span style={{ color: '#10B981' }}>Canlı Vitrinler</span>
          </div>
        </div>

        {/* Center Headline */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginTop: '20px' }}>
          <div
            style={{
              fontSize: '60px',
              fontWeight: 700,
              lineHeight: 1.1,
              color: '#FFFFFF',
              letterSpacing: '-0.03em',
            }}
          >
            {siteConfig.name}
          </div>
          <div
            style={{
              fontSize: '26px',
              fontWeight: 500,
              color: '#818CF8',
              letterSpacing: '-0.01em',
            }}
          >
            3–10 İş Gününde Lansman • İlk 3 Yıl Hosting Dahil
          </div>
          <div
            style={{
              fontSize: '18px',
              color: '#94A3B8',
              maxWidth: '920px',
              lineHeight: 1.5,
            }}
          >
            WordPress hantallığına son. Sektörünüze özel geliştirilmiş kurumsal web mimarisi, 3 yıl domain + global barındırma dahil anahtar teslim dijital prestij.
          </div>
        </div>

        {/* Bottom Metrics Bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingTop: '28px',
            borderTop: '1px solid #1F293D',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '40px' }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: '12px', color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Açılış Hızı</span>
              <span style={{ fontSize: '18px', fontWeight: 700, color: '#F8FAFC' }}>&lt; 0.5 Saniye</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: '12px', color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Teslim Süresi</span>
              <span style={{ fontSize: '18px', fontWeight: 700, color: '#F8FAFC' }}>3–5 İş Günü</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: '12px', color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Altyapı Güvencesi</span>
              <span style={{ fontSize: '18px', fontWeight: 700, color: '#F8FAFC' }}>3 Yıl 0 TL Yenileme</span>
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              color: '#94A3B8',
              fontSize: '16px',
              fontWeight: 500,
            }}
          >
            {siteConfig.domain}
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
