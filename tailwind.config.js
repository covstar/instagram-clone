/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html,js}',
            ],
  theme: {
    extend: {

       // font family
    fontFamily:{
      'Dancing': ['Dancing Script'],
      'Roboto': ['Roboto'],
      'Nunito': ['Nunito'],
      'Caveat': ['Caveat']
    },

     // media quries
       screens: {
      'xs': {'max': '440px'},
      'sm': {'max': '720px'},
      // => @media (max-width: 639px) { ... }
      'tb': {'min': '721px', 'max': '1290px'},
      // => @media (min-width: 768px and max-width: 1023px)
      'md': '722px',
      // => @media (min-width: 768px) { ... }
    },
    
    // padding 
    padding: {
        '3%': '3%',
        '5%': '5%',
        '10%': '10%',
        '15%': '15%',
        '17%': '17%',
        '20%': '20%',
        '22%': '22%',
        '27%': '27%',
        '25%': '25%',
        '24%': '24%',
        '30%': '30%',
        '40%': '40%',
        '50%': '50%',
        '60%': '60%',
      },
       margin: {
        '3%': '3%',
        '5%': '5%',
        '10%': '10%',
        '15%': '15%',
        '17%': '17%',
        '20%': '20%',
        '22%': '22%',
        '27%': '27%',
        '25%': '25%',
        '24%': '24%',
        '30%': '30%',
        '40%': '40%',
        '50%': '50%',
        '60%': '60%',
      },

      // height
      height: {
        '100': '34rem',
      }
    
    },
  },
  plugins: [],
}
