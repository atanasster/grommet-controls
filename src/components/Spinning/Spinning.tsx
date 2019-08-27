// ported to styled-componnets from
// https://github.com/KyleAMathews/react-spinkit
import React from 'react';
import { ThemeContext } from 'styled-components';
import { ColorType } from 'grommet/utils';
import { allSpinners } from './spinners';
import { ISpinningProps } from './SpinningProps';
import {
 CircleSpinner, ThreeBounceSpinner, CubeGridSpinner, WaveSpinner,
  FoldingCubeSpinner, DoubleBounceSpinner, WanderingCubesSpinner, ChasingDotsSpinner,
  RotatingPlaneSpinner, PulseSpinner, WordPressSpinner,
} from './StyledSpinning';

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

type StyledSpinnerType = React.ElementType<ISpinningProps & { theme?: object }>;

/** A spinning process indicator<br/>
 * `import { Spinning } from 'grommet-controls';`<br/>
 * `<Spinning />`<br/>
*/
const Spinning = ({
 kind, fadeIn, color, size,
}: ISpinningProps) => {
  const spinnerInfo = allSpinners[kind] || allSpinners['three-bounce'];
  const StyledSpinning: StyledSpinnerType = styledComponents[kind];
  return (
    <ThemeContext.Consumer>
      {theme => (
        <StyledSpinning
          color={(color || (theme.dark ? 'light-1' : 'dark-1')) as ColorType}
          fadeIn={fadeIn}
          theme={theme}
          size={size}
        >
          {Array.from(Array(spinnerInfo.divCount).keys()).map((_, idx) => <div key={idx} />)}
        </StyledSpinning>
      )}
    </ThemeContext.Consumer>
  );
};

Spinning.defaultProps = {
  kind: 'circle',
  fadeIn: 'full',
  color: undefined,
  size: 'medium',
};

export { Spinning };
