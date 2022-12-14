/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#0D0D0D',
        'secondary': '#171717',
        'alt': '#FF922E'
      }
    },
  },
  plugins: [],
}