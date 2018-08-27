import { describe, PropTypes } from 'react-desc';

export default (Element) => {
  const DocumentedElement = describe(Element)
    .description(
      `A masked color entry field, with a drop button to select a color.
      All properties of MaskedInput apply
      `
    ).usage(`
      $ npm install grommet-controls\n 
      import { ColorInput } from 'grommet-controls';\n
      <ColorInput colors={...} value={...} />
    `);

  DocumentedElement.propTypes = {
    colors: PropTypes.object.isRequired.description('Color palette for the user to choose a color from.'),
  };

  return DocumentedElement;
};
