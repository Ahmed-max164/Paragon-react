/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,tsx,ts,jsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      color:{
         primary100:'#000000',
         primary200:'#FFFFFF',
         primary300:'#1D357F',
         primary400:'FFBFOO',
      }
    },
  },
  plugins: [],
}

