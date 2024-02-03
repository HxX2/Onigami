/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  safelist: [
    {
      pattern:
        /(text|bg)-(darkBlue)/,
    },
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        'darkBlue': '#181D20',
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
