## DateInput
A masked date entry field with a drop down calendar.
      All properties of MaskedInput apply
      

[![]([object Object])](https://github.com/atanasster/grommet-nextjs)
## Usage

```javascript

    $ npm install grommet-controls 
    import { DateInput } from 'grommet-controls';
    <DateInput value={...} />
    
```

## Properties

**autocorrect**

Use mask that wil attempt to auto-correct the entry as the user types

```
boolean
```

**disabled**

Setting to true causes the input to be disabled.

```
boolean
```

**bounds**

An array of two numbers indicating the limits on
        navigation in ISO8601 format

```
[string]
```

**disabledDates**

Multiple dates in ISO8601 format that should not be
        selectable. Items that are an array indicate a range of dates.

```
[
  string
  [string]
]
```

**firstDayOfWeek**

The first day of the week. 0 for Sunday. 1 for Monday.

```
0
1
```

**locale**

The locale to use.

```
string
```

**size**

Size of the calendar drop. Defaults to `small`.

```
small
medium
large
```

**value**

The date value is Date format of ISO string

```
new Date(...)
string
```
  