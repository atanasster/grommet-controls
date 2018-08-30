import React, { Component } from 'react';
import { View } from 'grommet-icons';
import { DropInput } from '../DropInput';

class PasswordInput extends Component {
  static defaultProps = {
    viewIcon: <View />,
    hideIcon: <View />,
    a11yViewPassword: 'View password',
    a11yHidePassword: 'Hide password',
  }

  state = { showPassword: false };
  toggleView = (e) => {
    const { showPassword } = this.state;
    e.stopPropagation();
    this.setState({ showPassword: !showPassword });
  }
  render() {
    const {
      viewIcon, hideIcon, a11yViewPassword, a11yHidePassword,
      ...rest
    } = this.props;
    const { showPassword } = this.state;
    return (
      <DropInput
        type={showPassword ? 'text' : 'password'}
        widgets={[
          {
            'icon': showPassword ? hideIcon : viewIcon,
            'aria-label': showPassword ? a11yHidePassword : a11yViewPassword,
            'onClick': this.toggleView,
          },
        ]}
        {...rest}
      />
    );
  }
}

let PasswordInputDoc;
if (process.env.NODE_ENV !== 'production') {
  PasswordInputDoc = require('./doc')(PasswordInput); // eslint-disable-line global-require
}

const PasswordInputWrapper = PasswordInputDoc || PasswordInput;

export { PasswordInputWrapper as PasswordInput };
