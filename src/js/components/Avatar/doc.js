import { describe, PropTypes } from 'react-desc';

export default (Element) => {
  const DocumentedElement = describe(Element)
    .description(
      `An image with some text, can be used as a user Avatar image.
      `
    ).usage(`
      $ npm install grommet-controls\n 
      import { Avatar } from 'grommet-controls';\n
      <Avatar image='...' />
    `);

  DocumentedElement.propTypes = {
    image: PropTypes.string.isRequired.description('Image to be displayed.'),
    title: PropTypes.string.description('Main title(name) for the Avatar.'),
    subTitle: PropTypes.string.isRequired.description('Secondary title for the Avatar.'),
  };
  return DocumentedElement;
};
