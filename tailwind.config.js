/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  mode: "jit",
  plugins: [],
  theme: {
    fontFamily: {
      inter: ["Inter"],
      lob: ["Lobster"],
    },
    extend: {
      animation: {
        "one-spin": "one-spin 0.3s linear",
      },
    },
  },
};
