/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
    "./index.html"
  ],
  theme: {
    extend: {
      colors:{
        blue01: '#012A4A',
        blue02: '#013A63',
        blue03: '#01497C',
        blue04: '#014F86',
        blue05: '#2A6F97',
        blue06: '#2C7DA0',
        blue07: '#468FAF',
        blue08: '#61A5C2',
        blue09: '#89C2D9',
        blue10: '#A9D6E5',
        white: '#FFFFFF',

        orange01: '#FF9F1C',
        orange02: '#FFBF69'

      },
      fontFamily:{
        Poppins: ['Poppins','sans-serif']
      },
      animation:{
        'animation-button': 'scale-up-center 0.4s ease-in-out infinite'
      },
      keyframes:{
        'scale-up-center':{
          '0%': { transform: 'scale(1)'},
          '100%': {transform: 'scale(1.1)'}
        }
      }
    },
    screens: {
      'xs': "480px",
      'ss': "620px",
      'sm': "768px",
      'md': "1060px",
      'lg': "1200px",
      'xl': "1700px",
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}