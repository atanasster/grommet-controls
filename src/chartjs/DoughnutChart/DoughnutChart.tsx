import { Doughnut } from 'react-chartjs-2';
import { withChartTheme } from '../withChartTheme';

/** Doughnut chart wrapper to chart.js Doughnut with grommet theming,br/>
 * For all standard charting options, consult the chart.js docs<br/>
 * `import { DoughnutChart } from 'grommet-controls/chartjs';`<br/>
 * `<DoughnutChart data={...} options={...} />`<br/>
 */
const DoughnutChart = withChartTheme(Doughnut, { classOpacity: 1, defaultScales: [] });

export { DoughnutChart };
