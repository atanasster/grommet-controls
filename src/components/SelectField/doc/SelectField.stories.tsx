import React from 'react';
import { Box, Button } from 'grommet';
import {
  Form, SelectField, validators,
} from '../../../index';

export default {
  title: 'validation/SelectField',
  component: SelectField,
};


export const main = () => (
  <Form
    onSubmit={values => alert(JSON.stringify(values))}
    pad={{ horizontal: 'small' }}
    focusFirstChild={false}
  >
    <SelectField
      label='Country'
      name='country'
      options={['USA', 'England', 'France']}
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
    <SelectField
      label='Country'
      name='country'
      inField={false}
      options={['USA', 'England', 'France']}
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
    <SelectField
      label='Country'
      name='country'
      options={['USA', 'England', 'France']}
      validation={[
        validators.required(),
      ]}
    />
    <Box pad='small'>
      <Button type='submit' label='Submit' />
    </Box>
  </Form>
);
