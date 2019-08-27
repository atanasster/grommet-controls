import { IMaskedInputProps } from '../MaskedInput';

export interface IDateInputOwnProps {
  /** Use mask that wil attempt to auto-correct the entry as the user types */
  autocorrect?: boolean,
  /** An array of two numbers indicating the limits on navigation in ISO8601 format */
  bounds?: string[],
  /** Multiple selected dates in ISO8601 format.
  * Items that are an array indicate a range of dates
  */
  dates?: (string | string[])[],
  /** Multiple dates in ISO8601 format that should not be
  * selectable. Items that are an array indicate a range of dates
  */
  disabledDates?: (string | string[])[],
  /** The first day of the week. 0 for Sunday. 1 for Monday */
  firstDayOfWeek?: '0' | '1',
  /** Mask format - by default this is set to "mm dd yyyy" but can be changed ie "dd mm yyyy" */
  maskFormat?: string,
  /** The locale to use */
  locale?: string,
  /** Size of the calendar drop */
  size?: 'small' | 'medium' | 'large',
  /** The date value is Date format or ISO string */
  value?: Date | string,
}

export type IDateInputProps = IDateInputOwnProps & IMaskedInputProps;
