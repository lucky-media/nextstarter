// eslint-disable-next-line no-undef
const config = require('tailwindcss/defaultTheme')

// eslint-disable-next-line no-undef
module.exports = {
  purge: {
    content: ['./components/**/*.js', './pages/**/*.js']
  },
  mode: 'jit',
  theme: {
    extend: {
      fontFamily: {
        sans: 'Poppins, -apple-system, BlinkMacSystemFont',
      },
      colors: {
        gray: {
          ...config.colors.gray,
          200: '#F4F4F4',
        },
      },
    },
  },
  corePlugins: {
    container: false,
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require('tailwind-bootstrap-grid')({
      gridGutterWidth: '32px',
      containerMaxWidths: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1280px',
      },
    }),
    // eslint-disable-next-line no-undef
    require('tailwindcss-debug-screens'),
  ],
}
