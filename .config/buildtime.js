module.exports = {
  stories: [
    './*.mdx',
    '../src/components/**/*.stories.tsx',
    '../src/chartjs/**/*.stories.tsx',
  ],
  siteUrl: `https:/grommet-controls.netlify.app`,
  pages: {
    story: {
      tabs: [{ route: 'page' }, { route: 'test' }, { route: 'themes' }],
    },
  },
};
