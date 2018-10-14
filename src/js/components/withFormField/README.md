## undefined
undefined

## Usage

```javascript
$ npm install grommet-controls

    import { Form, undefined } from 'grommet-controls';

    <Form>
      <undefined name='xxx' label='xxx' validation={[validators.required()]} />
    </Form>  

```

## Properties

**name**

Name of the field.

```
string
```

**label**

String label to be used for the field, will also be used in validation errors.

```
string
```

**controlLabel**

Can be used if the underlying control has a label property (ie CheckBox).

```
node
```

**inField**

Set to false if the field should not be placed inside a FormField. Defaults to `true`.

```
boolean
```

**validation**

Validation rules, will be chained.

```
array
```
  