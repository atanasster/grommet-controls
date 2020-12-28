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
      tabs: {
        ...defaultBuildConfig.pages.story.tabs,
        test: '@component-controls/pages/TestingPage',
        themes: require.resolve('./ThemesPage.tsx'),
      },
    },
  },
};
