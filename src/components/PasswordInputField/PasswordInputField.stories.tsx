import React from 'react';
import { Box, Button } from 'grommet';
import { PasswordInputField } from './PasswordInputField';
import { Form, validators } from '../../index';

export default {
  title: 'validation/PasswordInputField',
  component: PasswordInputField,
};

export const main = () => (
  <Form
    onSubmit={() => console.log('onSubmit')}
    pad={{ horizontal: 'small' }}
    focusFirstChild={false}
  >
    <PasswordInputField
      label="Password"
      name="password"
      validation={[validators.required()]}
    />
    <Box pad="small">
      <Button type="submit" label="Submit" />
    </Box>
  </Form>
);

export const inField = () => (
  <Form
    onSubmit={() => console.log('onSubmit')}
    pad={{ horizontal: 'small' }}
    focusFirstChild={false}
  >
    <PasswordInputField
      label="Password"
      name="password"
      inField={false}
      validation={[validators.required()]}
    />
    <Box pad="small">
      <Button type="submit" label="Submit" />
    </Box>
  </Form>
);

export const validation = () => (
  <Form
    onSubmit={() => console.log('onSubmit')}
    pad={{ horizontal: 'small' }}
    focusFirstChild={false}
  >
    <PasswordInputField
      label="Password"
      name="password"
      validation={[
        validators.required(),
        validators.minLength(8),
        validators.alphaNumeric(),
      ]}
    />
    <Box pad="small">
      <Button type="submit" label="Submit" />
    </Box>
  </Form>
);
