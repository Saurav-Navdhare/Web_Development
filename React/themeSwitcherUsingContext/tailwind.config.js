/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',    // need to add this to make class based theme
  theme: {
    extend: {},
  },
  plugins: [],
}

