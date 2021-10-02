const colors = require('./src/styles/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      ...colors,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
