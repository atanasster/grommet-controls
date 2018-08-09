import { describe, PropTypes } from 'react-desc';

export default (Element) => {
  const DocumentedElement = describe(Element)
    .description('A single value visualization with a label.')
    .usage(
      `$ npm install grommet-controls\n
    import { Value } from 'grommet-controls';\n
    <Value value={...} label={...} />`
    );

  DocumentedElement.propTypes = {
    label: PropTypes.string.description('Value label.'),
    color: PropTypes.string.description('The value color.'),
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.number])
      .description('The value.'),
    weight: PropTypes.oneOfType([PropTypes.oneOf(['normal', 'bold']), PropTypes.number])
    .description('Font weight.'),
    gap: PropTypes.oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge'])
    .description('Spacing between the value and the label.'),
    size: PropTypes.oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge', 'xxlarge'])
    .description('Value element size.'),
  };

  return DocumentedElement;
};
