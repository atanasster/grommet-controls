const path = require('path');

module.exports = {
  presets: [
    {
      name: 'storybook-addon-deps/preset',
      options: {
        maxLevels: 6,
      },
    },  
    
  ],
  stories: [
    './*.stories.mdx',
    './*.stories.tsx',
    '../src/components/**/*.stories.tsx',
    '../src/chartjs/**/*.stories.tsx',
  ],
  addons: [
    'storybook-addon-grommet',
    {
      name: '@storybook/preset-typescript',
      options: {
        tsLoaderOptions: {
          configFile: path.resolve(__dirname, '../tsconfig.json'),
        },
      },
    },
    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true,
      },
    },
    '@component-controls/storybook'
  ],
  webpack: async (config, { configType }) => ({
    ...config,
    resolve: {
      ...config.resolve,
      alias: {...config.resolve.alias, ...{
        "styled-components": path.resolve(path.resolve(__dirname, '..'), "node_modules", "styled-components"),
        "@storybook/addon-docs": path.resolve(path.resolve(__dirname, '..'), "node_modules", "@storybook", "addon-docs"),
        "@storybook/theming": path.resolve(path.resolve(__dirname, '..'), "node_modules", "@storybook", "theming"),
      }}
    },
  }),
};
