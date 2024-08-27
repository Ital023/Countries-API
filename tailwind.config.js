/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
         //Dark Mode Text & Light Mode Elements
        'lightMode': {
          'primary': 'hsl(0, 0%, 98%)', //Light Mode Body Background 
          'secondary': 'hsl(0, 0%, 52%)',  //Light Mode Input
          'tertiary': 'hsl(200, 15%, 8%)', // Light Mode Text 
          'quaternary': 'hsl(0, 0%, 100%)' //Light Mode Elements Background
        },
        'darkMode': {
          'primary': 'hsl(207, 26%, 17%)', // Dark Mode Body Background
          'secondary': 'hsl(0, 0%, 100%)', // Dark Mode Text 
          'tertiary': 'hsl(209, 23%, 22%)' //Dark Mode Elements Background
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