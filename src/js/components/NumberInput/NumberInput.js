import React, { Component } from 'react';
import { Add, Subtract } from 'grommet-icons';
import {
  createNumberMask, MaskedInput, maskedNumberValue,
  createMinMaxInputPipe,
} from '../MaskedInput';
import doc from './doc';

const precision = (n) => {
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

class NumberInput extends Component {
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
    updateToString: false,
    a11yIncrement: 'Increment by',
    a11yDecrement: 'Decrement by',

  }

  valueToNumber = (value) => {
    const {
      prefix, suffix, thousandsSeparatorSymbol, decimalSymbol,
    } = this.props;
    return maskedNumberValue({
      value, prefix, suffix, thousandsSeparatorSymbol, decimalSymbol,
    });
  }

  addStep = () => {
    const {
      max, min, step, value,
    } = this.props;
    let val = (typeof value === 'number' && value !== undefined) ?
      (this.valueToNumber(value) + step).toFixed(precision(step)) : (min || 0);
    if (Number.isNaN(val)) {
      if (min !== undefined) {
        val = min;
      } else {
        val = undefined;
      }
    } else {
      val = minMax({ value: val, min, max });
    }
    this.upDateValue(val);
  }

  subtractStep = () => {
    const { max, min, step, value } = this.props;
    let val = (typeof value === 'number' && value !== undefined) ?
      (this.valueToNumber(value) - step).toFixed(precision(step)) : (max || 0);
    if (Number.isNaN(val)) {
      if (max !== undefined) {
        val = max;
      } else {
        val = undefined;
      }
    } else {
      val = minMax({ value: val, min, max });
    }
    this.upDateValue(val);
  }

  onChange = (e) => {
    const { onChange, updateToString, emptyValue } = this.props;
    if (onChange) {
      let value = updateToString ? e.target.value : this.valueToNumber(e.target.value);
      if (this.value !== value) {
        if (value === undefined) {
          value = emptyValue;
        }
        this.value = value;
        onChange({ ...e, target: { ...e.target, value } });
      }
    }
  };

  render() {
    const {
      onChange, min, max, step, pipe: userPipe, updateToString,
      prefix, suffix, thousandsSeparatorSymbol,
      decimalSymbol, decimals, integers,
      a11yIncrement, a11yDecrement,
      mask: userMask, addIcon, subtractIcon, disabled, ...rest
    } = this.props;
    const allowNegative = typeof min !== 'number' || min < 0;
    const includeThousandsSeparator = !!thousandsSeparatorSymbol;
    const allowDecimal = (decimals === null) || (typeof decimals === 'number' && decimals > 0);
    const mask = userMask || createNumberMask({
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
    const pipe = userPipe || createMinMaxInputPipe({
      mask, prefix, suffix, thousandsSeparatorSymbol, decimalSymbol, min, max, ...rest,
    });
    return (
      <MaskedInput
        update={(update) => { this.upDateValue = update; }}
        pattern='[0-9]*'
        inputMode='numeric'
        onKeyDown={this.subtractStep}
        onKeyUp={this.addStep}
        disabled={disabled}
        onChange={this.onChange}
        pipe={pipe}
        mask={mask}
        widgets={[
          {
            'icon': addIcon,
            'onClick': disabled ? undefined : this.addStep,
            'aria-label': `${a11yIncrement} ${step}`,
          },
          {
            'icon': subtractIcon,
            'onClick': disabled ? undefined : this.subtractStep,
            'aria-label': `${a11yDecrement} ${step}`,
          },

        ]}
        {...rest}
      />
    );
  }
}

const NumberInputWrapper = process.env.NODE_ENV !== 'production' ? doc(NumberInput) : NumberInput;

export { NumberInputWrapper as NumberInput };
