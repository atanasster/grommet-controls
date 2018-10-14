## undefined
A tag control with a label and icon.

## Usage

```javascript
$ npm install grommet-controls

    import { Tag } from 'grommet-controls';

    <Tag label={...} icon={...} />
```

## Properties

**a11yTitle**

Custom title to be used by screen readers.

```
string
```

**border**

Include a border.

```
top
left
bottom
right
horizontal
vertical
all
{
  color: string,
  side: 
    top
    left
    bottom
    right
    horizontal
    vertical
    all,
  size: 
    small
    medium
    large
}
```

**background**

Fill color for the tag.

```
string
```

**disabled**

Displays a disabled style for the tag

```
boolean
```

**focusable**

Whether the tag is focusable

```
boolean
```

**icon**

Icon element to place in the tag.

```
element
```

**label**

Label text to place next to the control.

```
node
```

**onClick**

Function that will be called when the user clicks the background/label of the tag, or presses the Enter key.

```
function
```

**onChange**

Function that will be called when the user clicks the icon on the tag, or presses the Space key.

```
function
```

**reverse**

Whether to show the label in front of the checkbox.

```
boolean
```

**round**

How much to round the corners of the tag.

```
xsmall
small
medium
large
full
```

**size**

The font size of the label.

```
xsmall
small
medium
large
xlarge
xxlarge
```
  