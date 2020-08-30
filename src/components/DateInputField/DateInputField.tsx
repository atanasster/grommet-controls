import React from 'react';
import { DateInput, IDateInputProps } from '../DateInput';
import { WithFormField, IWithFormFieldProps } from '../WithFormField';

/**
 * A Date input field with form validation<br/>
 */
export const DateInputField = (
  props: IWithFormFieldProps & IDateInputProps,
) => (
  <WithFormField {...props}>
    {childProps => <DateInput {...childProps} />}
  </WithFormField>
);
