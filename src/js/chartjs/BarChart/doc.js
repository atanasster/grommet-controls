import { describe } from 'react-desc';

export default (Element) => {
  const DocumentedElement = describe(Element)
    .description(
      `Bar chart wrapper to chart.js Bar with grommet theming.
       For all standard charting options, consult the chart.js docs
      `
    ).usage(`
      $ npm install grommet-controls\n 
      import { BarChart } from 'grommet-controls/chartjs';\n
      <BarChart data={...} options={...} />
    `);
  return DocumentedElement;
};
