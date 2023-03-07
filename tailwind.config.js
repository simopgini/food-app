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
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
      // 'ui-sans-serif',
      //   'system-ui',
      //   '-apple-system',
      //   'BlinkMacSystemFont',
      //   '"Segoe UI"',
      //   'Roboto',
      //   '"Helvetica Neue"',
      //   'Arial',
      //   '"Noto Sans"',
      //   'sans-serif',
      //   '"Apple Color Emoji"',
      //   '"Segoe UI Emoji"',
      //   '"Segoe UI Symbol"',
      //   '"Noto Color Emoji"',
      serif: ['ui-serif', 'serif'],
      // ['Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
    },
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
        'gray-dark': '#273444',
      },
      variants: {
        color: ["responsive", "hover", "focus", "active"]
      }
      // ,
      // screens: {
      //   'xs': '280px'
      // }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    // ...
  ],
}
