import React from 'react';
import { compose } from 'recompose';
import { withTheme } from 'grommet/components/hocs';
import { StyledPagingTable } from './StyledPagingTable';
import doc from './doc';

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

const PagingTableWrapper = compose(
  withTheme,
)(
  (process.env.NODE_ENV !== 'production' ? doc(PagingTable) : PagingTable)
);

export { PagingTableWrapper as PagingTable };
