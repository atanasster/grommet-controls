const DependenciesPlugin = require('storybook-dep-webpack-plugin');
const path = require('path');

module.exports = ({ config, mode }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: require.resolve('babel-loader'),
    options: {
      presets: [['react-app', { flow: false, typescript: true }]],
    },
  });
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      require.resolve("./typescript-props-loader.js"),
    ],
  });
  config.resolve.alias["styled-components"] = path.resolve(path.resolve(__dirname, '..'), "node_modules", "styled-components");

  config.resolve.extensions.push('.ts', '.tsx');
  config.plugins.push(new DependenciesPlugin({
    // filter: resource => /\.(stories|story)\.[tj]sx?$/.test(resource) && resource.indexOf('Avatar') > -1.
  }));
  return config;
};
