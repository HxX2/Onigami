/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  safelist: [
    {
      pattern:
        /(text|bg)-(darkBlue|lightBlue|NavBarColor)/,
    },
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        'darkBlue': '#181D20',
        'NavBarColor': 'rgb(28,34,38,0.9)',
        'lightBlue': 'rgba(13, 28, 43, 1)',
      },
      fontFamily: {
        'heebo': ['Heebo', 'sans-serif'],
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [],
};
