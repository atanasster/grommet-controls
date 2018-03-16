import React from 'react';
import PropTypes from 'prop-types';
import { FormField } from 'grommet';

export default WrappedField => (
  class GrommetField extends React.Component {
    static defaultProps = {
      validation: undefined,
    };

    static propTypes = {
      validation: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.func), PropTypes.func]),
      name: PropTypes.string.isRequired,
    };

    static contextTypes = {
      form: PropTypes.object,
    };

    componentDidMount() {
      const { validation, label, name } = this.props;
      this.context.form.attachToForm(name, { label, validation });
    }
    componentWillUnmount() {
      const { name } = this.props;
      this.context.form.detachFromForm(name);
    }
    onChange = ({ target: { value } }) => {
      const { name } = this.props;
      const { onFieldChange } = this.context.form;
      onFieldChange(name, value);
    }
    getValue() {
      const { name } = this.props;
      const value = this.context.form.getFieldValue(name);
      return value === undefined ? '' : value;
    }
    render() {
      const { name, validation, label, ...other } = this.props;
      const errors = this.context.form.getFieldErrors(name);
      let error = Array.isArray(errors) ? errors[0] : errors;
      if (typeof error === 'function') {
        error = error(label || name);
      }
      return (
        <FormField htmlFor={name} label={label || name} error={error} >
          <WrappedField
            plain={true}
            id={name}
            name={name}
            value={this.getValue()}
            onChange={this.onChange}
            {...other}
          />
        </FormField>
      );
    }
  }
);
