import { Pie } from 'react-chartjs-2';
import { withChartTheme } from '../withChartTheme';

const PieChart = withChartTheme(Pie, { classOpacity: 1, defaultScales: [] });

let PieChartDoc;
if (process.env.NODE_ENV !== 'production') {
  PieChartDoc = require('./doc').default(PieChart); // eslint-disable-line global-require
}

const PieChartWrapper = PieChartDoc || PieChart;

export { PieChartWrapper as PieChart };
