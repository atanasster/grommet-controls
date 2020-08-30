import React from 'react';
import { Box } from 'grommet';
import { StyledTdComponent } from '../StyledTableComponents';
import { extractTextProps } from './CellTextComponent';

const TdComponent = ({ children, ...props }) => {
  const { style, ...rest } = props;
  const boxProps = { ...{ pad: 'small' }, ...extractTextProps(rest) };
  return (
    <StyledTdComponent style={style} role="gridcell">
      <Box fill={true} align="center" direction="row" {...boxProps}>
        {children}
      </Box>
    </StyledTdComponent>
  );
};

export default TdComponent;
