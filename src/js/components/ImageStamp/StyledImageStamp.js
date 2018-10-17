import styled from 'styled-components';
import { edgeStyle } from 'grommet/utils';

const ROUND_MAP = {
  'full': '100%',
};

export const StyledImageStamp = styled.img`
  ${props => ((!props.contain || props.contain === 'width') && props.size && edgeStyle('width', props.size, props.responsive, undefined, props.theme))}
  ${props => ((!props.contain || props.contain === 'height') && props.size && edgeStyle('height', props.size, props.responsive, undefined, props.theme))}
  overflow: hidden;  
  object-fit: cover;
  border-radius: ${props => ROUND_MAP[props.round] || props.theme.global.edgeSize[props.round]};
  -webkit-border-radius: ${props => ROUND_MAP[props.round] || props.theme.global.edgeSize[props.round]};
  -moz-border-radius: ${props => ROUND_MAP[props.round] || props.theme.global.edgeSize[props.round]};
`;

