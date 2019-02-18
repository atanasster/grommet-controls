import React from 'react';
import { TextArea } from 'grommet';
import { withFormField } from '../withFormField';

export const TextAreaField = withFormField(props => (
  <TextArea {...props} />
));
