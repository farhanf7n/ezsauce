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
    },
  },
  plugins: [],
};
