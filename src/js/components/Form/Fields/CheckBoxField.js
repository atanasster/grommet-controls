import React from 'react';
import { Box, CheckBox } from 'grommet';
import withField from '../hocs';

export default withField(({ value, onChange, ...rest }) => (
  <Box pad={{ vertical: 'small' }}>
    <CheckBox {...rest} onChange={() => onChange({ target: { value: !value } })} />
  </Box>
));
