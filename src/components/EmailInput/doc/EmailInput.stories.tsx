import React from 'react';
import { Box } from 'grommet';
import { EmailInput } from '../../../index';

export default {
  title: 'CONTROLS|input/EmailInput',
  component: EmailInput,
};

export const main = () => {
  const [email, setEmail] = React.useState('john.smith@gmail.co.uk');
  return (
    <Box direction='row'>
      <Box basis='medium'>
        <EmailInput
          value={email}
          onChange={({ target: { value } }) => setEmail(value)}
        />
      </Box>
    </Box>
  );
};
