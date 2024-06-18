/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        greenPrimary: "rgb(var(--green-primary))"
      },
      fontFamily:{
        karla: '"Karla", sans-serif',
        caveat: '"Caveat Brush", cursive',
        inter: '"Inter", sans-serif',
      }
    },
  },
  plugins: [],
}

