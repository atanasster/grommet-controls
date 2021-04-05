import React from 'react';
import { Box, Button } from 'grommet';
import { Document, Example } from '@component-controls/core';
import { DateInputField } from './DateInputField';
import { Form, validators } from '../../index';

export default {
  title: 'validation/DateInputField',
  component: DateInputField,
} as Document;

export const main: Example = () => (
  <Form
    onSubmit={() => console.log('onSubmit')}
    pad={{ horizontal: 'small' }}
    focusFirstChild={false}
  >
    <DateInputField
      name="date"
      label="Date"
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
    <DateInputField
      name="date"
      label="Date"
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
    <DateInputField
      name="date"
      label="Date"
      validation={[
        validators.required(),
        (_row, value) => {
          if (value) {
            const date = new Date(value);
            if (date >= new Date('01/01/2000')) {
              return 'date must be before 01/01/2000';
            }
          }
          return undefined;
        },
      ]}
    />
    <Box pad="small">
      <Button type="submit" label="Submit" />
    </Box>
  </Form>
);
