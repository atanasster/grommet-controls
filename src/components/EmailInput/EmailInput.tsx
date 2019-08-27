import React from 'react';
import { MaskedInput } from '../MaskedInput';
import { IEmailInputProps } from './EmailInputProps';

/**
 * A masked input with a default mask for handling email addresses<br/>
 * All properties of MaskedInput apply<br/>
 * `import { EmailInput } from 'grommet-controls';`<br/>
 * `<EmailInput value={...} />`<br/>
 */
const EmailInput = (props: IEmailInputProps) => (
  <MaskedInput
    mask={MaskedInput.emailMask}
    inputMode='email'
    {...props}
  />
  );

export { EmailInput };
