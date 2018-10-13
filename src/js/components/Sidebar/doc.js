import { describe, PropTypes } from 'react-desc';

export default (Element) => {
  const DocumentedElement = describe(Element)
    .description('Collapsible side bar component.')
    .usage(
      `$ npm install grommet-controls\n
    import { Sidebar } from 'grommet-controls';\n
    <Sidebar title='My title'>\n
        ...
    </Sidebar>
`
    );

  DocumentedElement.propTypes = {
    title: PropTypes.node.description('Title string or any react node.'),
    width: PropTypes.string.description('The width of the side bar.').defaultValue('medium'),
    collapsible: PropTypes.bool.description('Whether the sidebar can be collapsed.').defaultValue(true),
  };

  return DocumentedElement;
};
