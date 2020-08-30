import React from 'react';
import { Box, Text } from 'grommet';
import { LineChart } from './LineChart';
import { colorFromIndex } from '../../utils';
import {
  rndDatasets,
  rndDatasets2d,
  rndRange,
  timeFormat,
  daysAfterStr,
  daysAfter,
  rndTimeSerie,
} from '../data/data';
import { ChartjsPointStyleType } from '../withChartTheme/withChartThemeProps';

export default {
  title: 'chartjs/LineChart',
  component: LineChart,
};

export const main = () => (
  <LineChart
    data={{
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'Dataset 1',
          data: [-40, 92, -44, -75, -65, -89, 78],
          fill: false,
        },
        {
          label: 'Dataset 2',
          data: [-78, -21, -43, 70, 11, -91, -63],
          fill: false,
        },
      ],
    }}
  />
);

export const title = () => (
  <LineChart
    data={rndDatasets(2, { fill: false })}
    options={{
      title: {
        display: true,
        text: 'Title of chart',
      },
    }}
  />
);

export const multiAxis = () => (
  <LineChart
    data={rndDatasets(2, [
      { yAxisID: 'y-axis-0', fill: false },
      { yAxisID: 'y-axis-1', fill: false },
    ])}
    options={{
      legend: { position: 'right' },
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

export const steppedTrue = () => (
  <LineChart data={rndDatasets(1, { steppedLine: true, fill: false })} />
);

export const steppedBefore = () => (
  <LineChart data={rndDatasets(1, { steppedLine: 'before', fill: false })} />
);

export const steppedAfter = () => (
  <LineChart data={rndDatasets(1, { steppedLine: 'after', fill: false })} />
);

export const lineStyle = () => (
  <LineChart
    data={rndDatasets(3, [
      { label: 'Unfilled', fill: false },
      { label: 'Dashed', fill: false, borderDash: [5, 5] },
      { label: 'Filled', fill: true, color: 'accent-4' },
    ])}
  />
);

export const pointStyle = () => (
  <Box fill="horizontal" gap="medium">
    {[
      'circle',
      'triangle',
      'rect',
      'rectRounded',
      'rectRot',
      'cross',
      'crossRot',
      'star',
      'line',
      'dash',
    ].map((style, i) => (
      <Box key={`line_styles_${style}`}>
        <Text>{`Point style : "${style}"`}</Text>
        <LineChart
          data={rndDatasets(1, [
            {
              pointRadius: 10,
              pointHoverRadius: 15,
              showLine: false,
              color: colorFromIndex(i),
            },
          ])}
          options={{
            legend: {
              display: false,
            },
            elements: {
              point: {
                pointStyle: style as ChartjsPointStyleType,
              },
            },
          }}
        />
      </Box>
    ))}
  </Box>
);

export const pointSizes = () => (
  <LineChart
    data={rndDatasets(3, [
      {
        label: 'big points',
        color: 'neutral-1',
        fill: false,
        borderDash: [5, 5],
        pointRadius: 15,
        pointHoverRadius: 10,
      },
      {
        label: 'individual point sizes',
        color: 'neutral-2',
        fill: false,
        borderDash: [5, 5],
        pointRadius: [2, 4, 6, 18, 0, 12, 20, 8, 2, 5, 15, 10],
      },
      {
        label: 'large pointHoverRadius',
        color: 'neutral-3',
        fill: false,
        pointHoverRadius: 20,
      },
    ])}
    options={{
      hover: {
        mode: 'index',
      },
    }}
  />
);

export const areaFill = () => (
  <Box fill="horizontal" gap="medium">
    {[false, 'origin', 'start', 'end'].map((boundary, i) => (
      <Box key={`line_area_fill_${boundary}`}>
        <Text>{`Line fill=${boundary}`}</Text>
        <LineChart
          data={rndDatasets(1, [
            {
              fill: boundary,
              color: colorFromIndex(i),
            },
          ])}
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
            scales: {
              xAxes: [
                {
                  ticks: {
                    autoSkip: false,
                  },
                },
              ],
            },
          }}
        />
      </Box>
    ))}
  </Box>
);

export const areaStacked = () => (
  <LineChart
    data={rndDatasets(3, { opacity: 0.9 })}
    options={{
      tooltips: {
        mode: 'index',
      },
      hover: {
        mode: 'index',
      },
      scales: {
        xAxes: [
          {
            scaleLabel: {
              display: true,
              labelString: 'Month',
            },
          },
        ],
        yAxes: [
          {
            stacked: true,
            scaleLabel: {
              display: true,
              labelString: 'Value',
            },
          },
        ],
      },
    }}
  />
);

export const mixedScatterLine = () => (
  <LineChart
    data={rndDatasets2d(2, [{ showLine: false, fill: false }, { fill: false }])}
    options={{
      tooltips: {
        mode: 'index',
        intersect: true,
      },
    }}
  />
);

export const linearScaleStepSize = () => (
  <LineChart
    data={rndDatasets(2, { fill: false }, true)}
    options={{
      tooltips: {
        mode: 'index',
        intersect: false,
      },
      hover: {
        mode: 'nearest',
        intersect: true,
      },
      scales: {
        xAxes: [
          {
            display: true,
            scaleLabel: {
              display: true,
              labelString: 'Month',
            },
          },
        ],
        yAxes: [
          {
            display: true,
            scaleLabel: {
              display: true,
              labelString: 'Value',
            },
            ticks: {
              min: 70,
              max: 110,
              stepSize: 5,
            },
          },
        ],
      },
    }}
  />
);

export const linearScaleSuggestedMinMax = () => (
  <LineChart
    data={rndDatasets(2, { fill: false }, true)}
    options={{
      scales: {
        yAxes: [
          {
            ticks: {
              // the data minimum for determining the ticks is Math.min(dataMin, suggestedMin)
              suggestedMin: 60,
              // the data maximum for determining the ticks is Math.max(dataMax, suggestedMax)
              suggestedMax: 80,
            },
          },
        ],
      },
    }}
  />
);

export const logarithmicScale = () => (
  <LineChart
    data={rndDatasets(2, { fill: false }, true)}
    options={{
      scales: {
        xAxes: [
          {
            display: true,
          },
        ],
        yAxes: [
          {
            display: true,
            type: 'logarithmic',
          },
        ],
      },
    }}
  />
);

export const timeScale = () => (
  <LineChart
    data={{
      labels: [
        // Date Objects
        daysAfter(0),
        daysAfter(1),
        daysAfter(2),
        daysAfter(3),
        daysAfter(4),
        daysAfter(5),
        daysAfter(6),
      ],
      datasets: [
        {
          label: 'labels data',
          fill: false,
          data: [
            rndRange(),
            rndRange(),
            rndRange(),
            rndRange(),
            rndRange(),
            rndRange(),
            rndRange(),
          ],
        },
        {
          label: 'point (x,y) data',
          fill: false,
          data: [
            {
              x: daysAfterStr(0),
              y: rndRange(),
            },
            {
              x: daysAfterStr(5),
              y: rndRange(),
            },
            {
              x: daysAfterStr(7),
              y: rndRange(),
            },
            {
              x: daysAfterStr(10),
              y: rndRange(),
            },
          ],
        },
      ],
    }}
    options={{
      scales: {
        xAxes: [
          {
            type: 'time',
            time: {
              format: timeFormat,
              // round: 'day'
              tooltipFormat: 'll HH:mm',
            },
            scaleLabel: {
              display: true,
              labelString: 'Date',
            },
          },
        ],
        yAxes: [
          {
            scaleLabel: {
              display: true,
              labelString: 'value',
            },
          },
        ],
      },
    }}
  />
);

export const timeSeries = () => (
  <LineChart
    data={{
      datasets: [
        {
          label: 'Closing price',
          data: rndTimeSerie(),
          type: 'line',
          pointRadius: 0,
          fill: false,
          lineTension: 0,
          borderWidth: 2,
        },
      ],
    }}
    options={{
      scales: {
        xAxes: [
          {
            type: 'time',
            distribution: 'series',
          },
        ],
        yAxes: [
          {
            scaleLabel: {
              display: true,
              labelString: 'Price ($)',
            },
          },
        ],
      },
    }}
  />
);
