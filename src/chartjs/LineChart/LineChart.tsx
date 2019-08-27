import { Line } from 'react-chartjs-2';
import { withChartTheme } from '../withChartTheme';

/** Line chart wrapper to chart.js Line with grommet theming<br/>
 * For all standard charting options, consult the chart.js docs<br/>
 * `import { LineChart } from 'grommet-controls/chartjs';`<br/>
 * `<LineChart data={...} options={...} />`<br/>
 */
const LineChart = withChartTheme(Line);

export { LineChart };
