import React from 'react';
import { Box } from 'grommet';
import { Favorite } from 'grommet-icons';
import { action } from '@storybook/addon-actions';
import { IconButton } from '../IconButton';

export default {
  title: 'CONTROLS|controls/IconButton',
  component: IconButton,
};

export const main = () => (
  <Box basis='medium' align='center'>
    <IconButton
      icon={<Favorite />}
      onClick={action('Clicked')}
    />
  </Box>
);
