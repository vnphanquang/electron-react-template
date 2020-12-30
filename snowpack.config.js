/** @type {import("snowpack").SnowpackUserConfig } */
const alias = require('./.config/alias');

const port = process.env.PORT || 4343;
const mode = process.env.NODE_ENV || 'development';

module.exports = {
  mount: {
    'public': '/',
    'src/renderer': '/renderer',
    'src/shared': '/shared',
  },
  plugins: [
    '@snowpack/plugin-postcss',
    // '@snowpack/plugin-typescript',
    '@snowpack/plugin-babel',
    '@snowpack/plugin-react-refresh',
    '@snowpack/plugin-webpack',
  ],
  install: [
    /* ... */
  ],
  installOptions: {
    env: {
      NODE_ENV: mode,
    }
  },
  devOptions: {
    port,
    open: 'none',
  },
  buildOptions: {
    out: 'build',
    baseUrl: './',
    clean: false,
  },
  proxy: {
    /* ... */
  },
  alias: alias(mode),
};
