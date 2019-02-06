import React from 'react';
import { Box } from 'grommet/es6/components/Box';
import { CheckBox } from 'grommet/es6/components/CheckBox';
import { withFormField } from '../withFormField';

export const CheckBoxField = withFormField(({ value, onChange, ...rest }) => (
  <Box pad={{ vertical: 'small' }}>
    <CheckBox {...rest} onChange={() => onChange({ target: { value: !value } })} />
  </Box>
));
