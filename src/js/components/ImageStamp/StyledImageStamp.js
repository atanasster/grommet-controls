import styled from 'styled-components';
import { Image } from 'grommet';
import { edgeStyle } from 'grommet/utils/styles';

const ROUND_MAP = {
  'full': '100%',
};

const StyledImageStamp = styled(Image)`
  ${props => (props.size && edgeStyle('width', props.size, props.responsive, props.theme))}
  ${props => (props.size && edgeStyle('height', props.size, props.responsive, props.theme))}
  background-size: cover;
  border-radius: ${props => ROUND_MAP[props.round] || props.theme.global.edgeSize[props.round]};
  -webkit-border-radius: ${props => ROUND_MAP[props.round] || props.theme.global.edgeSize[props.round]};
  -moz-border-radius: ${props => ROUND_MAP[props.round] || props.theme.global.edgeSize[props.round]};
`;

export default StyledImageStamp.extend`
  ${props => props.theme.imagestamp && props.theme.imagestamp.extend}
`;
