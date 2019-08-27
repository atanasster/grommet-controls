import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import { ThemeContext } from 'styled-components';
import { FormDown } from 'grommet-icons/icons/FormDown';
import {
 DropButton, Keyboard, Button,
} from 'grommet';
import { IDropInputProps } from './DropInputProps';
import { StyledDropInput, StyledDropInputContainer, StyledWidgetsContainer } from './StyledDropInput';

interface IDropInputState {
  open?: boolean,
  value?: string | number,
  defaultValue?: string | number,
}

/**
*  An Input control with an optional drop button with the specified 'dropContent' or widgets<br/>
*`import { DropInput } from 'grommet-controls';`<br/>
*`<DropInput`<br/>
*&nbsp;&nbsp;`dropContent={(`<br/>
*&nbsp;&nbsp;&nbsp;&nbsp;`...`<br/>
*&nbsp;&nbsp;`]}`<br/>
*`/>`<br/>
*/
class DropInput extends Component<IDropInputProps, IDropInputState> {
  static defaultProps = {
    dropAlign: { top: 'bottom', right: 'left' },
    dropIcon: (<FormDown />),
    type: 'text',
    widgets: [],
  };

  state: IDropInputState = { open: false };

  inputRef = React.createRef<HTMLInputElement>();

  static getDerivedStateFromProps(
      newProps: IDropInputProps,
      oldState: IDropInputState
  ): IDropInputState {
    if (newProps.value !== oldState.value || newProps.defaultValue !== oldState.defaultValue) {
      return {
        value: newProps.value,
        defaultValue: newProps.defaultValue,
        open: false,
      };
    }
    return null;
  }

  onUpdateValue = (value) => {
    const { onChange } = this.props;
    const input = findDOMNode(this.inputRef.current) as HTMLInputElement;
    input.value = value;
    this.setState({ open: false, value });
    if (onChange) {
      onChange({ target: input });
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
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      onOpen, onClose, onKeyDown, onKeyUp,
      defaultValue, dropContent, dropIcon, disabled, ...rest
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
            tabIndex={-1}
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
            <Button
              disabled={disabled}
              tabIndex={-1}
              key={`widget_${index}`}
              {...widget}
            />
            ))}
          {drop}
        </StyledWidgetsContainer>
      );
    }
    return (
      <Keyboard onDown={this.onKeyDown} onUp={this.onKeyUp}>
        <StyledDropInputContainer>
          <ThemeContext.Consumer>
            {theme => (
              <StyledDropInput
                ref={this.inputRef as any}
                theme={theme}
                disabled={disabled}
                numWidgets={numWidgets}
                aria-label={a11yTitle}
                defaultValue={defaultValue ? defaultValue.toString() : undefined}
                {...rest}
              />
            )}
          </ThemeContext.Consumer>
          {decorations}
        </StyledDropInputContainer>
      </Keyboard>
    );
  }
}

export { DropInput };
