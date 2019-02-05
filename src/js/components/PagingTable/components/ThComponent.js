import React from 'react';
import { Box } from 'grommet/components/Box';
import { Button } from 'grommet/components/Button';
import { Blank } from 'grommet-icons/Blank';
import { LinkDown } from 'grommet-icons/icons/LinkDown';
import { LinkUp } from 'grommet-icons/icons/LinkUp';
import { StyledThComponent } from '../StyledPagingTable';

export default ({
  toggleSort, sort, resizable, children, pivot, hidden,
  sortable, expander, CellTextComponent, ...props
}) => {
  if (!expander && Array.isArray(children) && children.length > 1 && !children[0] && !children[1]) {
    return null;
  }
  const { style, ...rest } = props;
  const childRendered = <CellTextComponent {...rest} value={children} />;
  let content;
  if (sortable) {
    const sortAsc = sort === '-sort-asc';
    const sortDesc = sort === '-sort-desc';
    let SortIcon = Blank;
    if (sortAsc || sortDesc) {
      SortIcon = sortAsc ? LinkUp : LinkDown;
    }
    content = (
      <Box direction='row' gap='xsmall' align='center'>
        {childRendered}
        <Button onClick={e => (toggleSort && toggleSort(e))}><SortIcon /></Button>
      </Box>
    );
  } else {
    content = childRendered;
  }

  const boxProps = { ...{ pad: 'xsmall' }, ...rest };
  return (

    // eslint-disable-next-line jsx-a11y/interactive-supports-focus
    <StyledThComponent
      role='columnheader'
      onClick={e => (toggleSort && toggleSort(e))}
      direction='row'
      pivot={pivot}
      hidden={hidden}
      sortable={sortable}
      style={style}
      resizable={resizable}
    >
      <Box {...boxProps} fill={true}>
        {content}
      </Box>
    </StyledThComponent>
  );
};
