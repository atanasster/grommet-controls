import { describe, PropTypes } from 'react-desc';

export default (Select) => {
  const DocumentedSelect = describe(Select)
    .description(
      'A multi-select clone of Grommet 2 Select.'
    ).usage(`
    $ npm install grommet-controls 
    import { Multiselect } from 'grommet-controls';
    <Multiselect />
    `);

  DocumentedSelect.propTypes = {
    multiple: PropTypes.bool.description('Whether to allow multiple options to be selected.'),
    label: PropTypes.func.description('A function to render the selected items. `({ placeholder, value, onChange }) => {}`'),
  };

  return DocumentedSelect;
};
