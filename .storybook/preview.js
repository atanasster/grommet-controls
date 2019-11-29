import React from 'react';
import { DocsPage } from 'storybook-addon-deps/blocks/DocsPage';
import { addDecorator, addParameters } from '@storybook/react';
import { themes } from '@storybook/theming';
import { withA11y } from '@storybook/addon-a11y';
import { withGrommet } from 'storybook-addon-grommet';
import { grommet, dark } from 'grommet';

window.STORYBOOK_GA_ID = 'UA-118001856-1';

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
    theme: {
      ...themes.light,
      brandImage: GrommetLogo,
      brandTitle: 'grommet-controls',
      url: 'https://github.com/atanasster/grommet-controls.git'
    },
  },
  docs: { page: DocsPage },
  dependencies: { hideEmpty: true }
});
