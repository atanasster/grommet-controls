import React from 'react';
import { PasswordInput } from '../PasswordInput/index';
import { withFormField } from '../withFormField';

export const PasswordInputField = withFormField(props => (
  <PasswordInput {...props} />
));
