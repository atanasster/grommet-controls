import React from 'react';
import { Box } from 'grommet';
import { Spinning } from '../Spinning';

export default {
  title: 'CONTROLS|controls/Spinning',
  component: Spinning,
};


export const main = () => <Spinning />;
export const kind = () => (
  <Box gap='medium'>
    <Spinning kind='circle' />
    <Spinning kind='pulse' />
    <Spinning kind='three-bounce' />
    <Spinning kind='cube-grid' />
    <Spinning kind='wave' />
    <Spinning kind='folding-cube' />
    <Spinning kind='double-bounce' />
    <Spinning kind='wandering-cubes' />
    <Spinning kind='chasing-dots' />
    <Spinning kind='rotating-plane' />
  </Box>
);
export const color = () => (
  <Box gap='medium'>
    <Spinning kind='circle' color='brand' />
    <Spinning kind='pulse' color='accent-1' />
    <Spinning kind='three-bounce' color='accent-2' />
    <Spinning kind='cube-grid' color='accent-3' />
    <Spinning kind='wave' color='neutral-1' />
    <Spinning kind='folding-cube' color='red' />
    <Spinning kind='double-bounce' color='blue' />
    <Spinning kind='wandering-cubes' />
    <Spinning kind='chasing-dots' />
    <Spinning kind='rotating-plane' />
  </Box>
);
export const size = () => (
  <Box gap='medium'>
    <Spinning kind='circle' color='brand' size='xsmall' />
    <Spinning kind='pulse' color='accent-1' size='small' />
    <Spinning kind='circle' color='brand' size='medium' />
    <Spinning kind='three-bounce' color='accent-2' size='large' />
    <Spinning kind='cube-grid' color='accent-3' size='xlarge' />
  </Box>
);
