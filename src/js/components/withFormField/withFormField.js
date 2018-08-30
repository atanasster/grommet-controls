import React from 'react';
import PropTypes from 'prop-types';
import { FormField } from 'grommet';

export const withFormField = WrappedField => (
  class GrommetField extends React.Component {
    static defaultProps = {
      validation: undefined,
      inField: true,
      controlLabel: undefined,
    };

    static propTypes = {
      validation: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.func), PropTypes.func]),
      name: PropTypes.string.isRequired,
    };

    static contextTypes = {
      form: PropTypes.object,
    };

    componentDidMount() {
      const {
        validation, label, description, name,
      } = this.props;
      this.context.form.attachToForm(name, { label, description, validation });
    }
    componentWillUnmount() {
      const { name } = this.props;
      this.context.form.detachFromForm(name);
    }
    onChange = ({ target: { value } }) => {
      const { name } = this.props;
      const { onFieldChange } = this.context.form;
      onFieldChange(name, value);
    };
    getValue() {
      const { name } = this.props;
      const value = this.context.form.getFieldValue(name);
      return value === undefined ? '' : value;
    }
    render() {
      const {
        name, validation, inField, label, controlLabel, ...other
      } = this.props;
      const errors = this.context.form.getFieldErrors(name);
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
          value={this.getValue()}
          onChange={this.onChange}
          {...other}
        />);
      if (!inField) {
        return field;
      }
      return (
        <FormField htmlFor={name} label={label || (controlLabel === true && name)} error={error} >
          {field}
        </FormField>
      );
    }
  }
);
