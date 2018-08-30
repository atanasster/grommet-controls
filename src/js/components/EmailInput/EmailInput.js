import React, { Component } from 'react';
import { MaskedInput } from '../MaskedInput';


class EmailInput extends Component {
  static defaultProps = {
    mask: MaskedInput.emailMask,
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
  EmailInputDoc = require('./doc').default(EmailInput); // eslint-disable-line global-require
}

const EmailInputWrapper = EmailInputDoc || EmailInput;

export { EmailInputWrapper as EmailInput };
