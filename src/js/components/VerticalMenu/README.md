## undefined
Hierarchical collapsible menu.

## Usage

```javascript
$ npm install grommet-controls

    import { VerticalMenu } from 'grommet-controls';

    <VerticalMenu items={...} onSelect={...} />
```

## Properties

**items**

Array of menu items.

```
[{
  id: string,
  label: node,
  expanded: boolean,
  icon: node,
  widget: node
}]
```

**activeItem**

Initially active menu item.

```
{
  id: string
}
```

**buttonClass**

Custom class to use for the button instead of RoutedButton.

```
string
function
```

**expandAll**

If specified, will expand all items with chidren.

```
boolean
```

**onSelect**

Function that will be called when the user selects a menu item.

```
function
```

**search**

If specified, will filter the items by the search terms.

```
string
```
  