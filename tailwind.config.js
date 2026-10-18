/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#000000', // Pure Black
          900: '#09090b', // Zinc 950
          850: '#18181b', // Zinc 900
          800: '#27272a', // Zinc 800
          700: '#3f3f46', // Zinc 700
          600: '#52525b', // Zinc 600
        },
        cyan: {
           glow: '#ffffff', // Pure White replacing Cyan Glow
           accent: '#e4e4e7', // Zinc 200
           deep: '#a1a1aa', // Zinc 400
           dark: '#52525b', // Zinc 600
        },
        glass: {
          bg: 'rgba(0, 0, 0, 0.65)',
          border: 'rgba(255, 255, 255, 0.15)',
          lightBg: 'rgba(255, 255, 255, 0.75)',
          lightBorder: 'rgba(255, 255, 255, 0.2)',
        }
      },
      fontFamily: {
        sans: ['Outfit', 'Inter', 'sans-serif'],
        display: ['Space Grotesk', 'Outfit', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'pulse-glow': 'pulseGlow 3s infinite ease-in-out',
        'float': 'float 6s infinite ease-in-out',
        'circuit-pulse': 'circuitPulse 4s infinite linear',
        'marquee': 'marquee 30s linear infinite',
        'spin-slow': 'spin 12s linear infinite',
        'shimmer': 'shimmer 2s infinite',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', filter: 'drop-shadow(0 0 15px rgba(255, 255, 255, 0.3))' },
          '50%': { opacity: '0.9', filter: 'drop-shadow(0 0 25px rgba(255, 255, 255, 0.6))' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        circuitPulse: {
          '0%': { strokeDashoffset: '1000' },
          '100%': { strokeDashoffset: '0' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        }
      },
      boxShadow: {
        'cyan-glow': '0 0 25px -5px rgba(255, 255, 255, 0.2)',
        'cyan-glow-lg': '0 0 50px -10px rgba(255, 255, 255, 0.3)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.5)',
      }
    },
  },
  plugins: [],
}
