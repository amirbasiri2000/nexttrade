/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#09165a",

        gold: {
          light_100: "#F8DC7C",
          light_200: "#f5d48b",
          light_300: "#f3b66b",
          light_400: "#bb914a",

          dark_100: "#bb914a",
          dark_200: "#c5a25e",
        },
        blue: {
          dark: "#030c3b",
          light: "#09165a",
        },
      },
    },
  },
  plugins: [],
};


