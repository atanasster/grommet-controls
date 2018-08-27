import React from 'react';
import { TextArea } from 'grommet';
import withField from '../hocs';

export const TextAreaField = withField(props => (
  <TextArea {...props} />
));
