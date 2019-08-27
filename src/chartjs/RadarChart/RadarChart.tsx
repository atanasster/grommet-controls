import { Radar } from 'react-chartjs-2';
import { withChartTheme } from '../withChartTheme';

/** Radar chart wrapper to chart.js Radar with grommet theming<br/>
 * For all standard charting options, consult the chart.js docs<br/>
 * `import { RadarChart } from 'grommet-controls/chartjs';`<br/>
 * `<RadarChart data={...} options={...} />`<br/>
 */
const RadarChart = withChartTheme(Radar, { defaultScales: [] });

export { RadarChart };
