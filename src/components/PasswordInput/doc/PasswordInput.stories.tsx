import React from 'react';
import { Box } from 'grommet';
import { Lock, Unlock } from 'grommet-icons';
import { PasswordInput } from '../PasswordInput';

export default {
  title: 'CONTROLS|input/PasswordInput',
  component: PasswordInput,
};

const PasswordTestBed = (props) => {
  const [password, setPassword] = React.useState('password');
  return (
    <Box direction='row'>
      <Box basis='medium'>
        <PasswordInput
          value={password}
          onChange={({ target: { value } }) => setPassword(value,)}
          {...props}
        />
      </Box>
    </Box>

  );
};

export const main = () => <PasswordTestBed />;

export const viewIcon = () => (
  <PasswordTestBed
    viewIcon={<Unlock />}
    hideIcon={<Lock />}
    a11yTitle='enter password'
  />
);
