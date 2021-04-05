import React from 'react';
import { Box, Button } from 'grommet';
import { Document, Example } from '@component-controls/core';
import { NumberInputField } from './NumberInputField';
import { Form, validators } from '../../index';

export default {
  title: 'validation/NumberInputField',
  component: NumberInputField,
} as Document;

export const main: Example = () => (
  <Form
    onSubmit={() => console.log('onSubmit')}
    pad={{ horizontal: 'small' }}
    focusFirstChild={false}
  >
    <NumberInputField
      name="age"
      label="Age"
      validation={[validators.required()]}
    />
    <Box pad="small">
      <Button type="submit" label="Submit" />
    </Box>
  </Form>
);

export const inField: Example = () => (
  <Form
    onSubmit={() => console.log('onSubmit')}
    pad={{ horizontal: 'small' }}
    focusFirstChild={false}
  >
    <NumberInputField
      name="age"
      label="Age"
      inField={false}
      validation={[validators.required()]}
    />
    <Box pad="small">
      <Button type="submit" label="Submit" />
    </Box>
  </Form>
);

export const validation: Example = () => (
  <Form
    onSubmit={() => console.log('onSubmit')}
    pad={{ horizontal: 'small' }}
    focusFirstChild={false}
  >
    <NumberInputField
      min={6}
      max={22}
      name="age"
      label="Age"
      validation={[
        validators.required(),
        validators.numeric(),
        validators.bigger(10),
        validators.smallerOrEqual(18),
      ]}
    />
    <Box pad="small">
      <Button type="submit" label="Submit" />
    </Box>
  </Form>
);
