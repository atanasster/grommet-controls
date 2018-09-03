import { Polar } from 'react-chartjs-2';
import { withChartTheme } from '../withChartTheme';

export const PolarChart = withChartTheme(Polar, { defaultScales: [] });
