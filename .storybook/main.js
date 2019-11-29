const DependenciesPlugin = require('storybook-dep-webpack-plugin');
const path = require('path');

module.exports = {
  presets: ['@storybook/addon-docs/preset'],
  stories: [
    './*.stories.mdx',
    './*.stories.tsx',
    '../src/components/**/*.stories.tsx',
    '../src/chartjs/**/*.stories.tsx',
  ],
  addons: [
    '@storybook/addon-actions/register',
    '@storybook/addon-a11y/register',
    '@storybook/addon-google-analytics/register',
    '@storybook/addon-knobs/register',
    '@storybook/addon-storysource/register',
    'storybook-addon-grommet/register',
  ],
  webpack: async (config, { configType }) => ({
    ...config,
    module: {
      ...config.module,
      rules: [
        ...config.module.rules.slice(1),
        ...[
          {
            test: /\.(ts|tsx)$/,
            loader: require.resolve('babel-loader'),
            options: {
              presets: [['react-app', { flow: false, typescript: true }]],
            }
          },
          {
            test: /\.(ts|tsx)$/,
            use: [
              require.resolve("./typescript-props-loader.js"),
            ],
          }
        ],
      ],
    },
    resolve: {
      ...config.resolve,
      extensions: [...(config.resolve.extensions || []), '.ts', '.tsx'],
      alias: {...config.resolve.alias, ...{
        "styled-components": path.resolve(path.resolve(__dirname, '..'), "node_modules", "styled-components"),
        "@storybook/addon-docs": path.resolve(path.resolve(__dirname, '..'), "node_modules", "@storybook", "addon-docs"),
        "@storybook/theming": path.resolve(path.resolve(__dirname, '..'), "node_modules", "@storybook", "theming"),
      }}
    },

    plugins: [
      ...config.plugins,
      new DependenciesPlugin({
        //reduce levels for speed
        maxLevels: 6,
      })
    ]
  }),
};
