import { transformMaskedValue } from './utils';
import { IMaskProps, INumberValueInput, IPipeObject } from './MaskedInputProps';

export const maskedNumberValue = ({
  value,
  prefix,
  suffix,
  thousandsSeparatorSymbol,
}: INumberValueInput): number => {
  let val;
  if (typeof value === 'string') {
    val = value.replace(
      new RegExp(`[${prefix}${suffix}${thousandsSeparatorSymbol}]`, 'g'),
      '',
    );
    val = parseFloat(val);
    if (Number.isNaN(val)) {
      val = undefined;
    }
  } else {
    val = value;
  }
  return val;
};

export const createMinMaxInputPipe = ({
  min,
  max,
  mask,
  ...props
}: INumberValueInput & IMaskProps) => (
  conformedValue: string | number,
): IPipeObject => {
  if (typeof min === 'number' || typeof max === 'number') {
    const value = maskedNumberValue({ ...props, value: conformedValue });
    if (typeof value === 'number') {
      if (typeof min === 'number' && value < min) {
        const resolved = transformMaskedValue(min, mask, props);
        if (resolved === undefined) {
          return undefined;
        }
        return { value: resolved };
      }
      if (typeof max === 'number' && value > max) {
        const resolved = transformMaskedValue(max, mask, props);
        if (resolved === undefined) {
          return undefined;
        }
        return { value: resolved };
      }
    }
  }
  return { value: conformedValue.toString() };
};
