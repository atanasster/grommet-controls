import React from 'react';
import { IPivotValueComponentProps } from '../PagingTableProps';

export type ExpanderComponent = React.ElementType<IPivotValueComponentProps>;
export default ({ subRows, value }: IPivotValueComponentProps) => (
  <span>
    {value}
    {' '}
    {subRows && `(${subRows.length})`}
  </span>
);
