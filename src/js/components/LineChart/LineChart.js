import { Line } from 'react-chartjs-2';
import { withChartTheme } from '../withChartTheme';

const LineChart = withChartTheme(Line);

let LineChartDoc;
if (process.env.NODE_ENV !== 'production') {
  LineChartDoc = require('./doc').default(LineChart); // eslint-disable-line global-require
}

const LineChartWrapper = LineChartDoc || LineChart;

export { LineChartWrapper as LineChart };
