import { describe } from 'react-desc';
import chartjsDoc from '../withChartTheme/doc';

export default (Element) => {
  const DocumentedElement = describe(Element)
    .description(
      `Doughnut chart wrapper to chart.js Doughnut with grommet theming.
       For all standard charting options, consult the chart.js docs
      `
    ).usage(`
      $ npm install grommet-controls\n 
      import { DoughnutChart } from 'grommet-controls';\n
      <DoughnutChart data={...} options={...} />
    `);
  chartjsDoc(DocumentedElement);
  return DocumentedElement;
};
