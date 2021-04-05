import React from 'react';
import { Box } from 'grommet';
import { Document, Example } from '@component-controls/core';
import { EmailInput } from './EmailInput';

export default {
  title: 'input/EmailInput',
  component: EmailInput,
} as Document;

export const main: Example = () => {
  const [email, setEmail] = React.useState('john.smith@gmail.co.uk');
  return (
    <Box direction="row">
      <Box basis="medium">
        <EmailInput
          value={email}
          onChange={({ target: { value } }) => setEmail(value)}
        />
      </Box>
    </Box>
  );
};
