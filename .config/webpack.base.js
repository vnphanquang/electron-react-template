const path = require('path');
const { EnvironmentPlugin } = require('webpack');
const alias = require('./alias');

const BaseWebpackConfig = ({ mode = 'development' } = {}) => ({
  resolve: {
    alias: alias(mode),
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: {
          loader: require.resolve('babel-loader'),
          options: {
            cacheDirectory: true,
          },
        },
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, '../build'),
  },
  plugins: [
    /**
     * Create global constants which can be configured at compile time.
     *
     * Useful for allowing different behaviour between development builds and
     * release builds
     *
     * NODE_ENV should be production so that modules do not perform certain
     * development checks
     *
     * By default, use 'development' as NODE_ENV. This can be overriden with
     * 'staging', for example, by changing the ENV variables in the npm scripts
     */
    new EnvironmentPlugin({
      NODE_ENV: mode,
      //...,
    }),
  ],
});

module.exports = BaseWebpackConfig;
