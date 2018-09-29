import { describe, PropTypes } from 'react-desc';

export default (Element) => {
  const DocumentedElement = describe(Element)
    .description('A tag control with a label and icon.')
    .usage(
      `$ npm install grommet-controls\n
    import { VerticalMenu } from 'grommet-controls';\n
    <VerticalMenu items={...} onSelect={...} />`
    );

  DocumentedElement.propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.description('Unique id'),
        label: PropTypes.node.description('Label of the item'),
        expanded: PropTypes.bool.description('Initial expanded state'),
        icon: PropTypes.node.description('Icon in front of the label'),
        widget: PropTypes.node.description('Widget or icon to place at the end of the item'),
      })
    ).description('Array of menu items.'),
    activeItem: PropTypes.shape({
      id: PropTypes.string,
    }).description('Initially active menu item.'),
    buttonClass: PropTypes.oneOfType([PropTypes.string, PropTypes.func]).description('Custom class to use for the button instead of RoutedButton.'),
    expandAll: PropTypes.bool.description(
      'If specified, will expand all items with chidren.'
    ),
    onSelect: PropTypes.func.description(
      'Function that will be called when the user selects a menu item.'
    ),
  };

  return DocumentedElement;
};
