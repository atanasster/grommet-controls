import React, { Component } from 'react';
import { Box } from 'grommet';
import { filterByFocusable } from 'grommet/utils/DOM';
import { deepMerge } from 'grommet/utils/object';
import { StyledForm } from './StyledForm';

export const FormContext = React.createContext();
const styledComponents = {
  form: StyledForm,
};

class Form extends Component {
  constructor(props, context) {
    super(props, context);
    this.fields = {};
    this.state = {
      errors: undefined, submitted: false, data: { ...props.object },
    };
  }

  validate = (data) => {
    const errors = {};
    const addError = (key, field, message) => {
      if (!errors[key]) {
        errors[key] = [];
      }
      let msg;
      if (typeof message === 'function') {
        msg = message(field.description || field.label || key);
      } else {
        msg = message;
      }
      errors[key].push(msg);
    };
    Object.keys(this.fields).forEach((key) => {
      const field = this.fields[key];
      let rules = field.validation;
      if (rules) {
        if (!Array.isArray(rules)) {
          rules = [rules];
        }
        for (let i = 0; i < rules.length; i += 1) {
          const rule = rules[i];
          if (typeof rule === 'function') {
            const value = data[key];
            if (Array.isArray(value)) {
              const arrayErrors = [];
              value.forEach((v, index) => {
                const message = rule(data, data[key], index);
                if (message) {
                  arrayErrors[index] = message;
                }
              });
              if (arrayErrors.length) {
                addError(key, field, arrayErrors);
              }
            } else {
              const message = rule(data, data[key]);
              if (message) {
                addError(key, field, message);
              }
            }
          } else if (rule !== null && typeof rule === 'object') {
            if (rule.rule && typeof rule.rule === 'function') {
              const isValid = rule.rule(data, data[key]);
              if (!isValid) {
                if (typeof rule.message === 'function') {
                  addError(key, field, rule.message(field.label || key));
                } else {
                  addError(key, field, rule.message);
                }
              }
            }
          }
        }
      }
    });
    if (Object.keys(errors).length === 0) {
      return undefined;
    }
    return errors;
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.object &&
      (JSON.stringify(nextProps.object) !== JSON.stringify(this.state.object))) {
      const newObject = deepMerge(this.state.data, nextProps.object);
      this.setState({ data: newObject });
    }
  }

  componentDidMount() {
    const { focusFirstChild } = this.props;
    if (focusFirstChild) {
      let items = this.containerRef.getElementsByTagName('*');
      items = filterByFocusable(items);
      if (items.length > 0) {
        setTimeout(() => {
          items[0].focus();
        }, 0);
      }
    }
  }

  onSubmit = (event) => {
    const { onSubmit, onSubmitError } = this.props;
    const { data } = this.state;
    event.preventDefault();
    const errors = this.validate(data);
    if (!errors) {
      if (onSubmit) {
        onSubmit(data);
      }
    } else {
      if (onSubmitError) {
        onSubmitError(errors);
      }
      this.setState({ errors, submitted: true });
    }
  };

  updateObject = (name, value, e) => {
    const data = { ...this.state.data, [name]: value };
    const { submitted } = this.state;
    const errors = this.validate(data);
    this.setState({ data, errors: submitted ? errors : this.state.errors });
    if (this.props.onChange) {
      if (typeof e.stopPropagation === 'function') {
        e.stopPropagation();
      }
      this.props.onChange(e);
    }
    if (errors) {
      if (this.props.onInvalidForm) {
        this.props.onInvalidForm(data);
      }
    } else if (this.props.onValidForm) {
      this.props.onValidForm(data);
    }
  };

  attachToForm = (name, props) => {
    this.fields = { ...this.fields, [name]: props };
  }

  detachFromForm = (name) => {
    delete this.fields[name];
  }

  getFieldValue = name => (this.state.data[name])
  getFieldErrors = name => (this.state.errors ? this.state.errors[name] : null)

  render() {
    const { children, a11yTitle, onSubmitError, onValidForm, className,
      onInvalidForm, onSubmit, tag, ...rest } = this.props;
    let StyledComponent = styledComponents[tag];
    if (!StyledComponent) {
      StyledComponent = StyledForm.withComponent(tag);
      styledComponents[tag] = StyledComponent;
    }
    return (
      <StyledComponent
        className={className}
        onSubmit={this.onSubmit}
        aria-label={a11yTitle}
      >
        <Box direction='row'>
          <Box {...rest}>
            <div ref={(ref) => { this.containerRef = ref; }}>
              <FormContext.Provider
                value={{
                  attachToForm: this.attachToForm,
                  detachFromForm: this.detachFromForm,
                  getFieldValue: this.getFieldValue,
                  getFieldErrors: this.getFieldErrors,
                  onFieldChange: this.updateObject,
                }}
              >
                {children}
              </FormContext.Provider>
            </div>
          </Box>
        </Box>
      </StyledComponent>
    );
  }
}

Form.defaultProps = {
  focusFirstChild: true,
  onChange: undefined,
  onSubmit: undefined,
  onSubmitError: undefined,
  onInvalidForm: undefined,
  onValidForm: undefined,
  object: {},
  tag: 'form',
  basis: 'medium',
};

let FormDoc;
if (process.env.NODE_ENV !== 'production') {
  FormDoc = require('./doc').default(Form); // eslint-disable-line global-require
}

const FormWrapper = FormDoc || Form;

export { FormWrapper as Form };
