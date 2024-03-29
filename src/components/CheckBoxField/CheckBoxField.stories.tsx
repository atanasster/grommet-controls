import React from 'react';
import { Box, Button, Text } from 'grommet';
import { Document, Example } from '@component-controls/core';
import { CheckBoxField } from './CheckBoxField';
import { Form, validators } from '../../index';

export default {
  title: 'validation/CheckBoxField',
  component: CheckBoxField,
} as Document;

export const main: Example = () => (
  <Form
    onSubmit={() => console.log('onSubmit')}
    pad={{ horizontal: 'small' }}
    focusFirstChild={false}
  >
    <CheckBoxField
      name="tos"
      label="Terms of service"
      validation={[
        validators.required(),
        validators.True('Please accept the TOS'),
      ]}
    />
    <Box pad="small">
      <Button type="submit" label="Submit" />
    </Box>
  </Form>
);

export const controlLabel: Example = () => (
  <Form
    onSubmit={() => console.log('onSubmit')}
    pad={{ horizontal: 'small' }}
    focusFirstChild={false}
  >
    <CheckBoxField
      name="tos"
      controlLabel={<Text weight="bold">Terms of service</Text>}
      label="Terms of service"
      validation={[
        validators.required(),
        validators.True('Please accept the TOS'),
      ]}
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
    <CheckBoxField name="tos" inField={false} label="Terms of service" />
    <Box pad="small">
      <Button type="submit" label="Submit" />
    </Box>
  </Form>
);
