import { Bar } from 'react-chartjs-2';
import { withChartTheme } from '../withChartTheme';

export const BarChart = withChartTheme(Bar, { borderWidth: 3 });
