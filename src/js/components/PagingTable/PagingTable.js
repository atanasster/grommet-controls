import React from 'react';
import { ThemeContext } from 'styled-components';
import { ResponsiveContext } from 'grommet/es6/contexts';
import { StyledPagingTable } from './StyledPagingTable';

const responsiveColumns = (size, columns) => (
  Array.isArray(columns) ?
    columns.map((column) => {
      if (size === undefined) {
        return column;
      }
      let show = column.show;
      if (column.responsiveShow) {
        const sizes = Array.isArray(column.responsiveShow) ?
          column.responsiveShow : [column.responsiveShow];
        if (sizes.indexOf(size) !== -1) {
          show = true;
        }
      }
      if (column.responsiveHide) {
        const sizes = Array.isArray(column.responsiveHide) ?
          column.responsiveHide : [column.responsiveHide];
        if (sizes.indexOf(size) !== -1) {
          show = false;
        }
      }
      if (show === undefined) {
        return column;
      }
      return { ...column, show };
    }) : columns
);
const PagingTable = ({ data, columns, ...rest }) => {
  const defaults = {
    showPagination: (rest.onFetchData !== undefined) ||
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


let PagingTableDoc;
if (process.env.NODE_ENV !== 'production') {
  PagingTableDoc = require('./doc').default(PagingTable); // eslint-disable-line global-require
}

const PagingTableWrapper = PagingTableDoc || PagingTable;

export { PagingTableWrapper as PagingTable };
