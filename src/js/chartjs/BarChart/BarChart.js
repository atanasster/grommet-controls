import { Bar } from 'react-chartjs-2';
import { withChartTheme } from '../withChartTheme/index';

const BarChart = withChartTheme(Bar, { borderWidth: 3 });

let BarChartDoc;
if (process.env.NODE_ENV !== 'production') {
  BarChartDoc = require('./doc').default(BarChart); // eslint-disable-line global-require
}

const BarChartWrapper = BarChartDoc || BarChart;

export { BarChartWrapper as BarChart };
