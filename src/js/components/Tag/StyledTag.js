import styled from 'styled-components';
import { Box } from 'grommet/es6/components/Box';
import { backgroundStyle } from 'grommet/es6/utils/background';

const disabledStyle = `
  opacity: 0.4;
  cursor: default;
`;

export const StyledIcon = styled.span`
  display: inline-block;
  > * {
    vertical-align: bottom;
  }
  ${props => !props.diabled && 'cursor: pointer;'}
`;

export const StyledTag = styled(Box)`
  ${props => backgroundStyle(props.background || 'brand', props.theme)}
  ${props => props.onClick && 'cursor: pointer;'}
  user-select: none;
  ${props => props.disabled && disabledStyle}
`;

