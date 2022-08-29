/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        warhawk: ['"warhawk"', "sans-serif"],
        sans: ['"Franklin Gothic"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        GC_Green: "#00843D",
        GC_Blue: "#002855",
      },
    },
  },
  plugins: [],
};
