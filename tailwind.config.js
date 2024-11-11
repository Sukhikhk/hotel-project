/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "phone": "500px",
        "smaller": "768px",
        "bigger": "992px"
      },
      colors: {
        "primary": "#0064d3",
        "green-price": "#158d1d",
        "green-button": "#139a1c"
        
      },
    },
  },
  plugins: [],
}

