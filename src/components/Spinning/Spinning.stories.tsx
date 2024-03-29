import React from 'react';
import { Box } from 'grommet';
import { ControlTypes, Document, Example } from '@component-controls/core';
import { Spinning } from './Spinning';
import { ISpinningProps } from './SpinningProps';

export default {
  title: 'controls/Spinning',
  component: Spinning,
} as Document;

export const main: Example<ISpinningProps> = props => <Spinning {...props} />;

main.controls = {
  kind: {
    type: ControlTypes.OPTIONS,
    options: [
      'circle',
      'pulse',
      'three-bounce',
      'cube-grid',
      'wave',
      'folding-cube',
      'double-bounce',
      'wandering-cubes',
      'chasing-dots',
      'rotating-plane',
    ],
  },
  color: { type: ControlTypes.COLOR },
  size: {
    type: ControlTypes.OPTIONS,
    options: ['xsmall', 'small', 'medium', 'large', 'xlarge'],
  },
  fadeIn: {
    type: ControlTypes.OPTIONS,
    options: ['full', 'half', 'quarter', 'none', 'wordpress'],
  },
};

export const kind: Example = () => (
  <Box gap="medium">
    <Spinning kind="circle" />
    <Spinning kind="pulse" />
    <Spinning kind="three-bounce" />
    <Spinning kind="cube-grid" />
    <Spinning kind="wave" />
    <Spinning kind="folding-cube" />
    <Spinning kind="double-bounce" />
    <Spinning kind="wandering-cubes" />
    <Spinning kind="chasing-dots" />
    <Spinning kind="rotating-plane" />
  </Box>
);
export const color: Example = () => (
  <Box gap="medium">
    <Spinning kind="circle" color="brand" />
    <Spinning kind="pulse" color="accent-1" />
    <Spinning kind="three-bounce" color="accent-2" />
    <Spinning kind="cube-grid" color="accent-3" />
    <Spinning kind="wave" color="neutral-1" />
    <Spinning kind="folding-cube" color="red" />
    <Spinning kind="double-bounce" color="blue" />
    <Spinning kind="wandering-cubes" />
    <Spinning kind="chasing-dots" />
    <Spinning kind="rotating-plane" />
  </Box>
);
export const size: Example = () => (
  <Box gap="medium">
    <Spinning kind="circle" color="brand" size="xsmall" />
    <Spinning kind="pulse" color="accent-1" size="small" />
    <Spinning kind="circle" color="brand" size="medium" />
    <Spinning kind="three-bounce" color="accent-2" size="large" />
    <Spinning kind="cube-grid" color="accent-3" size="xlarge" />
  </Box>
);
