import { MouseEvent } from 'react';

export interface IFormErrors {
  [x: string]: string[],
}

type ErrorMessageFunc = (label: string) => string;

export type FormErrorMessageType = ErrorMessageFunc | string;

export type ValidationFunc = (dataRow: object, value: any, index?: number) => FormErrorMessageType;

export type ValidationMessageFunc = (name: string) => FormErrorMessageType;

export interface ValidationObj {
  rule: ValidationFunc,
  message: string | ValidationMessageFunc,
}
export type ValidationType = ValidationFunc | ValidationObj;

export interface IFieldProps {
  label: string | React.ReactNode,
  description?: string,
  validation : ValidationType | ValidationType[],
}

export interface IFormContext {
  attachToForm: (name: string, props: IFieldProps) => void,
  detachFromForm: (name: string) => void,
  getFieldValue: (name: string) => any,
  getFieldErrors: (name: string) => FormErrorMessageType[],
  onFieldChange: (name: string, value: string, event: MouseEvent<HTMLElement>) => void,
}

export interface IFormProps {
  /** Custom title to be used by screen readers */
  a11yTitle?: string,
  /** Whether to focus the first form control on mounting */
  focusFirstChild?: boolean,
  /** Initial values of the form data object */
  object?: object,
  /** A function called when the user successfully submits the form */
  onSubmit?: (data: object) => void,
  /** A function invoked when any of the values in the form are changing */
  onChange?: (name: string, value: any, event: MouseEvent<HTMLElement> & { value: any }) => void,
  /** A function invoked when an error occured during submitting */
  onSubmitError?: (errors: IFormErrors) => void,
  /** A function invoked on every change when the form is valid */
  onValidForm?: (data: object) => void,
  /** A function invoked on every change when the form is invalid */
  onInvalidForm?: (data: object) => void,
  /** The DOM tag to use for the form */
  tag?: string,
  /** css class name, assigned by styled-components */
  className?: string,
}
