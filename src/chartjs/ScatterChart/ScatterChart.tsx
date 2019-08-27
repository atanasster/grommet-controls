import { Scatter } from 'react-chartjs-2';
import { withChartTheme } from '../withChartTheme';

/** Scatter chart wrapper to chart.js Scatter with grommet theming<br/>
 * For all standard charting options, consult the chart.js docs<br/>
 * `import { ScatterChart } from 'grommet-controls/chartjs';`<br/>
 * `<ScatterChart data={...} options={...} />`<br/>
 */
const ScatterChart = withChartTheme(Scatter);

export { ScatterChart };
