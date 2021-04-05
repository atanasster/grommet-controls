import React from 'react';
import { Box, Text } from 'grommet';
import { Document, Example } from '@component-controls/core';
import { Sidebar } from './Sidebar';

export default {
  title: 'layout/Sidebar',
  component: Sidebar,
} as Document;

export const main: Example = () => (
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

export const collapsible: Example = () => (
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

export const title: Example = () => (
  <Sidebar title="title" border={{ size: 'small' }} width="small" basis="small">
    <Text>Side item</Text>
  </Sidebar>
);

export const width: Example = () => (
  <Sidebar
    title="title"
    border={{ size: 'small' }}
    width="medium"
    basis="small"
  >
    <Text>Side item</Text>
  </Sidebar>
);
