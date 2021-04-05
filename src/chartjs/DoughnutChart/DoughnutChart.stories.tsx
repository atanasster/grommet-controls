import React from 'react';
import { Document, Example } from '@component-controls/core';
import { DoughnutChart } from './DoughnutChart';
import { rndDatasets } from '../data/data';

export default {
  title: 'chartjs/DoughnutChart',
  component: DoughnutChart,
} as Document;

export const main: Example = () => (
  <DoughnutChart
    data={{
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'Dataset 1',
          data: [-93, 45, 35, -33, 8, 88, -62],
        },
      ],
    }}
    options={{
      legend: {
        display: false,
      },
      themedData: true,
    }}
  />
);

export const animation: Example = () => (
  <DoughnutChart
    data={rndDatasets(1)}
    options={{
      themedData: true,
      animation: {
        animateScale: true,
        animateRotate: true,
      },
    }}
  />
);
