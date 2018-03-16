import React from 'react';
import { TextInput } from 'grommet';
import withField from '../hocs';

export default withField(props => (
  <TextInput {...props} />
));
