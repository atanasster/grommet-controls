import { MouseEvent } from 'react';
import { DateFormat } from '../../utils/moment';

export interface INotificationProps {
  /** Custom title to be used by screen readers */
  a11yTitle?: string,
  /** Status color */
  status?: 'ok' | 'info' | 'warning' | 'error' | 'unknown' | 'disabled',
  /** The font size of the notification message */
  size?: 'small' | 'medium' | 'large',
  /** State label */
  state?: string,
  /** Heading bold state */
  strong?: boolean,
  /** Message to be displayed */
  message?: string,
  /** Notification icon */
  icon?: boolean | React.ReactNode,
  /** Closer icon */
  closer?: boolean | React.ReactNode,
  /** Function that will be called when the user closes the notification */
  onClose?: (event: MouseEvent<HTMLButtonElement>) => void,
  /** Percent complete Meter for task notifications */
  percentComplete?: number,
  /** Timestamp for the notification (Date) */
  timestamp?: DateFormat,
  /** The locale to use for timestamp, if provided */
  locale?: string,
  /** If true, reverse the order of the Notification elements */
  reverse?: boolean,
}
