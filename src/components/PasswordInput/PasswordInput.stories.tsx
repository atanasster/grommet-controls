import React from 'react';
import { Box } from 'grommet';
import { Document, Example } from '@component-controls/core';
import { Lock, Unlock } from 'grommet-icons';
import { PasswordInput } from './PasswordInput';

export default {
  title: 'input/PasswordInput',
  component: PasswordInput,
} as Document;

const PasswordTestBed = props => {
  const [password, setPassword] = React.useState('password');
  return (
    <Box direction="row">
      <Box basis="medium">
        <PasswordInput
          value={password}
          onChange={({ target: { value } }) => setPassword(value)}
          {...props}
        />
      </Box>
    </Box>
  );
};

export const main: Example = () => <PasswordTestBed />;

export const viewIcon: Example = () => (
  <PasswordTestBed
    viewIcon={<Unlock />}
    hideIcon={<Lock />}
    a11yTitle="enter password"
  />
);
