import React, { useContext } from 'react';
import { RunConfiguration } from '@component-controls/core';
import { Grommet } from 'grommet';
import { ThemeContext } from 'styled-components';

const categories = [
  'controls',
  'layout',
  'navigation',
  'input',
  'validation',
  'chartjs',
];

const config: RunConfiguration = {
  title: 'grommet-controls',
  siteUrl: 'https://grommet-controls.netlify.app',
  description: 'A pack of extensions for grommet 2',
  author: 'grommet-controls',
  storySort: (a, b) => {
    const aSplit = a.split('/')[0];
    const bSplit = b.split('/')[0];
    const aIndex = categories.findIndex(c => c === aSplit);
    const bIndex = categories.findIndex(c => c === bSplit);
    return aIndex - bIndex;
  },
  components: {
    playground: {
      openTab: 'source',
    },
  },
  decorators: [
    (controls, context) => {
      const { renderFn } = context;
      const theme = useContext(ThemeContext);
      return <Grommet theme={theme}>{renderFn(controls, context)}</Grommet>;
    },
  ],
};

export default config;
