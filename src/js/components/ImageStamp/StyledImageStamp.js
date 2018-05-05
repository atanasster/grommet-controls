import styled from 'styled-components';
import { edgeStyle } from 'grommet/utils/styles';

const ROUND_MAP = {
  'full': '100%',
};

const StyledImageStamp = styled.img`
  ${props => (props.size && edgeStyle('width', props.size, props.responsive, props.theme))}
  ${props => (props.size && edgeStyle('height', props.size, props.responsive, props.theme))}
  flex: 1 1;
  overflow: hidden;  
  object-fit: cover;
  border-radius: ${props => ROUND_MAP[props.round] || props.theme.global.edgeSize[props.round]};
  -webkit-border-radius: ${props => ROUND_MAP[props.round] || props.theme.global.edgeSize[props.round]};
  -moz-border-radius: ${props => ROUND_MAP[props.round] || props.theme.global.edgeSize[props.round]};
`;

export default StyledImageStamp.extend`
  ${props => props.theme.imagestamp && props.theme.imagestamp.extend}
`;
