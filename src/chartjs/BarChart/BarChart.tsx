import { Bar } from 'react-chartjs-2';
import { withChartTheme } from '../withChartTheme';

/**
 * Bar chart wrapper to chart.js Bar with grommet theming<br/>
 * For all standard charting options, consult the chart.js docs<br/>
 * `import { BarChart } from 'grommet-controls/chartjs';`<br/>
 * `<BarChart data={...} options={...} />`<br/>
 */
const BarChart = withChartTheme(Bar, { borderWidth: 3 });

export { BarChart };
