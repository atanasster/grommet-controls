import styled from 'styled-components';
import { Box } from 'grommet';

export const StyledCard = styled(Box)`
  @media (max-width: ${props => props.theme.global.breakpoints.small}px) {
    flex-basis: 100%;
  }
`;
