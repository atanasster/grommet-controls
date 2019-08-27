import styled from 'styled-components';
import { Box } from 'grommet';
import { backgroundStyle } from 'grommet/utils/background';

const disabledStyle = `
  opacity: 0.4;
  cursor: default;
`;

interface IStyledTagProps {
  disabled: boolean,
}
export const StyledIcon = styled.span<IStyledTagProps>`
  display: inline-block;
  > * {
    vertical-align: bottom;
  }
  ${props => !props.disabled && 'cursor: pointer;'}
`;

export const StyledTag = styled(Box)<IStyledTagProps>`
  ${props => backgroundStyle(props.background || 'brand', props.theme)}
  ${props => props.onClick && 'cursor: pointer;'}
  user-select: none;
  ${props => props.disabled && disabledStyle}
`;

