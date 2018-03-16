import { describe, PropTypes } from 'react-desc';
import { a11yTitlePropType } from 'grommet/utils';

export default (Element) => {
  const DocumentedElement = describe(Element)
    .description(
      `A Form with built-in validation.
      `
    ).usage(`
      $ npm install grommet-controls \n 
      import { Form } from 'grommet-controls'; \n
      <Form onSubmit={...} />
    `);

  DocumentedElement.propTypes = {
    a11yTitle: a11yTitlePropType,
    onSubmit: PropTypes.func.description('A function called when the user successfully submits the form.'),
    onChange: PropTypes.func.description('A function invoked when any of the values in the form are changing.'),
    onSubmitError: PropTypes.func.description('A function invoked when an error occured during submitting.'),
    onInvalidForm: PropTypes.func.description('A function invoked on every change when the form is invalid.'),
  };

  return DocumentedElement;
};
