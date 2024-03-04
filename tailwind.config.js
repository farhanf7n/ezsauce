/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'slate-grey': '#B1B1B1',
        'medium-grey': '#828282',
      },
      fontFamily: {
        ClashDisplayBold: ['ClashDisplay-Bold', 'sans'],
        ClashDisplayMedium: ['ClashDisplay-Medium', 'sans'],
      },
    },
  },
  plugins: [],
};
