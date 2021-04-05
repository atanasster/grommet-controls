import React from 'react';
import { Document, Example } from '@component-controls/core';
import { PieChart } from './PieChart';
import { rndDatasets } from '../data/data';

export default {
  title: 'chartjs/PieChart',
  component: PieChart,
} as Document;

export const main: Example = () => (
  <PieChart
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

export const themedData: Example = () => (
  <PieChart
    data={rndDatasets(1)}
    options={{
      themedData: true,
    }}
  />
);
