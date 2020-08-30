import { MouseEvent } from 'react';
import { TextInputProps } from 'grommet';
import { Omit } from '../../utils';

// eslint-disable-next-line @typescript-eslint/interface-name-prefix
export interface IDropInputOwnProps {
  /** Custom title to be used by screen readers */
  a11yTitle?: string;
  /** Custom drop button title to be used by screen readers */
  a11yDropTitle?: string;
  /** Function that will be called when the user enters a new value */
  onChange?: (x: {
    target: React.RefObject<HTMLInputElement>['current'];
  }) => void;
  dropAlign?: {
    top?: 'top' | 'bottom';
    bottom?: 'top' | 'bottom';
    right?: 'left' | 'right';
    left?: 'left' | 'right';
  };
  /** Target where the drop will be aligned to. This should be
   *  a React reference. Typically, this is not required as the drop will be
   *  aligned to the DropButton itself by default
   */
  dropTarget?: object;
  /** Content to put inside the Drop */
  dropContent?: JSX.Element;
  /** Icon for drop content */
  dropIcon?: JSX.Element;
  /** Additional widgets to be placed next to the input */
  widgets?: {
    icon: JSX.Element;
    [x: string]: any;
  }[];
  /** Callback for when the drop is opened */
  onOpen?: (event: MouseEvent<HTMLButtonElement>) => void;
  /** Callback for when the drop is closed */
  onClose?: (event: MouseEvent<HTMLButtonElement>) => void;
  /** Callback for when a key is pressed */
  onKeyDown?: (event: MouseEvent<HTMLButtonElement>) => void;
  /** Callback for when a key is released */
  onKeyUp?: (event: MouseEvent<HTMLButtonElement>) => void;
  /** functio n to be called on update */
  update?: (fn: (value: string) => void) => void;
  /** default value for uncontrolled mode */
  defaultValue?: string | number;
}

export type IDropInputProps = IDropInputOwnProps &
  TextInputProps &
  Omit<
    JSX.IntrinsicElements['input'],
    'defaultValue' | 'onSelect' | 'size' | 'placeholder' | 'onChange' | 'ref'
  >;
