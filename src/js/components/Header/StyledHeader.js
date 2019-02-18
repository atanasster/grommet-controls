import styled from 'styled-components';
import { Box } from 'grommet';


export const StyledHeader = styled(Box)`
  position: ${props => props.position};
  ${(props) => {
    if (props.position === 'fixed' || props.position === 'absolute' || props.position === 'sticky') {
      return `
        top: 0;
        left: auto;
        right: 0;  
        z-index: ${props.zIndex};
      `;
    }
    return undefined;
  }}
`;
