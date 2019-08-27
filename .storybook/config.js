import React from 'react';
import { Grommet, Box } from 'grommet';
import { configure, addDecorator } from '@storybook/react';
import withGrommetTheme from './addons/theme/withGrommet';

const withGrommet = (story) => (
  <Grommet>
    <Box flex={false}>
      { story() }
    </Box>
  </Grommet>
)


configure(require.context('../src/', true, /\.stories\.tsx$/), module);
addDecorator(withGrommetTheme);
