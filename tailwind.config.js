/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: 'media',
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
