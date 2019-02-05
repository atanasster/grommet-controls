import { describe, PropTypes } from 'react-desc';

export default (Element) => {
  const DocumentedElement = describe(Element)
    .description(
      `A Button with a hover effect, all properties of Button apply.
      `
    ).usage(`
      $ npm install grommet-controls\n 
      import { IconButton } from 'grommet-controls';\n
      <IconButton icon='...' />
    `);

  DocumentedElement.propTypes = {
    icon: PropTypes.element.description('Icon element to place in the button.'),
  };

  return DocumentedElement;
};
