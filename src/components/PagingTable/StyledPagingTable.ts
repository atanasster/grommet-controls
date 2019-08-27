import styled from 'styled-components';
import { IPagingTableProps } from './PagingTableProps';
import ReactTable from './react-table/ReactTable';

export const StyledPagingTable = styled(ReactTable)<IPagingTableProps>`
  max-width: 100%;
  width: 100%;
  overflow: hidden;
`;
