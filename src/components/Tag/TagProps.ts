import { MouseEvent } from 'react';
import { BoxProps } from 'grommet';
import { Omit } from '../../utils';

export interface ITagOwnProps {
  /** Displays a disabled style for the tag */
  disabled?: boolean;
  /** Whether the tag is focusable */
  focusable?: boolean;
  /** Icon element to place in the tag */
  icon?: React.ReactNode;
  /** Label text to place next to the control */
  label?: string | React.ReactNode;
  /** Whether to show the label in front of the checkbox */
  reverse?: boolean;
  /** Function that will be called when the user clicks
   *  the icon on the tag, or presses the Space key
   */
  onChange?: (event: MouseEvent<HTMLSpanElement>) => void;
  /** The font size of the label */
  size?:
    | 'xsmall'
    | 'small'
    | 'medium'
    | 'large'
    | 'xlarge'
    | 'xxlarge'
    | string;
  /** Whether to truncate the label text */
  truncate?: boolean;
}

export type ITagProps = ITagOwnProps &
  BoxProps &
  Omit<JSX.IntrinsicElements['div'], 'onChange'>;
