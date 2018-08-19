import React from 'react';
import { MaskedInput } from '../../MaskedInput';
import withField from '../hocs';

export default withField(props => (
  <MaskedInput {...props} />
));
