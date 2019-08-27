import React from 'react';
import { PolarChart } from '../index';
import { rndDatasets } from '../../data/data';

export default {
  title: 'chartjs/PolarChart',
  component: PolarChart,
};

export const main = () => (
  <PolarChart
    data={{
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'Dataset 1',
          data: [94, 94, 97, 92, 96, 91, 99],
          opacity: 0.2,
        },
      ],
    }}
    options={{
      themedData: true,
      legend: {
        position: 'right',
      },
      scale: {
        ticks: {
          beginAtZero: true,
        },
        reverse: false,
      },
    }}
  />
);

export const options = () => (
  <PolarChart
    data={rndDatasets(1, { opacity: 0.2 }, true)}
    options={{
      themedData: true,
      legend: {
        position: 'right',
      },
      scale: {
        ticks: {
          beginAtZero: true,
        },
        reverse: false,
      },
    }}
  />
);
