/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        'darkBG': '#0f1214',
        'darkCardBG': '#11171d',
      }
    },
  },
  plugins: [],
}

