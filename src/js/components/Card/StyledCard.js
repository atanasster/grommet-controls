import styled from 'styled-components';
import { Box } from 'grommet';

// eslint-disable-next-line import/prefer-default-export
export const StyledCard = styled(Box)`
  @media (max-width: ${props => props.theme.global.breakpoints.small}px) {
    flex-basis: 100%;
  }
`;
