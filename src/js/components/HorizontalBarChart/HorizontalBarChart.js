import { HorizontalBar } from 'react-chartjs-2';
import { withChartTheme } from '../withChartTheme';

export const HorizontalBarChart = withChartTheme(HorizontalBar, { borderWidth: 3 });
