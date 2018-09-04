import { describe } from 'react-desc';

export default (Element) => {
  const DocumentedElement = describe(Element)
    .description(
      `Polar chart wrapper to chart.js Polar with grommet theming.
       For all standard charting options, consult the chart.js docs
      `
    ).usage(`
      $ npm install grommet-controls\n 
      import { PolarChart } from 'grommet-controls';\n
      <PolarChart data={...} options={...} />
    `);
  return DocumentedElement;
};
