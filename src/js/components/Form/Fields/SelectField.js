import React from 'react';
import { Select } from 'grommet';
import withField from '../hocs';

export const SelectField = withField(({ onChange, ...rest }) => (
  <Select {...rest} onChange={({ value }) => onChange({ target: { value } })} />
));
