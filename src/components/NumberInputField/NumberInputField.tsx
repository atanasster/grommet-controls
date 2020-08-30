import React from 'react';
import { NumberInput, INumberInputProps } from '../NumberInput';
import { WithFormField, IWithFormFieldProps } from '../WithFormField';

/**
 * A numeric input field with form validation<br/>
 */
export const NumberInputField = (
  props: IWithFormFieldProps & INumberInputProps,
) => (
  <WithFormField {...props}>
    {childProps => <NumberInput {...childProps} />}
  </WithFormField>
);
