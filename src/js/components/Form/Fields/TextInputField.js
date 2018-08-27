import React from 'react';
import { TextInput } from 'grommet';
import withField from '../hocs';

export const TextInputField = withField(props => (
  <TextInput {...props} />
));
