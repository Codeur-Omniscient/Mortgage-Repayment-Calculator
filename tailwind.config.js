/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lime: "hsl(61, 70%, 52%)",
        alert: "hsl(4, 69%, 50%)",
        Slate100: "hsl(202, 86%, 94%)",
        Slate300: "hsl(203, 41%, 72%)",
        Slate500: "hsl(200, 26%, 54%)",
        Slate700: "hsl(200, 24%, 40%)",
        Slate800: "hsl(201, 54%, 16%)",
        Slate900: "hsl(202, 56%, 12%)",
      },
      fontFamily: {
        sans: ["Plus Jakarta Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
