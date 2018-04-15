import { describe, PropTypes } from 'react-desc';

export default (Element) => {
  const DocumentedElement = describe(Element)
    .description(
      `A small image stamp used for avatars or image thumbnails.
      `
    ).usage(`
      $ npm install grommet-controls \n 
      import { ImageStamp } from 'grommet-controls'; \n
      <ImageStamp src='...' />
    `);

  DocumentedElement.propTypes = {
    round: PropTypes.oneOf(['xsmall', 'small', 'medium', 'large', 'full']).description(
      'How much to round the corners of the stamp.'
    ),
    size: PropTypes.oneOf(['small', 'medium', 'large', 'xlarge', 'xxlarge'])
      .description('The size of the image stamp.').defaultValue('large'),
  };

  return DocumentedElement;
};
