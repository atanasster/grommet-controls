import React from 'react';
import { addDecorator, addParameters } from '@storybook/react';
import { themes } from '@storybook/theming';
import { StorySource } from '@component-controls/storybook';

import { withGrommet } from 'storybook-addon-grommet';
import { grommet, dark } from 'grommet';


window.STORYBOOK_GA_ID = 'UA-118001856-1';

import GrommetLogo from './assets/grommet-logo.svg';
import { black, light, materialdark, materiallight, metro } from '../src/themes';

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
    showRoots: true,
    theme: {
      ...themes.light,
      brandImage: GrommetLogo,
      brandTitle: 'grommet-controls',
      url: 'https://github.com/atanasster/grommet-controls.git'
    },
  },
});

