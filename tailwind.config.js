module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
  },
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      'header': ['Montserrat'],
      'nav': ['Open Sans'],
      'footer': ['Open Sans']
    },
    fontWeight: {
      'hairline': "100",
      'thin': "200",
      'light': "300",
      'normal': "400",
      'medium': "500",
      'semibold': "600",
      'bold': "700",
      'extrabold': "800",
      'black': "900",
      'nigga': '2000'
    },
    extend: {
      colors: {
        'accent-1': '#333',
        'background-color': '#1E1F28',
        'pink-color': '#FF809F',
        'white-color': '#EEEEEE',
      },
    },
  },
  variants: {},
  plugins: [],
}
