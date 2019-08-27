import React from 'react';
import { Box } from 'grommet';
import { Spinning } from '../../Spinning';

export default ({ loading }) => (
  <div>
    {loading && (
      <Box align='center' fill='horizontal' pad={{ vertical: 'large' }}>
        <Spinning />
      </Box>
    )}
  </div>
);
