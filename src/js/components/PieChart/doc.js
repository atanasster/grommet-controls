import { describe } from 'react-desc';
import chartjsDoc from '../withChartTheme/doc';

export default (Element) => {
  const DocumentedElement = describe(Element)
    .description(
      `Pie chart wrapper to chart.js Pie with grommet theming.
       For all standard charting options, consult the chart.js docs
      `
    ).usage(`
      $ npm install grommet-controls\n 
      import { PieChart } from 'grommet-controls';\n
      <PieChart data={...} options={...} />
    `);
  chartjsDoc(DocumentedElement);
  return DocumentedElement;
};
