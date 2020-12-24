const { defaultBuildConfig } = require('@component-controls/core');

module.exports = {
  stories: [
    './*.mdx',
    '../src/components/**/*.stories.tsx',
    '../src/chartjs/**/*.stories.tsx',
  ],
  siteUrl: `https:/grommet-controls.netlify.app`,
  pages: {
    story: {
      tabs: [
        ...defaultBuildConfig.pages.story.tabs,
        {
          route: 'test',
          title: 'Testing',
          template: '@component-controls/pages/TestingPage',
        },
        {
          route: 'themes',
          title: 'Themes',
          template: require.resolve('./ThemesPage.tsx'),
        },
      ],
    },
  },
};
