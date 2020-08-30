import React from 'react';
import { Box, Text } from 'grommet';
import { Sidebar } from './Sidebar';

export default {
  title: 'layout/Sidebar',
  component: Sidebar,
};

export const main = () => (
  <Box align="center">
    <Sidebar
      title="My title"
      border={{ size: 'small' }}
      width="small"
      basis="small"
    >
      <Text>Side item</Text>
    </Sidebar>
  </Box>
);

export const collapsible = () => (
  <Sidebar
    title="title"
    border={{ size: 'small' }}
    width="small"
    basis="small"
    collapsible={false}
  >
    <Text>Side item</Text>
  </Sidebar>
);

export const title = () => (
  <Sidebar title="title" border={{ size: 'small' }} width="small" basis="small">
    <Text>Side item</Text>
  </Sidebar>
);

export const width = () => (
  <Sidebar
    title="title"
    border={{ size: 'small' }}
    width="medium"
    basis="small"
  >
    <Text>Side item</Text>
  </Sidebar>
);
