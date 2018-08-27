import React from 'react';
import { DateInput } from '../../DateInput';
import withField from '../hocs';

export const DateInputField = withField(props => (
  <DateInput {...props} />
));
