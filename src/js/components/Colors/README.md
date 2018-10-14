## undefined
A color selection element, with custom color palettes.
      

## Usage

```javascript

      $ npm install grommet-controls
 
      import { Colors } from 'grommet-controls';

      <Colors colors={...} />
    
```

## Properties

**colors**

Required. Color palette for the user to choose a color from.

```
object
```

**color**

The default selected color.

```
string
```

**onSelect**

Called with an object containing the selected color, rowName and colorName.

```
function
```

**size**

What size to make it.

```
small
medium
large
```

**columns**

The maximum number of colors per row, if left emty will be calculated automatically.

```
number
```

**wrap**

If true, will wrap any rows of colors that exceed the columns limit, otherwise will truncate larger rows.

```
boolean
```
  