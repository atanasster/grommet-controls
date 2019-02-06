import styled from 'styled-components';
import { Button } from 'grommet/es6/components/Button';

export default styled(Button)`
  border-radius: 50%;
  &>svg {
    display: block;
  }
`;
