/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  mode: "jit",
  plugins: [],
  theme: {
    colors: {
      'my-gold': '#FFB400',
      'my-gold-dark': '#FFF200',
      'my-blue': '#0668E1',
      'my-green': '#7EB942',
      'my-gray': '#f2f3f5',
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      indigo: colors.indigo,
      pink: colors.pink,
    },
    fontFamily: {
      inter: ["Inter"],
      lob: ["Lobster"],
      rc: ["Roboto Condensed"],
      calis: ["Calistoga"]
    },
  },
};
