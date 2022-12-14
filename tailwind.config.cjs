/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        project: "1200px",
      },
      fontFamily:{
        serif: ['Lateef', "serif"],
        sans: ['Inter', "sans-serif"],
      }
    },
  },
  plugins: [],
}
