import React from 'react';
import { RadarChart } from '../RadarChart';
import { rndDatasets } from '../../data/data';

export default {
  title: 'chartjs/RadarChart',
  component: RadarChart,
};

export const main = () => (
  <RadarChart
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
      scale: {
        ticks: {
          beginAtZero: true,
        },
      },
    }}
  />
);

export const options = () => (
  <RadarChart
    data={rndDatasets(2, { opacity: 0.2 }, true)}
    options={{
      scale: {
        ticks: {
          beginAtZero: true,
        },
      },
    }}
  />
);

export const lineTenstion = () => (
  <RadarChart
    data={rndDatasets(
      5,
      [
        { label: 'fill: false ', fill: false },
        { label: 'fill: "-1"', fill: '-1', hidden: true },
        { label: 'fill: 1', fill: 1 },
        { label: 'fill: false', fill: false },
        { label: 'no fill' },
      ],
      true,
    )}
    options={{
      elements: {
        line: {
          tension: 0.000001,
        },
      },
      plugins: {
        filler: {
          propagate: false,
        },
      },
    }}
  />
);
