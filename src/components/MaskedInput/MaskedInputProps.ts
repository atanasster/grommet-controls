import { IDropInputProps } from '../DropInput';

export interface IMaskProps {
  pipe?: PipeType,
  rawValue?: string,
  previousPlaceholder?: string | JSX.Element | React.ReactNode,
  guide?: boolean,
  placeholderChar?: string,
  currentCaretPosition?: number,
  keepCharPositions?: boolean,
  placeholder?: string | JSX.Element | React.ReactNode,
  showMask?: boolean,
}

export interface IPipeObject {
  value: string,
}
export type PipeType = (value: string, config: IMaskProps) => string | IPipeObject;

export interface IMaskObjectType {
  mask: MaskType,
  pipe: PipeType,
}

export type MaskBaseTypes = string | RegExp | boolean | IMaskObjectType | MaskFunctionType;
export type MaskType = MaskBaseTypes | MaskBaseTypes[];

export type MaskFunctionType = (value: string, props: IMaskProps) => MaskType;

export interface INumberValueInput {
  value?: number | string,
  prefix: string,
  suffix: string,
  decimalSymbol: string,
  thousandsSeparatorSymbol: string,
  min?: number,
  max?: number,
  mask?: string,
}

export interface IMaskedInputOwnProps {
  /** An array or a function that defines how the user input is going to be masked */
  mask?: MaskType,
  /** When masked, a boolean that tells the component whether to be in guide or no guide mode */
  guide?: boolean,
  /** When masked, a function that will give you the opportunity to
   *  modify the conformed value before it is displayed on the screen
  */
  pipe?: PipeType,
  /** When masked, represents the fillable spot in the mask */
  placeholderChar?: string,
  /** For masked. When true, adding or deleting characters will
  *  not affect the positions of existing characters.
  *  When false, adding characters causes existing characters to advance.
  * And deleting characters causes existing characters to move back
  */
  keepCharPositions?: boolean,
  /** When masked, displays the mask as a placeholder in place of the regular placeholder */
  showMask?: boolean,
  /** string to show when value is empty */
  emptyValue?: string,
 }

export type IMaskedInputProps = IMaskedInputOwnProps & IDropInputProps;
