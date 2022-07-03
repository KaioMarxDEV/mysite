/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  mode: "jit",
  theme: {
    extend: {},
  },
  plugins: [],
  theme: {
    fontFamily: {
      roboto: ["Roboto"],
      lob: ["Lobster"],
    },
  },
};
