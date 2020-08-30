import React from 'react';
import { ThemeContext } from 'styled-components';
import { ResponsiveContext } from 'grommet';
import { StyledPagingTable } from './StyledPagingTable';
import { IPagingTableProps } from './PagingTableProps';

const responsiveColumns = (size, columns) =>
  Array.isArray(columns)
    ? columns.map(column => {
        if (size === undefined) {
          return column;
        }
        let { show } = column;
        if (column.responsiveShow) {
          const sizes = Array.isArray(column.responsiveShow)
            ? column.responsiveShow
            : [column.responsiveShow];
          if (sizes.indexOf(size) !== -1) {
            show = true;
          }
        }
        if (column.responsiveHide) {
          const sizes = Array.isArray(column.responsiveHide)
            ? column.responsiveHide
            : [column.responsiveHide];
          if (sizes.indexOf(size) !== -1) {
            show = false;
          }
        }
        if (show === undefined) {
          return column;
        }
        return { ...column, show };
      })
    : columns;

/**
 * Table component with pagination, filtering, footer, child rows and grouping<br/>
 * Derived from https://github.com/react-tools/react-table<br/>
 * `import { PagingTable } from 'grommet-controls';`<br/>
 * `<PagingTable columns={...} data={...} />`<br/>
 */
const PagingTable = ({ data, columns, ...rest }: IPagingTableProps) => {
  const defaults = {
    showPagination:
      rest.onFetchData !== undefined ||
      (data && data.length > (rest.defaultPageSize || 20)),
    minRows: data && data.length < (rest.defaultPageSize || 20) ? 0 : undefined,
  };
  const newProps = { ...defaults, ...rest };
  return (
    <ResponsiveContext.Consumer>
      {size => (
        <ThemeContext.Consumer>
          {theme => (
            <StyledPagingTable
              data={data || []}
              columns={responsiveColumns(size, columns)}
              theme={theme}
              {...newProps}
            />
          )}
        </ThemeContext.Consumer>
      )}
    </ResponsiveContext.Consumer>
  );
};

PagingTable.defaultProps = {
  defaultPageSize: 20,
  filterable: false,
  loading: false,
  manual: false,
  resizable: true,
  showPagination: true,
  sortable: true,
};

export { PagingTable };
