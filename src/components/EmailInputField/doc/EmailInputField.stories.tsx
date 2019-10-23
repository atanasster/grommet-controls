import React from 'react';
import { Box, Button } from 'grommet';
import { action } from '@storybook/addon-actions';
import { EmailInputField } from '../EmailInputField';
import {
  Form, validators,
} from '../../../index';

export default {
  title: 'CONTROLS|validation/EmailInputField',
  component: EmailInputField,
};


export const main = () => (
  <Form
    onSubmit={action('onSubmit')}
    pad={{ horizontal: 'small' }}
    focusFirstChild={false}
  >
    <EmailInputField
      name='email'
      label='E-mail'
      validation={[validators.required()]}
    />
    <Box pad='small'>
      <Button type='submit' label='Submit' />
    </Box>
  </Form>
);

export const inField = () => (
  <Form
    onSubmit={action('onSubmit')}
    pad={{ horizontal: 'small' }}
    focusFirstChild={false}
  >
    <EmailInputField
      name='email'
      label='E-mail'
      inField={false}
      validation={[validators.required()]}
    />

    <Box pad='small'>
      <Button type='submit' label='Submit' />
    </Box>
  </Form>
);

export const validation = () => (
  <Form
    onSubmit={action('onSubmit')}
    pad={{ horizontal: 'small' }}
    focusFirstChild={false}
  >
    <EmailInputField
      name='email'
      label='E-mail'
      validation={[
        validators.required(),
        validators.minLength(10),
      ]}
    />
    <Box pad='small'>
      <Button type='submit' label='Submit' />
    </Box>
  </Form>
);
