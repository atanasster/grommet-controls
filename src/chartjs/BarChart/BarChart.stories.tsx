import React from 'react';
import { BarChart } from './BarChart';
import { rndDatasets } from '../data/data';

export default {
  title: 'chartjs/BarChart',
  component: BarChart,
};

export const main = () => (
  <BarChart
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

export const multiAxis = () => (
  <BarChart
    data={rndDatasets(2, [{ yAxisID: 'y-axis-0' }, { yAxisID: 'y-axis-1' }])}
    options={{
      tooltips: {
        mode: 'index',
        intersect: true,
      },
      scales: {
        yAxes: [
          {
            type: 'linear',
            display: true,
            position: 'left',
            id: 'y-axis-0',
          },
          {
            type: 'linear',
            display: true,
            position: 'right',
            id: 'y-axis-1',
            gridLines: {
              drawOnChartArea: false,
            },
          },
        ],
      },
    }}
  />
);

export const stacked = () => (
  <BarChart
    data={rndDatasets(3)}
    options={{
      tooltips: {
        mode: 'index',
        intersect: true,
      },
      scales: {
        xAxes: [
          {
            stacked: true,
          },
        ],
        yAxes: [
          {
            stacked: true,
          },
        ],
      },
    }}
  />
);

export const stackedGroup = () => (
  <BarChart
    data={rndDatasets(3, [
      { stack: 'stack-1' },
      { stack: 'stack-2' },
      { stack: 'stack-1' },
    ])}
    options={{
      tooltips: {
        mode: 'index',
        intersect: true,
      },
      scales: {
        xAxes: [
          {
            stacked: true,
          },
        ],
        yAxes: [
          {
            stacked: true,
          },
        ],
      },
    }}
  />
);

export const mixedLine = () => (
  <BarChart
    data={rndDatasets(2, [{ type: 'line', fill: false }, { type: 'bar' }])}
  />
);
