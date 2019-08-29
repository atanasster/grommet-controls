import React from 'react';
import { Box, Button } from 'grommet';
import {
  Form, NumberInputField, validators,
} from '../../../index';

export default {
  title: 'CONTROLS|validation/NumberInputField',
  component: NumberInputField,
};


export const main = () => (
  <Form
    onSubmit={values => alert(JSON.stringify(values))}
    pad={{ horizontal: 'small' }}
    focusFirstChild={false}
  >
    <NumberInputField
      name='age'
      label='Age'
      validation={[
        validators.required(),
      ]}
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
    <NumberInputField
      name='age'
      label='Age'
      inField={false}
      validation={[
        validators.required(),
      ]}
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
    <NumberInputField
      min={6}
      max={22}
      name='age'
      label='Age'
      validation={[
        validators.required(),
        validators.numeric(),
        validators.bigger(10),
        validators.smallerOrEqual(18),
      ]}
    />
    <Box pad='small'>
      <Button type='submit' label='Submit' />
    </Box>
  </Form>
);
