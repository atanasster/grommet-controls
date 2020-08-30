import React from 'react';
import { BoxProps } from 'grommet';
import { StyledHeader } from './StyledHeader';
import { IHeaderProps } from './HeaderProps';

/**
 * A page header component
 * ```$ npm install grommet-controls
 * import { Header } from 'grommet-controls';
 * <Header>
 *   ...
 * </Header>
 * ```
 */
const Header = ({ children, ...rest }: IHeaderProps & BoxProps) => (
  <StyledHeader tag="header" {...rest}>
    {children}
  </StyledHeader>
);

Header.defaultProps = {
  position: 'relative',
  zIndex: 10,
  direction: 'row',
  background: 'brand',
  fill: 'horizontal',
  justify: 'between',
  align: 'center',
  elevation: 'medium',
  pad: 'medium',
};

export { Header };
