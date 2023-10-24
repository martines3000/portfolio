/* eslint-disable @typescript-eslint/no-var-requires */
const { fontFamily } = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gray: colors.neutral,
      },
      fontFamily: {
        sans: ['var(--font-ibm-plex-sans)', ...fontFamily.sans],
      },
      backgroundImage: {
        'bg-gradient-radial':
          'radial-gradient(rgb(231 231 231) 10%, transparent 10.4%))',
        'dark:bg-gradient-radial':
          'radial-gradient(rgb(24 24 24) 10%, transparent 10.4%)',
      },
      lineClamp: {
        9: '9',
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('tailwindcss-radix')()],
};
