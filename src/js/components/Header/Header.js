import React from 'react';
import { StyledHeader } from './StyledHeader';

const Header = ({ children, ...rest }) => (
  <StyledHeader
    tag='header'
    {...rest}
  >
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

let HeaderDoc;
if (process.env.NODE_ENV !== 'production') {
  HeaderDoc = require('./doc').default(Header); // eslint-disable-line global-require
}

const HeaderWrapper = HeaderDoc || Header;

export { HeaderWrapper as Header };
