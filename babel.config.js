const developmentPlugins = [
  require('@babel/plugin-transform-runtime'),
];

const productionPlugins = [
  // TODO: add optimization plugins
];

module.exports = (api) => {
  development = api.env('development');
  
  return {
    presets: [
      // @babel/preset-env will automatically target our browserslist targets
      [
        require('@babel/preset-env'),
        {
          targets: {
            esmodules: true
          },
          modules: false,
        }
      ],
      require('@babel/preset-typescript'),
      [require('@babel/preset-react'), { development }],
    ],
    plugins: [
      ...(development ? developmentPlugins : productionPlugins),
    ],
  };
};

