import React from 'react';
import { StyledHeader } from './StyledHeader';

const Header = ({ children, ...rest }) => (
  <StyledHeader
    tag='header'
    direction='row'
    background='brand'
    fill='horizontal'
    justify='between'
    align='center'
    elevation='medium'
    pad='medium'
    {...rest}
  >
    {children}
  </StyledHeader>
);

let HeaderDoc;
if (process.env.NODE_ENV !== 'production') {
  HeaderDoc = require('./doc').default(Header); // eslint-disable-line global-require
}

const HeaderWrapper = HeaderDoc || Header;

export { HeaderWrapper as Header };
