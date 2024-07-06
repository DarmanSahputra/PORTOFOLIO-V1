/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*{html, php}"],
  theme: {
    screens: {
      'hp': {'max': '400px'},
      'la': '400px'
    },
    fontFamily: {
      roboto: ['Gabarito', 'sans-serif']
    },
    extend: {
      spacing: {
        '100vh': '100vh',
        '300px': '300px',
        '290px': '290px',
        '500px': '500px',
        '50%': '50%',
        '40px': '40px'
      }
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
            
          },
        },
      ],
    },
  plugins: [
    require('daisyui')
  ],
}

