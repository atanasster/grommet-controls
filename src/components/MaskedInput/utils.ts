import { conformToMask } from 'text-mask-core';
import { IMaskProps, MaskType, IMaskObjectType } from './MaskedInputProps';

const strCaretTrap = '[]';

const processCaretTraps = (mask: string[]): string[] => {
  const indexes = [];

  let indexOfCaretTrap;
  while(indexOfCaretTrap = mask.indexOf(strCaretTrap), indexOfCaretTrap !== -1) { // eslint-disable-line
    indexes.push(indexOfCaretTrap);
    mask.splice(indexOfCaretTrap, 1);
  }
  return mask;
};

export const transformMaskedValue = (
  value: string | number,
  providedMask: MaskType,
  props: IMaskProps,
): string => {
  if (!providedMask) {
    return value.toString();
  }
  let { pipe } = props;
  let safeValue;
  if (value === undefined || value === null) {
    safeValue = '';
  } else {
    safeValue = value.toString();
  }
  let mask;
  if (
    typeof providedMask === 'object' &&
    (providedMask as IMaskObjectType).pipe !== undefined &&
    (providedMask as IMaskObjectType).mask !== undefined
  ) {
    // eslint-disable-next-line no-param-reassign
    providedMask = (providedMask as IMaskObjectType).mask;
    ({ pipe } = providedMask as IMaskObjectType);
  }
  if (typeof providedMask === 'function') {
    mask = providedMask(safeValue, { ...props, pipe });

    // disable masking if `mask` is `false`
    if (mask === false) {
      return safeValue;
    }
    // The processed mask is what we're interested in
    mask = processCaretTraps(mask);
    // If the `providedMask` is not a function, we just use it as-is.
  } else {
    mask = providedMask;
  }
  let conformedValue = safeValue;
  const {
    guide,
    placeholderChar,
    placeholder,
    currentCaretPosition,
    showMask,
    keepCharPositions,
  } = props;

  const conformToMaskConfig = {
    previousPlaceholder: placeholder,
    guide,
    placeholderChar,
    pipe,
    currentCaretPosition,
    keepCharPositions,
  };
  const conformed = conformToMask(safeValue, mask, conformToMaskConfig);
  if (conformed) {
    ({ conformedValue } = conformed);
  }
  if (typeof pipe === 'function') {
    const pipeResults = pipe(conformedValue, {
      rawValue: safeValue,
      ...conformToMaskConfig,
    });
    if (typeof pipeResults === 'string') {
      conformedValue = pipeResults;
    }
  }
  if (conformedValue === placeholder) {
    conformedValue = showMask ? placeholder : '';
  }
  return conformedValue;
};
