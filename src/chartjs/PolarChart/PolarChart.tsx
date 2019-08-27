import { Polar } from 'react-chartjs-2';
import { withChartTheme } from '../withChartTheme';

/** Polar chart wrapper to chart.js Polar with grommet theming<br/>
 * For all standard charting options, consult the chart.js docs<br/>
 * `import { PolarChart } from 'grommet-controls/chartjs';`<br/>
 * `<PolarChart data={...} options={...} />`<br/>
 */
const PolarChart = withChartTheme(Polar, { defaultScales: [] });

export { PolarChart };
