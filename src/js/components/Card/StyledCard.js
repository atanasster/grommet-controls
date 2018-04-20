import styled from 'styled-components';
import { Box } from 'grommet';

const BASIS_MAP = {
  'auto': 'auto',
  'full': '100%',
  '1/2': '50%',
  '1/4': '25%',
  '3/4': '75%',
  '1/3': '33.33%',
  '2/3': '66.66%',
};

export const StyledCardContent = styled(Box)`
  position: relative;
`;

export const StyledCard = styled(Box)`
  position: relative;
  ${props => props.sizeHeight && `flex-basis: ${BASIS_MAP[props.sizeHeight] || props.theme.global.size[props.sizeHeight] || props.sizeHeight};`}
  ${props => props.sizeWidth && `width: ${BASIS_MAP[props.sizeWidth] || props.theme.global.size.narrow[props.sizeWidth] || props.sizeWidth};`}
`;


const showCardProps = show => `${show ? 0 : '-180deg'}`;

export const StyledFlipCard = styled(Box)`
  overflow: auto;
  mac-height: 100%;
  width: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  visibility: ${props => (props.show ? 'visible' : 'hidden')};
  -webkit-transition: -webkit-transform ${props => props.flipDuration}s;
  transition: transform ${props => props.flipDuration}s;
  ${props => `-webkit-transform: rotateY(${showCardProps(props.show)});`}
`;

export default StyledCard.extend`
  ${props => props.theme.card && props.theme.card.extend}
`;
