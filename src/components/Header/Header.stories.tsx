import React from 'react';
import { Box, Heading, Image } from 'grommet';
import { Document, Example } from '@component-controls/core';
import { Grommet } from 'grommet-icons';
import { Header } from './Header';

export default {
  title: 'layout/Header',
  component: Header,
} as Document;

export const main: Example = () => (
  <Box fill="horizontal" gap="large">
    <Header position="sticky">
      <Grommet />
      <Heading level={2} margin="none">
        app title
      </Heading>
    </Header>
    <Image fit="contain" src="https://picsum.photos/350/120/?image=662" />
  </Box>
);

export const elevation: Example = () => (
  <Box fill="horizontal" gap="large">
    <Header position="sticky" elevation="xlarge">
      <Grommet />
      <Heading level={2} margin="none">
        app title
      </Heading>
    </Header>
    <Image fit="contain" src="https://picsum.photos/350/120/?image=662" />
  </Box>
);

export const position: Example = () => (
  <Box fill="horizontal" gap="large">
    <Header position="absolute">
      <Grommet />
      <Heading level={2} margin="none">
        app title
      </Heading>
    </Header>
    <Image fit="contain" src="https://picsum.photos/350/120/?image=662" />
  </Box>
);
