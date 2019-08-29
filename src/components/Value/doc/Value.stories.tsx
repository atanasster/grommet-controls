import React from 'react';
import { Box, Text } from 'grommet';
import { Down } from 'grommet-icons';
import { Value } from '../index';

export default {
  title: 'CONTROLS|controls/Value',
  component: Value,
};

export const main = () => (
  <Box direction='row'>
    <Box basis='small'>
      <Value value='30%' label='last quarter sales' />
    </Box>
  </Box>
);
export const label = () => (
  <Value
    value='30%'
    label='a descriptive label'
  />
);
export const value = () => (
  <Value
    value={(
      <Box direction='row' align='center' gap='xsmall'>
        <Text size='large' weight='bold' color='status-error'>30%</Text>
        <Down color='status-error' />
      </Box>
       )}
    label='custom value'
  />
);
export const color = () => (
  <Value
    label='status-ok'
    value='30%'
    color='status-ok'
  />
);
export const weight = () => (
  <Box direction='row'>
    <Box basis='small' gap='small'>
      <Value
        weight='normal'
        value='30%'
        label='normal'
      />
      <Value
        weight='bold'
        value='30%'
        label='bold'
      />
      <Value
        weight={400}
        value='30%'
        label='400'
      />
    </Box>
  </Box>
);
export const size = () => (
  <Box direction='row'>
    <Box basis='small' gap='small'>
      <Value
        size='xsmall'
        value='30%'
        label='xsmall'
      />
      <Value
        size='small'
        value='30%'
        label='small'
      />
      <Value
        size='medium'
        value='30%'
        label='medium'
      />
      <Value
        size='large'
        value='30%'
        label='large'
      />
      <Value
        size='xlarge'
        value='30%'
        label='xlarge'
      />
      <Value
        size='xxlarge'
        value='30%'
        label='xxlarge'
      />
    </Box>
  </Box>
);
