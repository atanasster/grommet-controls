// ported to styled-componnets from
// https://github.com/KyleAMathews/react-spinkit
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import { withTheme } from 'grommet/components/hocs';
import { allSpinners } from './spinners';
import { CircleSpinner, ThreeBounceSpinner, CubeGridSpinner, WaveSpinner,
  FoldingCubeSpinner, DoubleBounceSpinner, WanderingCubesSpinner, ChasingDotsSpinner,
  RotatingPlaneSpinner, PulseSpinner, WordPressSpinner } from './StyledSpinning';
import doc from './doc';

const styledComponents = {
  'circle': CircleSpinner,
  'three-bounce': ThreeBounceSpinner,
  'cube-grid': CubeGridSpinner,
  'wave': WaveSpinner,
  'folding-cube': FoldingCubeSpinner,
  'double-bounce': DoubleBounceSpinner,
  'wandering-cubes': WanderingCubesSpinner,
  'chasing-dots': ChasingDotsSpinner,
  'rotating-plane': RotatingPlaneSpinner,
  'pulse': PulseSpinner,
  'wordpress': WordPressSpinner,

};

class Spinning extends Component {
  static defaultProps = {
    kind: 'circle',
    fadeIn: 'full',
    color: 'dark-1',
    size: 'medium',
  };

  static propTypes = {
    fadeIn: PropTypes.oneOf(['full', 'half', 'quarter', 'none', 'wordpress']),
    color: PropTypes.string,
  };

  render() {
    const { kind, fadeIn, color, theme, size } = this.props;
    const spinnerInfo = allSpinners[kind] || allSpinners['three-bounce'];
    /* const classes = cx({
      'sk-fade-in': this.props.fadeIn === 'full' && !this.props.noFadeIn,
      'sk-fade-in-half-second': this.props.fadeIn === 'half' && !this.props.noFadeIn,
      'sk-fade-in-quarter-second': this.props.fadeIn === 'quarter' && !this.props.noFadeIn,
      'sk-spinner': !this.props.overrideSpinnerClassName,
      [spinnerInfo.className || this.props.name]: true,
    }); */

    const StyledSpinning = styledComponents[kind];
    return (
      <StyledSpinning color={color} fadeIn={fadeIn} theme={theme} size={size}>
        {Array.from(Array(spinnerInfo.divCount).keys()).map((_, idx) => <div key={idx} />)}
      </StyledSpinning>
    );
  }
}


const SpinningWrapper = compose(
  withTheme,
)(
  process.env.NODE_ENV !== 'production' ? doc(Spinning) : Spinning
);

export { SpinningWrapper as Spinning };
