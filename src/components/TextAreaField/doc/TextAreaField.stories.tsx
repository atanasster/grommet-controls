import React from 'react';
import { Box, Button } from 'grommet';
import {
  Form, TextAreaField, validators,
} from '../../../index';

export default {
  title: 'validation/TextAreaField',
  component: TextAreaField,
};


export const main = () => (
  <Form
    onSubmit={values => alert(JSON.stringify(values))}
    pad={{ horizontal: 'small' }}
    focusFirstChild={false}
  >
    <TextAreaField
      rows={3}
      label='Short bio'
      name='bio'
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
    <TextAreaField
      rows={6}
      label='Short bio'
      name='bio'
      inField={false}
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
    <TextAreaField
      rows={6}
      label='Short bio'
      name='bio'
      validation={[
        validators.required(),
      ]}
    />
    <Box pad='small'>
      <Button type='submit' label='Submit' />
    </Box>
  </Form>
);
