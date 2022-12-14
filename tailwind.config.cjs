/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,vue,ts}",
  ],
  theme: {
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
    extend: {},
  },
  
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/aspect-ratio')],
}