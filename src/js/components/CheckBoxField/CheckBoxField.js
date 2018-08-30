import React from 'react';
import { Box, CheckBox } from 'grommet';
import { withFormField } from '../withFormField';

export const CheckBoxField = withFormField(({ value, onChange, ...rest }) => (
  <Box pad={{ vertical: 'small' }}>
    <CheckBox {...rest} onChange={() => onChange({ target: { value: !value } })} />
  </Box>
));
