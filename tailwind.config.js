/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#222123",
        mainbg: "#232224",
        white: "#ffffff",
        "dark-brown": "#523122",
        "mid-brown": "#a26833",
        "light-brown": "#e3a458",
        "red-brown": "#7f3b2d",
        "yellow-brown": "#a26833",
        "milk-yellow": "#e3d3bc",
        red: "#a02128",
        milk: "#faeade",
      },
      fontFamily: {
        sans: ["Antonio", "sans-serif"],
        paragraph: ["ProximaNova", "sans-serif"],
      },
    },
  },
  plugins: [],
};
