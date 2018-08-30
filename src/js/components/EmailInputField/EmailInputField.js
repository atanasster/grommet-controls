import React from 'react';
import { EmailInput } from '../EmailInput/index';
import { withFormField } from '../withFormField';

export const EmailInputField = withFormField(props => (
  <EmailInput {...props} />
));
