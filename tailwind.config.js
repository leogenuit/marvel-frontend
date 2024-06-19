/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "red-marvel": "#EE161E",
      },
      boxShadow: {
        "box-shadow": "2px 3px 13px black",
      },
      backgroundImage: {
        spiderman: "url('/img/spider-man.png')",
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
