/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      primary: 'Poppins',
      secondary: 'Volkhov',
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors:{
      'primary-orange':'#FA7436',
      'primary-black': '#22222',
      'secondary-blue': '#4086F4',
      'secondary-yellow': '#FFB60A',
      // icon colours
      'gray-icon': '#999999',
      'white-icon': '#E5E5E5',
      // text-colours
      'black-text': '#22222',
      'gray-text': '#666666',
      // button
      'pink-button': '#FFE7DB'
    },
    extend: {},
  },
  plugins: [],
}

