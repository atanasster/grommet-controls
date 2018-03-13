## MaskedInput
A masked Input control with an optional drop button with the specified 'dropContent'.

## Usage

```javascript

    $ npm install grommet-controls 
    import { MakedInput } from 'grommet-controls';
    <MakedInput mask={...} />
    
```

## Properties

**a11yTitle**

Custom title to be used by screen readers.

```
string
```

**a11yDropTitle**

Custom drop button title to be used by screen readers.

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

**mask**

An array or a function that defines how the user input is going to be masked.

```
array
function
boolean
{
  mask: 
    array
    function,
  pipe: function
}
```

**guide**

When masked, a boolean that tells the component whether to be in guide or no guide mode. Defaults to `true`.

```
boolean
```

**pipe**

When masked, a function that will give you the opportunity to modify the conformed value before it is displayed on the screen.

```
function
```

**placeholderChar**

When masked, represents the fillable spot in the mask. Defaults to ` `.

```
string
```

**keepCharPositions**

For masked. When true, adding or deleting characters will not affect the positions of existing characters.
      When false, adding characters causes existing characters to advance. And deleting characters causes existing characters to move back.

```
boolean
```

**showMask**

When masked, displays the mask as a placeholder in place of the regular placeholder.

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
  