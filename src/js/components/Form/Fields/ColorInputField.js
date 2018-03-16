import React from 'react';
import { ColorInput } from '../../ColorInput';
import withField from '../hocs';

export default withField(props => (
  <ColorInput {...props} />
));
