import { describe, PropTypes } from 'react-desc';

export default (Element) => {
  const DocumentedElement = describe(Element)
    .description(
      `A password field with show/hide password toggle.
      All properties of DropInput apply
      `
    ).usage(`
      $ npm install grommet-controls\n 
      import { PasswordInput } from 'grommet-controls';\n
      <PasswordInput value={...} />
    `);

  DocumentedElement.propTypes = {
    a11yViewPassword: PropTypes.string.description('Custom view password title to be used by screen readers.'),
    a11yHidePassword: PropTypes.string.description('Custom view password title to be used by screen readers.'),
    viewIcon: PropTypes.element.description('Icon to view the password.'),
    hideIcon: PropTypes.element.description('Icon to hide the password.'),
  };

  return DocumentedElement;
};
