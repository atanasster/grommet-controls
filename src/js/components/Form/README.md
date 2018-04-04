## Form
A Form with built-in validation.
      

## Usage

```javascript

      $ npm install grommet-controls 
 
      import { Form } from 'grommet-controls'; 

      <Form onSubmit={...} />
    
```

## Properties

**a11yTitle**

Custom title to be used by screen readers.

```
string
```

**basis**

A fixed or relative size along the form's container main axis. Defaults to `medium`.

```
xsmall
small
medium
large
xlarge
full
1/2
1/3
2/3
1/4
3/4
auto
```

**focusFirstChild**

Whether to focus the first form control on mounting. Defaults to `true`.

```
boolean
```

**object**

Initial values of the form data object. Defaults to `{}`.

```
object
```

**onSubmit**

A function called when the user successfully submits the form.

```
function
```

**onChange**

A function invoked when any of the values in the form are changing.

```
function
```

**onSubmitError**

A function invoked when an error occured during submitting.

```
function
```

**onInvalidForm**

A function invoked on every change when the form is invalid.

```
function
```

**tag**

The DOM tag to use for the form. Defaults to `form`.

```
string
```
  