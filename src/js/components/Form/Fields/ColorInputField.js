import React from 'react';
import { ColorInput } from '../../ColorInput';
import withField from '../hocs';

export const ColorInputField = withField(props => (
  <ColorInput {...props} />
));
