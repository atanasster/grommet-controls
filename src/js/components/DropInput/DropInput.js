import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import { FormDown } from 'grommet-icons';
import { compose } from 'recompose';
import { DropButton, Keyboard, Button } from 'grommet';
import { withTheme } from 'grommet/components/hocs';
import { StyledDropInput, StyledDropInputContainer, StyledWidgetsContainer } from './StyledDropInput';

class DropInput extends Component {
  static defaultProps = {
    dropAlign: { top: 'bottom', right: 'left' },
    dropIcon: <FormDown />,
    type: 'text',
    widgets: [],
  }

  state = { open: false };

  componentWillReceiveProps(nextProps) {
    const { value, defaultValue } = nextProps;
    if (value !== this.props.value ||
      defaultValue !== this.props.defaultValue) {
      this.onClose();
    }
  }

  onUpdateValue = (value) => {
    const { onChange } = this.props;
    this.inputControlRef.value = value;
    this.setState({ open: false });
    if (onChange) {
      onChange({ target: this.inputControlRef });
    }
  }

  onOpen = (e) => {
    const { onOpen, disabled } = this.props;
    this.setState({ open: true });
    if (onOpen && !disabled) {
      onOpen(e);
    }
  }

  onClose = (e) => {
    const { onClose, disabled } = this.props;
    this.setState({ open: false });
    if (onClose && !disabled) {
      onClose(e);
    }
  }
  onKeyDown = (e) => {
    const { onKeyDown } = this.props;
    this.setState({ open: true });
    if (onKeyDown) {
      onKeyDown(e);
    }
  }
  onKeyUp = (e) => {
    const { onKeyUp } = this.props;
    this.setState({ open: false });
    if (onKeyUp) {
      onKeyUp(e);
    }
  }

  render() {
    const {
      a11yTitle, a11yDropTitle, dropAlign, dropTarget, update, widgets,
      // eslint-disable-next-line no-unused-vars,max-len
      onOpen, onClose, onKeyDown, onKeyUp,
      dropContent, dropIcon, theme, disabled, ...rest
    } = this.props;
    const { open } = this.state;
    if (typeof update === 'function') {
      update(this.onUpdateValue);
    }
    const numWidgets = (dropContent ? 1 : 0) + (widgets ? widgets.length : 0);
    let decorations;
    if (numWidgets > 0) {
      let drop;
      if (dropContent) {
        drop = (
          <DropButton
            a11yTitle={a11yDropTitle}
            disabled={disabled}
            dropAlign={dropAlign}
            dropTarget={dropTarget}
            open={open}
            tabIndex='-1'
            focusIndicator={false}
            onOpen={this.onOpen}
            onClose={this.onClose}
            dropContent={dropContent}
            icon={dropIcon}
          />
        );
      }
      decorations = (
        <StyledWidgetsContainer
          align='center'
          direction='row'
        >
          {widgets.map((widget, index) => (
            <Button tabIndex='-1' key={`widget_${index}`} {...widget} />
            ))}
          {drop}
        </StyledWidgetsContainer>
      );
    }
    return (
      <Keyboard onDown={this.onKeyDown} onUp={this.onKeyUp}>
        <StyledDropInputContainer >
          <StyledDropInput
            ref={(ref) => { this.inputControlRef = ref && findDOMNode(ref).getElementsByTagName('input')[0]; }}
            theme={theme}
            disabled={disabled}
            numWidgets={numWidgets}
            aria-label={a11yTitle}
            {...rest}
          />
          {decorations}
        </StyledDropInputContainer>
      </Keyboard>
    );
  }
}

let DropInputDoc;
if (process.env.NODE_ENV !== 'production') {
  DropInputDoc = require('./doc').default(DropInput); // eslint-disable-line global-require
}

const DropInputWrapper = compose(
  withTheme,
)(
  DropInputDoc || DropInput
);

export { DropInputWrapper as DropInput };
