import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import { createTextMaskInputElement } from 'text-mask-core';
import {
  createAutoCorrectedDatePipe,
  emailMask,
  createNumberMask,
} from 'text-mask-addons';
import { DropInput } from '../DropInput';
import { transformMaskedValue } from './utils';
import { createMinMaxInputPipe, maskedNumberValue } from './minMaxNumberPipe';
import { IMaskedInputProps } from './MaskedInputProps';

/**
 * A masked Input control with an optional drop button with the specified dropContent.
 */
class MaskedInput extends Component<IMaskedInputProps> {
  static defaultProps = {
    type: 'text',
    guide: true,
    showMask: false,
    placeholderChar: '\u2000',
  };

  static alphabetic = /[A-Z]/i;

  static placeholderChars = {
    whitespace: '\u2000',
    underscore: '_',
  };

  static digit = /\d/;

  static createAutoCorrectedDatePipe = createAutoCorrectedDatePipe;

  static emailMask = emailMask;

  static createNumberMask = createNumberMask;

  static createMinMaxInputPipe = createMinMaxInputPipe;

  static maskedNumberValue = maskedNumberValue;

  textMaskInputElement = null;

  inputControlRef = React.createRef<HTMLInputElement>();

  onInput = event => {
    const { onInput } = this.props;
    if (this.textMaskInputElement) {
      this.textMaskInputElement.update(event.target.value);
    }
    if (onInput) {
      onInput(event);
    }
  };

  initTextMask() {
    const {
      props,
      props: { value },
    } = this;
    if (props.mask && this.inputControlRef) {
      this.textMaskInputElement = createTextMaskInputElement({
        // eslint-disable-next-line react/no-find-dom-node
        inputElement: (findDOMNode(
          this.inputControlRef.current,
        ) as HTMLInputElement).getElementsByTagName('input')[0],
        ...props,
      });
      this.textMaskInputElement.update(value);
    }
  }

  componentDidMount() {
    this.initTextMask();
  }

  componentDidUpdate() {
    this.initTextMask();
  }

  maskedValue(value) {
    if (value === undefined) {
      return undefined;
    }
    const { mask } = this.props;
    if (value) {
      const conformed = transformMaskedValue(value, mask, this.props);
      return conformed;
    }
    return value;
  }

  render() {
    const {
      defaultValue,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      value,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      mask,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      guide,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      showMask,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      pipe,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      placeholderChar,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      keepCharPositions,
      ...rest
    } = this.props;
    return (
      <DropInput
        ref={this.inputControlRef as any}
        value={this.maskedValue(value)}
        defaultValue={this.maskedValue(defaultValue)}
        onInput={this.onInput}
        {...rest}
      />
    );
  }
}

export { MaskedInput };
