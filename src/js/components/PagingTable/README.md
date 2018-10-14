## undefined
A Grommet 2 table component with pagination, filtering, footer, child rows and grouping. Derived from https://github.com/react-tools/react-table. 

## Usage

```javascript

    $ npm install grommet-controls

    import { PagingTable } from 'grommet-controls';

    <PagingTable columns={...} data={...} />

```

## Properties

**decorations**

Visual settings of the various table elements. Where applicable, those settings can be overriden at the column level.

```
{
  table: object,
  header: object,
  headerGroup: object,
  filter: object,
  filterInput: object,
  body: object,
  row: object,
  rowOdd: object,
  rowEven: object,
  cell: object,
  footer: object,
  pagination: object,
  expander: object
}
```

**columns**

Required. Array of column descriptors.

```
[{
  Cell: 
    element
    string
    function,
  Header: 
    element
    string
    function,
  Footer: 
    element
    string
    function,
  Aggregated: 
    element
    string
    function,
  Pivot: 
    element
    string
    function,
  PivotValue: 
    element
    string
    function,
  Expander: 
    element
    string
    function,
  Filter: 
    element
    function,
  accessor: string,
  decorations: object,
  sortable: boolean,
  resizable: boolean,
  filterable: boolean,
  show: boolean,
  minWidth: number,
  getProps: function,
  aggregate: function,
  getHeaderProps: function,
  getFooterProps: object,
  filterMethod: function,
  filterAll: boolean,
  sortMethod: function
}]
```

**data**

Required. Array of data objects.

```
array
```

**defaultPageSize**

Default page size. Defaults to `20`.

```
number
```

**defaultSorted**

Array of default sorted columns and their sort order.

```
[{
  id: string,
  desc: boolean
}]
```

**onFetchData**

If specified, a function responsible for loading the data.

```
function
```

**filterable**

Wheter to display a filtering row.

```
boolean
```

**loading**

Wheter to display the loading indicator.

```
boolean
```

**manual**

If true, the data is sorted manually in the onFetchData function.

```
boolean
```

**pages**

Number of total pages of data, when loading the data manually.

```
number
```

**pageSizeOptions**

Array of available page size options ([5, 10, 20, 25, 50, 100]).

```
[number]
```

**pivotBy**

Array of columns to pivot (group) by.

```
[string]
```

**resizable**

Wheter the columns can be resized. Defaults to `true`.

```
boolean
```

**showPagination**

Wheter to display a paging row. Defaults to `true`.

```
boolean
```

**sortable**

Wheter the table headers will allow sorting of the of the data. Defaults to `true`.

```
boolean
```

**SubComponent**

If specified, a function with (row as parameter) to render the expading row. Defaults to `true`.

```
function
```
  