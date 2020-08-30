module.exports = {
  stories: [
    './*.mdx',
    '../src/components/**/*.stories.tsx',
    '../src/chartjs/**/*.stories.tsx',
  ],
  pages: {
    story: {
      tabs: [{ route: 'page' }, { route: 'test' }, { route: 'themes' }],
    },
  },
};
