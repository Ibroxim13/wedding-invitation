/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body: ['"Cormorant Garamond"', 'serif'],
        script: ['"Great Vibes"', 'cursive'],
      },
      colors: {
        gold: {
          50:  '#fdf9ee',
          100: '#f7efd0',
          200: '#eedb98',
          300: '#e3c15e',
          400: '#d4a832',
          500: '#c9a84c',
          600: '#b8862a',
          700: '#8b6914',
          800: '#6b5010',
          900: '#4a380c',
        },
        cream: {
          50:  '#fffdf8',
          100: '#faf7f2',
          200: '#f5f0e8',
          300: '#ede4d4',
          400: '#e0d0b8',
        },
        ink: {
          900: '#1a0f05',
          800: '#2c2010',
          700: '#3d2e18',
          600: '#5c4520',
        },
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'fade-up': 'fadeUp 0.8s ease forwards',
        'fade-in': 'fadeIn 1.2s ease forwards',
        'pulse-gold': 'pulseGold 2s ease-in-out infinite',
        'unlock': 'unlockBounce 0.5s ease forwards',
        'envelope-away': 'envelopeAway 1.2s cubic-bezier(0.4, 0, 0.2, 1) forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':       { transform: 'translateY(-10px)' },
        },
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        pulseGold: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(201,168,76,0.4)' },
          '50%':       { boxShadow: '0 0 0 16px rgba(201,168,76,0)' },
        },
        unlockBounce: {
          '0%':   { transform: 'scale(1)' },
          '40%':  { transform: 'scale(1.3)' },
          '70%':  { transform: 'scale(0.9)' },
          '100%': { transform: 'scale(1.1)' },
        },
        envelopeAway: {
          '0%':   { transform: 'translateY(0) scale(1)',    opacity: '1' },
          '30%':  { transform: 'translateY(-5vh) scale(1.02)', opacity: '1' },
          '100%': { transform: 'translateY(-110vh) scale(0.9)', opacity: '0' },
        },
      },
    },
  },
  plugins: [],
}
