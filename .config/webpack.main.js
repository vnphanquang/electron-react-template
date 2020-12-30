const path = require('path');
const { merge } = require('webpack-merge');
const BaseWebpackConfig = require('./webpack.base');

const mode = process.env.NODE_ENV || 'development';

const MainWebpackConfig = ({ mode = development } = {}) => ({
  mode,
  target: 'electron-main',
  entry: path.resolve(__dirname, '../src/main/index.ts'),
  output: {
    filename: 'main.js',
  },
  ...(mode === 'development' && {
    devtool: 'source-map',
  }),
});

module.exports = merge(
  BaseWebpackConfig({ mode}),
  MainWebpackConfig({ mode }),
);
