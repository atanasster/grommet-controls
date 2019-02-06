import React from 'react';
import PropTypes from 'prop-types';
import { Box } from 'grommet/es6/components/Box';
import { Button } from 'grommet/es6/components/Button';
import { Heading } from 'grommet/es6/components/Heading';
import { ResponsiveContext } from 'grommet/es6/contexts/ResponsiveContext';
import { Menu } from 'grommet-icons/es6/icons/Menu';

class Sidebar extends React.Component {
  state = {
    collapsed: undefined,
  };

  render() {
    const {
      title, width, children, collapsible, headingProps, ...rest
    } = this.props;
    const { collapsed } = this.state;
    const BtnToggle = ({ view }) => (
      collapsible ? <Button icon={<Menu />} onClick={() => this.setState({ collapsed: view !== 'collapsed' })} /> : null
    );
    return (
      <ResponsiveContext.Consumer>
        {size => ((collapsible && size === 'small' && collapsed === undefined) || collapsed === true ? (
          <Box align='start'>
            <BtnToggle view='collapsed' />
          </Box>
          ) : (
            <Box
              width={width}
              {...rest}
            >
              <Box pad={{ bottom: 'small' }} gap='small' direction='row' align='center'>
                <BtnToggle view='expanded' />
                {title && (
                  <Box
                    flex={false}
                    tag='header'
                    {...headingProps}
                  >{typeof title === 'string' ?
                  (<Heading margin='none' level={3}>{title}</Heading>)
                  : title}
                  </Box>
              )}
              </Box>

              {children}
            </Box>
        )
        )}
      </ResponsiveContext.Consumer>
    );
  }
}

let SidebarDoc;
if (process.env.NODE_ENV !== 'production') {
  SidebarDoc = require('./doc').default(Sidebar); // eslint-disable-line global-require
}

const SidebaWrapper = SidebarDoc || Sidebar;

SidebaWrapper.defaultProps = {
  title: undefined,
  width: 'medium',
  collapsible: true,
};

SidebaWrapper.propTypes = {
  title: PropTypes.node,
  width: PropTypes.string,
  collapsible: PropTypes.bool,
};

export { SidebaWrapper as Sidebar };
