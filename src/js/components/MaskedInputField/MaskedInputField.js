import React from 'react';
import { MaskedInput } from '../MaskedInput/index';
import { withFormField } from '../withFormField';

export const MaskedInputField = withFormField(props => (
  <MaskedInput {...props} />
));
