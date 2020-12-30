// =================================
// USE SNOWPACK INSTEAD
// if fallback to this, run
// ```bash
// yarn add -D html-webpack-plugin \
// @pmmmwh/react-refresh-webpack-plugin \
// react-refresh \
// webpack-dev-server
// ```
// =================================

// const path = require('path');
// const { merge } = require('webpack-merge');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const BaseWebpackConfig = require('./webpack.base');
// const { HotModuleReplacementPlugin } = require('webpack');
// const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

// const mode = process.env.NODE_ENV || 'development';
// const port = process.env.PORT || 4343;

// const RendererWebpackConfig = ({ mode, port }) => {
//   const development = mode === 'development';
//   return {
//     mode,
//     // target: 'electron-renderer',
//     entry: path.resolve(__dirname, '../src/renderer/windows'),
//     module: {
//       rules: [
//         {
//           test: /\.css$/i,
//           use: [
//             'style-loader',
//             'css-loader',
//             'postcss-loader',
//             // TODO: add source map
//           ],
//         },
//         {
//           test: /\.[jt]sx?$/,
//           use: [
//             {
//               loader: require.resolve('babel-loader'),
//               options: {
//                 plugins: [
//                   development && require.resolve('react-refresh/babel'),
//                 ].filter(Boolean),
//               },
//             },
//           ],
//         },
//       ],
//     },
//     plugins: [
//       new HtmlWebpackPlugin({
//         template: path.resolve(__dirname, '../public/index.html'),
//       }),
//       ...(development && [
//         development && new HotModuleReplacementPlugin(),
//         development && new ReactRefreshWebpackPlugin(),
//       ]),
//     ],
//     ...(development && {
//       devtool: 'inline-source-map',
//       devServer: {
//         contentBase: path.resolve(__dirname, '../public'),
//         port,
//         publicPath: '/',
//         compress: true,
//         hot: true,
//       }
//     }),
//   };
// };

// module.exports = merge(
//   BaseWebpackConfig({ mode }),
//   RendererWebpackConfig({ mode, port }),
// );
