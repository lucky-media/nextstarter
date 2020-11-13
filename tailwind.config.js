const config = require("tailwindcss/defaultTheme");

// eslint-disable-next-line no-undef
module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ["./components/**/*.js", "./pages/**/*.js"],
  corePlugins: {
    container: false,
  },
  theme: {
    extend: {
      fontFamily: {
        sans: "Poppins, -apple-system, BlinkMacSystemFont",
      },
      colors: {
        // gray: {
        //   ...config.colors.gray,
        //   200: '#F4F4F4'
        // }
      },
    },
  },
  variants: {},
  plugins: [
    // eslint-disable-next-line no-undef
    require("tailwind-bootstrap-grid")({
      gridGutterWidth: "32px",
    }),
    require("tailwindcss-debug-screens"),
  ],
};
