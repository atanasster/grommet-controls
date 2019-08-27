import React, { MouseEvent } from 'react';
import {
 BoxProps, TextInputProps, ButtonProps, TextProps,
} from 'grommet';

export type IPagingTableRow = object;

export type IPagingTableFilter = object;

export interface IPagingTableDecorators {
  /** Table styling, all **`<Box />`** properties are valid */
  table?: BoxProps,
  /** Header cell styling, all **`<Box />`** properties are valid */
  header?: BoxProps,
  /** Grouped columns header styling, all **`<Box />`** properties are valid */
  headerGroup?: BoxProps,
  /** Filter row styling, all **`<Box />`** properties are valid */
  filter?: BoxProps,
  /** Filter input control styling, all **`<TextInput />`** properties are valid */
  filterInput?: TextInputProps,
  /** Body styling, all **`<Box />`** properties are valid */
  body?: BoxProps,
  /** Row of data styling, all **`<Box />`** properties are valid */
  row?: BoxProps,
  /** Odd row for striped styling, all **`<Box />`** properties are valid */
  rowOdd?: BoxProps,
  /** Even row for striped styling, all **`<Box />`** properties are valid */
  rowEven?: BoxProps,
  /** Cell of data styling, all **`<Box />`** properties are valid */
  cell?: BoxProps & TextProps,
  /** Footer row styling, all **`<Box />`** properties are valid */
  footer?: BoxProps,
  /** Pagination box styling, all **`<Box />`** properties are valid */
  pagination?: BoxProps,
  /** Expander button styling, all **`<Button />`** properties are valid,
  *  as well as icons OpenIcon and CloseIcon
  */
  expander?: { OpenIcon: React.ReactNode, CloseIcon: React.ReactNode } & ButtonProps,
}

export type FilterMethodType = (
  filter: IPagingTableFilter,
  row: IPagingTableRow,
  column?: IPagingTableColumn
) => boolean;

export interface IPagingTableColumn {
  /** id of the column */
  id?: string,
  /** Used to render a standard cell, defaults to the accessed value */
  Cell?: React.ReactNode,
  /** Used to render the header of a column or column group */
  Header?: React.ReactNode,
  /** Used to render the footer of a column or column group */
  Footer?: React.ReactNode,
  /** Used to render the aggregated value of a column or column group */
  Aggregated?: React.ReactNode,
  /** Used to render the pivot of a column or column group */
  Pivot?: React.ReactNode,
  /** Used to render the pivot value of a column or column group */
  PivotValue?: PivotValueComponent,
  /** Used to render the expander value of a column or column group */
  Expander?: ExpanderComponent,
  /** Used to render the filter of a column or column group */
  Filter?: React.ReactNode,

  // All Columns
  /** the field name (*)accessor) of the column data */
  accessor?: string,
  /** custom formating of the visuals of the column */
  decorations?: IPagingTableDecorators,
  /** whether the column can be sorted */
  sortable?: boolean,
  /** whether the column can be resized */
  resizable?: boolean,
  /** whether the column can be filtered */
  filterable?: boolean,
  /** whether the column is visible */
  show?: () => boolean | boolean,
  /** width of the column in pixels */
  width?: number,
  /** minimum width of the column in pixels */
  minWidth?: number,
  /** maximum width of the column in pixels */
  maxWidth?: number,
  /** function to return custom properties for each cell */
  getProps?: (
    state: IPagingTableState,
    rowInfo: IRowInfo,
    column: IPagingTableColumn,
  ) => IPagingTableColumn,
  /** function to perform rows aggregation */
  aggregate?: (rows: IPagingTableRow[]) => object,
  /** function to return custom properties for the column's header */
  getHeaderProps?: (
    state: IPagingTableState,
    rowInfo: IRowInfo,
    column: IPagingTableColumn,
  ) => IPagingTableColumn,

  /** function to return custom properties for the column's footer */
  getFooterProps?: (state: object, rowInfo: object, column: object) => object,

