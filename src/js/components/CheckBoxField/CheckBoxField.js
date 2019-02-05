import React from 'react';
import { Box } from 'grommet/components/Box';
import { CheckBox } from 'grommet/components/CheckBox';
import { withFormField } from '../withFormField';

export const CheckBoxField = withFormField(({ value, onChange, ...rest }) => (
  <Box pad={{ vertical: 'small' }}>
    <CheckBox {...rest} onChange={() => onChange({ target: { value: !value } })} />
  </Box>
));
