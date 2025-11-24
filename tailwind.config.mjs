/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "curious-blue": "#3c8dbc",
        tangerine: "#f68d2d",
        lima: "#7ec347",
        black: "#454545",
        "persian-green": "#20a595",
        grey: "#d8d8d8",
        "dark-grey": "#A9A6A6",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        sourceSans: ['"Source Sans 3"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
