/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'system-ui', 'sans-serif'],
        display: ['Onest', 'Montserrat', 'sans-serif'],
      },
      colors: {
        accent: '#FFC70F',
        page: '#F1F0EE',
        surface: '#FFFDF8',
        'surface-dark': '#1F1F1F',
        ink: '#161616',
        muted: '#5F5F5F',
        'muted-dark': '#A1A1AA',
        line: '#D8D5CE',
        'line-dark': '#3F3F46',
        'cosmic-latte': '#F3ECDC',
        'medium-gray': '#828282',
        'light-gray': '#EFEFEF',
      },
      fontSize: {
        '2xs': '0.625rem',
      },
      boxShadow: {
        drop: '0 4px 8px rgba(0, 0, 0, 0.08)',
      },
      keyframes: {
        'up-down': {
          '0%, 100%': {
            transform: 'translate3d(0px, 0rem, 0px) scale3d(1, 1, 1)',
          },
          '50%': {
            transform: 'translate3d(0px, 2.5rem, 0px) scale3d(1, 1, 1)',
          },
        },
      },
      screens: {
        xs: '480px',
      },
    },
  },
  plugins: [],
};
