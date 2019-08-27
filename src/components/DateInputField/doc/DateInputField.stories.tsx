import React from 'react';
import { Box, Button } from 'grommet';
import {
  Form, DateInputField, validators,
} from '../../../index';
import { smallDate } from '../../../utils/moment';

export default {
  title: 'validation/DateInputField',
  component: DateInputField,
};


export const main = () => (
  <Form
    onSubmit={values => alert(JSON.stringify(values))}
    pad={{ horizontal: 'small' }}
    focusFirstChild={false}
  >
    <DateInputField
      name='date'
      label='Date'
      validation={[validators.required()]}
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
    <DateInputField
      name='date'
      label='Date'
      inField={false}
      validation={[validators.required()]}
    />

    <Box pad='small'>
      <Button type='submit' label='Submit' />
    </Box>
  </Form>
);

export const maskFormat = () => {
  const [form] = React.useState({ date: smallDate(new Date(), 'es-ES') });
  return (
    <Form
      onSubmit={values => alert(JSON.stringify(values))}
      pad={{ horizontal: 'small' }}
      focusFirstChild={false}
      object={form}
    >
      <DateInputField
        name='date'
        autocorrect={true}
        maskFormat='dd mm yyyy'
        locale='es-ES'
        label='Ingreso'
        validation={[validators.required('Seleccione fecha de ingreso')]}
      />
      <Box pad='small'>
        <Button type='submit' label='Submit' />
      </Box>
    </Form>
  );
};


export const validation = () => (
  <Form
    onSubmit={values => alert(JSON.stringify(values))}
    pad={{ horizontal: 'small' }}
    focusFirstChild={false}
  >
    <DateInputField
      name='date'
      label='Date'
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
    <Box pad='small'>
      <Button type='submit' label='Submit' />
    </Box>
  </Form>
);
