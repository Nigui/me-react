/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#22333B",
          dark: "#0A0908",
        },
        secondary: {
          DEFAULT: "#C6AC8F",
          light: "#EAE0D5",
          dark: "#5E503F",
        },
        light: "#B8B6B6",
        lighter: {
          DEFAULT: "#ffffff",
          10: "rgb(255 255 255 / 0.1 )",
          40: "rgb(255 255 255 / 0.4 )",
          50: "rgb(255 255 255 / 0.5 )",
          70: "rgb(255 255 255 / 0.7 )",
        },
        deepblue: "#232339",
      },
      animation: {
        "background-vertical-1": "translate 10s linear infinite",
      },
      keyframes: {
        translate: {
          "25%": { transform: "translateY(-25%)" },
          "75%": { transform: "translateY(25%)" },
          "0%, 50%, 100%": { transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
