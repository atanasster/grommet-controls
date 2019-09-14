import React from 'react';
import { HorizontalBarChart } from '../HorizontalBarChart';
import { rndDatasets } from '../../data/data';

export default {
  title: 'CHARTS|chartjs/HorizontalBarChart',
  component: HorizontalBarChart,
};

export const main = () => (
  <HorizontalBarChart
    data={{
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'Dataset 1',
          data: [-40, 92, -44, -75, -65, -89, 78],
          borderWidth: 1,
        },
        {
          label: 'Dataset 2',
          data: [-78, -21, -43, 70, 11, -91, -63],
          borderWidth: 1,
        },
      ],
    }}
  />
);

export const title = () => (
  <HorizontalBarChart
    data={rndDatasets(1)}
    options={{
      themedData: true,
      legend: { position: 'right' },
      title: {
        display: true,
        text: 'Title of chart',
      },
    }}
  />
);
