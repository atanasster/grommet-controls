import React from 'react';
import { Grommet, CircleQuestion } from 'grommet-icons';
import { ControlTypes } from '@component-controls/core';
import { Notification } from './Notification';

export default {
  title: 'controls/Notification',
  component: Notification,
};

const onClose = () => console.log('Close clicked');

export const main = props => <Notification {...props} />;

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

export const a11yTitle = () => (
  <Notification a11yTitle="Close notification" onClose={onClose} />
);
export const status = () => (
  <Notification message="Message heading" status="info" onClose={onClose} />
);
export const state = () => (
  <Notification
    message="Message heading"
    state="state note"
    status="warning"
    size="small"
    onClose={onClose}
  />
);
export const strong = () => (
  <Notification
    message="Bold message"
    strong={true}
    status="error"
    size="small"
    onClose={onClose}
  />
);
export const icon = () => (
  <Notification
    message="Custom icon"
    icon={<Grommet />}
    size="small"
    onClose={onClose}
  />
);
export const closer = () => (
  <Notification
    status="disabled"
    message="Custom closer"
    closer={<CircleQuestion />}
    size="small"
    onClose={onClose}
  />
);
export const percentComplete = () => (
  <Notification
    status="info"
    message="Task percentage"
    percentComplete={80}
    size="small"
    onClose={onClose}
  />
);
export const timestamp = () => (
  <Notification
    message="Time stamp"
    timestamp={new Date('Sun, Aug 30, 2020, 11:14 PM')}
    size="small"
    onClose={onClose}
  />
);
export const locale = () => (
  <Notification
    message="Locale de-DE"
    timestamp={new Date('Sun, Aug 30, 2020, 11:14 PM')}
    locale="de-DE"
    size="small"
    onClose={onClose}
  />
);
export const size = () => (
  <Notification message="Large" size="large" onClose={onClose} />
);
export const reverse = () => (
  <Notification
    message="reversed"
    size="small"
    reverse={true}
    onClose={onClose}
  />
);
