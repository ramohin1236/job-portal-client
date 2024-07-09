/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
      ],
  theme: {
    extend: {
        colors:{
            "primary" :"#F0F5FA",
            "secondary": "#2A85FF",
            "blackkk" : "#070707",
            "third" : "#A1A1A1"
        }
    },
  },
  plugins: [],
}

