import { describe } from 'react-desc';

export default (Element) => {
  const DocumentedElement = describe(Element)
    .description(
      `Pie chart wrapper to chart.js Pie with grommet theming.
       For all standard charting options, consult the chart.js docs
      `
    ).usage(`
      $ npm install grommet-controls\n 
      import { PieChart } from 'grommet-controls/chartjs';\n
      <PieChart data={...} options={...} />
    `);
  return DocumentedElement;
};
