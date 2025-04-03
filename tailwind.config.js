/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'accent-red': '#B34341',
        'gray-light': '#F4F4F4',
        'gray-dark': '#19242E',
      },
      fontFamily: {
        sans: ['"Quicksand"', '"Zen Maru Gothic"', 'sans-serif'],
      },
    },
  },
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [],
}
