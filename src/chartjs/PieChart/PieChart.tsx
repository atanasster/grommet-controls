import { Pie } from 'react-chartjs-2';
import { withChartTheme } from '../withChartTheme';

/** Pie chart wrapper to chart.js Pie with grommet theming<br/>
 * For all standard charting options, consult the chart.js docs<br/>
 * `import { PieChart } from 'grommet-controls/chartjs';`<br/>
 * `<PieChart data={...} options={...} />`<br/>
 */
const PieChart = withChartTheme(Pie, { classOpacity: 1, defaultScales: [] });

export { PieChart };
