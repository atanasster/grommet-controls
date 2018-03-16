import React from 'react';
import { PasswordInput } from '../../PasswordInput';
import withField from '../hocs';

export default withField(props => (
  <PasswordInput {...props} />
));
