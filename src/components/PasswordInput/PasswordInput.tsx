import React, { Component } from 'react';
import {  Hide, View } from 'grommet-icons/icons/View';
import { DropInput } from '../DropInput';
import { IPasswordInputProps } from './PasswordInputProps';

/**
*A password field with show/hide password toggle<br/>
*All properties of DropInput apply<br/>
*`import { PasswordInput } from 'grommet-controls';`<br/>
*`<PasswordInput value={...} />`<br/>
*/
class PasswordInput extends Component<IPasswordInputProps> {
  static defaultProps = {
    viewIcon: <View />,
    hideIcon: <Hide />,
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
export { PasswordInput };
