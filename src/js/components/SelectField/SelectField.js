import React from 'react';
import { Select } from 'grommet';
import { withFormField } from '../withFormField';

export const SelectField = withFormField(({ onChange, ...rest }) => (
  <Select
    onChange={onChange}
    {...rest}
  />
));
