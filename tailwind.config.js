/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: 'selector',
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#202224",
        secondary: "#FF5555",
        tertiary: "#7A7A7A",
        primaryDark: "#B1BAED",
        secondaryDark: "#0C0E38",
        tertiaryDark: "#212760",
      },
      borderRadius: {
        '2.5xl': '20px',
      },
    },
  },
  plugins: [],
};
