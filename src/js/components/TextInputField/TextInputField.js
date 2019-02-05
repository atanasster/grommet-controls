import React from 'react';
import { TextInput } from 'grommet/components/TextInput';
import { withFormField } from '../withFormField';

export const TextInputField = withFormField(props => (
  <TextInput {...props} />
));
