import React from 'react';
import { Document, Example } from '@component-controls/core';
import { HorizontalBarChart } from './HorizontalBarChart';
import { rndDatasets } from '../data/data';

export default {
  title: 'chartjs/HorizontalBarChart',
  component: HorizontalBarChart,
} as Document;

export const main: Example = () => (
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

export const title: Example = () => (
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
