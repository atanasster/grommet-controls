import React from 'react';
import { NumberInput } from '../../NumberInput';
import withField from '../hocs';

export const NumberInputField = withField(props => (
  <NumberInput {...props} />
));
