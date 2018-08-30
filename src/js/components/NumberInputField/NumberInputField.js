import React from 'react';
import { NumberInput } from '../NumberInput/index';
import { withFormField } from '../withFormField';

export const NumberInputField = withFormField(props => (
  <NumberInput {...props} />
));
