import React from 'react';
import { EmailInput } from '../../EmailInput';
import withField from '../hocs';

export default withField(props => (
  <EmailInput {...props} />
));
