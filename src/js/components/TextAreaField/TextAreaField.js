import React from 'react';
import { TextArea } from 'grommet/es6/components/TextArea';
import { withFormField } from '../withFormField';

export const TextAreaField = withFormField(props => (
  <TextArea {...props} />
));
