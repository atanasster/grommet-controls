import React from 'react';
import { Select, SelectProps } from 'grommet';
import { WithFormField, IWithFormFieldProps } from '../WithFormField';

/**
 * A Select field with form validation<br/>
 */
export const SelectField = (props: IWithFormFieldProps & SelectProps) => (
  <WithFormField {...props}>
    {({ options, ...rest }) => (
      <Select options={options} {...rest} />
    )}
  </WithFormField>
);
