import React from 'react';
import { EmailInput, IEmailInputProps } from '../EmailInput';
import { WithFormField, IWithFormFieldProps } from '../WithFormField';

/**
 * An email input field with form validation<br/>
 */
export const EmailInputField = (
  props: IWithFormFieldProps & IEmailInputProps,
) => (
  <WithFormField {...props}>
    {childProps => <EmailInput {...childProps} />}
  </WithFormField>
);
