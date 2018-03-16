import React from 'react';
import { NumberInput } from '../../NumberInput';
import withField from '../hocs';

export default withField(props => (
  <NumberInput {...props} />
));
