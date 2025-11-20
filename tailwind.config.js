/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkGreen: "#3E582B",
        lightGreen: "#E7F0DC",
        lightGray: "#F6F6F6",
        black: "#222222",
        colorText: "#597445",
      },
    },
  },
  plugins: [],
};
