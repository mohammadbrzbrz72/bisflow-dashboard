/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "1rem",
          xl: "2rem",
        },
      },
      backgroundImage: {
        "layout-shape": "url('/src/assets/layout-image/shape.svg')",
      },
      colors: {
        "green-light": "#3fbfb5",
        "green-dark-1": "#0b7171",
        "green-dark-2": "#23a0a5",
        "gray-light": "#F6F6F6",
        "gray-light": "#B3B3B3",
      },
    },
  },
  plugins: [],
};
