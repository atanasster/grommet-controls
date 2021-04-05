import React from 'react';
import { Grommet, CircleQuestion } from 'grommet-icons';
import { ControlTypes, Document, Example } from '@component-controls/core';
import { Notification } from './Notification';
import { INotificationProps } from './NotificationProps';

export default {
  title: 'controls/Notification',
  component: Notification,
} as Document;

const onClose = () => console.log('Close clicked');

export const main: Example<INotificationProps> = props => (
  <Notification {...props} />
);

main.controls = {
  border: {
    type: ControlTypes.OBJECT,
    value: {
      color: {
        type: ControlTypes.COLOR,
        value: 'brand',
      },
      size: {
        type: ControlTypes.OPTIONS,
        options: ['xsmall', 'small', 'medium', 'large', 'xlarge'],
        value: 'medium',
      },
      side: {
        type: ControlTypes.OPTIONS,
        options: [
          'top',
          'left',
          'bottom',
          'right',
          'horizontal',
          'vertical',
          'all',
        ],
        value: 'all',
      },
    },
  },
  message: { type: ControlTypes.TEXT, value: 'Message heading' },
  state: { type: ControlTypes.TEXT, value: 'state label' },
  timestamp: {
    type: ControlTypes.DATE,
    value: new Date('Sun, Aug 30, 2020, 11:14 PM'),
  },
  strong: { type: ControlTypes.BOOLEAN, value: true },
  percentComplete: {
    type: ControlTypes.NUMBER,
    value: 30,
    min: 0,
    max: 100,
    range: true,
  },
  status: {
    type: ControlTypes.OPTIONS,
    options: ['ok', 'info', 'warning', 'error', 'unknown', 'disabled'],
    value: 'ok',
  },
  onClose: { type: ControlTypes.BUTTON, value: onClose },
};

export const a11yTitle: Example = () => (
  <Notification a11yTitle="Close notification" onClose={onClose} />
);
export const status: Example = () => (
  <Notification message="Message heading" status="info" onClose={onClose} />
);
export const state: Example = () => (
  <Notification
    message="Message heading"
    state="state note"
    status="warning"
    size="small"
    onClose={onClose}
  />
);
export const strong: Example = () => (
  <Notification
    message="Bold message"
    strong={true}
    status="error"
    size="small"
    onClose={onClose}
  />
);
export const icon: Example = () => (
  <Notification
    message="Custom icon"
    icon={<Grommet />}
    size="small"
    onClose={onClose}
  />
);
export const closer: Example = () => (
  <Notification
    status="disabled"
    message="Custom closer"
    closer={<CircleQuestion />}
    size="small"
    onClose={onClose}
  />
);
export const percentComplete: Example = () => (
  <Notification
    status="info"
    message="Task percentage"
    percentComplete={80}
    size="small"
    onClose={onClose}
  />
);
export const timestamp: Example = () => (
  <Notification
    message="Time stamp"
    timestamp={new Date('Sun, Aug 30, 2020, 11:14 PM')}
    size="small"
    onClose={onClose}
  />
);
export const locale: Example = () => (
  <Notification
    message="Locale de-DE"
    timestamp={new Date('Sun, Aug 30, 2020, 11:14 PM')}
    locale="de-DE"
    size="small"
    onClose={onClose}
  />
);
export const size: Example = () => (
  <Notification message="Large" size="large" onClose={onClose} />
);
export const reverse: Example = () => (
  <Notification
    message="reversed"
    size="small"
    reverse={true}
    onClose={onClose}
  />
);
