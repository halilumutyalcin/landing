import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#000000',
        foreground: '#EDEDED',
        muted: '#A1A1AA',
        border: 'rgba(255, 255, 255, 0.08)',
        danger: '#EF4444',
        brand: {
          50: '#FFFBEB',
          100: '#FEF3C7',
          200: '#FDE68A',
          300: '#FCD34D',
          400: '#FBBF24',
          500: '#F59E0B',
          600: '#D97706',
          700: '#B45309',
          800: '#92400E',
          900: '#78350F',
          950: '#451A03',
          glow: 'rgba(245, 158, 11, 0.15)',
        },
        surface: {
          50: '#18181B',
          100: '#121214',
          200: '#0A0A0C',
          DEFAULT: '#0A0A0C',
        },
        accent: {
          amber: '#F59E0B',
          warm: '#FF6B00',
          emerald: '#10B981',
          danger: '#EF4444',
        },
        card: {
          DEFAULT: '#0A0A0C',
          hover: '#121214',
          border: 'rgba(255, 255, 255, 0.08)',
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'aurora-glow': 'radial-gradient(circle at 50% 0%, rgba(245, 158, 11, 0.12) 0%, transparent 60%)',
        'card-glow': 'radial-gradient(600px circle at var(--mouse-x, 0) var(--mouse-y, 0), rgba(255, 255, 255, 0.06), transparent 40%)',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-outfit)', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
};

export default config;
