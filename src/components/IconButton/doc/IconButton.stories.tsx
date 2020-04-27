import React from 'react';
import * as Icons from 'grommet-icons';
import { action } from '@storybook/addon-actions';
import { IconButton } from '../IconButton';

export default {
  title: 'CONTROLS/controls/IconButton',
  component: IconButton,
};

export const main = ({ icon, onClick }) => {
  const Icon = Icons[icon];
  console.log(icon, Icon);
  return (
    <IconButton
      icon={<Icon />}
      onClick={onClick}
    />
  );
};

main.story = {
  parameters: {
    controls: {
      icon: { type: 'options', options: Object.keys(Icons).slice(5, 100), value: Object.keys(Icons).slice(5)[1] },
      onClick: { type: 'button', value: action('Clicked') },
    },
  },
};
