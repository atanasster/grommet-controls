import React, { useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { FormField } from 'grommet';
import { FormContext } from '../Form/Form';

export const withFormField = (WrappedField) => {
  const GrommetField = ({
    validation, label, description, name, controlLabel, inField, ...other
  }) => {
    const renderField = ({ onFieldChange, getFieldValue, getFieldErrors }) => {
      const onChange = (e) => {
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
        error = error(label || name);
      }
      const field = (
        <WrappedField
          plain={true}
          id={name}
          name={name}
          label={inField ? controlLabel : label}
          value={getValue()}
          onChange={onChange}
          {...other}
        />);
      if (!inField) {
        return field;
      }
      return (
        <FormField htmlFor={name} label={label || (controlLabel === true && name)} error={error}>
          {field}
        </FormField>
      );
    };
    const form = useContext(FormContext);
    useEffect(() => {
      form.attachToForm(name, { label, description, validation });
      return () => {
        form.detachFromForm(name);
      };
    });

    return renderField(form);
  };
  GrommetField.defaultProps = {
    validation: undefined,
    inField: true,
    controlLabel: undefined,
    label: undefined,
    description: undefined,
  };

  GrommetField.propTypes = {
    validation: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.func), PropTypes.func]),
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    description: PropTypes.string,
    controlLabel: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    inField: PropTypes.bool,
  };
  return GrommetField;
};
