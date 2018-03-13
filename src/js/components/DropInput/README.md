## DropInput
An Input control with an optional drop button with the specified 'dropContent' or widgets.

[![]([object Object])](https://github.com/atanasster/grommet-nextjs)
## Usage

```javascript

    $ npm install grommet-controls 
    import { DropInput } from 'grommet-controls';
    <DropInput dropContent={...} />
    
```

## Properties

**a11yTitle**

Custom title to be used by screen readers.

```
string
```

**a11yDropTitle**

Custom drop button title to be used by screen readers..

```
string
```

**placeholder**

Placeholder text to use when no value is provided.

```
string
```

**value**

Value for the field.

```
string
number
```

**id**

The id attribute of the input.

```
string
```

**name**

The name attribute of the input.

```
string
```

**disabled**

Setting to true causes the input to be disabled.

```
boolean
```

**onChange**

Function that will be called when the user enters a new valuu.

```
function
```

**focusIndicator**

Whether the plain text input should receive a focus outline.

```
boolean
```

**plain**

Whether this is a plain input with no border or padding.
Only use this when the containing context provides sufficient affordance

```
boolean
```

**dropContent**

Content to put inside the Drop.

```
element
```

**dropIcon**

Icon for drop content.

```
element
```

**widgets**

Additional widgets to be placed next to the input.

```
[{
  icon: element
}]
```

**onClose**

Callback for when the drop is closed

```
function
```
  