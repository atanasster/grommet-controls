import React from 'react';
import { MaskedInput, IMaskedInputProps } from '../MaskedInput';
import { WithFormField, IWithFormFieldProps } from '../WithFormField';

/**
 * A masked input field with form validation<br/>
 */
export const MaskedInputField = (props: IWithFormFieldProps & IMaskedInputProps) => (
  <WithFormField {...props}>
    {childProps => <MaskedInput {...childProps} />}
  </WithFormField>
);
