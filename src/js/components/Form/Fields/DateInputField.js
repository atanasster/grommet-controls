import React from 'react';
import { DateInput } from '../../DateInput';
import withField from '../hocs';

export default withField(props => (
  <DateInput {...props} />
));
