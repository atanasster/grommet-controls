import React from 'react';
import { CheckBox } from 'grommet';
import withField from '../hocs';

export default withField(({ value, onChange, ...rest }) => (
  <CheckBox {...rest} onChange={() => onChange({ target: { value: !value } })} />
));
