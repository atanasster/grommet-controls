import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';
import { withGrommet } from 'storybook-addon-grommet';
import { grommet, dark } from 'grommet';
import { black, light, materialdark, materiallight, metro } from '../src/themes';

configure(require.context('../src/', true, /\.stories\.tsx$/), module);
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
