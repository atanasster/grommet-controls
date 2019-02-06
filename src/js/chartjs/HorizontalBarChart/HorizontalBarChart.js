import { HorizontalBar } from 'react-chartjs-2';
import { withChartTheme } from '../withChartTheme/index';

const HorizontalBarChart = withChartTheme(HorizontalBar, { borderWidth: 3 });

let HorizontalBarChartDoc;
if (process.env.NODE_ENV !== 'production') {
  HorizontalBarChartDoc = require('./doc').default(HorizontalBarChart); // eslint-disable-line global-require
}

const HorizontalBarChartWrapper = HorizontalBarChartDoc || HorizontalBarChart;

export { HorizontalBarChartWrapper as HorizontalBarChart };
