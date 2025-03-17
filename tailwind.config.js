/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        bebas: ['Bebas Neue', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      animation: {
        spin: 'spin 0.5s linear infinite', // Set to 0.2s for a faster spin
      },
      screens: {
        xs: "420px",
        "range-1024-1029": { min: "1024px", max: "1029px" },
        "custom-1029": "1029px",
        "400-767": { min: "400px", max: "767px" },
        custom: "1024px",
      },
      boxShadow: {
        "4xl": "0 0 15px rgba(156, 163, 175, 0.5)",
      },
      backgroundImage: {
        'DVDR': "url('/images/home-main.jpg')"
      }
    },
  },
  plugins: [],
};
