import React from 'react';
import { TextInput, TextInputProps } from 'grommet';
import { Omit } from 'grommet/utils';
import { WithFormField, IWithFormFieldProps } from '../WithFormField';

/**
 * A TextInput field with form validation<br/>
 */
export const TextInputField = (
  props: IWithFormFieldProps &
    TextInputProps &
    Omit<JSX.IntrinsicElements['input'], 'onSelect' | 'size' | 'placeholder'>,
) => (
  <WithFormField {...props}>
    {childProps => <TextInput {...childProps} />}
  </WithFormField>
);
