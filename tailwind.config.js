/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'white': 'hsl(0, 0%, 100%)', //Dark Mode Text & Light Mode Elements
        'lightMode': {
          'VeryLightGray': 'hsl(0, 0%, 98%)',
          'DarkGray': 'hsl(0, 0%, 52%)',  //Light Mode Input
          'VeryDarkBlue': 'hsl(200, 15%, 8%)' // Light Mode Text 
        }
      },
      spacing: {
        '3.5': '0.875rem',
        '50' : '12.5rem',
        '128': '30rem',
        '144': '36rem',
      },
    },
    
  },
  plugins: [],
}