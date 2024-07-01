/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'very-light-grayish-blue': 'hsl(210, 60%, 98%)',
        'light-grayish-blue-1': 'hsl(211, 68%, 94%)',
        'light-grayish-blue-2': 'hsl(205, 33%, 90%)',
        'blue': 'hsl(215, 86%, 26%)',
        'grayish-blue': 'hsl(219, 14%, 63%)',
        'dark-grayish-blue': 'hsl(219, 12%, 42%)',
        'very-dark-blue': 'hsl(224, 21%, 14%)',
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
}