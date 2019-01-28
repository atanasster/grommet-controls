## undefined
A masked number input, with widgets to increment/decrement the value.
      Additionally, all properties of MaskedInput apply
      

## Usage

```javascript

      $ npm install grommet-controls
 
      import { NumberInput } from 'grommet-controls';

      <NumberInput value={...} />
    
```

## Properties

**a11yIncrement**

Custom increment button title to be used by screen readers.

```
string
```

**a11yDecrement**

Custom increment button title to be used by screen readers.

```
string
```

**decimals**

How many digits to allow after the decimal. Defaults to `null`.

```
number
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
number
```

**disabled**

Setting to true causes the input to be disabled.

```
boolean
```

**addIcon**

Icon for button to increment by step.

```
element
```

**subtractIcon**

Icon for button to subtract a step.

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

**integers**

Limit on the length of the integer number. Defaults to `unlimited`.

```
number
```
  