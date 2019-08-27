import { ColorType } from 'grommet/utils';

export interface IValueProps {
  /** Value label */
  label?: React.ReactNode,
  /** The value color */
  color?: ColorType,
  /** The value */
  value?: React.ReactNode,
  /** Font weight */
  weight?: 'normal' | 'bold' | number,
  /** Spacing between the value and the label */
  gap?:'xxsmall' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | string,
  /** Value element size */
  size?: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge',
  /** 'Units' string */
  units?: string,
}
