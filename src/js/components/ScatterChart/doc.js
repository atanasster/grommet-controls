import { describe } from 'react-desc';

export default (Element) => {
  const DocumentedElement = describe(Element)
    .description(
      `Scatter chart wrapper to chart.js Scatter with grommet theming.
       For all standard charting options, consult the chart.js docs
      `
    ).usage(`
      $ npm install grommet-controls\n 
      import { ScatterChart } from 'grommet-controls';\n
      <ScatterChart data={...} options={...} />
    `);
  return DocumentedElement;
};
