import scrollbarHide from 'tailwind-scrollbar-hide';

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        dark: '#081b29',
        primary: '#FFFFFF',
        secondary: '#F8F7F2',
        primary_text_color: '#0A2E3D',
        secondary_text_color: '#296F6D',
        btn_color: '#fb3640',
        background_second: '#FFF6ED',
      },
    },
  },
  plugins: [scrollbarHide],
};
