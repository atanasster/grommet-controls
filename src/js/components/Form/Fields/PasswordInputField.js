import React from 'react';
import { PasswordInput } from '../../PasswordInput';
import withField from '../hocs';

export const PasswordInputField = withField(props => (
  <PasswordInput {...props} />
));
