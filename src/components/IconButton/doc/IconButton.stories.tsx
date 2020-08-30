import React from 'react';
import * as Icons from 'grommet-icons';
import { ControlTypes } from '@component-controls/core';
import { IconButton } from '../IconButton';

export default {
  title: 'controls/IconButton',
  component: IconButton,
};

export const main = ({ icon, onClick }) => {
  const Icon = Icons[icon];
  return <IconButton icon={<Icon />} onClick={onClick} />;
};

main.controls = {
  icon: {
    type: ControlTypes.OPTIONS,
    options: Object.keys(Icons).slice(5, 100),
    value: Object.keys(Icons).slice(5)[1],
  },
  onClick: { type: ControlTypes.BUTTON, value: () => console.log('Clicked') },
};
