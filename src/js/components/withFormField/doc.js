import { describe, PropTypes } from 'react-desc';

export default (Element, Name) => {
  const DocumentedElement = describe(Element)
    .description('A CheckBox field with form validation.')
    .usage(
      `$ npm install grommet-controls\n
    import { Form, ${Name} } from 'grommet-controls';\n
    <Form>
      <${Name} name='xxx' label='xxx' validation={[validators.required()]} />
    </Form>  
`
    );

  DocumentedElement.propTypes = {
    name: PropTypes.string.description(
      'Name of the field.'
    ).defaultValue(false),
    label: PropTypes.string.description(
      'String label to be used for the field, will also be used in validation errors.'
    ).defaultValue(false),
    controlLabel: PropTypes.node.description(
      'To be used if the label is not a string, but a richer react element.'
    ).defaultValue(false),
    inField: PropTypes.bool.description(
      'Set to false if the field should not be placed inside a FormField.'
    ).defaultValue(true),
    validation: PropTypes.array.description(
      'Validation rules, will be chained.'
    ).defaultValue(false),
  };

  return DocumentedElement;
};

