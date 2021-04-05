import React from 'react';
import { Box, Button } from 'grommet';
import { Document, Example } from '@component-controls/core';
import { TextInputField } from './TextInputField';
import { Form, validators } from '../../index';

export default {
  title: 'validation/TextInputField',
  component: TextInputField,
} as Document;

export const main: Example = () => (
  <Form
    onSubmit={() => console.log('onSubmit')}
    pad={{ horizontal: 'small' }}
    focusFirstChild={false}
  >
    <TextInputField
      label="City"
      name="city"
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
    <TextInputField
      label="City"
      name="city"
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
    <TextInputField
      label="Zip code"
      name="zip_code"
      validation={[
        validators.required(),
        validators.numeric(),
        validators.minLength(5),
      ]}
    />
    <Box pad="small">
      <Button type="submit" label="Submit" />
    </Box>
  </Form>
);
