import React from 'react';
import { dependenciesMap } from 'storybook-dep-webpack-plugin/runtime/main';
import { configure, addDecorator, addParameters } from '@storybook/react';
import { themes } from '@storybook/theming';
import { withA11y } from '@storybook/addon-a11y';
import { withGrommet } from 'storybook-addon-grommet';
import { grommet, dark } from 'grommet';
import GrommetLogo from './assets/grommet-logo.svg';
import { black, light, materialdark, materiallight, metro } from '../src/themes';

addDecorator(withA11y);
addDecorator(withGrommet({
    theme: 'grommet',
    themes: {
      grommet,
      dark,
      black,
      light,
      materialdark,
      materiallight,
      metro,
    },
    boxProps: {
      align: 'start',
    },
  }
));

addParameters({
  options: {
    showPanel: false,
    theme: {
      ...themes.light,
      brandImage: GrommetLogo,
      brandTitle: 'grommet-controls',
      url: 'https://github.com/atanasster/grommet-controls.git'
    },
  },
  dependencies: {
    mapper: dependenciesMap,
  }
});

configure([
  require.context('.', true, /\.stories\.mdx$/),
  require.context('../src/components', true, /\.stories\.tsx$/),
  require.context('../src/chartjs', true, /\.stories\.tsx$/)
], module);
