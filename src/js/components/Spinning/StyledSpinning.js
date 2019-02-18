import styled, { keyframes } from 'styled-components';
import { normalizeColor } from 'grommet/utils/colors';


const animationFadeIn = keyframes`
  0% { opacity: 0;}
  50% { opacity: 0;}
  100% { opacity: 1;}
`;

const animationBounceDelay = keyframes`
  0%, 80%, 100% { -webkit-transform: scale(0.0) }
  40% { -webkit-transform: scale(1.0) }
`;

const animationScaleDelay = keyframes`
  0%, 70%, 100% { -webkit-transform:scale3D(1.0, 1.0, 1.0) }
  35%           { -webkit-transform:scale3D(0.0, 0.0, 1.0) }
`;

const animationStretchDelay = keyframes`
  0%, 40%, 100% { -webkit-transform: scaleY(0.4) }
  20% { -webkit-transform: scaleY(1.0) }
`;

const animationFoldCubeAngle = keyframes`
  0%, 10% {
    -webkit-transform: perspective(140px) rotateX(-180deg);
    opacity: 0;
  } 
  25%, 75% {
    -webkit-transform: perspective(140px) rotateX(0deg);
    opacity: 1;
  } 
  90%, 100% {
    -webkit-transform: perspective(140px) rotateY(180deg);
    opacity: 0;
  }
`;

const animationBounce = keyframes`
  0%, 100% {
    -webkit-transform: scale(0.0);
  } 
  50% {
    -webkit-transform: scale(1.0);
  }
`;


const animationCubeMove = keyframes`
  25% {
    -webkit-transform: translateX(42px) rotate(-90deg) scale(0.5);
  } 
  50% {
    /* Hack to make FF rotate in the right direction */
    -webkit-transform: translateX(42px) translateY(42px) rotate(-179deg);
  } 
  50.1% {
    -webkit-transform: translateX(42px) translateY(42px) rotate(-180deg);
  } 
  75% {
    -webkit-transform: translateX(0px) translateY(42px) rotate(-270deg) scale(0.5);
  } 
  100% {
    -webkit-transform: rotate(-360deg);
  }
`;

const animationRotate = keyframes`
 100% { -webkit-transform: rotate(360deg) }
`;

const animationRotatePlane = keyframes`
  0% {
    -webkit-transform: perspective(120px) rotateX(0deg) rotateY(0deg);
  } 
  50% {
    -webkit-transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);
  } 
  100% {
    -webkit-transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
  }
`;

const animationScaleOut = keyframes`
  0% { -webkit-transform: scale(0.0) }
  100% {
    -webkit-transform: scale(1.0);
    opacity: 0;
  }
`;

const animationInnerCircle = keyframes`
  0% { -webkit-transform: rotate(0); }
  100% { -webkit-transform: rotate(360deg); }
`;

export const ThreeBounceSpinner = styled.div`
  ${props => normalizeColor(props.color, props.theme)}
  & >div {
    background-color: ${props => normalizeColor(props.color, props.theme)};
  }
  height: ${props => props.theme.global.edgeSize[props.size]};
  & >div {
    width: ${props => props.theme.global.edgeSize[props.size]};
    height: ${props => props.theme.global.edgeSize[props.size]};
    background-color: ${props => normalizeColor(props.color, props.theme)};
    border-radius: 100%;
    display: inline-block;
    animation: ${animationBounceDelay} 1.4s infinite ease-in-out;
    /* Prevent first frame from flickering when animation starts */
    animation-fill-mode: both;
  };
  & >div:first-child {
    animation-delay: -0.32s;
  };  
  & >div:nth-child(2) {
    animation-delay: -0.16s;
  };
  animation: ${animationFadeIn} 2s;  
`;

