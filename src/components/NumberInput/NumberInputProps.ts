import { IMaskedInputProps } from '../MaskedInput';

export interface INumberInputOwnProps {
  /** Custom increment button title to be used by screen readers */
  a11yIncrement?: string;
  /** Custom increment button title to be used by screen readers */
  a11yDecrement?: string;
  /** How many digits to allow after the decimal */
  decimals?: number;
  /** decimal symbol */
  decimalSymbol?: string;
  /** Minimum value */
  min?: number;
  /** Maximum value */
  max?: number;
  /** Steps to increase and decrease by */
  step?: number;
  /** The numeric value */
  value?: string | number;
  /** Icon for button to increment by step */
  addIcon?: JSX.Element;
  /** Icon for button to subtract a step */
  subtractIcon?: JSX.Element;
  /** What to display in front of the value */
  prefix?: string;
  /** What to display at the end of the value */
  suffix?: string;
  /** A character with which to separate thousands */
  thousandsSeparatorSymbol?: string;
  /** Limit on the length of the integer number */
  integers?: number;
}

export type INumberInputProps = INumberInputOwnProps &
  Omit<IMaskedInputProps, 'ref'>;
