/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#202224",
        secondary: "#FF5555",
        primaryDark: "#B1BAED",
      },
    },
  },
  plugins: [],
};
