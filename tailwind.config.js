/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
  colors: {
    'default-gold': '#FFB400',
    '--default-gray': '#2B2B2B',
    '--default-gray-d': '#18191A',
    '--default-gray-l': '#3A3B3C',
    '--white': '#FFFFFF',
    '--white-d': '#E4E6EB',
    '--white-l': '#F0F0F6',

    '--gray-100': '#767676',
    '--gray-500': '#242526',

    '--green-500': '#7EB942'
  },
  fontFamily: {
    sans: ['Roboto'],
    serif: ['Roboto']
  }
}
