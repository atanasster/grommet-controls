import { Doughnut } from 'react-chartjs-2';
import { withChartTheme } from '../withChartTheme/index';

const DoughnutChart = withChartTheme(Doughnut, { classOpacity: 1, defaultScales: [] });

let DoughnutChartDoc;
if (process.env.NODE_ENV !== 'production') {
  DoughnutChartDoc = require('./doc').default(DoughnutChart); // eslint-disable-line global-require
}

const DoughnutChartWrapper = DoughnutChartDoc || DoughnutChart;

export { DoughnutChartWrapper as DoughnutChart };
