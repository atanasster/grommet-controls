import { describe } from 'react-desc';

export default (Element) => {
  const DocumentedElement = describe(Element)
    .description(
      `Radar chart wrapper to chart.js Radar with grommet theming.
       For all standard charting options, consult the chart.js docs
      `
    ).usage(`
      $ npm install grommet-controls\n 
      import { RadarChart } from 'grommet-controls/chartjs';\n
      <RadarChart data={...} options={...} />
    `);
  return DocumentedElement;
};
