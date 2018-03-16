import React from 'react';
import { MultiSelect } from '../../MultiSelect';
import withField from '../hocs';

export default withField(({ onChange, ...rest }) => (
  <MultiSelect {...rest} onChange={({ option }) => onChange({ target: { value: option } })} />
));