  /** custom filtering function for the column */
  filterMethod?: FilterMethodType,

  /** If true, willpass the entire dataset to the filter method */
  filterAll?: boolean,

  /** custom sorting function for the column */
  sortMethod?: (a, b, desc: boolean) => number,

  /** whether the column is pivoted */
  pivoted?: boolean,
  /** expander properties */
  expander?: IExpanderProps,
  /** column on click event handler */
  onClick?: (event?: MouseEvent<HTMLDivElement>, cb?: ()=> void) => void,
  /** list of child columns for grouped headers */
  columns?: IPagingTableColumn[],
}

export interface BoxClickProps {
  onClick?: (event?: MouseEvent<HTMLDivElement>, cb?: ()=> void) => void,
}
export type BoxComponentProps= (finalState: IPagingTableState,
    rowInfo: IRowInfo,
    column: IPagingTableColumn,
    Table?: React.ReactNode,
  ) => BoxProps & BoxClickProps;

export interface IPagingTableSort {
  id: string,
  desc?: boolean,
}

export interface IExpanderProps {
  sortable: boolean,
  resizable: boolean,
  filterable: boolean,
  width: number,
}

export interface IExpanderComponentProps {
  isExpanded?: boolean,
  children?: React.ReactNode,
  expanderProps?: IExpanderProps,
}
export type ExpanderComponent = React.ElementType<IExpanderComponentProps>;

export interface IPivotValueComponentProps {
  subRows: object[],
  value: any,
}

export type PivotValueComponent = React.ElementType<IPivotValueComponentProps>;

export interface IFilteredProps {
  id: string,
  value: number,
}

export interface IResizedProps {
  id: string,
  value: number,
}

export interface IDataObject {
  [x: string]: any,
}
export interface IRowInfo {
  original: IDataObject,
  row: IDataObject,
  index: number,
  viewIndex: number,
  pageSize: number,
  page: number,
  level: number,
  nestingPath: string[],
  aggregated: string,
  groupedByPivot: string,
  subRows: string[],
}
export type IGetPropsFunc = (
  finalState: IPagingTableState,
  rowInfo: IRowInfo,
  column: IPagingTableColumn,
  Table?: React.ReactNode,
) => IPagingTableProps;

