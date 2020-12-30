// const { colors } = require('tailwindcss/defaultTheme');

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  experimental: {
    uniformColorPalette: true,
    extendedFontSizeScale: true,
    // applyComplexClasses: true,
  },
  purge: {
    // needs to be set if we want to purge all unused
    mode: 'all',
    content: ['./src/**/*.tsx', './src/**/*.html'],
  },
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        // color: 'var(--color)',
      },
    },
  },
  variants: {},
  corePlugins: {
    // preflight: true,
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
