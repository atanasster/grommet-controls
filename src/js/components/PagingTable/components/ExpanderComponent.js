import React from 'react';
import { Add } from 'grommet-icons/es6/icons/Add';
import { Subtract } from 'grommet-icons/es6/icons/Subtract';
import { StyledExpander } from '../StyledPagingTable';

export default ({ isExpanded, children, expanderProps }) => {
  const props = {
    ...{
      CloseIcon: <Subtract />,
      OpenIcon: <Add />,
      tabIndex: '0',
      onClick: () => {},
    },
    ...expanderProps,
  };
  const { OpenIcon, CloseIcon, ...rest } = props;
  return (
    <StyledExpander
      a11yTitle='Press Enter to expand this row for more information'
      icon={isExpanded ? CloseIcon : OpenIcon}
      {...rest}
    >
      {children}
    </StyledExpander>
  );
};