export interface IPagingTableProps {
  /** Visual settings of the various table elements.
  *  Where applicable, those settings can be overriden at the column level
  */
  decorations?: IPagingTableDecorators,
  /** Array of column descriptors */
  columns?: IPagingTableColumn[],
  /** Array of data objects */
  data?: IDataObject[],
  /** Default page size */
  defaultPageSize?: number,
  /** If specified, a function responsible for loading the data */
  onFetchData?: (props : object, Table?: React.ReactNode) => void,
  /** Whether to display a filtering row */
  filterable?: boolean,
  /** The default filtered rows */
  defaultFiltered?: IFilteredProps[],
  /** Callback to be called when the filter changes */
  onFilteredChange?: (
    newFiltering: IFilteredProps[],
    column: IPagingTableColumn,
    value: any,
  ) => void,
  /** Whether to display the loading indicator */
  loading?: boolean,
  /** If true, the data is sorted manually in the onFetchData function */
  manual?: boolean,
  /** Number of total pages of data, when loading the data manually */
  pages?: number,
  /** Array of available page size options ([5, 10, 20, 25, 50, 100]) */
  pageSizeOptions?: number[],
  /** Minimum number of rows to display, even if no data is present */
  minRows?: number,
  /** callback method called when the page changes */
  onPageChange?: (page: number) => void,
  /** callback method called when the page size changes */
  onPageSizeChange?: (newPageSize: number, newPage: number) => void,
  /** Array of columns to pivot (group) by */
  pivotBy?: string[],
  /** Default properties to be passed to the pivot component */
  pivotDefaults?: object,
  /** Whether the columns can be resized */
  resizable?: boolean,
  /** The default resized columns */
  defaultResized?: IResizedProps[],
  /** callback method called when a column is resized */
  onResizedChange?: (newResized: IResizedProps[], event?: MouseEvent<HTMLDivElement>) => void,
  /** Whether to display a paging row */
  showPagination?: boolean,
  /** Whether to display a paging row on top of the table */
  showPaginationTop?: boolean,
  /** Whether to display a paging row at the bottom of the table */
  showPaginationBottom?: boolean,
  /** Wheter the table headers will allow sorting of the of the data */
  sortable?: boolean,
  /** Array of default sorted columns and their sort order */
  defaultSorted?: IPagingTableSort[],
  /** custom default sorting function */
  defaultSortMethod?: (a, b, desc: boolean) => number,
  /** Whether to allow multi-column sorting */
  multiSort?: boolean,
  /** Whether the default sorting is descending */
  defaultSortDesc?: boolean,
  /** callback called when sorted changes */
  onSortedChange?: (
    newSorted: IPagingTableSort[],
    column: IPagingTableColumn,
    additive: boolean,
  ) => void,
  /** groups of the header columns */
  headerGroups?: IPagingTableColumn[],
  /** whether the table has any header groups */
  hasHeaderGroups?: boolean,
  /** react node for the expander sub row */
  SubComponent?: (row: IRowInfo) => React.ReactNode,
  /** Whether to collapse expanded rows on sorting change */
  collapseOnSortingChange?: boolean,
  /** Whether to collapse expanded rows on page change */
  collapseOnPageChange?: boolean,
  /** Whether to collapse expanded rows on data change */
  collapseOnDataChange?: boolean,
  /** Whether to freeze expanded rows */
  freezeWhenExpanded?: boolean,
  /** The default expanded rows */
  defaultExpanded?: object,
  /** The default column properties */
  column?: IPagingTableColumn,
  /** list of the visible columns */
  allVisibleColumns?: IPagingTableColumn[],
  /** The default properties of the expander */
  expanderDefaults?: IExpanderProps,
  /** default properties for expander Box */
  expanderTdDefaultProps?: BoxProps,
  /** callback called when the expanded changes on a row */
  onExpandedChange?: (
    newExpanded: IExpanderProps,
    path: string[],
    event?: MouseEvent<HTMLDivElement>,
  ) => void,
  /** The string text for 'Previous' pagination link */
  previousText?: string,
  /** The string text for 'Next' pagination link */
  nextText?: string,
  /** The string text for 'loading' label */
  loadingText?: string,
  /** The string text for 'no data' label */
  noDataText?: string,
  /** The string text for 'Page' pagination label */
  pageText?: string,
  /** The string text for 'of' pagination label */
  ofText?: string,
  /** The string text for 'rows' filtering label */
  rowsText?: string,
  // Key Constants
  /** String key for pivot value */
  pivotValKey?: string,
  /** String key for pivot id */
  pivotIDKey?: string,
  /** String key for sub rows */
  subRowsKey?: string,
  /** String key for aggregated */
  aggregatedKey?: string,
  /** String key for nesting level */
  nestingLevelKey?: string,
  /** String key for original */
  originalKey?: string,
  /** String key for index */
  indexKey?: string,
  /** String key for group by pivot */
  groupedByPivotKey?: string,

