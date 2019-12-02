const path = require('path');

module.exports = {
  presets: ['@storybook/addon-docs/preset', 
  {
    name: require.resolve('webpack-react-docgen-typescript/preset'),
    options: {
      fileNameResolver: ({ resourcePath, cacheFolder }) => path.join(cacheFolder, resourcePath.replace(/[^a-z0-9]/gi, '_')),
    },
  },  
  {
    name: 'storybook-addon-deps/preset',
    options: {
      maxLevels: 6,
    }  
  }],
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
    resolve: {
      ...config.resolve,
      extensions: [...(config.resolve.extensions || []), '.ts', '.tsx'],
      alias: {...config.resolve.alias, ...{
        "styled-components": path.resolve(path.resolve(__dirname, '..'), "node_modules", "styled-components"),
        "@storybook/addon-docs": path.resolve(path.resolve(__dirname, '..'), "node_modules", "@storybook", "addon-docs"),
        "@storybook/theming": path.resolve(path.resolve(__dirname, '..'), "node_modules", "@storybook", "theming"),
      }}
    },
  }),
};
