import React, { Component } from 'react';
import { Add } from 'grommet-icons/icons/Add';
import { Subtract } from 'grommet-icons/icons/Subtract';
import { MaskedInput } from '../MaskedInput';
import { INumberInputProps } from './NumberInputProps';

const precision = n => {
  // eslint-disable-next-line no-restricted-globals
  if (!isFinite(n)) return 0;
  let e = 1;
  let p = 0;
  while (Math.round(n * e) / e !== n) {
    e *= 10;
    p += 1;
  }
  return p;
};

const minMax = ({ value, min, max }) => {
  let val = value;
  if (min !== undefined) {
    val = Math.max(val, min);
  }
  if (max !== undefined) {
    val = Math.min(val, max);
  }
  return val;
};

/**
 * A masked number input, with widgets to increment/decrement the value.
 * Additionally, all properties of MaskedInput apply.
 */

class NumberInput extends Component<INumberInputProps> {
  static defaultProps = {
    emptyValue: '',
    step: 1,
    addIcon: <Add />,
    subtractIcon: <Subtract />,
    prefix: '',
    suffix: '',
    thousandsSeparatorSymbol: '',
    decimalSymbol: '.',
    decimals: null,
    integers: null,
    a11yIncrement: 'Increment by',
    a11yDecrement: 'Decrement by',
  };

  upDateValue: (value: string) => void = null;

  value = undefined;

  valueToNumber = (value: string | number): number => {
    const {
      prefix,
      suffix,
      thousandsSeparatorSymbol,
      decimalSymbol,
    } = this.props;
    return MaskedInput.maskedNumberValue({
      value,
      prefix,
      suffix,
      thousandsSeparatorSymbol,
      decimalSymbol,
    });
  };

  isFloat = (val: string | number): boolean => {
    const floatRegex = /^-?\d+(?:[.,]\d*?)?$/;
    if (!floatRegex.test(val.toString())) {
      return false;
    }
    // eslint-disable-next-line no-restricted-globals
    if (isNaN(parseFloat(val.toString()))) {
      return false;
    }
    return true;
  };

  addStep = () => {
    const { max, min, step, value } = this.props;
    let val = this.isFloat(value)
      ? (this.valueToNumber(value) + step).toFixed(precision(step))
      : min || 0;
    if (typeof val === 'number' && Number.isNaN(val)) {
      if (min !== undefined) {
        val = min;
      } else {
        val = undefined;
      }
    } else {
      val = minMax({ value: val, min, max });
    }
    this.upDateValue(val.toString());
  };

  subtractStep = () => {
    const { max, min, step, value } = this.props;
    let val = this.isFloat(value)
      ? (this.valueToNumber(value) - step).toFixed(precision(step))
      : max || 0;
    if (typeof val === 'number' && Number.isNaN(val)) {
      if (max !== undefined) {
        val = max;
      } else {
        val = undefined;
      }
    } else {
      val = minMax({ value: val, min, max });
    }
    this.upDateValue(val.toString());
  };

  onChange = e => {
    const { onChange, emptyValue } = this.props;
    if (onChange) {
      let { value } = e.target;
      if (this.value !== value) {
        if (value === undefined) {
          value = emptyValue;
        }
        this.value = value;
        onChange({
          ...e,
          target: {
            ...e.target,
            value,
          },
        });
      }
    }
  };

  render() {
    const {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      onChange,
      min,
      max,
      step,
      pipe: userPipe,
      prefix,
      suffix,
      thousandsSeparatorSymbol,
      decimalSymbol,
      decimals,
      integers,
      a11yIncrement,
      a11yDecrement,
      mask: userMask,
      addIcon,
      subtractIcon,
      disabled,
      ...rest
    } = this.props;
    const allowNegative = typeof min !== 'number' || min < 0;
    const includeThousandsSeparator = !!thousandsSeparatorSymbol;
    const allowDecimal =
      decimals === null || (typeof decimals === 'number' && decimals > 0);
    const mask =
      userMask ||
      MaskedInput.createNumberMask({
        prefix,
        suffix,
        includeThousandsSeparator,
        thousandsSeparatorSymbol,
        allowDecimal,
        decimalSymbol,
        decimalLimit: decimals,
        integerLimit: integers,
        allowNegative,
      });
    const pipe =
      userPipe ||
      MaskedInput.createMinMaxInputPipe({
        mask,
        prefix,
        suffix,
        thousandsSeparatorSymbol,
        decimalSymbol,
        min,
        max,
        ...rest,
      });
    return (
      <MaskedInput
        update={update => {
          this.upDateValue = update;
        }}
        pattern="[0-9]*"
        inputMode="numeric"
        onKeyDown={this.subtractStep}
        onKeyUp={this.addStep}
        disabled={disabled}
        onChange={this.onChange}
        pipe={pipe}
        mask={mask}
        widgets={[
          {
            icon: addIcon,
            onClick: disabled ? undefined : this.addStep,
            'aria-label': `${a11yIncrement} ${step}`,
          },
          {
            icon: subtractIcon,
            onClick: disabled ? undefined : this.subtractStep,
            'aria-label': `${a11yDecrement} ${step}`,
          },
        ]}
        {...rest}
      />
    );
  }
}

export { NumberInput };
