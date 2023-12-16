/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "circle-blue": "#5200FF",
        "circle-blue-two": "#051070",
        "circle-bg": "#CDCEE2",
      },
      screens: {
        ci: "1150px"
      }
    },
  },
  plugins: [],
};
