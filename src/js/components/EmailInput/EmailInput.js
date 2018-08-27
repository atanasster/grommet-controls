import React, { Component } from 'react';
import { MaskedInput, emailMask } from '../MaskedInput';
import doc from './doc';


class EmailInput extends Component {
  static defaultProps = {
    mask: emailMask,
  };
  render() {
    return (
      <MaskedInput
        inputMode='email'
        {...this.props}
      />
    );
  }
}

const EmailInputWrapper = (process.env.NODE_ENV !== 'production' ? doc(EmailInput) : EmailInput);

export { EmailInputWrapper as EmailInput };
