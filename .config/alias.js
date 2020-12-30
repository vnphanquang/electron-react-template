const path = require('path');

const alias = (mode = 'development') => ({
  // public assets & html entries
  '@assets':          path.resolve(__dirname, '../public'),
  // source shared between renderer & main processes
  '@shared':          path.resolve(__dirname, '../src/shared'),
  // source for renderer processes
  '@renderer/config': path.resolve(__dirname, `../src/renderer/config/config.${mode}.js`),
  '@renderer':        path.resolve(__dirname, '../src/renderer'),
  // source for main process
  '@main/config':     path.resolve(__dirname, `../src/main/config/config.${mode}.js`),
  '@main':            path.resolve(__dirname, '../src/main'),
});

module.exports = alias;
