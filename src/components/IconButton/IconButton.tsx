import React from 'react';
import { ButtonProps } from 'grommet';
import StyledIconButton from './StyledIconButton';

/** A Button with a hover effect, all properties of Button apply<br />
 * `import { IconButton } from 'grommet-controls';`<br />
 * `<IconButton icon='...' />`<br />
 */
const IconButton = (props: ButtonProps) => (
  <StyledIconButton
    {...props}
    hoverIndicator={{
          // @ts-ignore
      dark: {
        color: 'dark-2',
        opacity: '1',
      },
      light: {
        color: 'light-2',
        opacity: '1',
      },
      border: {
        radius: '50%',
      },
    }}
  />
    );

export { IconButton };
