/** @type {import('tailwindcss').Config} */
module.exports = {
  variants: {
    animation: ["motion-safe"]
},
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        burtons: "burtons",
        poppins: ["Poppins", "sans-serif"],
      },
      animation:{
        fadeIn: "fadeIn 2s ease-in forwards"

      },
      safelist: ['animate-[slide-right_1s_ease-in-out, motion-safe]'],
    },
    keyframes: {
      fadeIn: {
        "0%": { opacity: 0 },
        "100%": { opacity: 1 }
      }
    }
  },
  plugins: [],
};
