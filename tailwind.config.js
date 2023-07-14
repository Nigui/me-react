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
