import React from 'react';
import { Box, Button } from 'grommet';
import { action } from '@storybook/addon-actions';
import { ColorInputField } from '../ColorInputField';
import {
  Form, validators, uiColors,
} from '../../../index';

export default {
  title: 'CONTROLS/validation/ColorInputField',
  component: ColorInputField,
};


export const main = () => (
  <Form
    onSubmit={action('onSubmit')}
    pad={{ horizontal: 'small' }}
    focusFirstChild={false}
  >
    <ColorInputField
      name='color'
      colors={uiColors}
      label='Color'
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
    <ColorInputField
      name='colors'
      inField={false}
      colors={uiColors}
      label='Color'
    />
    <Box pad='small'>
      <Button type='submit' label='Submit' />
    </Box>
  </Form>
);
