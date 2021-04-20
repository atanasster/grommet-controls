import { IMaskedInputProps } from '../MaskedInput/MaskedInputProps';
import { Omit } from '../../utils';

export type IEmailInputProps = Omit<
  IMaskedInputProps,
  'mask' | 'inputMode' | 'ref'
>;
