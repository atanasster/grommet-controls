import React from 'react';
import { PieChart } from '../index';
import { rndDatasets } from '../../data/data';

export default {
  title: 'chartjs/PieChart',
  component: PieChart,
};

export const main = () => (
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

export const themedData = () => (
  <PieChart
    data={rndDatasets(1)}
    options={{
      themedData: true,
    }}
  />
);

