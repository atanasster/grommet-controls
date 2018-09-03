import { Doughnut } from 'react-chartjs-2';
import { withChartTheme } from '../withChartTheme';

export const DoughnutChart = withChartTheme(Doughnut, { classOpacity: 1, defaultScales: [] });
