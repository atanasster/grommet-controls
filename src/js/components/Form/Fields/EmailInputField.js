import React from 'react';
import { EmailInput } from '../../EmailInput';
import withField from '../hocs';

export const EmailInputField = withField(props => (
  <EmailInput {...props} />
));
