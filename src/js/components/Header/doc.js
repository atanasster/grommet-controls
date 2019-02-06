import { describe, PropTypes } from 'react-desc';

export default (Element) => {
  const DocumentedElement = describe(Element)
    .description(
      `A page header component.
      `
    ).usage(`
      $ npm install grommet-controls\n 
      import { Header } from 'grommet-controls';\n
      <Header>
        ...
      </Header>  
    `);

  DocumentedElement.propTypes = {
    position: PropTypes.oneOf(['fixed', 'absolute', 'sticky', 'static', 'relative']).description('Position property for the header element').defaultValue('relative'),
    zIndex: PropTypes.number
      .description('z-index for the header.')
      .defaultValue(10),
  };

  return DocumentedElement;
};
