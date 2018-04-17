import { describe, PropTypes } from 'react-desc';
import { a11yTitlePropType } from 'grommet/utils';

export default (Element) => {
  const DocumentedElement = describe(Element)
    .description(
      `A Form with built-in validation.
      `
    ).usage(`
      $ npm install grommet-controls\n 
      import { Form } from 'grommet-controls';\n
      <Form onSubmit={...} />
    `);

  DocumentedElement.propTypes = {
    a11yTitle: a11yTitlePropType,
    basis: PropTypes.oneOf([
      'xsmall', 'small', 'medium', 'large', 'xlarge', 'full',
      '1/2', '1/3', '2/3', '1/4', '3/4', 'auto',
    ]).description('A fixed or relative size along the form\'s container main axis.'),
    focusFirstChild: PropTypes.bool.description('Whether to focus the first form control on mounting.').defaultValue('true'),
    object: PropTypes.object.description('Initial values of the form data object.'),
    onSubmit: PropTypes.func.description('A function called when the user successfully submits the form.'),
    onChange: PropTypes.func.description('A function invoked when any of the values in the form are changing.'),
    onSubmitError: PropTypes.func.description('A function invoked when an error occured during submitting.'),
    onInvalidForm: PropTypes.func.description('A function invoked on every change when the form is invalid.'),
    tag: PropTypes.string.description('The DOM tag to use for the form.').defaultValue('form'),
  };

  return DocumentedElement;
};
