import React from 'react';
import { ColorInput } from '../ColorInput/index';
import { withFormField } from '../withFormField';

export const ColorInputField = withFormField(props => (
  <ColorInput {...props} />
));
