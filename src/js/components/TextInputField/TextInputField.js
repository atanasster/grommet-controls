import React from 'react';
import { TextInput } from 'grommet/es6/components/TextInput';
import { withFormField } from '../withFormField';

export const TextInputField = withFormField(props => (
  <TextInput {...props} />
));
