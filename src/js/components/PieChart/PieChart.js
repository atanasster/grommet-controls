import { Pie } from 'react-chartjs-2';
import { withChartTheme } from '../withChartTheme';

export const PieChart = withChartTheme(Pie, { classOpacity: 1, defaultScales: [] });
