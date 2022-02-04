// tailwind.config.js
// in this file we can add the customized colors tailwind provides.

const colors = require('tailwindcss/colors')
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      purplePrimary: '#885FFF',
      disabled: '#BEBEC2',
      btnBlack: '#414047',
      navbar: '#F5F5F5',
      white: '#fff',
      gray: '#BEBEC2',
      "gray-light": '#E5E5E5',
      "gray-md": '#9C9B9F',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'), // import tailwind forms
  ],
}