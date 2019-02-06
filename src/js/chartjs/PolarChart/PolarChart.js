import { Polar } from 'react-chartjs-2';
import { withChartTheme } from '../withChartTheme';

const PolarChart = withChartTheme(Polar, { defaultScales: [] });

let PolarChartDoc;
if (process.env.NODE_ENV !== 'production') {
  PolarChartDoc = require('./doc').default(PolarChart); // eslint-disable-line global-require
}

const PolarChartWrapper = PolarChartDoc || PolarChart;

export { PolarChartWrapper as PolarChart };
