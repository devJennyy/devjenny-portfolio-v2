/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: 'selector',
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lightmode: "#F9C1C2",
        darkmode: "#0B0D21",
        primary: "#202224",
        secondary: "#FF5555",
        tertiary: "#7A7A7A",
        primaryDark: "#B1BAED",
        secondaryDark: "#0C0E38",
        tertiaryDark: "#212760",
        midnightBlue: "#212760",
        navyBlue: "#1B204E",
        lightCoral: "#FF8888",
        gray: "#EEEEEE",
        gradient: {
          azureBlue: "#3461FF",
          neonPurple: "#8454EB",
          lavenderMist: "#BAC1FF",
          aquaGlow: "#63FEFE",
          fuchsiaBlaze: "#FF3EEC",
        },
        fontFamily: {
          raleway: ['Raleway', 'sans-serif'],
        },
      },
      borderRadius: {
        '2.5xl': '20px',
      },
    },
  },
  plugins: [],
};
