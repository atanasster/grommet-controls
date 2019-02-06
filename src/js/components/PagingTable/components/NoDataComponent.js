import React from 'react';
import { Box } from 'grommet/es6/components/Box';

export default ({ children, ...rest }) => (
  <Box {...rest} align='center' pad='small'>
    {children}
  </Box>
);

