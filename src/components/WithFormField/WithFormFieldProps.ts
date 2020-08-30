import React from 'react';
import { ValidationType } from '../Form/FormProps';

export interface IFieldProps {
  id?: string;
  name?: string;
  label?: string | React.ReactNode;
  value?: any;
  onChange?: (e: any) => void;
  [x: string]: any;
}

export interface IWithFormFieldProps {
  /** default validation rules */
  validation?: ValidationType | ValidationType[];
  /** field name */
  name?: string;
  /** field label */
  label?: string | React.ReactNode;
  /** field help/description */
  description?: string;
  /** if separate - label of the FormField */
  controlLabel?: string | React.ReactNode;
  /** whether the field is in a FormField */
  inField?: boolean;
  /** child component */
  children?: (props: IFieldProps) => any;
}
