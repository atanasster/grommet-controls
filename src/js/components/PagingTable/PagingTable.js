import React from 'react';
import { StyledPagingTable } from './StyledPagingTable';

const PagingTable = ({ data, ...rest }) => {
  const defaults = {
    showPagination: (rest.onFetchData !== undefined) ||
    (data && data.length > (rest.defaultPageSize || 20)),
    minRows: data && data.length < (rest.defaultPageSize || 20) ? 0 : undefined,
  };
  const newProps = { ...defaults, ...rest };
  return (
    <StyledPagingTable
      data={data || []}
      {...newProps}
    />
  );
};


let PagingTableDoc;
if (process.env.NODE_ENV !== 'production') {
  PagingTableDoc = require('./doc')(PagingTable); // eslint-disable-line global-require
}

const PagingTableWrapper = PagingTableDoc || PagingTable;

export { PagingTableWrapper as PagingTable };
