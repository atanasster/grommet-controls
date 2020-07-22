import { withGrommet } from 'storybook-addon-grommet';
import { grommet, dark } from 'grommet';

import { black, light, materialdark, materiallight, metro } from '../src/themes';

export default {
  decorators: [
    withGrommet({
      theme: 'grommet',
      themes: {
        grommet,
        dark,
        black,
        light,
        materialdark,
        materiallight,
        metro,
      },
      boxProps: {
        align: 'start',
      },
    }
  )
]
}
