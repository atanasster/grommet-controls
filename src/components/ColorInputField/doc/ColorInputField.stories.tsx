import React from 'react';
import { Box, Button } from 'grommet';
import {
  Form, ColorInputField, validators, uiColors,
} from '../../../index';

export default {
  title: 'validation/ColorInputField',
  component: ColorInputField,
};


export const main = () => (
  <Form
    onSubmit={values => alert(JSON.stringify(values))}
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
    onSubmit={values => alert(JSON.stringify(values))}
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
