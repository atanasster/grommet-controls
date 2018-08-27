import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Box } from 'grommet';
import { filterByFocusable } from 'grommet/utils/DOM';
import { FormState } from './FormState';
import { StyledForm } from './StyledForm';

import doc from './doc';

const styledComponents = {
  form: StyledForm,
};

class Form extends Component {
  static defaultProps = {
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

  static childContextTypes = {
    form: PropTypes.object,
  }

  constructor(props, context) {
    super(props, context);
    this.config = {};
    const formState = new FormState(this.config, props.object, () => {
      const { errors } = this.state;
      if (errors) {
        this.setState({ errors: formState.getErrors() });
      } else {
        if (this.props.onValidForm) {
          this.props.onValidForm();
        }
        this.setState({ data: formState.get() });
      }
      if (this.props.onInvalidForm) {
        this.props.onInvalidForm(!formState.isValid());
      }
    });
    this.state = {
      config: {}, errors: undefined, submitted: false, formState, data: formState.get(),
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.object) {
      this.setState({ object: { ...this.state.object, ...nextProps.object } });
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
    this.state.formState.updateFields(this.config);
  }

  onSubmit = (event) => {
    const { formState } = this.state;
    const { onSubmit, onSubmitError } = this.props;
    event.preventDefault();
    if (formState.isValid()) {
      this.setState({ errors: undefined });
      if (onSubmit) {
        onSubmit(formState.get());
      }
    } else {
      const errors = formState.getErrors();
      if (onSubmitError) {
        onSubmitError(errors);
      }
      this.setState({ errors });
    }
  }

  updateObject = (name, value) => {
    this.state.data[name] = value;
  }

  attachToForm = (name, props) => {
    this.config = { ...this.config, [name]: props };
  }

  detachFromForm = (name) => {
    delete this.config[name];
  }

  getFieldValue = name => (this.state.data[name])
  getFieldErrors = name => (this.state.errors ? this.state.errors[name] : null)
  getChildContext() {
    return {
      form: {
        attachToForm: this.attachToForm,
        detachFromForm: this.detachFromForm,
        getFieldValue: this.getFieldValue,
        getFieldErrors: this.getFieldErrors,
        onFieldChange: this.updateObject,
      },
    };
  }

  render() {
    const { children, a11yTitle, tag, ...rest } = this.props;
    let StyledComponent = styledComponents[tag];
    if (!StyledComponent) {
      StyledComponent = StyledForm.withComponent(tag);
      styledComponents[tag] = StyledComponent;
    }
    return (
      <StyledComponent
        onSubmit={this.onSubmit}
        aria-label={a11yTitle}
      >
        <Box direction='row'>
          <Box {...rest}>
            <div ref={(ref) => { this.containerRef = ref; }}>
              {children}
            </div>
          </Box>
        </Box>
      </StyledComponent>
    );
  }
}

const FormWrapper = process.env.NODE_ENV !== 'production' ? doc(Form) : Form;

export { FormWrapper as Form };
