import React from 'react';
import { PasswordInput, IPasswordInputProps } from '../PasswordInput';
import { WithFormField, IWithFormFieldProps } from '../WithFormField';

/**
 * A password input field with form validation<br/>
 */
export const PasswordInputField = (props: IWithFormFieldProps & IPasswordInputProps) => (
  <WithFormField {...props}>
    {childProps => <PasswordInput {...childProps} />}
  </WithFormField>
);
