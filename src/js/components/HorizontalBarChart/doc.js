import { describe } from 'react-desc';
import chartjsDoc from '../withChartTheme/doc';

export default (Element) => {
  const DocumentedElement = describe(Element)
    .description(
      `HorizontalBar chart wrapper to chart.js HorizontalBar with grommet theming.
       For all standard charting options, consult the chart.js docs
      `
    ).usage(`
      $ npm install grommet-controls\n 
      import { HorizontalBarChart } from 'grommet-controls';\n
      <HorizontalBarChart data={...} options={...} />
    `);
  chartjsDoc(DocumentedElement);
  return DocumentedElement;
};
