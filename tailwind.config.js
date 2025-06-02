/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontSize: {
        '2xs': '0.625rem',
      },
      colors: {
        'cosmic-latte': '#F3ECDC',
        'slate-gray': '#B1B1B1',
        'medium-gray': '#828282',
        'light-gray': '#efefef',
      },

      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        slideDown: {
          '0%': { transform: 'translate(-50%, -100%)' },
          '100%': { transform: 'translate(-50%, 0)' },
        },
        'slide-in': {
          from: {
            transform:
              'translate3d(0px, 50vh, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
            opacity: 0,
          },
          to: {
            transform:
              'translate3d(0px, 0vh, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
            opacity: 1,
          },
        },
        'up-down': {
          '0%, 100%': {
            transform:
              'translate3d(0px, 0rem, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
          },
          '50%': {
            transform:
              'translate3d(0px, 2.5rem, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
          },
        },
      },
      animation: {
        card: 'fadeInUp 0.5s ease-out',
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        slideDown: 'slideDown 0.3s ease-out forwards',
        'slide-in': 'slide-in 2s ease forwards',
        'up-down': 'up-down 9s ease-in-out infinite',
      },
      boxShadow: {
        drop: '0 4px 8px rgba(0, 0, 0, 0.08)',
        'drop-dark': '0 8px 28px rgba(200, 200, 200, 0.3)',
      },
      backdropBlur: {
        xs: '2px',
      },
      backgroundColor: {
        'glass-light': 'rgba(255, 255, 255, 0.5)',
        'glass-dark': 'rgba(40, 40, 40, 0.  )',
        'glass-cosmic-latte': 'rgba(255, 247, 236, 0.5)',
        'glass-cosmic-latte-dark': 'rgba(255, 247, 236, 0.2)',
      },
      zIndex: {
        10: '10',
      },
      screens: {
        xs: '480px',
      },
    },
  },
  plugins: [],
};
