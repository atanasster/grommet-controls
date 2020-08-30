import React from 'react';
import { TextArea, TextAreaProps } from 'grommet';
import { WithFormField, IWithFormFieldProps } from '../WithFormField';

/**
 * A TextArea field with form validation<br/>
 */
export const TextAreaField = (
  props: IWithFormFieldProps &
    TextAreaProps &
    JSX.IntrinsicElements['textarea'],
) => (
  <WithFormField {...props}>
    {childProps => <TextArea {...childProps} />}
  </WithFormField>
);
