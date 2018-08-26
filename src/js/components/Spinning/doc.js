import { describe, PropTypes } from 'react-desc';

export default (Element) => {
  const DocumentedElement = describe(Element)
    .description('A spinning process indicator.'
    ).usage(`
      $ npm install grommet-controls\n 
      import { Spinning } from 'grommet-controls';\n
      <Spinning />
    `);

  DocumentedElement.propTypes = {
    kind: PropTypes.oneOf(['circle', 'pulse', 'three-bounce', 'cube-grid', 'wave', 'folding-cube',
      'double-bounce', 'wandering-cubes', 'chasing-dots', 'rotating-plane'])
      .description('Kind of spinner.').defaultValue('circle'),
    color: PropTypes.string.description('A color identifier to use for the spinning color.'),
    size: PropTypes.oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge']).description('A size for the spinning.'),
  };

  return DocumentedElement;
};
