import { describe } from 'react-desc';

export default (Element) => {
  const DocumentedElement = describe(Element)
    .description(
      `Doughnut chart wrapper to chart.js Doughnut with grommet theming.
       For all standard charting options, consult the chart.js docs
      `
    ).usage(`
      $ npm install grommet-controls\n 
      import { DoughnutChart } from 'grommet-controls/chartjs';\n
      <DoughnutChart data={...} options={...} />
    `);
  return DocumentedElement;
};
