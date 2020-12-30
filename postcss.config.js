const tailwind = require('tailwindcss');
const tailwindConfig = require('./tailwind.config');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const postcssImport = require('postcss-import');

const presetEnv = require('postcss-preset-env')({
  features: {
    // enable nesting
    'nesting-rules': true,
    'custom-properties': true,
  },
});

const commonPlugins = [postcssImport, tailwind(tailwindConfig), autoprefixer, presetEnv]

const plugins = {
  development: commonPlugins,
  production: [...commonPlugins, cssnano],
}

console.log(plugins[process.env.NODE_ENV || 'development']);

module.exports = {
  plugins: plugins[process.env.NODE_ENV || 'development'],
};
