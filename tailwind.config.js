/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "blue-light-marvel": "#125E91",
        "blue-marvel": "#192B48",
        "blue-footer": "#123168",
        "blue-dark-marvel": "#13192F",
        "red-marvel": "#D4291D",
      },
      boxShadow: {
        "box-shadow": "2px 3px 13px black",
      },
      backgroundImage: {
        spiderman: "url('/img/spider-man.png')",
        comics: "url('/img/bgcomics.png')",
      },
    },
  },
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false,
  variants: {
    extend: {},
  },
  plugins: [],
};
