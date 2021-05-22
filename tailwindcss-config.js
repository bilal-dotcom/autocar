module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'lambo': "url('/src/assets/img/car/lamb.jpg')",
        'audi': "url('/src/assets/img/car/audi.jpg')",
        'tesla': "url('/src/assets/img/car/tesla.jpg')",
        'lamboicon': "url('/src/assets/img/car/logo/icon-lambo.png')",
       }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
