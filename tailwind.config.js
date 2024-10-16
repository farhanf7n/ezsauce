/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'slate-gray': '#B1B1B1',
        'medium-gray': '#828282',
        'light-gray': '#efefef'
      },
      fontFamily: {
        ClashDisplayBold: ['ClashDisplay-Bold', 'sans'],
        ClashDisplayMedium: ['ClashDisplay-Medium', 'sans'],
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' }
        }
      },
      animation: {
        'card': 'fadeInUp 0.5s ease-out'
      }
    },
  },
  plugins: [],
};
