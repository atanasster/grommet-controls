import React from 'react';
import { Box, CheckBox, CheckBoxProps } from 'grommet';
import {
 WithFormField, IWithFormFieldProps, IFieldProps,
} from '../WithFormField';

export const CheckBoxField = (props: IWithFormFieldProps & IFieldProps & CheckBoxProps) => (
  <WithFormField {...props}>
    {({ value, onChange, ...rest }) => (
      <Box pad={{ vertical: 'small' }}>
        <CheckBox
          checked={value === true}
          onChange={() => onChange({ target: { value: !value } })}
          {...rest}
        />
      </Box>
      )}
  </WithFormField>
);
