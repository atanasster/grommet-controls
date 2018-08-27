import React from 'react';
import { MaskedInput } from '../../MaskedInput';
import withField from '../hocs';

export const MaskedInputField = withField(props => (
  <MaskedInput {...props} />
));
