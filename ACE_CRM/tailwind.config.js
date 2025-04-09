/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        'smm': '410px',
        'xxl': '1430px',
        'xxxl': '1920px',

      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
};