  /** React component to render the table element */
  TableComponent?: React.ElementType,
  /** React component to render the thead element */
  TheadComponent?: React.ElementType,
  /** React component to render the tbody element */
  TbodyComponent?: React.ElementType,
  /** React component to render the tr group element */
  TrGroupComponent?: React.ElementType,
  /** React component to render the tr element */
  TrComponent?: React.ElementType,
  /** React component to render the th element */
  ThComponent?: React.ElementType,
  /** React component to render the td element */
  TdComponent?: React.ElementType,
  /** React component to render the cell text element */
  CellTextComponent?: React.ElementType,
  /** React component to render the tfoot element */
  TfootComponent?: React.ElementType,
  /** React component to render the pagination element */
  PaginationComponent?: React.ElementType,
  /** React component to render the loading element */
  LoadingComponent?: React.ElementType,
  /** React component to render the 'no-data' element */
  NoDataComponent?: React.ElementType,
  /** React component to render the resizer element */
  ResizerComponent?: React.ElementType,
  /** React component to render the expander element */
  ExpanderComponent?: ExpanderComponent,
  /** React component to render the pivot value element */
  PivotValueComponent?: PivotValueComponent,
  /** React component to render the pivot element */
  PivotComponent?: React.ElementType,
  /** React component to render the aggregated element */
  AggregatedComponent?: React.ElementType,
  /** React component to render the filter element */
  FilterComponent?: React.ElementType,
  /** React component to render the pad row(empty row) element */
  PadRowComponent?: React.ElementType,
  /** function to return custom props */
  getProps?: IGetPropsFunc,
  /** function to return custom props for the table element */
  getTableProps?: BoxComponentProps,
  /** function to return custom props for the thead group lement */
  getTheadGroupProps?: BoxComponentProps,
  /** function to return custom props for the thead group tr element */
  getTheadGroupTrProps?: BoxComponentProps,
  /** function to return custom props for the thead element */
  getTheadProps?: BoxComponentProps,
  /** function to return custom props for the thead tr element */
  getTheadTrProps?: BoxComponentProps,
  /** function to return custom props for the thead th element */
  getTheadThProps?: BoxComponentProps,
  /** function to return custom props for the thead filter element */
  getTheadFilterProps?: BoxComponentProps,
  /** function to return custom props for the thead filter tr element */
  getTheadFilterTrProps?: BoxComponentProps,
  /** function to return custom props for the thead filter th element */
  getTheadFilterThProps?: BoxComponentProps,
  /** function to return custom props for the thead filter input element */
  getFilterInputProps?: IGetPropsFunc,
  /** function to return custom props for the tbody element */
  getTbodyProps?: BoxComponentProps,
  /** function to return custom props for the group tr element */
  getTrGroupProps?: BoxComponentProps,
  /** function to return custom props for the tr element */
  getTrProps?: (
    rowIndex: number,
    finalState: IPagingTableState,
    rowInfo: IRowInfo,
    column: IPagingTableColumn,
    Table?: React.ReactNode,
  ) => BoxProps & BoxClickProps,
  /** function to return custom props for the group td element */
  getTdProps?: BoxComponentProps,
  /** function to return custom props for the expander element */
  getExpanderProps?: IGetPropsFunc,
  /** function to return custom props for the tfoot element */
  getTfootProps?: BoxComponentProps,
  /** function to return custom props for the tfoot tr element */
  getTfootTrProps?: BoxComponentProps,
  /** function to return custom props for the tfoot td element */
  getTfootTdProps?: BoxComponentProps,
  /** function to return custom props for the pagination element */
  getPaginationProps?: BoxComponentProps,
  /** function to return custom props for the loading element */
  getLoadingProps?: BoxComponentProps,
  /** function to return custom props for the 'no data' element */
  getNoDataProps?: BoxComponentProps,
  /** function to return custom props for the resizer element */
  getResizerProps?: BoxComponentProps,
}

export interface IPagingTableStateProps {
  page?: number,
  pageSize?: number,
  sorted?: IPagingTableSort[],
  expanded?: object,
  filtered?: IFilteredProps[],
  resized?: IResizedProps[],
  currentlyResizing?: {
    id: string,
    startX: number,
    parentWidth: number,
  },
  skipNextSort?: boolean,
  frozen?: boolean,
  freezeWhenExpanded? : boolean,
  showFilters?: boolean,
  resolvedData?: object[],
  sortedData?: object[],
}

export type IPagingTableState = IPagingTableStateProps & IPagingTableProps;
