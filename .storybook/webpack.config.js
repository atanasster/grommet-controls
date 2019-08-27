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
  config.resolve.extensions.push('.ts', '.tsx');
  return config;
};
