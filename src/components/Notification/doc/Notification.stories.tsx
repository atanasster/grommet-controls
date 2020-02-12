import React from 'react';
import { Grommet, CircleQuestion } from 'grommet-icons';
import { action } from '@storybook/addon-actions';
import { Notification } from '../Notification';

export default {
  title: 'CONTROLS/controls/Notification',
  component: Notification,
};

const onClose = action('Close clicked');

export const main = props => (
  <Notification
    {...props}
  />
);

main.story = {
  parameters: {
    controls: {
      border: {
        type: 'object',
        value: {
          color: {
            type: 'color', value: 'brand',
          },
          size: {
            type: 'options', options: ['xsmall', 'small', 'medium', 'large', 'xlarge'], value: 'medium',

          },
          side: {
            type: 'options', options: ['top', 'left', 'bottom', 'right', 'horizontal', 'vertical', 'all'], value: 'all',
          },
        },
      },
      message: { type: 'text', value: 'Message heading' },
      state: { type: 'text', value: 'state label' },
      timestamp: { type: 'date', value: new Date() },
      strong: { type: 'boolean', value: true },
      percentComplete: {
        type: 'number', value: 30, min: 0, max: 100, range: true,
      },
      status: {
        type: 'options',
        options: ['ok', 'info', 'warning', 'error', 'unknown', 'disabled'],
        value: 'ok',

      },
      onClose: { type: 'button', value: onClose },
    },
  },
};


export const a11yTitle = () => (
  <Notification
    a11yTitle='Close notification'
    onClose={onClose}
  />
);
export const status = () => (
  <Notification
    message='Message heading'
    status='info'
    onClose={onClose}
  />
);
export const state = () => (
  <Notification
    message='Message heading'
    state='state note'
    status='warning'
    size='small'
    onClose={onClose}
  />
);
export const strong = () => (
  <Notification
    message='Bold message'
    strong={true}
    status='error'
    size='small'
    onClose={onClose}
  />
);
export const icon = () => (
  <Notification
    message='Custom icon'
    icon={<Grommet />}
    size='small'
    onClose={onClose}
  />
);
export const closer = () => (
  <Notification
    status='disabled'
    message='Custom closer'
    closer={<CircleQuestion />}
    size='small'
    onClose={onClose}
  />
);
export const percentComplete = () => (
  <Notification
    status='info'
    message='Task percentage'
    percentComplete={80}
    size='small'
    onClose={onClose}
  />
);
export const timestamp = () => (
  <Notification
    message='Time stamp'
    timestamp={new Date()}
    size='small'
    onClose={onClose}
  />
);
export const locale = () => (
  <Notification
    message='Locale de-DE'
    timestamp={new Date()}
    locale='de-DE'
    size='small'
    onClose={onClose}
  />
);
export const size = () => (
  <Notification
    message='Large'
    size='large'
    onClose={onClose}
  />
);
export const reverse = () => (
  <Notification
    message='reversed'
    size='small'
    reverse={true}
    onClose={onClose}
  />
);
