import React from 'react';
import { Box, Button } from 'grommet';
import { Document, Example } from '@component-controls/core';
import { TextAreaField } from './TextAreaField';
import { Form, validators } from '../../index';

export default {
  title: 'validation/TextAreaField',
  component: TextAreaField,
} as Document;

export const main: Example = () => (
  <Form
    onSubmit={() => console.log('onSubmit')}
    pad={{ horizontal: 'small' }}
    focusFirstChild={false}
  >
    <TextAreaField rows={3} label="Short bio" name="bio" />
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
    <TextAreaField rows={6} label="Short bio" name="bio" inField={false} />
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
    <TextAreaField
      rows={6}
      label="Short bio"
      name="bio"
      validation={[validators.required()]}
    />
    <Box pad="small">
      <Button type="submit" label="Submit" />
    </Box>
  </Form>
);
