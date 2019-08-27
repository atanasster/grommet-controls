import React from 'react';
import { ScatterChart } from '../index';
import { rndDatasets2d } from '../../data/data';

export default {
  title: 'chartjs/ScatterChart',
  component: ScatterChart,
};

export const main = () => (
  <ScatterChart
    data={{
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'Dataset 1',
          data: [
            { 'x': -74, 'y': 60 },
            { 'x': -42, 'y': -96 },
            { 'x': -67, 'y': -19 },
            { 'x': 26, 'y': 77 },
            { 'x': 64, 'y': -61 },
            { 'x': -58, 'y': -71 },
            { 'x': 99, 'y': -47 },
          ],
        },
        {
          label: 'Dataset 2',
          data: [
            { 'x': -8, 'y': 36 },
            { 'x': -84, 'y': -30 },
            { 'x': 71, 'y': -86 },
            { 'x': -91, 'y': 68 },
            { 'x': 89, 'y': -59 },
            { 'x': -73, 'y': -20 },
            { 'x': 32, 'y': 17 },
          ],
        },
      ],
    }}
  />
);

export const data = () => (
  <ScatterChart
    data={rndDatasets2d()}
  />
);

export const multiAxis = () => (
  <ScatterChart
    data={rndDatasets2d(2, [{ yAxisID: 'y-axis-0' }, { yAxisID: 'y-axis-1' }])}
    options={{
      hoverMode: 'nearest',
      intersect: true,
      tooltips: {
        mode: 'index',
        intersect: true,
      },
      scales: {
        xAxes: [{
          position: 'bottom',
          gridLines: {
            zeroLineColor: 'rgba(0,0,0,1)',
          },
        }],
        yAxes: [{
          type: 'linear',
          display: true,
          position: 'left',
          id: 'y-axis-0',
        }, {
          type: 'linear',
          display: true,
          position: 'right',
          reverse: true,
          id: 'y-axis-1',
          gridLines: {
            drawOnChartArea: false,
          },
        }],
      },
    }}
  />
);


export const logarithmicScale = () => (
  <ScatterChart
    data={rndDatasets2d(1)}
    options={{
      scales: {
        xAxes: [{
          type: 'logarithmic',
          position: 'bottom',
          ticks: {
            userCallback(tick) {
              const remain = tick / (10 ** Math.floor(Math.log10(tick)));
              if (remain === 1 || remain === 2 || remain === 5) {
                return `${tick.toString()} y`;
              }
              return '';
            },
          },
          scaleLabel: {
            labelString: 'x-axis',
            display: true,
          },
        }],
        yAxes: [{
          type: 'linear',
          ticks: {
            userCallback(tick) {
              return `${tick.toString()} units`;
            },
          },
          scaleLabel: {
            labelString: 'y-axis',
            display: true,
          },
        }],
      },
    }}
  />
);
