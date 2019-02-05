import { describe, PropTypes } from 'react-desc';

export default (Element) => {
  const DocumentedElement = describe(Element)
    .description(
      `A small image stamp used for avatars or image thumbnails.
      `
    ).usage(`
      $ npm install grommet-controls\n 
      import { ImageStamp } from 'grommet-controls';\n
      <ImageStamp src='...' />
    `);

  DocumentedElement.propTypes = {
    contain: PropTypes.oneOf(['width', 'height']).description('Adjust width/heigh if image is not square. By default, the image is cut off square').defaultValue(null),
    round: PropTypes.oneOf(['xsmall', 'small', 'medium', 'large', 'full']).description(
      'How much to round the corners of the stamp.'
    ),
    size: PropTypes.oneOf(['small', 'medium', 'large', 'xlarge'])
      .description('The size of the image stamp.').defaultValue('medium'),
    plain: PropTypes.bool
      .description('Whether this is a plain image with no border.')
      .defaultValue(false),
  };

  return DocumentedElement;
};
