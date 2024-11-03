/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "smaller": "768px",
        "bigger": "992px"
      },
    },
  },
  plugins: [],
}

