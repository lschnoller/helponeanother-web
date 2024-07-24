/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'sky-blue-light': '#76ADC3',
        'sky-blue-dark': '#041825',
      },
      width: {
        '150': '150px',
        '300': '300px',
      },
      height: {
        '35': '35px',
        '70': '70px',
      },
      scrollBehavior: ['smooth']
    }
  },
  plugins: [
  ]
}

