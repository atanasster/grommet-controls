import { IDropInputProps } from '../DropInput';

export interface IPasswordInputOwnProps {
  /** Custom view password title to be used by screen readers */
  a11yViewPassword?: string,
  /** Custom hide password title to be used by screen readers */
  a11yHidePassword?: string,
  /** Icon to view the password */
  viewIcon?: JSX.Element,
  /** Icon to hide the password */
  hideIcon?: JSX.Element,
}

export type IPasswordInputProps = IPasswordInputOwnProps & IDropInputProps;
