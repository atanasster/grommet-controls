import React from 'react';
import { Box, Heading, Image } from 'grommet';
import { Grommet } from 'grommet-icons';
import { Header } from '../Header';

export default {
  title: 'CONTROLS/layout/Header',
  component: Header,
};

export const main = () => (
  <Box fill='horizontal' gap='large'>
    <Header
      position='sticky'
    >
      <Grommet />
      <Heading level={2} margin='none'>
        app title
      </Heading>

    </Header>
    <Image
      fit='contain'
      src='https://picsum.photos/350/120/?image=662'
    />
  </Box>
  );

export const elevation = () => (
  <Box fill='horizontal' gap='large'>
    <Header
      position='sticky'
      elevation='xlarge'
    >
      <Grommet />
      <Heading level={2} margin='none'>
        app title
      </Heading>

    </Header>
    <Image
      fit='contain'
      src='https://picsum.photos/350/120/?image=662'
    />
  </Box>
  );

export const position = () => (
  <Box fill='horizontal' gap='large'>
    <Header
      position='absolute'
    >
      <Grommet />
      <Heading level={2} margin='none'>
        app title
      </Heading>

    </Header>
    <Image
      fit='contain'
      src='https://picsum.photos/350/120/?image=662'
    />
  </Box>
  );
