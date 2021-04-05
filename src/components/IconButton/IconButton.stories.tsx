import React, { MouseEventHandler } from 'react';
import * as Icons from 'grommet-icons';
import { ControlTypes, Document, Example } from '@component-controls/core';
import { IconButton } from './IconButton';

export default {
  title: 'controls/IconButton',
  component: IconButton,
} as Document;

export const main: Example<{
  icon: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}> = ({ icon, onClick }) => {
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
