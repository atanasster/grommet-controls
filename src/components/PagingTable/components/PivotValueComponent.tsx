import React from 'react';
import { IPivotValueComponentProps } from '../PagingTableProps';

export type ExpanderComponent = React.ElementType<IPivotValueComponentProps>;
const PivotValueComponent = ({ subRows, value }: IPivotValueComponentProps) => (
  <span>
    {value} {subRows && `(${subRows.length})`}
  </span>
);

export default PivotValueComponent;
