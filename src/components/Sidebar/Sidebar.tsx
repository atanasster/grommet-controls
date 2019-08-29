import React from 'react';
import {
 Box, Button, Heading, ResponsiveContext, BoxProps,
} from 'grommet';
import { Menu } from 'grommet-icons/icons/Menu';
import { ISidebarProps } from './SidebarProps';

/** Collapsible side bar component
 * ```$ npm install grommet-controls
 * import { Sidebar } from 'grommet-controls';
 * <Sidebar title='My title'>
       ...
 * </Sidebar>
 * ```
 */
const Sidebar = ({
      title, width, children, collapsible, ...rest
    }: ISidebarProps & BoxProps) => {
  const [collapsed, setCollapsed] = React.useState(undefined);
  const BtnToggle = ({ view }) => (
    collapsible ? <Button icon={<Menu />} onClick={() => setCollapsed(view !== 'collapsed')} /> : null
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
                >
                  {typeof title === 'string'
                ? (<Heading margin='none' level={3}>{title}</Heading>)
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
};

Sidebar.defaultProps = {
  title: undefined,
  width: 'medium',
  collapsible: true,
};


export { Sidebar };
