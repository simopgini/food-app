/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    // "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-green': '#082224',
        'green': '#60B99E',
        'gray': '#8B8E8D',
        'gray-mid': '#E9ECEC',
        'gray-light': '#F1F5F5',
        'gray-lighter': '#E9ECEC',
        'gray-line': '#DEDCDC',
        'orange': '#EBA352',
        'yellow': '#ffc82c',
        'gray-dark': '#273444',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    // ...
  ],
}
