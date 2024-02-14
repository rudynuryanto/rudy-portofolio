/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  darkMode:'class',
  theme: {
    container:{
      center:true,
      pedding:'16px',
    },
    extend: {
      colors:{
        primary:'#14b8a6',
        dark:'#0f172a',
      },
      screens:{
        '2xl':'1320px',
      },
    },
  },
  plugins: [],
}

