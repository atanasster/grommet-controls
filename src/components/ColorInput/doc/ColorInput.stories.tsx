import React from 'react';
import { Box } from 'grommet';
import { ColorInput } from '../ColorInput';
import { materialColors, uiColors } from '../../../index';

export default {
  title: 'CONTROLS|input/ColorInput',
  component: ColorInput,
};

const ColorTestBed = ({ color, ...rest }) => {
  const [stateColor, setColor] = React.useState(color);
  return (
    <Box direction='row'>
      <Box basis='medium'>
        <ColorInput
          value={stateColor}
          onChange={({ target: { value } }) => setColor(value)}
          {...rest}
        />
      </Box>
    </Box>

  );
};


export const main = () => <ColorTestBed colors={materialColors} color='#000000' />;
export const colors = () => (
  <ColorTestBed
    color='#ff0000'
    columns={9}
    wrap={true}
    colors={uiColors}
  />
);
