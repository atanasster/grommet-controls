import { Radar } from 'react-chartjs-2';
import { withChartTheme } from '../withChartTheme/index';

const RadarChart = withChartTheme(Radar, { defaultScales: [] });

let RadarChartDoc;
if (process.env.NODE_ENV !== 'production') {
  RadarChartDoc = require('./doc').default(RadarChart); // eslint-disable-line global-require
}

const RadarChartWrapper = RadarChartDoc || RadarChart;

export { RadarChartWrapper as RadarChart };