export const CircleSpinner = styled.div`
  width: ${props => props.theme.global.edgeSize[props.size]};
  height: ${props => props.theme.global.edgeSize[props.size]};
  position: relative;

  & > div {
    background-color: initial;
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
  }

  & > div::before {
    content: '';
    display: block;
    margin: 0 auto;
    width: 20%;
    height: 20%;
    background-color: ${props => normalizeColor(props.color, props.theme)};
    border-radius: 100%;
    animation: ${animationBounceDelay} 1.2s infinite ease-in-out;
    /* Prevent first frame from flickering when animation starts */
    animation-fill-mode: both;
  }

  & > div:nth-child(2)  { -webkit-transform: rotate(30deg);  transform: rotate(30deg)  }
  & > div:nth-child(3)  { -webkit-transform: rotate(60deg);  transform: rotate(60deg)  }
  & > div:nth-child(4)  { -webkit-transform: rotate(90deg);  transform: rotate(90deg)  }
  & > div:nth-child(5)  { -webkit-transform: rotate(120deg); transform: rotate(120deg) }
  & > div:nth-child(6)  { -webkit-transform: rotate(150deg); transform: rotate(150deg) }
  & > div:nth-child(7)  { -webkit-transform: rotate(180deg); transform: rotate(180deg) }
  & > div:nth-child(8)  { -webkit-transform: rotate(210deg); transform: rotate(210deg) }
  & > div:nth-child(9)  { -webkit-transform: rotate(240deg); transform: rotate(240deg) }
  & > div:nth-child(10) { -webkit-transform: rotate(270deg); transform: rotate(270deg) }
  & > div:nth-child(11) { -webkit-transform: rotate(300deg); transform: rotate(300deg) }
  & > div:nth-child(12) { -webkit-transform: rotate(330deg); transform: rotate(330deg) }

  & > div:nth-child(2)::before  { -webkit-animation-delay: -1.1s; animation-delay: -1.1s }
  & > div:nth-child(3)::before  { -webkit-animation-delay: -1.0s; animation-delay: -1.0s }
  & > div:nth-child(4)::before  { -webkit-animation-delay: -0.9s; animation-delay: -0.9s }
  & > div:nth-child(5)::before  { -webkit-animation-delay: -0.8s; animation-delay: -0.8s }
  & > div:nth-child(6)::before  { -webkit-animation-delay: -0.7s; animation-delay: -0.7s }
  & > div:nth-child(7)::before  { -webkit-animation-delay: -0.6s; animation-delay: -0.6s }
  & > div:nth-child(8)::before  { -webkit-animation-delay: -0.5s; animation-delay: -0.5s }
  & > div:nth-child(9)::before  { -webkit-animation-delay: -0.4s; animation-delay: -0.4s }
  & > div:nth-child(10)::before { -webkit-animation-delay: -0.3s; animation-delay: -0.3s }
  & > div:nth-child(11)::before { -webkit-animation-delay: -0.2s; animation-delay: -0.2s }
  & > div:nth-child(12)::before { -webkit-animation-delay: -0.1s; animation-delay: -0.1s }
`;

export const CubeGridSpinner = styled.div`
  width: ${props => props.theme.global.edgeSize[props.size]};
  height: ${props => props.theme.global.edgeSize[props.size]};

  & > div {
    width: 33%;
    height: 33%;
    background-color: ${props => normalizeColor(props.color, props.theme)};
    float: left;
    animation: ${animationScaleDelay} 1.3s infinite ease-in-out;
  }

  /*
  * Spinner positions
  * 1 2 3
  * 4 5 6
  * 7 8 9
  */

  & > div:nth-child(1) { -webkit-animation-delay: 0.2s; animation-delay: 0.2s  }
  & > div:nth-child(2) { -webkit-animation-delay: 0.3s; animation-delay: 0.3s  }
  & > div:nth-child(3) { -webkit-animation-delay: 0.4s; animation-delay: 0.4s  }
  & > div:nth-child(4) { -webkit-animation-delay: 0.1s; animation-delay: 0.1s  }
  & > div:nth-child(5) { -webkit-animation-delay: 0.2s; animation-delay: 0.2s  }
  & > div:nth-child(6) { -webkit-animation-delay: 0.3s; animation-delay: 0.3s  }
  & > div:nth-child(7) { -webkit-animation-delay: 0.0s; animation-delay: 0.0s  }
  & > div:nth-child(8) { -webkit-animation-delay: 0.1s; animation-delay: 0.1s  }
  & > div:nth-child(9) { -webkit-animation-delay: 0.2s; animation-delay: 0.2s  }
`;


export const WaveSpinner = styled.div`
  width: 30px;
  height: 27px;

  & > div {
    background-color: ${props => normalizeColor(props.color, props.theme)};
    height: 100%;
    width: 6px;
    display: inline-block;
    animation: ${animationStretchDelay} 1.2s infinite ease-in-out;
  }

  $ > div:nth-child(2) {
    animation-delay: -1.1s;
  }

  & > div:nth-child(3) {
    animation-delay: -1.0s;
  }

  & > div:nth-child(4) {
    animation-delay: -0.9s;
  }

  & > div:nth-child(5) {
    animation-delay: -0.8s;
  }

`;


