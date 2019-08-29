import React from 'react';
import { Box, Button } from 'grommet';
import {
  Form, TextInputField, validators,
} from '../../../index';

export default {
  title: 'CONTROLS|validation/TextInputField',
  component: TextInputField,
};


export const main = () => (
  <Form
    onSubmit={values => alert(JSON.stringify(values))}
    pad={{ horizontal: 'small' }}
    focusFirstChild={false}
  >
    <TextInputField
      label='City'
      name='city'
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
    <TextInputField
      label='City'
      name='city'
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
    onSubmit={values => alert(JSON.stringify(values))}
    pad={{ horizontal: 'small' }}
    focusFirstChild={false}
  >
    <TextInputField
      label='Zip code'
      name='zip_code'
      validation={[
        validators.required(),
        validators.numeric(),
        validators.minLength(5),
      ]}
    />
    <Box pad='small'>
      <Button type='submit' label='Submit' />
    </Box>
  </Form>
);
