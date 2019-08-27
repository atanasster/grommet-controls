import { HorizontalBar } from 'react-chartjs-2';
import { withChartTheme } from '../withChartTheme';

/** HorizontalBar chart wrapper to chart.js HorizontalBar with grommet theming<br/>
 * For all standard charting options, consult the chart.js docs<br/>
 * `import { HorizontalBarChart } from 'grommet-controls/chartjs';`<br/>
 * `<HorizontalBarChart data={...} options={...} />`<br/>
 */
const HorizontalBarChart = withChartTheme(HorizontalBar, { borderWidth: 3 });

export { HorizontalBarChart };
