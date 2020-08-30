import React from 'react';
import { ButtonProps } from 'grommet';
import { Omit } from '../../utils';
import StyledIconButton from './StyledIconButton';

/** A Button with a hover effect, all properties of Button apply<br />
 * `import { IconButton } from 'grommet-controls';`<br />
 * `<IconButton icon='...' />`<br />
 */
const IconButton = (
  props: ButtonProps & Omit<JSX.IntrinsicElements['button'], 'color' | 'ref'>,
) => (
  <StyledIconButton
    {...props}
    hoverIndicator={{
      dark: 'dark-2',
      light: 'light-2',
    }}
  />
);

export { IconButton };
