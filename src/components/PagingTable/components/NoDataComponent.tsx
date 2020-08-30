import React from 'react';
import { Box } from 'grommet';

const NoDataComponent = ({ children, ...rest }) => (
  <Box {...rest} align="center" pad="small">
    {children}
  </Box>
);

export default NoDataComponent;
