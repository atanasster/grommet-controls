import { describe } from 'react-desc';

export default (Element) => {
  const DocumentedElement = describe(Element)
    .description(
      `Line chart wrapper to chart.js Line with grommet theming.
       For all standard charting options, consult the chart.js docs
      `
    ).usage(`
      $ npm install grommet-controls\n 
      import { LineChart } from 'grommet-controls';\n
      <LineChart data={...} options={...} />
    `);
  return DocumentedElement;
};
