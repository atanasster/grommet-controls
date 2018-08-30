import React, { Component } from 'react';
import { MaskedInput, emailMask } from '../MaskedInput';


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

let EmailInputDoc;
if (process.env.NODE_ENV !== 'production') {
  EmailInputDoc = require('./doc').doc(EmailInput); // eslint-disable-line global-require
}

const EmailInputWrapper = EmailInputDoc || EmailInput;

export { EmailInputWrapper as EmailInput };
