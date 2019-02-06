import { Scatter } from 'react-chartjs-2';
import { withChartTheme } from '../withChartTheme/index';

const ScatterChart = withChartTheme(Scatter);

let ScatterChartDoc;
if (process.env.NODE_ENV !== 'production') {
  ScatterChartDoc = require('./doc').default(ScatterChart); // eslint-disable-line global-require
}

const ScatterChartWrapper = ScatterChartDoc || ScatterChart;

export { ScatterChartWrapper as ScatterChart };
