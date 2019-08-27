import { ColorType } from 'grommet/utils';

export interface ISpinningProps {
  /** Kind of spinner */
  kind?: 'circle' | 'pulse' | 'three-bounce' | 'cube-grid' | 'wave' | 'folding-cube'
      | 'double-bounce' | 'wandering-cubes' | 'chasing-dots' | 'rotating-plane',
  /** A color identifier to use for the spinning color */
  color?: ColorType,
  /** A size for the spinning */
  size?: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge',
  /** fade in effect */
  fadeIn?: 'full' | 'half' | 'quarter' | 'none' | 'wordpress',
}