export const FoldingCubeSpinner = styled.div`
  width: ${props => props.theme.global.edgeSize[props.size]};
  height: ${props => props.theme.global.edgeSize[props.size]};
  position: relative;
  transform: rotateZ(45deg);

  & > div {
    background-color: initial;
    float: left;
    width: 50%;
    height: 50%;
    position: relative;

    -webkit-transform: scale(1.1);
        -ms-transform: scale(1.1);
            transform: scale(1.1);
  }
  & > div::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${props => normalizeColor(props.color, props.theme)};
    animation: ${animationFoldCubeAngle} 2.4s infinite linear both;
    transform-origin: 100% 100%;
  }
  & > div:nth-child(2) {
    transform: scale(1.1) rotateZ(90deg);
  }
  & > div:nth-child(4) {
    transform: scale(1.1) rotateZ(180deg);
  }
  & > div:nth-child(3) {
    transform: scale(1.1) rotateZ(270deg);
  }
  & > div:nth-child(2)::before {
    animation-delay: 0.3s;
  }
  & > div:nth-child(4)::before {
    animation-delay: 0.6s;
  }
  & > div:nth-child(3)::before {
    animation-delay: 0.9s;
  }
`;

export const DoubleBounceSpinner = styled.div`
  width: ${props => props.theme.global.edgeSize[props.size]};
  height: ${props => props.theme.global.edgeSize[props.size]};
  position: relative;

  & > div {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: ${props => normalizeColor(props.color, props.theme)};
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;

    animation: ${animationBounce} 2.0s infinite ease-in-out;
  }

  & > div:last-child {
    -webkit-animation-delay: -1.0s;
    animation-delay: -1.0s;
  }
`;

export const WanderingCubesSpinner = styled.div`
  width: 52px;
  height: 52px;
  position: relative;

  & > div {
    background-color: ${props => normalizeColor(props.color, props.theme)};
    width: 10px;
    height: 10px;
    position: absolute;
    top: 0;
    left: 0;

    animation: ${animationCubeMove} 1.8s infinite ease-in-out;
  }

  & > div:last-child {
    -webkit-animation-delay: -0.9s;
    animation-delay: -0.9s;
  }
`;


export const ChasingDotsSpinner = styled.div`
  width: ${props => props.theme.global.edgeSize[props.size]};
  height: ${props => props.theme.global.edgeSize[props.size]};
  position: relative;
  animation: ${animationRotate} 2.0s infinite linear;

  & > div {
    width: 60%;
    height: 60%;
    display: inline-block;
    position: absolute;
    top: 0;
    background-color: ${props => normalizeColor(props.color, props.theme)};
    border-radius: 100%;
    animation: ${animationBounce} 2.0s infinite ease-in-out;
  }

  & > div:last-child {
    top: auto;
    bottom: 0;

    -webkit-animation-delay: -1.0s;
    animation-delay: -1.0s;
  }
`;

export const RotatingPlaneSpinner = styled.div`
  width: ${props => props.theme.global.edgeSize[props.size]};
  height: ${props => props.theme.global.edgeSize[props.size]};
  background-color: ${props => normalizeColor(props.color, props.theme)};

  animation: ${animationRotatePlane} 1.2s infinite ease-in-out;
`;

export const PulseSpinner = styled.div`
  width: ${props => props.theme.global.edgeSize[props.size]};
  height: ${props => props.theme.global.edgeSize[props.size]};
  background-color: ${props => normalizeColor(props.color, props.theme)};
  border-radius: 100%;
  animation: ${animationScaleOut} 1.0s infinite ease-in-out;
`;

export const WordPressSpinner = styled.div`
& > div {
  width:${props => props.theme.global.edgeSize[props.size]};
  height: ${props => props.theme.global.edgeSize[props.size]};
  background-color: ${props => normalizeColor(props.color, props.theme)};
  display: inline-block;
  border-radius: ${props => props.theme.global.edgeSize[props.size]};
  position: relative;
  animation: ${animationInnerCircle} 1s linear infinite;
}

& > div::after {
  content: '';
  display: block;
  background-color: #fff;
  width: 8px;
  height: 8px;
  position: absolute;
  border-radius: 8px;
  top: 5px;
  left: 5px;
}
`;
