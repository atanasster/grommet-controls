import React from 'react';
import { DateInput } from '../DateInput/index';
import { withFormField } from '../withFormField';

export const DateInputField = withFormField(props => (
  <DateInput {...props} />
));
