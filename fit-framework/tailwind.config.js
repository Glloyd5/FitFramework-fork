/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        fitpurple: {
          50: '#BF9ACA',
          100: '#1E1825'
        },
        'fitblue': '#96C5B0',
        'fitorange': '#FF875C',
      }
    },
  },
  plugins: [],
}