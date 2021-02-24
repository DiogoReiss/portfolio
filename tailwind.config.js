module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
  },
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
      'tiny': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
      '404': '8rem'
    },
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
    },
    extend: {
      backgroundImage: theme => ({
        '404-background': "url('/images/4040.png')"
      }),
      colors: {
        'accent-1': '#333',
        'background-color': '#1E1F28',
        'pink-color': '#FF2E93',
        'white-color': '#EEEEEE',
        'gray-color': '#D8D8D8',
      },
    },
  },
  variants: {},
  plugins: [],
}
