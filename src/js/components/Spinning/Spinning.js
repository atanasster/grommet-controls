// ported to styled-componnets from
// https://github.com/KyleAMathews/react-spinkit
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from 'styled-components';
import { allSpinners } from './spinners';
import { CircleSpinner, ThreeBounceSpinner, CubeGridSpinner, WaveSpinner,
  FoldingCubeSpinner, DoubleBounceSpinner, WanderingCubesSpinner, ChasingDotsSpinner,
  RotatingPlaneSpinner, PulseSpinner, WordPressSpinner } from './StyledSpinning';

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
    color: undefined,
    size: 'medium',
  };

  static propTypes = {
    fadeIn: PropTypes.oneOf(['full', 'half', 'quarter', 'none', 'wordpress']),
    color: PropTypes.string,
  };

  render() {
    const { kind, fadeIn, color, size } = this.props;
    const spinnerInfo = allSpinners[kind] || allSpinners['three-bounce'];
    const StyledSpinning = styledComponents[kind];
    return (
      <ThemeContext.Consumer>
        {theme => (
          <StyledSpinning color={color || (theme.dark ? 'light-1' : 'dark-1')} fadeIn={fadeIn} theme={theme} size={size}>
            {Array.from(Array(spinnerInfo.divCount).keys()).map((_, idx) => <div key={idx} />)}
          </StyledSpinning>
        )}
      </ThemeContext.Consumer>
    );
  }
}

let SpinningDoc;
if (process.env.NODE_ENV !== 'production') {
  SpinningDoc = require('./doc').default(Spinning); // eslint-disable-line global-require
}

const SpinningWrapper = SpinningDoc || Spinning;

export { SpinningWrapper as Spinning };
