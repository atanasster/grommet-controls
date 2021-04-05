import React from 'react';
import { Box, Button } from 'grommet';
import { Document, Example } from '@component-controls/core';
import { SelectField } from './SelectField';
import { Form, validators } from '../../index';

export default {
  title: 'validation/SelectField',
  component: SelectField,
} as Document;

export const main: Example = () => (
  <Form
    onSubmit={() => console.log('onSubmit')}
    pad={{ horizontal: 'small' }}
    focusFirstChild={false}
  >
    <SelectField
      label="Country"
      name="country"
      options={['USA', 'England', 'France']}
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
    <SelectField
      label="Country"
      name="country"
      inField={false}
      options={['USA', 'England', 'France']}
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
    <SelectField
      label="Country"
      name="country"
      options={['USA', 'England', 'France']}
      validation={[validators.required()]}
    />
    <Box pad="small">
      <Button type="submit" label="Submit" />
    </Box>
  </Form>
);
