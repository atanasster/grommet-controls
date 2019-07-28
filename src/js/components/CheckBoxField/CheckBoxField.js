import React from 'react';
import { CheckBox, Box } from 'grommet';
import { withFormField } from '../withFormField';

export const CheckBoxField = withFormField(({ value, onChange, ...rest }) => (
  <Box pad={{ vertical: 'small' }}>
    <CheckBox
      {...rest}
      checked={value === true}
      onChange={() => onChange({ target: { value: !value } })}
    />
  </Box>
));
