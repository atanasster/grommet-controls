import React, { Component } from 'react';
import { Box, BoxProps } from 'grommet';
import { filterByFocusable } from 'grommet/utils/DOM';
import { deepMerge } from 'grommet/utils/object';
import { StyledForm } from './StyledForm';
import {
 IFormProps, IFormContext, IFormErrors, IFieldProps,
} from './FormProps';

export const FormContext = React.createContext<IFormContext>({
  attachToForm: null,
  detachFromForm: null,
  getFieldValue: null,
  getFieldErrors: null,
  onFieldChange: null,
});
const styledComponents = {
  form: StyledForm,
};

interface IFormState {
  data: object,
  errors: IFormErrors,
  submitted: boolean,
}

/** A Form with built-in validation<br/>
*`import { Form } from 'grommet-controls';`<br/>
*`<Form onSubmit={...} />`<br/>
*/
class Form extends Component<IFormProps & BoxProps, IFormState> {
  fields: {
    [x: string]: IFieldProps,
  } = {};

  static defaultProps = {
    focusFirstChild: true,
    onChange: undefined,
    onSubmit: undefined,
    onSubmitError: undefined,
    onInvalidForm: undefined,
    onValidForm: undefined,
    initialValues: {},
    object: {},
    tag: 'form',
    basis: 'medium',
  }

  containerRef = React.createRef<HTMLDivElement>();

  constructor(props) {
    super(props);
    this.state = {
      errors: undefined, submitted: false, data: { ...props.initialValues, ...props.object },
    };
  }

  validate = (data: object): IFormErrors => {
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
              value.forEach((_v, index) => {
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
                  addError(key, field, rule.message(typeof field.label === 'string' ? field.label : key));
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

  static getDerivedStateFromProps(nextProps, prevState) {
    if (JSON.stringify(nextProps.object) !== JSON.stringify(prevState.data)) {
      return {
        data: deepMerge(prevState.data, nextProps.object),
      };
    }
    return null;
  }

  componentDidMount() {
    const { focusFirstChild } = this.props;
    if (focusFirstChild) {
      let items = this.containerRef.current.getElementsByTagName('*');
      items = filterByFocusable(items);
      if (items.length > 0) {
        setTimeout(() => {
          // @ts-ignore
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
    this.setState((prevState) => {
      const data = { ...prevState.data, [name]: value };
      const { submitted } = this.state;
      const errors = this.validate(data);
      if (this.props.onChange) {
        this.props.onChange(name, value, e);
      }
      if (errors) {
        if (this.props.onInvalidForm) {
          this.props.onInvalidForm(data);
        }
      } else if (this.props.onValidForm) {
        this.props.onValidForm(data);
      }
      return { data, errors: submitted ? errors : prevState.errors };
    });
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
    const {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      onSubmitError, onValidForm, onInvalidForm, onSubmit, onChange,
      className, children, a11yTitle, tag, ...rest
} = this.props;
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
            <div ref={this.containerRef}>
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

export { Form };
