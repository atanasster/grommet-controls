import React from 'react';
import { Box, Button, Text } from 'grommet';
import { action } from '@storybook/addon-actions';
import { Form } from '../Form';
import {
  TextInputField, PasswordInputField, SelectField, CheckBoxField,
  NumberInputField, validators,
} from '../../../index';

export default {
  title: 'CONTROLS|validation/Form',
  component: Form,
};

export const main = () => (
  <Form
    onSubmit={action('onSubmit')}
    pad={{
      horizontal: 'small',
    }}
  >
    <PasswordInputField label='Password' name='password' validation={[validators.required(), validators.minLength(8), validators.alphaNumeric()]} />
    <PasswordInputField label='Confirm Password' name='password1' validation={[validators.equalsField('password', 'the above password')]} />
    <TextInputField label='URL' name='url' validation={[validators.required(), validators.url()]} />
    <SelectField name='gender' options={['male', 'female']} validation={[validators.required()]} />
    <CheckBoxField name='tos' label='Terms of service' validation={[validators.required(), validators.True('Please accept the TOS')]} />
    <NumberInputField min={6} max={22} name='age' label='Age' validation={[validators.required(), validators.numeric(), validators.bigger(10), validators.smallerOrEqual(18)]} />
    <Box pad='small'>
      <Button type='submit' label='Submit' />
    </Box>
  </Form>
);

export const onSubmit = () => (
  <Form focusFirstChild={false} onSubmit={action('onSubmit')} basis='small'>
    <TextInputField label='Text' name='fieldname' />
  </Form>
        );
export const onChange = () => {
  const [changedValue, setChangedValue] = React.useState('');
  return (
    <Box pad='small'>
      <Form
        focusFirstChild={false}
        onChange={(name, value) => {
          console.log(name, value);
          setChangedValue(value);
        }}
        basis='small'
      >
        <TextInputField label='Text' name='mytextinput' />
      </Form>
      <Text size='small'>
        {changedValue}
      </Text>
    </Box>
  );
};
export const onSubmitError = () => (
  <Box pad='small'>
    <Form
      focusFirstChild={false}
      onSubmit={action('onSubmit')}
      onSubmitError={action('onSubmitError')}
      basis='small'
    >
      <TextInputField label='Text' name='errofield' validation={[validators.required(), validators.minLength(8)]} />
    </Form>
  </Box>
        );
export const onInvalidForm = () => {
  const [invalid, setInvalid] = React.useState(undefined);
  return (
    <Box pad='small'>
      <Form
        focusFirstChild={false}
        onSubmit={action('onSubmit')}
        onInvalidForm={error => setInvalid(error)}
        onValidForm={() => setInvalid(undefined)}
        basis='small'
      >
        <TextInputField label='Text' name='invalidfield' validation={[validators.required(), validators.minLength(8)]} />
      </Form>
      <Text size='small'>
        {invalid ? 'invalid' : 'valid'}
      </Text>
    </Box>

  );
};
