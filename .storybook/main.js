const path = require('path');

module.exports = {
  stories: [
    '../src/components/**/*.stories.tsx',
    '../src/chartjs/**/*.stories.tsx',
  ],
  addons: ['storybook-addon-grommet',{
    name: '@component-controls/storybook',
    options: {
      webpack: ['instrument',
      'react-docgen-typescript'
      ],
    }
  }],
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
