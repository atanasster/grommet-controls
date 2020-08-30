import React, { useEffect, useContext } from 'react';
import { FormField } from 'grommet';
import { FormContext } from '../Form/Form';
import { IWithFormFieldProps } from './WithFormFieldProps';

export const WithFormField = ({
  validation,
  label,
  description,
  name,
  controlLabel,
  inField,
  children,
  ...other
}: IWithFormFieldProps) => {
  const form = useContext(FormContext);
  const { onFieldChange, getFieldValue, getFieldErrors } = form;
  useEffect(() => {
    form.attachToForm(name, { label, description, validation });
    return () => {
      form.detachFromForm(name);
    };
  });

  const onChange = e => {
    const { value, target } = e;
    const targetValue = target ? target.value : undefined;
    onFieldChange(name, value || targetValue, e);
  };
  const getValue = () => {
    const value = getFieldValue(name);
    return value === undefined ? '' : value;
  };
  const errors = getFieldErrors(name);
  let error = Array.isArray(errors) ? errors[0] : errors;
  if (typeof error === 'function') {
    error = error(typeof label === 'string' ? label : name);
  }
  const field = children({
    id: name,
    name,
    label: inField ? controlLabel : label,
    value: getValue(),
    onChange,
    ...other,
  });
  if (!inField) {
    return field;
  }
  return (
    <FormField
      htmlFor={name}
      label={label || (controlLabel === true && name)}
      error={error}
    >
      {field}
    </FormField>
  );
};

WithFormField.defaultProps = {
  validation: undefined,
  inField: true,
  controlLabel: undefined,
  label: undefined,
  description: undefined,
  Control: React.Component,
};
