import React from 'react';
import { TextArea } from 'grommet';
import withField from '../hocs';

export default withField(props => (
  <TextArea {...props} />
));
