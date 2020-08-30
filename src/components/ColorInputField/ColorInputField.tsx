import React from 'react';
import { ColorInput, IColorInputProps } from '../ColorInput';
import { IWithFormFieldProps, WithFormField } from '../WithFormField';

/**
 * A Color selection field with form validation<br/>
 */

const ColorInputField = (props: IWithFormFieldProps & IColorInputProps) => (
  <WithFormField {...props}>
    {childProps => <ColorInput {...childProps} />}
  </WithFormField>
);

export { ColorInputField };
