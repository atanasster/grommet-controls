## NumberInput
A masked number input, with widgets to increment/decrement the value. Automatically converts the value to a numeric type, so you dont have to parse strings in your onChange event.
      Additionally, all properties of MaskedInput apply
      

## Usage

```javascript

      $ npm install grommet-controls
 
      import { NumberInput } from 'grommet-controls';

      <NumberInput value={...} />
    
```

## Properties

**a11yIncrement**

Custom increment button title to be used by screen readers. Defaults to `Increment by`.

```
string
```

**a11yDecrement**

Custom increment button title to be used by screen readers. Defaults to `Decrement by`.

```
string
```

**min**

Minimum value.

```
number
```

**max**

Maximum value.

```
number
```

**step**

Steps to increase and decrease by. Defaults to `1`.

```
number
```

**value**

The numeric value

```
string
```

**disabled**

Setting to true causes the input to be disabled.

```
boolean
```

**addIcon**

Icon for button to increment by step. Defaults to `{
  "key": null,
  "ref": null,
  "props": {},
  "_owner": null,
  "_store": {}
}`.

```
element
```

**subtractIcon**

Icon for button to subtract a step. Defaults to `{
  "key": null,
  "ref": null,
  "props": {},
  "_owner": null,
  "_store": {}
}`.

```
element
```

**prefix**

What to display in front of the value.

```
string
```

**suffix**

What to display at the end of the value.

```
string
```

**thousandsSeparatorSymbol**

A character with which to separate thousands.

```
string
```

**decimalLimit**

How many digits to allow after the decimal. Defaults to `2`.

```
number
```

**integerLimit**

Limit on the length of the integer number. Defaults to `unlimited`.

```
number
```

**updateToString**

Whether pass the value as a string in the onChange event. Defaults to `false`.

```
boolean
```
  