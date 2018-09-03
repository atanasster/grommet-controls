import { Radar } from 'react-chartjs-2';
import { withChartTheme } from '../withChartTheme';

export const RadarChart = withChartTheme(Radar, { defaultScales: [] });
